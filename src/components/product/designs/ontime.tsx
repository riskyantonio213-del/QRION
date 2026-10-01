import type { ProductDesign } from "./types";

import { OntimeFeatureCarousel } from "./interactive/ontime-feature-carousel";
import { OntimePricingTiers } from "./interactive/ontime-pricing-tiers";

/**
 * Halaman Ontime — salinan penuh (plek ketiplek) dari
 * https://ontime.qrion.id/ (DOM setelah JS, tanpa navbar & footer asli).
 * Gambar diarahkan ke domain asli; CSS kustom (swiper, bullet, gradient,
 * marquee) diambil dari stylesheet + <style> mereka.
 */
const ontimeStyles = `
@keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .animate-left {
          animation: marquee-left 20s linear infinite;
        }

        .animate-right {
          animation: marquee-right 20s linear infinite;
        }

.swiper{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1;display:block}
.swiper-vertical>.swiper-wrapper{flex-direction:column}
.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;transition-timing-function:var(--swiper-wrapper-transition-timing-function, initial);box-sizing:content-box}
.swiper-android .swiper-slide,.swiper-ios .swiper-slide,.swiper-wrapper{transform:translateZ(0)}
.swiper-horizontal{touch-action:pan-y}
.swiper-vertical{touch-action:pan-x}
.swiper-slide{flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform;display:block}
.swiper-slide-invisible-blank{visibility:hidden}
.swiper-autoheight,.swiper-autoheight .swiper-slide{height:auto}
.swiper-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}
.swiper-backface-hidden .swiper-slide{transform:translateZ(0);backface-visibility:hidden}
.swiper-3d.swiper-css-mode .swiper-wrapper{perspective:1200px}
.swiper-3d .swiper-wrapper{transform-style:preserve-3d}
.swiper-3d{perspective:1200px}
.swiper-3d .swiper-slide,.swiper-3d .swiper-cube-shadow{transform-style:preserve-3d}
.swiper-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}
.swiper-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}
.swiper-css-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:start start}
.swiper-css-mode.swiper-horizontal>.swiper-wrapper{scroll-snap-type:x mandatory}
.swiper-css-mode.swiper-horizontal>.swiper-wrapper>.swiper-slide:first-child{margin-inline-start:var(--swiper-slides-offset-before);scroll-margin-inline-start:var(--swiper-slides-offset-before)}
.swiper-css-mode.swiper-horizontal>.swiper-wrapper>.swiper-slide:last-child{margin-inline-end:var(--swiper-slides-offset-after)}
.swiper-css-mode.swiper-vertical>.swiper-wrapper{scroll-snap-type:y mandatory}
.swiper-css-mode.swiper-vertical>.swiper-wrapper>.swiper-slide:first-child{margin-block-start:var(--swiper-slides-offset-before);scroll-margin-block-start:var(--swiper-slides-offset-before)}
.swiper-css-mode.swiper-vertical>.swiper-wrapper>.swiper-slide:last-child{margin-block-end:var(--swiper-slides-offset-after)}
.swiper-css-mode.swiper-free-mode>.swiper-wrapper{scroll-snap-type:none}
.swiper-css-mode.swiper-free-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:none}
.swiper-css-mode.swiper-centered>.swiper-wrapper:before{content:"";flex-shrink:0;order:9999}
.swiper-css-mode.swiper-centered>.swiper-wrapper>.swiper-slide{scroll-snap-align:center center;scroll-snap-stop:always}
.swiper-css-mode.swiper-centered.swiper-horizontal>.swiper-wrapper>.swiper-slide:first-child{margin-inline-start:var(--swiper-centered-offset-before)}
.swiper-css-mode.swiper-centered.swiper-horizontal>.swiper-wrapper:before{height:100%;min-height:1px;width:var(--swiper-centered-offset-after)}
.swiper-css-mode.swiper-centered.swiper-vertical>.swiper-wrapper>.swiper-slide:first-child{margin-block-start:var(--swiper-centered-offset-before)}
.swiper-css-mode.swiper-centered.swiper-vertical>.swiper-wrapper:before{width:100%;min-width:1px;height:var(--swiper-centered-offset-after)}
.swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-left,.swiper-3d .swiper-slide-shadow-right,.swiper-3d .swiper-slide-shadow-top,.swiper-3d .swiper-slide-shadow-bottom{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}
.swiper-3d .swiper-slide-shadow{background:#00000026}
.swiper-3d .swiper-slide-shadow-left{background-image:linear-gradient(to left,#00000080,#0000)}
.swiper-3d .swiper-slide-shadow-right{background-image:linear-gradient(to right,#00000080,#0000)}
.swiper-3d .swiper-slide-shadow-top{background-image:linear-gradient(to top,#00000080,#0000)}
.swiper-3d .swiper-slide-shadow-bottom{background-image:linear-gradient(to bottom,#00000080,#0000)}
.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;transform-origin:50%;box-sizing:border-box;border:4px solid var(--swiper-preloader-color, var(--swiper-theme-color));border-radius:50%;border-top-color:transparent}
.swiper:not(.swiper-watch-progress) .swiper-lazy-preloader,.swiper-watch-progress .swiper-slide-visible .swiper-lazy-preloader{animation:swiper-preloader-spin 1s infinite linear}
.swiper-lazy-preloader-white{--swiper-preloader-color: #fff}
.swiper-lazy-preloader-black{--swiper-preloader-color: #000}
@keyframes swiper-preloader-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
.swiper-pagination{position:absolute;text-align:center;transition:.3s opacity;transform:translateZ(0);z-index:10}
.swiper-pagination.swiper-pagination-hidden{opacity:0}
.swiper-pagination-disabled>.swiper-pagination,.swiper-pagination.swiper-pagination-disabled{display:none!important}
.swiper-pagination-fraction,.swiper-pagination-custom,.swiper-horizontal>.swiper-pagination-bullets,.swiper-pagination-bullets.swiper-pagination-horizontal{bottom:var(--swiper-pagination-bottom, 8px);top:var(--swiper-pagination-top, auto);left:0;width:100%}
.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transform:scale(.33);position:relative}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active,.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}
.swiper-pagination-bullet{width:var(--swiper-pagination-bullet-width, var(--swiper-pagination-bullet-size, 8px));height:var(--swiper-pagination-bullet-height, var(--swiper-pagination-bullet-size, 8px));display:inline-block;border-radius:var(--swiper-pagination-bullet-border-radius, 50%);background:var(--swiper-pagination-bullet-inactive-color, #000);opacity:var(--swiper-pagination-bullet-inactive-opacity, .2)}
button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}
.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}
.swiper-pagination-bullet:only-child{display:none!important}
.swiper-pagination-bullet-active{opacity:var(--swiper-pagination-bullet-opacity, 1);background:var(--swiper-pagination-color, var(--swiper-theme-color))}
.swiper-vertical>.swiper-pagination-bullets,.swiper-pagination-vertical.swiper-pagination-bullets{right:var(--swiper-pagination-right, 8px);left:var(--swiper-pagination-left, auto);top:50%;transform:translate3d(0,-50%,0)}
.swiper-vertical>.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet{margin:var(--swiper-pagination-bullet-vertical-gap, 6px) 0;display:block}
.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}
.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:.2s transform,.2s top}
.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 var(--swiper-pagination-bullet-horizontal-gap, 4px)}
.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;transform:translate(-50%);white-space:nowrap}
.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s left}
.swiper-horizontal.swiper-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s right}
.swiper-pagination-fraction{color:var(--swiper-pagination-fraction-color, inherit)}
.swiper-pagination-progressbar{background:var(--swiper-pagination-progressbar-bg-color, rgba(0, 0, 0, .25));position:absolute}
.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-pagination-color, var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;transform:scale(0);transform-origin:left top}
.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}
.swiper-horizontal>.swiper-pagination-progressbar,.swiper-pagination-progressbar.swiper-pagination-horizontal,.swiper-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite{width:100%;height:var(--swiper-pagination-progressbar-size, 4px);left:0;top:0}
.swiper-vertical>.swiper-pagination-progressbar,.swiper-pagination-progressbar.swiper-pagination-vertical,.swiper-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite{width:var(--swiper-pagination-progressbar-size, 4px);height:100%;left:0;top:0}
.swiper-pagination-lock{display:none}
.swiper-button-prev,.swiper-button-next{position:absolute;width:var(--swiper-navigation-size);height:var(--swiper-navigation-size);z-index:10;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--swiper-navigation-color, var(--swiper-theme-color))}
.swiper-button-prev.swiper-button-disabled,.swiper-button-next.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}
.swiper-button-prev.swiper-button-hidden,.swiper-button-next.swiper-button-hidden{opacity:0;cursor:auto;pointer-events:none}
.swiper-navigation-disabled .swiper-button-prev,.swiper-navigation-disabled .swiper-button-next{display:none!important}
.swiper-button-prev svg,.swiper-button-next svg{width:100%;height:100%;-o-object-fit:contain;object-fit:contain;transform-origin:center;fill:currentColor;pointer-events:none}
.swiper-button-lock{display:none}
.swiper-button-prev,.swiper-button-next{top:var(--swiper-navigation-top-offset, 50%);margin-top:calc(0px - (var(--swiper-navigation-size) / 2))}
.swiper-button-prev{left:var(--swiper-navigation-sides-offset, 4px);right:auto}
.swiper-button-prev .swiper-navigation-icon{transform:rotate(180deg)}
.swiper-button-next{right:var(--swiper-navigation-sides-offset, 4px);left:auto}
.swiper-horizontal .swiper-button-prev,.swiper-horizontal .swiper-button-next,.swiper-horizontal~.swiper-button-prev,.swiper-horizontal~.swiper-button-next{top:var(--swiper-navigation-top-offset, 50%);margin-top:calc(0px - (var(--swiper-navigation-size) / 2));margin-left:0}
.swiper-horizontal .swiper-button-prev,.swiper-horizontal~.swiper-button-prev,.swiper-horizontal.swiper-rtl .swiper-button-next,.swiper-horizontal.swiper-rtl~.swiper-button-next{left:var(--swiper-navigation-sides-offset, 4px);right:auto}
.swiper-horizontal .swiper-button-next,.swiper-horizontal~.swiper-button-next,.swiper-horizontal.swiper-rtl .swiper-button-prev,.swiper-horizontal.swiper-rtl~.swiper-button-prev{right:var(--swiper-navigation-sides-offset, 4px);left:auto}
.swiper-horizontal .swiper-button-prev .swiper-navigation-icon,.swiper-horizontal~.swiper-button-prev .swiper-navigation-icon,.swiper-horizontal.swiper-rtl .swiper-button-next .swiper-navigation-icon,.swiper-horizontal.swiper-rtl~.swiper-button-next .swiper-navigation-icon{transform:rotate(180deg)}
.swiper-horizontal.swiper-rtl .swiper-button-prev .swiper-navigation-icon,.swiper-horizontal.swiper-rtl~.swiper-button-prev .swiper-navigation-icon{transform:rotate(0)}
.swiper-vertical .swiper-button-prev,.swiper-vertical .swiper-button-next,.swiper-vertical~.swiper-button-prev,.swiper-vertical~.swiper-button-next{left:var(--swiper-navigation-top-offset, 50%);right:auto;margin-left:calc(0px - (var(--swiper-navigation-size) / 2));margin-top:0}
.swiper-vertical .swiper-button-prev,.swiper-vertical~.swiper-button-prev{top:var(--swiper-navigation-sides-offset, 4px);bottom:auto}
.swiper-vertical .swiper-button-prev .swiper-navigation-icon,.swiper-vertical~.swiper-button-prev .swiper-navigation-icon{transform:rotate(-90deg)}
.swiper-vertical .swiper-button-next,.swiper-vertical~.swiper-button-next{bottom:var(--swiper-navigation-sides-offset, 4px);top:auto}
.swiper-vertical .swiper-button-next .swiper-navigation-icon,.swiper-vertical~.swiper-button-next .swiper-navigation-icon{transform:rotate(90deg)}
.custom-bullet{width:12px;height:12px;background:#33b77e;opacity:.4;border-radius:50%;margin:0 6px!important;cursor:pointer;transition:all .3s ease;display:inline-block}
.custom-bullet-active{background:#33b77e;opacity:1;width:12px;height:12px}
.swiper-pagination{bottom:0!important;position:relative!important;margin-top:20px!important}
.swiper-pagination-bullets{display:flex!important;justify-content:center!important;align-items:center!important;gap:4px}
.max-w-xs{max-width:20rem}
.bg-green-gradient{background-image:linear-gradient(135deg,#dff5ea,#b8ead4)}
.bg-red-gradient{background-image:linear-gradient(135deg,#ffe2e2,#ffc1c1)}
.custom-bullet{width:10px;height:10px;background:#cfeee0;opacity:1;margin:0 6px!important}
.custom-bullet-active{background:#33b77e;width:12px;height:12px}
`;

