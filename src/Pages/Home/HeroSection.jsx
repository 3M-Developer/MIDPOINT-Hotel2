import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { ApiAuthContext } from "../../Context/AuthContext";
import { motion } from "framer-motion";
import { FaArrowCircleRight, FaArrowRight, FaPlus } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
import { Helmet } from "react-helmet";
import { SettingsContext } from "../../Context/SettingsContext";
import Loader from "../../Components/Loader";
import AppImage from "./../../Components/AppImage";
import { MdBolt } from "react-icons/md";
import { Link } from "react-router-dom";
// import effect from "../../assets/effect-1.png";

import { HiOutlineRocketLaunch } from "react-icons/hi2";
import slider from "./Slider";

const HeroSection = () => {
  // const [slider, setSlider] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const { t, i18n } = useTranslation();
  console.log(slider);

  const { currency, siteName_ar, siteName_en, favicon } =
    useContext(SettingsContext);

  const { baseUrl, XApiKey, XTenantID, defaultLang } =
    useContext(ApiAuthContext);

  const lang = i18n.language;

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.15,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  const floatImage = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1 },
    },
  };

  return (
    <>
      <Helmet>
        <title>
          {lang === "en" ? siteName_en : (siteName_ar ?? siteName_en)} |{" "}
          {lang === "en" ? "Home" : ("الرئيسية" ?? "Home")}
        </title>
      </Helmet>

      <motion.div
        className="bg-green  relative  min-h-screen  min-h-screen h-screen   w-full"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <div
          style={{ backgroundImage: `url(${slider[0].banner_en})` }}
          className="relative bg-cover min-h-full flex   items-center justify-center px-6"
        >
          {/* Background Effects */}
          <motion.div
            className="absolute flex justify-center items-center bg-black/50 inset-0 overflow-hidden  "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <svg
              className="absolute w-full h-full opacity-20"
              fill="none"
              viewBox="0 0 1440 800"
            >
              <path
                className="text-third abstract-wave rotate-50 translate-x-36"
                d="M-100 400C100 200 300 600 500 400C700 200 900 600 1100 400C1300 200 1500 600 1700 400"
                stroke="currentColor"
                strokeWidth={4}
              />
            </svg>

            <motion.div
              className="order-1   absolute z-10 lg:order-0 w-full flex flex-col justify-center items-center gap-3 text-center z  space-y-8"
              variants={fadeLeft}
            >
              <motion.div
                variants={fadeUp}
                className="relative    z-9999999999999 space-y-4 mx-4 lg:mx-25 px-3 py-5 rounded-3xl   "
              >
                <h2 className=" font-montserrat text-[70px] tracking-[0.3em] leading-20 line-he text-shadow-2xs text-shadow-primary text-primary  ">
                  {
                    (
                      slider[0][`title_${lang}`] ??
                      slider[0][`title_${defaultLang}`]
                    )?.split(" ")[0]
                  }
                  <span className="text-primary text-shadow-2xs font-montserrat leading-20 text-shadow-primary">
                    {" "}
                    {(
                      slider[0][`title_${lang}`] ??
                      slider[0][`title_${defaultLang}`]
                    )
                      ?.split(" ")
                      .slice(1)
                      .join(" ")}
                  </span>
                </h2>

                <p className="text-sm lg:text-xl px-2 lg:px-15 md:text-md w-full lg:w-full text-primary font-montserrat font-bold mx-auto leading-relaxed tracking-widest">
                  {slider[0][`short_description_${lang}`] ??
                    slider[0][`short_description_${defaultLang}`]}
                </p>
              </motion.div>
              <div className="flex flex-wrap gap-8  ">
                <Link to='/rooms'  className="group relative px-10 py-5 bg-primary/20 backdrop-blur-lg   text-primary   hover:text-green rounded-full font-bold overflow-hidden transition-all  duration-800">
                  <span className="relative z-10 uppercase tracking-widest text-sm">
                    {t("ViewRooms")}
                  </span>

                  <div className="absolute   bg-primary top-full left-full  w-full h-full   group-hover:inset-0 transition-all duration-800 rounded-full"></div>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default HeroSection;
