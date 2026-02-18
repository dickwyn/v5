import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context: { site: URL }) {
    const posts = (await getCollection('blog'))
        .filter((post) => !post.data.draft)
        .sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());

    return rss({
        title: "Dickwyn Yong's Blog",
        description: 'My portfolio RSS feed',
        site: context.site,
        items: posts.map((post) => ({
            title: post.data.title,
            pubDate: new Date(post.data.date),
            description: post.data.description ?? '',
            link: `/blog/${post.data.slug}/`,
        })),
    });
}
