import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { cn } from "@/lib/utils";

/**
 * Shared 404 body. Rendered by `(marketing)/not-found.tsx` (which already has
 * the site chrome) and by the root `not-found.tsx`, which adds the chrome itself.
 */
export function NotFoundContent() {
  return (
    <div className="bg-background">
      <Container size="default" className="py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-display text-[13px] font-semibold uppercase tracking-[0.16em] text-brand">
            Error 404
          </p>
          <h1 className="mt-4 text-balance font-display text-[28px] font-extrabold leading-tight text-qrion-indigo sm:text-[36px]">
            Halaman yang Anda cari tidak ditemukan
          </h1>
          <p className="mt-4 text-[15px] leading-relaxed text-qrion-text-body sm:text-base">
            Tautan mungkin sudah berubah atau alamat yang Anda tulis kurang tepat.
            Anda dapat kembali ke beranda atau langsung membuka salah satu modul
            QRION.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-full px-6">
              <Link href="/">
                <ArrowLeft aria-hidden="true" className="size-4" />
                Kembali ke Beranda
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="rounded-full px-6">
              <Link
                href="https://api.whatsapp.com/send/?phone=628216195202&text=Halo+Qrion%2C+Saya+mau+konsultasi+gratis&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hubungi Tim QRION
              </Link>
            </Button>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-3xl">
          <p className="text-center text-[13px] font-medium uppercase tracking-[0.12em] text-qrion-text-muted">
            Modul QRION
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            {products.map((product) => {
              const Icon = product.icon;
              return (
                <Link
                  key={product.slug}
                  href={`/produk/${product.slug}`}
                  className="inline-flex min-h-11 items-center gap-2.5 rounded-xl border border-border bg-background px-4 py-2.5 text-sm font-medium text-qrion-indigo transition-all hover:border-brand-mint-medium hover:bg-soft hover:shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
                >
                  <span
                    className={cn(
                      "flex size-7 items-center justify-center rounded-md border",
                      product.accent.iconWrap,
                    )}
                  >
                    <Icon
                      aria-hidden="true"
                      className={cn("size-3.5", product.accent.icon)}
                    />
                  </span>
                  {product.name}
                </Link>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}
