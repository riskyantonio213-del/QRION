"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu } from "lucide-react";

import { Logo } from "@/components/layout/logo";
import { Container } from "@/components/layout/container";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { mainNav, externalLinks, ctaLinks, type NavItem } from "@/config/site";
import { products } from "@/data/products";
import { cn } from "@/lib/utils";

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

/**
 * Kelas dasar link navbar. Efek "glide": highlight pill meluncur masuk dari
 * kiri saat hover (scaleX origin-left). Warna teks + highlight diatur oleh
 * state `clear` (kapsul bening di hero) vs `solid` (kapsul putih saat scroll).
 */
function navLinkClasses({
  clear,
  active,
}: {
  clear: boolean;
  active: boolean;
}) {
  return cn(
    "relative isolate inline-flex h-9 items-center whitespace-nowrap rounded-lg px-2 text-[13px] font-medium transition-colors duration-300 xl:px-3 xl:text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-0",
    "before:absolute before:inset-y-0 before:-inset-x-1.5 before:-z-10 before:origin-left before:scale-x-0 before:rounded-full before:bg-[var(--nav-hover)] before:transition-transform before:duration-300 before:ease-out hover:before:scale-x-100 motion-reduce:before:transition-none",
    clear ? "focus-visible:ring-white/60" : "focus-visible:ring-ring/40",
    active
      ? "text-brand hover:text-brand"
      : clear
        ? "text-white hover:text-white"
        : "text-foreground/85 hover:text-foreground",
  );
}

/**
 * `Masuk` points at the customer portal. The URL is not configured yet, so the
 * control renders as a disabled button instead of a dead link. Set
 * NEXT_PUBLIC_LOGIN_URL (see src/config/site.ts) to enable it.
 */
function LoginButton({
  className,
  variant = "secondary",
}: {
  className?: string;
  variant?: "secondary" | "inverted-outline";
}) {
  if (!externalLinks.login) {
    return (
      <Button
        variant={variant}
        size="sm"
        disabled
        title="Portal masuk akan tersedia setelah URL diatur"
        className={className}
      >
        Masuk
      </Button>
    );
  }

  return (
    <Button variant={variant} size="sm" asChild className={className}>
      <a href={externalLinks.login} rel="noopener noreferrer">
        Masuk
      </a>
    </Button>
  );
}

