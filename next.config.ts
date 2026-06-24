import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // The on-the-fly image optimizer is unusably slow in this environment, so serve the
    // already-reasonably-sized exported assets directly. Re-enable if deploying somewhere
    // with a working sharp build (e.g. Vercel).
    unoptimized: true,
  },
};

export default nextConfig;
