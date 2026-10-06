"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft, ChevronDown, Smartphone } from "lucide-react";

import { SheetClose } from "@/components/ui/sheet";
import { MobileNavItem, isActivePath } from "@/components/layout/mobile-nav-item";
import { mainNav } from "@/config/site";
import { products } from "@/data/products";
import { cn } from "@/lib/utils";

/**
 * Isi menu navigasi seluler di halaman produk Live Preview
 * (/live-preview/[produk]): tombol kembali ke overview, dropdown "Dashboard
 * Produk" untuk pindah antar dashboard (pengganti sidebar di mobile), dan
 * menu utama. Semua link memakai SheetClose sehingga menu langsung tertutup
 * setelah ditekan.
 */
export function LivePreviewMenuPanel() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const mobileHref = "/live-preview/qrion-mobile";

  const items = [
    ...products.map((product) => ({
      href: `/live-preview/${product.slug}`,
      name: product.name,
      Icon: product.icon,
    })),
    { href: mobileHref, name: "QRION Mobile", Icon: Smartphone },
  ];

  return (
    <div className="flex-1 overflow-y-auto px-3 py-4">
      <SheetClose asChild>
        <Link
          href="/live-preview"
          className="mb-3 inline-flex min-h-11 w-full items-center gap-2 rounded-lg border border-border bg-soft px-3 text-sm font-semibold text-foreground transition-colors hover:bg-soft/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          Kembali ke Live Preview
        </Link>
      </SheetClose>

      <nav aria-label="Navigasi seluler">
        <ul className="grid gap-0.5">
          {/* Dropdown pindah dashboard */}
          <li>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              className="flex min-h-11 w-full items-center justify-between gap-2 rounded-lg px-3 text-[15px] font-medium transition-colors hover:bg-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
            >
              Dashboard Produk
              <ChevronDown
                aria-hidden="true"
                className={cn(
                  "size-4 text-muted-foreground transition-transform duration-200",
                  open && "rotate-180",
                )}
              />
            </button>
            {open ? (
              <ul className="mb-1 ml-3 mt-0.5 grid gap-0.5 border-l border-border pl-3">
                {items.map(({ href, name, Icon }) => {
                  const isActive = pathname === href;
                  return (
                    <li key={href}>
                      <SheetClose asChild>
                        <Link
                          href={href}
                          aria-current={isActive ? "page" : undefined}
                          className={cn(
                            "flex min-h-10 items-center gap-2.5 rounded-lg px-3 text-sm transition-colors hover:bg-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40",
                            isActive
                              ? "font-semibold text-brand"
                              : "text-muted-foreground hover:text-foreground",
                          )}
                        >
                          <Icon aria-hidden="true" className="size-4 shrink-0" />
                          {name}
                        </Link>
                      </SheetClose>
                    </li>
                  );
                })}
              </ul>
            ) : null}
          </li>

          {mainNav.map((item) => (
            <MobileNavItem key={item.href} item={item} />
          ))}
        </ul>
      </nav>
    </div>
  );
}
