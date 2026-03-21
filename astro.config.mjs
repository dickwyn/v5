import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import AutoImport from 'astro-auto-import';
import { defineConfig } from 'astro/config';
import { readFileSync } from 'node:fs';
import mkcert from 'vite-plugin-mkcert';

const { version } = JSON.parse(readFileSync('./package.json', 'utf-8'));

const buildTimestamp = new Date().toLocaleString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short',
});

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
        plugins: [tailwindcss(), mkcert()],
        define: {
            'import.meta.env.PUBLIC_BUILD_TIMESTAMP': JSON.stringify(buildTimestamp),
            'import.meta.env.PUBLIC_SITE_VERSION': JSON.stringify(version),
        },
    },
});
