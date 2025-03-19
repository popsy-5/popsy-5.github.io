import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => ({
  // 根據不同環境設置不同的 base 路徑
  base: mode === 'vercel' ? '/' : command === 'serve' ? '/' : '/popsy-5.github.io/',
  define: {
    'import.meta.env.BASE_URL': JSON.stringify(
      mode === 'vercel' ? '/' : command === 'serve' ? '/' : '/popsy-5.github.io/'
    )
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
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
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
  },
  // 優化靜態資源處理
  publicDir: 'public',
  // 配置靜態資源處理
  experimental: {
    renderBuiltUrl(filename) {
      // 根據不同環境返回正確的資源路徑
      const base = mode === 'vercel' ? '' : command === 'serve' ? '/' : '/popsy-5.github.io/'
      return base + filename
    }
  }
}))