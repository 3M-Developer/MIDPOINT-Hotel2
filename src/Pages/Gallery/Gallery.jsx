import React, { useContext, useState } from "react";
import { images } from "./GalleryImgs";
import { ApiAuthContext } from "../../Context/AuthContext";
import { useTranslation } from "react-i18next";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const { defaultLang } = useContext(ApiAuthContext);
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const maxBullets = 5;
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
    <>
      <section className="pt-10 mb-5 px-4 md:px-8 min-h-screen relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}

          {/* News Grid */}
          <div className="space-y-16         ">
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              animate="show"
            >
              {images.map((item) => (
                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  key={item.id}
                  onClick={() => setActiveIndex(item.id)}
                  className="rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
                >
                  <div className="relative h-130 bg-baseTwo overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {activeIndex !== null && (
        <div
          className="fixed bg-black/90 inset-0 z-[999] flex items-center justify-center"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setActiveIndex(null);
            }
          }}
        >
          <div className="w-full h-full flex items-center">
            <Swiper
              initialSlide={activeIndex}
              modules={[Pagination]}
              spaceBetween={0}
              slidesPerView={1}
              pagination={{
                clickable: true,
                type: "custom",
                renderCustom: (swiper, current, total) => {
                  let bullets = "";

                  const half = Math.floor(maxBullets / 2);
                  let start = Math.max(current - half, 1);
                  let end = start + maxBullets - 1;

                  if (end > total) {
                    end = total;
                    start = Math.max(total - maxBullets + 1, 1);
                  }

                  // Add "..." at the beginning if needed
                  if (start > 1) {
                    bullets += `<span class="custom-bullet more">...</span>`;
                  }

                  for (let i = start; i <= end; i++) {
                    bullets += `
              <span class="custom-bullet ${i === current ? "active" : ""}" data-index="${i - 1}">
                ${i}
              </span>
            `;
                  }

                  // Add "..." at the end if needed
                  if (end < total) {
                    bullets += `<span class="custom-bullet more">...</span>`;
                  }

                  return bullets;
                },
              }}
              onSwiper={(swiper) => {
                document.addEventListener("click", (e) => {
                  if (
                    e.target.classList.contains("custom-bullet") &&
                    !e.target.classList.contains("more")
                  ) {
                    swiper.slideTo(parseInt(e.target.dataset.index));
                  }
                });
              }}
              className="h-full w-full"
            >
              {images.map((slider) => (
                <SwiperSlide key={slider.id}>
                  <img
                    src={slider.src}
                    alt=""
                    className="w-full h-screen object-contain scale-[0.8]"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <button
            onClick={() => setActiveIndex(null)}
            className="absolute top-6 right-6 text-white text-3xl z-[1000] cursor-pointer"
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
};

export default Gallery;
