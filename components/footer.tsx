import { nanoid } from 'nanoid';

const SOCIAL_LINKS = [
  {
    id: nanoid(),
    name: 'Twitter',
    url: 'https://twitter.com/dickwyn',
  },
  {
    id: nanoid(),
    name: 'YouTube',
    url: 'https://youtube.com/dickwyn',
  },
  {
    id: nanoid(),
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/dickwyn',
  },
];

const Footer = (): JSX.Element => (
  <footer>
    {SOCIAL_LINKS.map(({ id, name, url }) => (
      <a key={id} href={url}>
        {name.toLowerCase()}
      </a>
    ))}
  </footer>
);

export default Footer;
