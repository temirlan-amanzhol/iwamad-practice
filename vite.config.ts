import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Site is served from https://temirlan-amanzhol.github.io/iwamad-practice/
  base: '/iwamad-practice/',
})
