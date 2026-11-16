// The agent bridge: one per page, created before React renders so it sees
// every ui-sdk component as it mounts. Both the scripted replays and the live
// model drive the page through this object — never through the DOM.
import { createAgent, registerTools, type AgentAction } from "@ui-sdk/react/agent"

export type Ask = { id: number; text: string; resolve: (answer: Answer) => void }
export type Answer = "once" | "visit" | "no"

// ── confirm queue — the panel renders `current`, the bridge awaits its answer ──
let current: Ask | null = null
let seq = 0
const listeners = new Set<() => void>()
const emit = () => listeners.forEach((l) => l())

export const confirmStore = {
  subscribe(l: () => void) {
    listeners.add(l)
    return () => listeners.delete(l)
  },
  get: () => current,
}

function ask(text: string, signal: AbortSignal): Promise<Answer> {
  return new Promise((resolve) => {
    const id = ++seq
    const done = (a: Answer) => {
      if (current?.id === id) {
        current = null
        emit()
      }
      resolve(a)
    }
    signal.addEventListener("abort", () => done("no"), { once: true })
    current = { id, text, resolve: done }
    emit()
  })
}

// ── the policy ────────────────────────────────────────────────────────────────
// Granted for the rest of this visit after the person picks "Allow for this visit".
let grantedForVisit = false

/** One sentence the person reads before deciding. */
export function describe(step: AgentAction): string {
  if (step.confirm) return step.confirm
  const what = step.label ?? step.component
  if (step.action === "setValue" && what === "Time of day") return `Move the day to ${toClock(Number(step.args[0]))}`
  if (step.action === "setChecked") return `${step.args[0] ? "Turn on" : "Turn off"} “${what}”`
  if (step.action === "press") return `Press “${String(step.args[0] ?? what)}”`
  return `${step.action} on “${what}”`
}

/**
 * Should this step wait for the person?
 *
 * This is the page's whole stance on agency in one function. The default asks
 * once, then trusts the agent for the rest of the visit — but anything marked
 * `data-agent-confirm` (a real, outward action) is always asked, every time.
 */
export function needsPerson(step: AgentAction): boolean {
  if (step.confirm) return true
  return !grantedForVisit
}

export const agent = createAgent({
  timeout: 60_000,
  allow: async (step, { signal }) => {
    if (!needsPerson(step)) return true
    const answer = await ask(describe(step), signal)
    if (answer === "visit" && !step.confirm) grantedForVisit = true
    return answer !== "no"
  },
})

// Browsers with WebMCP (Chrome's built-in agent) get the same tools and the same policy.
registerTools(agent, {
  allow: async (step, { signal }) => (await ask(`A browser agent wants to: ${describe(step)}`, signal)) !== "no",
})

export function toClock(minutes: number): string {
  const m = Math.max(0, Math.min(1439, Math.round(minutes)))
  return `${String(Math.floor(m / 60)).padStart(2, "0")}:${String(m % 60).padStart(2, "0")}`
}

export function toMinutes(clock: string): number {
  const [h, m] = clock.split(":").map(Number)
  return h * 60 + m
}

// Handy for the curious: open the console and try `agent.snapshot()`.
Object.assign(window, { agent })
