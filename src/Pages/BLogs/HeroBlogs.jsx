import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { SettingsContext } from "../../Context/SettingsContext";
import { Helmet } from "react-helmet";

const HeroBlogs = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const { currency, siteName_ar, siteName_en } = useContext(SettingsContext);
  return (
    <>
    <Helmet>
        <title>
          {lang === "en" ? siteName_en : siteName_ar ?? siteName_en} |{" "}
          {lang === "en" ? "Blogs" : "المدونات" ?? "Blogs"}
        </title>
      </Helmet>
      <div className=" mt-17  h-[40vh] w-full relative bg-secondary/95">
        <div className="absolute  inset-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
          <div className="absolute -top-[80%] -right-[10%] w-[600px] h-[600px] rounded-full bg-primary blur-[120px] animate-pulse" />
          <div className="absolute top-[60%] -left-[10%] w-[400px] h-[400px] rounded-full bg-white blur-[100px]" />
        </div>
        <div className="absolute inset-0 z-8 flex justify-center items-center">
          <div className=" text-3xl flex items-center justify-center text-primary  ">
            Our Blogs
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBlogs;
