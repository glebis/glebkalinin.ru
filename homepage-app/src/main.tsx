import "./agent" // the bridge must exist before components mount
import { StrictMode, useEffect, useState } from "react"
import { createRoot } from "react-dom/client"
import { Day } from "./Day"
import { AgentPanel } from "./AgentPanel"
import { toClock, toMinutes } from "./agent"
import type { Day as DayData } from "./types"
import "./styles.css"

// Deep links: ?t=12:49 opens the day at that moment, &agents=1 hides my own hours.
function readUrl(fallback: number) {
  const q = new URLSearchParams(location.search)
  const t = q.get("t")
  const minute = t && /^\d{1,2}:\d{2}$/.test(t) ? Math.min(1439, toMinutes(t)) : fallback
  return { minute, agentsOnly: q.get("agents") === "1" }
}

function writeUrl(minute: number, agentsOnly: boolean) {
  const q = new URLSearchParams(location.search)
  q.set("t", toClock(minute))
  if (agentsOnly) q.set("agents", "1")
  else q.delete("agents")
  // Keep the colon readable in shared links (?t=12:49, not ?t=12%3A49).
  history.replaceState(history.state, "", `${location.pathname}?${q.toString().replace(/%3A/gi, ":")}${location.hash}`)
}

function App({ day }: { day: DayData }) {
  const first = day.beats.find((b) => !b.draft)
  const [initial] = useState(() => readUrl(first ? toMinutes(first.at) : 0))
  const [minute, setMinute] = useState(initial.minute)
  const [agentsOnly, setAgentsOnly] = useState(initial.agentsOnly)

  // replaceState, debounced: scrubbing and "Play the day" change the minute every frame,
  // and browsers throttle history updates.
  const [touched, setTouched] = useState(false)
  useEffect(() => {
    if (!touched) return
    const id = setTimeout(() => writeUrl(minute, agentsOnly), 250)
    return () => clearTimeout(id)
  }, [minute, agentsOnly, touched])

  return (
    <div className="day-app">
      <Day
        day={day}
        minute={minute}
        onMinute={(m) => (setTouched(true), setMinute(m))}
        agentsOnly={agentsOnly}
        onAgentsOnly={(v) => (setTouched(true), setAgentsOnly(v))}
      />
      <AgentPanel />
    </div>
  )
}

const root = document.getElementById("day-app")
const data = document.getElementById("day-data")
if (root && data?.textContent) {
  const day = JSON.parse(data.textContent) as DayData
  root.removeAttribute("data-fallback")
  createRoot(root).render(
    <StrictMode>
      <App day={day} />
    </StrictMode>,
  )
}
