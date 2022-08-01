import Footer from './footer';
import Header from './header';
import Meta, { MetaProps } from './meta';
import styles from '../styles/Layout.module.scss';

interface LayoutProps extends MetaProps {
  children: JSX.Element | JSX.Element[];
  hasHeader?: boolean;
  hasFooter?: boolean;
}

const Layout = ({
  children,
  hasHeader = true,
  hasFooter = true,
  ...metaProps
}: LayoutProps): JSX.Element => (
  <>
    <Meta {...metaProps} />
    <a className={styles.a11ySkipLink} href="#content">
      Skip to Main Content
    </a>
    {hasHeader && <Header />}
    <div id="content" />
    <main className="wrapper">{children}</main>
    {hasFooter && <Footer />}
  </>
);

export default Layout;
