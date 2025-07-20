import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/pizza_cake/', // 👈 Esta línea hace que GitHub Pages funcione bien
  plugins: [react()],
})
