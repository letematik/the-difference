import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://letematik.github.io',
  base: '/the-difference', // Esto es vital para que las rutas funcionen
  vite: {
    plugins: [tailwindcss()]
  }
});