import Link from "next/link";
import { ArrowDown, ArrowRight, Check, Layers } from "lucide-react";

import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Reveal } from "@/components/motion/reveal";
import {
  BenefitCard,
  FeatureCard,
  ProblemCard,
  RoleCard,
} from "@/components/sections/cards";
import type { Product } from "@/data/products";
import {
  benefits as benefitIcons,
  problems as problemIcons,
  roles as roleIcons,
} from "@/data/home";
import { cn } from "@/lib/utils";

/**
 * Icons for repeating card grids come from the shared homepage icon sets, so a
 * row of cards never shows the same glyph several times while the copy stays
 * product-specific.
 */
function iconByIndex(set: { icon: (typeof problemIcons)[number]["icon"] }[], index: number) {
  return set[index % set.length].icon;
}

function iconByRoleTitle(title: string) {
  return (
    roleIcons.find((role) => role.title === title)?.icon ?? roleIcons[0].icon
  );
}

/** Section 2 — product overview. */
export function ProductOverview({ product }: { product: Product }) {
  return (
    <Section id="ringkasan" background="soft" aria-labelledby="ringkasan-heading">
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <SectionHeader
          eyebrow="Ringkasan"
          title={<span id="ringkasan-heading">{product.tagline}</span>}
          description={product.description}
          align="left"
        />

        <div className="grid gap-3">
          {product.cardBenefits.slice(0, 5).map((benefit, index) => (
            <Reveal key={benefit} delay={index * 0.05}>
              <div className="flex items-start gap-3 rounded-xl border border-border bg-background p-4">
                <Check
                  aria-hidden="true"
                  className={cn("mt-0.5 size-4 shrink-0", product.accent.icon)}
                />
                <p className="text-[15px] leading-relaxed text-foreground/85">
                  {benefit}
                </p>
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.28}>
            <div className="flex flex-col gap-3 rounded-xl border border-primary/15 bg-primary/5 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-3">
                <Layers aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-brand" />
                <p className="text-[14px] leading-relaxed text-muted-foreground">
                  {product.name} adalah bagian dari ekosistem QRION dan dapat
                  dihubungkan dengan modul lain sesuai kebutuhan sekolah.
                </p>
              </div>
              <Link
                href="/produk"
                className="inline-flex shrink-0 items-center gap-1.5 rounded text-sm font-semibold text-brand transition-colors hover:text-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
              >
                Lihat ekosistem
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

/** Section 3 — problems solved. */
export function ProductProblems({ product }: { product: Product }) {
  return (
    <Section id="masalah" aria-labelledby="masalah-produk-heading">
      <SectionHeader
        eyebrow="Masalah yang Diselesaikan"
        title={
          <span id="masalah-produk-heading">
            Tantangan yang Sering Dihadapi Sekolah
          </span>
        }
        description={`Bagaimana ${product.name} membantu merapikan proses yang sebelumnya berjalan manual.`}
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {product.problems.map((problem, index) => (
          <Reveal key={problem.title} delay={index * 0.07} className="h-full">
            <ProblemCard
              title={problem.title}
              description={problem.description}
              icon={iconByIndex(problemIcons, index)}
            />
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <p className="mx-auto mt-10 max-w-2xl text-center text-[15px] leading-relaxed text-muted-foreground">
          {product.name} menyatukan proses tersebut ke dalam satu alur yang dapat
          dipantau oleh sekolah.
        </p>
      </Reveal>
    </Section>
  );
}

/** Section 4 — main features. */
export function ProductFeatures({ product }: { product: Product }) {
  return (
    <Section id="fitur" background="soft" aria-labelledby="fitur-heading">
      <SectionHeader
        eyebrow="Fitur Utama"
        title={<span id="fitur-heading">Fitur {product.name}</span>}
        description="Fitur inti yang membantu sekolah menjalankan proses ini secara lebih terstruktur."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {product.features.map((feature, index) => (
          <Reveal key={feature.title} delay={(index % 3) * 0.07} className="h-full">
            <FeatureCard
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              accent={product.accent}
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/** Section 5 — how it works. */
export function ProductWorkflow({ product }: { product: Product }) {
  return (
    <Section id="alur" aria-labelledby="alur-heading">
      <SectionHeader
        eyebrow="Alur Kerja"
        title={<span id="alur-heading">Bagaimana {product.name} Bekerja</span>}
        description="Alur yang sederhana, dari proses pertama hingga informasi siap digunakan."
      />

      <ol className="mx-auto mt-12 grid max-w-3xl gap-0">
        {product.workflow.map((step, index) => (
          <li key={step.title} className="grid">
            <Reveal delay={index * 0.06}>
              <div className="flex gap-4 rounded-xl border border-border bg-background p-5">
                <span
                  className={cn(
                    "flex size-9 shrink-0 items-center justify-center rounded-lg border font-display text-sm font-bold",
                    product.accent.iconWrap,
                    product.accent.icon,
                  )}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-[16px] font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>

            {index < product.workflow.length - 1 ? (
              <span
                aria-hidden="true"
                className="flex justify-center py-2 text-muted-foreground/60"
              >
                <ArrowDown className="size-4" />
              </span>
            ) : null}
          </li>
        ))}
      </ol>
    </Section>
  );
}

/** Section 6 — benefits. */
export function ProductBenefits({ product }: { product: Product }) {
  return (
    <Section id="manfaat" background="soft" aria-labelledby="manfaat-produk-heading">
      <SectionHeader
        eyebrow="Manfaat"
        title={<span id="manfaat-produk-heading">Manfaat untuk Sekolah Anda</span>}
        description={`Hal yang dapat dirasakan sekolah ketika ${product.name} digunakan sehari-hari.`}
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {product.benefits.map((benefit, index) => (
          <Reveal key={benefit.title} delay={(index % 3) * 0.07} className="h-full">
            <BenefitCard
              title={benefit.title}
              description={benefit.description}
              icon={iconByIndex(benefitIcons, index)}
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/** Section 7 — user roles. */
export function ProductRoles({ product }: { product: Product }) {
  return (
    <Section id="peran" aria-labelledby="peran-produk-heading">
      <SectionHeader
        eyebrow="Pengguna"
        title={<span id="peran-produk-heading">Siapa yang Menggunakan {product.name}</span>}
        description="Setiap peran mendapatkan akses sesuai kebutuhannya."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
        {product.roles.map((role, index) => (
          <Reveal key={role.title} delay={(index % 4) * 0.06} className="h-full">
            <RoleCard
              title={role.title}
              description={role.description}
              icon={iconByRoleTitle(role.title)}
              accent={product.accent}
              className="p-5"
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
