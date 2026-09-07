import type { MarkdownHeading } from '@astrojs/markdown-remark';
import { slug } from 'github-slugger';
import getReadingTime from 'reading-time';

const dateFormatter = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
});

export const formatDate = (date: string) =>
    dateFormatter.format(new Date(date.includes('T') ? date : `${date}T00:00:00Z`));

export const readingTime = (body: string) => getReadingTime(body).text;

export const tagSlug = (tag: string) => slug(tag);

export const buildToc = (headings: MarkdownHeading[]) => {
    const entries = headings.filter((heading) => heading.depth <= 3);

    if (entries.length === 0) {
        return [];
    }

    const minDepth = Math.min(...entries.map((entry) => entry.depth));

    return entries.map((entry) => ({
        ...entry,
        depth: Math.min(entry.depth - minDepth + 2, 3),
    }));
};
