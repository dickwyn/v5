import Layout from '../components/layout';
import StandardLink from '../components/standardLink';

const DebugPage = (): JSX.Element => (
  <Layout title="Debug">
    <h1>debug</h1>
    <h2>Diagnostic information:</h2>
    <p>tbd</p>
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

export default DebugPage;
