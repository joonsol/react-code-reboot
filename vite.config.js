import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/test4/',
  build: {
    outDir: 'docs', // ← build 결과를 docs 폴더로!
  },
  plugins: [react()],
})
