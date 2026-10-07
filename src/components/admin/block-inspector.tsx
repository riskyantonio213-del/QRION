"use client";

import { useState } from "react";
import type { Node as PMNode, ResolvedPos } from "@tiptap/pm/model";
import { NodeSelection } from "@tiptap/pm/state";
import type { Editor } from "@tiptap/react";
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Check,
  Copy,
  FileText,
  SlidersHorizontal,
} from "lucide-react";

import { anchorSlug } from "@/lib/anchor";
import { cn } from "@/lib/utils";

type Tab = "dokumen" | "blok";

function findAncestor(
  $from: ResolvedPos,
  name: string,
): PMNode | null {
  for (let depth = $from.depth; depth > 0; depth--) {
    if ($from.node(depth).type.name === name) return $from.node(depth);
  }
  return null;
}

function Section(props: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-b border-slate-100 px-3 py-3 last:border-b-0">
      <h4 className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
        {props.title}
      </h4>
      {props.children}
    </section>
  );
}

function TextInput(props: {
  label: string;
  value: string;
  placeholder?: string;
  onCommit: (value: string) => void;
}) {
  return (
    <label className="mb-2 block last:mb-0">
      <span className="mb-1 block text-xs font-medium text-slate-500">
        {props.label}
      </span>
      <input
        defaultValue={props.value}
        placeholder={props.placeholder}
        onBlur={(event) => {
          const value = event.target.value.trim();
          if (value !== props.value) props.onCommit(value);
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter") event.currentTarget.blur();
        }}
        className="w-full rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-sm text-slate-800 outline-none transition-colors focus:border-brand"
      />
    </label>
  );
}

function Seg(props: {
  label: string;
  active?: boolean;
  disabled?: boolean;
  onClick: () => void;
  title?: string;
}) {
  return (
    <button
      type="button"
      title={props.title ?? props.label}
      aria-pressed={props.active}
      disabled={props.disabled}
      onMouseDown={(event) => event.preventDefault()}
      onClick={props.onClick}
      className={cn(
        "flex-1 px-2 py-1.5 text-xs font-medium transition-colors",
        "disabled:opacity-40",
        props.active
          ? "bg-brand/15 text-brand"
          : "text-slate-600 hover:bg-slate-50",
      )}
    >
      {props.label}
    </button>
  );
}

function SegGroup(props: { children: React.ReactNode }) {
  return (
    <div className="flex overflow-hidden rounded-lg border border-slate-200 bg-white">
      {props.children}
    </div>
  );
}

