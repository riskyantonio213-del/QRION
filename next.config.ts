import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // QRION ships its placeholder brand artwork (logo cloud marks, about-us
    // illustration) as local SVG files that are rendered through `next/image`.
    // Remote SVG sources are still blocked; only same-origin files are served.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
