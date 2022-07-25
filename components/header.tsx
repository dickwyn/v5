import useDarkMode from '@fisch0920/use-dark-mode';
import IconButton from '@mui/material/IconButton';
import Brightness2TwoToneIcon from '@mui/icons-material/Brightness2TwoTone';
import LightModeTwoToneIcon from '@mui/icons-material/LightModeTwoTone';
import { nanoid } from 'nanoid';
import Link from 'next/link';
import Image from 'next/image';
import LogoDark from '../images/brand/logo-dark.svg';
import LogoLight from '../images/brand/logo-light.svg';

const NAV_LINKS = [
  {
    id: nanoid(),
    name: 'about',
    path: '/about',
    internal: true,
  },
  {
    id: nanoid(),
    name: 'blog',
    path: '/blog',
    internal: true,
  },
  {
    id: nanoid(),
    name: 'things',
    path: '/things',
    internal: true,
  },
  {
    id: nanoid(),
    name: 'projects',
    path: '/projects',
    internal: true,
  },
  {
    id: nanoid(),
    name: 'gear',
    path: '/uses',
    internal: true,
  },
];

const Header = (): JSX.Element => {
  const darkMode = useDarkMode();

  return (
    <header>
      <div className="wrapper">
        <div className="content-container">
          <Link href="/" className="home">
            <Image
              src={darkMode.value ? LogoDark : LogoLight}
              width="500"
              height="500"
              alt="dickwyn's icon"
            />
          </Link>
          <nav role="navigation">
            <ul>
              {NAV_LINKS.map((item) => (
                <li key={item.id}>
                  {item.internal ? (
                    <Link href={item.path}>{item.name}</Link>
                  ) : (
                    <a href={item.path}>{item.name}</a>
                  )}
                </li>
              ))}
            </ul>
            <div className="dark-mode-toggle-container">
              <IconButton aria-label="Toggle automatic/light/dark mode" onClick={darkMode.toggle}>
                {darkMode.value ? <Brightness2TwoToneIcon /> : <LightModeTwoToneIcon />}
              </IconButton>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
