import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/personal-website/', // GitHub Pages repo name ensures assets load
  plugins: [react()],
});