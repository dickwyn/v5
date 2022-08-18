import { nanoid } from 'nanoid';
import { Fragment } from 'react';
import SpecialLink from './specialLink';
import styles from '../styles/components/footer.module.scss';

const SOCIAL_LINKS = [
    {
        id: nanoid(),
        name: 'Twitter',
        href: 'https://twitter.com/dickwyn',
    },
    {
        id: nanoid(),
        name: 'YouTube',
        href: 'https://youtube.com/dickwyn',
    },
    {
        id: nanoid(),
        name: 'LinkedIn',
        href: 'https://linkedin.com/in/dickwyn',
    },
];

const Footer = (): JSX.Element => (
    <footer className={styles.container}>
        <div>
            {SOCIAL_LINKS.map(({ id, name, href }) => (
                <Fragment key={id}>
                    <SpecialLink href={href} label={name} />
                </Fragment>
            ))}
        </div>
    </footer>
);

export default Footer;
