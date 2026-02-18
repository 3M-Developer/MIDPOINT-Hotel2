import React, { useState, useMemo } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { Link, useNavigate } from "react-router-dom";
import { BiCategory } from "react-icons/bi";
 
import { motion } from "framer-motion";
// import { fadeIn } from "../../Framermotion/Varient";
import gym1 from "../../assets/gym1.webp";
import gym2 from "../../assets/gym2.webp";
import gym3 from "../../assets/gym3.webp";
import { useTranslation } from "react-i18next";

const MotionSection = motion.section;

const GymSection = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const items = useMemo(
    () => [
      {
        slug_en: "fitness-center",
        slug_ar: "مركز-اللياقة",
        banner_en: gym1,
        banner_ar: gym1,
        title_en: "Fitness Center",
        title_ar: "مركز اللياقة البدنية",
      },
      {
        slug_en: "personal-training",
        slug_ar: "تدريب-شخصي",
        banner_en: gym2,
        banner_ar: gym2,
        title_en: "Personal Training",
        title_ar: "تدريب شخصي",
      },
      {
        slug_en: "yoga-and-wellness",
        slug_ar: "يوجا-واسترخاء",
        banner_en: gym3,
        banner_ar: gym3,
        title_en: "Yoga & Wellness",
        title_ar: "اليوغا والاسترخاء",
      },
    ],
    [],
  );

  return (
    <>
      {/* Mobile (no animation) */}
      <section id="About" className="py-[24px] p-4 root lg:hidden">
        <div className="container mx-auto mb-3">
          <div className="flex items-center justify-center flex-col gap-3 ">
            <span className="mx-4 text-xl font-bold text-third">
              {t("gym.title")}
            </span>
            <p className="mx-4 text-lg font-semibold">
              {t("gym.description")}
            </p>
          </div>
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop
            className="mt-5"
          >
            {items.map((item, index) => (
              <SwiperSlide>
                <div
                  key={index}
                  className="h-[320px] rounded-2xl overflow-hidden relative cursor-pointer shadow-lg"
                >
                  <img
                    className="h-full w-full object-cover object-center"
                    src={
                      lang === "en"
                        ? item.banner_en
                        : (item.banner_ar ?? item.banner_en)
                    }
                    alt={`service-${index}`}
                  />
                  <span className="absolute bottom-2 start-2 bg-black/60 text-white text-lg px-3 py-1 rounded-md">
                    {lang === "en"
                      ? item.title_en
                      : (item.title_ar ?? item.title_en)}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Desktop/large screens (with animation/hover) */}
      <MotionSection
        id="About"
        // variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="  p-8 root hidden lg:block  bg-primary  text-third"
      >
        <div className="container mx-auto max-w-7xl mb-3  cursor-pointer">
          <div className="flex items-center justify-center flex-col gap-3 ">
            <span className="mx-4 text-xl lg:text-3xl font-bold">
              {t("gym.title")}
            </span>
            <p className="mx-4 text-lg lg:text-2xl font-semibold">
              {t("gym.description")}
            </p>
          </div>

          <div className="container mx-auto flex items-center flex-col lg:flex-row gap-x-3 gap-y-3 list-image mt-8 ">
            {items.map((item, index) => (
              <div
                key={index}
                onMouseOver={() => {
                  setActiveIndex(index);
                }}
                className={` shadow-md shadow-secondary h-[200px] lg:h-[500px] w-100 rounded-2xl cursor-pointer overflow-hidden relative transition-all duration-300 ${
                  activeIndex === index ? "active shadow-third w-250" : ""
                }`}
              >
                <img
                  className="overflow-hidden h-full w-full object-cover"
                  src={
                    lang === "en"
                      ? item.banner_en
                      : (item.banner_ar ?? item.banner_en)
                  }
                  alt={`car${index}`}
                />
                <span className="absolute bottom-4 start-4 bg-black/60 text-white lg:text-xl px-6 py-2 rounded-md">
                  {lang === "en"
                    ? item.title_en
                    : (item.title_ar ?? item.title_en)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>
    </>
  );
};

export default GymSection;
