import { 
  ChevronRight, 
  ArrowRight, 
  CreditCard, 
  Banknote, 
  Clock, 
  AlertCircle,
  ArrowUpDown
} from "lucide-react";

export function OnTuitionDashboard() {
  const monthsData = [
    { month: "Jul", value: "1.6%", color: "bg-[#FF4D4D]", cap: "bg-[#3DBA86]" },
    { month: "Agu", value: "1.42%", color: "bg-[#FF4D4D]", cap: "bg-[#3DBA86]" },
    { month: "Sep", value: "2.72%", color: "bg-[#FF4D4D]", cap: "bg-[#3DBA86]" },
    { month: "Okt", value: "4.49%", color: "bg-slate-200", cap: "bg-[#3DBA86]" },
    { month: "Nov", value: "", color: "bg-slate-200", cap: "" },
    { month: "Des", value: "", color: "bg-slate-200", cap: "" },
    { month: "Jan", value: "", color: "bg-[#FEF0C7]", cap: "", shape: "pill" },
    { month: "Feb", value: "", color: "bg-[#FEF0C7]", cap: "", shape: "pill" },
    { month: "Mar", value: "2%", color: "bg-slate-200", cap: "bg-[#3DBA86]" },
    { month: "Apr", value: "", color: "bg-[#FEF0C7]", cap: "", shape: "pill" },
    { month: "Mei", value: "1.92%", color: "bg-slate-200", cap: "bg-[#3DBA86]" },
    { month: "Jun", value: "20%", color: "bg-slate-200", cap: "bg-[#3DBA86]" },
  ];

  const tableColumns = [
    "Umum", "Jul", "Agus", "Sep", "Okt", "Nov", "Des", "Jan", "Feb", "Mar", "Apr", "Mei"
  ];

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Dashboard</h2>
          <p className="text-xs text-slate-400 mt-1">
            Senin, 28 September 2026 - 10.27 WIB
          </p>
          <p className="text-[11px] text-slate-400 mt-0.5">
            Home › Dashboard
          </p>
        </div>

        {/* Dropdown Tahun Ajaran */}
        <button className="flex items-center gap-6 bg-white border border-slate-200 rounded-xl px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm hover:bg-slate-50 transition">
          <span>2026/2027</span>
          <ChevronRight className="w-4 h-4 text-slate-400" />
        </button>
      </div>

      {/* Top Section: Overall Progress & Kas Cards */}
      <div className="grid grid-cols-12 gap-5">
        {/* Progress Bar Card */}
        <div className="col-span-12 lg:col-span-7 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between gap-4">
          <div className="h-6 w-full bg-slate-100 rounded-full overflow-hidden flex p-1">
            <div className="bg-[#3DBA86] h-full rounded-l-full" style={{ width: "32%" }} />
            <div className="bg-slate-200 h-full" style={{ width: "3%" }} />
            <div className="bg-[#FF4D4D] h-full rounded-r-full" style={{ width: "65%" }} />
          </div>

          <div className="flex items-center gap-6 text-xs font-medium text-slate-600">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#3DBA86]" />
              <span>Dibayar <strong className="text-slate-400 font-normal">32%</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
              <span>Belum Lunas</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF4D4D]" />
              <span>Nunggak <strong className="text-slate-400 font-normal">65%</strong></span>
            </div>
          </div>
        </div>

        {/* Saldo Kas Transit */}
        <div className="col-span-6 lg:col-span-2 bg-[#393A5B] text-white p-5 rounded-2xl flex flex-col justify-between shadow-sm cursor-pointer hover:bg-[#2e2f4a] transition">
          <div className="flex justify-between items-center text-xs text-slate-200 font-medium">
            <span>Saldo Kas Transit</span>
            <ArrowRight className="w-4 h-4 opacity-80" />
          </div>
          <div className="text-lg font-bold tracking-tight">Rp106.246.000</div>
        </div>

        {/* Saldo Kas Sekolah */}
        <div className="col-span-6 lg:col-span-3 bg-[#393A5B] text-white p-5 rounded-2xl flex flex-col justify-between shadow-sm cursor-pointer hover:bg-[#2e2f4a] transition">
          <div className="flex justify-between items-center text-xs text-slate-200 font-medium">
            <span>Saldo Kas Sekolah</span>
            <ArrowRight className="w-4 h-4 opacity-80" />
          </div>
          <div className="text-lg font-bold tracking-tight">Rp45.816.001</div>
        </div>
      </div>

      {/* Summary Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Total Tagihan */}
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex justify-between items-start">
          <div>
            <div className="text-xs text-slate-400 font-medium">Total Tagihan</div>
            <div className="text-xl font-bold text-slate-800 mt-1">Rp1.547.777.008</div>
            <div className="text-[10px] text-indigo-500 font-medium mt-1">
              100% <span className="text-slate-400 font-normal">dari total tagihan tahun ajaran</span>
            </div>
          </div>
          <div className="p-2 bg-indigo-50 text-indigo-500 rounded-xl">
            <CreditCard className="w-5 h-5" />
          </div>
        </div>

        {/* Dibayar */}
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex justify-between items-start">
          <div>
            <div className="text-xs text-slate-400 font-medium">Dibayar</div>
            <div className="text-xl font-bold text-[#3DBA86] mt-1">Rp44.896.003</div>
            <div className="text-[10px] text-[#3DBA86] font-medium mt-1">
              2.9% <span className="text-slate-400 font-normal">dari total tagihan tahun ajaran</span>
            </div>
          </div>
          <div className="p-2 bg-emerald-50 text-[#3DBA86] rounded-xl">
            <Banknote className="w-5 h-5" />
          </div>
        </div>

        {/* Belum Lunas */}
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex justify-between items-start">
          <div>
            <div className="text-xs text-slate-400 font-medium">Belum Lunas</div>
            <div className="text-xl font-bold text-slate-700 mt-1">Rp1.502.881.005</div>
            <div className="text-[10px] text-slate-400 font-normal mt-1">
              97.1% dari total tagihan tahun ajaran
            </div>
          </div>
          <div className="p-2 bg-slate-100 text-slate-400 rounded-xl">
            <Clock className="w-5 h-5" />
          </div>
        </div>

        {/* Tunggakan */}
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex justify-between items-start">
          <div>
            <div className="text-xs text-slate-400 font-medium">Tunggakan</div>
            <div className="text-xl font-bold text-[#FF4D4D] mt-1">Rp1.005.131.003</div>
            <div className="text-[10px] text-[#FF4D4D] font-medium mt-1">
              64.94% <span className="text-slate-400 font-normal">dari total tagihan tahun ajaran</span>
            </div>
          </div>
          <div className="p-2 bg-red-50 text-[#FF4D4D] rounded-xl">
            <AlertCircle className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-12 gap-5">
        {/* Bar Chart: Status Pembayaran Biaya Per Bulan */}
        <div className="col-span-12 lg:col-span-8 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-slate-800 text-sm">
              Status Pembayaran Biaya Per Bulan (%)
            </h3>
            <p className="text-[11px] text-slate-400 mt-0.5">
              Hanya tagihan bulanan (MONTHLY)
            </p>
          </div>

          {/* Bar Chart Container */}
          <div className="h-56 flex items-end justify-between gap-2 pt-8 pb-4 px-2">
            {monthsData.map((item, index) => (
              <div key={index} className="flex-1 flex flex-col items-center h-full justify-end group">
                <span className="text-[10px] font-semibold text-emerald-600 mb-1 h-4">
                  {item.value}
                </span>
                <div className="w-full max-w-[28px] h-36 flex flex-col justify-end">
                  {item.shape === "pill" ? (
                    <div className="w-full h-12 rounded-full bg-[#FEF0C7]" />
                  ) : (
                    <div className={`w-full h-full rounded-t-2xl ${item.color} relative overflow-hidden flex flex-col justify-end`}>
                      {item.cap && (
                        <div className={`w-full h-3 ${item.cap} rounded-t-2xl`} />
                      )}
                    </div>
                  )}
                </div>
                <span className="text-xs text-slate-600 mt-3 font-medium">
                  {item.month}
                </span>
              </div>
            ))}
          </div>

          {/* Chart Legend */}
          <div className="flex items-center justify-center gap-5 text-xs text-slate-500 pt-2 border-t border-slate-50">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FEF0C7]" />
              <span>Tidak ada tagihan</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
              <span>Belum lunas</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#3DBA86]" />
              <span>Dibayar</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF4D4D]" />
              <span>Tunggakan</span>
            </div>
          </div>
        </div>

        {/* Pie Chart: Status Pembayaran Biaya Umum */}
        <div className="col-span-12 lg:col-span-4 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-slate-800 text-sm">
              Status Pembayaran Biaya Umum (%)
            </h3>
            <p className="text-[11px] text-slate-400 mt-0.5">
              Hanya tagihan umum
            </p>
          </div>

          {/* Donut / Pie Visualization */}
          <div className="flex items-center justify-center my-4">
            <div className="relative w-44 h-44 rounded-full flex items-center justify-center"
                 style={{
                   background: "conic-gradient(#3DBA86 0deg 17deg, #FF4D4D 17deg 360deg)"
                 }}>
              <span className="absolute top-8 right-12 text-white font-bold text-xs">
                4.78%
              </span>
              <span className="absolute bottom-10 text-white font-bold text-xs">
                95.22%
              </span>
            </div>
          </div>

          {/* Breakdown Totals */}
          <div className="grid grid-cols-3 text-center text-xs gap-1 py-2 border-t border-slate-50">
            <div>
              <p className="text-slate-400 text-[11px]">Tertagih</p>
              <p className="font-bold text-slate-800 text-[11px] mt-0.5">Rp. 573.497.000</p>
            </div>
            <div>
              <p className="text-slate-400 text-[11px]">Terbayar</p>
              <p className="font-bold text-slate-800 text-[11px] mt-0.5">Rp. 27.406.000</p>
            </div>
            <div>
              <p className="text-slate-400 text-[11px]">Menunggak</p>
              <p className="font-bold text-slate-800 text-[11px] mt-0.5">Rp. 546.091.000</p>
            </div>
          </div>

          {/* Pie Legend */}
          <div className="flex items-center justify-center gap-4 text-xs text-slate-500 pt-1">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#3DBA86]" />
              <span>Dibayar</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
              <span>Belum lunas</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF4D4D]" />
              <span>Tunggakan</span>
            </div>
          </div>
        </div>
      </div>

      {/* Data Pembayaran Table */}
      <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
        <div className="p-5 border-b border-slate-100 font-bold text-slate-800 text-sm">
          Data Pembayaran
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left whitespace-nowrap">
            <thead className="bg-[#E8F7F1] text-slate-700 font-semibold">
              <tr>
                {tableColumns.map((col, idx) => (
                  <th key={idx} className="p-3.5 px-5">
                    <div className="flex items-center gap-1 cursor-pointer select-none">
                      <span>{col}</span>
                      <ArrowUpDown className="w-3 h-3 text-slate-400" />
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600">
              {/* Row Tagihan */}
              <tr className="hover:bg-slate-50/50">
                <td className="p-3.5 px-5">
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-semibold text-[11px]">
                    Tagihan
                  </span>
                </td>
                <td className="p-3.5 px-5">Rp. 573.497.000</td>
                <td className="p-3.5 px-5">Rp. 222.090.000</td>
                <td className="p-3.5 px-5">Rp. 222.200.000</td>
                <td className="p-3.5 px-5">Rp. 22.050.004</td>
                <td className="p-3.5 px-5">Rp. 22.250.004</td>
                <td className="p-3.5 px-5">Rp. 20.250.000</td>
                <td className="p-3.5 px-5">Rp. 20.250.000</td>
                <td className="p-3.5 px-5">Rp. 0</td>
                <td className="p-3.5 px-5">Rp. 0</td>
                <td className="p-3.5 px-5">Rp. 219.780.000</td>
                <td className="p-3.5 px-5">Rp. 0</td>
              </tr>

              {/* Row Dibayar */}
              <tr className="hover:bg-slate-50/50">
                <td className="p-3.5 px-5">
                  <span className="px-3 py-1 rounded-full bg-emerald-100/80 text-[#3DBA86] font-semibold text-[11px]">
                    Dibayar
                  </span>
                </td>
                <td className="p-3.5 px-5">Rp. 27.406.000</td>
                <td className="p-3.5 px-5">Rp. 3.550.000</td>
                <td className="p-3.5 px-5">Rp. 3.150.000</td>
                <td className="p-3.5 px-5">Rp. 600.001</td>
                <td className="p-3.5 px-5">Rp. 1.000.002</td>
                <td className="p-3.5 px-5">Rp. 0</td>
                <td className="p-3.5 px-5">Rp. 0</td>
                <td className="p-3.5 px-5">Rp. 0</td>
                <td className="p-3.5 px-5">Rp. 0</td>
                <td className="p-3.5 px-5">Rp. 4.400.000</td>
                <td className="p-3.5 px-5">Rp. 0</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Table Footer */}
        <div className="p-3.5 px-5 text-xs text-slate-500 bg-[#E8F7F1]/50 font-medium">
          Menampilkan 1 - 2 dari 2 data
        </div>
      </div>
    </div>
  );
}