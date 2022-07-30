/* eslint-disable react/destructuring-assignment */

import { GetStaticProps } from 'next';
import { Fragment } from 'react';
import Layout from '../../components/layout';
import StandardLink from '../../components/standardLink';
import { getAllPosts } from '../../lib/blog';

const BlogPage = (props: any): JSX.Element => (
  <Layout>
    <h1>blog</h1>
    {props.posts.map(({ slug, title }: any) => (
      <Fragment key={slug}>
        <StandardLink href={`blog/${slug}`} label={title} />
      </Fragment>
    ))}
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(['date', 'description', 'slug', 'title']);

  return {
    props: { posts },
  };
};

export default BlogPage;
