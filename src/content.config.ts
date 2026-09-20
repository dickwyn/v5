import { z } from 'astro/zod';
import { defineCollection } from 'astro:content';

import { gitDatedGlob } from './loaders/git-dated-glob';

const blog = defineCollection({
    loader: gitDatedGlob({ pattern: '**/*.mdx', base: './src/content/blog' }),
    schema: z.object({
        title: z.string(),
        date: z.string().default(''),
        updated: z.string().optional(),
        description: z.string().optional(),
        slug: z.string(),
        subtitle: z.string().optional(),
        image: z.string().optional(),
        tags: z.array(z.string()).default([]),
        dropCap: z.boolean().default(false),
        draft: z.boolean().optional().default(false),
    }),
});

export const collections = { blog };
