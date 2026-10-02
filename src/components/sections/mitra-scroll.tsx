"use client";

import ScrollVelocity from "@/components/magicui/scroll-velocity";

type Mitra = { name: string; img: string };

const mitraData: Mitra[] = [
  {
    name: "PP MA S AL-HIMMAH",
    img: "https://oncard.id/app/assets/users/foto/Ss5pCirBiTa38bkI1749008468.jpg",
  },
  {
    name: "SMK Perbankan Riau",
    img: "https://oncard.id/app/assets/users/foto/Uw51CPREKkTsPe5j1745384212.png",
  },
  {
    name: "SD IT AITI Tualang Siak",
    img: "https://oncard.id/app/assets/users/foto/bsUWgiCD1EedpOZk1739956785.jpeg",
  },
  {
    name: "Pondok Pesantren Syafa'aturrasul 2 Putra",
    img: "https://oncard.id/app/assets/users/foto/AARqKU8tGyNI3gSt1736407352.png",
  },
  {
    name: "Yayasan Ibu Harapan",
    img: "https://oncard.id/app/assets/users/foto/RlcbvYbD68iP7Cuc1754730059.png",
  },
  {
    name: "Pondok Pesantren Bequranic Bengkalis",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmjXYXoGRn9ClDtlpl2FXy5PmFN_1ZLNf0FadyHRNvXw&s=10",
  },
  {
    name: "Pondok Pesantren Syafa'aturrasul 1",
    img: "https://oncard.id/app/assets/users/foto/AtWzpRqo14l8iY8c1691512037.webp",
  },
  {
    name: "Pondok Pesantren Darul Fikri",
    img: "https://oncard.id/app/assets/users/foto/rPT37qO3ihjxni4c1771570316.jpg",
  },
  {
    name: "MTS Masmur Pekanbaru",
    img: "https://oncard.id/app/assets/users/foto/B5tmyMkAgHDsZJHU1739429154.jpeg",
  },
  {
    name: "Yayasan Abdi Nusantara",
    img: "https://oncard.id/app/assets/users/foto/",
  },
  {
    name: "TK - Playgroup Labschool FKIP UNRI",
    img: "https://oncard.id/app/assets/users/foto/ClLHcazCsyvryYc81752898320.png",
  },
  {
    name: "SMPS Mutawally",
    img: "https://oncard.id/app/assets/users/foto/9G0DqMUpsxSMwlQW1753848478.jpeg",
  },
  {
    name: "Pondok Pesantren Al Faruqi",
    img: "https://oncard.id/app/assets/users/foto/ZN9kX4VhWfhxoV5U1750605715.png",
  },
  {
    name: "SMA Negeri Pintar",
    img: "https://oncard.id/app/assets/users/foto/orG0IRpMOXnyRVcC1736430037.png",
  },
  {
    name: "Pondok Pesantren Al Munawwarah",
    img: "https://oncard.id/app/assets/users/foto/zoS65sWy1mYoWBak1769053365.jpg",
  },
  {
    name: "Pondok Pesantren Al Muslimun",
    img: "https://oncard.id/app/assets/users/foto/wco0iXNjoSRH8FJz1732589850.png",
  },
  {
    name: "Pondok Pesantren Syekh Burhanuddin Kuntu",
    img: "https://oncard.id/app/assets/users/foto/4OaniEQ5Zvavx4wi1722841750.png",
  },
  {
    name: "Al Azhar Syifabudi Pekanbaru",
    img: "https://oncard.id/app/assets/users/foto/bDHwsWwjpQkFBuAr1736430141.png",
  },
  {
    name: "Yayasan Assajadah Kubang Raya",
    img: "https://oncard.id/app/assets/users/foto/nudoEIoen6GaywBb1733986777.png",
  },
];

const FALLBACK_LOGO = "https://oncard.id/assets_oncard/logo/logo_dongker.png";

const swapToFallback = (img: HTMLImageElement) => {
  if (img.dataset.fallback === "1") return;
  img.dataset.fallback = "1";
  img.src = FALLBACK_LOGO;
};

export function MitraScroll({ className = "" }: { className?: string }) {
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
