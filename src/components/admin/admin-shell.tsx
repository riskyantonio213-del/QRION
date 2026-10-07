"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  LogOut,
  Menu,
  Newspaper,
  PanelLeftClose,
  PanelLeftOpen,
  Settings,
  X,
} from "lucide-react";

import { logoutAction } from "@/actions/admin-actions";
import { Logo } from "@/components/layout/logo";
import { Button } from "@/components/ui/button";
import { ADMIN_SECTIONS } from "@/lib/admin/schema";
import { cn } from "@/lib/utils";

const UTAMA = [
  { href: "/admin", label: "Dasbor", icon: LayoutDashboard },
  { href: "/admin/artikel", label: "Artikel", icon: Newspaper },
  { href: "/admin/pengaturan", label: "Pengaturan", icon: Settings },
] as const;

/** Halaman editor artikel: sidebar otomatis minimize saat pertama buka. */
const EDITOR_PATH = /^\/admin\/artikel\/(baru|\d+)$/;
const NAV_STORAGE_KEY = "qrion_admin_nav";

function navClasses(active: boolean) {
  return cn(
    "flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm font-medium transition-colors",
    active
      ? "bg-white/90 text-brand shadow-[0_2px_10px_rgba(48,46,89,0.08)]"
      : "text-slate-600 hover:bg-white/60 hover:text-slate-900",
  );
}

export function AdminShell({
  username,
  children,
}: {
  username: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(NAV_STORAGE_KEY);
    if (stored === "1") setCollapsed(true);
    else if (stored === "0") setCollapsed(false);
    else setCollapsed(EDITOR_PATH.test(pathname));
  }, [pathname]);

  function toggleCollapsed() {
    setCollapsed((value) => {
      const next = !value;
      window.localStorage.setItem(NAV_STORAGE_KEY, next ? "1" : "0");
      return next;
    });
  }

  const isSection = (slug: string) => pathname === `/admin/konten/${slug}`;

  const nav = (mini: boolean) => (
    <nav
      aria-label="Navigasi admin"
      className={cn("grid gap-6 p-4", mini && "gap-3 p-2")}
    >
      <div className="grid gap-1">
        <p
          className={cn(
            "px-3 pb-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400",
            mini && "hidden",
          )}
        >
          Utama
        </p>
        {UTAMA.map((item) => {
          const active =
            item.href === "/admin"
              ? pathname === "/admin"
              : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              title={mini ? item.label : undefined}
              aria-label={mini ? item.label : undefined}
              onClick={() => setOpen(false)}
              className={cn(
                navClasses(active),
                mini && "justify-center px-0 py-2.5",
              )}
            >
              <item.icon aria-hidden="true" className="size-4 shrink-0" />
              {mini ? null : item.label}
            </Link>
          );
        })}
      </div>

      <div className="grid gap-1">
        <p
          className={cn(
            "px-3 pb-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400",
            mini && "hidden",
          )}
        >
          Konten Homepage
        </p>
        {ADMIN_SECTIONS.map((section) => (
          <Link
            key={section.slug}
            href={`/admin/konten/${section.slug}`}
            title={mini ? section.title : undefined}
            aria-label={mini ? section.title : undefined}
            onClick={() => setOpen(false)}
            className={cn(
              navClasses(isSection(section.slug)),
              mini && "justify-center px-0 py-2.5",
            )}
          >
            <section.icon
              aria-hidden="true"
              className="size-4 shrink-0 text-slate-400"
            />
            {mini ? null : section.title}
          </Link>
        ))}
      </div>
    </nav>
  );

  return (
    <div className="relative min-h-dvh bg-slate-50">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed -left-40 -top-40 size-[420px] rounded-full bg-brand-mint/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed -bottom-48 right-[-120px] size-[460px] rounded-full bg-brand-indigo/10 blur-3xl"
      />

      {/* Header kaca — sticky di atas saat scroll */}
      <header className="sticky top-0 z-40 border-b border-white/60 bg-white/70 backdrop-blur-xl">
        <div className="flex h-16 w-full items-center justify-between gap-3 px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="grid size-9 place-items-center rounded-xl border border-slate-200 bg-white text-slate-600 transition-colors hover:text-slate-900 lg:hidden"
              onClick={() => setOpen((value) => !value)}
              aria-label={open ? "Tutup menu" : "Buka menu"}
              aria-expanded={open}
            >
              {open ? (
                <X aria-hidden="true" className="size-5" />
              ) : (
                <Menu aria-hidden="true" className="size-5" />
              )}
            </button>
            <button
              type="button"
              className="hidden size-9 place-items-center rounded-xl border border-slate-200 bg-white text-slate-600 transition-colors hover:border-brand/40 hover:text-brand lg:grid"
              onClick={toggleCollapsed}
              aria-label={
                collapsed
                  ? "Perluas menu navigasi"
                  : "Minimalkan menu navigasi"
              }
              aria-expanded={!collapsed}
              title={
                collapsed
                  ? "Perluas menu navigasi"
                  : "Minimalkan menu navigasi"
              }
            >
              {collapsed ? (
                <PanelLeftOpen aria-hidden="true" className="size-5" />
              ) : (
                <PanelLeftClose aria-hidden="true" className="size-5" />
              )}
            </button>
            <Link
              href="/admin"
              aria-label="Dasbor admin QRION"
              className="flex items-center gap-2.5"
            >
              <Logo href={null} />
              <span className="rounded-full border border-brand/25 bg-brand/10 px-2.5 py-0.5 text-xs font-semibold text-brand">
                Admin
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden text-sm text-slate-500 sm:inline">
              Masuk sebagai{" "}
              <span className="font-semibold text-slate-800">{username}</span>
            </span>
            <Link
              href="/"
              target="_blank"
              className="hidden rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 sm:inline-flex"
            >
              Lihat situs
            </Link>
            <form action={logoutAction}>
              <Button type="submit" variant="outline" size="sm" className="rounded-full">
                <LogOut aria-hidden="true" className="size-4" />
                Keluar
              </Button>
            </form>
          </div>
        </div>
      </header>

      <div className="flex w-full gap-6 px-4 py-6 sm:px-6">
        {/* Sidebar (desktop) — sticky, bisa minimize jadi rail icon */}
        <aside
          className={cn(
            "sticky top-22 hidden h-[calc(100dvh-7rem)] shrink-0 self-start overflow-y-auto rounded-3xl border border-white/60 bg-white/70 shadow-[0_8px_30px_rgba(48,46,89,0.06)] backdrop-blur-xl lg:block",
            collapsed ? "w-[76px]" : "w-64",
          )}
        >
          {nav(collapsed)}
        </aside>

        {/* Drawer (mobile) */}
        {open ? (
          <div className="fixed inset-0 z-50 lg:hidden">
            <button
              type="button"
              aria-label="Tutup menu"
              className="absolute inset-0 bg-slate-900/30 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <div className="absolute inset-y-0 left-0 w-[280px] overflow-y-auto border-r border-white/60 bg-white/95 shadow-2xl">
              <div className="flex h-16 items-center justify-between border-b border-slate-100 px-4">
                <Link
                  href="/admin"
                  aria-label="Dasbor admin QRION"
                  onClick={() => setOpen(false)}
                >
                  <Logo href={null} />
                </Link>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Tutup menu"
                  className="grid size-9 place-items-center rounded-xl text-slate-500 hover:bg-slate-100"
                >
                  <X aria-hidden="true" className="size-5" />
                </button>
              </div>
              {nav(false)}
            </div>
          </div>
        ) : null}

        <main className="min-w-0 flex-1">{children}</main>
      </div>
    </div>
  );
}
