/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['lecture-1.vercel.app'],
  },
};

module.exports = nextConfig;
