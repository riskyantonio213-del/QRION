import Link from "next/link";
import { ArrowUpRight, Newspaper, Settings } from "lucide-react";

import { countFields, ADMIN_SECTIONS } from "@/lib/admin/schema";

export default function AdminDashboardPage() {
  return (
    <div className="grid gap-6">
      <div className="rounded-3xl border border-white/60 bg-white/70 p-6 shadow-[0_8px_30px_rgba(48,46,89,0.06)] backdrop-blur-xl sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
          Panel Admin
        </p>
        <h1 className="mt-2 font-display text-2xl font-bold tracking-tight text-qrion-indigo sm:text-3xl">
          Kelola Konten Homepage
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Pilih section untuk mengubah teks, gambar, dan tautan. Perubahan
          langsung tampil di situs setelah disimpan. Artikel & halaman produk
          dikelola terpisah.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {ADMIN_SECTIONS.map((section) => (
          <Link
            key={section.slug}
            href={`/admin/konten/${section.slug}`}
            className="group relative overflow-hidden rounded-3xl border border-white/60 bg-white/70 p-5 shadow-[0_8px_30px_rgba(48,46,89,0.06)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(48,46,89,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40"
          >
            <div className="flex items-start justify-between gap-3">
              <span
                className={`grid size-11 place-items-center rounded-2xl ${section.accent}`}
              >
                <section.icon aria-hidden="true" className="size-5" />
              </span>
              <ArrowUpRight
                aria-hidden="true"
                className="size-4 text-slate-300 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand"
              />
            </div>
            <h2 className="mt-4 font-display text-lg font-bold text-qrion-indigo">
              {section.title}
            </h2>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              {section.description}
            </p>
            <p className="mt-3 text-xs font-medium text-slate-400">
              {countFields(section.fields)} field dapat diedit
            </p>
          </Link>
        ))}

        <Link
          href="/admin/artikel"
          className="group relative overflow-hidden rounded-3xl border border-indigo-200 bg-gradient-to-br from-indigo-50 via-white/80 to-sky-100 p-5 shadow-[0_8px_30px_rgba(48,46,89,0.06)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(48,46,89,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40"
        >
          <div className="flex items-start justify-between gap-3">
            <span className="grid size-11 place-items-center rounded-2xl bg-white text-indigo-600 shadow-sm">
              <Newspaper aria-hidden="true" className="size-5" />
            </span>
            <ArrowUpRight
              aria-hidden="true"
              className="size-4 text-indigo-300 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-indigo-500"
            />
          </div>
          <h2 className="mt-4 font-display text-lg font-bold text-qrion-indigo">
            Artikel
          </h2>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            Tulis & terbitkan artikel Wawasan dengan editor WYSIWYG, atur
            kategori, draft, dan sampah.
          </p>
        </Link>

        <Link
          href="/admin/pengaturan"
          className="group relative overflow-hidden rounded-3xl border border-brand/25 bg-gradient-to-br from-brand/10 via-white/80 to-brand-mint/20 p-5 shadow-[0_8px_30px_rgba(48,46,89,0.06)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(48,46,89,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40"
        >
          <div className="flex items-start justify-between gap-3">
            <span className="grid size-11 place-items-center rounded-2xl bg-white text-brand shadow-sm">
              <Settings aria-hidden="true" className="size-5" />
            </span>
            <ArrowUpRight
              aria-hidden="true"
              className="size-4 text-brand/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand"
            />
          </div>
          <h2 className="mt-4 font-display text-lg font-bold text-qrion-indigo">
            Pengaturan Akun
          </h2>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            Ganti username dan password panel admin.
          </p>
        </Link>
      </div>
    </div>
  );
}
