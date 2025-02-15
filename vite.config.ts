import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import path from 'path'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  base: "/climita/",
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
