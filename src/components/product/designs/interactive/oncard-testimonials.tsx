"use client";

import { useEffect, useState } from "react";

const TESTI = [
  "https://oncard.id/assets_oncard/images/test5.webp",
  "https://oncard.id/assets_oncard/images/rispel.webp",
];

export function OncardTestimonials() {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i === 0 ? TESTI.length - 1 : i - 1));
  const next = () => setIdx((i) => (i === TESTI.length - 1 ? 0 : i + 1));

  useEffect(() => {
    const timer = setInterval(
      () => setIdx((i) => (i === TESTI.length - 1 ? 0 : i + 1)),
      5000,
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="testimoni"
      className="relative w-full overflow-hidden bg-white py-1 sm:py-1 lg:py-1"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-2 flex justify-end sm:mb-4">
          <img
            alt=""
            aria-hidden="true"
            className="hidden h-16 w-auto object-contain opacity-80 sm:block md:h-24"
            src="https://oncard.id/assets_oncard/images/dots.png"
          />
        </div>
        <div className="mx-auto -mt-2 max-w-3xl text-center sm:-mt-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-widest text-emerald-600">
              Testimoni
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Testimoni
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-500 sm:text-lg">
              Tentang performa dan kualitas
            </p>
          </div>
          <img
            alt="Oncard"
            className="mx-auto mt-3 h-5 w-auto object-contain sm:mt-4 sm:h-6"
            src="https://oncard.id/assets_oncard/logo/logo_dongker.png"
          />
        </div>
        <div className="relative mx-auto mt-8 max-w-5xl sm:mt-10">
          <div className="relative flex min-h-[220px] items-center justify-center overflow-hidden xs:min-h-[260px] sm:min-h-[420px] md:min-h-[500px]">
            <div
              className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-out ${idx === 0 ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
            >
              <img
                alt="Testimoni 1"
                className="h-auto max-h-[220px] w-full max-w-full select-none object-contain sm:max-h-[420px] sm:max-w-4xl md:max-h-[500px] md:max-w-5xl"
                src="https://oncard.id/assets_oncard/images/test5.webp"
              />
            </div>
            <div
              className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-out ${idx === 1 ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
            >
              <img
                alt="Testimoni 2"
                className="h-auto max-h-[220px] w-full max-w-full select-none object-contain sm:max-h-[420px] sm:max-w-4xl md:max-h-[500px] md:max-w-5xl"
                src="https://oncard.id/assets_oncard/images/rispel.webp"
              />
            </div>
            <button
              type="button"
              aria-label="Testimoni sebelumnya"
              onClick={prev}
              className="absolute left-2 top-1/2 z-30 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-slate-100 bg-white/90 text-sm text-slate-800 shadow-lg backdrop-blur-sm transition hover:bg-white sm:left-4 sm:h-12 sm:w-12 sm:text-base"
            >
              <span aria-hidden="true">&lt;</span>
            </button>
            <button
              type="button"
              aria-label="Testimoni berikutnya"
              onClick={next}
              className="absolute right-2 top-1/2 z-30 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-slate-100 bg-white/90 text-sm text-slate-800 shadow-lg backdrop-blur-sm transition hover:bg-white sm:right-4 sm:h-12 sm:w-12 sm:text-base"
            >
              <span aria-hidden="true">&gt;</span>
            </button>
          </div>
          <div className="mt-5 flex items-center justify-center gap-2 sm:mt-6 sm:gap-3">
            {TESTI.map((src, i) => (
              <button
                key={src}
                type="button"
                aria-label={`Tampilkan testimoni ${i + 1}`}
                aria-current={idx === i ? "true" : undefined}
                onClick={() => setIdx(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === i
                    ? "w-8 bg-[#33B77E]"
                    : "w-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>
        <div className="mt-8 flex justify-start sm:mt-10">
          <img
            alt=""
            aria-hidden="true"
            className="hidden h-16 w-auto object-contain opacity-80 sm:block md:h-24"
            src="https://oncard.id/assets_oncard/images/dots.png"
          />
        </div>
      </div>
    </section>
  );
}
