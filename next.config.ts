import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // VS Code Dev Tunnels: the browser origin differs from the host the dev
  // server reports, so both the tunnel host and localhost must be allowed —
  // `allowedDevOrigins` for dev assets, `serverActions.allowedOrigins` so
  // Server Actions (the /live-preview lead gate) are not rejected as CSRF.
  allowedDevOrigins: [
    "localhost:3000",
    "127.0.0.1:3000",
    "**.asse.devtunnels.ms",
  ],
  experimental: {
    serverActions: {
      allowedOrigins: [
        "localhost:3000",
        "127.0.0.1:3000",
        "**.asse.devtunnels.ms",
      ],
    },
  },
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
