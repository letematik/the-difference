// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://letematik.github.io',
  base: '/the-difference',
  
  vite: {
    plugins: [tailwindcss()]
  }
}); 