import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    viewTransition: true,
  },
  async rewrites() {
    return [
      {
        source: "/vibe",
        destination: "/projects/vibe",
      },
      {
        source: "/tagged",
        destination: "/projects/tagged",
      },
      {
        source: "/curaflow",
        destination: "/projects/curaflow",
      },
    ]
  },
};

export default nextConfig;
