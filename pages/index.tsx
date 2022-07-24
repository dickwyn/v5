import type { GetStaticProps } from 'next';

import styles from '../styles/Home.module.css';

const Home = (): JSX.Element => <div className={styles.container}>hi, i&apos;m dickwyn</div>;

// TODO return blog entries
export const getStaticProps: GetStaticProps = async () => ({
  props: {},
});

export default Home;
