import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ApiAuthContext } from "../../Context/AuthContext";
import { useTranslation } from "react-i18next";
import { SettingsContext } from "../../Context/SettingsContext";
import { FaArrowRight } from "react-icons/fa";
import { MdAutoAwesome } from "react-icons/md";
import { SiGooglemarketingplatform } from "react-icons/si";

import { AiFillHome } from "react-icons/ai";
import { TbFileDescription } from "react-icons/tb";

import he from "he";
import AppImage from "../../Components/AppImage";
import { Helmet } from "react-helmet";

import WhyChooseUs from "../../Components/WhyChooseUs";
// import Steps from "../../Components/Steps";
const ServicesDetails = () => {
  const [item, setItem] = useState(null);
  const params = useParams();
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const { baseUrl, XApiKey, XTenantID, defaultLang } =
    useContext(ApiAuthContext);
  const { currency, siteName_ar, siteName_en } = useContext(SettingsContext);

  function DecodedText({ text }) {
    const safeText = typeof text === "string" ? text : "";
    const decodedHtml = he.decode(safeText);

    const truncatedHtml = decodedHtml;
    return <span dangerouslySetInnerHTML={{ __html: truncatedHtml }} />;
  }

  async function getItemBySlug() {
    const response = await axios.get(`${baseUrl}/item/${params.slug}`, {
      headers: {
        "X-API-KEY": XApiKey,
        "X-Tenant-ID": XTenantID,
      },
    });
    return response.data.data;
  }

  let { data, isError, error, isLoading, isFetching } = useQuery({
    queryKey: ["getItemBySlug"],
    queryFn: getItemBySlug,
  });

  useEffect(() => {
    if (data) {
      console.log(data);

      setItem(data);
    }
  }, [data]);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      // video.play().catch(() => {});
    }
  }, [item]);

  return (
    <>
      {item ? (
        <Helmet>
          <title>
            {`${lang === "en" ? siteName_en : (siteName_ar ?? siteName_en)} | ${
              item[`meta_title_${lang}`] ??
              item[`meta_title_${defaultLang}`] ??
              ""
            }` || "item"}
          </title>
          {item?.metaDesc ? (
            <meta
              name="description"
              content={
                item[`meta_description_${lang}`] ??
                item[`meta_description_${defaultLang}`] ??
                ""
              }
            />
          ) : null}
          {item?.metaKeywords ? (
            <meta
              name="keywords"
              content={
                item[`meta_keywords_${lang}`] ??
                item[`meta_keywords_${defaultLang}`] ??
                ""
              }
            />
          ) : null}
          {item?.metaImage ? (
            <meta property="og:image" content={item[`meta_img`] ?? ""} />
          ) : null}
          <meta property="og:title" content={item?.metaTitle || "item"} />
          {item?.metaDesc ? (
            <meta
              property="og:description"
              content={
                item[`meta_title_${lang}`] ??
                item[`meta_title_${defaultLang}`] ??
                ""
              }
            />
          ) : null}
        </Helmet>
      ) : null}
      <div className="py-10">
        {/* Hero */}
        <section className="relative w-full overflow-hidden hero-mesh pt-18  pb-24  lg:pb-32 bg-primary">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full grid-bg opacity-60"></div>
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary/70 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute top-48 -left-24 w-96 h-96 bg-secondary/60 rounded-full mix-blend-multiply filter blur-3xl opacity-50  animate-float"></div>
            <div className="absolute bottom-24 right-1/4 w-96 h-96 bg-secondary/50 rounded-full mix-blend-multiply filter blur-3xl opacity-30   animation-delay-4000"></div>
            <img
              alt=""
              className="absolute inset-0 z-0 w-full h-full object-cover opacity-[0.03] mix-blend-overlay z-0 pointer-events-none animate-pulse"
            />
          </div>
          <div className="relative z-10 w-full max-w-[1480px] mx-auto px-6 md:px-10">
            <div className="flex flex-wrap items-center gap-2 mt-8 text-sm relative z-20">
              <Link
                to="/"
                className="text-secondary hover:shadow-md transition-all  text-md    flex items-center gap-1 hover:bg-white/50 px-2 py-1 rounded-full transition-all"
                href="#"
              >
                <span className="material-symbols-outlined mb-1">
                  <AiFillHome size={15} />
                </span>
                Home
              </Link>
              <span className="text-secondary text-md">/</span>
              <Link
                to="/services"
                className="text-secondary hover:shadow-md transition-all  text-md    hover:bg-white/50 px-2 py-1 rounded-full transition-all"
              >
                Services
              </Link>
              <span className="text-secondary text-md">/</span>
              <span className="text-secondary  text-md font-bold bg-white/80 px-2 py-1 rounded-full shadow-sm border border-white/50">
                {item?.[`title_${lang}`] ?? item?.[`title_${defaultLang}`]}
              </span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative z-10 order-1 lg:order-0">
                <div className="inline-flex items-center gap-2 pl-1 pr-3 py-1 rounded-full  bg-primary/70 text-secondary text-xs font-black uppercase tracking-wider mb-6 shadow-sm animate-float">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-third text-white">
                    <span className="material-symbols-outlined text-[14px]">
                      <MdAutoAwesome />
                    </span>
                  </span>
                  Future Ready
                </div>
                <h1 className="text-5xl md:text-5xl  font-black text-transparent bg-clip-text bg-gradient-to-r from-black/80 via-third to-black/80    bg-[length:300%_300%]  bg-[position:50%_50%] animate-gradient-x mb-6 uppercase">
                  {item?.[`title_${lang}`] ?? item?.[`title_${defaultLang}`]}
                </h1>
                <p className="text-lg md:text-xl text-secondary/70 font-medium leading-relaxed mb-8 max-w-2xl  py-6 rounded-2xl    ">
                  {item?.[`short_description_${lang}`] ??
                    item?.[`short_description_${defaultLang}`]}
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    to="/contact"
                    className="group relative px-8 py-4 bg-third text-third rounded-xl font-bold text-lg shadow-xl shadow-indigo-900/20 hover:shadow-indigo-900/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2 text-primary">
                      Start Innovation Journey
                      <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                        <FaArrowRight />
                      </span>
                    </span>
                    <div className="absolute inset-0 bg-linear-to-r from-black from-[-50%] via-secondary to-150% to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                </div>
              </div>
              <div className="relative  order-0  ">
                <div className="relative lg:w-[700px] h-160   mx-auto">
                  <div className="absolute inset-0 bg-white rounded-4xl shadow-2xl shadow-indigo-900/10 border border-white/50 overflow-hidden rotate-card animate-float z-10">
                    {item ? (
                      <video
                        key={item?.id || item?.slug}
                        ref={videoRef}
                        className="w-full h-full object-cover opacity-90 scale-105  "
                        autoPlay
                        muted
                        loop
                        // preload="true"
                        playsInline
                      >
                        <source
                          src={
                            item[`banner_${lang}`] ??
                            item[`banner_${defaultLang}`]
                          }
                          type="video/mp4"
                        />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <AppImage src={null} className="h-15" />
                      </div>
                    )}

                    {isLoading || isError || isFetching ? (
                      <div className="w-full h-full flex items-center justify-center">
                        <AppImage src={null} className="h-15" />
                      </div>
                    ) : null}

                    <div className="absolute inset-0   from-primary/50 via-transparent to-transparent"></div>
                  </div>
                  <div className="absolute top-12 -right-12 w-full h-full bg-indigo-600 rounded-2xl opacity-10 rotate-6 scale-95 z-0 animate-float-delayed"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Description */}
        <section className=" w-full flex justify-center items-center ">
          <div className="bg-white mx-4 max-w-5xl rounded-3xl p-8 lg:p-10 shadow-md shadow-secondary border border-gray-100 mb-10">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              About This Service
            </h2>
            <div className="prose prose-lg text-gray-600  max-w-none">
              <p className="mb-6  text-xl font-semibold">
                <DecodedText
                  text={
                    item?.[`description_${lang}`] ??
                    item?.[`description_${defaultLang}`]
                  }
                />
              </p>
            </div>
          </div>
        </section>

        {/* <div className="my-10 mx-5 lg:mx-10 ">
          <Steps title={item?.title_en} />
        </div> */}
        <div>
          <WhyChooseUs />
        </div>
      </div>
    </>
  );
};

export default ServicesDetails;
