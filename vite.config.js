import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// User site: https://cyx-luckyboy.github.io
export default defineConfig({
  plugins: [react()],
  base: '/',
})
