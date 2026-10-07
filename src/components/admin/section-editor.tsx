"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import Link from "next/link";
import {
  AlertCircle,
  ArrowDown,
  ArrowLeft,
  ArrowUp,
  CheckCircle2,
  List,
  Loader2,
  Plus,
  RotateCcw,
  Save,
  Trash2,
  Type,
  Upload,
} from "lucide-react";

import { saveSectionAction } from "@/actions/admin-actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  getPath,
  isPlainObject,
  setPath,
  type PlainObject,
} from "@/lib/admin/merge";
import { getAdminSection, type AdminField } from "@/lib/admin/schema";
import { cn } from "@/lib/utils";

/** React key unik per field (group hanya punya label). */
function fieldKey(field: AdminField): string {
  return field.type === "group" ? field.label : field.key;
}

/* ---------------------------------------------------------------
 * Util nilai
 * ------------------------------------------------------------- */

function coerceNumbers(
  root: PlainObject,
  fields: AdminField[],
  defaults: PlainObject,
): PlainObject {
  let out = root;
  for (const field of fields) {
    if (field.type === "group") {
      out = coerceNumbers(out, field.fields, defaults);
      continue;
    }
    if (field.type === "number") {
      const value = getPath(out, field.key);
      if (typeof value !== "number" || !Number.isFinite(value)) {
        const fallback = getPath(defaults, field.key);
        out = setPath(
          out,
          field.key,
          typeof fallback === "number" ? fallback : 0,
        );
      }
      continue;
    }
    if (field.type === "list" && field.itemFields) {
      const list = getPath(out, field.key);
      const defaultList = getPath(defaults, field.key);
      if (!Array.isArray(list)) continue;
      const next = list.map((item, index) => {
        if (!isPlainObject(item)) return item;
        const itemDefault =
          Array.isArray(defaultList) && isPlainObject(defaultList[index])
            ? (defaultList[index] as PlainObject)
            : {};
        return coerceNumbers(item, field.itemFields!, itemDefault);
      });
      out = setPath(out, field.key, next);
    }
  }
  return out;
}

function emptyItem(fields: AdminField[]): PlainObject {
  let out: PlainObject = {};
  for (const field of fields) {
    if (field.type === "group") {
      const nested = emptyItem(field.fields);
      for (const [key, value] of Object.entries(nested)) {
        out = setPath(out, key, value);
      }
      continue;
    }
    if (field.type === "list") {
      out = setPath(out, field.key, []);
      continue;
    }
    if (field.type === "number") {
      out = setPath(out, field.key, 0);
      continue;
    }
    out = setPath(out, field.key, "");
  }
  return out;
}

/* ---------------------------------------------------------------
 * Field: gambar (unggah / URL / reset / peringatan dimensi)
 * ------------------------------------------------------------- */

