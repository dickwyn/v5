interface ErrorProps {
  statusCode: number | undefined;
}

const Error = ({ statusCode }: ErrorProps) => {
  return (
    <p>
      {statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}
    </p>
  );
};

Error.getInitialProps = ({ res, err }: any): ErrorProps => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
