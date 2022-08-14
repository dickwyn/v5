import type { GetStaticProps } from 'next';
import Image from 'next/image';

import styles from '../styles/index.module.scss';
import Layout from '../components/layout';
import HeroImage from '../images/IMG_6764@0.5x.jpg';
import StandardLink from '../components/standardLink';

const IndexPage = (): JSX.Element => (
    <Layout>
        <div className="image-wrapper">
            <Image
                alt="photo of the lower antelope canyon"
                src={HeroImage}
                width={1600}
                height={500}
                objectFit="cover"
                objectPosition="0 54%"
            />
        </div>
        <h1 className={`${styles.title} ${styles.newSection} ${styles.minimalHeading}`}>
            hello, i&apos;m dickwyn
        </h1>
        <h2 className={`${styles.subtitle} ${styles.minimalHeading}`}>
            a software engineer that&apos;s passionate about content creation
        </h2>
        <p className={styles.newSection}>current: software engineer at Microsoft</p>
        <p>
            previous: front end engineering at{' '}
            <StandardLink href="https://www.clairvoyant.ai/" label="Clairvoyant/EXL" />; computer
            science at <StandardLink href="https://scai.engineering.asu.edu/" label="ASU" />
        </p>
        <p className={`${styles.mutedText} ${styles.newSection}`}>
            i like consumer technology, airplanes, photography, and eating + cooking chicken rice
        </p>
        <p className={styles.mutedText}>
            time allocation: 20% coding, 20% youtube video making,10% meetings, 5% cooking, 15%
            learning, 30% sleep
        </p>
    </Layout>
);

// TODO return blog entries
export const getStaticProps: GetStaticProps = async () => ({
    props: {},
});

export default IndexPage;
