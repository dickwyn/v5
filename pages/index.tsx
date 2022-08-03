import type { GetStaticProps } from 'next';
import Image from 'next/image';

import styles from '../styles/index.module.scss';
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
    <h1 className={`${styles.title} ${styles.newSection}`}>hello, i&apos;m dickwyn</h1>
    <h2 className={styles.subtitle}>
      a software engineer that&apos;s passionate about content creation
    </h2>
    <p className={styles.newSection}>current: software engineer at Microsoft</p>
    <p>previous: front end engineer at Clairvoyant/EXL; student at ASU</p>
    <p className={`${styles.mutedText} ${styles.newSection}`}>
      i like consumer technology, airplanes, photography, and eating + cooking chicken rice
    </p>
    <p className={styles.mutedText}>
      time allocation: 20% coding, 20% youtube video making,10% meetings, 5% cooking, 15% learning,
      30% sleep
    </p>
  </Layout>
);

// TODO return blog entries
export const getStaticProps: GetStaticProps = async () => ({
  props: {},
});

export default IndexPage;
