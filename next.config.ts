import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/work/real-estate-agent", destination: "/projects/luminous-estates", permanent: true },
      { source: "/work/plumbing-contractor", destination: "/projects/apex-flow-dynamics", permanent: true },
      { source: "/work/summer-camp", destination: "/projects/camp-horizon-discovery", permanent: true },
      { source: "/work/beauty-nail-tech", destination: "/projects/velvet-noir-atelier", permanent: true },
    ];
  },
};

export default nextConfig;
