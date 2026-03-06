import React from "react";

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, FreeMode } from "swiper/modules";
import { motion } from "framer-motion";
import image from "../../assets/heroVideos/UproofCafeSection-compressed.mp4";
import uproofLogo from "../../assets/uproof.webp";
import AppImage from "./../../Components/AppImage";
import { imgs } from "./hallsImages";
import "swiper/css/effect-coverflow";
const ConferenceHallSection = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
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
      <section className="lg:h-150  overflow-hidden pb-15 lg:pb-0 mb-10 relative bg-linear-to-r from-secondary via-black to-secondary  flex  text-primary bg-fill">
        <motion.div
          className="  mx-5 lg:mx-0 grid lg:grid-cols-2 justify-center items-center    text-center bg-cover"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-col order-1 gap-8 mt-7 px-4 lg:mt-0">
            <motion.p
              className="flex items-center justify-center gap-3 text-3xl font-bold"
              variants={itemVariants}
            >
              <span>{t("Conference.title")}</span>
            </motion.p>

            <motion.p className="text-xl font-bold" variants={itemVariants}>
              {t("Conference.description")}
            </motion.p>
          </div>
          <Swiper
            key={lang}
            modules={[Autoplay, EffectCoverflow]}
            loop={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            effect={"coverflow"}
            spaceBetween={25}
            speed={2000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            className="facilities-swiper  order-0 lg:order-1 "
          >
            {imgs.map((item, index) => {
              return (
                <SwiperSlide
                  key={index}
                  className="       my-7   rounded-2xl  flex! justify-center! items-center!"
                >
                  <div className="flex  items-center gap-4  justify-center text-primary  min-w-full object-cover lg:">
                    <AppImage
                      className=" lg:h-100 object-cover rounded-xl"
                      src={item.src}
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </motion.div>
      </section>
    </>
  );
};

export default ConferenceHallSection;
