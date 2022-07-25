import '../styles/globals.css';

import type { AppProps } from 'next/app';

const DwyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const AnyComponent = Component as any;
  return <AnyComponent {...pageProps} />;
};

export default DwyApp;
