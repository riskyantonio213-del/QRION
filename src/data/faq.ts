import type { ProductFaq } from "@/data/products";

/**
 * Site-level FAQ answers. These describe how QRION works — they intentionally
 * contain no client counts, pricing, or performance claims because those are
 * not verified yet.
 */
export const generalFaq: ProductFaq[] = [
  {
    question: "Apa itu QRION?",
    answer:
      "QRION adalah ekosistem teknologi terintegrasi untuk institusi pendidikan. QRION menyediakan modul pembayaran sekolah, kartu pintar siswa, presensi digital, jurnal pembelajaran, dan penerimaan murid baru yang dapat digunakan secara bertahap.",
  },
  {
    question: "Apakah semua modul harus digunakan sekaligus?",
    answer:
      "Tidak. Sekolah dapat memulai dari modul yang paling mendesak, misalnya pembayaran atau presensi, kemudian menambahkan modul lain ketika dibutuhkan. Setiap modul dirancang agar tetap dapat terhubung dalam satu ekosistem.",
  },
  {
    question: "Bagaimana proses implementasi di sekolah?",
    answer:
      "Implementasi dimulai dari pemetaan kebutuhan operasional sekolah, konfigurasi sistem sesuai kebijakan institusi, pendampingan bagi admin sekolah, hingga tahap operasional dan pemantauan.",
  },
  {
    question: "Apakah QRION dapat digunakan oleh madrasah dan pesantren?",
    answer:
      "Ya. QRION dirancang untuk sekolah, madrasah, dan pesantren, dengan penyesuaian pada tahap implementasi mengikuti struktur dan kebijakan masing-masing institusi.",
  },
  {
    question: "Bagaimana keamanan dan kepemilikan data sekolah?",
    answer:
      "Data operasional sekolah hanya digunakan untuk menjalankan layanan yang sekolah aktifkan. Rincian pengelolaan data dijelaskan pada halaman Kebijakan Privasi dan dibahas lebih lanjut saat proses implementasi.",
  },
  {
    question: "Bagaimana cara melihat QRION secara langsung?",
    answer:
      "Sekolah dapat mengajukan demo melalui halaman Jadwalkan Demo. Tim QRION akan menghubungi Anda untuk memahami kebutuhan sekolah dan mengatur jadwal sesi demonstrasi.",
  },
];
