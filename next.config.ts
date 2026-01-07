import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/projects",
        destination: "/gallery",
        permanent: true,
      },
      {
        source: "/builders",
        destination: "/commercial",
        permanent: true,
      },
    ];
  },
  trailingSlash: true,
};

export default nextConfig;
