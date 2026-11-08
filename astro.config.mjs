// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import cloudflare from '@astrojs/cloudflare';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  session: false,
  server: {
    // Разрешает Vite принимать подключения с любых доменов (включая ngrok)
    allowedHosts: true,
    // Также можно открыть сервер для локальной сети, если нужно:
    // host: true
  },
  integrations: [react()],
  adapter: cloudflare({
    imageService: 'passthrough',
  }),

  vite: {
    plugins: [tailwindcss()]
  }
});