import { getSessionUsername } from "@/lib/admin/session";
import { AccountForms } from "@/components/admin/account-forms";

export default async function PengaturanPage() {
  const username = await getSessionUsername();

  return (
    <div className="grid gap-6">
      <div className="rounded-3xl border border-white/60 bg-white/70 p-6 shadow-[0_8px_30px_rgba(48,46,89,0.06)] backdrop-blur-xl sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
          Pengaturan
        </p>
        <h1 className="mt-2 font-display text-2xl font-bold tracking-tight text-qrion-indigo sm:text-3xl">
          Akun Panel Admin
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Ganti username dan password kapan saja — tanpa verifikasi password
          lama. Sesi yang sedang berjalan akan tetap aktif.
        </p>
      </div>

      <AccountForms currentUsername={username ?? ""} />
    </div>
  );
}
