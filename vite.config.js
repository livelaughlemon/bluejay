import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    dedupe: [
      'vue'
    ]
  },
  server: {
    port: 8000,
    hmr: {protocol: "wss", host: "orchidmc.me", port: 8000}
  }
})
