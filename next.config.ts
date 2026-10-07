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
    // Gambar panel admin diunggah ke Supabase Storage (bucket publik
    // admin-uploads) dan dirender homepage lewat next/image.
    remotePatterns: [
      // Unggahan panel admin (Supabase Storage, bucket publik admin-uploads)
      // dan mirror-nya — hostname wildcard satu subdomain.
      {
        protocol: "https",
        hostname: "*.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
      {
        protocol: "https",
        hostname: "ygydgyerzutlnvpxhvko.supabase.co",
      },
      {
        protocol: "https",
        hostname: "*.supabase.in",
        pathname: "/storage/v1/object/public/**",
      },
    ],
    // QRION ships its placeholder brand artwork (logo cloud marks, about-us
    // illustration) as local SVG files that are rendered through `next/image`.
    // Remote SVG sources are still blocked; only same-origin files are served.
    dangerouslyAllowSVG: true,
    // DNS64 di jaringan (NAT64, RFC6052 `64:ff9b::/96`) membuat lookup
    // hostname Supabase berakhir sebagai alamat yang dianggap "private" oleh
    // cek SSRF Next — padahal IP aslinya publik (Cloudflare) sehingga gambar
    // unggahan admin diblokir (400). URL gambar hanya berasal dari panel
    // admin yang terautentikasi, jadi cek ini dilewati.
    dangerouslyAllowLocalIP: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // 76: cache-bust for the home bento artwork — the dev optimizer keeps a
    // process-memory cache that ignores public/ file rewrites until restart.
    qualities: [75, 76],
  },
};

export default nextConfig;
