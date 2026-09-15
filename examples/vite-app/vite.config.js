import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  /* Relative base so the built app can be opened from a file server at any path. */
  base: './',
});
