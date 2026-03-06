import React from "react";

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import image from "../../assets/heroVideos/UproofCafeSection-compressed.mp4";
import uproofLogo from "../../assets/uproof.webp"
import AppImage from "./../../Components/AppImage";
const CafeSection = () => {
  const { t } = useTranslation();
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <>
      <section className="lg:h-150 pb-15 lg:pb-0 mx-4 rounded-2xl lg:rounded-2xl mb-10 relative bg-linear-to-r from-secondary via-black to-secondary  flex  text-primary bg-fill">
        <motion.div
          className="   grid lg:grid-cols-2 justify-center items-center    text-center bg-cover"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <video
            className="h-full w-full object-cover rounded-t-2xl lg:rounded-e-none lg:rounded-s-2xl"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={image} type="video/mp4" />
          </video>
 
          <div className="flex flex-col gap-8 mt-7 px-4 lg:mt-0">
            <motion.p className="flex items-center justify-center gap-3 text-3xl font-bold" variants={itemVariants}>
                <AppImage className="w-30 rounded rtl:order-1" src={uproofLogo}/>
              <span>{t("cafeSection.title")}</span>
            </motion.p>

            <motion.p className="text-xl font-bold" variants={itemVariants}>
              {t("cafeSection.description")}
            </motion.p>

            <motion.div variants={itemVariants}>
              <a href="http://scanned.page/p/CimAj1" target="_blank" className="inline-block group relative px-10 py-5 bg-green   text-primary  hover:text-green rounded-full font-bold overflow-hidden transition-all  duration-800">
                <span className="relative z-10 uppercase tracking-widest text-sm">
                  {t("cafeSection.seeMenu")}
                </span>

                <div className="absolute   bg-primary top-full left-full  w-full h-full   group-hover:inset-0 transition-all duration-800 rounded-full"></div>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default CafeSection;
