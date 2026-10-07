"use client";

import type { Node as PMNode } from "@tiptap/pm/model";
import { NodeSelection } from "@tiptap/pm/state";
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
} from "lucide-react";

import { cn } from "@/lib/utils";

export type TreeEntry = {
  /** Posisi sebelum node (koordinat dokumen). */
  pos: number;
  /** Posisi kursor saat baris diklik. */
  cursor: number;
  type: string;
  label: string;
  leaf: boolean;
  icon: typeof Pilcrow;
  active: boolean;
  children?: TreeEntry[];
};

function preview(node: PMNode, max = 30): string {
  const text = node.textContent.replace(/\s+/g, " ").trim();
  if (!text) return "";
  return text.length > max ? `${text.slice(0, max)}…` : text;
}

function iconFor(type: string): typeof Pilcrow {
  switch (type) {
    case "heading": {
      return Heading2;
    }
    case "image":
      return ImageIcon;
    case "horizontalRule":
      return Minus;
    case "bulletList":
      return List;
    case "orderedList":
      return ListOrdered;
    case "blockquote":
      return Quote;
    case "codeBlock":
      return SquareCode;
    case "table":
      return TableIcon;
    default:
      return Pilcrow;
  }
}

function labelFor(node: PMNode): string {
  const text = preview(node);
  switch (node.type.name) {
    case "heading": {
      const label = `Judul ${node.attrs.level}`;
      return text ? `${label}: ${text}` : label;
    }
    case "paragraph":
      return text || "Paragraf kosong";
    case "image":
      return "Gambar";
    case "horizontalRule":
      return "Pemisah";
    case "blockquote":
      return text ? `Kutipan: ${text}` : "Kutipan";
    case "codeBlock":
      return "Blok kode";
    case "table":
      return `Tabel (${node.childCount} baris)`;
    case "bulletList":
      return "Daftar butir";
    case "orderedList":
      return "Daftar bernomor";
    case "listItem":
      return text || "Item kosong";
    default:
      return node.type.name;
  }
}

/** Pilih blok di editor (NodeSelection untuk leaf, kursor untuk teks). */
export function selectEntry(editor: Editor, entry: TreeEntry): void {
  if (entry.leaf) {
    editor
      .chain()
      .command(({ tr }) => {
        tr.setSelection(NodeSelection.create(tr.doc, entry.pos));
        return true;
      })
      .run();
  } else {
    editor.chain().focus().setTextSelection(entry.cursor).run();
  }
}

function activePositions(editor: Editor): {
  top: number;
  child: number;
} {
  const sel = editor.state.selection;
  const $from = sel.$from;
  let top = -1;
  if (sel instanceof NodeSelection) {
    top = $from.depth === 0 ? sel.from : $from.before(1);
  } else if ($from.depth >= 1) {
    top = $from.before(1);
  }
  let child = -1;
  if ($from.depth >= 2 && $from.node(2).type.name === "listItem") {
    child = $from.before(2);
  }
  return { top, child };
}

function buildEntries(doc: PMNode, top: number, child: number): TreeEntry[] {
  const entries: TreeEntry[] = [];
  doc.forEach((node, offset) => {
    const entry: TreeEntry = {
      pos: offset,
      cursor: offset + 1,
      type: node.type.name,
      label: labelFor(node),
      leaf: node.isLeaf,
      icon: iconFor(node.type.name),
      active: offset === top,
    };
    if (node.type.name === "bulletList" || node.type.name === "orderedList") {
      const children: TreeEntry[] = [];
      let childTop = -1;
      node.forEach((li, liOffset) => {
        const liPos = offset + 1 + liOffset;
        if (liPos === child) childTop = children.length;
        children.push({
          pos: liPos,
          cursor: liPos + 2,
          type: "listItem",
          label: labelFor(li),
          leaf: false,
          icon: Pilcrow,
          active: liPos === child,
        });
      });
      if (childTop !== -1) entry.active = true;
      entry.children = children;
    }
    entries.push(entry);
  });
  return entries;
}

export function ListView(props: { editor: Editor }) {
  const { top, child } = activePositions(props.editor);
  const entries = buildEntries(props.editor.state.doc, top, child);

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between border-b border-slate-200 px-3 py-2">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
          Daftar Blok
        </span>
        <span className="rounded-full bg-slate-100 px-1.5 text-[11px] text-slate-500">
          {entries.length}
        </span>
      </div>
      <ul className="flex-1 space-y-0.5 overflow-y-auto p-1.5">
        {entries.map((entry) => (
          <li key={entry.pos}>
            <button
              type="button"
              onClick={() => selectEntry(props.editor, entry)}
              aria-current={entry.active}
              className={cn(
                "flex w-full items-center gap-1.5 rounded-md px-1.5 py-1 text-left text-[13px] transition-colors",
                entry.active
                  ? "bg-brand/15 font-semibold text-brand"
                  : "text-slate-600 hover:bg-slate-100",
              )}
            >
              <entry.icon className="size-3.5 shrink-0 opacity-70" />
              <span className="truncate">{entry.label}</span>
            </button>
            {entry.children ? (
              <ul className="ml-3 border-l border-slate-100 pl-1.5">
                {entry.children.map((childEntry) => (
                  <li key={childEntry.pos}>
                    <button
                      type="button"
                      onClick={() => selectEntry(props.editor, childEntry)}
                      aria-current={childEntry.active}
                      className={cn(
                        "flex w-full items-center gap-1.5 rounded-md px-1.5 py-1 text-left text-[12px] transition-colors",
                        childEntry.active
                          ? "bg-brand/15 font-semibold text-brand"
                          : "text-slate-500 hover:bg-slate-100",
                      )}
                    >
                      <span className="truncate">{childEntry.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
