import Link from "next/link";

import { products } from "@/data/products";
import { ArrowRight, Smartphone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { DesktopHint } from "@/components/live-preview/desktop-hint";
import { OncardRipple } from "@/components/product/designs/interactive/oncard-ripple";
import { cn } from "@/lib/utils";

/**
 * Overview page: preview all QRION services as cards.
 * Each card links to the service's own dashboard page.
 */
export function LivePreviewOverview() {
  return (
    <div className="bg-background">
      <div className="mx-auto w-full max-w-[1440px] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-display text-[32px] font-bold leading-tight text-qrion-indigo sm:text-[40px]">
            Preview Semua Layanan QRION
          </h1>
          <p className="mt-4 text-[16px] leading-relaxed text-qrion-text-body">
            Jelajahi dashboard dari setiap modul ekosistem QRION. Setiap layanan
            menampilkan data contoh yang dapat ditinjau langsung.
          </p>
          <DesktopHint className="mt-6" />
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <Link
                key={product.slug}
                href={`/live-preview/${product.slug}`}
                className={cn(
                  "group flex flex-col rounded-xl border border-border bg-background p-6 transition-all hover:border-brand-mint-medium hover:shadow-card",
                )}
              >
                <div className="flex items-start gap-4">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-brand-mint-medium bg-brand-mint">
                    <Icon aria-hidden="true" className="size-5 text-brand" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h2 className="font-display text-[20px] font-bold text-qrion-indigo">
                      {product.name}
                    </h2>
                    <p className="mt-1 text-[13px] text-qrion-text-muted">
                      {product.category}
                    </p>
                  </div>
                  <ArrowRight
                    aria-hidden="true"
                    className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1"
                  />
                </div>
                <p className="mt-4 text-[13px] leading-relaxed text-qrion-text-muted">
                  {product.summary}
                </p>
                <div className="mt-auto pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className={cn(
                      "relative overflow-hidden rounded-full border-brand/40 bg-brand-soft text-brand-indigo hover:bg-brand-mint",
                    )}
                  >
                    <OncardRipple color="#35bb82" hoverColor="#ffffff" />
                    <span className="relative z-10">Lihat Dashboard</span>
                  </Button>
                </div>
              </Link>
            );
          })}
          <Link
            href="/live-preview/qrion-mobile"
            className="group flex flex-col rounded-xl border border-border bg-background p-6 transition-all hover:border-brand-mint-medium hover:shadow-card"
          >
            <div className="flex items-start gap-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-brand-mint-medium bg-brand-mint">
                <Smartphone aria-hidden="true" className="size-5 text-brand" />
              </span>
              <div className="min-w-0 flex-1">
                <h2 className="font-display text-[20px] font-bold text-qrion-indigo">
                  QRION Mobile
                </h2>
                <p className="mt-1 text-[13px] text-qrion-text-muted">
                  Mobile Mockup
                </p>
              </div>
              <ArrowRight
                aria-hidden="true"
                className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1"
              />
            </div>
            <p className="mt-4 text-[13px] leading-relaxed text-qrion-text-muted">
              Pratinjau aplikasi QRION dalam bingkai ponsel — layanan sekolah
              dalam genggaman.
            </p>
            <div className="mt-auto pt-4">
              <Button
                variant="outline"
                size="sm"
                className={cn(
                  "relative overflow-hidden rounded-full border-brand/40 bg-brand-soft text-brand-indigo hover:bg-brand-mint",
                )}
              >
                <OncardRipple color="#35bb82" hoverColor="#ffffff" />
                <span className="relative z-10">Lihat Dashboard</span>
              </Button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
