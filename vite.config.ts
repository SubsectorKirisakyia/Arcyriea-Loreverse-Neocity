import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev
export default defineConfig({
  plugins: [react()],
  base: '/library/', // Maps asset pipelines cleanly to Neocities subfolders
});
