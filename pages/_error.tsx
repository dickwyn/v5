interface ErrorProps {
  statusCode: number | undefined;
}

const Error = ({ statusCode }: ErrorProps): JSX.Element => (
  <p>{statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}</p>
);

Error.getInitialProps = ({ res, err }: any): ErrorProps => {
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

export default Error;
