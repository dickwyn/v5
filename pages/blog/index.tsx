/* eslint-disable react/destructuring-assignment */

import { GetStaticProps } from 'next';
import Layout from '../../components/layout';
import StandardLink from '../../components/standardLink';
import { getAllPosts } from '../../lib/blog';
import styles from '../../styles/pages/blog.module.scss';

const BlogPage = (props: any): JSX.Element => (
    <Layout title="Blog">
        <h1>blog</h1>
        {props.posts.map(({ slug, title, summary }: any) => (
            <div key={slug} className={styles.postPreviewContainer}>
                <h2 className={styles.title}>
                    <StandardLink href={`blog/${slug}`} label={title} />
                </h2>
                {summary && <p className={styles.summary}>{summary}</p>}
                <StandardLink href={`blog/${slug}`} label="continue reading →" />
            </div>
        ))}
    </Layout>
);

export const getStaticProps: GetStaticProps = async () => ({
    props: { posts: getAllPosts() },
});

export default BlogPage;
