// @ts-check
import { defineConfig, envField } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

import vercel from '@astrojs/vercel';

const isVercel = process.env.VERCEL === '1';

// https://astro.build/config
export default defineConfig({
  site: 'https://epg.unapiquitos.edu.pe',

  output: isVercel ? undefined : 'static',

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
      FORMSPREE_ID: envField.string({
        context: "server",
        access: "public",
        optional: true,
        default: ""
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

  adapter: isVercel ? vercel() : undefined,
});
