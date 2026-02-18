import React from "react";
import img1 from "../../assets/static2 1.webp";
import img2 from "../../assets/static2 2.webp";
import { FaStar } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const StaticSection2 = () => {
  const { t } = useTranslation();
  return (
    <>
      <svg className="absolute" height="0" width="0">
        <defs>
          <clipPath clipPathUnits="objectBoundingBox" id="organic-path-1">
            <path d="M0.1,0.2 C0.2,0.05 0.4,0 0.6,0.05 C0.8,0.1 0.95,0.3 1,0.5 C1,0.75 0.85,0.95 0.6,1 C0.35,1.05 0.1,0.9 0.05,0.7 C0,0.5 -0.05,0.35 0.1,0.2"></path>
          </clipPath>
        </defs>
      </svg>
      <section
        style={{
          backgroundImage:
            "radial-gradient(rgba(225, 29, 72, 0.15) 1.5px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
        className="relative min-h-screen flex items-center justify-center py-24 px-6 lg:px-12 overflow-hidden"
      >
        <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none"></div>
        <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] blob-red pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] blob-orange pointer-events-none"></div>
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-5 relative flex items-center justify-center order-2 lg:order-1">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-secondary/10 blur-[100px] rounded-full"></div>
            <div className="relative w-full aspect-[4/5] max-w-md">
              <div className="absolute inset-0 bg-red-gradient p-1 rounded-hero-organic glow-shadow transform rotate-3 scale-105">
                <div className="w-full h-full   rounded-hero-organic overflow-hidden">
                  <img
                    alt="Luxury beach pathway"
                    className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                    src={img1}
                  />
                </div>
              </div>
              <div className="absolute -bottom-12 -left-8 w-2/3 aspect-square  rounded-hero-organic-alt shadow-2xl transform -rotate-6">
                <div className="w-full h-full rounded-hero-organic-alt overflow-hidden">
                  <img
                    alt="Stunning sunset over ocean"
                    className="w-full h-full object-cover"
                    src={img2}
                  />
                </div>
              </div>
              <div className="absolute top-12 -right-16 backdrop-blur-2xl p-4 rounded-3xl shadow-2xl flex items-center gap-3 max-w-[200px] animate-float">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center  ">
                  <span className="material-symbols-outlined text-primary text-xl">
                    <FaStar />
                  </span>
                </div>
                <div className="text-xs">
                  <p className="font-bold">{t("staticSection2.premiumTitle")}</p>
                  <p className="opacity-70">{t("staticSection2.premiumSubtitle")}</p>
                </div>
              </div>
              <div className="absolute bottom-20 -right-8 backdrop-blur-2xl px-5 py-3 rounded-full shadow-2xl flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse"></span>
                <span className="text-sm font-semibold uppercase tracking-widest">
                  {t("staticSection2.availability")}
                </span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 flex flex-col items-start space-y-10 order-1 lg:order-2 lg:pl-12">
            <div className="relative">
              <span className="text-xs font-black uppercase tracking-[1em] bg-secondary  w-fit p-3 rounded-3xl text-primary mb-2 block">
                {t("staticSection2.badge")}
              </span>
              <h1 className="editorial-spacing leading-[0.9] flex flex-col">
                <span className="text-6xl lg:text-[10rem] font-extrabold text-slate-300/50   -ml-1 select-none">
                  {t("staticSection2.hotelName")}
                </span>
                 
                  <span className="text-5xl flex gap-2 lg:text-8xl  text-secondary  tracking-widest relative ltr:-mt-8  ltr:lg:-mt-15 z-20">
                    <span className="rtl:order-1 order-0 ltr:font-black">{t("staticSection2.luxury")}{" "}</span>
                    <span className="text-secondary rtl:font-black rtl:order-0 order-1 italic font-serif font-light">
                      {t("staticSection2.hotel")}
                    </span>
                  </span>
                 
              </h1>
            </div>
            <div className="max-w-xl space-y-6">
              <p className="text-lg lg:text-xl text-slate-600   font-light leading-relaxed">
                {t("staticSection2.description")} {""}
                <span className="font-semibold text-secondary  ">
                  {t("staticSection2.descriptionHighlight")}
                </span>
              </p>
              <div className="flex flex-wrap gap-8 items-center">
                <button className="group relative px-10 py-5 bg-green   text-primary  hover:text-green rounded-full font-bold overflow-hidden transition-all  duration-800">
                  <span className="relative z-10 uppercase tracking-widest text-sm">
                    {t("staticSection2.cta")}
                  </span>

                  <div className="absolute   bg-primary top-full left-full  w-full h-full   group-hover:inset-0 transition-all duration-800 rounded-full"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StaticSection2;
