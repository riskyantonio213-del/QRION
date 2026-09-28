"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu } from "lucide-react";

import { Logo } from "@/components/layout/logo";
import { Container } from "@/components/layout/container";
import { Button, buttonVariants } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { mainNav, externalLinks, ctaLinks, type NavItem } from "@/config/site";
import { products } from "@/data/products";
import { cn } from "@/lib/utils";

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

/**
 * `Masuk` points at the customer portal. The URL is not configured yet, so the
 * control renders as a disabled button instead of a dead link. Set
 * NEXT_PUBLIC_LOGIN_URL (see src/config/site.ts) to enable it.
 */
function LoginButton({ className }: { className?: string }) {
  if (!externalLinks.login) {
    return (
      <Button
        variant="secondary"
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
    <Button variant="secondary" size="sm" asChild className={className}>
      <a href={externalLinks.login} rel="noopener noreferrer">
        Masuk
      </a>
    </Button>
  );
}

function ProductsDropdown({ pathname }: { pathname: string }) {
  const active = isActivePath(pathname, "/produk");

  return (
    <div className="group relative">
      <Link
        href="/produk"
        className={cn(
          "inline-flex h-9 items-center gap-1.5 rounded-lg px-3 text-sm font-medium transition-colors",
          "hover:bg-soft hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40",
          active ? "text-brand" : "text-foreground",
        )}
        aria-current={active ? "page" : undefined}
      >
        Produk
        <ChevronDown
          aria-hidden="true"
          className="size-4 text-muted-foreground transition-transform duration-200 group-hover:rotate-180"
        />
      </Link>

      {/* Panel opens on hover *and* keyboard focus, so it is reachable without a mouse. */}
      <div
        className={cn(
          "invisible absolute left-0 top-full z-50 w-[340px] translate-y-1 pt-2 opacity-0 transition-all duration-200",
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-colors duration-300",
        scrolled
          ? "border-b border-border/70 bg-[rgba(255,255,255,0.92)] backdrop-blur-md supports-[backdrop-filter]:bg-[rgba(255,255,255,0.88)]"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container size="wide">
        <div className="flex h-16 items-center justify-between gap-4 lg:h-[72px]">
          <Logo />

          <nav aria-label="Navigasi utama" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {mainNav.map((item) => {
                if (item.children) {
                  return (
                    <li key={item.href}>
                      <ProductsDropdown pathname={pathname} />
                    </li>
                  );
                }
                const active = isActivePath(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "inline-flex h-9 items-center rounded-lg px-3 text-sm font-medium transition-colors hover:bg-soft hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40",
                        active ? "text-brand" : "text-foreground",
                      )}
                      aria-current={active ? "page" : undefined}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <LoginButton />
            <Button size="sm" asChild className="rounded-full px-4">
              <Link href={ctaLinks.demo}>Jadwalkan Demo</Link>
            </Button>
          </div>

          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="secondary"
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
                      className={cn(buttonVariants({ size: "lg" }), "rounded-full")}
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
