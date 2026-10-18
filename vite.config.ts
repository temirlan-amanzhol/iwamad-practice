import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Site is served from https://temirlan-amanzhol.github.io/iwamad-practice/
  base: '/iwamad-practice/',
  build: {
    // GitHub Pages publishes the /docs folder of the current week branch (week-06)
    outDir: 'docs',
  },
  test: {
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
})
