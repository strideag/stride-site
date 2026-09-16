import type { NextConfig } from "next";

// While the main site isn't launched, the /bni landing page is published on its
// own subdomain. On that host every other path folds back into the LP, so the
// unfinished site isn't browsable there. Remove this once the site goes live.
const LP_ONLY_HOST = process.env.NEXT_PUBLIC_LP_ONLY_HOST ?? "diagnostico.stride-ag.com";

const nextConfig: NextConfig = {
  images: {
    // The on-the-fly image optimizer is unusably slow in this environment, so serve the
    // already-reasonably-sized exported assets directly. Re-enable if deploying somewhere
    // with a working sharp build (e.g. Vercel).
    unoptimized: true,
    remotePatterns: [{ protocol: "https", hostname: "cdn.sanity.io" }],
  },
  async redirects() {
    const onLpHost = [{ type: "host" as const, value: LP_ONLY_HOST }];
    return [
      { source: "/", has: onLpHost, destination: "/bni", permanent: false },
      {
        // everything except the LP itself and the assets it needs
        source: "/:path((?!bni|api|images|_next|favicon.ico|robots.txt|sitemap.xml).*)",
        has: onLpHost,
        destination: "/bni",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