function OntimePage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <style>{ontimeStyles}</style>
      <div>
        <section
          id="beranda"
          className="relative pt-16 bg-white overflow-hidden"
        >
          <img
            alt=""
            className="absolute -left-40 top-10 w-[400px] blur-[100px] opacity-30 pointer-events-none"
            src="https://ontime.qrion.id/assets/gradienkir-DAR4L4RJ.png"
            style={{ opacity: 1 }}
          />
          <img
            alt=""
            className="absolute -right-20 top-20 w-[350px] blur-[100px] opacity-30 pointer-events-none"
            src="https://ontime.qrion.id/assets/gradienkan-CPT8Z7Tz.png"
            style={{ opacity: 1 }}
          />
          <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 pt-14 pb-10">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 items-center">
              <div
                className="max-w-2xl text-center lg:text-left"
                style={{ opacity: 1, transform: "none" }}
              >
                <p className="text-[#33B77E] font-semibold text-sm md:text-lg tracking-wide mb-3">
                  Sistem Absensi Digital Sekolah All-in-One
                </p>
                <h1 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-[#231F20] leading-tight md:leading-snug">
                  Otomatisasi Absensi Sekolah <br className="hidden md:block" />
                  Tingkatkan Kedisiplinan <br className="hidden md:block" />
                  Guru &amp; Siswa
                </h1>
                <p className="mt-4 md:mt-6 text-[#6B7280] text-sm md:text-lg leading-relaxed">
                  Kelola presensi harian, absensi pelajaran, dan notifikasi
                  otomatis 24/7 dengan Ontime.
                </p>
                <div className="mt-6 md:mt-8 flex flex-col sm:flex-row items-center sm:justify-start gap-3 sm:gap-4 w-full">
                  <a
                    href="https://wa.wizard.id/26d596"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 
               text-white font-semibold rounded-full shadow-md transition
               bg-gradient-to-r from-[#33B77E] to-[#2FA570] hover:opacity-90"
                  >
                    <img
                      alt="WA"
                      className="w-5 h-5"
                      src="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='-2.73%200%201225.016%201225.016'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cpath%20fill='%23E0E0E0'%20d='M1041.858%20178.02C927.206%2063.289%20774.753.07%20612.325%200%20277.617%200%205.232%20272.298%205.098%20606.991c-.039%20106.986%2027.915%20211.42%2081.048%20303.476L0%201225.016l321.898-84.406c88.689%2048.368%20188.547%2073.855%20290.166%2073.896h.258.003c334.654%200%20607.08-272.346%20607.222-607.023.056-162.208-63.052-314.724-177.689-429.463zm-429.533%20933.963h-.197c-90.578-.048-179.402-24.366-256.878-70.339l-18.438-10.93-191.021%2050.083%2051-186.176-12.013-19.087c-50.525-80.336-77.198-173.175-77.16-268.504.111-278.186%20226.507-504.503%20504.898-504.503%20134.812.056%20261.519%2052.604%20356.814%20147.965%2095.289%2095.36%20147.728%20222.128%20147.688%20356.948-.118%20278.195-226.522%20504.543-504.693%20504.543z'/%3e%3clinearGradient%20id='a'%20gradientUnits='userSpaceOnUse'%20x1='609.77'%20y1='1190.114'%20x2='609.77'%20y2='21.084'%3e%3cstop%20offset='0'%20stop-color='%2320b038'/%3e%3cstop%20offset='1'%20stop-color='%2360d66a'/%3e%3c/linearGradient%3e%3cpath%20fill='url(%23a)'%20d='M27.875%201190.114l82.211-300.18c-50.719-87.852-77.391-187.523-77.359-289.602.133-319.398%20260.078-579.25%20579.469-579.25%20155.016.07%20300.508%2060.398%20409.898%20169.891%20109.414%20109.492%20169.633%20255.031%20169.57%20409.812-.133%20319.406-260.094%20579.281-579.445%20579.281-.023%200%20.016%200%200%200h-.258c-96.977-.031-192.266-24.375-276.898-70.5l-307.188%2080.548z'/%3e%3cimage%20overflow='visible'%20opacity='.08'%20width='682'%20height='639'%20xlink:href='FCC0802E2AF8A915.png'%20transform='translate(270.984%20291.372)'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20fill='%23FFF'%20d='M462.273%20349.294c-11.234-24.977-23.062-25.477-33.75-25.914-8.742-.375-18.75-.352-28.742-.352-10%200-26.25%203.758-39.992%2018.766-13.75%2015.008-52.5%2051.289-52.5%20125.078%200%2073.797%2053.75%20145.102%2061.242%20155.117%207.5%2010%20103.758%20166.266%20256.203%20226.383%20126.695%2049.961%20152.477%2040.023%20179.977%2037.523s88.734-36.273%20101.234-71.297c12.5-35.016%2012.5-65.031%208.75-71.305-3.75-6.25-13.75-10-28.75-17.5s-88.734-43.789-102.484-48.789-23.75-7.5-33.75%207.516c-10%2015-38.727%2048.773-47.477%2058.773-8.75%2010.023-17.5%2011.273-32.5%203.773-15-7.523-63.305-23.344-120.609-74.438-44.586-39.75-74.688-88.844-83.438-103.859-8.75-15-.938-23.125%206.586-30.602%206.734-6.719%2015-17.508%2022.5-26.266%207.484-8.758%209.984-15.008%2014.984-25.008%205-10.016%202.5-18.773-1.25-26.273s-32.898-81.67-46.234-111.326z'/%3e%3cpath%20fill='%23FFF'%20d='M1036.898%20176.091C923.562%2062.677%20772.859.185%20612.297.114%20281.43.114%2012.172%20269.286%2012.039%20600.137%2012%20705.896%2039.633%20809.13%2092.156%20900.13L7%201211.067l318.203-83.438c87.672%2047.812%20186.383%2073.008%20286.836%2073.047h.255.003c330.812%200%20600.109-269.219%20600.25-600.055.055-160.343-62.328-311.108-175.649-424.53zm-424.601%20923.242h-.195c-89.539-.047-177.344-24.086-253.93-69.531l-18.227-10.805-188.828%2049.508%2050.414-184.039-11.875-18.867c-49.945-79.414-76.312-171.188-76.273-265.422.109-274.992%20223.906-498.711%20499.102-498.711%20133.266.055%20258.516%2052%20352.719%20146.266%2094.195%2094.266%20146.031%20219.578%20145.992%20352.852-.118%20274.999-223.923%20498.749-498.899%20498.749z'/%3e%3c/svg%3e"
                    />
                    Konsultasi Gratis
                  </a>
                  <a
                    href=" "
                    className="w-full sm:w-auto px-6 py-3 border-2 border-[#33B77E] 
               text-[#33B77E] font-semibold rounded-full hover:bg-[#e8fff4] transition"
                  >
                    Coba Gratis
                  </a>
                </div>
                <p className="mt-4 text-xs md:text-sm text-gray-500">
                  *Free Trial &amp; Full Customer Support
                </p>
              </div>
              <div
                className="flex justify-center pointer-events-none w-full"
                style={{ opacity: 1, transform: "none" }}
              >
                <img
                  alt="Dashboard Ontime"
                  className="w-full max-w-md md:max-w-2xl object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)] -rotate-1"
                  src="https://ontime.qrion.id/assets/Rectangle-38ENemub.png"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="mitra" className="mt-10 bg-white relative z-10">
          <div className="max-w-6xl mx-auto px-4 text-center relative z-20">
            <div>
              <h2 className="text-[#33B77E] text-2xl md:text-3xl font-bold mb-3">
                Dipercaya Banyak Sekolah di Seluruh Indonesia
              </h2>
              <p className="text-[#434343] text-sm md:text-base max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed">
                Dari sekolah dasar hingga yayasan, Ontuition telah membantu
                manajemen sekolah bekerja lebih efisien dan transparan.
              </p>
            </div>
            <div className="relative overflow-hidden mb-6 md:mb-10">
              <div className="pointer-events-none absolute left-0 top-0 h-full w-16 md:w-24 bg-gradient-to-r from-white to-transparent z-30" />
              <div className="pointer-events-none absolute right-0 top-0 h-full w-16 md:w-24 bg-gradient-to-l from-white to-transparent z-30" />
              <div
                className="flex gap-6 md:gap-10 animate-left"
                style={{ animationPlayState: "running" }}
              >
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/54-BGtaf5iV.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/50-Did7i3G6.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/56-BYiE8pjz.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/46-CPzTqJnl.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/43-q9Tish5_.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/65-6YL_7-t1.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/47-EZrT_iBj.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/64-z2Y1HeW0.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/44-AY9stljf.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/48-CZY4dfKQ.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/59-BnoYFGbX.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/45-BaZ3LKWm.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/49-K5HL1pog.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/62-C_zM_02-.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/60-XQyGFJMd.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/63-B6R3tWxg.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/53-Dvqnru4Q.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/55-Dn1fdrTS.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/57-Dc8MLQdj.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/52-BWEEPMFV.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/51-B47aYGS2.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/58-nmWCFsMm.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/61-WfxWvZ3b.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/66-CERFhBla.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/54-BGtaf5iV.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/50-Did7i3G6.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/56-BYiE8pjz.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/46-CPzTqJnl.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/43-q9Tish5_.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/65-6YL_7-t1.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/47-EZrT_iBj.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/64-z2Y1HeW0.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/44-AY9stljf.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/48-CZY4dfKQ.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/59-BnoYFGbX.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/45-BaZ3LKWm.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/49-K5HL1pog.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/62-C_zM_02-.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/60-XQyGFJMd.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/63-B6R3tWxg.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/53-Dvqnru4Q.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/55-Dn1fdrTS.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/57-Dc8MLQdj.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/52-BWEEPMFV.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/51-B47aYGS2.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/58-nmWCFsMm.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/61-WfxWvZ3b.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/66-CERFhBla.png"
                />
              </div>
            </div>
            <div className="relative overflow-hidden">
              <div className="pointer-events-none absolute left-0 top-0 h-full w-16 md:w-24 bg-gradient-to-r from-white to-transparent z-30" />
              <div className="pointer-events-none absolute right-0 top-0 h-full w-16 md:w-24 bg-gradient-to-l from-white to-transparent z-30" />
              <div
                className="flex gap-6 md:gap-10 animate-right"
                style={{ animationPlayState: "running" }}
              >
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/49-K5HL1pog.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/64-z2Y1HeW0.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/58-nmWCFsMm.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/51-B47aYGS2.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/54-BGtaf5iV.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/62-C_zM_02-.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/43-q9Tish5_.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/60-XQyGFJMd.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/53-Dvqnru4Q.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/44-AY9stljf.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/63-B6R3tWxg.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/59-BnoYFGbX.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/48-CZY4dfKQ.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/66-CERFhBla.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/47-EZrT_iBj.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/45-BaZ3LKWm.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/50-Did7i3G6.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/61-WfxWvZ3b.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/55-Dn1fdrTS.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/65-6YL_7-t1.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/52-BWEEPMFV.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/46-CPzTqJnl.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/57-Dc8MLQdj.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/56-BYiE8pjz.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/49-K5HL1pog.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/64-z2Y1HeW0.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/58-nmWCFsMm.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/51-B47aYGS2.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/54-BGtaf5iV.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/62-C_zM_02-.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/43-q9Tish5_.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/60-XQyGFJMd.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/53-Dvqnru4Q.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/44-AY9stljf.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/63-B6R3tWxg.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/59-BnoYFGbX.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/48-CZY4dfKQ.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/66-CERFhBla.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/47-EZrT_iBj.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/45-BaZ3LKWm.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/50-Did7i3G6.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/61-WfxWvZ3b.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/55-Dn1fdrTS.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/65-6YL_7-t1.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/52-BWEEPMFV.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/46-CPzTqJnl.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/57-Dc8MLQdj.png"
                />
                <img
                  alt="logo sekolah"
                  className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  src="https://ontime.qrion.id/assets/56-BYiE8pjz.png"
                />
              </div>
            </div>
          </div>
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n        @keyframes marquee-left {\n          0% { transform: translateX(0); }\n          100% { transform: translateX(-50%); }\n        }\n\n        @keyframes marquee-right {\n          0% { transform: translateX(-50%); }\n          100% { transform: translateX(0); }\n        }\n\n        .animate-left {\n          animation: marquee-left 20s linear infinite;\n        }\n\n        .animate-right {\n          animation: marquee-right 20s linear infinite;\n        }\n      ",
            }}
          />
        </section>
        <section className="relative pt-20 pb-40 bg-white overflow-hidden">
          <img
            alt=""
            className="absolute left-20 -top-10 w-[700px] blur-[40px] pointer-events-none"
            src="https://ontime.qrion.id/assets/hijau-Cd9sT3GM.png"
          />
          <img
            alt=""
            className="absolute right-20 -top-10 w-[700px] blur-[40px] pointer-events-none"
            src="https://ontime.qrion.id/assets/merah-B0P4s8zb.png"
          />
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <div className="rounded-2xl border-4 border-[#33B77E] bg-[#E6FFF4] px-6 py-4 mb-8">
                  <h3 className="text-[#1F9D63] text-xl font-bold">
                    Cara Baru ( Ontime : Digital &amp; Otomatis )
                  </h3>
                </div>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="p-4 rounded-2xl bg-green-gradient">
                      <div className="w-8 h-8 text-[#1F9D63]">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 512 512"
                          className="w-full h-full"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M332.8 320h38.4c6.4 0 12.8-6.4 12.8-12.8V172.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-288 0h38.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zM496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">
                        Efisiensi Waktu Rekap: Naik 90%
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Buang waktu berjam-jam setiap bulan untuk rekap absensi,
                        validasi data.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-4 rounded-2xl bg-green-gradient">
                      <div className="w-8 h-8 text-[#1F9D63]">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 512 512"
                          className="w-full h-full"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">
                        Akurasi Data 100% &amp; Kedisiplinan Meningkat
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Monitoring real-time bukti kehadiran dan notifikasi
                        instan ke wali siswa.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-4 rounded-2xl bg-green-gradient">
                      <div className="w-8 h-8 text-[#1F9D63]">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 448 512"
                          className="w-full h-full"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">
                        Pelacakan Absensi Pelajaran yang Otomatis
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Sistem absensi by mapel dan by jam terintegrasi penuh.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="rounded-2xl border-4 border-[#FF8A8A] bg-[#FFECEC] px-6 py-4 mb-8">
                  <h3 className="text-[#E24A4A] text-xl font-bold">
                    Cara Lama : Manual &amp; Lambat
                  </h3>
                </div>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="p-4 rounded-2xl bg-red-gradient">
                      <div className="w-8 h-8 text-[#E24A4A]">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 512 512"
                          className="w-full h-full"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">
                        Kerugian Waktu Administrasi: 120+ Jam/Bulan
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Buang waktu berjam-jam setiap bulan untuk rekap manual.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-4 rounded-2xl bg-red-gradient">
                      <div className="w-8 h-8 text-[#E24A4A]">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 576 512"
                          className="w-full h-full"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">
                        Banyak Data Hilang &amp; Keterlambatan Tinggi
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Data absensi rawan hilang, tidak real-time, dan sulit
                        diverifikasi.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-4 rounded-2xl bg-red-gradient">
                      <div className="w-8 h-8 text-[#E24A4A]">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 512 512"
                          className="w-full h-full"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M48 48a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm448 16H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">
                        Sulit Melacak Absensi Pelajaran
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Data absensi pelajaran terpisah dan tidak terintegrasi.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="relative py-20 lg:py-20 overflow-hidden
      bg-gradient-to-b
      from-[#F2FBF7]
      via-[#DDF4EB]
      to-[#33B77E]"
        >
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-12 lg:mb-20">
              <h2 className="text-[#33B77E] text-3xl lg:text-5xl font-bold mb-4">
                Manajemen Absensi Terlengkap
              </h2>
              <h3 className="text-[#231F20] text-2xl lg:text-5xl font-bold mb-4 lg:mb-6">
                Untuk Sekolah Go Digital
              </h3>
              <p className="text-[#4A5568] text-sm lg:text-lg max-w-2xl mx-auto leading-relaxed px-4">
                Optimalkan manajemen absensi siswa dan guru sekolah anda.
                Beralih ke sistem monitoring absensi real-time dan terintegrasi.
              </p>
            </div>
            <div className="relative w-full max-w-4xl mx-auto">
              <div
                className="
            relative 
            flex flex-col items-center gap-6
            sm:block sm:h-[450px]
            lg:h-[600px] xl:h-[700px]
          "
              >
                <div
                  className="
                w-[80%] max-w-xs sm:max-w-none
                sm:absolute sm:right-10 sm:bottom-0 sm:w-[55%] lg:w-[50%]
                z-10
              "
                >
                  <img
                    alt="Dashboard Kalender Akademik"
                    className="w-full h-auto"
                    src="https://ontime.qrion.id/assets/dashboard1-DngUcMID.png"
                  />
                </div>
                <div
                  className="
                w-[85%] max-w-sm sm:max-w-none
                sm:absolute sm:left-10 sm:top-0 sm:w-[55%] lg:w-[50%]
                z-20
              "
                >
                  <img
                    alt="Dashboard Monitoring Absensi"
                    className="w-full h-auto rounded-lg lg:rounded-xl shadow-lg lg:shadow-xl"
                    src="https://ontime.qrion.id/assets/dashboard2-BcWwbjmq.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <OntimeFeatureCarousel />
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#F0FAF6] to-[#36C48A]">
          <img
            className="absolute -top-10 -left-28 w-[260px] md:w-[600px] opacity-30 pointer-events-none"
            src="https://ontime.qrion.id/assets/lingkir-DtxYxLT5.png"
          />
          <img
            className="absolute top-[55%] -right-32 w-[300px] md:w-[700px] opacity-30 pointer-events-none"
            src="https://ontime.qrion.id/assets/lingkan-bDArbtRk.png"
          />
          <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8">
            <div className="text-center pt-20 md:pt-32 pb-16 md:pb-24">
              <h2 className="text-2xl md:text-5xl font-bold text-[#33B77E] mb-4 leading-tight">
                Ciptakan Ekosistem Sekolah yang{" "}
                <br className="hidden md:block" />
                Sinergis dan Produktif
              </h2>
              <p className="text-sm md:text-xl text-[#434343] mx-auto max-w-xl md:max-w-3xl leading-relaxed">
                Optimalkan manajemen absensi siswa dan guru sekolah anda.
                Beralih ke sistem monitoring absensi real-time dan terintegrasi.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 pb-20 md:pb-32">
              <div className="border-4 border-[#33B77E] rounded-xl md:rounded-2xl p-6 md:p-8 bg-white shadow-sm">
                <h3 className="text-xl md:text-2xl font-bold text-[#33B77E] mb-1">
                  Kepala Sekolah
                </h3>
                <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-6">
                  Monitor Kualitas Sekolah dalam Genggaman
                </p>
                <ul className="list-disc list-inside space-y-2 md:space-y-3 text-sm md:text-base">
                  <li>Executive Dashboard</li>
                  <li>Laporan Kinerja Objektif</li>
                  <li>Pengawasan Terpusat</li>
                </ul>
              </div>
              <div className="border-4 border-[#33B77E] rounded-xl md:rounded-2xl p-6 md:p-8 bg-white shadow-sm">
                <h3 className="text-xl md:text-2xl font-bold text-[#33B77E] mb-1">
                  Guru &amp; Staff
                </h3>
                <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-6">
                  Hentikan Lembur Administrasi
                </p>
                <ul className="list-disc list-inside space-y-2 md:space-y-3 text-sm md:text-base">
                  <li>Auto-Rekapitulasi</li>
                  <li>Laporan Siap Cetak</li>
                  <li>Manajemen Piket Digital</li>
                </ul>
              </div>
              <div className="border-4 border-[#33B77E] rounded-xl md:rounded-2xl p-6 md:p-8 bg-white shadow-sm">
                <h3 className="text-xl md:text-2xl font-bold text-[#33B77E] mb-1">
                  Orang Tua Siswa
                </h3>
                <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-6">
                  Rasa Aman &amp; Monitoring Anak
                </p>
                <ul className="list-disc list-inside space-y-2 md:space-y-3 text-sm md:text-base">
                  <li>Notifikasi WhatsApp</li>
                  <li>Riwayat Kehadiran Transparan</li>
                </ul>
              </div>
            </div>
            <div className="text-center pb-24 md:pb-32">
              <h3 className="text-2xl md:text-4xl font-bold text-[#33B77E] mb-12 md:mb-16">
                Metode Absensi
              </h3>
              <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-24">
                <div className="flex flex-col items-center">
                  <img
                    className="drop-shadow-2xl mb-4"
                    src="https://ontime.qrion.id/assets/Tap-V6sYgjRU.png"
                    style={{ width: 180 }}
                  />
                  <span className="text-lg md:text-2xl font-bold">
                    Tap Card
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    className="drop-shadow-2xl mb-4"
                    src="https://ontime.qrion.id/assets/Mobile%20Absensi-DyC5Py2p.png"
                    style={{ width: 160 }}
                  />
                  <span className="text-lg md:text-2xl font-bold">Mobile</span>
                </div>
              </div>
            </div>
            <div className="relative pb-32 md:pb-40">
              <img
                className="
              absolute 
              left-1/2 
              top-16 md:top-40 
              -translate-x-1/2 
              w-[320px] md:w-[900px]
              pointer-events-none
            "
                src="https://ontime.qrion.id/assets/ling-DvS3sVi2.png"
              />
              <div className="text-center mb-12 md:mb-20">
                <h3 className="text-xl md:text-3xl font-bold text-[#33B77E] mb-2">
                  Terintegrasi Dengan QRION
                </h3>
                <p className="text-sm md:text-xl text-gray-600 mx-auto max-w-xs md:max-w-md">
                  Ekosistem Digitalisasi Sekolah Terlengkap
                </p>
              </div>
              <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-40 mb-16">
                <div className="flex flex-col items-center">
                  <span className="text-xs md:text-base px-3 py-1 rounded-full bg-white border-2 border-[#33B77E] text-[#33B77E] mb-4">
                    QRION For Teacher
                  </span>
                  <img
                    className="w-[130px] md:w-[260px] drop-shadow-2xl"
                    src="https://ontime.qrion.id/assets/Teacher-Dygtx9qD.png"
                  />
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-xs md:text-base px-3 py-1 rounded-full bg-white border-2 border-[#33B77E] text-[#33B77E] mb-4">
                    QRION Mobile
                  </span>
                  <img
                    className="w-[250px] md:w-[520px] drop-shadow-2xl"
                    src="https://ontime.qrion.id/assets/Mobile-CgaIEbeK.png"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center">
                <span className="px-6 py-2 mb-4 rounded-full bg-white border-2 border-[#33B77E] text-[#33B77E] text-sm md:text-base font-bold">
                  QRION Ekosistem
                </span>
                <img
                  className="w-[260px] md:w-[520px] drop-shadow-2xl"
                  src="https://ontime.qrion.id/assets/ekosistem-CvIHVSTy.png"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 md:py-24 bg-[#E9FBF3] overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-black mb-3 md:mb-4 leading-tight">
                Perlu Kebutuhan Custom <br className="hidden sm:block" />
                Untuk <span className="text-[#33B77E]">Sekolah Anda?</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-10 md:mb-16">
                Hubungi Edutech Konsultan Kami
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 max-w-5xl mx-auto">
              <div className="bg-white rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 shadow-lg">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#33B77E] mb-3 md:mb-4">
                  Custom
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-6 md:mb-10">
                  Solusi yang disesuaikan untuk kebutuhan spesifik sekolah Anda
                </p>
                <a
                  href="https://wa.me/628xxxxxxxxxx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  inline-flex items-center justify-center gap-2
                  bg-[#33B77E] text-white
                  px-5 py-3 sm:px-6 sm:py-3.5
                  rounded-full text-sm sm:text-base font-semibold
                  hover:bg-[#249a67] transition-all w-full sm:w-auto
                "
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 448 512"
                    className="text-lg sm:text-xl"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                  </svg>
                  Konsultasi Gratis
                </a>
              </div>
              <div className="bg-white rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 shadow-lg">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#33B77E] mb-3 md:mb-4">
                  QRION Ekosistem
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-6 md:mb-10">
                  Versi terlengkap QRION (Oncard, Ontuition, Ontime, Onclass)
                </p>
                <a
                  href="https://wa.me/628xxxxxxxxxx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  inline-flex items-center justify-center gap-2
                  bg-[#33B77E] text-white
                  px-5 py-3 sm:px-6 sm:py-3.5
                  rounded-full text-sm sm:text-base font-semibold
                  hover:bg-[#249a67] transition-all w-full sm:w-auto
                "
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 448 512"
                    className="text-lg sm:text-xl"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                  </svg>
                  Konsultasi Gratis
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="-mb-20 py-28 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center font-bold mb-20">
              <p className="text-gray-600 text-2xl sm:text-3xl mb-3">
                Dipercaya berbagai sekolah &amp; yayasan di Indonesia
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-[#33B77E] mb-6">
                Otomatisasi Absensi Sekolah <br className="hidden sm:block" />
                Anda dengan Ontime
              </h2>
              <a className="text-gray-700 hover:text-[#33B77E] text-base font-medium cursor-pointer">
                Lihat Cerita Mitra Kami
              </a>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              <div className="cursor-pointer relative rounded-3xl overflow-hidden shadow-xl group">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  src="https://img.youtube.com/vi/NlU_hVsmBek/maxresdefault.jpg"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition" />
              </div>
              <div>
                <h3 className="text-4xl font-bold text-[#33B77E] mb-6">
                  Digitalisasi Absensi Sekolah yang Lebih Efisien
                </h3>
                <p className="text-gray-600 text-lg mb-8">
                  Dengan QRION, sistem absensi kini beralih ke format digital
                  yang lebih praktis.
                </p>
                <button className="bg-[#33B77E] text-white px-8 py-4 rounded-full hover:bg-[#249a67] transition">
                  Selengkapnya
                </button>
              </div>
            </div>
            <div className="overflow-x-auto scrollbar-hide pb-4">
              <div className="flex gap-6 w-max px-2">
                <div className="w-72 shrink-0">
                  <div className="cursor-pointer relative rounded-2xl overflow-hidden shadow-lg group">
                    <img
                      className="w-full h-44 object-cover group-hover:scale-105 transition duration-300"
                      src="https://img.youtube.com/vi/NlU_hVsmBek/maxresdefault.jpg"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition" />
                    <span className="absolute bottom-3 right-3 bg-black/60 text-white px-3 py-1 rounded-full text-xs">
                      1:20
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-[#33B77E] mt-3">
                    Digitalisasi Absensi Sekolah yang Lebih Efisien
                  </h4>
                  <p className="text-gray-600 text-sm mb-2">
                    Sebelumnya, proses absensi sekolah masih dilakukan secara
                    manual...
                  </p>
                  <button className="text-sm font-semibold text-white bg-[#33B77E] px-5 py-2 rounded-full hover:bg-[#249a67]">
                    Selengkapnya
                  </button>
                </div>
                <div className="w-72 shrink-0">
                  <div className="cursor-pointer relative rounded-2xl overflow-hidden shadow-lg group">
                    <img
                      className="w-full h-44 object-cover group-hover:scale-105 transition duration-300"
                      src="https://img.youtube.com/vi/laW5bMPIlhY/maxresdefault.jpg"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition" />
                    <span className="absolute bottom-3 right-3 bg-black/60 text-white px-3 py-1 rounded-full text-xs">
                      1:20
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-[#33B77E] mt-3">
                    Digitalisasi Absensi Sekolah yang Lebih Efisien
                  </h4>
                  <p className="text-gray-600 text-sm mb-2">
                    Sebelumnya, proses absensi sekolah masih dilakukan secara
                    manual...
                  </p>
                  <button className="text-sm font-semibold text-white bg-[#33B77E] px-5 py-2 rounded-full hover:bg-[#249a67]">
                    Selengkapnya
                  </button>
                </div>
                <div className="w-72 shrink-0">
                  <div className="cursor-pointer relative rounded-2xl overflow-hidden shadow-lg group">
                    <img
                      className="w-full h-44 object-cover group-hover:scale-105 transition duration-300"
                      src="https://img.youtube.com/vi/_V9-UtVLWus/maxresdefault.jpg"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition" />
                    <span className="absolute bottom-3 right-3 bg-black/60 text-white px-3 py-1 rounded-full text-xs">
                      1:20
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-[#33B77E] mt-3">
                    Digitalisasi Absensi Sekolah yang Lebih Efisien
                  </h4>
                  <p className="text-gray-600 text-sm mb-2">
                    Sebelumnya, proses absensi sekolah masih dilakukan secara
                    manual...
                  </p>
                  <button className="text-sm font-semibold text-white bg-[#33B77E] px-5 py-2 rounded-full hover:bg-[#249a67]">
                    Selengkapnya
                  </button>
                </div>
                <div className="w-72 shrink-0">
                  <div className="cursor-pointer relative rounded-2xl overflow-hidden shadow-lg group">
                    <img
                      className="w-full h-44 object-cover group-hover:scale-105 transition duration-300"
                      src="https://img.youtube.com/vi/fFs9Hc7ttQg/maxresdefault.jpg"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition" />
                    <span className="absolute bottom-3 right-3 bg-black/60 text-white px-3 py-1 rounded-full text-xs">
                      1:20
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-[#33B77E] mt-3">
                    Digitalisasi Absensi Sekolah yang Lebih Efisien
                  </h4>
                  <p className="text-gray-600 text-sm mb-2">
                    Sebelumnya, proses absensi sekolah masih dilakukan secara
                    manual...
                  </p>
                  <button className="text-sm font-semibold text-white bg-[#33B77E] px-5 py-2 rounded-full hover:bg-[#249a67]">
                    Selengkapnya
                  </button>
                </div>
                <div className="w-72 shrink-0">
                  <div className="cursor-pointer relative rounded-2xl overflow-hidden shadow-lg group">
                    <img
                      className="w-full h-44 object-cover group-hover:scale-105 transition duration-300"
                      src="https://img.youtube.com/vi/VCV6DLLUvtM/maxresdefault.jpg"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition" />
                    <span className="absolute bottom-3 right-3 bg-black/60 text-white px-3 py-1 rounded-full text-xs">
                      1:20
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-[#33B77E] mt-3">
                    Digitalisasi Absensi Sekolah yang Lebih Efisien
                  </h4>
                  <p className="text-gray-600 text-sm mb-2">
                    Sebelumnya, proses absensi sekolah masih dilakukan secara
                    manual...
                  </p>
                  <button className="text-sm font-semibold text-white bg-[#33B77E] px-5 py-2 rounded-full hover:bg-[#249a67]">
                    Selengkapnya
                  </button>
                </div>
                <div className="w-72 shrink-0">
                  <div className="cursor-pointer relative rounded-2xl overflow-hidden shadow-lg group">
                    <img
                      className="w-full h-44 object-cover group-hover:scale-105 transition duration-300"
                      src="https://img.youtube.com/vi/jwZSBUKVPaQ/maxresdefault.jpg"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition" />
                    <span className="absolute bottom-3 right-3 bg-black/60 text-white px-3 py-1 rounded-full text-xs">
                      1:20
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-[#33B77E] mt-3">
                    Digitalisasi Absensi Sekolah yang Lebih Efisien
                  </h4>
                  <p className="text-gray-600 text-sm mb-2">
                    Sebelumnya, proses absensi sekolah masih dilakukan secara
                    manual...
                  </p>
                  <button className="text-sm font-semibold text-white bg-[#33B77E] px-5 py-2 rounded-full hover:bg-[#249a67]">
                    Selengkapnya
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-14 md:py-20 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <OntimePricingTiers />
            <div className="mt-16 md:mt-24">
              <h3 className="text-xl sm:text-sm md:text-3xl font-bold mb-6 md:mb-10">
                Tingkatkan Produktivitas dengan{" "}
                <span className="text-[#33B77E]">Add-On</span>
              </h3>
              <div className="space-y-4 max-w-3xl mx-auto">
                <div
                  className="
        flex items-start gap-3
        border-2 md:border-4 border-[#33B77E]
        rounded-xl md:rounded-2xl
        px-4 sm:px-6 py-4
        bg-white shadow-sm
      "
                >
                  <div className="mt-1">
                    <svg
                      viewBox="0 0 32 32"
                      fill="currentColor"
                      className="w-6 h-6 text-[#33B77E]"
                    >
                      <path d="M16 2.7c-7.3 0-13.3 6-13.3 13.3 0 2.3.6 4.5 1.7 6.4L2 30l7.9-2.1c1.9 1 4 1.6 6.1 1.6 7.3 0 13.3-6 13.3-13.3S23.3 2.7 16 2.7zm0 24.3c-1.9 0-3.8-.5-5.4-1.4l-.4-.2-4.7 1.3 1.3-4.6-.3-.5c-1-1.6-1.5-3.5-1.5-5.4 0-5.8 4.7-10.5 10.5-10.5S26.5 10.4 26.5 16 21.8 27 16 27zm5.8-7.9c-.3-.1-1.9-.9-2.2-1s-.5-.1-.7.1-.8 1-.9 1.2-.3.2-.6.1-1.3-.5-2.4-1.6c-.9-.8-1.6-1.9-1.8-2.2s0-.5.1-.7.3-.3.4-.5.2-.3.3-.5.1-.4 0-.6-.7-1.7-1-2.4-.5-.6-.7-.6h-.6c-.2 0-.6.1-.9.4s-1.2 1.2-1.2 2.9 1.2 3.4 1.4 3.6c.2.2 2.4 3.7 5.9 5.2.8.3 1.5.5 2 .7.8.3 1.6.2 2.2.1.7-.1 1.9-.8 2.2-1.6.3-.8.3-1.5.2-1.6s-.2-.2-.5-.3z" />
                    </svg>
                  </div>
                  <div className="text-left flex-1">
                    <h4 className="text-sm sm:text-base font-bold leading-snug">
                      Notifikasi ke WA Orang Tua
                    </h4>
                    <p className="mt-2 text-sm sm:text-base font-semibold text-[#33B77E]">
                      Rp 5.000.000 / Tahun
                    </p>
                  </div>
                </div>
                <div
                  className="
        flex items-start gap-3
        border-2 md:border-4 border-[#33B77E]
        rounded-xl md:rounded-2xl
        px-4 sm:px-6 py-4
        bg-white shadow-sm
      "
                >
                  <div className="mt-1">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-[#33B77E]"
                    >
                      <path d="M12 3L2 8v2h20V8L12 3zm-8 8v7h3v-7H4zm5 0v7h3v-7H9zm5 0v7h3v-7h-3zm5 0v7h3v-7h-3zM2 20v2h20v-2H2z" />
                    </svg>
                  </div>
                  <div className="text-left flex-1">
                    <h4 className="text-sm sm:text-base font-bold leading-snug">
                      Integrasi E-Channel
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">
                      (VA, Transfer Antar Bank, QRIS)
                    </p>
                    <p className="mt-2 text-sm sm:text-base font-semibold text-[#33B77E]">
                      Rp 2.000.000 / Instalasi
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative overflow-hidden py-14 md:py-20 bg-gradient-to-b from-white via-[#E8F5F0] to-[#33B77E]">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                'url("https://ontime.qrion.id/assets/bg-C8HFGTuP.png")',
              backgroundSize: "600px auto",
              backgroundPosition: "center bottom",
              backgroundRepeat: "repeat-x",
            }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <div>
              <h2 className="text-[#33B77E] font-bold text-2xl sm:text-3xl md:text-5xl mb-6 md:mb-8 leading-tight">
                Coba Ontime Gratis 14 Hari
              </h2>
              <div className="mb-10 md:mb-16">
                <button
                  className="
              border-2 border-[#33B77E] text-[#33B77E]
              font-semibold rounded-full
              px-6 py-2.5 sm:px-8 sm:py-3
              text-sm sm:text-base
              hover:bg-[#33B77E] hover:text-white
              transition-all duration-300
              w-full sm:w-auto
            "
                >
                  Coba Gratis
                </button>
              </div>
            </div>
            <div className="relative w-full max-w-5xl mx-auto">
              <div className="flex flex-col items-center gap-4 sm:hidden">
                <img
                  alt="Dashboard Monitoring Absensi"
                  className="w-full max-w-sm"
                  src="https://ontime.qrion.id/assets/dashboard2-BcWwbjmq.png"
                />
                <img
                  alt="Dashboard Kalender Akademik"
                  className="w-full max-w-sm"
                  src="https://ontime.qrion.id/assets/dashboard1-DngUcMID.png"
                />
              </div>
              <div className="hidden sm:block relative h-[400px] md:h-[500px] lg:h-[600px]">
                <div className="absolute right-0 bottom-0 w-[55%] md:w-[50%] z-10">
                  <img
                    alt="Dashboard Kalender Akademik"
                    src="https://ontime.qrion.id/assets/dashboard1-DngUcMID.png"
                  />
                </div>
                <div className="absolute left-0 top-0 w-[55%] md:w-[50%] z-20">
                  <img
                    alt="Dashboard Monitoring Absensi"
                    src="https://ontime.qrion.id/assets/dashboard2-BcWwbjmq.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export const ontime: ProductDesign = {
  page: () => <OntimePage />,
};
