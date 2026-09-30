import { z } from "zod";

/** Shared option lists so the UI and the schema can never drift apart. */

export const studentCountOptions = [
  "Kurang dari 100 siswa",
  "100 – 300 siswa",
  "300 – 500 siswa",
  "500 – 1.000 siswa",
  "Lebih dari 1.000 siswa",
] as const;

export const institutionTypeOptions = [
  "Sekolah",
  "Madrasah",
  "Pesantren",
  "Yayasan Pendidikan",
  "Lainnya",
] as const;

export const interestOptions = [
  "Ontuition",
  "Oncard",
  "Ontime",
  "Qrion Jurnal",
  "Qrion SPMB",
] as const;

/** Product choices offered on the contact form (adds the ecosystem option). */
export const contactInterestOptions = [
  ...interestOptions,
  "Ekosistem QRION",
] as const;

/** Product choices offered on the demo form (adds the undecided option). */
export const demoInterestOptions = [...interestOptions, "Belum yakin"] as const;

export type ContactInterest = (typeof contactInterestOptions)[number];
export type DemoInterest = (typeof demoInterestOptions)[number];

/*
 * Validation primitives.
 * Email and phone are validated with explicit patterns so the rules are the
 * same on the client and on the server (the actions re-validate everything).
 */
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const phonePattern = /^[+]?[0-9\s()-]{8,20}$/;

const name = z
  .string()
  .trim()
  .min(2, "Nama minimal 2 karakter.")
  .max(80, "Nama maksimal 80 karakter.");

const institution = z
  .string()
  .trim()
  .min(2, "Nama institusi minimal 2 karakter.")
  .max(120, "Nama institusi maksimal 120 karakter.");

const position = z
  .string()
  .trim()
  .min(2, "Jabatan minimal 2 karakter.")
  .max(80, "Jabatan maksimal 80 karakter.");

const email = z
  .string()
  .trim()
  .regex(emailPattern, "Masukkan alamat email yang valid.")
  .max(160, "Email maksimal 160 karakter.");

const whatsapp = z
  .string()
  .trim()
  .regex(phonePattern, "Masukkan nomor WhatsApp yang valid, contoh 08xx xxxx xxxx.");

const studentCount = z
  .string()
  .min(1, "Pilih perkiraan jumlah siswa.")
  .refine(
    (value) => (studentCountOptions as readonly string[]).includes(value),
    "Pilih salah satu opsi jumlah siswa.",
  );

export const contactFormSchema = z.object({
  name,
  institution,
  position,
  email,
  whatsapp,
  studentCount,
  interests: z
    .array(z.string())
    .min(1, "Pilih minimal satu produk yang diminati.")
    .max(contactInterestOptions.length),
  message: z
    .string()
    .trim()
    .min(10, "Ceritakan kebutuhan Anda minimal 10 karakter.")
    .max(2000, "Pesan maksimal 2.000 karakter."),
});

export const demoFormSchema = z.object({
  name,
  institution,
  position,
  whatsapp,
  email,
  studentCount,
  institutionType: z
    .string()
    .min(1, "Pilih jenis institusi.")
    .refine(
      (value) => (institutionTypeOptions as readonly string[]).includes(value),
      "Pilih salah satu jenis institusi.",
    ),
  interests: z
    .array(z.string())
    .min(1, "Pilih minimal satu produk.")
    .max(demoInterestOptions.length),
  needs: z
    .string()
    .trim()
    .min(10, "Ceritakan kebutuhan sekolah Anda minimal 10 karakter.")
    .max(2000, "Catatan maksimal 2.000 karakter."),
  consent: z
    .boolean()
    .refine((value) => value === true, "Persetujuan diperlukan untuk melanjutkan."),
});

/**
 * Lead gate shown before the QRION Live Experience. Three fields: name,
 * WhatsApp number, and the visitor's institution.
 */
export const livePreviewLeadSchema = z.object({
  name,
  whatsapp,
  institution: institution,
});

export type LivePreviewLeadValues = z.infer<typeof livePreviewLeadSchema>;

export type ContactFormValues = z.infer<typeof contactFormSchema>;
export type DemoFormValues = z.infer<typeof demoFormSchema>;
