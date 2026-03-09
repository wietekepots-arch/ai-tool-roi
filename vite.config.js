import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Change 'ai-roi' to your actual GitHub repo name
// e.g. if your repo is github.com/yourname/ai-tooling-roi, set base: '/ai-tooling-roi/'
// If using a custom domain or deploying to root, set base: '/'
export default defineConfig({
  plugins: [react()],
  base: '/ai-roi/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        // Single HTML entry point
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
      },
    },
  },
})
