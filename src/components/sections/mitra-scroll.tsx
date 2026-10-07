"use client";

import ScrollVelocity from "@/components/magicui/scroll-velocity";
import { useContent } from "@/components/admin/content-provider";
import { FALLBACK_LOGO, type Mitra } from "@/data/mitra";

const swapToFallback = (img: HTMLImageElement) => {
  if (img.dataset.fallback === "1") return;
  img.dataset.fallback = "1";
  img.src = FALLBACK_LOGO;
};

export function MitraScroll({ className = "" }: { className?: string }) {
  const { mitraData } = useContent().mitra;
  const half = Math.ceil(mitraData.length / 2);
  const row1 = mitraData.slice(0, half);
  const row2 = mitraData.slice(half);

  const renderMitraCards = (items: Mitra[]) =>
    items.map((mitra, index) => (
      <div
        key={index}
        className="mx-2 sm:mx-4 flex flex-col items-center justify-start w-[140px] sm:w-[170px] min-h-[130px] sm:min-h-[170px] bg-white p-3 sm:p-4 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100"
      >
        <div className="h-[55px] sm:h-[75px] w-full overflow-hidden flex items-center justify-center">
          <img
            src={mitra.img}
            alt={mitra.name}
            className="h-full w-full object-contain"
            ref={(img) => {
              if (img && img.complete && img.naturalWidth === 0) {
                swapToFallback(img);
              }
            }}
            onError={(e) => {
              swapToFallback(e.currentTarget);
            }}
          />
        </div>
        <div className="mt-2.5 w-full flex-1 flex items-center justify-center">
          <h4 className="text-center text-[10px] sm:text-xs font-bold text-slate-800 leading-tight line-clamp-2">
            {mitra.name}
          </h4>
        </div>
      </div>
    ));

  return (
    <div
      className={`${className} relative flex flex-col gap-4 sm:gap-6 py-2 overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_48px,_black_calc(100%-48px),transparent_100%)]`}
    >
      <ScrollVelocity
        texts={[renderMitraCards(row1)]}
        velocity={35}
        className="flex items-center"
        numCopies={2}
        scrollerClassName="flex items-center"
      />
      <ScrollVelocity
        texts={[renderMitraCards(row2)]}
        velocity={-35}
        className="flex items-center"
        numCopies={2}
        scrollerClassName="flex items-center"
      />
    </div>
  );
}

export default MitraScroll;
