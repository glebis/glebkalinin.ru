import { defineConfig, type Plugin } from "vite"
import react from "@vitejs/plugin-react"
import { readFileSync, writeFileSync, mkdirSync } from "node:fs"
import { resolve } from "node:path"
import { parse } from "yaml"

// The live agent's server-side context is generated from the same YAML the page
// renders, so the model can never describe a beat the page doesn't show.
function dayContext(): Plugin {
  return {
    name: "day-context",
    buildStart() {
      const day = parse(readFileSync(resolve(__dirname, "../source/_data/day.yml"), "utf8"))
      const beats = day.beats
        .filter((b: { draft?: boolean }) => !b.draft)
        .map((b: Record<string, unknown>) => ({ at: b.at, actor: b.actor, organ: b.organ, title: b.title, body: b.body, lesson: b.lesson, quote: b.quote }))
      const out = resolve(__dirname, "../netlify/functions")
      mkdirSync(out, { recursive: true })
      writeFileSync(resolve(out, "day-context.json"), JSON.stringify({ date: day.date, weekday: day.weekday, place: day.place, beats }, null, 1) + "\n")
    },
  }
}

export default defineConfig({
  plugins: [react(), dayContext()],
  build: {
    outDir: "../themes/gk-nerd/source/home-app",
    emptyOutDir: true,
    cssCodeSplit: false,
    rollupOptions: {
      input: resolve(__dirname, "src/main.tsx"),
      output: {
        entryFileNames: "day.js",
        chunkFileNames: "day-[hash].js",
        assetFileNames: "day[extname]",
      },
    },
  },
})
