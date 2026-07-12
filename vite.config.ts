import { defineConfig } from 'vite';

// GitHub Pages serviert von / (Projektseite) — relative Asset-Pfade via base './'.
// Statische Laufzeit-Assets (img/, fonts/, mp3) liegen in public/ und landen 1:1 in dist/.
export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
    target: 'es2020',
    assetsInlineLimit: 0,
  },
});
