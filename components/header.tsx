import useDarkMode from '@fisch0920/use-dark-mode';
import IconButton from '@mui/material/IconButton';
import Brightness2TwoToneIcon from '@mui/icons-material/Brightness2TwoTone';
import LightModeTwoToneIcon from '@mui/icons-material/LightModeTwoTone';
import { nanoid } from 'nanoid';
import Link from 'next/link';
import Image from 'next/image';
import LogoLight from '../images/brand/logo-light.svg';
import LogoDark from '../images/brand/logo-dark.svg';
import SpecialLink from './specialLink';

const NAV_LINKS = [
  {
    id: nanoid(),
    name: 'blog',
    internal: true,
  },
  {
    id: nanoid(),
    name: 'things',
    internal: true,
  },
  {
    id: nanoid(),
    name: 'uses',
    internal: true,
  },
];

const Header = (): JSX.Element => {
  const darkMode = useDarkMode();

  return (
    <header className="wrapper">
      <div className="left logo">
        <Link href="/">
          <a>
            <Image src={darkMode.value ? LogoDark : LogoLight} alt="dickwyn's icon" />
          </a>
        </Link>
      </div>
      <nav role="navigation">
        <ul>
          {NAV_LINKS.map(({ id, name, internal }) => (
            <li key={id}>
              {internal ? (
                <SpecialLink href={`/${name}`} label={name} />
              ) : (
                <a href={name}>{name}</a>
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
    </header>
  );
};

export default Header;