function ImageField({
  field,
  values,
  defaults,
  onChange,
}: {
  field: Extract<AdminField, { type: "image" }>;
  values: PlainObject;
  defaults: PlainObject;
  onChange: (path: string, value: unknown) => void;
}) {
  const raw = getPath(values, field.key);
  const value = typeof raw === "string" ? raw : "";
  const defaultRaw = getPath(defaults, field.key);
  const defaultValue = typeof defaultRaw === "string" ? defaultRaw : "";

  const [natural, setNatural] = useState<{
    src: string;
    w: number;
    h: number;
  } | null>(null);
  const [brokenSrc, setBrokenSrc] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const naturalForValue = natural && natural.src === value ? natural : null;
  const broken = brokenSrc === value;

  const recommended =
    typeof field.recommended === "function"
      ? field.recommended(values)
      : field.recommended;
  const parsed = /^(\d+)\s*[×xX]\s*(\d+)/.exec(recommended);
  const warn =
    naturalForValue && parsed
      ? naturalForValue.w !== Number(parsed[1]) ||
        naturalForValue.h !== Number(parsed[2])
      : false;

  async function handleUpload(file: File) {
    setUploading(true);
    setUploadError("");
    try {
      const body = new FormData();
      body.append("file", file);
      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body,
      });
      const data: { url?: string; error?: string } = await res
        .json()
        .catch(() => ({}));
      if (!res.ok || !data.url) {
        throw new Error(data.error ?? "Unggah gambar gagal.");
      }
      onChange(field.key, data.url);
    } catch (error) {
      setUploadError(
        error instanceof Error ? error.message : "Unggah gambar gagal.",
      );
    } finally {
      setUploading(false);
      if (fileRef.current) fileRef.current.value = "";
    }
  }

  const inputId = `f-${field.key.replace(/[^\w-]+/g, "-")}`;

  return (
    <div className="grid gap-3 rounded-3xl border border-slate-200/80 bg-white/85 p-4 sm:col-span-2 sm:p-5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <Label htmlFor={inputId} className="text-sm font-semibold">
          {field.label}
        </Label>
        <span className="rounded-full bg-amber-50 px-2.5 py-1 text-[11px] font-semibold text-amber-700">
          Disarankan: {recommended}
        </span>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="relative grid h-40 w-full place-items-center overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 sm:w-72">
          {value && !broken ? (
            // eslint-disable-next-line @next/next/no-img-element -- URL bisa domain eksternal (next/image tanpa remotePatterns)
            <img
              src={value}
              alt=""
              className="h-full w-full object-contain p-2"
              onLoad={(event) => {
                setNatural({
                  src: value,
                  w: event.currentTarget.naturalWidth,
                  h: event.currentTarget.naturalHeight,
                });
              }}
              onError={() => setBrokenSrc(value)}
            />
          ) : (
            <span className="px-4 text-center text-xs text-slate-400">
              {broken ? "Gambar gagal dimuat — periksa URL." : "Tidak ada gambar."}
            </span>
          )}
        </div>

        <div className="grid flex-1 content-start gap-2.5">
          {warn && parsed ? (
            <p className="flex items-start gap-2 rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-xs font-medium text-amber-700">
              <AlertCircle
                aria-hidden="true"
                className="mt-0.5 size-3.5 shrink-0"
              />
              Gambar terpasang {naturalForValue?.w} × {naturalForValue?.h} px —
              disarankan {parsed[1]} × {parsed[2]} px agar tidak melar.
            </p>
          ) : null}
          {uploadError ? (
            <p
              role="alert"
              className="flex items-start gap-2 rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-xs font-medium text-rose-700"
            >
              <AlertCircle
                aria-hidden="true"
                className="mt-0.5 size-3.5 shrink-0"
              />
              {uploadError}
            </p>
          ) : null}

          <div className="flex flex-wrap gap-2">
            <input
              ref={fileRef}
              type="file"
              accept="image/png,image/jpeg,image/webp,image/avif,image/gif,image/svg+xml"
              className="hidden"
              onChange={(event) => {
                const file = event.target.files?.[0];
                if (file) void handleUpload(file);
              }}
            />
            <Button
              type="button"
              variant="outline"
              size="sm"
              disabled={uploading}
              onClick={() => fileRef.current?.click()}
            >
              {uploading ? (
                <Loader2 aria-hidden="true" className="size-4 animate-spin" />
              ) : (
                <Upload aria-hidden="true" className="size-4" />
              )}
              {uploading ? "Mengunggah…" : "Unggah gambar"}
            </Button>
            {defaultValue && value !== defaultValue ? (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => onChange(field.key, defaultValue)}
              >
                <RotateCcw aria-hidden="true" className="size-4" />
                Reset ke default
              </Button>
            ) : null}
          </div>

          <Input
            id={inputId}
            value={value}
            onChange={(event) => onChange(field.key, event.target.value)}
            placeholder="/images/… atau https://…"
            autoComplete="off"
            spellCheck={false}
          />
          {field.hint ? (
            <p className="text-xs leading-relaxed text-muted-foreground">
              {field.hint}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------
 * Field: jawaban FAQ (string ↔ poin berbutir)
 * ------------------------------------------------------------- */

function FaqAnswerField({
  field,
  values,
  defaults,
  onChange,
}: {
  field: Extract<AdminField, { type: "faqAnswer" }>;
  values: PlainObject;
  defaults: PlainObject;
  onChange: (path: string, value: unknown) => void;
}) {
  const raw = getPath(values, field.key);
  const structured =
    isPlainObject(raw) && typeof (raw as PlainObject).intro === "string";

  const bulletsField: AdminField = {
    type: "list",
    key: `${field.key}.bullets`,
    label: "Poin jawaban",
    addable: true,
    addLabel: "Tambah poin",
    itemKind: "text",
    itemLabel: (_item, index) => `Poin ${index + 1}`,
  };

  const defaultRaw = getPath(defaults, field.key);

  return (
    <div className="grid gap-3 rounded-3xl border border-slate-200/80 bg-white/85 p-4 sm:col-span-2 sm:p-5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <Label className="text-sm font-semibold">{field.label}</Label>
        <div className="flex gap-1 rounded-full border border-slate-200 bg-slate-100 p-1">
          <button
            type="button"
            onClick={() => {
              if (structured) {
                const obj = raw as PlainObject;
                const parts = [
                  String(obj.intro ?? ""),
                  ...(Array.isArray(obj.bullets) ? obj.bullets : []).map(
                    (item) => String(item ?? ""),
                  ),
                ].filter(Boolean);
                onChange(field.key, parts.join("\n"));
              }
            }}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold transition-colors",
              !structured
                ? "bg-white text-qrion-indigo shadow-sm"
                : "text-slate-500 hover:text-slate-700",
            )}
            aria-pressed={!structured}
          >
            <Type aria-hidden="true" className="size-3.5" />
            Paragraf
          </button>
          <button
            type="button"
            onClick={() => {
              if (!structured) {
                onChange(field.key, { intro: String(raw ?? ""), bullets: [] });
              }
            }}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold transition-colors",
              structured
                ? "bg-white text-qrion-indigo shadow-sm"
                : "text-slate-500 hover:text-slate-700",
            )}
            aria-pressed={structured}
          >
            <List aria-hidden="true" className="size-3.5" />
            Poin
          </button>
        </div>
      </div>

      {structured ? (
        <div className="grid gap-3">
          <Textarea
            rows={3}
            value={String((raw as PlainObject).intro ?? "")}
            onChange={(event) =>
              onChange(`${field.key}.intro`, event.target.value)
            }
            aria-label="Paragraf pembuka"
            placeholder="Paragraf pembuka jawaban…"
          />
          <ListEditor
            field={bulletsField}
            values={values}
            defaults={defaults}
            onChange={onChange}
          />
        </div>
      ) : (
        <Textarea
          rows={5}
          value={typeof raw === "string" ? raw : ""}
          onChange={(event) => onChange(field.key, event.target.value)}
          placeholder="Tulis jawaban…"
        />
      )}

      {!structured && typeof defaultRaw === "object" && defaultRaw !== null ? (
        <p className="text-xs text-muted-foreground">
          Default jawaban ini memakai format poin — tombol “Poin” di atas akan
          mengonversinya kembali.
        </p>
      ) : null}
    </div>
  );
}

