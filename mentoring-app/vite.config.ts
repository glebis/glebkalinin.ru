import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    target: 'es2022',
    outDir: '../themes/gk-nerd/source/mentoring-app',
    emptyOutDir: true,
    cssCodeSplit: false,
    rollupOptions: {
      input: 'src/main.ts',
      output: {
        entryFileNames: 'preparation.js',
        chunkFileNames: 'preparation-[hash].js',
        assetFileNames: 'preparation[extname]',
      },
    },
  },
})
