import { CONTENT_PATH, FILE_PATH_LIST } from '../../api/blog';
import { GetStaticPaths, GetStaticProps } from 'next';

import { BlogProps } from '../../types/blog';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote';
import React from 'react';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { serialize } from 'next-mdx-remote/serialize';

const PostPage = ({ source, frontMatter }: BlogProps): JSX.Element => {
  return (
    <article>
      <p>{JSON.stringify(frontMatter)}</p>
      <hr></hr>
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
  );
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const postFilePath = path.join(CONTENT_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: FILE_PATH_LIST.map((path: string) => path.replace(/\.mdx?$/, '')) // Remove file extensions for page paths
      .map((slug: string) => ({ params: { slug } })), // Map the path into the static paths object required by Next.js,
    fallback: false,
  };
};

export default PostPage;
