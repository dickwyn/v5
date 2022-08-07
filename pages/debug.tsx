import { useEffect, useState } from 'react';
import Layout from '../components/layout';
import StandardLink from '../components/standardLink';

const DebugPage = (): JSX.Element => {
  const [isWindowDefined, setIsWindowDefined] = useState(false);
  const [navigatorObject, setNavigatorObject] = useState({});

  useEffect(() => {
    setNavigatorObject(window.navigator);
    setIsWindowDefined(true);
  }, []);

  return (
    <Layout title="Debug">
      <h1>debug</h1>
      <h2>Diagnostic information:</h2>
      <pre className="language-text">
        <code className="language-text">
          <p>System information</p>
          <p>----------------------</p>
          {['language', 'platform', 'maxTouchPoints', 'vendor', 'userAgent'].map((key) => (
            <p key={key}>
              {key}: {(navigatorObject as any)?.[key]}
            </p>
          ))}
          <br />
          {isWindowDefined && (
            <>
              <p>Dark mode information</p>
              <p>----------------------</p>
              <p>
                darkMode ls key:{' '}
                {localStorage.getItem('darkMode') ? localStorage.getItem('darkMode') : 'undefined'}
              </p>
              <p>
                system darkMode:{' '}
                {window.matchMedia('(prefers-color-scheme: dark)').matches.toString()}
              </p>
            </>
          )}
        </code>
      </pre>
      <h2>Links:</h2>
      <ul>
        <li>
          <span aria-label="information" role="img">
            💅
          </span>
          <p>
            <StandardLink href="/styleguide" label="View" /> the style guide.
          </p>
        </li>
      </ul>
    </Layout>
  );
};

export default DebugPage;
