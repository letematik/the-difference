// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://letematik.github.io',
  base: '/the-difference',
  vite: {
    plugins: [tailwindcss()]
  }
});