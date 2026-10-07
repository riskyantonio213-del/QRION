"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { EditorContent, useEditor, type Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import CharacterCount from "@tiptap/extension-character-count";
import Image from "@tiptap/extension-image";
import Placeholder from "@tiptap/extension-placeholder";
import { Table, TableCell, TableHeader, TableRow } from "@tiptap/extension-table";
import TextAlign from "@tiptap/extension-text-align";
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  ArrowDown,
  ArrowUp,
  Bold,
  ChevronDown,
  ChevronRight,
  Code,
  GripVertical,
  Italic,
  Link2,
  List,
  ListOrdered,
  Monitor,
  PanelLeft,
  PanelLeftClose,
  PanelRight,
  PanelRightClose,
  Plus,
  Redo2,
  Smartphone,
  Strikethrough,
  Tablet,
  Underline,
  Undo2,
  Unlink,
  Upload,
} from "lucide-react";

import { BlockInspector } from "@/components/admin/block-inspector";
import {
  applyBlock,
  filterBlocks,
  moveBlock,
  promptImageAlt,
  replaceImageSrc,
  setImageWidth,
  syncImageSizes,
  type BlockCtx,
  type BlockItem,
} from "@/components/admin/editor-blocks";
import { ListView } from "@/components/admin/list-view";
import { cn } from "@/lib/utils";

type TiptapEditorProps = {
  initialHTML: string;
  onChange: (html: string) => void;
};

type SlashState = {
  query: string;
  from: number;
  to: number;
  active: number;
  x: number;
  y: number;
  /** Aktif hanya setelah pointer benar-benar bergerak di dalam menu. */
  hover: boolean;
};

type Device = "full" | "tablet" | "phone";

function TbBtn(props: {
  label: string;
  active?: boolean;
  disabled?: boolean;
  /** Lebar ikuti konten (untuk tombol berlabel teks, cegah overflow menimpa
   *  tombol sebelahnya — kotak size-8 tetap memaksa teks meluber). */
  autoWidth?: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={props.label}
      title={props.label}
      aria-pressed={props.active}
      disabled={props.disabled}
      onMouseDown={(event) => event.preventDefault()}
      onClick={props.onClick}
      className={cn(
        "grid h-8 shrink-0 place-items-center rounded-md text-slate-600 transition-colors",
        props.autoWidth ? "w-auto gap-1 px-2" : "w-8",
        "hover:bg-slate-100 hover:text-slate-900 disabled:opacity-35",
        props.active && "bg-brand/15 text-brand hover:bg-brand/20",
      )}
    >
      {props.children}
    </button>
  );
}

function Divider() {
  return <span aria-hidden="true" className="mx-1 h-5 w-px bg-slate-200" />;
}

function setLinkPrompt(editor: Editor) {
  const previous = editor.getAttributes("link").href as string | undefined;
  const url = window.prompt(
    "URL tautan (https://… atau #anchor dalam artikel):",
    previous ?? "https://",
  );
  if (url === null) return;
  const trimmed = url.trim();

  if (trimmed === "") {
    // Lepas tautan: bila kursor di dalam link, pilih dulu seluruh rentangnya.
    const clear = editor.chain().focus();
    if (editor.isActive("link")) clear.extendMarkRange("link");
    clear.unsetLink().run();
    return;
  }

  // Seleksi teks mentah -> buat link baru; kursor sudah di dalam link
  // -> extend rentang lama agar seluruh tautan ikut diperbarui.
  const chain = editor.chain().focus();
  if (editor.isActive("link")) chain.extendMarkRange("link");
  chain.setLink({ href: trimmed }).run();
}

