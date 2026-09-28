import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Mail, MapPin, MessageCircle } from "lucide-react";

import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/layout/section";
import { ContactForm } from "@/components/forms/contact-form";
import { Reveal } from "@/components/motion/reveal";
import { contactChannels, ctaLinks } from "@/config/site";

export const metadata: Metadata = {
  title: "Hubungi Kami",
  description:
    "Hubungi tim QRION untuk berdiskusi mengenai kebutuhan digitalisasi sekolah, madrasah, atau pesantren Anda.",
  alternates: { canonical: "/kontak" },
  openGraph: {
    title: "Hubungi Tim QRION",
    description:
      "Sampaikan kebutuhan institusi Anda dan tim QRION akan menindaklanjuti melalui email atau WhatsApp.",
    url: "/kontak",
  },
};

export default function KontakPage() {
  return (
    <>
      <PageHero
        eyebrow="Hubungi Kami"
        title="Diskusikan Kebutuhan Sekolah Anda"
        description="Isi formulir di bawah ini dan tim QRION akan menindaklanjuti melalui email atau WhatsApp. Tidak ada pertanyaan yang terlalu mendasar — kami biasa memulai dari pemetaan kebutuhan."
        breadcrumb={[{ label: "Beranda", href: "/" }, { label: "Hubungi Kami" }]}
      />

      <Section size="wide">
        <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr] lg:gap-10">
          <Reveal>
            <div className="rounded-2xl border border-border bg-background p-6 sm:p-8">
              <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                Formulir Kontak
              </h2>
              <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                Semua kolom bertanda{" "}
                <span aria-hidden="true" className="text-destructive">
                  *
                </span>{" "}
                wajib diisi.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4">
            <Reveal delay={0.06}>
              <div className="rounded-2xl border border-border bg-soft p-6">
                <h2 className="font-display text-[17px] font-semibold text-foreground">
                  Kanal Kontak
                </h2>
                <ul className="mt-5 grid gap-4">
                  <li className="flex items-start gap-3">
                    <Mail aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-brand" />
                    <div>
                      <p className="text-[13px] font-medium text-muted-foreground">
                        Email
                      </p>
                      <a
                        href={`mailto:${contactChannels.email}`}
                        className="rounded text-[15px] font-medium text-foreground underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
                      >
                        {contactChannels.email}
                      </a>
                      {contactChannels.emailIsPlaceholder ? (
                        <p className="mt-1 text-[12px] text-muted-foreground">
                          Alamat placeholder — ganti dengan email resmi QRION.
                        </p>
                      ) : null}
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <MessageCircle
                      aria-hidden="true"
                      className="mt-0.5 size-4 shrink-0 text-brand"
                    />
                    <div>
                      <p className="text-[13px] font-medium text-muted-foreground">
                        WhatsApp
                      </p>
                      {contactChannels.whatsapp ? (
                        <a
                          href={`https://wa.me/${contactChannels.whatsapp.replace(/\D/g, "")}`}
                          rel="noopener noreferrer"
                          target="_blank"
                          className="rounded text-[15px] font-medium text-foreground underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
                        >
                          {contactChannels.whatsapp}
                        </a>
                      ) : (
                        <p className="text-[14px] text-muted-foreground">
                          Belum tersedia. Tambahkan nomor resmi melalui
                          konfigurasi situs.
                        </p>
                      )}
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <Clock aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-brand" />
                    <div>
                      <p className="text-[13px] font-medium text-muted-foreground">
                        Jam operasional
                      </p>
                      <p className="text-[15px] text-foreground">
                        {contactChannels.officeHours}
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-brand" />
                    <div>
                      <p className="text-[13px] font-medium text-muted-foreground">
                        Alamat kantor
                      </p>
                      <p className="text-[14px] leading-relaxed text-muted-foreground">
                        {contactChannels.address ??
                          "Alamat kantor belum ditambahkan pada konfigurasi situs."}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="rounded-2xl border border-primary/15 bg-primary/5 p-6">
                <h2 className="font-display text-[17px] font-semibold text-foreground">
                  Ingin melihat produknya dulu?
                </h2>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                  Ajukan sesi demo untuk melihat alur kerja modul QRION sesuai
                  kebutuhan institusi Anda.
                </p>
                <Link
                  href={ctaLinks.demo}
                  className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-lg text-sm font-semibold text-brand transition-colors hover:text-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
                >
                  Jadwalkan Demo
                  <ArrowRight aria-hidden="true" className="size-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}
