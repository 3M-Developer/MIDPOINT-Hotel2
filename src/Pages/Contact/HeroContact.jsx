import React, { useContext } from "react";
import ContactHeroImg from "../../assets/ContactHeroImg.webp";
import { HiMiniRocketLaunch } from "react-icons/hi2";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { SettingsContext } from "../../Context/SettingsContext";

const HeroContact = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const { currency, siteName_ar, siteName_en } = useContext(SettingsContext);
  return (
    <>
      <Helmet>
        <title>
          {lang === "en" ? siteName_en : siteName_ar ?? siteName_en} |{" "}
          {lang === "en" ? "Contact Us" : "تواصل معنا" ?? "Contact Us"}
        </title>
      </Helmet>
      <section
        className="relative pt-20 pb-32 overflow-hidden 
      
      "
      >
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute top-40 -left-20 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl -z-10" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-6 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-third/15 w-fit border border-third/50">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-third  ">
                  Accepting New Projects
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter text-text-main ">
                Let's Talk <br />
                <span className="text-third relative inline-block ">
                  Growth
                  <svg
                    className="absolute w-full h-3   left-0 text-third opacity-30 "
                    fill="none"
                    viewBox="0 0 200 9"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.00025 6.99997C25.7501 2.99995 83.2886 0.39999 198.003 2.00002"
                      stroke="currentColor"
                      strokeWidth={3}
                    />
                  </svg>
                </span>
              </h1>
              <p className="text-lg md:text-xl text-text-muted dark:text-gray-400 max-w-lg leading-relaxed">
                Ready to scale your brand? Our team of strategists and creators
                is ready to build your digital future. Tell us about your goals.
              </p>
              <div className="flex flex-wrap gap-8 mt-4 pt-8 border-t border-gray-100 dark:border-white/5">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-text-main ">
                    150+
                  </span>
                  <span className="text-sm text-text-muted">
                    Projects Launched
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-text-main ">
                    98%
                  </span>
                  <span className="text-sm text-text-muted">
                    Client Retention
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-text-main ">
                    24/7
                  </span>
                  <span className="text-sm text-text-muted">Support</span>
                </div>
              </div>
            </div>
            <div
              className="relative hidden lg:block h-full min-h-[500px] w-full bg-gray-100 dark:bg-white/5 rounded-2xl overflow-hidden shadow-2xl group"
              data-alt="Abstract 3D digital wave visualization representing growth and connectivity"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                data-alt="Abstract green 3D geometric shapes floating in space"
                style={{
                  backgroundImage: `url(${ContactHeroImg})`,
                }}
              />
              <div className="absolute bottom-8 left-8 right-8  bg-primary/10   backdrop-blur-lg p-6 rounded-xl shadow-lg border border-white/20">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg text-third  dark:bg-white/10">
                    <span className="material-symbols-outlined">
                      <HiMiniRocketLaunch size={30} className="text-primary" />
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary ">
                      Start your journey
                    </h3>
                    <p className="text-sm text-text-muted text-primary/50">
                      Usually replies within 2 hours.
                    </p>
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

export default HeroContact;
