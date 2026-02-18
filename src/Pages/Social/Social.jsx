import React, { useContext, useEffect, useMemo, useState } from "react";
import { SettingsContext } from "./../../Context/SettingsContext";
import { ApiAuthContext } from "../../Context/AuthContext";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import AppImage from "../../Components/AppImage";

const Social = () => {
  const { t, i18n } = useTranslation();
  const [socialLinks, setSocialLinks] = useState(null);
  const { defaultLang } = useContext(ApiAuthContext);
  const {
    mainLogo,
    facebookLink,
    instagramLink,
    twitterLink,
    whatsappLink,
    siteNameEn,
    footerTextEn,
    footerTextAr,
  } = useContext(SettingsContext) || {};
  // const socialLinks =[facebook,
  //     instagram,
  //     twitter,
  //     whatsapp,]

  useEffect(() => {
    setSocialLinks([
      {
        name: "Facebook",
        url: facebookLink || [],
        color: "#1877F2",
        icon: <FaFacebook />,
      },
      {
        name: "Instagram",
        url: instagramLink || [],
        color: "#E4405F",
        icon: <FaInstagram />,
      },
      {
        name: "Twitter",
        url: twitterLink || [],
        color: "#1DA1F2",
        icon: <FaXTwitter />,
      },
      {
        name: "WhatsApp",
        url: whatsappLink || [],
        color: "#25D366",
        icon: <IoLogoWhatsapp />,
      },
    ]);
  }, [facebookLink, instagramLink, twitterLink, whatsappLink]);

  return (
    <>
      <div className="py-40 bg-secondary text-third">
        <div className="mx-auto px-4">
          <div className="flex justify-center">
            <div className="w-full max-w-xl py-10 bg-primary rounded-lg">
              <motion.div
                className="social-links-container"
                initial="hidden"
                animate="visible"
              >
                {/* Logo */}
                <motion.div className="flex justify-center bg-primary p-3 rounded-xl">
                  {/* <img src={mainLogo} alt={siteNameEn} className="w-50" /> */}
                  <AppImage src={mainLogo} alt={siteNameEn} className="w-50" />
                </motion.div>

                {/* Subtitle */}
                <motion.p className="brand-subtitle my-4 text-center">
                  {t("social.Connect with us on your favorite platform")}
                </motion.p>

                {/* Links */}
                <motion.div className="links-wrapper flex flex-col gap-4 bg-primary text-third py-10 px-5 rounded-xl">
                  {socialLinks?.map((item, idx) =>
                    item?.url?.map((link, linkIdx) => (
                      <a
                        key={`${idx}-${linkIdx}`}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link-btn flex items-center gap-3 rounded-lg px-5 py-3 transition cursor-pointer hover:scale-102 hover:shadow-md hover:shadow-secondary hover:outline-1 outline-secondary shadow-sm shadow-secondary/50 "
                        style={{ "--link-color": item.color }}
                      >
                        {item.icon}
                        <span>{item.name}</span>
                      </a>
                    ))
                  )}
                </motion.div>

                {/* Footer */}
                <motion.div className="footer-section mt-6">
                  <p className="footer-text text-center">
                    {defaultLang === "ar" ? footerTextAr : footerTextEn}
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Social;
