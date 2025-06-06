import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    "target": "ES2021"
  },
  css: {
    postcss: {
        plugins: [tailwindcss(), autoprefixer({})],
    },
  },
})
