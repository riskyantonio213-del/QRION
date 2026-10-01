"use client";

import { useEffect, useRef, useState } from "react";

export function OncardStats() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          io.disconnect();
          const begin = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - begin) / 2000, 1);
            setProgress(1 - Math.pow(1 - p, 3));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const fmt = (to: number, dec: number, sep: string) => {
    const v = to * progress;
    const s = new Intl.NumberFormat("en-US", {
      useGrouping: sep !== "",
      minimumFractionDigits: dec,
      maximumFractionDigits: dec,
    }).format(v);
    return sep ? s.replace(/,/g, sep) : s;
  };

  return (
    <div
      ref={rootRef}
      className="
                  grid
                  grid-cols-2
                  gap-3
                  sm:gap-4
                "
    >
      <div
        className="
                      rounded-[22px]
                      border
                      border-slate-200
                      bg-white
                      p-5
                      text-center
                      shadow-[0_10px_35px_rgba(15,23,42,0.05)]
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:shadow-[0_18px_45px_rgba(15,23,42,0.09)]
                      sm:p-6
                    "
      >
        <div
          className="
                        flex
                        items-center
                        justify-center
                        text-3xl
                        font-black
                        tracking-tight
                        sm:text-4xl
                        md:text-[42px]

                        text-[#071A13]
                      "
        >
          <span className="count-up-text">{fmt(7320, 0, ".")}</span>
          <span />
        </div>
        <p
          className="
                        mt-2
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.15em]
                        text-slate-400
                        sm:text-xs
                      "
        >
          User
        </p>
      </div>
      <div
        className="
                      rounded-[22px]
                      border
                      border-slate-200
                      bg-white
                      p-5
                      text-center
                      shadow-[0_10px_35px_rgba(15,23,42,0.05)]
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:shadow-[0_18px_45px_rgba(15,23,42,0.09)]
                      sm:p-6
                    "
      >
        <div
          className="
                        flex
                        items-center
                        justify-center
                        text-3xl
                        font-black
                        tracking-tight
                        sm:text-4xl
                        md:text-[42px]

                        text-[#071A13]
                      "
        >
          <span className="count-up-text">{fmt(30, 0, "")}</span>
          <span>+</span>
        </div>
        <p
          className="
                        mt-2
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.15em]
                        text-slate-400
                        sm:text-xs
                      "
        >
          Mitra Sekolah
        </p>
      </div>
      <div
        className="
                      rounded-[22px]
                      border
                      border-slate-200
                      bg-white
                      p-5
                      text-center
                      shadow-[0_10px_35px_rgba(15,23,42,0.05)]
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:shadow-[0_18px_45px_rgba(15,23,42,0.09)]
                      sm:p-6
                    "
      >
        <div
          className="
                        flex
                        items-center
                        justify-center
                        text-3xl
                        font-black
                        tracking-tight
                        sm:text-4xl
                        md:text-[42px]

                        text-[#32B67D]
                      "
        >
          <span>ON</span>
        </div>
        <p
          className="
                        mt-2
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.15em]
                        text-slate-400
                        sm:text-xs
                      "
        >
          Payment Gateway
        </p>
      </div>
      <div
        className="
                      rounded-[22px]
                      border
                      border-slate-200
                      bg-white
                      p-5
                      text-center
                      shadow-[0_10px_35px_rgba(15,23,42,0.05)]
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:shadow-[0_18px_45px_rgba(15,23,42,0.09)]
                      sm:p-6
                    "
      >
        <div
          className="
                        flex
                        items-center
                        justify-center
                        text-3xl
                        font-black
                        tracking-tight
                        sm:text-4xl
                        md:text-[42px]

                        text-[#071A13]
                      "
        >
          <span className="count-up-text">{fmt(8.4, 1, "")}</span>
          <span>k+</span>
        </div>
        <p
          className="
                        mt-2
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.15em]
                        text-slate-400
                        sm:text-xs
                      "
        >
          Trx/Hari
        </p>
      </div>
    </div>
  );
}
