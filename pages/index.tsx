import type { GetStaticProps } from 'next';

import Layout from '../components/layout';

const IndexPage = (): JSX.Element => (
  <Layout>
    <h1>hi, i&apos;m dickwyn</h1>
    <img
      className="full-bleed"
      alt="cute meerkat"
      src="https://source.unsplash.com/WLUHO9A_xik/1600x900"
    />
    <p>Some content and stuff</p>
  </Layout>
);

// TODO return blog entries
export const getStaticProps: GetStaticProps = async () => ({
  props: {},
});

export default IndexPage;
