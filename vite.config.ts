import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  base: command === 'serve' ? '/' : '/popsy-5.github.io/',
  define: {
    'import.meta.env.BASE_URL': JSON.stringify(command === 'serve' ? '/' : '/popsy-5.github.io/')
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  server: {
    port: 3000,
    host: true,
    open: true,
    cors: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      external: [
        'swiper',
        'swiper/react',
        'swiper/modules',
        'swiper/css',
        'swiper/css/navigation',
        'swiper/css/pagination'
      ],
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          mui: ['@mui/material', '@mui/icons-material']
        }
      }
    }
  },
  // 優化靜態資源處理
  assetsInclude: ['**/*.jpg', '**/*.png', '**/*.svg', '**/*.gif', '**/*.mp4', '**/*.webp'],
  css: {
    devSourcemap: true
  }
}))