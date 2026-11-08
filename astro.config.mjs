import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1];
const isPages = process.env.GITHUB_ACTIONS === 'true' && Boolean(repository);

export default defineConfig({
  site: process.env.SITE_URL || 'https://example.org',
  base: isPages ? `/${repository}` : '/',
  output: 'static',
  integrations: [sitemap()],
  build: { format: 'directory' }
});
