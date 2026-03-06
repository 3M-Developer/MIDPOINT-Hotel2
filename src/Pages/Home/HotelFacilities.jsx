import { useTranslation } from "react-i18next";
import facilities from "../Amenities/HotelFacilities";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

export default function HotelFacilities() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <section className="  overflow-hidden ">
      <h2 className="mx-4 text-4xl font-bold text-third text-center">
        {t("hotelFacilities.title")}
      </h2>

      <Swiper
        key={lang}
        modules={[Autoplay]}
        loop={true}
        slidesPerView="auto"
        spaceBetween={25}
        speed={2000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        className="facilities-swiper    "
      >
        {facilities.map((item, index) => {
          const Icon = item.icon;

          return (
            <SwiperSlide
              key={index}
              className="!w-auto bg-linear-to-br from-secondary via-black to-secondary   my-7   rounded-2xl p-2 h-25! flex! justify-center! items-center!"
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
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
