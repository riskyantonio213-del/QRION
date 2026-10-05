import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Logo } from "@/components/layout/logo";
import { contactChannels, footerNav, siteConfig, socialLinks } from "@/config/site";
import { cn, externalLinkProps } from "@/lib/utils";

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
        className="inline-flex size-9 cursor-not-allowed items-center justify-center rounded-lg border border-white/10 text-white/40"
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
      className="inline-flex size-9 items-center justify-center rounded-lg border border-white/10 text-white/70 transition-colors hover:border-white/25 hover:text-brand-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
    >
      <Icon className="size-4" />
    </a>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-indigo-dark text-white">
      <Container size="wide">
        <div className="grid gap-12 py-16 lg:grid-cols-[1.4fr_2.6fr] lg:gap-16 lg:py-20">
          <div className="max-w-sm">
            <Logo variant="inverted" />
            <p className="mt-5 text-[15px] leading-relaxed text-white/70">
              Ekosistem teknologi terintegrasi untuk membantu transformasi digital
              institusi pendidikan.
            </p>
            <p className="mt-4 text-sm text-white/55">
              {siteConfig.tagline}
            </p>

            <div className="mt-6 flex items-center gap-2">
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
                <h2 className="font-display text-sm font-semibold tracking-wide text-white">
                  {column.title}
                </h2>
                <ul className="mt-4 grid gap-2.5">
                  {column.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        {...externalLinkProps(item.href)}
                        className="inline-block rounded py-1 text-sm text-white/70 transition-colors hover:text-brand-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div
          className={cn(
            "flex flex-col gap-3 border-t border-white/10 py-6 text-sm text-white/55",
            "sm:flex-row sm:items-center sm:justify-between",
          )}
        >
          <p>
            © {year} {siteConfig.name}. Seluruh hak cipta dilindungi.
          </p>
          <p>{contactChannels.officeHours}</p>
        </div>
      </Container>
    </footer>
  );
}
