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
        <h1>Style Guide</h1>

        <p>
            This style guide was adapted from the{' '}
            <a href="https://www.poormansstyleguide.com/">Poor Man's Styleguide</a> created by{' '}
            <a href="https://www.bryanbraun.com/">Bryan Braun</a>. It serves as a guide for
            standardized styling for this site.
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
                            <div className={`${styles.colorPaletteItem} ${styles[name + value]}`}>
                                {value}
                            </div>
                        ))}
                    </div>
                </Fragment>
            );
        })}
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
            aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero
            nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl.
        </p>
        <h2>Heading 2</h2>
        <p>
            Lorem ipsum dolor sit amet, adipiscing elit. Nullam dignissim convallis est. Quisque
            aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero
            nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl.
        </p>
        <h3>Heading 3</h3>
        <p>
            Lorem ipsum dolor sit amet, adipiscing elit. Nullam dignissim convallis est. Quisque
            aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero
            nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl.
        </p>
        <h4>Heading 4</h4>
        <p>
            Lorem ipsum dolor sit amet, adipiscing elit. Nullam dignissim convallis est. Quisque
            aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero
            nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl.
        </p>
        <h5>Heading 5</h5>
        <p>
            Lorem ipsum dolor sit amet, adipiscing elit. Nullam dignissim convallis est. Quisque
            aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero
            nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl.
        </p>
        <h6>Heading 6</h6>
        <p>
            Lorem ipsum dolor sit amet, adipiscing elit. Nullam dignissim convallis est. Quisque
            aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero
            nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl.
        </p>
        <hr />

        <h1 id="text-block">Block Elements</h1>
        <h2 id="paragraph">Paragraphs and Images</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
        </p>
        <p>
            Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent
            mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam
            eget metus. Maecenas ornare tortor.
        </p>
        <p>
            <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAACHCAAAAAANGYs3AAADvElEQVR4Ae3ZhVbj7BrF8XPVuyl2iru7u4z74FRwKxGa7Mv5Vt6URTNaZkmQ/cf1ya8S/R9fWAILLLDAAgsssMACCyywwAILLPATTWCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggd8g3jUfUhNmHjlY4GLBVIfxgqnE33e0cfuUwbHqsci/tQk4zwEssJPdOSqxXDG7mb8KqgL7R/suw+ydXJF3BTfHlwErcvLHRZ/xaUmCd5oAoGEjMEszjrDMGjmOcue/AI/g2h5OA6k+m5utALBoTM67DgtAesRm1NVoPQBY/Z9/npYMeBFIt3emgbUIAqurNY2Rv4JXmtHUZQHjX1Pp9o408JYk+0NNJgU0Gz+/1AKWMXb9PC0RcBZYdEl3DKljsgjM+GSwnyOd4ifgrFgsBr8Eo+6A9HoAdF6R161oNs+CmX2P9NeAryR5bqEp69Mr9BtwfFoy4B4Mm49uHd6bBTqqYqVlwO/LAuRJ8iNgx35vMfq1+ug/zBpwfFoi4Atgj6YhzJkvP1YJbjN3fAnoZ9gxcMb7hjBJ8hrYYAU4Pi0R8B5QODeNod+ArFWnKvAQTbVYNx8vgRzvG8RUdP8fV4Lj0xIBf8R9IyQLdYA1cVo9+P9l8PXdneduvlmZm8uY3/sM2JXg+LREwOtA/11vzGN82gIwF1QLzsTBN0MWoubNf7dYCY5NS+we9hjv5m0GWPg38HUzrKnPe/lcG5ZIvgO8SnBsWmLP4TP+mDeIGv+fwG+QOmJYL1ajf3BRATbTEgafA+/4U1mgEC2v/TDwEHpp6jbfzgMfaeo3YDMtWTB7kbnljx1Fa9d94Pxh4EHUeQylKfPtUgM6fYbSlAGbaQmD94DWI5LemxWSx8uh8HoEtSWSp8ByQKdYPXgNmDnn7YdaYJkkV4Exm7dbbTDg2LSEwFwCUNvVDFg2uQjUdjaj/Ej0M0BTu7VUPdhpBNAAtH3CtFkBtgBoTcNqNeDYtKTA3GoCgNTICcnNHoRlvtK0mQZQt149mJfDAOoWPdeKgN54GkAmu2jAsWkJnrV0c7vnpbvPT/Z2L3yWs/d3Tnw+KO/40g8/eIzyT/auyRl0xaY9+9O0Qxh7Ueel7Vqsvgxw/tQ8wYeAwssA96Cuo6fJAhb5IsDBoIWwzOfgRYDNWv9gK3sV6GKawAILLPDzSWCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFvg/grmeGCDEU1MAAAAASUVORK5CYII="
                alt="Test Image"
            />
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dignissim convallis
            est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem.
        </p>
        <h2 id="blockquote">Blockquote</h2>
        <p>
            This is a standard paragraph. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        </p>
        <blockquote>
            "<strong>This is a blockquote.</strong> Lorem ipsum dolor sit amet, consectetuer
            adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc
            iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt
            nec, gravida vehicula, nisl."
        </blockquote>
        <p>
            This is a standard paragraph. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        </p>
        <h2 id="figure-caption">Figure-Caption</h2>
        <figure>
            <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAACHCAAAAAANGYs3AAADvElEQVR4Ae3ZhVbj7BrF8XPVuyl2iru7u4z74FRwKxGa7Mv5Vt6URTNaZkmQ/cf1ya8S/R9fWAILLLDAAgsssMACCyywwAILLPATTWCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggd8g3jUfUhNmHjlY4GLBVIfxgqnE33e0cfuUwbHqsci/tQk4zwEssJPdOSqxXDG7mb8KqgL7R/suw+ydXJF3BTfHlwErcvLHRZ/xaUmCd5oAoGEjMEszjrDMGjmOcue/AI/g2h5OA6k+m5utALBoTM67DgtAesRm1NVoPQBY/Z9/npYMeBFIt3emgbUIAqurNY2Rv4JXmtHUZQHjX1Pp9o408JYk+0NNJgU0Gz+/1AKWMXb9PC0RcBZYdEl3DKljsgjM+GSwnyOd4ifgrFgsBr8Eo+6A9HoAdF6R161oNs+CmX2P9NeAryR5bqEp69Mr9BtwfFoy4B4Mm49uHd6bBTqqYqVlwO/LAuRJ8iNgx35vMfq1+ug/zBpwfFoi4Atgj6YhzJkvP1YJbjN3fAnoZ9gxcMb7hjBJ8hrYYAU4Pi0R8B5QODeNod+ArFWnKvAQTbVYNx8vgRzvG8RUdP8fV4Lj0xIBf8R9IyQLdYA1cVo9+P9l8PXdneduvlmZm8uY3/sM2JXg+LREwOtA/11vzGN82gIwF1QLzsTBN0MWoubNf7dYCY5NS+we9hjv5m0GWPg38HUzrKnPe/lcG5ZIvgO8SnBsWmLP4TP+mDeIGv+fwG+QOmJYL1ajf3BRATbTEgafA+/4U1mgEC2v/TDwEHpp6jbfzgMfaeo3YDMtWTB7kbnljx1Fa9d94Pxh4EHUeQylKfPtUgM6fYbSlAGbaQmD94DWI5LemxWSx8uh8HoEtSWSp8ByQKdYPXgNmDnn7YdaYJkkV4Exm7dbbTDg2LSEwFwCUNvVDFg2uQjUdjaj/Ej0M0BTu7VUPdhpBNAAtH3CtFkBtgBoTcNqNeDYtKTA3GoCgNTICcnNHoRlvtK0mQZQt149mJfDAOoWPdeKgN54GkAmu2jAsWkJnrV0c7vnpbvPT/Z2L3yWs/d3Tnw+KO/40g8/eIzyT/auyRl0xaY9+9O0Qxh7Ueel7Vqsvgxw/tQ8wYeAwssA96Cuo6fJAhb5IsDBoIWwzOfgRYDNWv9gK3sV6GKawAILLPDzSWCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFvg/grmeGCDEU1MAAAAASUVORK5CYII="
                alt="Test Image"
            />
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
            The <a href="#">a element</a>,{' '}
            <a href="https://example.com" target="_blank">
                external a element
            </a>
            , and{' '}
            <a href="#" title="Example Title">
                a element with title
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

        {/* TODO configure <pre> <code> */}
        <h1 id="monospace">Monospace / Preformatted</h1>
        <hr />

        <h1 id="list-types">List Types</h1>
        <h2 id="ordered-list">Ordered List</h2>
        <ol>
            <li>List Item 1</li>
            <li>List Item 2</li>
            <li>
                List Item 3
                <ol>
                    <li>List Item 3.1</li>
                    <li>
                        List Item 3.2
                        <ol>
                            <li>List Item 3.2.1</li>
                            <li>List Item 3.2.2</li>
                        </ol>
                    </li>
                    <li>List Item 3.3</li>
                </ol>
            </li>
            <li>List Item 4</li>
        </ol>
        <h2 id="unordered-list">Unordered List</h2>
        <ul>
            <li>List Item 1</li>
            <li>List Item 2</li>
            <li>
                List Item 3
                <ul>
                    <li>List Item 3.1</li>
                    <li>
                        List Item 3.2
                        <ul>
                            <li>List Item 3.2.1</li>
                            <li>List Item 3.2.2</li>
                        </ul>
                    </li>
                    <li>List Item 3.3</li>
                </ul>
            </li>
            <li>List Item 4</li>
        </ul>
        <h2 id="definition-list">Definition List</h2>
        <dl>
            <dt>Definition Term 1</dt>
            <dd>Definition Description 1</dd>
            <dt>Definition Term 2</dt>
            <dd>Definition Description 2</dd>
        </dl>
        <hr />

        <h1 id="tables">Tables</h1>
        <table cellSpacing="0" cellPadding="0">
            <caption>This is a table caption</caption>
            <thead>
                <tr>
                    <th>Table Header 1</th>
                    <th>Table Header 2</th>
                    <th>Table Header 3</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Division 1</td>
                    <td>Division 2</td>
                    <td>Division 3</td>
                </tr>
                <tr className="even">
                    <td>Division 1</td>
                    <td>Division 2</td>
                    <td>Division 3</td>
                </tr>
                <tr>
                    <td>Division 1</td>
                    <td>Division 2</td>
                    <td>Division 3</td>
                </tr>
                <tr>
                    <td colSpan={3}>A row with a cell spanning all 3 columns</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <th>Table Footer 1</th>
                    <th>Table Footer 2</th>
                    <th>Table Footer 3</th>
                </tr>
            </tfoot>
        </table>
        <hr />

        <h1 id="media-elements">Media</h1>
        <h2>The Audio Element:</h2>
        <audio controls>
            <source src="https://simpl.info/audio/audio/audio.mp3" type="audio/mp3" />
            <source src="https://simpl.info/audio/audio/audio.ogg" type="audio/ogg" />
            Your browser does not support the audio element.
        </audio>
        <h2>The Video Element:</h2>
        <video width="320" height="240" controls>
            <source
                src="https://www.html5rocks.com/en/tutorials/video/basics/devstories.webm"
                type='video/webm;codecs="vp8, vorbis"'
            />
            <source
                src="https://www.html5rocks.com/en/tutorials/video/basics/devstories.mp4"
                type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'
            />
            <track
                src="https://www.html5rocks.com/en/tutorials/video/basics/devstories-en.vtt"
                label="English subtitles"
                kind="subtitles"
                srcLang="en"
                default
            />
            Your browser does not support the video tag.
        </video>
        <h2>Embedded content:</h2>
        <p>YouTube video (iframe):</p>
        {/* TODO make responsive */}
        {/* <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/l4f9QF0SGuQ"
      frameborder="0"
      allowfullscreen
    ></iframe> */}
        <hr />
    </Layout>
);

export default StyleGuidePage;
