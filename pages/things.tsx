import Layout from '../components/layout';

const ThingsPage = (): JSX.Element => (
  <Layout title="Things">
    <p>A list of things that I like</p>
    <ul>
      <li>
        <a href="https://www.nytimes.com/wirecutter">Wirecutter</a>
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UC1of9ELYwB623fWaAMRDVFA">Grandpa Kitchen</a>
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UCXuqSBlHAE6Xw-yeJA0Tunw">Linus Tech Tips</a>
      </li>
      <li>
        <a href="https://www.doctorofcredit.com">Doctor Of Credit</a>
      </li>
      <li>
        <a href="https://www.theverge.com">The Verge</a>
      </li>
      <li>
        <a href="https://www.cbc.ca/news/marketplace">CBC Marketplace</a>
      </li>
      <li>
        <a href="https://www.youtube.com/c/KaiManWong/videos">Kai W</a>
      </li>
    </ul>
  </Layout>
);

export default ThingsPage;
