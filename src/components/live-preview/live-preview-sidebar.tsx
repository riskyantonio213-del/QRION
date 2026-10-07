import Link from "next/link";

import { livePreviewProducts } from "@/data/live-preview";
import { Smartphone } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

/**
 * Sidebar listing all QRION services for navigation.
 * Rendered inside LivePreviewLayout.
 */
export function LivePreviewSidebar() {
  const pathname = usePathname();
  const mobileHref = "/live-preview/qrion-mobile";
  const mobileActive = pathname === mobileHref;

  return (
    <aside className="hidden w-[256px] shrink-0 flex-col border-r border-border bg-background lg:flex">
      <div className="flex h-full flex-col">
        <div className="px-5 py-5">
          <p className="font-display text-[13px] font-extrabold tracking-[0.18em] text-qrion-indigo">
            QRION
          </p>
          <p className="mt-1 text-[11px] text-[#65706C]">
            Pilih layanan
          </p>
        </div>

        <nav aria-label="Layanan QRION" className="flex-1 overflow-y-auto px-2 pb-4">
          <ul>
            {livePreviewProducts.map((product) => {
              const href = `/live-preview/${product.slug}`;
              const isActive = pathname === href;
              const Icon = product.icon;
              return (
                <li key={product.slug}>
                  <Link
                    href={href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left transition-colors border-l-2",
                      isActive
                        ? "border-brand bg-brand/10"
                        : "border-transparent hover:bg-soft",
                    )}
                  >
                    <Icon
                      aria-hidden="true"
                      className={cn(
                        "size-4 shrink-0",
                        isActive ? "text-brand" : "text-[#65706C]",
                      )}
                    />
                    <span
                      className={cn(
                        "min-w-0 flex-1 truncate font-display text-[11.5px] font-bold uppercase tracking-[0.08em]",
                        isActive ? "text-brand" : "text-[#65706C]",
                      )}
                    >
                      {product.name}
                    </span>
                  </Link>
                </li>
              );
            })}
            <li className="mt-2 border-t border-border pt-2">
              <Link
                href={mobileHref}
                aria-current={mobileActive ? "page" : undefined}
                className={cn(
                  "flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left transition-colors border-l-2",
                  mobileActive
                    ? "border-brand bg-brand/10"
                    : "border-transparent hover:bg-soft",
                )}
              >
                <Smartphone
                  aria-hidden="true"
                  className={cn(
                    "size-4 shrink-0",
                    mobileActive ? "text-brand" : "text-[#65706C]",
                  )}
                />
                <span
                  className={cn(
                    "min-w-0 flex-1 truncate font-display text-[11.5px] font-bold uppercase tracking-[0.08em]",
                    mobileActive ? "text-brand" : "text-[#65706C]",
                  )}
                >
                  QRION Mobile
                </span>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="border-t border-border px-5 py-4">
          <Link
            href="/"
            className="mt-2 inline-flex rounded text-[11px] font-medium text-[#65706C] underline-offset-2 transition-colors hover:text-brand hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
          >
            Kembali ke situs QRION
          </Link>
        </div>
      </div>
    </aside>
  );
}
