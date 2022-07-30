import Link from 'next/link';
import styles from '../styles/specialLink.module.scss';

const SpecialLink = ({ href, label }: { href: string; label: string }): JSX.Element => (
  <Link href={href}>
    <a className={styles.specialLink}>{label}</a>
  </Link>
);

export default SpecialLink;
