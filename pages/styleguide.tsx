/* eslint-disable */

import { Fragment } from 'react';
import Layout from '../components/layout';
import styles from '../styles/Styleguide.module.scss';

const colorList = [
  {
    name: 'red',
    values: [1, 2, 3, 4, 5, 6, 7, 8],
  },
  {
    name: 'blue',
    values: [1, 2, 3, 4, 5, 6, 7, 8],
  },
  {
    name: 'violet',
    values: [1, 2, 3, 4, 5, 6, 7, 8],
  },
  {
    name: 'orange',
    values: [1, 2, 3, 4, 5, 6, 7, 8],
  },
  {
    name: 'green',
    values: [1, 2, 3, 4, 5, 6, 7, 8],
  },
  {
    name: 'yellow',
    values: [1, 2, 3, 4, 5, 6, 7, 8],
  },
];

const StyleGuidePage = (): JSX.Element => (
  <Layout title="Style Guide">
    <p>
      This style guide was adapted from the{' '}
      <a href="https://www.poormansstyleguide.com/">Poor Man's Styleguide</a> created by{' '}
      <a href="https://www.bryanbraun.com/">Bryan Braun</a>. It serves as a guide for standardized
      styling for this site.
    </p>
    <hr />
    <h1 id="colors">Colors</h1>
    {colorList.map(({ name, values }) => {
      return (
        <Fragment>
          <h2>
            {name.toUpperCase()} ({name.toUpperCase()}-*)
          </h2>
          <div className={styles.colorPaletteContainer}>
            {values.map((value) => (
              <div className={`${styles.colorPaletteItem} ${styles[name + value]}`}>{value}</div>
            ))}
          </div>
        </Fragment>
      );
    })}
    <hr />
  </Layout>
);

export default StyleGuidePage;
