// Live mode: the model runs on the server (key never reaches the browser), the
// tools run here, on this page, through the same bridge and permission policy.
import { agentTools } from "@ui-sdk/react/agent"
import { agent } from "./agent"

export type ChatMessage =
  | { role: "user"; content: string }
  | { role: "assistant"; content: string | null; tool_calls?: ToolCall[] }
  | { role: "tool"; tool_call_id: string; content: string }

type ToolCall = { id: string; type: "function"; function: { name: string; arguments: string } }

const tools = agentTools.map((t) => ({
  type: "function" as const,
  function: { name: t.name, description: t.description, parameters: t.inputSchema },
}))

const MAX_ROUNDS = 6

export type LiveEvent =
  | { kind: "tool"; name: string; summary: string }
  | { kind: "tool-done"; ok: boolean }
  | { kind: "say"; text: string }

/** Runs one visitor turn to completion. Returns the updated transcript. */
export async function runLive(
  history: ChatMessage[],
  onEvent: (e: LiveEvent) => void,
  signal: AbortSignal,
): Promise<ChatMessage[]> {
  const messages = [...history]
  for (let round = 0; round < MAX_ROUNDS; round++) {
    const res = await fetch("/api/agent", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ messages, tools }),
      signal,
    })
    const data = await res.json().catch(() => ({ error: "The live model sent something unreadable." }))
    if (!res.ok || data.error) throw new Error(data.error ?? `Live model unavailable (${res.status})`)

    const msg = data.message as Extract<ChatMessage, { role: "assistant" }>
    messages.push(msg)
    if (msg.content) onEvent({ kind: "say", text: msg.content })
    if (!msg.tool_calls?.length) return messages

    for (const call of msg.tool_calls) {
      onEvent({ kind: "tool", name: call.function.name, summary: summarize(call) })
      const result = await runTool(call.function.name, call.function.arguments)
      onEvent({ kind: "tool-done", ok: !isError(result) })
      messages.push({ role: "tool", tool_call_id: call.id, content: JSON.stringify(result).slice(0, 6000) })
    }
  }
  onEvent({ kind: "say", text: "I'll stop here — that was a lot of steps for one question." })
  return messages
}

async function runTool(name: string, rawArgs: string): Promise<unknown> {
  let args: any = {}
  try {
    args = rawArgs ? JSON.parse(rawArgs) : {}
  } catch {
    return { error: "Arguments were not valid JSON." }
  }
  if (name === "snapshot") return agent.snapshot()
  if (name === "act") return agent.act({ steps: Array.isArray(args.steps) ? args.steps : [] })
  if (name === "query") return agent.query(args)
  return { error: `Unknown tool ${name}` }
}

function isError(r: unknown) {
  return !!r && typeof r === "object" && ("error" in r || ("ok" in r && (r as { ok: boolean }).ok === false))
}

function summarize(call: ToolCall): string {
  if (call.function.name !== "act") return call.function.name
  try {
    const { steps } = JSON.parse(call.function.arguments)
    return steps.map((s: { ref: string; action: string; args?: unknown[] }) => `${s.ref} · ${s.action}(${(s.args ?? []).join(", ")})`).join(" → ")
  } catch {
    return "act"
  }
}
