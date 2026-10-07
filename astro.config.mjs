// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// ---------------------------------------------------------------------------
// DOMAIN: Hier steht die Adresse der Website – an genau EINER Stelle.
// Canonical-URLs, Sitemap, robots.txt und Open-Graph-Tags richten sich danach.
//
// Nach dem ersten Deployment zeigt Cloudflare die echte kostenlose Adresse an,
// z. B. https://beauty-salon-and-nails.DEIN-NAME.workers.dev – diese hier eintragen.
// Später für eine eigene Domain einfach ändern, z. B. 'https://www-beispiel-nagelstudio.de'
// (ohne Schrägstrich am Ende).
// ---------------------------------------------------------------------------
const SITE = 'https://beauty-salon-and-nails.kw698p7brp.workers.dev';

export default defineConfig({
  site: SITE,
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      // Skripte als eigene Dateien ausliefern (keine Inline-Skripte) –
      // so bleibt die strenge Content-Security-Policy in public/_headers gültig.
      assetsInlineLimit: 0,
    },
  },
});
