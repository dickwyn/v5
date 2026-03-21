import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { defineCollection } from 'astro:content';

const blog = defineCollection({
    loader: glob({ pattern: '**/*.mdx', base: './src/content/blog' }),
    schema: z.object({
        title: z.string(),
        date: z.string(),
        description: z.string().optional(),
        slug: z.string(),
        subtitle: z.string().optional(),
        image: z.string().optional(),
        draft: z.boolean().optional().default(false),
    }),
});

const things = defineCollection({
    loader: glob({ pattern: '**/*.mdx', base: './src/content/things' }),
    schema: z.object({
        title: z.string(),
        order: z.number(),
    }),
});

export const collections = { blog, things };
