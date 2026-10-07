import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ArrowLeft, ShieldCheck } from "lucide-react";

import { LoginForm } from "@/components/admin/login-form";
import { getSessionUsername } from "@/lib/admin/session";

export const metadata: Metadata = {
  title: "Masuk — Panel Admin QRION",
  robots: { index: false, follow: false },
};

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string }>;
}) {
  const username = await getSessionUsername();
  if (username) redirect("/admin");

  const { next } = await searchParams;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-emerald-50/50">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-10 size-72 rounded-full bg-brand-mint/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-10 size-80 rounded-full bg-brand-indigo/15 blur-3xl"
      />

      <div className="relative z-10 mx-auto flex min-h-[75vh] w-full max-w-md flex-col justify-center px-4 py-14">
        <div className="rounded-3xl border border-white/60 bg-white/70 p-6 shadow-[0_8px_30px_rgba(48,46,89,0.08)] backdrop-blur-xl sm:p-8">
          <div className="mb-6 flex items-center justify-between gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/70 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
              <ShieldCheck aria-hidden="true" className="size-3.5" />
              Panel Admin
            </span>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft aria-hidden="true" className="size-4" />
              Situs QRION
            </Link>
          </div>

          <h1 className="font-display text-3xl font-bold tracking-tight text-qrion-indigo">
            Masuk
          </h1>
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
            Kelola konten homepage dan gambar QRION dari satu tempat.
          </p>

          <div className="mt-6">
            <LoginForm next={typeof next === "string" ? next : undefined} />
          </div>
        </div>
      </div>
    </section>
  );
}
