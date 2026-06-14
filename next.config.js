/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // Old WordPress slugs -> new Next.js routes (301 permanent)
      { source: '/about-us', destination: '/about', permanent: true },
      {
        source: '/bridging-the-gaps-btg',
        destination: '/bridging-the-gaps',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
