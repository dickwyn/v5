import type { GetStaticProps } from 'next';
import Image from 'next/image';

import Layout from '../components/layout';

const IndexPage = (): JSX.Element => (
  <Layout>
    <div className="image-wrapper">
      <Image
        alt="orange columns and silhouettes"
        src="https://images.unsplash.com/photo-1477140765885-9469f102a270?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
        width={1600}
        height={600}
      />
    </div>
    <p>software engineer at Microsoft</p>
    <p>front end engineer at Clairvoyant/EXL; student at ASU</p>
    <p>
      my weekly schedule minus sleeping comprises 20% coding, 10% meetings, 10% cooking, 30% video
      production, 25% learning
    </p>
    <p>i like consumer technology, airplanes, photography and eating + cooking chicken rice</p>
  </Layout>
);

// TODO return blog entries
export const getStaticProps: GetStaticProps = async () => ({
  props: {},
});

export default IndexPage;
