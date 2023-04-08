/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https:/upload.wikimedia.org',
        port: '',
      },
    ],
  },
};

module.exports = nextConfig;