export function TiptapEditor({ initialHTML, onChange }: TiptapEditorProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const slashRef = useRef<SlashState | null>(null);
  const editorRef = useRef<Editor | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [slash, setSlashUI] = useState<SlashState | null>(null);
  const [rail, setRail] = useState<{ x: number; y: number } | null>(null);
  const [inserter, setInserter] = useState(false);
  const [insQuery, setInsQuery] = useState("");
  const [typeMenu, setTypeMenu] = useState(false);
  const [focusedUI, setFocusedUI] = useState(false);
  const [showList, setShowList] = useState(false);
  const [showInspector, setShowInspector] = useState(false);
  const [device, setDevice] = useState<Device>("full");
  const [, setTick] = useState(0);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const topBarRef = useRef<HTMLDivElement | null>(null);
  /** Tinggi bilah atas (px) — dipakai offset sticky panel & clamp rail blok. */
  const topBarHRef = useRef(46);

  const setSlash = useCallback((value: SlashState | null) => {
    slashRef.current = value;
    setSlashUI(value);
  }, []);

  const blockCtx: BlockCtx = {
    openUpload: () => fileInputRef.current?.click(),
  };

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        heading: { levels: [2, 3, 4] },
        link: {
          openOnClick: false,
          autolink: true,
          linkOnPaste: true,
          protocols: ["http", "https", "mailto"],
        },
      }),
      Image.configure({
        resize: {
          enabled: true,
          directions: ["right", "left", "bottom-right", "bottom-left"],
          minWidth: 80,
          minHeight: 60,
        },
      }),
      Placeholder.configure({
        placeholder: ({ node }) =>
          node.type.name === "paragraph"
            ? "Ketik / untuk memilih blok"
            : "Tulis di sini…",
        showOnlyWhenEditable: true,
      }),
      TextAlign.configure({ types: ["heading", "paragraph", "image"] }),
      Table.configure({ resizable: true }),
      TableRow,
      TableHeader,
      TableCell,
      CharacterCount,
    ],
    content: initialHTML,
    onUpdate: ({ editor: instance }) => {
      onChange(instance.getHTML());
    },
    editorProps: {
      handleKeyDown: (_view, event) => {
        const current = slashRef.current;
        if (!current) return false;
        const items = filterBlocks(current.query);
        if (event.key === "Escape") {
          setSlash(null);
          return true;
        }
        if (event.key === "ArrowDown") {
          if (items.length === 0) return true;
          setSlash({ ...current, active: (current.active + 1) % items.length });
          return true;
        }
        if (event.key === "ArrowUp") {
          if (items.length === 0) return true;
          setSlash({
            ...current,
            active: (current.active - 1 + items.length) % items.length,
          });
          return true;
        }
        if (event.key === "Enter" || event.key === "Tab") {
          const item = items[current.active];
          const range = { from: current.from, to: current.to };
          setSlash(null);
          if (item && editorRef.current) {
            applyBlock(editorRef.current, item, blockCtx, range);
          }
          return true;
        }
        return false;
      },
    },
  });

  useEffect(() => {
    editorRef.current = editor;
  }, [editor]);

  // useEditorState v3 tidak re-validate snapshot setelah editor siap
  // (immediatelyRender:false) — pakai subscription manual + overlay state.
  useEffect(() => {
    if (!editor) return;

    const updateOverlays = () => {
      if (!editor.isFocused) {
        setRail(null);
        return;
      }
      try {
        const { state, view } = editor;
        const $from = state.selection.$from;
        const blockFrom =
          $from.depth === 0 ? state.selection.from : $from.before(1);
        const blockCoords = view.coordsAtPos(blockFrom);
        // Jangan tumpuk di bawah bilah atas yang sticky (88px header + bilah).
        const minRailY = 88 + topBarHRef.current + 6;
        setRail({
          x: blockCoords.left,
          y: Math.max(blockCoords.top, minRailY),
        });
      } catch {
        setRail(null);
      }
    };

    const updateSlash = () => {
      if (!editor.isFocused) {
        setSlash(null);
        return;
      }
      const { state, view } = editor;
      const sel = state.selection;
      if (!sel.empty) {
        setSlash(null);
        return;
      }
      const $from = sel.$from;
      if (
        !$from.parent.isTextblock ||
        $from.parent.type.name === "codeBlock"
      ) {
        setSlash(null);
        return;
      }
      const textBefore = $from.parent.textBetween(
        0,
        $from.parentOffset,
        "\n",
        "\uFFFC",
      );
      const match = /(?:^|\s)\/([^\s/]*)$/.exec(textBefore);
      if (!match) {
        setSlash(null);
        return;
      }
      const query = match[1];
      const from = $from.pos - query.length - 1;
      const to = $from.pos;
      const prev = slashRef.current;
      if (
        prev &&
        prev.query === query &&
        prev.from === from &&
        prev.to === to
      ) {
        return;
      }
      try {
        const coords = view.coordsAtPos(to);
        setSlash({
          query,
          from,
          to,
          active: 0,
          x: coords.left,
          y: coords.bottom + 8,
          hover: prev?.hover ?? false,
        });
      } catch {
        setSlash(null);
      }
    };

    const handleActivity = () => {
      syncImageSizes(editor);
      updateOverlays();
      updateSlash();
      setTypeMenu(false);
      setTick((tick) => tick + 1);
    };

    const handleFocus = () => {
      setFocusedUI(true);
      handleActivity();
    };

    const handleBlur = () => {
      setFocusedUI(false);
      setSlash(null);
      setRail(null);
      setTypeMenu(false);
    };

    const handleScroll = () => {
      updateOverlays();
      updateSlash();
    };

    editor.on("transaction", handleActivity);
    editor.on("update", handleActivity);
    editor.on("focus", handleFocus);
    editor.on("blur", handleBlur);
    window.addEventListener("scroll", handleScroll, true);
    handleActivity();
    return () => {
      editor.off("transaction", handleActivity);
      editor.off("update", handleActivity);
      editor.off("focus", handleFocus);
      editor.off("blur", handleBlur);
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, [editor, setSlash]);

  // Tinggi bilah atas -> var CSS di root (offset sticky panel kiri/kanan)
  // dan angka clamp rail blok, agar ikut berubah saat bilah wrap di layar sempit.
  useEffect(() => {
    const bar = topBarRef.current;
    const root = rootRef.current;
    if (!bar || !root) return;
    const apply = () => {
      topBarHRef.current = bar.offsetHeight;
      root.style.setProperty("--tb-h", `${bar.offsetHeight}px`);
    };
    apply();
    const observer = new ResizeObserver(apply);
    observer.observe(bar);
    return () => observer.disconnect();
  }, [editor]);

  const state = editor
    ? {
        undo: editor.can().undo(),
        redo: editor.can().redo(),
        paragraph:
          editor.isActive("paragraph") && !editor.isActive("heading"),
        h2: editor.isActive("heading", { level: 2 }),
        h3: editor.isActive("heading", { level: 3 }),
        h4: editor.isActive("heading", { level: 4 }),
        bold: editor.isActive("bold"),
        italic: editor.isActive("italic"),
        underline: editor.isActive("underline"),
        strike: editor.isActive("strike"),
        code: editor.isActive("code"),
        bulletList: editor.isActive("bulletList"),
        orderedList: editor.isActive("orderedList"),
        link: editor.isActive("link"),
        alignLeft: editor.isActive({ textAlign: "left" }),
        alignCenter: editor.isActive({ textAlign: "center" }),
        alignRight: editor.isActive({ textAlign: "right" }),
        isImage: editor.isActive("image"),
        imageWidth: editor.isActive("image")
          ? ((editor.getAttributes("image").width as number | null) ?? null)
          : null,
        table: editor.isActive("table"),
        chars: editor.storage.characterCount?.characters() ?? 0,
      }
    : null;

  const blockTypeLabel = state?.h2
    ? "Judul 2"
    : state?.h3
      ? "Judul 3"
      : state?.h4
        ? "Judul 4"
        : "Paragraf";

  const breadcrumbLabel = state && editor
    ? state.h2
      ? "Judul 2"
      : state.h3
        ? "Judul 3"
        : state.h4
          ? "Judul 4"
          : state.isImage
            ? "Gambar"
            : state.table
              ? "Tabel"
              : state.bulletList
                ? "Daftar butir"
                : state.orderedList
                  ? "Daftar bernomor"
                  : editor.isActive("blockquote")
                    ? "Kutipan"
                    : editor.isActive("codeBlock")
                      ? "Blok kode"
                      : editor.isActive("horizontalRule")
                        ? "Pemisah"
                        : "Paragraf"
    : "Dokumen";

  const deviceMaxWidth =
    device === "tablet" ? 834 : device === "phone" ? 390 : undefined;

  async function uploadFile(file: File) {
    if (!editor) return;
    setUploading(true);
    setUploadError(null);
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
      const pos = editor.state.selection.from;
      editor.chain().focus().setTextSelection(pos).setImage({ src: payload.url }).run();
    } catch (error) {
      setUploadError(
        error instanceof Error ? error.message : "Gagal mengunggah gambar.",
      );
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  }

  if (!editor || !state) {
    return (
      <div
        className="min-h-72 animate-pulse rounded-2xl border border-slate-200 bg-slate-50"
        aria-hidden="true"
      />
    );
  }

  const iconCls = "size-4";
  const slashItems = slash ? filterBlocks(slash.query) : [];

  const typeOptions: { label: string; active: boolean; run: () => void }[] = [
    {
      label: "Paragraf",
      active: state.paragraph,
      run: () => editor.chain().focus().setParagraph().run(),
    },
    {
      label: "Judul 2",
      active: state.h2,
      run: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
    },
    {
      label: "Judul 3",
      active: state.h3,
      run: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
    },
    {
      label: "Judul 4",
      active: state.h4,
      run: () => editor.chain().focus().toggleHeading({ level: 4 }).run(),
    },
  ];

  return (
    <div
      ref={rootRef}
      className={cn(
        // overflow-clip (bukan overflow-hidden): memotong sudut membulat
        // tanpa membuat scroll container — position:sticky panel tetap jalan.
        "relative flex flex-col overflow-clip rounded-2xl border border-slate-200 bg-white shadow-sm",
        focusedUI && "gutenberg-focus",
      )}
    >
      {/* Bilah atas tipis gaya Gutenberg — menempel di bawah header admin */}
      <div
        ref={topBarRef}
        className="sticky top-15 z-30 flex flex-wrap items-center gap-1 border-b border-slate-200 bg-white/95 px-2 py-1.5 backdrop-blur"
      >
        <TbBtn
          label="Tambah blok"
          active={inserter}
          onClick={() => {
            setInserter((open) => !open);
            setInsQuery("");
          }}
        >
          <Plus className={iconCls} />
        </TbBtn>
        {/* Jejak blok gaya breadcrumb Gutenberg */}
        <span
          aria-live="polite"
          className="mx-2 hidden min-w-0 truncate items-center text-xs text-slate-400 md:flex"
        >
          Dokumen
          <ChevronRight className="mx-0.5 size-3" />
          <span className="font-medium text-slate-500">{breadcrumbLabel}</span>
        </span>
        <span className="flex-1" />

        {/* Alat format blok — menetap di bilah atas, tak lagi mengambang */}
        <div
          role="toolbar"
          aria-label="Alat format"
          className="flex flex-wrap items-center gap-0.5"
        >
          {!state.isImage && !state.table ? (
            <>
              <div className="relative">
                <TbBtn
                  label="Jenis blok"
                  autoWidth
                  active={typeMenu}
                  onClick={() => setTypeMenu((open) => !open)}
                >
                  <span className="flex items-center gap-0.5 text-[12px] font-medium">
                    {blockTypeLabel}
                    <ChevronDown className="size-3" />
                  </span>
                </TbBtn>
                {typeMenu ? (
                  <div
                    role="menu"
                    aria-label="Jenis blok"
                    className="absolute right-0 top-full z-40 mt-1 w-36 rounded-lg border border-slate-200 bg-white p-1 shadow-lg"
                  >
                    {typeOptions.map((option) => (
                      <button
                        key={option.label}
                        type="button"
                        role="menuitem"
                        aria-pressed={option.active}
                        onMouseDown={(event) => event.preventDefault()}
                        onClick={() => {
                          setTypeMenu(false);
                          option.run();
                        }}
                        className={cn(
                          "block w-full rounded-md px-2.5 py-1.5 text-left text-sm hover:bg-slate-100",
                          option.active &&
                            "bg-brand/10 font-semibold text-brand",
                        )}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                ) : null}
              </div>
              <Divider />
              <TbBtn
                label="Tebal"
                active={state.bold}
                onClick={() => editor.chain().focus().toggleBold().run()}
              >
                <Bold className={iconCls} />
              </TbBtn>
              <TbBtn
                label="Miring"
                active={state.italic}
                onClick={() => editor.chain().focus().toggleItalic().run()}
              >
                <Italic className={iconCls} />
              </TbBtn>
              <TbBtn
                label="Garis bawah"
                active={state.underline}
                onClick={() =>
                  editor.chain().focus().toggleUnderline().run()
                }
              >
                <Underline className={iconCls} />
              </TbBtn>
              <TbBtn
                label="Coret"
                active={state.strike}
                onClick={() => editor.chain().focus().toggleStrike().run()}
              >
                <Strikethrough className={iconCls} />
              </TbBtn>
              <TbBtn
                label="Kode inline"
                active={state.code}
                onClick={() => editor.chain().focus().toggleCode().run()}
              >
                <Code className={iconCls} />
              </TbBtn>
              <Divider />
              <TbBtn
                label={state.link ? "Ubah tautan" : "Sisipkan tautan"}
                active={state.link}
                onClick={() => setLinkPrompt(editor)}
              >
                <Link2 className={iconCls} />
              </TbBtn>
              <TbBtn
                label="Lepas tautan"
                disabled={!state.link}
                onClick={() => editor.chain().focus().unsetLink().run()}
              >
                <Unlink className={iconCls} />
              </TbBtn>
              <Divider />
            </>
          ) : null}

          <TbBtn
            label="Rata kiri"
            active={state.alignLeft}
            onClick={() => editor.chain().focus().setTextAlign("left").run()}
          >
            <AlignLeft className={iconCls} />
          </TbBtn>
          <TbBtn
            label="Rata tengah"
            active={state.alignCenter}
            onClick={() =>
              editor.chain().focus().setTextAlign("center").run()
            }
          >
            <AlignCenter className={iconCls} />
          </TbBtn>
          <TbBtn
            label="Rata kanan"
            active={state.alignRight}
            onClick={() =>
              editor.chain().focus().setTextAlign("right").run()
            }
          >
            <AlignRight className={iconCls} />
          </TbBtn>

          {!state.isImage && !state.table ? (
            <>
              <Divider />
              <TbBtn
                label="Daftar butir"
                active={state.bulletList}
                onClick={() =>
                  editor.chain().focus().toggleBulletList().run()
                }
              >
                <List className={iconCls} />
              </TbBtn>
              <TbBtn
                label="Daftar bernomor"
                active={state.orderedList}
                onClick={() =>
                  editor.chain().focus().toggleOrderedList().run()
                }
              >
                <ListOrdered className={iconCls} />
              </TbBtn>
            </>
          ) : null}

          {state.isImage ? (
            <>
              <Divider />
              <TbBtn
                label="Lebar kecil (240px)"
                active={state.imageWidth === 240}
                onClick={() =>
                  setImageWidth(
                    editor,
                    state.imageWidth === 240 ? null : 240,
                  )
                }
              >
                <span className="text-[11px] font-semibold leading-none">
                  S
                </span>
              </TbBtn>
              <TbBtn
                label="Lebar sedang (400px)"
                active={state.imageWidth === 400}
                onClick={() =>
                  setImageWidth(
                    editor,
                    state.imageWidth === 400 ? null : 400,
                  )
                }
              >
                <span className="text-[11px] font-semibold leading-none">
                  M
                </span>
              </TbBtn>
              <TbBtn
                label="Lebar besar (640px)"
                active={state.imageWidth === 640}
                onClick={() =>
                  setImageWidth(
                    editor,
                    state.imageWidth === 640 ? null : 640,
                  )
                }
              >
                <span className="text-[11px] font-semibold leading-none">
                  L
                </span>
              </TbBtn>
              <TbBtn
                label="Lebar alami (100%)"
                active={state.imageWidth === null}
                onClick={() => setImageWidth(editor, null)}
              >
                <span className="text-[10px] font-semibold leading-none">
                  100%
                </span>
              </TbBtn>
              <Divider />
              <TbBtn
                label="Ganti URL gambar"
                onClick={() => replaceImageSrc(editor)}
              >
                <span className="text-[11px] font-semibold leading-none">
                  URL
                </span>
              </TbBtn>
              <TbBtn
                label="Unggah gambar"
                disabled={uploading}
                onClick={() => fileInputRef.current?.click()}
              >
                <Upload
                  className={cn(
                    iconCls,
                    uploading && "animate-pulse",
                  )}
                />
              </TbBtn>
              <TbBtn
                label="Teks alternatif"
                onClick={() => promptImageAlt(editor)}
              >
                <span className="text-[10px] font-semibold leading-none">
                  ALT
                </span>
              </TbBtn>
            </>
          ) : null}

          {state.table ? (
            <>
              <Divider />
              <TbBtn
                label="Tambah baris"
                onClick={() => editor.chain().focus().addRowAfter().run()}
              >
                <span className="text-[13px] font-semibold leading-none">
                  R+
                </span>
              </TbBtn>
              <TbBtn
                label="Tambah kolom"
                onClick={() =>
                  editor.chain().focus().addColumnAfter().run()
                }
              >
                <span className="text-[13px] font-semibold leading-none">
                  C+
                </span>
              </TbBtn>
              <TbBtn
                label="Hapus tabel"
                onClick={() => editor.chain().focus().deleteTable().run()}
              >
                <span className="text-[13px] font-semibold leading-none">
                  T−
                </span>
              </TbBtn>
            </>
          ) : null}
        </div>
        <Divider />

        {/* Pratinjau lebar kanvas */}
        <TbBtn
          label="Lebar penuh"
          active={device === "full"}
          onClick={() => setDevice("full")}
        >
          <Monitor className={iconCls} />
        </TbBtn>
        <TbBtn
          label="Pratinjau tablet"
          active={device === "tablet"}
          onClick={() => setDevice("tablet")}
        >
          <Tablet className={iconCls} />
        </TbBtn>
        <TbBtn
          label="Pratinjau ponsel"
          active={device === "phone"}
          onClick={() => setDevice("phone")}
        >
          <Smartphone className={iconCls} />
        </TbBtn>
        <Divider />
        <TbBtn
          label="Urungkan"
          disabled={!state.undo}
          onClick={() => editor.chain().focus().undo().run()}
        >
          <Undo2 className={iconCls} />
        </TbBtn>
        <TbBtn
          label="Ulangi"
          disabled={!state.redo}
          onClick={() => editor.chain().focus().redo().run()}
        >
          <Redo2 className={iconCls} />
        </TbBtn>

        {/* Panel penyisip blok */}
        {inserter ? (
          <div
            className="absolute left-2 top-full z-40 w-72 rounded-xl border border-slate-200 bg-white p-2 shadow-xl"
            onKeyDown={(event) => {
              if (event.key === "Escape") setInserter(false);
            }}
          >
            <input
              autoFocus
              value={insQuery}
              onChange={(event) => setInsQuery(event.target.value)}
              placeholder="Cari blok…"
              aria-label="Cari blok"
              className="mb-1.5 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm outline-none focus:border-brand"
            />
            <div
              role="listbox"
              aria-label="Daftar blok"
              className="max-h-64 overflow-y-auto"
            >
              {filterBlocks(insQuery).map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="option"
                    onMouseDown={(event) => event.preventDefault()}
                    onClick={() => {
                      setInserter(false);
                      setInsQuery("");
                      applyBlock(editor, item, blockCtx);
                    }}
                    className="flex w-full items-center gap-2.5 rounded-lg px-2 py-1.5 text-left hover:bg-slate-50"
                  >
                    <Icon className="size-4 shrink-0 text-slate-500" />
                    <span className="min-w-0">
                      <span className="block text-sm font-medium text-slate-800">
                        {item.label}
                      </span>
                      <span className="block text-[11px] text-slate-400">
                        {item.desc}
                      </span>
                    </span>
                  </button>
                );
              })}
              {filterBlocks(insQuery).length === 0 ? (
                <p className="px-2 py-3 text-center text-xs text-slate-400">
                  Blok tidak ditemukan
                </p>
              ) : null}
            </div>
          </div>
        ) : null}
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/png,image/jpeg,image/webp,image/avif,image/gif,image/svg+xml"
        className="hidden"
        onChange={(event) => {
          const file = event.target.files?.[0];
          if (file) void uploadFile(file);
        }}
      />

      {/* Badan: rail icon | panel kiri | kanvas | panel kanan | rail icon */}
      <div className="flex min-h-0 flex-1 items-stretch">
        {/* Rail kiri: toggle List View (minimize jadi icon) */}
        <div className="hidden shrink-0 border-r border-slate-200 bg-white md:flex">
          <div className="sticky top-[calc(5.5rem_+_var(--tb-h,46px))] flex w-11 shrink-0 flex-col items-center gap-1 self-start py-2">
            <TbBtn
              label="Daftar blok"
              active={showList}
              onClick={() => setShowList((open) => !open)}
            >
              {showList ? (
                <PanelLeftClose className={iconCls} />
              ) : (
                <PanelLeft className={iconCls} />
              )}
            </TbBtn>
          </div>
          {showList ? (
            <aside
              aria-label="Daftar blok"
              className="sticky top-[calc(5.5rem_+_var(--tb-h,46px))] max-h-[calc(100dvh_-_7rem)] w-56 shrink-0 self-start overflow-y-auto border-l border-slate-100"
            >
              <ListView editor={editor} />
            </aside>
          ) : null}
        </div>

        {/* Kanvas abu-abu dgn kartu halaman putih di tengah */}
        <div className="min-w-0 flex-1 bg-slate-100 p-4 sm:p-6">
          <div
            className="mx-auto flex min-h-[max(26rem,calc(100dvh-25rem))] flex-col rounded-md bg-white shadow-sm ring-1 ring-slate-200"
            style={deviceMaxWidth ? { maxWidth: deviceMaxWidth } : undefined}
          >
            <EditorContent
              editor={editor}
              className="tiptap flex min-h-0 flex-1 flex-col px-4 py-4 focus:outline-none sm:px-6 [&_.ProseMirror]:min-h-[22rem] [&_.ProseMirror]:flex-1 [&_.ProseMirror]:outline-none"
            />
          </div>
        </div>

        {/* Panel kanan + rail ikon (minimize jadi icon) */}
        <div className="hidden shrink-0 border-l border-slate-200 bg-white md:flex">
          {showInspector ? (
            <aside
              aria-label="Pengaturan blok"
              className="sticky top-[calc(5.5rem_+_var(--tb-h,46px))] max-h-[calc(100dvh_-_7rem)] w-64 shrink-0 self-start overflow-y-auto border-r border-slate-100"
            >
              <BlockInspector editor={editor} />
            </aside>
          ) : null}
          <div className="sticky top-[calc(5.5rem_+_var(--tb-h,46px))] flex w-11 shrink-0 flex-col items-center gap-1 self-start py-2">
            <TbBtn
              label="Pengaturan blok"
              active={showInspector}
              onClick={() => setShowInspector((open) => !open)}
            >
              {showInspector ? (
                <PanelRightClose className={iconCls} />
              ) : (
                <PanelRight className={iconCls} />
              )}
            </TbBtn>
          </div>
        </div>
      </div>

      {/* Footer: jejak blok + jumlah karakter/status unggah */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-slate-200 bg-slate-50/70 px-4 py-2 text-xs text-slate-500">
        <span className="flex min-w-0 items-center gap-1 truncate">
          <span className="hidden sm:inline">Dokumen</span>
          <ChevronRight className="hidden size-3 sm:inline" />
          <span className="truncate font-medium text-slate-600">
            {breadcrumbLabel}
          </span>
        </span>
        <span className="flex items-center gap-3">
          {uploadError ? (
            <span className="text-red-600">{uploadError}</span>
          ) : uploading ? (
            <span>Mengunggah gambar…</span>
          ) : null}
          <span>{state.chars.toLocaleString("id-ID")} karakter</span>
        </span>
      </div>

      {/* Menu slash command */}
      {slash && slashItems.length > 0 ? (
        <div
          role="listbox"
          aria-label="Menu blok"
          style={{
            left: Math.min(slash.x, (globalThis.innerWidth ?? 1024) - 276),
            top: Math.max(slash.y, 8),
          }}
          className="fixed z-50 max-h-72 w-64 overflow-y-auto rounded-xl border border-slate-200 bg-white py-1 shadow-xl"
        >
          {slashItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                type="button"
                role="option"
                aria-selected={index === slash.active}
                onMouseDown={(event) => event.preventDefault()}
                onMouseMove={() => {
                  if (!slash.hover) setSlash({ ...slash, hover: true });
                }}
                onMouseEnter={() => {
                  if (slash.hover) setSlash({ ...slash, active: index });
                }}
                onClick={() => {
                  const range = { from: slash.from, to: slash.to };
                  setSlash(null);
                  applyBlock(editor, item, blockCtx, range);
                }}
                className={cn(
                  "flex w-full items-center gap-2.5 px-3 py-1.5 text-left",
                  index === slash.active
                    ? "bg-brand/10"
                    : "hover:bg-slate-50",
                )}
              >
                <Icon className="size-4 shrink-0 text-slate-500" />
                <span className="min-w-0">
                  <span className="block text-sm font-medium text-slate-800">
                    {item.label}
                  </span>
                  <span className="block text-[11px] text-slate-400">
                    {item.desc}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      ) : null}

      {/* Rail blok: pindah urutan */}
      {focusedUI && rail ? (
        <div
          style={{ left: rail.x - 32, top: rail.y }}
          className="fixed z-30 hidden md:block"
        >
          <div className="flex flex-col items-center rounded-lg border border-slate-200 bg-white/95 p-0.5 shadow-sm">
            <span
              aria-hidden="true"
              className="grid size-6 cursor-grab place-items-center text-slate-400"
            >
              <GripVertical className="size-3.5" />
            </span>
            <TbBtn
              label="Pindahkan blok ke atas"
              onClick={() => moveBlock(editor, -1)}
            >
              <ArrowUp className="size-3.5" />
            </TbBtn>
            <TbBtn
              label="Pindahkan blok ke bawah"
              onClick={() => moveBlock(editor, 1)}
            >
              <ArrowDown className="size-3.5" />
            </TbBtn>
          </div>
        </div>
      ) : null}
    </div>
  );
}
