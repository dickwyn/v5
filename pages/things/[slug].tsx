import { GetStaticPaths, GetStaticProps } from 'next';

import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import fs from 'fs';

import Layout from '../../components/layout';
import { getPostBySlug, THINGS_PATH } from '../../lib/things';

import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

const PostPage = ({ source, frontMatter: { title, subtitle } }: any): JSX.Element => (
    <Layout title={title}>
        <article>
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <hr />
            <MDXRemote {...source} components={{}} />
        </article>
    </Layout>
);

export const getStaticProps: GetStaticProps = async ({ params: { slug } }: any) => {
    const { content, frontMatter } = getPostBySlug(slug);

    const mdxSource = await serialize(content, {
        mdxOptions: {
            remarkPlugins: [],
            rehypePlugins: [],
        },
        scope: frontMatter,
    });

    return {
        props: {
            frontMatter,
            source: mdxSource,
        },
    };
};

export const getStaticPaths: GetStaticPaths = async () => ({
    paths: fs
        .readdirSync(THINGS_PATH)
        .filter((contentPath) => /\.mdx?$/.test(contentPath))
        .map((filePath: string) => filePath.replace(/\.mdx?$/, ''))
        .map((slug: string) => ({ params: { slug } })),
    fallback: false,
});

export default PostPage;
