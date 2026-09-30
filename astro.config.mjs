// @ts-check
import { defineConfig } from 'astro/config';

// SITE_URL and BASE_PATH are injected by the GitHub Pages workflow
// (.github/workflows/deploy.yml), so the same build works for
// https://<user>.github.io and https://<user>.github.io/<repo>.
// Set them yourself if you deploy somewhere else or use a custom domain.
const site = process.env.SITE_URL || 'https://example.com';
const base = process.env.BASE_PATH || '/';

// https://astro.build/config
export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
});
