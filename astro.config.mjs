// @ts-check
import { defineConfig, envField } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'https://epg.unapiquitos.edu.pe',

  env: {
    schema: {
      API_BASE_URL: envField.string({
        context: "server",
        access: "public",
        default: "https://api.postgradounap.edu.pe"
      }),
      API_TIMEOUT: envField.number({
        context: "server",
        access: "public",
        default: 10000
      }),
    }
  },

  integrations: [
    react(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-PE',
        },
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: node({
    mode: 'standalone'
  })
});