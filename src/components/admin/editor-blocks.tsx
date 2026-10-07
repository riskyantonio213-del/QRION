"use client";

import { Fragment, Slice } from "@tiptap/pm/model";
import { NodeSelection, TextSelection } from "@tiptap/pm/state";
import type { Editor } from "@tiptap/react";
import {
  Heading2,
  Heading3,
  Heading4,
  Image as ImageIcon,
  List,
  ListOrdered,
  Minus,
  Pilcrow,
  Quote,
  SquareCode,
  Table as TableIcon,
  Upload,
} from "lucide-react";

export type BlockCtx = { openUpload: () => void };

export type BlockItem = {
  id: string;
  label: string;
  desc: string;
  icon: typeof Pilcrow;
  keywords: string[];
  kind: "text" | "media";
  run: (editor: Editor, ctx: BlockCtx) => void;
};

/** Posisi sisipan: kursor aktif; bila belum pernah diklik → akhir dokumen. */
export function caretPos(editor: Editor): number {
  const sel = editor.state.selection;
  if (sel.empty && sel.from === 0) return editor.state.doc.content.size;
  return sel.from;
}

/** Atur lebar gambar terpilih (px), atau null untuk lebar alami. */
export function setImageWidth(editor: Editor, width: number | null): void {
  editor.chain().focus().updateAttributes("image", { width, height: null }).run();
}

/**
 * Sinkronkan atribut ukuran node image ke elemen DOM. Node view sengaja
 * melewatkan width/height, dan penulisan style oleh perintah lain (mis. rata)
 * dapat menimpa ukuran — jadikan node attrs sumber kebenaran.
 */
export function syncImageSizes(editor: Editor): void {
  editor.state.doc.descendants((node, pos) => {
    if (node.type.name !== "image") return;
    const dom = editor.view.nodeDOM(pos);
    const img =
      dom instanceof HTMLImageElement
        ? dom
        : dom instanceof HTMLElement
          ? dom.querySelector("img")
          : null;
    if (!img) return;
    const { width, height } = node.attrs as { width: unknown; height: unknown };
    img.style.width = typeof width === "number" ? `${width}px` : "";
    img.style.height = typeof height === "number" ? `${height}px` : "";
    if (typeof width === "number") img.setAttribute("width", String(width));
    else img.removeAttribute("width");
    if (typeof height === "number") img.setAttribute("height", String(height));
    else img.removeAttribute("height");
  });
}

function promptImageSrc(previous: string | undefined): string | null {
  const url = window.prompt("URL gambar:", previous ?? "https://");
  if (url === null || url.trim() === "") return null;
  return url.trim();
}

/** Sisip gambar block baru di kursor dari prompt URL. */
export function insertImageWithPrompt(editor: Editor): void {
  const src = promptImageSrc(undefined);
  if (!src) return;
  const pos = caretPos(editor);
  editor.chain().focus().setTextSelection(pos).setImage({ src }).run();
}

/** Ganti src gambar yang sedang dipilih. */
export function replaceImageSrc(editor: Editor): void {
  const previous = editor.getAttributes("image").src as string | undefined;
  const src = promptImageSrc(previous);
  if (!src) return;
  editor.chain().focus().updateAttributes("image", { src }).run();
}

/** Edit teks alternatif gambar yang sedang dipilih. */
export function promptImageAlt(editor: Editor): void {
  const previous = (editor.getAttributes("image").alt as string | undefined) ?? "";
  const next = window.prompt("Teks alternatif gambar:", previous);
  if (next === null) return;
  editor
    .chain()
    .focus()
    .updateAttributes("image", { alt: next.trim() === "" ? null : next.trim() })
    .run();
}

