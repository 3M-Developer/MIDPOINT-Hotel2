import { useTranslation } from "react-i18next";
import hotelFacilities from "./HotelFacilities";
import { motion } from 'framer-motion';

export default function HotelFacilities() {
  const { t } = useTranslation();
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
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

  return (
    <section className=" px-3 mx-auto  ">
      <h2 className="mx-4 text-4xl font-bold text-secondary text-center">
        {t("hotelFacilities.title")}
      </h2>

      {/* <div className="grid p-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {hotelFacilities.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="!w-auto from-secondary via-black to-secondary bg-linear-to-br shadow-lg! my-7 shadow-secondary rounded-2xl p-2 h-25! flex! justify-center! items-center!"
            >
              <div className="flex  items-center gap-4  justify-center text-primary min-w-[260px]">
                <Icon size={28} className="text-primary shrink-0" />

                <div>
                  <p className="text-lg tracking-wide">{t(item.titleKey)}</p>

                  {item.subKey && (
                    <span className="text-sm text-primary">
                      {t(item.subKey)}
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div> */}
      <motion.div
        className="grid p-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {hotelFacilities.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={index}
              variants={itemVariants}
              className="!w-auto from-secondary via-black to-secondary bg-linear-to-br shadow-lg! my-7 shadow-secondary rounded-2xl p-2 h-25! flex! justify-center! items-center!"
            >
              <div className="flex items-center gap-4 justify-center text-primary min-w-[260px]">
                <Icon size={28} className="text-primary shrink-0" />

                <div>
                  <p className="text-lg tracking-wide">{t(item.titleKey)}</p>

                  {item.subKey && (
                    <span className="text-sm text-primary">
                      {t(item.subKey)}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
