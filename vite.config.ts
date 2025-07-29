import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/portfoliov2/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: 'src/index.html'
    }
  }
});