export const blockCatalog: BlockItem[] = [
  {
    id: "paragraph",
    label: "Paragraf",
    desc: "Teks biasa",
    icon: Pilcrow,
    keywords: ["paragraf", "paragraph", "teks", "p"],
    kind: "text",
    run: (editor) => {
      editor.chain().focus().setParagraph().run();
    },
  },
  {
    id: "h2",
    label: "Judul 2",
    desc: "Bagian utama",
    icon: Heading2,
    keywords: ["judul", "heading", "h2", "besar"],
    kind: "text",
    run: (editor) => {
      editor.chain().focus().toggleHeading({ level: 2 }).run();
    },
  },
  {
    id: "h3",
    label: "Judul 3",
    desc: "Sub bagian",
    icon: Heading3,
    keywords: ["judul", "heading", "h3", "sedang"],
    kind: "text",
    run: (editor) => {
      editor.chain().focus().toggleHeading({ level: 3 }).run();
    },
  },
  {
    id: "h4",
    label: "Judul 4",
    desc: "Sub kecil",
    icon: Heading4,
    keywords: ["judul", "heading", "h4", "kecil"],
    kind: "text",
    run: (editor) => {
      editor.chain().focus().toggleHeading({ level: 4 }).run();
    },
  },
  {
    id: "bullet",
    label: "Daftar butir",
    desc: "Poin bertitik",
    icon: List,
    keywords: ["daftar", "list", "butir", "bullet", "poin"],
    kind: "text",
    run: (editor) => {
      editor.chain().focus().toggleBulletList().run();
    },
  },
  {
    id: "ordered",
    label: "Daftar bernomor",
    desc: "Tahapan bernomor",
    icon: ListOrdered,
    keywords: ["daftar", "nomor", "number", "urut"],
    kind: "text",
    run: (editor) => {
      editor.chain().focus().toggleOrderedList().run();
    },
  },
  {
    id: "quote",
    label: "Kutipan",
    desc: "Teks kutipan",
    icon: Quote,
    keywords: ["kutip", "quote", "blockquote"],
    kind: "text",
    run: (editor) => {
      editor.chain().focus().toggleBlockquote().run();
    },
  },
  {
    id: "code",
    label: "Blok kode",
    desc: "Potongan kode",
    icon: SquareCode,
    keywords: ["kode", "code"],
    kind: "text",
    run: (editor) => {
      editor.chain().focus().toggleCodeBlock().run();
    },
  },
  {
    id: "hr",
    label: "Garis pemisah",
    desc: "Pemisah antar bagian",
    icon: Minus,
    keywords: ["pemisah", "garis", "divider", "hr", "rule"],
    kind: "media",
    run: (editor) => {
      editor.chain().focus().setHorizontalRule().run();
    },
  },
  {
    id: "table",
    label: "Tabel",
    desc: "3 × 3 dengan judul",
    icon: TableIcon,
    keywords: ["tabel", "table"],
    kind: "media",
    run: (editor) => {
      editor
        .chain()
        .focus()
        .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
        .run();
    },
  },
  {
    id: "image-url",
    label: "Gambar (URL)",
    desc: "Sisip dari tautan",
    icon: ImageIcon,
    keywords: ["gambar", "image", "foto", "url", "tautan"],
    kind: "media",
    run: (editor) => {
      insertImageWithPrompt(editor);
    },
  },
  {
    id: "image-upload",
    label: "Gambar (unggah)",
    desc: "Pilih dari komputer",
    icon: Upload,
    keywords: ["gambar", "image", "unggah", "upload", "file"],
    kind: "media",
    run: (_editor, ctx) => {
      ctx.openUpload();
    },
  },
];

export function filterBlocks(query: string): BlockItem[] {
  const q = query.trim().toLowerCase();
  if (q === "") return blockCatalog;
  return blockCatalog.filter(
    (item) =>
      item.label.toLowerCase().includes(q) ||
      item.keywords.some((keyword) => keyword.includes(q)),
  );
}

/**
 * Jalankan item blok (untuk slash command / inserter). `range` adalah teks
 * pemicu slash yang harus dihapus dahulu. Blok media dipasang di batas blok
 * bila blok saat ini berisi teks, agar tidak masuk ke dalam paragraf.
 */
export function applyBlock(
  editor: Editor,
  item: BlockItem,
  ctx: BlockCtx,
  range?: { from: number; to: number },
): boolean {
  if (range) {
    editor.chain().focus().deleteRange(range).run();
  }
  if (item.kind === "media") {
    const $from = editor.state.selection.$from;
    const parentEmpty =
      $from.parent.isTextblock && $from.parent.content.size === 0;
    if (!parentEmpty && $from.depth >= 1) {
      editor
        .chain()
        .focus()
        .setTextSelection($from.after(1))
        .run();
    }
  }
  item.run(editor, ctx);
  return true;
}

/** Pindahkan blok tingkat atas yang berisi pilihan ke atas/bawah. */
export function moveBlock(editor: Editor, dir: -1 | 1): boolean {
  const state = editor.state;
  const sel = state.selection;
  const $from = sel.$from;

  let from: number;
  let to: number;
  let idx: number;
  if ($from.depth === 0) {
    // NodeSelection di level dokumen (mis. gambar terpilih).
    if ($from.parent.childCount < 2) return false;
    from = sel.from;
    to = sel.to;
    idx = $from.index(0);
  } else {
    from = $from.before(1);
    to = $from.after(1);
    idx = $from.index(0);
  }

  const parent = $from.node(0);
  const target = idx + dir;
  if (target < 0 || target >= parent.childCount) return false;

  const current = parent.child(idx);
  const sibling = parent.child(target);
  const rangeFrom = dir === -1 ? from - sibling.nodeSize : from;
  const rangeTo = dir === -1 ? to : to + sibling.nodeSize;
  const order = dir === -1 ? [current, sibling] : [sibling, current];
  const movedStart = dir === -1 ? rangeFrom : rangeFrom + sibling.nodeSize;

  return editor
    .chain()
    .focus()
    .command(({ tr }) => {
      tr.replace(rangeFrom, rangeTo, new Slice(Fragment.fromArray(order), 0, 0));
      if (current.isLeaf) {
        tr.setSelection(NodeSelection.create(tr.doc, movedStart));
      } else {
        tr.setSelection(
          TextSelection.near(
            tr.doc.resolve(Math.min(movedStart + 1, tr.doc.content.size)),
          ),
        );
      }
      return true;
    })
    .run();
}
