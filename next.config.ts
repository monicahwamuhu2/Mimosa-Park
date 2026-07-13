import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'framerusercontent.com', port: '', pathname: '/images/**' },
    ],
  },
  async redirects() {
    return [
      { source: '/experiences', destination: '/accommodation', permanent: true },
    ];
  },
};

export default nextConfig;