export function BlockInspector({ editor }: { editor: Editor }) {
  const [tab, setTab] = useState<Tab>("blok");
  const [copied, setCopied] = useState(false);

  const { state } = editor;
  const sel = state.selection;
  const $from = sel.$from;
  const activePos =
    sel instanceof NodeSelection
      ? $from.depth === 0
        ? sel.from
        : $from.before(1)
      : $from.depth >= 1
        ? $from.before(1)
        : -1;
  const activeNode = activePos >= 0 ? state.doc.nodeAt(activePos) : null;

  const isParagraph =
    editor.isActive("paragraph") && !editor.isActive("heading");
  const isHeading = editor.isActive("heading");
  const isText = isParagraph || isHeading;
  const isImage = editor.isActive("image");
  const isTable = editor.isActive("table");
  const isBullet = editor.isActive("bulletList");
  const isOrdered = editor.isActive("orderedList");
  const isList = isBullet || isOrdered;
  const inLink = editor.isActive("link");

  const blockLabel = activeNode
    ? activeNode.type.name === "heading"
      ? `Judul ${activeNode.attrs.level}`
      : activeNode.type.name === "paragraph"
        ? "Paragraf"
        : activeNode.type.name === "image"
          ? "Gambar"
          : activeNode.type.name === "bulletList"
            ? "Daftar butir"
            : activeNode.type.name === "orderedList"
              ? "Daftar bernomor"
              : activeNode.type.name === "blockquote"
                ? "Kutipan"
                : activeNode.type.name === "codeBlock"
                  ? "Blok kode"
                  : activeNode.type.name === "table"
                    ? "Tabel"
                    : activeNode.type.name === "horizontalRule"
                      ? "Pemisah"
                      : activeNode.type.name
    : "Dokumen";

  const image = isImage ? editor.getAttributes("image") : null;
  const imageWidth =
    image && typeof image.width === "number" ? image.width : null;

  const headingAnchor =
    isHeading && activeNode ? anchorSlug(activeNode.textContent) : "";

  const table = isTable ? findAncestor($from, "table") : null;
  const linkHref = inLink
    ? ((editor.getAttributes("link").href as string | undefined) ?? "")
    : "";

  function setAttr(name: string, attrs: Record<string, unknown>) {
    editor.chain().updateAttributes(name, attrs).run();
  }

  function setImageSize(width: number | null) {
    editor.chain().updateAttributes("image", { width, height: null }).run();
  }

  function jumpTo(pos: number) {
    editor.chain().focus().setTextSelection(pos + 1).run();
  }

  const headings: { pos: number; level: number; text: string }[] = [];
  state.doc.forEach((node, offset) => {
    if (node.type.name === "heading") {
      headings.push({
        pos: offset,
        level: node.attrs.level as number,
        text: node.textContent.trim() || "(tanpa teks)",
      });
    }
  });

  const words =
    (editor.storage.characterCount as { words?: () => number } | undefined)
      ?.words?.() ?? 0;
  const chars =
    (editor.storage.characterCount as { characters?: () => number }
      | undefined)?.characters?.() ?? 0;

  return (
    <div className="flex h-full flex-col">
      {/* Tab gaya Page | Block */}
      <div className="flex gap-1 border-b border-slate-200 bg-slate-50/60 p-1.5">
        {(
          [
            { id: "dokumen", label: "Dokumen", icon: FileText },
            { id: "blok", label: "Blok", icon: SlidersHorizontal },
          ] as const
        ).map((item) => (
          <button
            key={item.id}
            type="button"
            aria-pressed={tab === item.id}
            onClick={() => setTab(item.id)}
            className={cn(
              "flex flex-1 items-center justify-center gap-1.5 rounded-md px-2 py-1.5 text-xs font-medium transition-colors",
              tab === item.id
                ? "bg-white text-slate-900 shadow-sm ring-1 ring-slate-200"
                : "text-slate-500 hover:text-slate-800",
            )}
          >
            <item.icon className="size-3.5" />
            {item.label}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto">
        {tab === "dokumen" ? (
          <>
            <Section title="Statistik">
              <dl className="grid grid-cols-3 gap-1.5 text-center">
                {[
                  { label: "Blok", value: state.doc.childCount },
                  { label: "Kata", value: words },
                  { label: "Karakter", value: chars },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-lg bg-slate-50 px-1 py-2"
                  >
                    <dt className="text-[10px] uppercase tracking-wide text-slate-400">
                      {item.label}
                    </dt>
                    <dd className="text-sm font-semibold text-slate-700">
                      {item.value.toLocaleString("id-ID")}
                    </dd>
                  </div>
                ))}
              </dl>
            </Section>
            <Section title="Kerangka Judul">
              {headings.length === 0 ? (
                <p className="text-xs text-slate-400">
                  Belum ada judul di artikel ini.
                </p>
              ) : (
                <ul className="space-y-0.5">
                  {headings.map((item) => (
                    <li key={item.pos}>
                      <button
                        type="button"
                        onClick={() => jumpTo(item.pos)}
                        className="block w-full truncate rounded-md px-2 py-1.5 text-left text-xs text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900"
                        style={{
                          paddingLeft: `${0.5 + (item.level - 2) * 0.75}rem`,
                        }}
                      >
                        <span className="mr-1.5 font-semibold text-slate-400">
                          H{item.level}
                        </span>
                        {item.text}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </Section>
          </>
        ) : (
          <>
            <div className="border-b border-slate-100 px-3 py-2.5">
              <p className="truncate text-sm font-semibold text-slate-800">
                {blockLabel}
              </p>
              <p className="text-[11px] text-slate-400">
                {activePos >= 0
                  ? `Posisi ${activePos.toLocaleString("id-ID")}`
                  : "Pilih blok di kanvas untuk mengatur."}
              </p>
            </div>

            {isText ? (
              <>
                <Section title="Jenis Blok">
                  <SegGroup>
                    <Seg
                      label="Paragraf"
                      active={isParagraph}
                      onClick={() => editor.chain().setParagraph().run()}
                    />
                    <Seg
                      label="H2"
                      active={editor.isActive("heading", { level: 2 })}
                      onClick={() =>
                        editor.chain().toggleHeading({ level: 2 }).run()
                      }
                    />
                    <Seg
                      label="H3"
                      active={editor.isActive("heading", { level: 3 })}
                      onClick={() =>
                        editor.chain().toggleHeading({ level: 3 }).run()
                      }
                    />
                    <Seg
                      label="H4"
                      active={editor.isActive("heading", { level: 4 })}
                      onClick={() =>
                        editor.chain().toggleHeading({ level: 4 }).run()
                      }
                    />
                  </SegGroup>
                </Section>
                <Section title="Perataan Teks">
                  <SegGroup>
                    <Seg
                      label="Kiri"
                      active={editor.isActive({ textAlign: "left" })}
                      onClick={() =>
                        editor.chain().setTextAlign("left").run()
                      }
                    />
                    <Seg
                      label="Tengah"
                      active={editor.isActive({ textAlign: "center" })}
                      onClick={() =>
                        editor.chain().setTextAlign("center").run()
                      }
                    />
                    <Seg
                      label="Kanan"
                      active={editor.isActive({ textAlign: "right" })}
                      onClick={() =>
                        editor.chain().setTextAlign("right").run()
                      }
                    />
                  </SegGroup>
                </Section>
                {headingAnchor ? (
                  <Section title="Jangkar (anchor)">
                    <div className="flex items-center gap-2">
                      <code className="min-w-0 flex-1 truncate rounded-lg bg-slate-50 px-2 py-1.5 text-xs font-medium text-slate-600">
                        #{headingAnchor}
                      </code>
                      <button
                        type="button"
                        onClick={() => {
                          void navigator.clipboard
                            .writeText(`#${headingAnchor}`)
                            .then(() => {
                              setCopied(true);
                              window.setTimeout(() => setCopied(false), 1500);
                            });
                        }}
                        className="inline-flex shrink-0 items-center gap-1 rounded-lg border border-slate-200 px-2.5 py-1.5 text-xs font-medium text-slate-600 transition-colors hover:bg-slate-50"
                      >
                        {copied ? (
                          <Check className="size-3.5 text-emerald-600" />
                        ) : (
                          <Copy className="size-3.5" />
                        )}
                        {copied ? "Tersalin" : "Salin"}
                      </button>
                    </div>
                    <p className="mt-1.5 text-[11px] leading-relaxed text-slate-400">
                      Tujuan tautan <code className="font-medium">#…</code> di
                      halaman publik. Sisipkan lewat tombol tautan di toolbar.
                    </p>
                  </Section>
                ) : null}
              </>
            ) : null}

            {isImage && image ? (
              <div key={`image-${activePos}`}>
                <Section title="Gambar">
                  <TextInput
                    label="URL Sumber"
                    value={String(image.src ?? "")}
                    placeholder="https://…"
                    onCommit={(value) => {
                      if (value) setAttr("image", { src: value });
                    }}
                  />
                  <TextInput
                    label="Teks Alternatif"
                    value={String(image.alt ?? "")}
                    placeholder="Deskripsi singkat gambar"
                    onCommit={(value) => setAttr("image", { alt: value })}
                  />
                </Section>
                <Section title="Ukuran">
                  <label className="mb-2 block">
                    <span className="mb-1 block text-xs font-medium text-slate-500">
                      Lebar (px)
                    </span>
                    <input
                      key={`w-${activePos}`}
                      type="number"
                      min={40}
                      max={4000}
                      defaultValue={imageWidth ?? ""}
                      placeholder="Otomatis"
                      onBlur={(event) => {
                        const raw = event.target.value.trim();
                        if (raw === "") {
                          if (imageWidth !== null) setImageSize(null);
                          return;
                        }
                        const value = Math.min(
                          4000,
                          Math.max(40, Math.round(Number(raw))),
                        );
                        if (Number.isFinite(value) && value !== imageWidth) {
                          setImageSize(value);
                        }
                      }}
                      className="w-full rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-sm text-slate-800 outline-none transition-colors focus:border-brand"
                    />
                  </label>
                  <SegGroup>
                    <Seg
                      label="S 240"
                      active={imageWidth === 240}
                      onClick={() => setImageSize(240)}
                    />
                    <Seg
                      label="M 400"
                      active={imageWidth === 400}
                      onClick={() => setImageSize(400)}
                    />
                    <Seg
                      label="L 640"
                      active={imageWidth === 640}
                      onClick={() => setImageSize(640)}
                    />
                    <Seg
                      label="100%"
                      active={imageWidth === null}
                      onClick={() => setImageSize(null)}
                    />
                  </SegGroup>
                </Section>
                <Section title="Perataan Gambar">
                  <SegGroup>
                    <Seg
                      label="Kiri"
                      active={editor.isActive({ textAlign: "left" })}
                      onClick={() =>
                        editor.chain().setTextAlign("left").run()
                      }
                    />
                    <Seg
                      label="Tengah"
                      active={editor.isActive({ textAlign: "center" })}
                      onClick={() =>
                        editor.chain().setTextAlign("center").run()
                      }
                    />
                    <Seg
                      label="Kanan"
                      active={editor.isActive({ textAlign: "right" })}
                      onClick={() =>
                        editor.chain().setTextAlign("right").run()
                      }
                    />
                  </SegGroup>
                </Section>
              </div>
            ) : null}

            {isList ? (
              <Section title="Daftar">
                <SegGroup>
                  <Seg
                    label="Butir"
                    active={isBullet}
                    onClick={() => editor.chain().toggleBulletList().run()}
                  />
                  <Seg
                    label="Bernomor"
                    active={isOrdered}
                    onClick={() => editor.chain().toggleOrderedList().run()}
                  />
                </SegGroup>
              </Section>
            ) : null}

            {isTable && table ? (
              <Section title="Tabel">
                <p className="mb-2 text-xs text-slate-500">
                  {table.childCount} baris ×{" "}
                  {table.childCount > 0
                    ? table.child(0).childCount
                    : 0}{" "}
                  kolom
                </p>
                <SegGroup>
                  <Seg
                    label="R+"
                    title="Tambah baris"
                    onClick={() => editor.chain().addRowAfter().run()}
                  />
                  <Seg
                    label="R−"
                    title="Hapus baris"
                    onClick={() => editor.chain().deleteRow().run()}
                  />
                  <Seg
                    label="K+"
                    title="Tambah kolom"
                    onClick={() => editor.chain().addColumnAfter().run()}
                  />
                  <Seg
                    label="K−"
                    title="Hapus kolom"
                    onClick={() => editor.chain().deleteColumn().run()}
                  />
                </SegGroup>
                <button
                  type="button"
                  onClick={() => editor.chain().deleteTable().run()}
                  className="mt-2 w-full rounded-lg border border-red-200 px-2 py-1.5 text-xs font-medium text-red-600 transition-colors hover:bg-red-50"
                >
                  Hapus tabel
                </button>
              </Section>
            ) : null}

            {inLink ? (
              <div key={`link-${activePos}`}>
                <Section title="Tautan">
                  <TextInput
                    label="URL"
                    value={linkHref}
                    placeholder="https://…"
                    onCommit={(value) => {
                      if (!value) return;
                      editor
                        .chain()
                        .setTextSelection(sel.from)
                        .extendMarkRange("link")
                        .setLink({ href: value })
                        .run();
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => editor.chain().unsetLink().run()}
                    className="w-full rounded-lg border border-slate-200 px-2 py-1.5 text-xs font-medium text-slate-600 transition-colors hover:bg-slate-50"
                  >
                    Lepas tautan
                  </button>
                </Section>
              </div>
            ) : null}

            {!isText && !isImage && !isList && !isTable && !inLink ? (
              <div className="px-3 py-4 text-xs leading-relaxed text-slate-400">
                Pilih teks atau blok di kanvas untuk melihat pengaturannya di
                sini.
              </div>
            ) : null}
          </>
        )}
      </div>
    </div>
  );
}
