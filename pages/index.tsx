import type { GetStaticProps, NextPage } from 'next';

import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return <div className={styles.container}>hi, i'm dickwyn</div>;
};

export const getStaticProps: GetStaticProps = async () => {
  // TODO return blog entries

  return {
    props: {},
  };
};

export default Home;
