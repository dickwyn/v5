import { nanoid } from 'nanoid';
import IconButton from '@mui/material/IconButton';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
import Link from 'next/link';

const SOCIAL_LINKS = [
  {
    id: nanoid(),
    name: 'Twitter',
    url: 'https://twitter.com/dickwyn',
    component: <TwitterIcon />,
  },
  {
    id: nanoid(),
    name: 'Github',
    url: 'https://github.com/dickwyn',
    component: <GitHubIcon />,
  },
  {
    id: nanoid(),
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/dickwyn',
    component: <LinkedInIcon />,
  },
  {
    id: nanoid(),
    name: 'YouTube',
    url: 'https://youtube.com/dickwyn',
    component: <YouTubeIcon />,
  },
  {
    id: nanoid(),
    name: 'Instagram',
    url: 'https://instagram.com/dickwyn',
    component: <InstagramIcon />,
  },
  {
    id: nanoid(),
    name: 'Email',
    url: 'mailto:dickwyn@outlook.com',
    component: <EmailIcon />,
  },
];

const Footer = (): JSX.Element => (
  <footer>
    <div className="wrapper">
      <div className="content-container">
        <div className="left">© {new Date().getFullYear()} Dick Wyn Yong</div>
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
              {item.component}
            </IconButton>
          ))}
          <Link href="/privacy">Privacy</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
