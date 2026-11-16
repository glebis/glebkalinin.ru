export type Actor = "agent" | "me" | "both"

export type Beat = {
  at: string
  actor: Actor
  organ: string
  title: string
  body: string
  trace?: string[]
  lesson?: string
  quote?: string
  link?: string
  draft?: boolean
}

export type Day = {
  date: string
  weekday: string
  place: string
  beats: Beat[]
  organs: Record<string, { label: string; link: string }>
}
