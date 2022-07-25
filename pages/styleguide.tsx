/* eslint-disable */

import Layout from '../components/layout';

const StyleGuidePage = (): JSX.Element => (
  <Layout>
    <div className="wrapper">
      <div className="content-container with-padding">
        <p>
          This style guide was adapted from the{' '}
          <a href="https://www.poormansstyleguide.com/">Poor Man's Styleguide</a> created by{' '}
          <a href="https://www.bryanbraun.com/">Bryan Braun</a>. It serves as a guide for
          standardized styling for this site.
        </p>
        <hr />
        <h1 id="colors">Colors</h1>
        <h2>Primary (primary-*)</h2>
        <div className="color-palette-container">
          <div className="color-item primary-100">100</div>
          <div className="color-item primary-200">200</div>
          <div className="color-item primary-300">300</div>
          <div className="color-item primary-400">400</div>
          <div className="color-item primary-500">500</div>
          <div className="color-item primary-600">600</div>
        </div>
        <h2>Neutral (neutral-*)</h2>
        <div className="color-palette-container">
          <div className="color-item neutral-100">100</div>
          <div className="color-item neutral-200">200</div>
          <div className="color-item neutral-300">300</div>
          <div className="color-item neutral-400">400</div>
          <div className="color-item neutral-500">500</div>
          <div className="color-item neutral-600">600</div>
          <div className="color-item neutral-700">700</div>
        </div>
        <h2>Success (success-*)</h2>
        <div className="color-palette-container">
          <div className="color-item success-100">100</div>
          <div className="color-item success-200">200</div>
          <div className="color-item success-300">300</div>
        </div>
        <h2>Error (error-*)</h2>
        <div className="color-palette-container">
          <div className="color-item error-100">100</div>
          <div className="color-item error-200">200</div>
          <div className="color-item error-300">300</div>
        </div>
        <h2>Warning (warning-*)</h2>
        <div className="color-palette-container">
          <div className="color-item warning-100">100</div>
          <div className="color-item warning-200">200</div>
          <div className="color-item warning-300">300</div>
        </div>
        <hr />
        <h1 id="headings">Headings</h1>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
        <hr />
        <h1 id="headings-with-text">Headings with Text</h1>
        <h1>Heading 1</h1>
        <p>
          Lorem ipsum dolor sit amet, adipiscing elit. Nullam dignissim convallis est. Quisque
          aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi,
          imperdiet at, tincidunt nec, gravida vehicula, nisl.
        </p>
        <h2>Heading 2</h2>
        <p>
          Lorem ipsum dolor sit amet, adipiscing elit. Nullam dignissim convallis est. Quisque
          aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi,
          imperdiet at, tincidunt nec, gravida vehicula, nisl.
        </p>
        <h3>Heading 3</h3>
        <p>
          Lorem ipsum dolor sit amet, adipiscing elit. Nullam dignissim convallis est. Quisque
          aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi,
          imperdiet at, tincidunt nec, gravida vehicula, nisl.
        </p>
        <h4>Heading 4</h4>
        <p>
          Lorem ipsum dolor sit amet, adipiscing elit. Nullam dignissim convallis est. Quisque
          aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi,
          imperdiet at, tincidunt nec, gravida vehicula, nisl.
        </p>
        <h5>Heading 5</h5>
        <p>
          Lorem ipsum dolor sit amet, adipiscing elit. Nullam dignissim convallis est. Quisque
          aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi,
          imperdiet at, tincidunt nec, gravida vehicula, nisl.
        </p>
        <h6>Heading 6</h6>
        <p>
          Lorem ipsum dolor sit amet, adipiscing elit. Nullam dignissim convallis est. Quisque
          aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi,
          imperdiet at, tincidunt nec, gravida vehicula, nisl.
        </p>
        <hr />
        <h1 id="text-block">Block Elements</h1>
        <h2 id="paragraph">Paragraphs and Images</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
        <p>
          Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent mattis,
          massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam eget metus.
          Maecenas ornare tortor.
        </p>
        <p>
          <img
            alt="Placeholder Image and Some Alt Text"
            src="https://placehold.it/350x150"
            title="A title element for this placeholder image."
          />
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dignissim convallis est.
          Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem.
        </p>
        <h2 id="blockquote">Blockquote</h2>
        <p>
          This is a standard paragraph. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        </p>
        <blockquote>
          "<strong>This is a blockquote.</strong> Lorem ipsum dolor sit amet, consectetuer
          adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc
          iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec,
          gravida vehicula, nisl."
        </blockquote>
        <p>
          This is a standard paragraph. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        </p>
        <h2 id="figure-caption">Figure-Caption</h2>
        <figure>
          <img src="https://placehold.it/350x150" alt="A placeholder figure image." />
          <figcaption>The figcaption element example</figcaption>
        </figure>
        <h2 id="details-summary">Details-Summary</h2>
        <details>
          <summary>The summary element example</summary>
          <p>
            The details example text. It may be styled differently based on what browser or
            operating system you are using.
          </p>
        </details>
        <hr />
        <h1 id="text-elements">Text Elements</h1>
        <p>
          The <a href="#">a element</a> and{' '}
          <a href="https://example.com" target="_blank" rel="noreferrer">
            external a element
          </a>{' '}
          examples
        </p>
        <p>
          The <abbr>abbr element</abbr> and an <abbr title="Abbreviation">abbr</abbr> element with
          title examples
        </p>
        <p>
          The <b>b element</b> example
        </p>
        <p>
          The <cite>cite element</cite> example
        </p>
        <p>
          The <code>code element</code> example
        </p>
        <p>
          The <data value="3967381398">data element</data> example
        </p>
        <p>
          The <del>del element</del> example
        </p>
        <p>
          The <dfn>dfn element</dfn> and <dfn title="Title text">dfn element with title</dfn>{' '}
          examples
        </p>
        <p>
          The <em>em element</em> example
        </p>
        <p>
          The <i>i element</i> example
        </p>
        <p>
          The <ins>ins element</ins> example
        </p>
        <p>
          The <kbd>kbd element</kbd> example
        </p>
        <p>
          The <mark>mark element</mark> example
        </p>
        <p>
          The <q>q element</q> example
        </p>
        <p>
          The{' '}
          <q>
            q element <q>inside</q> a q element
          </q>{' '}
          example
        </p>
        <p>
          The <s>s element</s> example
        </p>
        <p>
          The <samp>samp element</samp> example
        </p>
        <p>
          The <small>small element</small> example
        </p>
        <p>
          The <span>span element</span> example
        </p>
        <p>
          The <strong>strong element</strong> example
        </p>
        <p>
          The <sub>sub element</sub> example
        </p>
        <p>
          The <sup>sup element</sup> example
        </p>
        <p>
          The <time dateTime="2005-05-15 19:00">time element</time> example
        </p>
        <p>
          The <u>u element</u> example
        </p>
        <p>
          The <var>var element</var> example
        </p>
        <hr />
      </div>
    </div>
  </Layout>
);

export default StyleGuidePage;
