import { nanoid } from 'nanoid';
import IconButton from '@mui/material/IconButton';

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
    <div className="wrapper">
      <div className="content-container">
        <div className="right">
          {SOCIAL_LINKS.map((item) => (
            <IconButton
              key={item.id}
              size="small"
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${item.name} profile`}
            >
              {item.name.toLowerCase()}
            </IconButton>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
