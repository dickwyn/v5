import Footer from './footer';
import Header from './header';
import Meta from './meta';
import styles from '../styles/Layout.module.scss';

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: LayoutProps): JSX.Element => (
  <>
    <Meta />
    <a className={styles.a11ySkipLink} href="#content">
      Skip to Main Content
    </a>
    <Header />
    <div id="content" />
    <main className="wrapper">{children}</main>
    <Footer />
  </>
);

export default Layout;
