"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CreditCard,
  Gift,
  Layers,
  MessageCircle,
  Minus,
  Package,
  PlayCircle,
  Plus,
  Settings,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { ctaLinks } from "@/config/site";
import { cn } from "@/lib/utils";

/* =========================================================
 * FAQ CONTENT
 *
 * Hanya dipakai oleh section ini; data FAQ existing di
 * src/data/faq.ts tidak disentuh.
 * ======================================================= */

type Tone = "emerald" | "blue" | "violet" | "rose" | "orange";

type FaqItem = {
  question: string;
  answer: ReactNode;
  icon?: LucideIcon;
  tone?: Tone;
};

type ResolvedFaqItem = FaqItem & { icon: LucideIcon; tone: Tone };

/** Fallback icon/tone untuk item tanpa pasangan sendiri (halaman /faq, produk). */
const ICON_POOL: LucideIcon[] = [
  Package,
  CreditCard,
  Layers,
  Gift,
  Settings,
  BookOpen,
  ShieldCheck,
  PlayCircle,
  Users,
];

const TONE_POOL: Tone[] = ["emerald", "blue", "violet", "rose", "orange"];

const toneClasses: Record<Tone, string> = {
  emerald: "bg-emerald-50 text-emerald-600",
  blue: "bg-blue-50 text-blue-500",
  violet: "bg-violet-50 text-violet-500",
  rose: "bg-rose-50 text-rose-500",
  orange: "bg-orange-50 text-orange-500",
};

