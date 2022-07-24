import rehypeHighlight from 'rehype-highlight';
import remarkFrontmatter from 'remark-frontmatter';

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
};

export default nextConfig;
