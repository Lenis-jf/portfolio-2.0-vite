import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio-2.0-vite/',
  plugins: [
    react({
      jsxRuntime: 'automatic',
      fastRefresh: false, // 👈 desactiva inyección doble de @react-refresh
    }),
  ],
  optimizeDeps: {
    force: true,
  },
  server: {
    port: 5173,      
    open: true       
  },
  build: {
    outDir: 'dist'
  }
});
