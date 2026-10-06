import { Monitor } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * Keterangan untuk pengunjung mobile: buka di desktop/laptop agar preview
 * dashboard tampil maksimal. Pill kecil yang mencolok namun tidak menutupi
 * konten — hanya tampil di bawah breakpoint lg.
 */
export function DesktopHint({ className }: { className?: string }) {
  return (
    <p
      role="note"
      className={cn(
        "mx-auto flex w-fit items-center justify-center gap-1.5 rounded-full border border-amber-300 bg-amber-100 px-4 py-1.5 text-[11px] font-bold tracking-wide text-amber-800 shadow-sm lg:hidden",
        className,
      )}
    >
      <Monitor aria-hidden="true" className="size-3.5 shrink-0" />
      Buka di desktop untuk hasil yang maksimal
    </p>
  );
}