const FAQS: FaqItem[] = [
  {
    question: "Apa itu QRION?",
    icon: Package,
    tone: "emerald",
    answer:
      "QRION adalah ekosistem digital sekolah yang mengintegrasikan seluruh operasional sekolah dalam satu platform, mulai dari pembayaran, absensi, pembelajaran, manajemen keuangan, penerimaan siswa, hingga sistem kasir kantin.",
  },
  {
    question: "Berapa harga paket QRION?",
    icon: CreditCard,
    tone: "blue",
    answer: (
      <div className="space-y-3">
        <p>
          QRION tersedia dalam beberapa pilihan paket yang dapat disesuaikan
          dengan kebutuhan sekolah. Untuk informasi harga terbaru dan kebutuhan
          implementasi, silakan hubungi tim QRION.
        </p>
        <ul className="space-y-1.5">
          {[
            "Paket Ontuition + QRION Jurnal",
            "Paket Oncard + Ontime",
            "Paket Komplit (semua ekosistem)",
          ].map((packageName) => (
            <li key={packageName} className="flex items-start gap-2.5">
              <span
                aria-hidden="true"
                className="mt-[7px] size-1.5 shrink-0 rounded-full bg-blue-500"
              />
              <span>{packageName}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    question: "Apa saja yang termasuk dalam Paket Komplit?",
    icon: Layers,
    tone: "violet",
    answer:
      "Paket Komplit menggabungkan layanan utama QRION dalam satu ekosistem terintegrasi untuk operasional, akademik, pembayaran, komunikasi, dan kebutuhan administrasi sekolah.",
  },
  {
    question: "Apakah QRION SPMB benar-benar gratis?",
    icon: Gift,
    tone: "rose",
    answer:
      "QRION menyediakan solusi SPMB yang dapat digunakan sekolah untuk membantu proses penerimaan siswa baru. Detail program dan ketentuannya dapat dikonfirmasi kepada tim QRION.",
  },
  {
    question: "Berapa lama proses implementasi QRION?",
    icon: Settings,
    tone: "orange",
    answer:
      "Waktu implementasi menyesuaikan ukuran sekolah, kebutuhan modul, proses migrasi data, serta pelatihan tim sekolah.",
  },
  {
    question: "Apakah tersedia pelatihan untuk sekolah?",
    icon: BookOpen,
    tone: "emerald",
    answer:
      "Ya. Tim QRION dapat membantu proses onboarding dan pelatihan agar admin, guru, dan pihak sekolah dapat menggunakan sistem dengan nyaman.",
  },
  {
    question: "Apakah data sekolah aman di QRION?",
    icon: ShieldCheck,
    tone: "blue",
    answer:
      "QRION dirancang dengan perhatian terhadap keamanan dan pengelolaan data agar informasi sekolah dapat dikelola secara terstruktur dan terlindungi.",
  },
  {
    question: "Apakah bisa mencoba sistem terlebih dahulu?",
    icon: PlayCircle,
    tone: "rose",
    answer:
      "Ya. Sekolah dapat mencoba pengalaman QRION melalui demo atau live preview sebelum menentukan implementasi.",
  },
  {
    question: "Siapa saja yang bisa menggunakan QRION?",
    icon: Users,
    tone: "violet",
    answer:
      "QRION dirancang untuk kepala sekolah, admin, guru, orang tua, siswa, serta pihak lain yang terlibat dalam ekosistem operasional sekolah.",
  },
];

/* =========================================================
 * CONTACT CARD
 * ======================================================= */

const AVATARS = [
  { initials: "AR", className: "bg-emerald-100 text-emerald-700" },
  { initials: "RN", className: "bg-sky-100 text-sky-700" },
  { initials: "DI", className: "bg-violet-100 text-violet-700" },
] as const;

function ContactCard() {
  return (
    <div className="mt-8 w-full max-w-md rounded-[26px] border border-slate-200/70 bg-white/90 p-6 shadow-[0_18px_50px_rgba(48,46,89,0.08)] backdrop-blur-sm sm:p-7">
      <div className="flex items-center" aria-hidden="true">
        {AVATARS.map((avatar, index) => (
          <span
            key={avatar.initials}
            className={cn(
              "flex size-11 items-center justify-center rounded-full border-2 border-white text-[13px] font-semibold shadow-sm",
              avatar.className,
              index > 0 && "-ml-3",
            )}
          >
            {avatar.initials}
          </span>
        ))}
        <span className="-ml-3 flex size-11 items-center justify-center rounded-full border-2 border-white bg-brand-mint text-brand shadow-sm">
          <Plus className="size-5" />
        </span>
      </div>

      <h3 className="mt-5 text-lg font-bold text-slate-900">
        Masih ada pertanyaan?
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        Tim kami siap membantu Anda menemukan solusi terbaik untuk sekolah Anda.
      </p>

      <Link
        href={ctaLinks.contact}
        className="mt-5 inline-flex items-center gap-3 rounded-full bg-slate-950 py-3 pl-5 pr-4 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-offset-2"
      >
        <MessageCircle aria-hidden="true" className="size-4" />
        Hubungi tim kami
        <ArrowRight aria-hidden="true" className="ml-2 size-4" />
      </Link>
    </div>
  );
}

/* =========================================================
 * ACCORDION ITEM
 * ======================================================= */

function FaqAccordionItem({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: ResolvedFaqItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const prefersReducedMotion = useReducedMotion();
  const Icon = item.icon;
  const panelId = `faq-panel-${index}`;

  return (
    <div
      className={cn(
        "overflow-hidden rounded-[20px] border bg-white/85 backdrop-blur-sm transition-shadow duration-300",
        isOpen
          ? "border-slate-200 shadow-[0_12px_36px_rgba(48,46,89,0.07)]"
          : "border-slate-200/60 shadow-[0_2px_10px_rgba(48,46,89,0.03)] hover:shadow-[0_6px_20px_rgba(48,46,89,0.05)]",
      )}
    >
      <h3 className="m-0">
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={isOpen ? panelId : undefined}
          className="group flex w-full items-center gap-4 px-5 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-inset sm:px-6"
        >
          <span
            aria-hidden="true"
            className={cn(
              "flex size-10 shrink-0 items-center justify-center rounded-xl",
              toneClasses[item.tone],
            )}
          >
            <Icon className="size-5" />
          </span>
          <span className="flex-1 text-[15px] font-semibold leading-snug text-slate-900 sm:text-base">
            {item.question}
          </span>
          <span
            aria-hidden="true"
            className="flex size-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-colors duration-200 group-hover:bg-slate-200"
          >
            {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
          </span>
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            id={panelId}
            key="panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-1 sm:px-6">
              <div className="max-w-[58ch] pl-14 pr-2 text-[14.5px] leading-relaxed text-muted-foreground sm:pr-6">
                {item.answer}
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

/* =========================================================
 * SECTION
 * ======================================================= */

type FAQSectionProps = {
  /** Q&A custom per halaman; default = 9 Q&A landing page. */
  items?: readonly FaqItem[];
  background?: "default" | "soft";
};

export function FAQSection({
  items,
  background = "default",
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [imageFailed, setImageFailed] = useState(false);

  const list: ResolvedFaqItem[] = (items ?? FAQS).map((item, index) => ({
    ...item,
    icon: item.icon ?? ICON_POOL[index % ICON_POOL.length],
    tone: item.tone ?? TONE_POOL[index % TONE_POOL.length],
  }));

  return (
    <Section
      id="faq"
      aria-labelledby="faq-heading"
      background={background}
      className="relative overflow-hidden lg:min-h-[780px]"
    >
      {/* Soft mint / cyan glow — very subtle, never neon. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
      >
        <div className="absolute -top-32 right-[-8%] size-[460px] rounded-full bg-brand-mint/70 blur-3xl" />
        <div className="absolute bottom-[-25%] right-[18%] size-[380px] rounded-full bg-cyan-100/40 blur-3xl" />
      </div>

      {/* School photo, bottom-left, faded into the white canvas. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 z-0 hidden h-[58%] w-[46%] overflow-hidden lg:block"
      >
        {imageFailed ? (
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-soft via-brand-mint to-transparent" />
        ) : (
          <Image
            src="/images/faq-school.jpg"
            alt=""
            fill
            sizes="46vw"
            className="object-cover object-bottom"
            onError={() => setImageFailed(true)}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/25 to-white" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-white" />
      </div>

      <div className="relative z-10 grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] lg:gap-16 xl:gap-20">
        {/* ---- Left: heading + contact card ---- */}
        <div>
          <Reveal>
            <span className="inline-flex items-center rounded-full bg-brand-mint px-4 py-1.5 text-[13px] font-semibold text-brand-dark">
              FAQ
            </span>

            <h2
              id="faq-heading"
              className="mt-5 text-[38px] font-bold leading-[1.08] tracking-tight text-slate-900 sm:text-[46px] lg:text-[54px] xl:text-[60px]"
            >
              Pertanyaan
              <br />
              yang <span className="text-brand">Sering</span>
              <br />
              <span className="text-brand-green">Ditanyakan</span>
            </h2>

            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted-foreground sm:text-base">
              Temukan jawaban cepat untuk pertanyaan umum seputar produk, harga,
              implementasi, dan penggunaan QRION.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <ContactCard />
          </Reveal>
        </div>

        {/* ---- Right: accordion ---- */}
        <Reveal delay={0.1}>
          <div className="flex flex-col gap-2.5 sm:gap-3">
            {list.map((item, index) => (
              <FaqAccordionItem
                key={item.question}
                item={item}
                index={index}
                isOpen={openIndex === index}
                onToggle={() =>
                  setOpenIndex((current) =>
                    current === index ? null : index,
                  )
                }
              />
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
