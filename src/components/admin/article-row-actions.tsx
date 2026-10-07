"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, RotateCcw, Trash2, XCircle } from "lucide-react";

import {
  purgeArticleAction,
  restoreArticleAction,
  trashArticleAction,
} from "@/actions/article-actions";
import { cn } from "@/lib/utils";

type RowActionsProps = {
  id: number;
  slug: string;
  status: "draft" | "published";
  trashed: boolean;
};

const miniBtn =
  "inline-flex items-center gap-1 rounded-lg border px-2.5 py-1.5 text-xs font-medium transition-colors disabled:opacity-50";

export function RowActions({ id, slug, status, trashed }: RowActionsProps) {
  const router = useRouter();
  const [busy, setBusy] = useState<string | null>(null);

  async function run(kind: "trash" | "restore" | "purge") {
    const confirmText =
      kind === "purge"
        ? "Hapus permanen artikel ini? Tindakan tidak bisa dibatalkan."
        : kind === "trash"
          ? "Pindahkan artikel ini ke Sampah?"
          : "Kembalikan artikel dari Sampah?";
    if (!window.confirm(confirmText)) return;
    setBusy(kind);
    try {
      const result =
        kind === "purge"
          ? await purgeArticleAction(id)
          : kind === "trash"
            ? await trashArticleAction(id)
            : await restoreArticleAction(id);
      if (!result.ok) window.alert(result.error ?? "Gagal memproses artikel.");
      router.refresh();
    } finally {
      setBusy(null);
    }
  }

  if (trashed) {
    return (
      <div className="flex flex-wrap justify-end gap-1.5">
        <button
          type="button"
          disabled={busy !== null}
          onClick={() => void run("restore")}
          className={cn(
            miniBtn,
            "border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100",
          )}
        >
          <RotateCcw className="size-3.5" aria-hidden="true" />
          {busy === "restore" ? "…" : "Kembalikan"}
        </button>
        <button
          type="button"
          disabled={busy !== null}
          onClick={() => void run("purge")}
          className={cn(
            miniBtn,
            "border-red-200 bg-red-50 text-red-600 hover:bg-red-100",
          )}
        >
          <XCircle className="size-3.5" aria-hidden="true" />
          {busy === "purge" ? "…" : "Hapus permanen"}
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap justify-end gap-1.5">
      {status === "published" ? (
        <a
          href={`/insight/baca/${slug}`}
          target="_blank"
          rel="noreferrer"
          className={cn(
            miniBtn,
            "border-slate-200 bg-white text-slate-600 hover:border-brand/40 hover:text-brand",
          )}
        >
          <Eye className="size-3.5" aria-hidden="true" />
          Lihat
        </a>
      ) : null}
      <button
        type="button"
        disabled={busy !== null}
        onClick={() => void run("trash")}
        className={cn(
          miniBtn,
          "border-amber-200 bg-amber-50 text-amber-700 hover:bg-amber-100",
        )}
      >
        <Trash2 className="size-3.5" aria-hidden="true" />
        Sampah
      </button>
    </div>
  );
}
