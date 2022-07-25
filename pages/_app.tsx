import '../styles/globals.scss';
import { GoogleAnalytics } from 'nextjs-google-analytics';
import type { AppProps } from 'next/app';

const DwyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const AnyComponent = Component as any;
  return (
    <>
      <GoogleAnalytics />
      <AnyComponent {...pageProps} />
    </>
  );
};

export default DwyApp;
