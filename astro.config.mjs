import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import AutoImport from 'astro-auto-import';
import { defineConfig } from 'astro/config';

export default defineConfig({
	site: 'https://dickwyn.com',
	server: {
		host: '0.0.0.0',
	},
	integrations: [
		AutoImport({
			imports: [
				'./src/components/mdx/YouTube.astro',
				'./src/components/mdx/Figure.astro',
				'./src/components/mdx/Tweet.astro',
				'./src/components/mdx/Iframe.astro',
			],
		}),
		mdx(),
		sitemap({
			filter: (page) => !page.includes('/styleguide') && !page.includes('/debug'),
		}),
	],
	markdown: {
		shikiConfig: {
			themes: {
				light: 'github-light',
				dark: 'github-dark',
			},
		},
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
