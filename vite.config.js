import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('react-dom') || id.includes('react-router-dom')) return 'vendor';
          if (id.includes('react')) return 'vendor';
          if (id.includes('framer-motion')) return 'animations';
          if (id.includes('lucide-react') || id.includes('react-icons')) return 'icons';
          if (id.includes('swiper')) return 'swiper';
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
})
