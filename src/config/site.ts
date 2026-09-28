import type { ComponentType, SVGProps } from "react";

import {
  InstagramIcon,
  LinkedInIcon,
  YouTubeIcon,
} from "@/components/icons/social";

/**
 * Central site configuration.
 *
 * Anything factual about the company (domain, contact channels, social URLs,
 * login URL) is intentionally a PLACEHOLDER. Replace the values below — or set
 * the matching environment variable — before going live. No real URLs are
 * invented anywhere in this codebase.
 */

const PLACEHOLDER_EMAIL = "halo@qrion.example.com";

export const siteConfig = {
  name: "QRION",
  tagline: "Integrated Digital Ecosystem for Education",
  shortDescription:
    "Ekosistem digital terintegrasi untuk sekolah, madrasah, dan pesantren.",
  description:
    "QRION menyediakan solusi digital terintegrasi untuk membantu sekolah, madrasah, dan pesantren mengelola pembayaran, presensi, kartu pintar, jurnal pembelajaran, dan penerimaan murid baru.",
  /** Set NEXT_PUBLIC_SITE_URL in production (e.g. https://<domain-anda>). */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://qrion.example.com",
  locale: "id_ID",
  keywords: [
    "sistem informasi sekolah",
    "digitalisasi sekolah",
    "aplikasi madrasah",
    "sistem pesantren",
    "pembayaran SPP digital",
    "presensi siswa digital",
    "kartu pelajar digital",
    "jurnal pembelajaran",
    "penerimaan murid baru online",
    "ekosistem digital pendidikan",
    "QRION",
  ],
} as const;

/**
 * Contact channels shown across the site.
 * TODO: replace with verified company contact details before launch.
 */
export const contactChannels = {
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? PLACEHOLDER_EMAIL,
  emailIsPlaceholder: !process.env.NEXT_PUBLIC_CONTACT_EMAIL,
  /** WhatsApp business number in international format, e.g. "+62 8xx-xxxx-xxxx". */
  whatsapp: process.env.NEXT_PUBLIC_CONTACT_WHATSAPP ?? null,
  /** Office address — add the real one when available. */
  address: process.env.NEXT_PUBLIC_CONTACT_ADDRESS ?? null,
  /** Operating hours shown on the contact page. */
  officeHours: "Senin – Jumat, 08.00 – 17.00 WIB",
};

/**
 * External destinations that do not exist yet.
 * When a value is `null` the UI renders a clearly disabled, non-navigating
 * control instead of a broken link.
 */
export const externalLinks = {
  /** Customer portal / app login. Set NEXT_PUBLIC_LOGIN_URL to enable. */
  login: process.env.NEXT_PUBLIC_LOGIN_URL ?? null,
};

export type NavItem = {
  title: string;
  href: string;
  description?: string;
  children?: NavItem[];
};

export const mainNav: NavItem[] = [
  { title: "Beranda", href: "/" },
  {
    title: "Produk",
    href: "/produk",
    children: [
      {
        title: "Ontuition",
        href: "/produk/ontuition",
        description: "Pembayaran sekolah digital",
      },
      {
        title: "Oncard",
        href: "/produk/oncard",
        description: "Kartu pintar siswa",
      },
      {
        title: "Ontime",
        href: "/produk/ontime",
        description: "Presensi digital terpadu",
      },
      {
        title: "Qrion Jurnal",
        href: "/produk/jurnal",
        description: "Jurnal pembelajaran digital",
      },
      {
        title: "Qrion SPMB",
        href: "/produk/spmb",
        description: "Penerimaan murid baru digital",
      },
    ],
  },
  { title: "Solusi", href: "/solusi" },
  { title: "Live Preview", href: "/live-preview" },
  { title: "Tentang Kami", href: "/tentang" },
  { title: "Insight", href: "/insight" },
  { title: "Hubungi Kami", href: "/kontak" },
];

export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: "Produk",
    items: [
      { title: "Ontuition", href: "/produk/ontuition" },
      { title: "Oncard", href: "/produk/oncard" },
      { title: "Ontime", href: "/produk/ontime" },
      { title: "Qrion Jurnal", href: "/produk/jurnal" },
      { title: "Qrion SPMB", href: "/produk/spmb" },
    ],
  },
  {
    title: "Perusahaan",
    items: [
      { title: "Tentang Kami", href: "/tentang" },
      { title: "Karier", href: "/karier" },
      { title: "Insight", href: "/insight" },
      { title: "Kontak", href: "/kontak" },
    ],
  },
  {
    title: "Dukungan",
    items: [
      { title: "Live Preview", href: "/live-preview" },
      { title: "Pusat Bantuan", href: "/pusat-bantuan" },
      { title: "Dokumentasi", href: "/dokumentasi" },
      { title: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Legal",
    items: [
      { title: "Kebijakan Privasi", href: "/kebijakan-privasi" },
      { title: "Syarat & Ketentuan", href: "/syarat-ketentuan" },
    ],
  },
];

export type SocialLink = {
  title: string;
  href: string | null;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

/**
 * Social profiles are placeholders until the official QRION accounts exist.
 * Add the URLs here (or via env) and the disabled state disappears automatically.
 */
export const socialLinks: SocialLink[] = [
  {
    title: "Instagram",
    href: process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM ?? null,
    icon: InstagramIcon,
  },
  {
    title: "LinkedIn",
    href: process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN ?? null,
    icon: LinkedInIcon,
  },
  {
    title: "YouTube",
    href: process.env.NEXT_PUBLIC_SOCIAL_YOUTUBE ?? null,
    icon: YouTubeIcon,
  },
];

/** Primary conversion CTAs reused across the site. */
export const ctaLinks = {
  demo: "/demo",
  contact: "/kontak",
  livePreview: "/live-preview",
};
