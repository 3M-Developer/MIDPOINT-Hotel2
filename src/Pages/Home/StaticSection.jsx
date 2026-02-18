import React from "react";
import bg from "../../assets/static.webp";
import { FaUsers } from "react-icons/fa";
import logo from "../../assets/favicon.webp";
import { useTranslation } from "react-i18next";
export const StaticSection = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="w-full flex justify-center  mb-10  ">
        <div
          className="relative bg-fixed bg-cover bg-center bg-no-repeat flex items-center justify-center   w-full py-80  "
          style={{
            backgroundImage: `url(${bg})`,
          }}
        >
          <div className="absolute inset-0 bg-linear-to-t from-black/20 to-black/50 flex justify-center items-center  ">
            <div className="w-full flex flex-col items-center  lg:mx-50 rounded-2xl text-primary">
              {/* <FaUsers size={90} className="text-primary" /> */}
              <img src={logo} className="w-30 animate-float  " alt="" />
              <div className="p-5 w-full   bg-linear-to-r via-secondary/80  flex flex-col mt-5 justify-center items-center text-center  ">
                <h3 className="text-5xl mb-6 font-extrabold">
                   {t("twilightRooftop.title")}
                </h3>
                <p className="max-w-[700px] text-center my-3">
                  {t("twilightRooftop.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
