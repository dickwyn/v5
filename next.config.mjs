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
        // h/t to Ravgeet Dhillon - https://stackoverflow.com/a/70132575/4958244
        NEXT_PUBLIC_BUILD_TIMESTAMP: new Date().toUTCString(),
    },
};

export default nextConfig;
