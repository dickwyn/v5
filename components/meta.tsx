import Head from 'next/head';
import { useRouter } from 'next/router';
import siteMetadata from '../utils/constants';

export interface MetaProps {
  title?: string;
  description?: string;
  type?: string;
  image?: string;
  twitterCardSize?: 'summary_large_image' | 'summary';
}

const Meta = ({
  title = siteMetadata.title,
  description = siteMetadata.description,
  type = 'website',
  image = siteMetadata.image,
  twitterCardSize = 'summary',
}: MetaProps): JSX.Element => {
  const router = useRouter();
  const isBlogPost = router.asPath.includes('/blog');

  return (
    <Head>
      <title>{title}</title>
      <meta content={description} name="description" />
      <meta property="og:url" content={`${siteMetadata.url}${router.asPath}`} />
      <link rel="canonical" href={`${siteMetadata.url}${router.asPath}`} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Dick Wyn Yong's Website" />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content={twitterCardSize} />
      <meta name="twitter:site" content={siteMetadata.socialHandle.twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {isBlogPost && (
        <>
          {/* TODO update with frontmatter data */}
          <meta name="author" content={siteMetadata.author} />
          <meta name="article:published_time" content="20:20:20" />
          <meta name="article:modified_time" content="20:20:20" />
        </>
      )}
    </Head>
  );
};

export default Meta;
