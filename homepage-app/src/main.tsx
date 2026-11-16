import "./agent" // the bridge must exist before components mount
import { StrictMode, useState } from "react"
import { createRoot } from "react-dom/client"
import { Day } from "./Day"
import { AgentPanel } from "./AgentPanel"
import { toMinutes } from "./agent"
import type { Day as DayData } from "./types"
import "./styles.css"

function App({ day }: { day: DayData }) {
  const first = day.beats.find((b) => !b.draft)
  const [minute, setMinute] = useState(first ? toMinutes(first.at) : 0)
  const [agentsOnly, setAgentsOnly] = useState(false)
  return (
    <div className="day-app">
      <Day day={day} minute={minute} onMinute={setMinute} agentsOnly={agentsOnly} onAgentsOnly={setAgentsOnly} />
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
