import React from "react";

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import image from "../../assets/eventsHall.webp";
import uproofLogo from "../../assets/uproof.webp";
import AppImage from "./../../Components/AppImage";
const EventsHall = () => {
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
      <section className="  pb-15 overflow-hidden  lg:pb-0 mx-4 rounded-2xl lg:rounded-2xl mb-10 relative bg-linear-to-r from-secondary via-black to-secondary  flex  text-primary bg-fill">
        <motion.div
          className="   grid lg:grid-cols-2   items-center     text-center bg-cover"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
         >
          <div className="flex flex-col order-1 lg:order-0 gap-8 mt-7 px-4 lg:mt-0">
            <motion.p
              className="flex items-center justify-center gap-3 text-3xl font-bold"
              variants={itemVariants}
            >
              <span>{t("eventsHall.title")}</span>
            </motion.p>

            <motion.p className="text-xl font-bold" variants={itemVariants}>
              {t("eventsHall.description")}
            </motion.p>
          </div>
         <div className="h-150 order-0">
             <AppImage
            src={image}
            className="  w-full h-full object-cover  "
          />

         </div>
        </motion.div>
      </section>
    </>
  );
};

export default EventsHall;
