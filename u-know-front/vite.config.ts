import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
///<reference types= "vitest" />
///<reference types="Vite/client"/>

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true
  },
})

