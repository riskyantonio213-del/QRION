"use client";

import { useEffect, useState } from "react";

const VIDEOS = [
  { id: "uJCdRSBc-1w", caption: "Kegiatan Utama Oncard" },
  { id: "TDyZmb24kTU", caption: "Dokumentasi Acara 1" },
  { id: "jwZSBUKVPaQ", caption: "Dokumentasi Acara 2" },
];

export function OncardVideoCarousel() {
  const [idx, setIdx] = useState(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (playing) return;
    const timer = setInterval(
      () => setIdx((i) => (i + 1) % VIDEOS.length),
      5000,
    );
    return () => clearInterval(timer);
  }, [playing]);

  const move = (dir: number) => {
    setPlaying(false);
    setIdx((i) => (i + dir + VIDEOS.length) % VIDEOS.length);
  };

  return (
    <section
      id="kegiatan"
      className="relative w-full overflow-hidden py-24 lg:py-32"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
        <div className="mb-16 flex flex-col items-center justify-center text-center">
          <div className="max-w-3xl mx-auto text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-widest text-emerald-600">
              Dokumentasi &amp; Acara
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Kegiatan Bersama Oncard
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-500 sm:text-lg">
              Tumbuh bersama dalam era transformasi digital, tingkatkan kualitas
              pendidikan bersama kami dalam program yang inovatif dan komitmen
              bersama.
            </p>
          </div>
          <div className="mt-8 flex items-center justify-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-6 py-2 shadow-sm">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Powered By
            </span>
            <img
              alt="Oncard Logo"
              className="h-5 w-auto object-contain opacity-90"
              src="https://oncard.id/assets_oncard/logo/logo_dongker.png"
            />
          </div>
        </div>
        <div className="mx-auto max-w-5xl">
          <div className="relative h-[320px] sm:h-[480px] lg:h-[540px] w-full overflow-hidden rounded-[2rem] bg-slate-900 shadow-2xl shadow-slate-200/60">
            {playing && (
              <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-black">
                <iframe
                  className="h-full w-full rounded-[2rem]"
                  src={`https://www.youtube.com/embed/${VIDEOS[idx].id}?autoplay=1&rel=0`}
                  title={VIDEOS[idx].caption}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <button
                  type="button"
                  onClick={() => setPlaying(false)}
                  className="absolute right-4 top-4 z-30 flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold text-black backdrop-blur-md shadow-lg transition hover:bg-black hover:text-white cursor-pointer"
                >
                  ✕ Tutup Video
                </button>
              </div>
            )}
            {!playing && (
              <div className="relative h-full w-full overflow-hidden rounded-[2rem]">
                <img
                  alt={VIDEOS[idx].caption}
                  className="h-full w-full object-cover opacity-90 transition-opacity duration-700 ease-in-out"
                  src={`https://img.youtube.com/vi/${VIDEOS[idx].id}/hqdefault.jpg`}
                />
                <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/70 px-3 py-1 rounded-full border border-emerald-500/30">
                      Video {idx + 1} dari 3
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-white mt-2 drop-shadow-md">
                      {VIDEOS[idx].caption}
                    </h4>
                  </div>
                  <button
                    type="button"
                    onClick={() => setPlaying(true)}
                    className="
                      group relative inline-flex items-center gap-3 overflow-hidden rounded-full 
                      border border-white/30 bg-white/10 px-6 py-3 text-xs sm:text-sm font-semibold 
                      text-white backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] 
                      transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:border-white/50
                      active:scale-95 focus:outline-none cursor-pointer
                    "
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <svg
                      className="h-4 w-4 fill-emerald-400 relative z-10"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    <span className="relative z-10">Putar Video</span>
                  </button>
                </div>
                <button
                  type="button"
                  aria-label="Video sebelumnya"
                  onClick={() => move(-1)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition hover:bg-white hover:text-black cursor-pointer border border-white/20"
                >
                  ‹
                </button>
                <button
                  type="button"
                  aria-label="Video berikutnya"
                  onClick={() => move(1)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition hover:bg-white hover:text-black cursor-pointer border border-white/20"
                >
                  ›
                </button>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                  {VIDEOS.map((v, i) => (
                    <button
                      key={v.id}
                      type="button"
                      aria-label={`Tampilkan video ${i + 1}`}
                      onClick={() => {
                        setPlaying(false);
                        setIdx(i);
                      }}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        idx === i
                          ? "w-6 bg-emerald-400"
                          : "w-2 bg-white/40 hover:bg-white/70"
                      }`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
