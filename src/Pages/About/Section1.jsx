import React from "react";
import { MdVerified } from "react-icons/md";
import about1 from "../../assets/about1.webp";
import about2 from "../../assets/about2.webp";
import about3 from "../../assets/static2 2.webp";
import { useTranslation } from "react-i18next";

const Section1 = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language
  return (
    <>
      <section
        dir="ltr"
        className="  font-display text-slate-900  bg-seconda  "
      >
        <div className="relative min-h-screen flex items-center overflow-hidden py-20 px-6 lg:px-24">
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20   ">
            <div className="dot-pattern  w-full h-full text-secondary" />
          </div>
          <div className="  mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative flex items-center justify-center">
              <div className="absolute -top-10 -left-10 w-64 h-64 dot-pattern text-secondary/20 pointer-events-none" />
              <div className="relative w-full max-w-lg aspect-[4/5]">
                <div className="absolute top-0 left-0 w-3/4 h-3/4 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500 z-10">
                  <img
                    alt="About1"
                    className="w-full h-full object-cover"
                    src={about1}
                  />
                </div>
                <div className="absolute bottom-10 -left-12 w-2/3 h-2/3 rounded-2xl overflow-hidden shadow-2xl border-4 border-white  transform -rotate-3 hover:rotate-0 transition-transform duration-500 z-30">
                  <img
                    alt="Modern luxury hotel suite interior"
                    className="w-full h-full object-cover"
                    src={about3}
                  />
                </div>
                <div className="absolute top-20 -right-8 w-1/2 h-3/5 rounded-2xl overflow-hidden shadow-2xl border-4 border-white  transform rotate-6 hover:rotate-0 transition-transform duration-500 z-20">
                  <img
                    alt="Scenic view from hotel balcony"
                    className="w-full h-full object-cover"
                    src={about2}
                  />
                </div>
              </div>
              <div className="absolute -bottom-10  -right-12   w-48 h-48 dot-pattern text-secondary/10 pointer-events-none" />
            </div>
            <div dir={lang =="en"? "ltr":"rtl"} className="flex flex-col   space-y-8 lg:pl-12">
              <div className="space-y-4">
                <span className="inline-block px-4 py-1.5 bg-secondary text-white text-xs font-bold tracking-widest uppercase rounded-full">
                  {t("aboutSection.badge")}
                </span>
                <h1 className="text-5xl flex gap-2 lg:text-6xl font-display font-bold text-slate-900   leading-tight">
                  <span>{t("aboutSection.hotelName")} </span>
                  <span className="text-secondary font-normal">
                    {t("aboutSection.hotelHighlight")}
                  </span>
                </h1>
              </div>
              <div className="space-y-6">
                <p className="text-lg lg:text-xl leading-relaxed text-slate-600   font-light max-w-xl">
                  {t("aboutSection.paragraphOne")}
                </p>
                <p className="text-slate-500  leading-relaxed max-w-xl">
                  {t("aboutSection.paragraphTwo")}
                </p>
              </div>
              <div className="pt-10">
                <div className="inline-flex items-center space-x-6 p-6 rounded-2xl bg-white/50   backdrop-blur-sm border border-slate-200   shadow-lg">
                  <div className="flex flex-col">
                    <h4 className="text-xl font-display font-bold text-slate-900   border-b-2 border-primary/20 pb-1">
                      {t("aboutSection.teamTitle")}
                    </h4>
                    <p className="text-sm text-secondary font-medium mt-2 italic">
                      {t("aboutSection.teamSubtitle")}
                    </p>
                  </div>
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-slate-50  shadow-inner">
                    <span className="material-icons text-secondary text-3xl">
                      <MdVerified />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section1;
