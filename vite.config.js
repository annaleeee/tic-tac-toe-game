import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11']
    })
  ],
  build: {
    assetsDir: "static"
  },
  server: {
    port: 3030,
    proxy: {
      '/api': 'http://127.0.0.1:5500/dist/index.html'
    }
  },
  preview: {
    port: 8080
  }
})