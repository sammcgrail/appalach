import { defineConfig } from 'vite'

export default defineConfig({
  base: '/appalach/',
  build: {
    outDir: '../docs',
    emptyOutDir: true
  },
  server: {
    proxy: {
      '/api': 'http://localhost:8001'
    }
  }
})
