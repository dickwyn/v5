import type { GetStaticProps } from 'next';

import Layout from '../components/layout';

const IndexPage = (): JSX.Element => (
  <Layout>
    <h1>hi, i&apos;m dickwyn</h1>
  </Layout>
);

// TODO return blog entries
export const getStaticProps: GetStaticProps = async () => ({
  props: {},
});

export default IndexPage;