/* ---------------------------------------------------------------
 * Field: daftar (string / objek)
 * ------------------------------------------------------------- */

function ListEditor({
  field,
  values,
  defaults,
  onChange,
}: {
  field: Extract<AdminField, { type: "list" }>;
  values: PlainObject;
  defaults: PlainObject;
  onChange: (path: string, value: unknown) => void;
}) {
  const raw = getPath(values, field.key);
  const list = Array.isArray(raw) ? raw : [];
  const defaultsRaw = getPath(defaults, field.key);
  const defaultsList = Array.isArray(defaultsRaw) ? defaultsRaw : [];

  const setList = (next: unknown[]) => onChange(field.key, next);

  const header = (
    <div className="flex flex-wrap items-center justify-between gap-2">
      <span className="text-sm font-semibold">{field.label}</span>
      <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-500">
        {list.length} item
      </span>
    </div>
  );

  if (field.itemKind === "text") {
    return (
      <div className="grid gap-3 rounded-3xl border border-slate-200/80 bg-white/85 p-4 sm:col-span-2 sm:p-5">
        {header}
        <ul className="grid gap-2">
          {list.map((item, index) => (
            <li key={index} className="flex gap-2">
              <Input
                value={String(item ?? "")}
                aria-label={`${field.label} ${index + 1}`}
                onChange={(event) =>
                  setList(
                    list.map((value, i) =>
                      i === index ? event.target.value : value,
                    ),
                  )
                }
              />
              {field.addable ? (
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  aria-label={`Hapus ${index + 1}`}
                  className="shrink-0 text-rose-500 hover:text-rose-600"
                  onClick={() =>
                    setList(list.filter((_value, i) => i !== index))
                  }
                >
                  <Trash2 aria-hidden="true" className="size-4" />
                </Button>
              ) : null}
            </li>
          ))}
        </ul>
        {field.addable ? (
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="justify-self-start"
            onClick={() => setList([...list, ""])}
          >
            <Plus aria-hidden="true" className="size-4" />
            {field.addLabel ?? "Tambah item"}
          </Button>
        ) : null}
      </div>
    );
  }

  const itemFields = field.itemFields ?? [];

  return (
    <div className="grid gap-4 rounded-3xl border border-slate-200/80 bg-white/85 p-4 sm:col-span-2 sm:p-5">
      {header}
      <ul className="grid gap-4">
        {list.map((item, index) => {
          const itemObject = isPlainObject(item) ? item : {};
          const itemDefaults =
            index < defaultsList.length && isPlainObject(defaultsList[index])
              ? (defaultsList[index] as PlainObject)
              : {};
          const handleItemChange = (path: string, value: unknown) => {
            setList(
              list.map((existing, i) =>
                i === index && isPlainObject(existing)
                  ? setPath(existing, path, value)
                  : existing,
              ),
            );
          };
          const move = (delta: number) => {
            const target = index + delta;
            if (target < 0 || target >= list.length) return;
            const next = list.slice();
            const [moved] = next.splice(index, 1);
            next.splice(target, 0, moved);
            setList(next);
          };

          return (
            <li
              key={index}
              className="rounded-3xl border border-slate-200/80 bg-white/95 p-4 shadow-sm sm:p-5"
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  {field.itemLabel(itemObject, index)}
                </span>
                <div className="flex items-center gap-1">
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    aria-label="Naikkan urutan"
                    disabled={index === 0}
                    onClick={() => move(-1)}
                  >
                    <ArrowUp aria-hidden="true" className="size-4" />
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    aria-label="Turunkan urutan"
                    disabled={index === list.length - 1}
                    onClick={() => move(1)}
                  >
                    <ArrowDown aria-hidden="true" className="size-4" />
                  </Button>
                  {field.addable ? (
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      aria-label="Hapus item"
                      className="text-rose-500 hover:text-rose-600"
                      onClick={() =>
                        setList(list.filter((_value, i) => i !== index))
                      }
                    >
                      <Trash2 aria-hidden="true" className="size-4" />
                    </Button>
                  ) : null}
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {itemFields.map((itemField) => (
                  <FieldControl
                    key={fieldKey(itemField)}
                    field={itemField}
                    values={itemObject}
                    defaults={itemDefaults}
                    onChange={handleItemChange}
                  />
                ))}
              </div>
            </li>
          );
        })}
      </ul>
      {field.addable ? (
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="justify-self-start"
          onClick={() => setList([...list, emptyItem(itemFields)])}
        >
          <Plus aria-hidden="true" className="size-4" />
          {field.addLabel ?? "Tambah item"}
        </Button>
      ) : null}
    </div>
  );
}

