import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumb?: { label: string; href?: string }[];
  children?: React.ReactNode;
  align?: "left" | "center";
  /** Accent classes for product pages so each module keeps its identity. */
  accent?: { chip: string; gradient: string };
  id?: string;
};

/** Standard hero used by all interior pages (products, about, contact, etc.). */
export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb,
  children,
  align = "left",
  accent,
  id = "page-hero-heading",
}: PageHeroProps) {
  return (
    <section
      aria-labelledby={id}
      className="relative isolate overflow-x-clip border-b border-border bg-background pb-12 pt-10 sm:pb-14 sm:pt-12 lg:pb-16 lg:pt-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[360px] bg-[radial-gradient(620px_280px_at_12%_0%,rgba(232,246,241,0.9),transparent),radial-gradient(520px_240px_at_92%_6%,rgba(221,245,234,0.8),transparent)]"
      />

      <Container size="wide">
        <div
          className={cn(
            "flex flex-col gap-5",
            align === "center" ? "mx-auto max-w-3xl items-center text-center" : "max-w-3xl",
          )}
        >
          {breadcrumb?.length ? (
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-1.5 text-[13px] text-muted-foreground">
                {breadcrumb.map((crumb, index) => {
                  const isLast = index === breadcrumb.length - 1;
                  return (
                    <li key={`${crumb.label}-${index}`} className="flex items-center gap-1.5">
                      {crumb.href && !isLast ? (
                        <Link
                          href={crumb.href}
                          className="rounded transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
                        >
                          {crumb.label}
                        </Link>
                      ) : (
                        <span aria-current={isLast ? "page" : undefined}>
                          {crumb.label}
                        </span>
                      )}
                      {!isLast ? (
                        <ChevronRight aria-hidden="true" className="size-3.5" />
                      ) : null}
                    </li>
                  );
                })}
              </ol>
            </nav>
          ) : null}

          {eyebrow ? (
            <span
              className={cn(
                "inline-flex w-fit items-center rounded-full border px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.12em]",
                accent ? accent.chip : "border-primary/15 bg-primary/8 text-brand-dark",
              )}
            >
              {eyebrow}
            </span>
          ) : null}

          <h1
            id={id}
            className="text-balance font-display text-[30px] font-extrabold leading-[1.14] tracking-tight text-foreground sm:text-[38px] lg:text-[46px]"
          >
            {title}
          </h1>

          {description ? (
            <p className="text-pretty text-[15px] leading-relaxed text-muted-foreground sm:text-[17px]">
              {description}
            </p>
          ) : null}

          {children}
        </div>
      </Container>
    </section>
  );
}
