import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/myPortfolio/',
  build: {
    outDir: 'docs' // 🟡 αντί για dist
  },
  plugins: [react()],
});



