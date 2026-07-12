// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // site: 'https://letematik.github.io', // Desactivado para desarrollo local
  // base: '/the-difference',            // Desactivado para desarrollo local
  vite: {
    plugins: [tailwindcss()]
  }
});