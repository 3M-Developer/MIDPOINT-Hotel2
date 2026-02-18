import React, { useContext } from "react";
import { MdToken } from "react-icons/md";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { HiRocketLaunch } from "react-icons/hi2";
import { IoMdPlayCircle } from "react-icons/io";
import aboutHeroImg from "../../assets/aboutHeroImg.webp";
import { SettingsContext } from "../../Context/SettingsContext";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GoDotFill } from "react-icons/go";

const AboutHero = () => {
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
          {lang === "en" ? "About" : ("من نحن" ?? "About")}
        </title>
      </Helmet>

      <div
        className={`relative mb-4 h-[80vh] bg-cover bg-position-[40%,40vh]  bg-(image:--bg)  `}
        style={{ "--bg": `url(${aboutHeroImg})` }}
      >
        <div className="absolute inset-0 flex items-center justify-center   bg-radial  from-secondary/60 ">
          <div className="     text-center  ">
            <motion.div
              className=" flex flex-col justify-center items-center"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
            >
              {/* Page Tag */}
              <motion.p
                variants={itemVariants}
                className="text-primary/70  text-center  bg-secondary/50 border border-third p-2 rounded-3xl flex items-center w-fit font-semibold tracking-widest text-xs uppercase"
              >
                <span className="animate-pulse text-lg text-third">
                  <GoDotFill />
                </span>
                {t("aboutIntro.subtitle")}
              </motion.p>

              {/* Title */}
              <motion.h3
                variants={itemVariants}
                className="text-5xl text-primary md:text-7xl font-black mb-6 leading-[1.1] tracking-tight"
              >
                 {t("aboutIntro.title")}
              </motion.h3>

              {/* Description */}
              <motion.p
                variants={itemVariants}
                className="text-2xl text-primary/70   px-2 w-11/12 leading-relaxed"
              >
                 {t("aboutIntro.description")}
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutHero;
