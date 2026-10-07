import {
  ArrowLeftRight,
  Building2,
  CreditCard,
  HelpCircle,
  LayoutGrid,
  Monitor,
  Newspaper,
  Package,
  PanelBottom,
  Quote,
  Rocket,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";

import { deepMerge, getPath, setPath, type PlainObject } from "@/lib/admin/merge";

/* ---------------------------------------------------------------
 * Tipe field editor
 * ------------------------------------------------------------- */

export type AdminField =
  | { type: "text"; key: string; label: string; hint?: string }
  | { type: "textarea"; key: string; label: string; rows?: number; hint?: string }
  | { type: "number"; key: string; label: string; hint?: string }
  | {
      type: "image";
      key: string;
      label: string;
      recommended: string | ((item: Record<string, unknown>) => string);
      hint?: string;
    }
  | { type: "faqAnswer"; key: string; label: string }
  | { type: "group"; label: string; fields: AdminField[] }
  | {
      type: "list";
      key: string;
      label: string;
      addable: boolean;
      addLabel?: string;
      itemLabel: (item: Record<string, unknown>, index: number) => string;
      itemKind?: "text";
      itemFields?: AdminField[];
    };

export type AdminSection = {
  slug: string;
  /** Dot path root konten di pohon content.json (mis. "home.hero"). */
  path: string;
  title: string;
  description: string;
  icon: LucideIcon;
  /** Kelas warna ikon kartu bento (bg/text). */
  accent: string;
  fields: AdminField[];
};

/* ---------------------------------------------------------------
 * Daftar section
 * ------------------------------------------------------------- */

const slideDims = (item: Record<string, unknown>): string => {
  const width = Number(item.width);
  const height = Number(item.height);
  return width > 0 && height > 0
    ? `${width} × ${height} px (sesuaikan rasio agar tidak melar)`
    : "sesuaikan rasio asli gambar";
};

const slideIconDims = (item: Record<string, unknown>): string => {
  const width = Number(item.iconWidth);
  const height = Number(item.iconHeight);
  return width > 0 && height > 0
    ? `${width} × ${height} px`
    : "sesuaikan rasio logo asli";
};

export const ADMIN_SECTIONS: AdminSection[] = [
  {
    slug: "hero",
    path: "home.hero",
    title: "Hero",
    description:
      "Judul utama, deskripsi, tombol CTA, dan gambar dashboard hero.",
    icon: Rocket,
    accent: "bg-emerald-100 text-emerald-600",
    fields: [
      { type: "text", key: "eyebrow", label: "Eyebrow (teks kecil di atas)" },
      { type: "text", key: "headline", label: "Baris judul 1" },
      { type: "text", key: "headline2", label: "Baris judul 2" },
      {
        type: "text",
        key: "highlight",
        label: "Kalimat highlight (warna brand)",
      },
      {
        type: "textarea",
        key: "description",
        label: "Deskripsi",
        rows: 4,
      },
      {
        type: "group",
        label: "Tombol utama",
        fields: [
          { type: "text", key: "primaryCta.label", label: "Label tombol" },
          { type: "text", key: "primaryCta.href", label: "Tautan tujuan" },
        ],
      },
      {
        type: "group",
        label: "Tombol kedua",
        fields: [
          { type: "text", key: "secondaryCta.label", label: "Label tombol" },
          { type: "text", key: "secondaryCta.href", label: "Tautan tujuan" },
        ],
      },
      {
        type: "image",
        key: "dashboardImage",
        label: "Gambar dashboard hero",
        recommended: "1672 × 941 px (rasio ±16:9) — disarankan PNG",
        hint: "Satu-satunya gambar yang bisa dikustom di hero (latar/awan tidak).",
      },
    ],
  },
  {
    slug: "perbandingan",
    path: "comparison",
    title: "Perbandingan",
    description:
      "Section Sebelum vs Dengan QRION: judul, kartu, foto, dan widget dashboard.",
    icon: ArrowLeftRight,
    accent: "bg-sky-100 text-sky-600",
    fields: [
      {
        type: "group",
        label: "Judul section",
        fields: [
          {
            type: "text",
            key: "comparisonHeading.eyebrow",
            label: "Eyebrow",
          },
          {
            type: "text",
            key: "comparisonHeading.titleBefore",
            label: "Judul (sebelum highlight)",
          },
          {
            type: "text",
            key: "comparisonHeading.titleHighlight",
            label: "Judul (highlight)",
          },
          {
            type: "text",
            key: "comparisonHeading.titleAfter",
            label: "Judul (sesudah highlight)",
          },
          {
            type: "textarea",
            key: "comparisonHeading.description",
            label: "Deskripsi",
            rows: 3,
          },
        ],
      },
      {
        type: "group",
        label: 'Kartu "Sebelum QRION"',
        fields: [
          { type: "text", key: "beforeCard.badge", label: "Badge" },
          { type: "text", key: "beforeCard.titleBefore", label: "Judul baris 1" },
          { type: "text", key: "beforeCard.titleAfter", label: "Judul baris 2" },
          {
            type: "textarea",
            key: "beforeCard.description",
            label: "Deskripsi",
            rows: 3,
          },
        ],
      },
      {
        type: "list",
        key: "painPoints",
        label: "Daftar masalah (kartu Sebelum)",
        addable: true,
        addLabel: "Tambah masalah",
        itemKind: "text",
        itemLabel: (item, index) => String(item ?? `Masalah ${index + 1}`),
      },
      {
        type: "list",
        key: "fileBadges",
        label: "Label file melayang di atas foto",
        addable: false,
        itemLabel: (item, index) => String(item.label ?? `Badge ${index + 1}`),
        itemFields: [{ type: "text", key: "label", label: "Teks label" }],
      },
      {
        type: "group",
        label: 'Kartu "Dengan QRION"',
        fields: [
          { type: "text", key: "afterCard.badge", label: "Badge" },
          { type: "text", key: "afterCard.titleBefore", label: "Judul baris 1" },
          { type: "text", key: "afterCard.titleAfter", label: "Judul baris 2" },
          {
            type: "textarea",
            key: "afterCard.description",
            label: "Deskripsi",
            rows: 3,
          },
        ],
      },
      {
        type: "list",
        key: "modules",
        label: "Chip modul di kartu Dengan QRION",
        addable: false,
        itemLabel: (item, index) => String(item.label ?? `Modul ${index + 1}`),
        itemFields: [{ type: "text", key: "label", label: "Nama modul" }],
      },
      {
        type: "list",
        key: "features",
        label: "Fitur bawah (4 kolom)",
        addable: false,
        itemLabel: (item, index) => String(item.title ?? `Fitur ${index + 1}`),
        itemFields: [
          { type: "text", key: "title", label: "Judul fitur" },
          { type: "textarea", key: "description", label: "Deskripsi", rows: 3 },
        ],
      },
      {
        type: "image",
        key: "images.before",
        label: 'Foto kartu "Sebelum"',
        recommended: "1920 × 1080 px (rasio 16:9)",
      },
      {
        type: "image",
        key: "images.after",
        label: 'Foto kartu "Dengan QRION"',
        recommended: "1920 × 1080 px (rasio 16:9)",
      },
      {
        type: "group",
        label: "Widget: Pembayaran SPP",
        fields: [
          { type: "text", key: "comparisonWidgets.paid.title", label: "Judul" },
          { type: "text", key: "comparisonWidgets.paid.percent", label: "Persen" },
          {
            type: "text",
            key: "comparisonWidgets.paid.caption",
            label: "Keterangan",
          },
          {
            type: "list",
            key: "comparisonWidgets.paid.legend",
            label: "Baris legenda",
            addable: false,
            itemLabel: (item, index) =>
              String(item.label ?? `Legenda ${index + 1}`),
            itemFields: [
              { type: "text", key: "label", label: "Label" },
              { type: "text", key: "value", label: "Nilai" },
            ],
          },
        ],
      },
      {
        type: "group",
        label: "Widget: Kehadiran",
        fields: [
          {
            type: "text",
            key: "comparisonWidgets.attendance.title",
            label: "Judul",
          },
          {
            type: "text",
            key: "comparisonWidgets.attendance.present",
            label: "Nilai kehadiran",
          },
          {
            type: "text",
            key: "comparisonWidgets.attendance.delta",
            label: "Delta",
          },
        ],
      },
      {
        type: "group",
        label: "Widget: Penerimaan siswa",
        fields: [
          {
            type: "text",
            key: "comparisonWidgets.admission.title",
            label: "Judul",
          },
          { type: "text", key: "comparisonWidgets.admission.count", label: "Jumlah" },
          {
            type: "text",
            key: "comparisonWidgets.admission.captionA",
            label: "Keterangan baris 1",
          },
          {
            type: "text",
            key: "comparisonWidgets.admission.captionB",
            label: "Keterangan baris 2",
          },
        ],
      },
      {
        type: "group",
        label: "Widget: Keuangan",
        fields: [
          {
            type: "text",
            key: "comparisonWidgets.finance.title",
            label: "Judul",
          },
          {
            type: "text",
            key: "comparisonWidgets.finance.amount",
            label: "Nominal",
          },
          {
            type: "text",
            key: "comparisonWidgets.finance.delta",
            label: "Delta",
          },
        ],
      },
    ],
  },
  {
    slug: "onboard",
    path: "onboard",
    title: "Onboard",
    description:
      "Teks section latar dashboard, CTA, gambar latar bleed, dan 3 kartu fitur.",
    icon: Monitor,
    accent: "bg-violet-100 text-violet-600",
    fields: [
      {
        type: "group",
        label: "Teks section",
        fields: [
          { type: "text", key: "onboard.eyebrow", label: "Eyebrow" },
          { type: "text", key: "onboard.titleBefore", label: "Judul baris 1" },
          { type: "text", key: "onboard.titleHighlight", label: "Judul highlight" },
          {
            type: "textarea",
            key: "onboard.description",
            label: "Deskripsi",
            rows: 4,
          },
          { type: "text", key: "onboard.callout", label: "Callout" },
        ],
      },
      {
        type: "group",
        label: "Tombol CTA",
        fields: [
          { type: "text", key: "onboard.cta.label", label: "Label tombol" },
          { type: "text", key: "onboard.cta.href", label: "Tautan tujuan" },
        ],
      },
      {
        type: "image",
        key: "onboard.image",
        label: "Gambar latar (bleed)",
        recommended: "1920 × 1080 px (rasio 16:9)",
      },
      {
        type: "list",
        key: "onboardCards",
        label: "Kartu fitur bawah",
        addable: false,
        itemLabel: (item, index) => String(item.title ?? `Kartu ${index + 1}`),
        itemFields: [
          { type: "text", key: "title", label: "Judul kartu" },
          { type: "textarea", key: "description", label: "Deskripsi", rows: 3 },
        ],
      },
    ],
  },
  {
    slug: "ekosistem",
    path: "ecosystem",
    title: "Ekosistem",
    description: "Header section + kartu bento (gambar, judul, deskripsi).",
    icon: LayoutGrid,
    accent: "bg-amber-100 text-amber-600",
    fields: [
      {
        type: "group",
        label: "Header",
        fields: [
          { type: "text", key: "ecosystemHeader.eyebrow", label: "Eyebrow" },
          {
            type: "text",
            key: "ecosystemHeader.titleBefore",
            label: "Judul (sebelum highlight)",
          },
          {
            type: "text",
            key: "ecosystemHeader.titleHighlight",
            label: "Judul (highlight)",
          },
          {
            type: "textarea",
            key: "ecosystemHeader.description",
            label: "Deskripsi",
            rows: 3,
          },
          {
            type: "text",
            key: "ecosystemHeader.cta.label",
            label: "Label tombol CTA",
          },
          {
            type: "text",
            key: "ecosystemHeader.cta.href",
            label: "Tautan tombol CTA",
          },
        ],
      },
      {
        type: "list",
        key: "bentoCards",
        label: "Kartu bento",
        addable: false,
        itemLabel: (item, index) => String(item.title ?? `Kartu ${index + 1}`),
        itemFields: [
          { type: "text", key: "title", label: "Judul kartu" },
          { type: "textarea", key: "description", label: "Deskripsi", rows: 3 },
          {
            type: "image",
            key: "image",
            label: "Gambar kartu",
            recommended: "2000 × 2000 px (persegi)",
          },
          { type: "text", key: "alt", label: "Teks alt gambar (aksesibilitas)" },
        ],
      },
    ],
  },
  {
    slug: "produk",
    path: "showcase",
    title: "Produk",
    description:
      "Header section Produk + 7 slide showcase (judul, gambar, logo, tautan).",
    icon: Package,
    accent: "bg-rose-100 text-rose-600",
    fields: [
      {
        type: "group",
        label: "Header",
        fields: [
          { type: "text", key: "productsHeader.eyebrow", label: "Eyebrow" },
          { type: "text", key: "productsHeader.title", label: "Judul" },
          {
            type: "textarea",
            key: "productsHeader.description",
            label: "Deskripsi",
            rows: 3,
          },
        ],
      },
      {
        type: "list",
        key: "slides",
        label: "Slide produk",
        addable: false,
        itemLabel: (item, index) => String(item.label ?? `Slide ${index + 1}`),
        itemFields: [
          { type: "text", key: "label", label: "Nama tab (label)" },
          { type: "text", key: "heading", label: "Judul besar" },
          {
            type: "image",
            key: "image",
            label: "Gambar dashboard",
            recommended: slideDims,
          },
          { type: "number", key: "width", label: "Lebar gambar (px)" },
          { type: "number", key: "height", label: "Tinggi gambar (px)" },
          {
            type: "image",
            key: "icon",
            label: "Logo label produk",
            recommended: slideIconDims,
          },
          { type: "number", key: "iconWidth", label: "Lebar logo (px)" },
          { type: "number", key: "iconHeight", label: "Tinggi logo (px)" },
          { type: "text", key: "href", label: "Tautan detail" },
          { type: "text", key: "linkLabel", label: "Label tombol" },
        ],
      },
    ],
  },
  {
    slug: "peran",
    path: "home",
    title: "Peran",
    description:
      "Header use case + 5 kartu peran: teks, foto, highlight, sub-highlight.",
    icon: Users,
    accent: "bg-teal-100 text-teal-600",
    fields: [
      {
        type: "group",
        label: "Header",
        fields: [
          { type: "text", key: "rolesHeader.eyebrow", label: "Eyebrow" },
          { type: "text", key: "rolesHeader.title", label: "Judul" },
        ],
      },
      {
        type: "list",
        key: "roles",
        label: "Kartu peran",
        addable: false,
        itemLabel: (item, index) => String(item.title ?? `Peran ${index + 1}`),
        itemFields: [
          { type: "text", key: "title", label: "Nama peran" },
          { type: "textarea", key: "description", label: "Deskripsi", rows: 3 },
          {
            type: "group",
            label: "Kartu foto",
            fields: [
              {
                type: "image",
                key: "visual.image",
                label: "Foto peran",
                recommended: "1122 × 1402 px (potret 4:5)",
              },
              {
                type: "text",
                key: "visual.highlight",
                label: "Highlight (teks besar)",
              },
              {
                type: "text",
                key: "visual.subHighlight",
                label: "Sub-highlight",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "testimoni",
    path: "testimonials",
    title: "Testimoni",
    description: "Header section + daftar testimoni mitra (quote, nama, foto).",
    icon: Quote,
    accent: "bg-indigo-100 text-indigo-600",
    fields: [
      {
        type: "group",
        label: "Header",
        fields: [
          { type: "text", key: "testimonialHeader.eyebrow", label: "Eyebrow" },
          { type: "text", key: "testimonialHeader.title", label: "Judul" },
          {
            type: "textarea",
            key: "testimonialHeader.description",
            label: "Deskripsi",
            rows: 3,
          },
        ],
      },
      {
        type: "list",
        key: "testimonials",
        label: "Daftar testimoni",
        addable: true,
        addLabel: "Tambah testimoni",
        itemLabel: (item, index) => String(item.name ?? `Testimoni ${index + 1}`),
        itemFields: [
          { type: "textarea", key: "quote", label: "Kutipan", rows: 5 },
          { type: "text", key: "name", label: "Nama" },
          { type: "text", key: "role", label: "Jabatan / instansi" },
          {
            type: "image",
            key: "photo",
            label: "Foto",
            recommended: "Foto persegi — disarankan ≥400 × 400 px",
          },
        ],
      },
    ],
  },
  {
    slug: "harga",
    path: "pricing",
    title: "Paket Harga",
    description:
      "Header, 3 paket (harga, fitur, CTA), daftar kepercayaan, dan kartu callout.",
    icon: CreditCard,
    accent: "bg-cyan-100 text-cyan-600",
    fields: [
      {
        type: "group",
        label: "Header",
        fields: [
          { type: "text", key: "pricingHeader.eyebrow", label: "Eyebrow" },
          {
            type: "text",
            key: "pricingHeader.titleBefore",
            label: "Judul (sebelum dash)",
          },
          {
            type: "text",
            key: "pricingHeader.titleAfter",
            label: "Judul (sesudah dash)",
          },
          {
            type: "textarea",
            key: "pricingHeader.description",
            label: "Deskripsi",
            rows: 3,
          },
        ],
      },
      {
        type: "list",
        key: "pricingPlans",
        label: "Paket langganan",
        addable: false,
        itemLabel: (item, index) => String(item.name ?? `Paket ${index + 1}`),
        itemFields: [
          { type: "text", key: "badge", label: "Badge (opsional, mis. Populer)" },
          { type: "text", key: "name", label: "Nama paket" },
          { type: "textarea", key: "description", label: "Deskripsi", rows: 3 },
          { type: "text", key: "price", label: "Harga (mis. Rp500.000)" },
          { type: "text", key: "period", label: "Periode (mis. /bulan)" },
          {
            type: "list",
            key: "features",
            label: "Fitur paket",
            addable: true,
            addLabel: "Tambah fitur",
            itemKind: "text",
            itemLabel: (item, index) =>
              String(item ?? `Fitur ${index + 1}`),
          },
          {
            type: "group",
            label: "Tombol CTA",
            fields: [
              { type: "text", key: "cta.label", label: "Label tombol" },
              { type: "text", key: "cta.href", label: "Tautan tujuan" },
            ],
          },
        ],
      },
      {
        type: "list",
        key: "pricingTrust",
        label: "Baris kepercayaan (di bawah paket)",
        addable: false,
        itemLabel: (item, index) => String(item.label ?? `Item ${index + 1}`),
        itemFields: [{ type: "text", key: "label", label: "Teks" }],
      },
      {
        type: "group",
        label: "Kartu callout",
        fields: [
          { type: "text", key: "pricingCallout.title", label: "Judul" },
          {
            type: "textarea",
            key: "pricingCallout.description",
            label: "Deskripsi",
            rows: 3,
          },
          {
            type: "text",
            key: "pricingCallout.cta.label",
            label: "Label tombol",
          },
          {
            type: "text",
            key: "pricingCallout.cta.href",
            label: "Tautan tombol",
          },
          {
            type: "image",
            key: "pricingCallout.image",
            label: "Latar gambar callout",
            recommended: "1920 × 1080 px (rasio 16:9)",
          },
        ],
      },
    ],
  },
  {
    slug: "wawasan",
    path: "home",
    title: "Wawasan",
    description: "Header section Wawasan & Artikel (artikel dikelola terpisah).",
    icon: Newspaper,
    accent: "bg-lime-100 text-lime-700",
    fields: [
      {
        type: "group",
        label: "Header",
        fields: [
          { type: "text", key: "insightHeader.eyebrow", label: "Eyebrow" },
          { type: "text", key: "insightHeader.title", label: "Judul" },
          {
            type: "textarea",
            key: "insightHeader.description",
            label: "Deskripsi",
            rows: 3,
          },
        ],
      },
    ],
  },
  {
    slug: "kepercayaan",
    path: "home",
    title: "Kepercayaan",
    description: "Header section Kepercayaan (di atas logo mitra berjalan).",
    icon: ShieldCheck,
    accent: "bg-emerald-100 text-emerald-700",
    fields: [
      {
        type: "group",
        label: "Header",
        fields: [
          { type: "text", key: "trust.eyebrow", label: "Eyebrow" },
          { type: "text", key: "trust.title", label: "Judul" },
          {
            type: "textarea",
            key: "trust.description",
            label: "Deskripsi",
            rows: 3,
          },
        ],
      },
    ],
  },
  {
    slug: "mitra",
    path: "mitra",
    title: "Mitra",
    description: "Logo sekolah/mitra yang berjalan di section Kepercayaan.",
    icon: Building2,
    accent: "bg-orange-100 text-orange-600",
    fields: [
      {
        type: "list",
        key: "mitraData",
        label: "Daftar mitra",
        addable: true,
        addLabel: "Tambah mitra",
        itemLabel: (item, index) => String(item.name ?? `Mitra ${index + 1}`),
        itemFields: [
          { type: "text", key: "name", label: "Nama mitra" },
          {
            type: "image",
            key: "img",
            label: "Logo mitra",
            recommended:
              "Logo persegi — disarankan ≥200 × 200 px (PNG/JPG, transparan lebih baik)",
          },
        ],
      },
    ],
  },
  {
    slug: "faq",
    path: "faq",
    title: "FAQ",
    description:
      "Header, kartu kontak, foto latar, dan 9 pertanyaan + jawaban.",
    icon: HelpCircle,
    accent: "bg-blue-100 text-blue-600",
    fields: [
      {
        type: "group",
        label: "Header",
        fields: [
          { type: "text", key: "faqHeader.pill", label: "Pill (mis. FAQ)" },
          { type: "text", key: "faqHeader.line1", label: "Baris 1" },
          { type: "text", key: "faqHeader.line2Before", label: "Baris 2 (sebelum)" },
          {
            type: "text",
            key: "faqHeader.line2Highlight",
            label: "Baris 2 (highlight)",
          },
          { type: "text", key: "faqHeader.line3", label: "Baris 3" },
          {
            type: "textarea",
            key: "faqHeader.description",
            label: "Deskripsi",
            rows: 3,
          },
        ],
      },
      {
        type: "group",
        label: "Kartu kontak",
        fields: [
          { type: "text", key: "faqContact.title", label: "Judul" },
          {
            type: "textarea",
            key: "faqContact.description",
            label: "Deskripsi",
            rows: 3,
          },
          { type: "text", key: "faqContact.ctaLabel", label: "Label tombol" },
        ],
      },
      {
        type: "image",
        key: "faqImage",
        label: "Foto sekolah (latar kiri-bawah)",
        recommended: "1920 × 1080 px (rasio 16:9)",
        hint: "Bila kosong/gagal, tampil gradasi brand sebagai fallback.",
      },
      {
        type: "list",
        key: "homeFaq",
        label: "Pertanyaan & jawaban",
        addable: true,
        addLabel: "Tambah pertanyaan",
        itemLabel: (item, index) =>
          String(item.question ?? `Pertanyaan ${index + 1}`),
        itemFields: [
          { type: "text", key: "question", label: "Pertanyaan" },
          { type: "faqAnswer", key: "answer", label: "Jawaban" },
        ],
      },
    ],
  },
  {
    slug: "cta-footer",
    path: "home",
    title: "CTA Footer",
    description: "Blok ajakan bertindak (CTA) di bagian atas footer.",
    icon: PanelBottom,
    accent: "bg-purple-100 text-purple-600",
    fields: [
      {
        type: "group",
        label: "CTA footer",
        fields: [
          { type: "text", key: "finalCta.title", label: "Judul" },
          {
            type: "textarea",
            key: "finalCta.description",
            label: "Deskripsi",
            rows: 3,
          },
          {
            type: "text",
            key: "finalCta.primaryCta.label",
            label: "Label tombol 1",
          },
          {
            type: "text",
            key: "finalCta.primaryCta.href",
            label: "Tautan tombol 1",
          },
          {
            type: "text",
            key: "finalCta.secondaryCta.label",
            label: "Label tombol 2",
          },
          {
            type: "text",
            key: "finalCta.secondaryCta.href",
            label: "Tautan tombol 2",
          },
        ],
      },
    ],
  },
];

export function getAdminSection(slug: string): AdminSection | undefined {
  return ADMIN_SECTIONS.find((section) => section.slug === slug);
}

export function countFields(fields: AdminField[]): number {
  let total = 0;
  for (const field of fields) {
    if (field.type === "group") total += countFields(field.fields);
    else if (field.type === "list") {
      total += field.itemKind === "text" ? 1 : countFields(field.itemFields ?? []);
    } else total += 1;
  }
  return total;
}

/* ---------------------------------------------------------------
 * Ambil nilai form dari konten ter-merge
 * ------------------------------------------------------------- */

function pickOne(
  root: unknown,
  field: AdminField,
): unknown {
  switch (field.type) {
    case "list": {
      const raw = getPath(root, field.key);
      const list = Array.isArray(raw) ? raw : [];
      if (field.itemKind === "text") {
        return list.map((item) => String(item ?? ""));
      }
      return list.map((item) => pickValues(item, field.itemFields ?? []));
    }
    case "group":
      // group bersifat UI-only; nilai diambil per field anak
      return null;
    default: {
      const value = getPath(root, field.key);
      if (value === undefined || value === null) {
        return field.type === "faqAnswer" ? "" : "";
      }
      if (field.type === "number") return Number(value) || 0;
      return value;
    }
  }
}

/** Bangun model nilai form (nested) dari root konten ter-merge. */
export function pickValues(
  root: unknown,
  fields: AdminField[],
): PlainObject {
  let out: PlainObject = {};
  for (const field of fields) {
    if (field.type === "group") {
      out = mergeInto(out, pickValues(root, field.fields));
      continue;
    }
    if (field.type === "text" || field.type === "textarea") {
      out = setPath(out, field.key, pickOne(root, field));
      continue;
    }
    if (field.type === "image") {
      out = setPath(out, field.key, String(pickOne(root, field) ?? ""));
      continue;
    }
    if (field.type === "number") {
      out = setPath(out, field.key, pickOne(root, field));
      continue;
    }
    if (field.type === "faqAnswer") {
      out = setPath(out, field.key, pickOne(root, field));
      continue;
    }
    if (field.type === "list") {
      out = setPath(out, field.key, pickOne(root, field));
    }
  }
  return out;
}

/** Gabung objek dalam (untuk merge hasil group yang flat).
 *  WAJIB deep: dua group ber-prefix sama (mis. "onboard.eyebrow" lalu
 *  "onboard.cta") tidak boleh saling menimpa subtree-nya. */
function mergeInto(base: PlainObject, extra: PlainObject): PlainObject {
  let out = base;
  for (const [key, value] of Object.entries(extra)) {
    out = setPath(out, key, deepMerge(getPath(out, key), value));
  }
  return out;
}
