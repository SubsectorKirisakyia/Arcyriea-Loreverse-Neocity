import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

// https://vite.dev
export default defineConfig({
  plugins: [react()],
  base: '/library/', // Maps asset pipelines cleanly to Neocities subfolders
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        characters: resolve(__dirname, 'characters/index.html'),
        factions: resolve(__dirname, 'factions/index.html'),
        races: resolve(__dirname, 'races/index.html'),
      },
    },
  },
});
