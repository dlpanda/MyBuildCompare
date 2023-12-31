/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.sanity.io'],
        // remotePatterns: [
        //     {
        //         protocol: 'https',
        //         hostname: 'cdn.sanity.io',
        //         pathname: '**',
        //     },
        // ],
    },
    generateBuildId: async () => {
        // You can, for example, get the latest git commit hash here
        return 'my-build-id';
    },
};

module.exports = nextConfig;
