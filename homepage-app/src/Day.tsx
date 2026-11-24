import { useEffect, useMemo, useRef, useState } from "react"
import { Slider, SliderControl, SliderIndicator, SliderThumb, SliderTrack } from "@ui-sdk/react/slider"
import { Switch, SwitchThumb } from "@ui-sdk/react/switch"
import {
  Timeline,
  TimelineConnector,
  TimelineDescription,
  TimelineItem,
  TimelineMarker,
  TimelineTime,
  TimelineTitle,
} from "@ui-sdk/react/timeline"
import { toClock, toMinutes } from "./agent"
import type { Beat, Day as DayData } from "./types"

const ACTOR_LABEL = { agent: "agent", me: "me", both: "me + agent" } as const

type Props = {
  day: DayData
  minute: number
  onMinute: (m: number) => void
  agentsOnly: boolean
  onAgentsOnly: (v: boolean) => void
}

export function Day({ day, minute, onMinute, agentsOnly, onAgentsOnly }: Props) {
  const beats = useMemo(
    () => day.beats.filter((b) => !b.draft && (!agentsOnly || b.actor !== "me")),
    [day.beats, agentsOnly],
  )
  const active = useMemo(() => {
    let found: Beat | undefined = beats[0]
    for (const b of beats) if (toMinutes(b.at) <= minute) found = b
    return found
  }, [beats, minute])

  const [playing, setPlaying] = useState(false)
  usePlayback(playing, minute, onMinute, () => setPlaying(false))

  return (
    <div className="day">
      <div className="day-controls">
        <div className="clock" aria-hidden="true">
          <span className="clock-time">{toClock(minute)}</span>
          <span className="clock-meta">
            {day.weekday} · {formatDate(day.date)} · {day.place}
          </span>
        </div>

        <Slider
          className="scrub"
          min={0}
          max={1439}
          step={1}
          largeStep={60}
          value={minute}
          onValueChange={(v) => onMinute(Array.isArray(v) ? v[0] : v)}
        >
          <SliderControl className="scrub-control">
            <SliderTrack className="scrub-track">
              {day.beats
                .filter((b) => !b.draft)
                .map((b) => (
                  <span
                    key={b.at}
                    className="scrub-tick"
                    data-actor={b.actor}
                    style={{ left: `${(toMinutes(b.at) / 1439) * 100}%` }}
                    aria-hidden="true"
                  />
                ))}
              <SliderIndicator className="scrub-fill" />
              <SliderThumb className="scrub-thumb" aria-label="Time of day" aria-valuetext={toClock(minute)} />
            </SliderTrack>
          </SliderControl>
          <div className="scrub-hours" aria-hidden="true">
            <span>00</span><span>06</span><span>12</span><span>18</span><span>24</span>
          </div>
        </Slider>

        <div className="day-toggles">
          <button type="button" className="play" onClick={() => setPlaying((p) => !p)} aria-pressed={playing}>
            {playing ? "Pause" : "Play the day"}
          </button>
          <label className="toggle">
            <Switch className="switch" checked={agentsOnly} onCheckedChange={(v: boolean) => onAgentsOnly(v)}>
              <SwitchThumb className="switch-thumb" />
            </Switch>
            Agents only
          </label>
        </div>
      </div>

      {active && <BeatCard key={active.at} beat={active} organ={day.organs[active.organ]} />}

      <Timeline className="beats" aria-label="The day, hour by hour">
        {beats.map((b) => (
          <TimelineItem
            key={b.at}
            className="beat-row"
            data-active={b === active ? "" : undefined}
            data-actor={b.actor}
            onClick={() => onMinute(toMinutes(b.at))}
            onKeyDown={(e) => {
              // Rows take focus via the Timeline's arrow keys; Enter/Space choose the moment.
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault()
                onMinute(toMinutes(b.at))
              }
            }}
          >
            <TimelineMarker className="beat-marker" />
            <TimelineConnector className="beat-line" />
            <TimelineTime className="beat-time" dateTime={`${day.date}T${b.at}`}>
              {b.at}
            </TimelineTime>
            <TimelineTitle className="beat-title">{b.title}</TimelineTitle>
            <TimelineDescription className="beat-who">{ACTOR_LABEL[b.actor]} · {b.organ}</TimelineDescription>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  )
}

function BeatCard({ beat, organ }: { beat: Beat; organ?: { label: string; link: string } }) {
  const lines = useTyped(beat.trace ?? [])
  return (
    <article className="beat-card" data-actor={beat.actor} aria-live="polite">
      <header>
        <span className="beat-card-time">{beat.at}</span>
        <span className="beat-card-who">{ACTOR_LABEL[beat.actor]}</span>
        {organ && (
          <a className="beat-card-organ" href={organ.link}>
            {organ.label}
          </a>
        )}
      </header>
      <h3>{beat.title}</h3>
      <p>{beat.body}</p>
      {beat.quote && <blockquote>“{beat.quote}”</blockquote>}
      {beat.trace && (
        <pre className="trace" aria-label="What actually ran">
          {lines.map((l, i) => (
            <span key={i} className="trace-line">
              {l}
            </span>
          ))}
        </pre>
      )}
      {beat.lesson && <p className="lesson">{beat.lesson}</p>}
      {beat.link && (
        <a className="beat-link" href={beat.link}>
          Go there →
        </a>
      )}
    </article>
  )
}

/** Reveals trace lines one by one; shows them all at once for reduced motion. */
function useTyped(lines: string[]) {
  const reduce = typeof matchMedia !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches
  const [n, setN] = useState(reduce ? lines.length : 0)
  useEffect(() => {
    if (reduce) return
    setN(0)
    const t = setInterval(() => setN((k) => (k >= lines.length ? (clearInterval(t), k) : k + 1)), 260)
    return () => clearInterval(t)
  }, [lines, reduce])
  return lines.slice(0, n)
}

/** Sweeps the slider through the day: a full 24h in ~24s. */
function usePlayback(playing: boolean, minute: number, onMinute: (m: number) => void, stop: () => void) {
  const ref = useRef(minute)
  ref.current = minute
  useEffect(() => {
    if (!playing) return
    let last = performance.now()
    let raf = requestAnimationFrame(function tick(now) {
      const next = ref.current + ((now - last) / 1000) * 60
      last = now
      if (next >= 1439) {
        onMinute(1439)
        stop()
        return
      }
      onMinute(next)
      raf = requestAnimationFrame(tick)
    })
    return () => cancelAnimationFrame(raf)
  }, [playing])
}

function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })
}
