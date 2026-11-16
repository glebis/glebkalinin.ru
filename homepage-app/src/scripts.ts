// Scripted replays. The words are pre-written, but every `act` is a real call
// through the agent bridge — same permission prompt, same components — so the
// scripted demo shows exactly what the live model would do.
import type { AgentStep } from "@ui-sdk/react/agent"

export type ScriptPart = { say: string } | { act: AgentStep[] }
export type Script = { prompt: string; parts: ScriptPart[] }

export const scripts: Script[] = [
  {
    prompt: "What happens here at 3 am?",
    parts: [
      { say: "Let me take you there." },
      { act: [{ ref: "Time of day", action: "setValue", args: [193] }] },
      {
        say: "At 03:13 Gleb is asleep. A researcher agent is not: it re-reads an old conversation, finds evidence against its own earlier conclusion, and says so in the vault. It never messages him.",
      },
    ],
  },
  {
    prompt: "Where did an agent get it wrong?",
    parts: [
      { act: [{ ref: "Time of day", action: "setValue", args: [769] }] },
      {
        say: "12:49. Gleb narrowed a post to Threads, the bot agreed, and a child task still planned Threads and X. Nothing went out wrong. The fix: an approval is checked again right before anything is sent.",
      },
    ],
  },
  {
    prompt: "Show me only what the agents did",
    parts: [
      { act: [{ ref: "Agents only", action: "setChecked", args: [true] }] },
      {
        say: "Done. With Gleb's own hours hidden, most of the day is still there: research, bots, memory, two sessions talking to each other at 22:31.",
      },
    ],
  },
  {
    prompt: "How was this page built?",
    parts: [
      { act: [{ ref: "Time of day", action: "setValue", args: [983] }] },
      {
        say: "From a link clipped at 16:23: a Winamp rebuilt from UI SDK behaviors that an AI could drive. This page uses the same agent bridge. I'm moving that slider through its API, not by clicking pixels, and I ask before I do.",
      },
    ],
  },
]
