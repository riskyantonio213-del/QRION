import { Database, ArrowRight } from "lucide-react";
import { products } from "@/data/products";

export function SpmbSidebar() {
  return (
    <aside className="hidden w-64 shrink-0 flex-col border-r border-slate-100 bg-white lg:flex">
      <div className="flex-1 overflow-y-auto">
        <div className="flex items-center justify-between px-3 py-2 mb-6">
          <div className="flex items-center gap-2">
            <div className="size-6 rotate-45 rounded-sm bg-[#3DBA86]" />
            <span className="font-bold text-lg tracking-tight text-slate-900">SPMB</span>
          </div>
          <button className="text-slate-400 hover:text-slate-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>

        <nav className="space-y-1 px-2">
          <a href="#" className="flex items-center gap-3 px-4 py-3 bg-[#3DBA86] text-white rounded-xl font-medium shadow-sm transition">
            <Database className="w-5 h-5" />
            Dashboard
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-xl font-medium transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            Manajemen Biaya
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-xl font-medium transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
            Pembayaran
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-xl font-medium transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
            Penarikan
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-xl font-medium transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
            Jurnal
          </a>
        </nav>
      </div>

      <div className="border-t border-slate-100 p-2">
        <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-xl font-medium transition">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/></svg>
          Keluar
        </a>
      </div>
    </aside>
  );
}

export function SpmbDashboard() {
  const product = products.find((p) => p.slug === "spmb")!;
  const preview = product.preview;

  return (
    <div className="flex-1 space-y-6 min-w-0">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        {preview.metrics.map((metric) => (
          <div key={metric.label} className="group flex flex-col justify-between rounded-2xl border border-border bg-white p-5 transition-all duration-200 hover:border-brand/40 hover:shadow-md">
            <div className="flex items-start justify-between gap-2">
              <p className="text-xs font-medium text-qrion-text-muted">{metric.label}</p>
              <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-brand-mint/50 transition-colors group-hover:bg-brand">
                <svg className="size-3.5 text-brand group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
              </span>
            </div>
            <div className="mt-4">
              <p className="font-display text-2xl font-bold text-qrion-indigo xl:text-3xl">{metric.value}</p>
              <p className="mt-1.5 inline-flex rounded-md bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-600">{metric.hint}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 items-start gap-6 xl:grid-cols-3">
        <div className="grid gap-6 xl:col-span-2">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex min-h-[260px] flex-col rounded-2xl border border-border bg-white p-5 shadow-sm">
              <h2 className="text-sm font-semibold text-qrion-indigo">{preview.chartTitle}</h2>
              <div className="mt-4 flex flex-1 items-center justify-center rounded-xl border border-dashed border-slate-200 bg-slate-50">
                <span className="text-xs text-slate-400">Area Bar Chart</span>
              </div>
            </div>
            <div className="flex min-h-[260px] flex-col rounded-2xl border border-border bg-white p-5 shadow-sm">
              <h2 className="text-sm font-semibold text-qrion-indigo">Status Pembayaran</h2>
              <div className="mt-4 flex flex-1 items-center justify-center rounded-xl border border-dashed border-slate-200 bg-slate-50">
                <span className="text-xs text-slate-400">Area Donut Chart</span>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-white shadow-sm">
            <div className="border-b border-border px-5 py-4">
              <h2 className="text-sm font-semibold text-qrion-indigo">{preview.rowsTitle}</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-[13px]">
                <thead className="bg-slate-50/80">
                  <tr className="text-[11px] uppercase tracking-wider text-qrion-text-muted">
                    <th className="px-5 py-3 font-semibold">Aktivitas</th>
                    <th className="hidden px-4 py-3 font-semibold sm:table-cell">Waktu</th>
                    <th className="px-5 py-3 text-right font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {preview.rows.map((row) => (
                    <tr key={row.label} className="transition-colors hover:bg-slate-50/50">
                      <td className="px-5 py-3.5 font-medium text-qrion-indigo">{row.label}</td>
                      <td className="hidden px-4 py-3.5 text-qrion-text-muted sm:table-cell">{row.value}</td>
                      <td className="px-5 py-3.5 text-right"><span className="rounded-md bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-600">{row.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
