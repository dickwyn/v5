import { useRouter } from 'next/router';
import Layout from '../components/layout';

interface ErrorProps {
  statusCode: number | undefined;
}

const ErrorPage = ({ statusCode }: ErrorProps): JSX.Element => {
  const { pathname, route, asPath } = useRouter();
  return (
    <Layout>
      <p>
        {statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}
      </p>
      <pre>
        <code>
          <p>Diagnostic information</p>
          <p>----------------------</p>
          <p>href: {asPath}</p>
          <p>origin: {route}</p>
          <p>pathname: {pathname}</p>
        </code>
      </pre>
    </Layout>
  );
};

ErrorPage.getInitialProps = ({ res, err }: any): ErrorProps => {
  let statusCode = 200;

  if (res) {
    statusCode = res.statusCode;
  } else if (err.statusCode) {
    statusCode = err.statusCode;
  } else {
    statusCode = 404;
  }

  return { statusCode };
};

export default ErrorPage;
