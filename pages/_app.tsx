import '../styles/globals.scss';
import { GoogleAnalytics } from 'nextjs-google-analytics';
import type { AppProps } from 'next/app';
import Head from 'next/head';

const DwyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const AnyComponent = Component as any;
  return (
    <>
      <Head>
        {/* adding this here because https://github.com/vercel/next.js/blob/deprecated-main/errors/no-document-viewport-meta.md */}
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>
      <GoogleAnalytics />
      <AnyComponent {...pageProps} />
    </>
  );
};

export default DwyApp;
