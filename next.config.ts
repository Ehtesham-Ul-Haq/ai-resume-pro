/** @type {import('next').NextConfig} */
const nextConfig = {
  serverActions: { allowedOrigins: [] },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