/* ---------------------------------------------------------------
 * Kontrol field rekursif
 * ------------------------------------------------------------- */

function FieldControl({
  field,
  values,
  defaults,
  onChange,
}: {
  field: AdminField;
  values: PlainObject;
  defaults: PlainObject;
  onChange: (path: string, value: unknown) => void;
}) {
  if (field.type === "group") {
    return (
      <fieldset className="grid gap-4 rounded-3xl border border-slate-200/80 bg-white/85 p-4 sm:col-span-2 sm:p-5">
        <legend className="px-2 text-sm font-bold text-qrion-indigo">
          {field.label}
        </legend>
        <div className="grid gap-4 sm:grid-cols-2">
          {field.fields.map((child) => (
            <FieldControl
              key={fieldKey(child)}
              field={child}
              values={values}
              defaults={defaults}
              onChange={onChange}
            />
          ))}
        </div>
      </fieldset>
    );
  }

  if (field.type === "image") {
    return (
      <ImageField
        field={field}
        values={values}
        defaults={defaults}
        onChange={onChange}
      />
    );
  }

  if (field.type === "faqAnswer") {
    return (
      <FaqAnswerField
        field={field}
        values={values}
        defaults={defaults}
        onChange={onChange}
      />
    );
  }

  if (field.type === "list") {
    return (
      <ListEditor
        field={field}
        values={values}
        defaults={defaults}
        onChange={onChange}
      />
    );
  }

  const inputId = `f-${field.key.replace(/[^\w-]+/g, "-")}`;
  const raw = getPath(values, field.key);

  if (field.type === "textarea") {
    return (
      <div className="grid gap-1.5 sm:col-span-2">
        <Label htmlFor={inputId} className="text-sm font-semibold">
          {field.label}
        </Label>
        <Textarea
          id={inputId}
          rows={field.rows ?? 3}
          value={typeof raw === "string" ? raw : String(raw ?? "")}
          onChange={(event) => onChange(field.key, event.target.value)}
        />
        {field.hint ? (
          <p className="text-xs text-muted-foreground">{field.hint}</p>
        ) : null}
      </div>
    );
  }

  if (field.type === "number") {
    return (
      <div className="grid gap-1.5">
        <Label htmlFor={inputId} className="text-sm font-semibold">
          {field.label}
        </Label>
        <Input
          id={inputId}
          type="number"
          inputMode="numeric"
          value={
            typeof raw === "number" && Number.isFinite(raw) ? String(raw) : ""
          }
          onChange={(event) =>
            onChange(
              field.key,
              event.target.value === "" ? "" : Number(event.target.value),
            )
          }
        />
        {field.hint ? (
          <p className="text-xs text-muted-foreground">{field.hint}</p>
        ) : null}
      </div>
    );
  }

  return (
    <div className="grid gap-1.5">
      <Label htmlFor={inputId} className="text-sm font-semibold">
        {field.label}
      </Label>
      <Input
        id={inputId}
        value={typeof raw === "string" ? raw : String(raw ?? "")}
        onChange={(event) => onChange(field.key, event.target.value)}
        autoComplete="off"
      />
      {field.hint ? (
        <p className="text-xs text-muted-foreground">{field.hint}</p>
      ) : null}
    </div>
  );
}

