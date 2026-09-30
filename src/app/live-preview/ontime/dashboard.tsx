import {
  RefreshCw,
  AlertTriangle,
  Clock,
  UserX,
  BookOpen,
  ChevronRight,
  AlertCircle,
} from "lucide-react";

export function OntimeDashboard() {
  return (
    <div className="space-y-6 text-slate-800 text-xs">
      {/* 1. Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-slate-900">Dashboard</h1>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-slate-500">
              Selasa, 29 September 2026 • pukul 04:06
            </span>
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              Hari masuk sekolah
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-slate-400 text-xs">Diperbarui 11.05</span>
          <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-50 transition">
            <RefreshCw className="w-3.5 h-3.5 text-slate-500" />
            Segarkan
          </button>
        </div>
      </div>

      {/* 2. Announcement Banner */}
      <div className="flex items-start gap-3 p-3.5 bg-amber-50/80 border border-amber-200/80 rounded-xl text-amber-900">
        <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
        <div className="space-y-0.5">
          <p className="font-semibold text-amber-900">
            Presensi masuk/pulang siswa sedang dinonaktifkan
          </p>
          <p className="text-[11px] text-amber-800/90 leading-relaxed">
            Jenis presensi yang dimatikan tidak ditagih Alfa maupun belum mengisi, jadi angkanya sengaja tidak ikut menurunkan skor sekolah. Catatan lama tetap ditampilkan. Nyalakan lagi di Pengaturan.
          </p>
        </div>
      </div>

      {/* 3. Metrics Cards (4 Columns) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Metric 1 */}
        <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-slate-500 font-medium">Kehadiran siswa hari ini</span>
            <div className="text-2xl font-bold text-slate-900 my-0.5">0</div>
            <div className="text-[11px] text-slate-400">
              dari 0 absen tercatat • 0% dari 13 siswa
            </div>
          </div>
          <div className="relative w-12 h-12 flex items-center justify-center rounded-full border-4 border-slate-100 border-t-slate-300">
            <span className="text-[10px] font-bold text-slate-500">0%</span>
          </div>
        </div>

        {/* Metric 2 */}
        <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm flex items-start justify-between">
          <div>
            <span className="text-slate-500 font-medium">Terlambat</span>
            <div className="text-2xl font-bold text-slate-900 my-0.5">0</div>
            <div className="text-[11px] text-slate-400">
              Belum ada yang terlambat hari ini
            </div>
          </div>
          <div className="p-2 bg-amber-50 text-amber-600 rounded-lg">
            <Clock className="w-4 h-4" />
          </div>
        </div>

        {/* Metric 3 */}
        <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm flex items-start justify-between">
          <div>
            <span className="text-slate-500 font-medium">Alfa & belum mengisi</span>
            <div className="text-2xl font-bold text-slate-900 my-0.5">0</div>
            <div className="text-[11px] text-slate-400">
              0 alfa • 0 belum mengisi dari 13 siswa
            </div>
          </div>
          <div className="p-2 bg-red-50 text-red-500 rounded-lg">
            <UserX className="w-4 h-4" />
          </div>
        </div>

        {/* Metric 4 */}
        <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm flex items-start justify-between">
          <div>
            <span className="text-slate-500 font-medium">Sesi mengajar tercatat</span>
            <div className="text-2xl font-bold text-slate-900 my-0.5">0/0</div>
            <div className="text-[11px] text-slate-400">
              Tidak ada sesi terlewat
            </div>
          </div>
          <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
            <BookOpen className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* 4. Row 2: Skor Kondisi Presensi & Pekan ini vs Pekan lalu */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Skor kondisi presensi (5 cols) */}
        <div className="lg:col-span-5 bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
          <div>
            <h2 className="font-bold text-slate-900 text-sm">Skor kondisi presensi</h2>
            <p className="text-slate-400 text-[11px]">2 dari 4 komponen • Rab, 23 Sep - Sen, 28 Sep</p>
          </div>

          <div className="flex items-center gap-4 py-2 border-b border-slate-100 pb-4">
            <div className="relative w-16 h-16 rounded-full border-4 border-red-500 flex items-center justify-center shrink-0">
              <span className="text-base font-bold text-slate-900">19%</span>
            </div>
            <div>
              <span className="px-2 py-0.5 bg-red-100 text-red-700 font-semibold rounded text-[11px]">
                Kritis
              </span>
              <p className="text-[11px] text-slate-400 mt-1">5 hari sekolah dinilai • 0 alfa, 0 belum mengisi</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="space-y-1">
              <div className="flex justify-between text-[11px]">
                <span className="font-medium text-slate-700">Kehadiran siswa</span>
                <span className="text-slate-400">-</span>
              </div>
              <p className="text-[10px] text-slate-400">0 hadir dari 0 absen harian siswa • bobot 40%</p>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-[11px]">
                <span className="font-medium text-slate-700">Absen guru</span>
                <span className="font-semibold text-slate-800">6.7%</span>
              </div>
              <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full w-[6.7%]"></div>
              </div>
              <p className="text-[10px] text-slate-400">1 dari 15 absen harian guru • bobot 25%</p>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-[11px]">
                <span className="font-medium text-slate-700">Pencatatan sesi</span>
                <span className="font-semibold text-slate-800">33.3%</span>
              </div>
              <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full w-[33.3%]"></div>
              </div>
              <p className="text-[10px] text-slate-400">1 dari 3 sesi tercatat • bobot 20%</p>
            </div>
          </div>
        </div>

        {/* Pekan ini vs pekan lalu (7 cols) */}
        <div className="lg:col-span-7 bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm space-y-4 flex flex-col justify-between">
          <div>
            <h2 className="font-bold text-slate-900 text-sm">Pekan ini vs pekan lalu</h2>
            <p className="text-slate-400 text-[11px]">
              Rab, 23 Sep – Sen, 28 Sep dibanding Kam, 17 Sep – Sel, 22 Sep • hanya hari sekolah yang sudah selesai
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 border-y border-slate-100 py-4">
            <div>
              <p className="font-semibold text-slate-700 mb-2">Kehadiran siswa</p>
              <div className="flex items-baseline gap-2">
                <span className="text-slate-400 font-medium">Pekan ini</span>
                <span className="font-bold text-slate-800">0%</span>
              </div>
              <div className="flex items-baseline gap-2 text-[11px]">
                <span className="text-slate-400">Pekan lalu</span>
                <span className="text-slate-600">0%</span>
              </div>
              <span className="inline-block mt-2 px-1.5 py-0.5 bg-red-100 text-red-700 font-medium rounded text-[10px]">
                -26.6%
              </span>
            </div>

            <div>
              <p className="font-semibold text-slate-700 mb-2">Absen guru</p>
              <div className="flex items-baseline gap-2">
                <span className="text-slate-400 font-medium">Pekan ini</span>
                <span className="font-bold text-slate-800">6.7%</span>
              </div>
              <div className="flex items-baseline gap-2 text-[11px]">
                <span className="text-slate-400">Pekan lalu</span>
                <span className="text-slate-600">33.3%</span>
              </div>
              <p className="text-[10px] text-slate-400 mt-2">1 hadir dari 15 absen harian guru pekan ini</p>
            </div>

            <div>
              <p className="font-semibold text-slate-700 mb-2">Pencatatan sesi</p>
              <div className="flex items-baseline gap-2">
                <span className="text-slate-400 font-medium">Pekan ini</span>
                <span className="font-bold text-slate-800">33.3%</span>
              </div>
              <div className="flex items-baseline gap-2 text-[11px]">
                <span className="text-slate-400">Pekan lalu</span>
                <span className="text-slate-600">0%</span>
              </div>
              <span className="inline-block mt-2 px-1.5 py-0.5 bg-emerald-100 text-emerald-700 font-medium rounded text-[10px]">
                +33.3%
              </span>
              <p className="text-[10px] text-slate-400 mt-1">1 sesi tercatat • 2 terlewat pekan ini</p>
            </div>
          </div>

          <div className="text-[11px] text-slate-500 bg-slate-50 p-2.5 rounded-lg flex items-center justify-between">
            <span>Alfa siswa: <strong className="text-slate-800">0 pekan ini</strong> | 0 pekan lalu | 0 hari</span>
          </div>
        </div>
      </div>

      {/* 5. Tren Skor Kondisi Sekolah */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-bold text-slate-900 text-sm">Tren skor kondisi sekolah</h2>
            <p className="text-slate-400 text-[11px]">
              17 hari sekolah sudah dinilai • Rab, 9 Sep sampai Sen, 28 Sep
            </p>
          </div>
          <div className="text-right">
            <span className="text-lg font-bold text-slate-900">19</span>
            <p className="text-[10px] text-slate-400">skor terbaru • 75% batas “Baik”</p>
          </div>
        </div>

        {/* Visual Graph Line Mockup */}
        <div className="relative h-32 w-full border-b border-slate-200 flex items-end justify-between px-4 pb-2">
          <div className="absolute inset-x-0 bottom-8 border-b border-dashed border-red-200"></div>
          <span className="text-[10px] text-slate-400 z-10">Rab, 9 Sep</span>
          <span className="text-[10px] text-slate-400 z-10">Jum, 18 Sep</span>
          <span className="text-[10px] text-slate-400 z-10">Sen, 28 Sep</span>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] pt-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded font-medium">
              +19 naik sejak Rab, 9 Sep
            </span>
            <span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded font-medium">
              +7 dari hari sebelumnya
            </span>
            <span className="text-slate-400">Tertinggi 19 • Terendah 0</span>
          </div>
          <a href="#" className="text-emerald-600 hover:underline font-medium flex items-center gap-1">
            Telusuri penyebabnya <ChevronRight className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* 6. Tingkat Kehadiran & Komposisi Absen */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Chart Tingkat Kehadiran (8 cols) */}
        <div className="lg:col-span-8 bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-bold text-slate-900 text-sm">Tingkat kehadiran per hari sekolah</h2>
              <p className="text-slate-400 text-[11px]">
                10 hari sekolah terakhir • batangnya komposisi absen, garisnya persentase kehadiran
              </p>
            </div>
            <span className="px-2 py-0.5 bg-emerald-50 text-emerald-600 rounded text-[10px] font-medium">
              0% dari hari sebelumnya
            </span>
          </div>

          <div className="h-40 flex items-center justify-center border border-dashed border-slate-200 rounded-xl bg-slate-50/50">
            <p className="text-slate-400 text-xs">Belum ada absen siswa pada 10 hari sekolah terakhir.</p>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap items-center gap-4 text-[11px] text-slate-500 pt-2">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> Hadir</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span> Terlambat</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-blue-400"></span> Izin</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span> Sakit</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-red-500"></span> Alfa</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span> Belum mengisi</span>
          </div>
        </div>

        {/* Komposisi Absen Hari Ini (4 cols) */}
        <div className="lg:col-span-4 bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
          <div>
            <h2 className="font-bold text-slate-900 text-sm">Komposisi absen hari ini</h2>
            <p className="text-slate-400 text-[11px]">13 siswa terdaftar</p>
          </div>

          <div className="my-8 text-center text-slate-400 text-xs">
            Belum ada absen yang tercatat hari ini.
          </div>

          <div className="border-t border-slate-100 pt-3 space-y-1 text-[11px] text-slate-500">
            <div className="flex justify-between font-medium text-slate-700">
              <span>Guru sudah absen:</span>
              <span>0/3</span>
            </div>
            <p className="text-[10px] text-slate-400">
              0 hadir • 0 terlambat • 0 izin/sakit • 3 belum mengisi
            </p>
          </div>
        </div>
      </div>

      {/* 7. Yang Perlu Diperhatikan & Skor Per Kelas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Yang perlu diperhatikan */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
          <div>
            <h2 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 text-amber-500" />
              Yang perlu diperhatikan
            </h2>
            <p className="text-slate-400 text-[11px]">
              Kesimpulan dari angka di atas, urut dari yang paling perlu ditindak
            </p>
          </div>

          <div className="space-y-3">
            {/* Warning 1 */}
            <div className="p-3 bg-emerald-50/60 border border-emerald-100 rounded-xl space-y-1">
              <h3 className="font-semibold text-slate-800 text-xs">3 guru belum absen hari ini</h3>
              <p className="text-[11px] text-slate-600">
                Belum ada catatan masuk untuk hari ini. Hari yang belum ditutup masih bisa diisi.
              </p>
              <a href="#" className="inline-block text-emerald-600 text-[11px] font-medium hover:underline pt-1">
                Lihat presensi guru →
              </a>
            </div>

            {/* Warning 2 */}
            <div className="p-3 bg-emerald-50/60 border border-emerald-100 rounded-xl space-y-1">
              <h3 className="font-semibold text-slate-800 text-xs">10 siswa belum punya kelas</h3>
              <p className="text-[11px] text-slate-600">
                Anaknya tidak ikut dihitung di skor kelas mana pun. Isi kelasnya supaya rekap kelas mencakup seluruh siswa.
              </p>
              <a href="#" className="inline-block text-emerald-600 text-[11px] font-medium hover:underline pt-1">
                Buka data siswa →
              </a>
            </div>

            {/* Warning 3 */}
            <div className="p-3 bg-amber-50/60 border border-amber-100 rounded-xl space-y-1">
              <h3 className="font-semibold text-slate-800 text-xs">SMP Kelas 7.1 skornya paling rendah</h3>
              <p className="text-[11px] text-slate-600">
                Skor 33 dengan tingkat kehadiran 0% pada pekan ini.
              </p>
              <a href="#" className="inline-block text-amber-700 text-[11px] font-medium hover:underline pt-1">
                Bandingkan kelas →
              </a>
            </div>
          </div>
        </div>

        {/* Skor kondisi per kelas */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
          <div>
            <h2 className="font-bold text-slate-900 text-sm">Skor kondisi per kelas</h2>
            <p className="text-slate-400 text-[11px]">
              Rab, 23 Sep – Sen, 28 Sep • dinilai dari kehadiran, ketepatan waktu, dan pencatatan sesi kelas itu • 10 siswa belum punya kelas
            </p>
          </div>

          <div className="space-y-4">
            {/* Class 1 */}
            <div className="border-b border-slate-100 pb-3 space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-800">1. SMP Kelas 7.1 <span className="font-normal text-slate-400">(2 siswa)</span></span>
                <span className="font-bold text-red-600 text-xs">33 <span className="font-normal text-[10px] text-red-500">Kritis</span></span>
              </div>
              <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                <div className="bg-red-500 h-full w-[33%]"></div>
              </div>
              <p className="text-[10px] text-slate-400 pt-1">
                Kehadiran siswa -- • Ketepatan waktu -- • Pencatatan sesi 33.3% • 1 dari 3 sesi
              </p>
            </div>

            {/* Class 2 */}
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-800">2. SMP Kelas 7.3 <span className="font-normal text-slate-400">(1 siswa)</span></span>
                <span className="text-slate-400 text-xs">-- <span className="text-[10px]">Belum ada dasar</span></span>
              </div>
              <p className="text-[10px] text-slate-400">
                Kehadiran siswa -- • Ketepatan waktu -- • Pencatatan sesi -- • 0 dari 0 sesi
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 8. Bottom Row (3 Columns) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Jadwal mengajar */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-slate-900 text-xs">Jadwal mengajar hari ini</h2>
            <a href="#" className="text-emerald-600 text-[11px] hover:underline">Laporan mengajar</a>
          </div>
          <p className="text-slate-400 text-center py-6 text-[11px]">Tidak ada jadwal mengajar hari ini.</p>
        </div>

        {/* Siswa alfa terbanyak */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="font-bold text-slate-900 text-xs">Siswa dengan alfa terbanyak</h2>
              <span className="text-slate-400 text-[10px]">30 hari terakhir</span>
            </div>
            <a href="#" className="text-emerald-600 text-[11px] hover:underline">Laporan presensi</a>
          </div>
          <p className="text-slate-400 text-center py-6 text-[11px]">Tidak ada catatan Alfa dalam 30 hari terakhir.</p>
        </div>

        {/* Koreksi absen */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="font-bold text-slate-900 text-xs">Koreksi absen menunggu</h2>
              <span className="text-slate-400 text-[10px]">Tidak ada pengajuan yang menunggu</span>
            </div>
            <a href="#" className="text-emerald-600 text-[11px] hover:underline">Periksa</a>
          </div>
          <p className="text-slate-400 text-center py-6 text-[11px]">Semua pengajuan koreksi sudah ditindaklanjuti.</p>
        </div>
      </div>

      {/* 9. Footer Note */}
      <div className="text-center text-[10px] text-slate-400 pt-2">
        Angka di halaman ini dihitung dari absen yang tersimpan di database, dengan aturan yang sama seperti laporan presensi. Ambang kemiripan wajah yang berlaku: 36.3%.
      </div>
    </div>
  );
}