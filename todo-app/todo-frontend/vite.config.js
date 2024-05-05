import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Enable file system polling to detect changes
    // This can help in some environments where file change events are not properly detected
    watch: {
      usePolling: true
    }
  },
  test: {
    environment: 'jsdom',
    globals: true
  }
})