function ProductsDropdown({
  pathname,
  clear,
}: {
  pathname: string;
  clear: boolean;
}) {
  const active = isActivePath(pathname, "/produk");

  return (
    <div className="group relative">
      <Link
        href="/produk"
        className={cn(navLinkClasses({ clear, active }), "gap-1.5")}
        aria-current={active ? "page" : undefined}
      >
        Produk
        <ChevronDown
          aria-hidden="true"
          className={cn(
            "size-4 transition-transform duration-200 group-hover:rotate-180",
            clear ? "text-white/70" : "text-muted-foreground",
          )}
        />
      </Link>

      {/* Panel opens on hover *and* keyboard focus, so it is reachable without a mouse. */}
      <div
        className={cn(
          "invisible absolute left-0 top-full z-50 w-[340px] translate-y-1 pt-6 opacity-0 transition-all duration-200",
          "group-hover:visible group-hover:translate-y-0 group-hover:opacity-100",
          "group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100",
        )}
      >
        <div className="rounded-xl border border-border bg-popover p-2 shadow-sm shadow-foreground/5">
          <ul className="grid gap-0.5">
            {products.map((product) => {
              const Icon = product.icon;
              return (
                <li key={product.slug}>
                  <Link
                    href={`/produk/${product.slug}`}
                    className="flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
                  >
                    <span
                      className={cn(
                        "mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-md border",
                        product.accent.iconWrap,
                      )}
                    >
                      <Icon
                        aria-hidden="true"
                        className={cn("size-4", product.accent.icon)}
                      />
                    </span>
                    <span className="grid gap-0.5">
                      <span className="text-sm font-medium text-foreground">
                        {product.name}
                      </span>
                      <span className="text-[13px] leading-snug text-muted-foreground">
                        {product.category}
                      </span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-1 border-t border-border pt-1">
            <Link
              href="/produk"
              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-brand transition-colors hover:bg-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
            >
              Lihat semua produk QRION
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileNavItem({ item }: { item: NavItem }) {
  const pathname = usePathname();
  const active = isActivePath(pathname, item.href);

  return (
    <li>
      <SheetClose asChild>
        <Link
          href={item.href}
          className={cn(
            "flex min-h-11 items-center rounded-lg px-3 text-[15px] font-medium transition-colors hover:bg-soft",
            active ? "text-brand" : "text-foreground",
          )}
          aria-current={active ? "page" : undefined}
        >
          {item.title}
        </Link>
      </SheetClose>
      {item.children ? (
        <ul className="mb-1 ml-3 mt-0.5 grid gap-0.5 border-l border-border pl-3">
          {item.children.map((child) => (
            <li key={child.href}>
              <SheetClose asChild>
                <Link
                  href={child.href}
                  className="flex min-h-10 items-center rounded-lg px-3 text-sm text-muted-foreground transition-colors hover:bg-soft hover:text-foreground"
                >
                  {child.title}
                </Link>
              </SheetClose>
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  // `clear` = kondisi belum scroll di halaman hero: kapsul BENING + teks putih.
  // Scroll sedikit saja → kapsul berubah jadi kaca putih transparan + teks gelap.
  const [atTop, setAtTop] = useState(true);
  const clear = pathname === "/" && atTop;

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const update = () => {
      const t = Math.min(window.scrollY / 56, 1);
      const nextTop = window.scrollY < 12;
      setAtTop((prev) => (prev === nextTop ? prev : nextTop));

      const onHero = pathname === "/";
      // Di puncak: bening (hanya blur + hairline); makin scroll: putih transparan.
      header.style.setProperty("--glass-alpha", (0.06 + t * 0.74).toFixed(3));
      header.style.setProperty("--glass-blur", `${(16 + t * 10).toFixed(1)}px`);
      header.style.setProperty("--glass-border", (0.12 + t * 0.04).toFixed(4));
      header.style.setProperty(
        "--glass-border-color",
        onHero && nextTop ? "255 255 255" : "15 23 42",
      );
      header.style.setProperty("--glass-shadow", t.toFixed(3));
      header.style.setProperty(
        "--glass-inset",
        `${(24 * (1 - t)).toFixed(1)}px`,
      );
      header.style.setProperty(
        "--nav-hover",
        onHero && nextTop ? "rgb(255 255 255 / 0.18)" : "rgb(15 23 42 / 0.06)",
      );
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [pathname]);

  return (
    <header ref={headerRef} className="sticky top-0 z-50 w-full">
      <Container size="wide">
        <div
          className="mx-auto mt-3 flex h-16 items-center justify-between gap-4 rounded-full px-4 transition-shadow duration-300 lg:h-[72px] lg:gap-2 lg:px-3 xl:gap-4 xl:px-5"
          style={{
            maxWidth: "calc(100% - var(--glass-inset, 24px))",
            backgroundColor: "rgb(255 255 255 / var(--glass-alpha, 0.06))",
            backdropFilter: "saturate(180%) blur(var(--glass-blur, 16px))",
            WebkitBackdropFilter:
              "saturate(180%) blur(var(--glass-blur, 16px))",
            border:
              "1px solid rgb(var(--glass-border-color, 15 23 42) / var(--glass-border, 0.12))",
            boxShadow:
              "inset 0 1px 0 rgb(255 255 255 / 0.5), 0 8px 32px rgb(0 0 0 / calc((0.35 + var(--glass-shadow, 0)) * 0.18))",
            transition:
              "background-color .3s ease, backdrop-filter .3s ease, border-color .3s ease, box-shadow .3s ease, max-width .45s cubic-bezier(.22,1,.36,1)",
          }}
        >
          <Logo variant={clear ? "inverted" : "default"} />

          <nav aria-label="Navigasi utama" className="hidden lg:block">
            <ul className="flex items-center gap-0 xl:gap-1">
              {mainNav.map((item) => {
                if (item.children) {
                  return (
                    <li key={item.href}>
                      <ProductsDropdown pathname={pathname} clear={clear} />
                    </li>
                  );
                }
                const active = isActivePath(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={navLinkClasses({ clear, active })}
                      aria-current={active ? "page" : undefined}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="hidden items-center gap-1.5 lg:flex xl:gap-2">
            <LoginButton variant={clear ? "inverted-outline" : "secondary"} />
            <Button size="sm" asChild className="rounded-full px-3 xl:px-4">
              <Link href={ctaLinks.demo}>Jadwalkan Demo</Link>
            </Button>
          </div>

          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant={clear ? "inverted-outline" : "secondary"}
                  size="icon"
                  aria-label="Buka menu navigasi"
                >
                  <Menu aria-hidden="true" className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent title="Menu navigasi">
                <div className="flex h-16 items-center border-b border-border px-5 pr-16">
                  <Logo />
                </div>
                <div className="flex-1 overflow-y-auto px-3 py-4">
                  <nav aria-label="Navigasi seluler">
                    <ul className="grid gap-0.5">
                      {mainNav.map((item) => (
                        <MobileNavItem key={item.href} item={item} />
                      ))}
                    </ul>
                  </nav>
                </div>
                <div className="grid gap-2 border-t border-border p-5">
                  <SheetClose asChild>
                    <Link
                      href={ctaLinks.demo}
                      className={cn(
                        buttonVariants({ size: "lg" }),
                        "rounded-full",
                      )}
                    >
                      Jadwalkan Demo
                    </Link>
                  </SheetClose>
                  <LoginButton className="w-full" />
                  <p className="pt-1 text-center text-xs text-muted-foreground">
                    Ekosistem digital untuk sekolah, madrasah, dan pesantren.
                  </p>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </header>
  );
}
