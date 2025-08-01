import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',   // ✅ MUST be this
    port: 5173,        // or any port you want
    strictPort: true,  // optional: avoids auto-switching ports
  },
})
