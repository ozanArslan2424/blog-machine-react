import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/blogmachine-v2/',
  plugins: [react()],
  // other options...
})