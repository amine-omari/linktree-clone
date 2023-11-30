/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["pbs.twimg.com", "encrypted-tbn0.gstatic.com",],
  },
};

module.exports = nextConfig;
