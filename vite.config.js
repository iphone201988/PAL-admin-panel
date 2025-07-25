import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/admin/', // 👈 REQUIRED for subfolder deployment
  server: {
    host: '0.0.0.0',
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
})
