import { unified } from '@astrojs/markdown-remark';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import AutoImport from 'astro-auto-import';
import { defineConfig } from 'astro/config';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import mkcert from 'vite-plugin-mkcert';

import packageJson from './package.json' with { type: 'json' };

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
        processor: unified({
            rehypePlugins: [
                rehypeSlug,
                [
                    rehypeAutolinkHeadings,
                    {
                        behavior: 'append',
                        properties: {
                            class: 'heading-anchor',
                            ariaHidden: 'true',
                            tabIndex: -1,
                        },
                        content: {
                            type: 'element',
                            tagName: 'svg',
                            properties: {
                                xmlns: 'http://www.w3.org/2000/svg',
                                viewBox: '0 0 24 24',
                                fill: 'none',
                                stroke: 'currentColor',
                                strokeWidth: 2,
                                strokeLinecap: 'round',
                                strokeLinejoin: 'round',
                                ariaHidden: 'true',
                            },
                            children: [
                                {
                                    type: 'element',
                                    tagName: 'path',
                                    properties: {
                                        d: 'M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71',
                                    },
                                    children: [],
                                },
                                {
                                    type: 'element',
                                    tagName: 'path',
                                    properties: {
                                        d: 'M14 11a5 5 0 0 0-7.54-.54l3-3a5 5 0 0 1 7.07 7.07l1.71-1.71',
                                    },
                                    children: [],
                                },
                            ],
                        },
                    },
                ],
            ],
        }),
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
            'import.meta.env.PUBLIC_BUILD_TIMESTAMP': JSON.stringify(new Date().toISOString()),
            'import.meta.env.PUBLIC_SITE_VERSION': JSON.stringify(packageJson.version),
        },
    },
});
