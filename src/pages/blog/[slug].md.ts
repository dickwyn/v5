import type { APIRoute } from 'astro';
import { getCollection, type CollectionEntry } from 'astro:content';

export async function getStaticPaths() {
    const posts = (await getCollection('blog')).filter(
        (post) => import.meta.env.DEV || !post.data.draft
    );

    return posts.map((post) => ({
        params: { slug: post.data.slug },
        props: { post },
    }));
}

export const GET: APIRoute<{ post: CollectionEntry<'blog'> }> = ({ props }) => {
    const { post } = props;
    const { title, description, date, slug, tags } = post.data;

    const tagLine = tags.length > 0 ? ` · ${tags.map((tag) => `#${tag}`).join(' ')}` : '';
    const summary = description !== undefined && description !== '' ? `${description}\n\n` : '';
    const published = new Date(date).toISOString().slice(0, 10);

    const header = `# ${title}\n\n${summary}_${published}_${tagLine}\n\nSource: https://dickwyn.com/blog/${slug}\n\n---\n\n`;

    return new Response(header + (post.body ?? ''), {
        headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
    });
};
