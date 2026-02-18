import React from "react";
import { useTranslation } from "react-i18next";
import { GiCheckMark } from "react-icons/gi";
import { FiTrendingUp } from "react-icons/fi";

const WhyChooseUs = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const features = [
    {
      titleKey: "features.expertTeam.title",
      descriptionKey: "features.expertTeam.description",
      icon: <GiCheckMark />,
    },
    {
      titleKey: "features.customizedSolutions.title",
      descriptionKey: "features.customizedSolutions.description",
      icon: <GiCheckMark />,
    },
    {
      titleKey: "features.transparentReporting.title",
      descriptionKey: "features.transparentReporting.description",
      icon: <GiCheckMark />,
    },
  ];

  return (
    <section className="relative pb-20     overflow-hidden">
      <div className=" px-20 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center justify-center relative z-10">
        {/* Image + Badge */}
        <div className="order-2 lg:order-1 relative">
          <div className="relative group">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl ring-1 ring-gray-900/5  transform transition-transform duration-500 hover:scale-[1.01]">
              <img
                alt="Creative team brainstorming with sticky notes"
                className="w-full h-auto object-cover aspect-[10/9]"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdiDjrUNZkjtjY7sZ-4um1f5yWFhuQNGL4EnppwCyqXwccR2afjxqenm4n4SYum032DUegYhQHrt63lOxScPJpaNJ1dUzQicMO_D3f4owJByYm5KHB8SXouOHKaWpfAGbI9vKx-8Z4m4XkZKCsaVBZEfKJQpuKTICnJmoFk3lHS7i4leLH-lhIzKQioylBqxfgghMx-haN0IHZ-Cn8c8wk0Z8itNylAes9SGnsjGPQFmWEeTibxW8QdHU0ATNDPpieId1tiPjRuWkj"
              />
              <div className="absolute inset-0 bg-primary/10  mix-blend-multiply transition-opacity duration-300 group-hover:opacity-0" />
            </div>
            <div className="hidden lg:flex absolute -bottom-8 -right-8 bg-white  p-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100   items-center gap-4 max-w-xs animate-pulse-slow">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-third/10 flex items-center justify-center">
                <span className="material-icons-round text-secondary text-2xl">
                  <FiTrendingUp />
                </span>
              </div>
              <div>
                <p className="text-sm font-bold text-secondary  ">
                  {t("badge.title")}
                </p>
                <p className="text-xs text-gray-500  ">{t("badge.subtitle")}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Text + Features */}
        <div className="order-1 lg:order-2 flex flex-col justify-center">
          <div className="mb-8">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-third   border border-gray-200   shadow-sm text-xs font-bold tracking-widest text-primary  uppercase mb-6">
              {t("section.subtitle")}
            </span>
            <h2 className="text-4xl md:text-5xl f font-black text-transparent bg-clip-text bg-gradient-to-r from-black/80 via-third to-black/80 tracking-tight leading-[1.15] mb-6">
              {t("section.title")}
            </h2>
            <p className="text-lg  text-secondary font-medium leading-relaxed">
              {t("section.description")}
            </p>
          </div>

          <div className="space-y-8">
            {features.map((item, index) => (
              <div key={index} className="flex items-start gap-5 group">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-third text-white shadow-lg shadow-primary/20   transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <span className="material-icons-round text-2xl">
                      {item.icon}
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2    transition-colors">
                    {t(item.titleKey)}
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-medium text-[15px]">
                    {t(item.descriptionKey)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
