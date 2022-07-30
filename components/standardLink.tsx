import Link from 'next/link';
import styles from '../styles/standardLink.module.scss';

const StandardLink = ({ href, label }: { href: string; label: string }): JSX.Element => (
  <Link href={href}>
    <a className={styles.standardLink}>{label}</a>
  </Link>
);

export default StandardLink;
