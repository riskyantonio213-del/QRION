"use client";

import { useEffect, useState, useActionState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2, Loader2, Trash2 } from "lucide-react";

import { saveArticleAction, trashArticleAction } from "@/actions/article-actions";
import { TiptapEditor } from "@/components/admin/tiptap-editor";
import { Button } from "@/components/ui/button";
import type { ArticleRow } from "@/lib/admin/articles-store";
import { cn } from "@/lib/utils";

type ArticleFormProps = {
  article: ArticleRow | null;
  categories: string[];
};

const inputCls =
  "w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 shadow-sm transition-colors placeholder:text-slate-400 focus:border-brand/60 focus:outline-none focus:ring-2 focus:ring-brand/25";

const cardCls =
  "rounded-3xl border border-white/60 bg-white/70 p-5 shadow-[0_8px_30px_rgba(48,46,89,0.06)] backdrop-blur-xl";

export function ArticleForm({ article, categories }: ArticleFormProps) {
  const router = useRouter();
  const id = article?.id ?? null;
  const isPublished = article?.status === "published";

  const [title, setTitle] = useState(article?.title ?? "");
  const [slug, setSlug] = useState(article?.slug ?? "");
  const [slugTouched, setSlugTouched] = useState(article !== null);
  const [category, setCategory] = useState(article?.category ?? categories[0] ?? "");
  const [isoDate, setIsoDate] = useState(article?.iso_date.slice(0, 10) ?? "");
  const [image, setImage] = useState(article?.image ?? "");
  const [excerpt, setExcerpt] = useState(article?.excerpt ?? "");
  const [content, setContent] = useState(article?.content ?? "");
  const [uploading, setUploading] = useState(false);
  const [trashing, setTrashing] = useState(false);

  const [state, formAction, pending] = useActionState(
    (_prev: unknown, formData: FormData) => saveArticleAction(id, formData),
    null as { ok?: boolean; id?: number; error?: string; message?: string } | null,
  );

  useEffect(() => {
    if (state?.ok && state.id && id === null) {
      router.replace(`/admin/artikel/${state.id}`);
      router.refresh();
    }
  }, [state, id, router]);

  function handleTitleChange(value: string) {
    setTitle(value);
    if (!slugTouched) {
      setSlug(
        value
          .toLowerCase()
          .normalize("NFKD")
          .replace(/[^\w\s-]/g, "")
          .replace(/[\s_]+/g, "-")
          .replace(/-+/g, "-")
          .replace(/^-|-$/g, "")
          .slice(0, 90),
      );
    }
  }

  async function uploadCover(file: File) {
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      const response = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });
      const payload = (await response.json().catch(() => ({}))) as {
        url?: string;
        error?: string;
      };
      if (!response.ok || !payload.url) {
        throw new Error(payload.error ?? `Gagal mengunggah (HTTP ${response.status}).`);
      }
      setImage(payload.url);
    } catch (error) {
      window.alert(
        error instanceof Error ? error.message : "Gagal mengunggah gambar.",
      );
    } finally {
      setUploading(false);
    }
  }

  async function moveToTrash() {
    if (!id) return;
    if (!window.confirm("Pindahkan artikel ini ke Sampah?")) return;
    setTrashing(true);
    try {
      const result = await trashArticleAction(id);
      if (result.ok) {
        router.push("/admin/artikel");
        router.refresh();
      } else {
        window.alert(result.error ?? "Gagal memindahkan artikel.");
      }
    } finally {
      setTrashing(false);
    }
  }

  const dateLabel = (() => {
    if (!isoDate) return "—";
    const [y, m, d] = isoDate.split("-");
    const months = [
      "Januari", "Februari", "Maret", "April", "Mei", "Juni",
      "Juli", "Agustus", "September", "Oktober", "November", "Desember",
    ];
    return `${Number(d)} ${months[Number(m) - 1]} ${y}`;
  })();

  return (
    <form action={formAction} className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_310px]">
      {/* Kolom kiri — konten utama */}
      <div className="grid content-start gap-5">
        <div className={cn(cardCls, "gap-3")}>
          <label className="block">
            <span className="sr-only">Judul artikel</span>
            <input
              value={title}
              onChange={(event) => handleTitleChange(event.target.value)}
              placeholder="Judul artikel"
              className="w-full border-none bg-transparent px-0 font-display text-2xl font-bold tracking-tight text-qrion-indigo placeholder:text-slate-300 focus:outline-none sm:text-3xl"
            />
          </label>
          <label className="mt-1 flex flex-wrap items-center gap-2 text-sm text-slate-500">
            <span className="shrink-0">/insight/baca/</span>
            <input
              value={slug}
              onChange={(event) => {
                setSlugTouched(true);
                setSlug(event.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ""));
              }}
              className="min-w-0 flex-1 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-sm focus:border-brand/60 focus:bg-white focus:outline-none"
              aria-label="Slug URL"
            />
          </label>
        </div>

        <TiptapEditor initialHTML={article?.content ?? ""} onChange={setContent} />
        <input type="hidden" name="content" value={content} />
        <input type="hidden" name="title" value={title} />
        <input type="hidden" name="slug" value={slug} />
        <input type="hidden" name="category" value={category} />
        <input type="hidden" name="isoDate" value={isoDate} />
        <input type="hidden" name="image" value={image} />
        <input type="hidden" name="excerpt" value={excerpt} />
      </div>

      {/* Kolom kanan — panel terbitkan */}
      <aside className="grid content-start gap-5 lg:sticky lg:top-20 lg:self-start">
        <section className={cardCls}>
          <div className="flex items-center justify-between gap-2">
            <h2 className="font-display text-sm font-bold text-qrion-indigo">
              Terbitkan
            </h2>
            <span
              className={cn(
                "rounded-full px-2.5 py-1 text-[11px] font-semibold",
                isPublished
                  ? "bg-emerald-100 text-emerald-700"
                  : article
                    ? "bg-amber-100 text-amber-700"
                    : "bg-slate-100 text-slate-500",
              )}
            >
              {isPublished ? "Terbit" : article ? "Draft" : "Belum disimpan"}
            </span>
          </div>

          <label className="mt-4 block text-xs font-semibold uppercase tracking-wide text-slate-500">
            Tanggal tayang
            <input
              type="date"
              value={isoDate}
              onChange={(event) => setIsoDate(event.target.value)}
              className={cn(inputCls, "mt-1.5 font-normal normal-case tracking-normal")}
            />
          </label>
          <p className="mt-2 text-xs text-slate-500">Ditampilkan sebagai {dateLabel}.</p>

          <div className="mt-4 grid gap-2">
            <Button
              type="submit"
              name="intent"
              value="publish"
              disabled={pending || uploading}
              className="w-full"
            >
              {pending ? (
                <Loader2 className="size-4 animate-spin" aria-hidden="true" />
              ) : isPublished ? (
                <CheckCircle2 className="size-4" aria-hidden="true" />
              ) : null}
              {isPublished ? "Perbarui" : "Terbitkan"}
            </Button>
            {article ? (
              <Button
                type="submit"
                name="intent"
                value="draft"
                variant="outline"
                disabled={pending || uploading}
                className="w-full"
              >
                {isPublished ? "Kembalikan ke Draft" : "Simpan Draft"}
              </Button>
            ) : (
              <Button
                type="submit"
                name="intent"
                value="draft"
                variant="outline"
                disabled={pending || uploading}
                className="w-full"
              >
                Simpan Draft
              </Button>
            )}
          </div>

          {state?.error ? (
            <p className="mt-3 rounded-lg bg-red-50 px-3 py-2 text-xs font-medium text-red-600">
              {state.error}
            </p>
          ) : null}
          {state?.ok && state.message ? (
            <p className="mt-3 rounded-lg bg-emerald-50 px-3 py-2 text-xs font-medium text-emerald-700">
              {state.message}
            </p>
          ) : null}
        </section>

        <section className={cardCls}>
          <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500">
            Kategori
            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className={cn(inputCls, "mt-1.5 font-normal normal-case tracking-normal")}
            >
              {categories.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </label>
        </section>

        <section className={cardCls}>
          <h2 className="font-display text-sm font-bold text-qrion-indigo">
            Gambar Utama
          </h2>
          {image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={image}
              alt="Pratinjau gambar utama"
              className="mt-3 h-32 w-full rounded-xl border border-slate-200 object-cover"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
          ) : null}
          <input
            value={image}
            onChange={(event) => setImage(event.target.value)}
            placeholder="https://… atau unggah file"
            className={cn(inputCls, "mt-3")}
            aria-label="URL gambar utama"
          />
          <div className="mt-2 flex gap-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="flex-1"
              disabled={uploading}
              onClick={() => document.getElementById("cover-file")?.click()}
            >
              {uploading ? "Mengunggah…" : "Unggah"}
            </Button>
            {image ? (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => setImage("")}
              >
                Kosongkan
              </Button>
            ) : null}
          </div>
          <input
            id="cover-file"
            type="file"
            accept="image/png,image/jpeg,image/webp,image/avif,image/gif,image/svg+xml"
            className="hidden"
            onChange={(event) => {
              const file = event.target.files?.[0];
              if (file) void uploadCover(file);
            }}
          />
        </section>

        <section className={cardCls}>
          <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500">
            Ringkasan (excerpt)
            <textarea
              value={excerpt}
              onChange={(event) => setExcerpt(event.target.value)}
              rows={4}
              placeholder="Ringkasan singkat yang tampil di kartu artikel…"
              className={cn(inputCls, "mt-1.5 resize-y font-normal normal-case tracking-normal")}
            />
          </label>
        </section>

        {id !== null ? (
          <Button
            type="button"
            variant="outline"
            disabled={trashing || pending}
            onClick={() => void moveToTrash()}
            className="w-full border-red-200 text-red-600 hover:border-red-300 hover:bg-red-50"
          >
            <Trash2 className="size-4" aria-hidden="true" />
            {trashing ? "Memindahkan…" : "Pindahkan ke Sampah"}
          </Button>
        ) : null}
      </aside>
    </form>
  );
}