/* ---------------------------------------------------------------
 * Editor section
 * ------------------------------------------------------------- */

type Status = "idle" | "saving" | "saved" | "error";

export function SectionEditor({
  slug,
  initial,
  defaultsModel,
}: {
  slug: string;
  initial: PlainObject;
  defaultsModel: PlainObject;
}) {
  const section = getAdminSection(slug);
  const [values, setValues] = useState<PlainObject>(initial);
  const [dirty, setDirty] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [pending, startTransition] = useTransition();

  // `values` sengaja tidak di-sync lewat effect: form punya state sendiri,
  // pindah section sudah meremount komponen (rute [slug] berbeda), dan
  // refresh RSC setelah simpan tidak boleh mematikan banner "Tersimpan".

  useEffect(() => {
    if (status !== "saved") return;
    const timer = setTimeout(() => setStatus("idle"), 4000);
    return () => clearTimeout(timer);
  }, [status]);

  if (!section) return null;
  const Icon = section.icon;

  const update = (path: string, value: unknown) => {
    setValues((previous) => setPath(previous, path, value));
    setDirty(true);
    setStatus("idle");
    setErrorMessage("");
  };

  const reset = () => {
    setValues(initial);
    setDirty(false);
    setStatus("idle");
    setErrorMessage("");
  };

  const save = () => {
    startTransition(async () => {
      setStatus("saving");
      const payload = coerceNumbers(values, section.fields, defaultsModel);
      const result = await saveSectionAction(section.path, payload);
      if (result.error) {
        setStatus("error");
        setErrorMessage(result.error);
      } else {
        setStatus("saved");
        setDirty(false);
      }
    });
  };

  const statusText =
    status === "saving"
      ? "Menyimpan perubahan…"
      : status === "saved"
        ? "Tersimpan — situs sudah diperbarui."
        : status === "error"
          ? errorMessage
          : dirty
            ? "Ada perubahan yang belum disimpan."
            : "Tidak ada perubahan.";

  return (
    <div className="grid gap-6">
      <div className="rounded-3xl border border-white/60 bg-white/70 p-6 shadow-[0_8px_30px_rgba(48,46,89,0.06)] backdrop-blur-xl sm:p-8">
        <Link
          href="/admin"
          className="mb-4 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          Dasbor
        </Link>
        <div className="flex items-start gap-4">
          <span
            className={`grid size-12 shrink-0 place-items-center rounded-2xl ${section.accent}`}
          >
            <Icon aria-hidden="true" className="size-6" />
          </span>
          <div className="min-w-0">
            <h1 className="font-display text-2xl font-bold tracking-tight text-qrion-indigo sm:text-3xl">
              {section.title}
            </h1>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              {section.description}
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {section.fields.map((field) => (
          <FieldControl
            key={fieldKey(field)}
            field={field}
            values={values}
            defaults={defaultsModel}
            onChange={update}
          />
        ))}
      </div>

      <div className="sticky bottom-4 z-30 flex flex-wrap items-center justify-between gap-3 rounded-3xl border border-white/70 bg-white/85 px-4 py-3 shadow-[0_8px_30px_rgba(48,46,89,0.12)] backdrop-blur-xl sm:px-5">
        <p
          role={status === "error" ? "alert" : "status"}
          className={cn(
            "flex items-center gap-2 text-sm font-medium",
            status === "error"
              ? "text-rose-600"
              : status === "saved"
                ? "text-emerald-600"
                : status === "saving"
                  ? "text-slate-500"
                  : dirty
                    ? "text-amber-600"
                    : "text-slate-400",
          )}
        >
          {status === "saving" ? (
            <Loader2 aria-hidden="true" className="size-4 animate-spin" />
          ) : status === "saved" ? (
            <CheckCircle2 aria-hidden="true" className="size-4" />
          ) : status === "error" ? (
            <AlertCircle aria-hidden="true" className="size-4" />
          ) : null}
          {statusText}
        </p>
        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            disabled={!dirty || pending}
            onClick={reset}
          >
            Batalkan
          </Button>
          <Button
            type="button"
            size="sm"
            disabled={!dirty || pending}
            onClick={save}
            className="rounded-full"
          >
            {pending ? (
              <Loader2 aria-hidden="true" className="size-4 animate-spin" />
            ) : (
              <Save aria-hidden="true" className="size-4" />
            )}
            Simpan perubahan
          </Button>
        </div>
      </div>
    </div>
  );
}
