import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { SettingsContext } from "../../Context/SettingsContext";
import { useTranslation } from "react-i18next";
import bg from "../../assets/rooms/bg.webp";
import bgR from "../../assets/rooms/bgR.webp";
import { GoDotFill } from "react-icons/go";
import { motion } from 'framer-motion';

const RoomsHero = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 24,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const { currency, siteName_ar, siteName_en } = useContext(SettingsContext);
  return (
    <>
      <Helmet>
        <title>
          {lang === "en" ? siteName_en : (siteName_ar ?? siteName_en)} |{" "}
          {lang === "en" ? "Rooms" : ("الغرف" ?? "Rooms")}
        </title>
      </Helmet>
      <div
        className={`relative mb-4 h-[70vh] bg-cover bg-position-[40%,40vh] ltr:bg-(image:--bg) rtl:bg-(image:--bgR)`}
        style={{ "--bg": `url(${bg})`, "--bgR": `url(${bgR})` }}
      >
        <div className="absolute inset-0 flex items-center justify-start  ltr:bg-linear-to-r  rtl:bg-linear-to-l  from-black via-black/70">
          <div className=" max-w-7xl      flex   lg:px-12 mb-5">
            <motion.div
              className="max-w-3xl"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
            >
              {/* Page Tag */}
              <motion.p
                variants={itemVariants}
                className="text-primary/70 bg-secondary/50 border border-third p-2 rounded-3xl flex items-center w-fit font-semibold tracking-widest text-xs uppercase"
              >
                <span className="animate-pulse text-lg text-third">
                  <GoDotFill />
                </span>
                {t("rooms.pageTag")}
              </motion.p>

              {/* Title */}
              <motion.h3
                variants={itemVariants}
                className="text-5xl text-primary md:text-7xl font-black mb-6 leading-[1.1] tracking-tight"
              >
                {t("rooms.pageTitle")}
              </motion.h3>

              {/* Description */}
              <motion.p
                variants={itemVariants}
                className="text-2xl text-primary/70 border-primary border-s-4 px-2 w-11/12 leading-relaxed"
              >
                {t("rooms.pageDescription")}
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomsHero;
