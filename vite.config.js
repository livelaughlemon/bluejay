import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    dedupe: [
      'vue'
    ],
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'vue-router': fileURLToPath(new URL('../src/pages', import.meta.url)),
    }
  },
  server: {
    port: 8000,
  },
  preview: {
    port: 8000,
  },
})
