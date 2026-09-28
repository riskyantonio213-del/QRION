import Image from "next/image";

import { cn } from "@/lib/utils";

/**
 * PLACEHOLDER LOGO CLOUD
 * ----------------------
 * The marks below are generic placeholder artwork shipped in `public/logos/`.
 * No real institution is represented and no partnership is implied.
 *
 * To go live:
 *   1. Drop the real school / madrasah / pesantren logos into `public/logos/`.
 *   2. Replace `placeholderLogos` with `{ name, src, width, height }` entries.
 *   3. Keep rendering them with next/image so they are served optimised.
 *
 * The logo files are local SVGs, which Next.js only serves because
 * `images.dangerouslyAllowSVG` is enabled in next.config.ts for same-origin
 * artwork. Remove that flag if you switch to PNG/WebP assets.
 */

const placeholderLogos = [
  {
    src: "/logos/sekolah-placeholder.svg",
    label: "Logo sekolah (placeholder)",
    width: 176,
  },
  {
    src: "/logos/madrasah-placeholder.svg",
    label: "Logo madrasah (placeholder)",
    width: 184,
  },
  {
    src: "/logos/pesantren-placeholder.svg",
    label: "Logo pesantren (placeholder)",
    width: 188,
  },
  {
    src: "/logos/institusi-placeholder.svg",
    label: "Logo institusi (placeholder)",
    width: 180,
  },
  {
    src: "/logos/yayasan-placeholder.svg",
    label: "Logo yayasan pendidikan (placeholder)",
    width: 180,
  },
];

export function LogoCloud({ className }: { className?: string }) {
  return (
    <ul className={cn("grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5", className)}>
      {placeholderLogos.map((logo) => (
        <li
          key={logo.src}
          className="flex h-20 items-center justify-center rounded-xl border border-border bg-background px-4"
        >
          <Image
            src={logo.src}
            alt={logo.label}
            width={logo.width}
            height={40}
            className="h-8 w-auto opacity-80"
          />
        </li>
      ))}
    </ul>
  );
}
