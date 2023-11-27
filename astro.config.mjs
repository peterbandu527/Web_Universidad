import { defineConfig } from 'astro/config';

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site: 'https://peterbandu527.github.io',
  base: '/web-universidad',
  experimental: {
		viewTransitions: true
	}

});