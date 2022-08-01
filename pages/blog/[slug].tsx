import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote';

import { serialize } from 'next-mdx-remote/serialize';
import fs from 'fs';
import { BlogProps } from '../../types/blog';
import Layout from '../../components/layout';
import { getPostBySlug, POSTS_PATH } from '../../lib/blog';

const PostPage = ({ source, frontMatter: { title, author, date } }: BlogProps): JSX.Element => (
  <Layout title={title}>
    <article>
      <h1>{title}</h1>
      <h2>{author}</h2>
      <h2>{date}</h2>
      <div className="prose dark:prose-dark">
        <MDXRemote
          {...source}
          components={{
            Head,
            Image,
            Link,
          }}
        />
      </div>
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
