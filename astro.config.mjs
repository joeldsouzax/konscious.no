import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://joeldsouzax.github.io',
  base: '/konscious.no',
  integrations: [tailwind()],
});
