import { useRef, useState, useSyncExternalStore } from "react"
import { Switch, SwitchThumb } from "@ui-sdk/react/switch"
import { agent, confirmStore, type Answer } from "./agent"
import { scripts, type Script } from "./scripts"
import { runLive, type ChatMessage } from "./live"

type Entry =
  | { kind: "user"; text: string }
  | { kind: "say"; text: string }
  | { kind: "tool"; text: string; ok: boolean | null }
  | { kind: "note"; text: string }

const wait = (ms: number) => new Promise((r) => setTimeout(r, ms))

export function AgentPanel() {
  const [entries, setEntries] = useState<Entry[]>([
    { kind: "say", text: "I can walk you through this day. I move the page myself, but I'll ask you first." },
  ])
  const [busy, setBusy] = useState(false)
  const [live, setLive] = useState(false)
  const [draft, setDraft] = useState("")
  const history = useRef<ChatMessage[]>([])
  const abort = useRef<AbortController | null>(null)
  const pending = useSyncExternalStore(confirmStore.subscribe, confirmStore.get)

  const push = (e: Entry) => setEntries((xs) => [...xs, e])
  const settleLastTool = (ok: boolean) =>
    setEntries((xs) => {
      const i = xs.findLastIndex((x) => x.kind === "tool" && x.ok === null)
      if (i < 0) return xs
      const copy = xs.slice()
      copy[i] = { ...(copy[i] as Extract<Entry, { kind: "tool" }>), ok }
      return copy
    })

  async function play(script: Script) {
    setBusy(true)
    push({ kind: "user", text: script.prompt })
    for (const part of script.parts) {
      await wait(450)
      if ("say" in part) push({ kind: "say", text: part.say })
      else {
        push({ kind: "tool", text: part.act.map((s) => `${s.ref} · ${s.action}(${(s.args ?? []).join(", ")})`).join(" → "), ok: null })
        const res = await agent.act({ steps: part.act })
        settleLastTool(res.ok)
        if (!res.ok) {
          push({ kind: "say", text: "Understood — I'll leave the page as it is." })
          break
        }
      }
    }
    setBusy(false)
  }

  async function ask(text: string) {
    if (!text.trim()) return
    setBusy(true)
    setDraft("")
    push({ kind: "user", text })
    abort.current = new AbortController()
    try {
      history.current = await runLive(
        [...history.current, { role: "user", content: text }],
        (e) => {
          if (e.kind === "say") push({ kind: "say", text: e.text })
          else if (e.kind === "tool") push({ kind: "tool", text: e.summary, ok: null })
          else settleLastTool(e.ok)
        },
        abort.current.signal,
      )
    } catch (err) {
      push({ kind: "note", text: `${(err as Error).message} The replays above still work.` })
    }
    setBusy(false)
  }

  return (
    <aside className="agent" aria-label="Ask the day">
      <header className="agent-head">
        <h2>Ask the day</h2>
        <label className="toggle" data-agent-hidden>
          <Switch className="switch" checked={live} onCheckedChange={(v: boolean) => setLive(v)}>
            <SwitchThumb className="switch-thumb" />
          </Switch>
          Live model
        </label>
      </header>
      <p className="agent-mode">
        {live
          ? "DeepSeek, live via OpenRouter. It drives this page through the same tools and asks you the same way."
          : "Replays: the words are scripted, the page actions are real."}
      </p>

      <ol className="agent-log" aria-live="polite">
        {entries.map((e, i) => (
          <li key={i} className={`msg msg-${e.kind}`} data-ok={e.kind === "tool" ? String(e.ok) : undefined}>
            {e.kind === "tool" ? (
              <>
                <span className="msg-tool-label">act</span> {e.text}
                <span className="msg-tool-state">{e.ok === null ? "waiting…" : e.ok ? "done" : "refused"}</span>
              </>
            ) : (
              e.text
            )}
          </li>
        ))}
      </ol>

      {pending && <ConfirmCard text={pending.text} onAnswer={(a) => pending.resolve(a)} />}

      {live ? (
        <form
          className="agent-form"
          onSubmit={(e) => {
            e.preventDefault()
            ask(draft)
          }}
        >
          <label className="sr-only" htmlFor="agent-input">
            Ask about the day
          </label>
          <input
            id="agent-input"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="What did the bots learn tonight?"
            maxLength={400}
            disabled={busy}
            autoComplete="off"
            data-agent-hidden
          />
          <button type="submit" disabled={busy || !draft.trim()}>
            Ask
          </button>
        </form>
      ) : (
        <div className="agent-prompts" data-agent-hidden>
          {scripts.map((s) => (
            <button key={s.prompt} type="button" disabled={busy} onClick={() => play(s)}>
              {s.prompt}
            </button>
          ))}
        </div>
      )}
    </aside>
  )
}

function ConfirmCard({ text, onAnswer }: { text: string; onAnswer: (a: Answer) => void }) {
  return (
    <div className="confirm" role="alertdialog" aria-label="The agent is asking" data-agent-hidden>
      <p className="confirm-q">
        <span>The agent wants to</span> {text.charAt(0).toLowerCase() + text.slice(1)}.
      </p>
      <div className="confirm-actions">
        <button type="button" autoFocus onClick={() => onAnswer("once")}>
          Allow once
        </button>
        <button type="button" onClick={() => onAnswer("visit")}>
          Allow for this visit
        </button>
        <button type="button" className="ghost" onClick={() => onAnswer("no")}>
          No
        </button>
      </div>
    </div>
  )
}
