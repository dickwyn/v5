import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import AutoImport from 'astro-auto-import';
import { defineConfig } from 'astro/config';
import mkcert from 'vite-plugin-mkcert';

import packageJson from './package.json' with { type: 'json' };

const { version } = packageJson;

const buildTimestamp = new Date().toISOString();

export default defineConfig({
    site: 'https://dickwyn.com',
    server: {
        host: '0.0.0.0',
    },
    redirects: {
        '/resume': '/dickwyn-resume.pdf',
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
