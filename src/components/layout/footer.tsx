"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { useContent } from "@/components/admin/content-provider";
import { Container } from "@/components/layout/container";
import { Logo, LogoMark } from "@/components/layout/logo";
import {
  contactChannels,
  footerNav,
  siteConfig,
  socialLinks,
} from "@/config/site";
import { externalLinkProps } from "@/lib/utils";

function SocialButton({
  title,
  href,
  Icon,
}: {
  title: string;
  href: string | null;
  Icon: (typeof socialLinks)[number]["icon"];
}) {
  // Accounts do not exist yet: render a non-interactive control instead of a
  // broken link. Add the URL in src/config/site.ts to turn it into a real link.
  if (!href) {
    return (
      <span
        className="inline-flex size-10 cursor-not-allowed items-center justify-center rounded-full border border-white/10 text-white/35"
        title={`${title} — tautan belum tersedia`}
        aria-hidden="true"
      >
        <Icon className="size-4" />
      </span>
    );
  }

  return (
    <a
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      aria-label={title}
      className="inline-flex size-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-green hover:text-brand-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
    >
      <Icon className="size-4" />
    </a>
  );
}

export function Footer() {
  const { finalCta } = useContent().home;
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-brand-indigo-dark text-white">
      {/* Glow lembut di balik pita CTA */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-72 w-[min(760px,92%)] -translate-x-1/2 rounded-full bg-brand/25 blur-3xl"
      />

      <Container size="wide" className="relative">
        {/* ===================================================
         * PITA CTA
         * ================================================= */}
        <div className="grid gap-10 border-b border-white/10 pt-16 pb-14 lg:grid-cols-[1.7fr_1fr] lg:items-end lg:gap-16 lg:pt-24 lg:pb-20">
          <div>
            <span className="inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-green">
              {/* <LogoMark className="size-5" /> */}
              -Mulai sekarang
            </span>

            <h2 className="mt-5 text-white text-4xl font-bold leading-[1.06] tracking-tight md:text-5xl lg:text-[3.4rem]">
              {finalCta.title}
            </h2>

            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/60">
              {finalCta.description}
            </p>
          </div>

          <div className="flex flex-col items-start gap-5 lg:items-end">
            <Link
              href={finalCta.primaryCta.href}
              className="group inline-flex items-center gap-3 rounded-full bg-brand-green px-7 py-4 text-sm font-bold text-brand-dark transition-colors duration-300 hover:bg-white text-white hover:text-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              {finalCta.primaryCta.label}
              <ArrowUpRight
                aria-hidden="true"
                className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>

            <a
              href={finalCta.secondaryCta.href}
              {...externalLinkProps(finalCta.secondaryCta.href)}
              className="group inline-flex items-center gap-2 rounded text-sm font-medium text-white/70 underline decoration-white/25 underline-offset-[6px] transition-colors duration-300 hover:text-white hover:decoration-brand-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            >
              {finalCta.secondaryCta.label}
              <ArrowRight
                aria-hidden="true"
                className="size-4 text-brand-green transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>

        {/* ===================================================
         * BRAND + NAVIGASI
         * ================================================= */}
        <div className="grid gap-12 py-14 lg:grid-cols-[1.3fr_2.7fr] lg:gap-16 lg:py-16">
          <div className="max-w-sm">
            <Logo variant="inverted" />
            <p className="mt-5 text-[15px] leading-relaxed text-white/70">
              Ekosistem teknologi terintegrasi untuk membantu transformasi digital
              institusi pendidikan.
            </p>
            <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
              {siteConfig.tagline}
            </p>

            <div className="mt-7 flex items-center gap-2.5">
              {socialLinks.map((social) => (
                <SocialButton
                  key={social.title}
                  title={social.title}
                  href={social.href}
                  Icon={social.icon}
                />
              ))}
            </div>

            <div className="mt-6 text-sm text-white/65">
              <a
                href={`mailto:${contactChannels.email}`}
                className="rounded transition-colors hover:text-brand-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              >
                {contactChannels.email}
              </a>
              {contactChannels.emailIsPlaceholder ? (
                <span className="ml-2 rounded-full border border-white/15 px-2 py-0.5 text-[11px] text-white/45">
                  alamat placeholder
                </span>
              ) : null}
            </div>
          </div>

          <nav
            aria-label="Navigasi footer"
            className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4"
          >
            {footerNav.map((column) => (
              <div key={column.title}>
                <h2 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
                  {column.title}
                </h2>
                <ul className="mt-5 grid gap-3">
                  {column.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        {...externalLinkProps(item.href)}
                        className="group inline-flex items-center gap-1.5 rounded py-0.5 text-sm text-white/75 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                      >
                        <ArrowRight
                          aria-hidden="true"
                          className="size-3.5 shrink-0 -translate-x-1.5 text-brand-green opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                        />
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* ===================================================
         * WORDMARK RAKSASA
         * ================================================= */}
        {/* <div className="border-t border-white/10 pt-12">
          <Image
            src="/images/qrion-logo2.png"
            alt="QRION"
            width={1081}
            height={347}
            className="mx-auto h-auto w-full max-w-5xl select-none opacity-95 [filter:brightness(0)_invert(1)]"
          />
        </div> */}

        {/* ===================================================
         * BAR LEGAL
         * ================================================= */}
        <div className="flex flex-col gap-3 border-t border-white/10 py-6 text-xs text-white sm:flex-row sm:items-center sm:justify-between">
          <p className="text-white/60">
            © {year} {siteConfig.name}. Seluruh hak cipta dilindungi.
          </p>
          <p className="text-white/60">{contactChannels.officeHours}</p>
        </div>
      </Container>
    </footer>
  );
}
