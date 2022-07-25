import { nanoid } from 'nanoid';
import Link from 'next/link';

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

const Header = (): JSX.Element => (
  <header>
    <div className="wrapper">
      <div className="content-container">
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
        </nav>
      </div>
    </div>
  </header>
);

export default Header;
