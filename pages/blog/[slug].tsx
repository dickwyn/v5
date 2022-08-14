import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import NextImage from 'next/image';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote';
import dayjs from 'dayjs';
import { serialize } from 'next-mdx-remote/serialize';
import fs from 'fs';
import utc from 'dayjs/plugin/utc';
import customParseFormat from 'dayjs/plugin/customParseFormat';

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import styles from '../../styles/[slug].module.scss';
import { BlogProps } from '../../types/blog';
import Layout from '../../components/layout';
import { getPostBySlug, POSTS_PATH } from '../../lib/blog';

import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

dayjs.extend(utc);
dayjs.extend(customParseFormat);

const Image = ({
    fileName,
    alt,
    caption,
}: {
    fileName: string;
    alt: string;
    caption: string;
}): JSX.Element => (
    <figure className={styles.figure}>
        <NextImage
            // eslint-disable-next-line import/no-dynamic-require, global-require
            src={require(`../../images/blog/${fileName}`)}
            alt={alt}
            layout="responsive"
            className="image"
        />
        {caption && (
            <>
                <figcaption className="caption">{caption}</figcaption>
                <hr />
            </>
        )}
    </figure>
);

const PostPage = ({
    source,
    frontMatter: { title, subtitle, timestamp, tagList },
}: BlogProps): JSX.Element => (
    <Layout title={title}>
        <article>
            <ul className={styles.tagList}>
                {tagList.map((tag) => (
                    <li key={tag}>
                        {/* TODO change to link tag */}
                        <p>{tag}</p>
                    </li>
                ))}
            </ul>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.subtitle}>{subtitle}</p>
            <time className={styles.timestamp}>
                {dayjs(timestamp).local().format('D MMM YYYY, h:mma')}
            </time>
            <hr />
            <MDXRemote
                {...source}
                components={{
                    Head,
                    Image,
                    Link,
                    LiteYouTubeEmbed, // TODO convert to YouTubeVideo component so that videos are not dependent on this library
                }}
            />
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
        .readdirSync(POSTS_PATH)
        .filter((contentPath) => /\.mdx?$/.test(contentPath))
        .map((filePath: string) => filePath.replace(/\.mdx?$/, ''))
        .map((slug: string) => ({ params: { slug } })),
    fallback: false,
});

export default PostPage;
