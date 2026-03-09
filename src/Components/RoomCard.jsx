import React, { useContext, useRef, useState } from "react";
import { ApiAuthContext } from "../Context/AuthContext";
import { useTranslation } from "react-i18next";
import he from "he";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import AppImage from "./AppImage";
import Lottie from "lottie-react";
import loader from "../assets/loader.json";
import { motion } from "framer-motion";
import { MdOutlineSquareFoot, MdApartment } from "react-icons/md";
import { IoMdArrowRoundForward } from "react-icons/io";
import { FaWifi } from "react-icons/fa";
import { TbBrandBooking } from "react-icons/tb";
import { SiExpedia } from "react-icons/si";
import agoda from "../assets/agoda.svg";
import { IoIosCloseCircle } from "react-icons/io";
const RoomCard = ({ room }) => {
  const videoRef = useRef(null);
  const { t, i18n } = useTranslation();
  const [isPopup, setIsPopup] = useState(false);
  const contentOrder = room.reverse ? "lg:order-2" : "lg:order-1";
  const imageOrder = room.reverse ? "lg:order-1" : "lg:order-2";
  const { defaultLang } = useContext(ApiAuthContext);

  const lang = i18n.language;
  function DecodedText({ text }) {
    const safeText = typeof text === "string" ? text : "";
    const decodedHtml = he.decode(safeText);

    const truncatedHtml =
      decodedHtml.length > 250
        ? decodedHtml.slice(0, 250) + "..."
        : decodedHtml;

    return <span dangerouslySetInnerHTML={{ __html: truncatedHtml }} />;
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.96,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const imageVariants = {
    rest: { scale: 1 },
    hover: {
      scale: 1.1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const contentVariants = {
    rest: { y: 0 },
    hover: {
      y: -16,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <>
      <section
        className={
          room.reverse
            ? " bg-[#BB8632]/6 border-b border-t border-[#BB8632] py-10  px-4 lg:px-0"
            : "px-4 lg:px-0  "
        }
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-5 bg-primary border border-gray-300  rounded-3xl py-10 shadow-xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className={`order-2 ${contentOrder} flex flex-col gap-8`}>
              <div>
                <p className="text-slate-400 text-sm font-medium mb-2 uppercase tracking-widest">
                  {t(room.seriesKey)}
                </p>

                <h2 className="text-4xl md:text-5xl font-bold serif-style mb-4 text-green">
                  {t(room.titleKey)}
                </h2>

                <p className="text-slate-400 text-lg leading-relaxed">
                  {t(room.descKey)}
                </p>
              </div>

              {/* Meta */}
              <div className="flex flex-wrap gap-4  text-primary">
                <span className="flex items-center gap-2 px-3   rounded-lg  py-3 bg-secondary text-xs font-semibold">
                  <span className="material-symbols-outlined text-sm">
                    <MdOutlineSquareFoot size={20} />
                  </span>
                  {room.size}
                </span>

                <span className="flex items-center gap-2 px-3   rounded-lg  py-3 bg-secondary text-xs font-semibold">
                  <span className="material-symbols-outlined text-sm">
                    <MdApartment size={20} />
                  </span>
                  {t(room.featureKey)}
                </span>
              </div>

              {/* Amenities */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {room.amenities.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                    
                      key={index}
                      className="flex flex-col items-center justify-center p-4 rounded-xl border border-secondary/5 bg-secondary/5"
                    >
                      <Icon className="text-secondary mb-2 text-xl" />

                      <span className="text-[10px] font-bold uppercase tracking-tighter text-center">
                        {t(item.labelKey)}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-6 pt-4   justify-center">
                <button
                 onClick={() => {
                    setIsPopup(true);
                  }}
                className="bg-secondary hover:bg-secondary/90 text-primary px-8 py-3.5 rounded-lg font-bold transition-all flex items-center gap-2">
                  {t("common.bookNow")}
                  <span className="material-symbols-outlined text-sm rtl:rotate-180">
                    <IoMdArrowRoundForward size={20} />
                  </span>
                </button>

                {/* <a
                  href="#"
                  className="text-sm font-bold border-b-2 border-secondary pb-1"
                >
                  {t("common.viewDetails")}
                </a> */}
              </div>
            </div>

            {/* Image */}
            <div className={`order-1 ${imageOrder}`}>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-slate-800">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 hover:scale-110"
                  style={{ backgroundImage: `url("${room.image}")` }}
                  aria-label={t(room.titleKey)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {isPopup && (
        <div className="fixed inset-0 z-9999  flex items-center justify-center bg-black/70">
          <div className="bg-primary relative p-10 gap-8 rounded-2xl flex flex-col items-center  justify-center">
            <div
              onClick={() => {
                setIsPopup(false);
              }}
              className="absolute cursor-pointer top-0 font-bold end-0 m-3    flex items-center justify-center text-primary rounded-full"
            >
              <IoIosCloseCircle size={25} className="text-secondary" />
            </div>
            <div className="flex flex-col text-secondary  justify-center items-center border-b border-gray-300">
              <h2 className="text-2xl font-extrabold">
                {t("hotelBooking.title")}
              </h2>
              <p>{t("hotelBooking.subtitle")}</p>
            </div>

            <div className="flex flex-col gap-2">
              <a
                href="https://www.booking.com/Share-20wXFWs"
                target="_blank"
                className="bg-[#003b95] text-primary  px-7 py-2 rounded-lg flex items-center gap-3"
              >
                <TbBrandBooking size={35} />

                {t("hotelBooking.booking")}
              </a>
              <a
                href="https://www.expedia.sa/en/Abha-Hotels-Midpoint-Hotel.h125608952.Hotel-Information"
                className="bg-black text-primary px-7 py-2  rounded-lg flex items-center gap-3"
                target="_blank"
              >
                <SiExpedia size={30} className="text-[#FDDB32]" />{" "}
                {t("hotelBooking.expedia")}
              </a>
              <a
                href="https://www.agoda.com/midpoint-hotel-h84904124/hotel/abha-sa.html?checkin=2026-03-08&checkout=2026-03-09&los=1&rooms=1&adults=2&children=0&cid=1922880&searchrequestid=b07a1ee8-8446-4341-b9fa-dcad755802b5&tag=3cde7f80-a923-450c-a416-936443e59e6c&ds=jaI7N2SK68JuFHKf"
                target="_blank"
                className="bg-[#20274D] text-primary px-7 py-2  rounded-lg flex items-center gap-3"
              >
                <AppImage src={agoda} className="w-15" />
                {t("hotelBooking.agoda")}
              </a>
            </div>
          </div>
        </div>
      )}
      {/* <div className="group relative flex flex-col h-90 bg-secondary   backdrop-blur-lg border-2 border-third/20 rounded-3xl overflow-hidden hover:border-secondary hover:shadow-lg my-2 hover:shadow-srcondary transition-all duration-500    ">
        <div className="h-[180px] flex items-start justify-center overflow-hidden relative   ">
          <AppImage
            src={item[`banner_${lang}`] ?? item[`banner_${defaultLang}`]}
            className="h-[170px] w-full        transition-transform duration-700 group-hover:scale-110 "
          />

          <img
            alt="Strategy Planning"
            className=" min-h-60!   object-fit w-full h-full  transition-transform duration-700 group-hover:scale-110"
            src={item[`banner_${lang}`] ?? item[`banner_${defaultLang}`]}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-third/20 to-transparent opacity-80" />
        </div>
        <div className="p-8 flex flex-col justify-between flex-grow relative">
          <h3 className="text-xl text-center font-bold text-secondary mb-3 group-hover:text-secondary transition-colors">
            {item[`title_${lang}`] ?? item[`title_${defaultLang}`]}
          </h3>
          <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
            <DecodedText
              text={
                item[`short_description_${lang}`] ??
                item[`short_description_${defaultLang}`]
              }
            />
          </p>
          <div className="w-full flex justify-center">
            <Link
              to={`/rooms/${
                item[`slug_${lang}`] ?? item[`slug_${defaultLang}`]
              }`}
              className="inline-flex items-center justify-center  text-sm font-bold text-secondary bg-secondary hover:bg-third border border-secondary/30 px-5 py-2.5 rounded-lg transition-all w-fit "
              href="#"
            >
              Learn more{" "}
              <span className="material-symbols-outlined text-base mx-1 group-hover:mx-4 transition-all duration-500">
                <FaArrowRight />
              </span>
            </Link>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default RoomCard;
