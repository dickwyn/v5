/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    reactStrictMode: true,
    pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
    images: {
        domains: ['images.unsplash.com'],
    },
    env: {
        NEXT_PUBLIC_BUILD_TIMESTAMP: new Date().toUTCString(),
    },
};

export default nextConfig;
