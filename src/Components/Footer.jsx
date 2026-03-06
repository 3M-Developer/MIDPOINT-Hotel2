import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  FiFacebook,
  FiInstagram,
  FiYoutube,
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";
import { BsInfoCircleFill } from "react-icons/bs";
import footer from "../assets/footer.webp";

import { FaMicroblog, FaXTwitter } from "react-icons/fa6";
// import logo from "../assets/Home/Logo_Header.jpg";
import Subscribe from "./Subscribe";
import { FaLinkedinIn, FaSnapchatSquare } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { SettingsContext } from "../Context/SettingsContext";
import AppImage from "./AppImage";
import { MdIron, MdLocalHotel, MdMiscellaneousServices } from "react-icons/md";
import footerLogo from "../assets/logoWhite.webp";
import { IoImage } from "react-icons/io5";
import { HiExternalLink } from "react-icons/hi";
const Footer = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const {
    // footerLogo,
    facebookLink,
    instagramLink,
    twitterLink,
    youtubeLink,
    tiktokLink,
    linkedinLink,
    snapchatLink,
    // address_en,
    // address_ar,
    footerText_en,
    footerText_ar,
    sitePhone,
    siteEmail,
  } = useContext(SettingsContext);
  const address_en = "King Fahad Rd, Al Nuzhah, Abha 62521, Saudi Arabia";
  const address_ar =
    "طريق الملك فهد، النزهة، أبها 62521، المملكة العربية السعودية";

  return (
    <footer
      className={`pt-20  bg-cente  bg-cover  flex justify-center relative top-full! text-primary bg-third rounded-t-[5rem] shadow-[0_-10px_40px_-15px_#b000006e]   mt-10>`}
      style={{ backgroundImage: `url('${footer}')` }}
    >
      {/* Main footer */}
      <div className=" w-full    relative z-1   px-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 py-8  ">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="inline-block hover:font-bold transition-all duration-200"
            >
              {footerLogo ? (
                <AppImage src={footerLogo} className=" w-70" />
              ) : null}
            </Link>
            <p className=" text-lg mt-4">{t("footer.description")}</p>
          </div>

          {/* services */}
          <div className="lg:px-4">
            <div className="relative w-fit">
              <h4 className="font-bold text-lg mb-3 ">
                {t("footer.Quick Links")}
              </h4>
              <div className="absolute top-full w-full h-1 bg-linear-to-r  via-primary ">
                {" "}
              </div>
            </div>
            <ul className="space-y-4 text-sm ">
              <li>
                <Link
                  to="/rooms"
                  className="hover:font-bold flex items-center gap-2 transition-all duration-200 group"
                >
                  <div className="bg-secondary/50 text-primary group-hover:bg-third/50 group-hover:text-primary transition-all duration-300 flex items-center justify-center w-8 h-8 rounded-full">
                    <MdLocalHotel size={20} />
                  </div>

                  <p className="text-xl">
                    {t("footer.servicesLinks.allRooms")}
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:font-bold flex items-center gap-2 transition-all duration-200 group"
                >
                  <div className="bg-secondary/50 text-primary group-hover:bg-third/50 group-hover:text-primary transition-all duration-300 flex items-center justify-center w-8 h-8 rounded-full">
                    <BsInfoCircleFill size={20} />
                  </div>
                  <p className="text-xl">{t("footer.supportLinks.aboutUs")}</p>
                </Link>
              </li>
              <li>
                <Link
                  to="/amenities"
                  className="hover:font-bold flex items-center gap-2 transition-all duration-200 group"
                >
                  <div className="bg-secondary/50 text-primary group-hover:bg-third/50 group-hover:text-primary transition-all duration-300 flex items-center justify-center w-8 h-8 rounded-full">
                    <MdIron size={20} />
                  </div>
                  <p className="text-xl"> {t("navigation.menu.amenities")}</p>
                </Link>
              </li>
              <li>
                <Link
                  to="/amenities"
                  className="hover:font-bold flex items-center gap-2 transition-all duration-200 group"
                >
                  <div className="bg-secondary/50 text-primary group-hover:bg-third/50 group-hover:text-primary transition-all duration-300 flex items-center justify-center w-8 h-8 rounded-full">
                    <IoImage size={20} />
                  </div>
                  <p className="text-xl"> {t("navigation.menu.gallrey")}</p>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="relative w-fit">
              <h4 className="font-bold text-lg mb-3 ">
                {t("footer.Contact Information")}
              </h4>
              <div className="absolute top-full w-full h-1 bg-linear-to-r  via-primary ">
                {" "}
              </div>
            </div>
            <ul className="space-y-2 text-sm ">
              <li>
                <a
                  href="https://maps.app.goo.gl/aYnmVYaViTZBD5qj9"
                  className="flex items-center gap-3 mt-4  text-lg"
                >
                  <div className="bg-secondary/50 text-primary flex items-center justify-center w-12 h-10 rounded-full">
                    <FiMapPin size={20} />
                  </div>
                  <span>
                    {lang == "en" ? address_en : (address_ar ?? address_en)}
                  </span>
                </a>
              </li>
              <li className="flex items-center gap-3 mt-2  text-lg">
                <div className="bg-secondary/50 text-primary flex items-center justify-center w-10 h-10 rounded-full">
                  <FiPhone size={20} />
                </div>
                <a
                  href={`tel:${sitePhone}`}
                  dir="ltr"
                  className="hover:font-bold transition-all duration-200 "
                >
                  {sitePhone}
                </a>
              </li>
              <li className="flex items-center gap-3 mt-2  text-lg">
                <div className="bg-secondary/50 text-primary flex items-center justify-center w-10 h-10 rounded-full">
                  <FiMail size={20} />
                </div>
                <a
                  href={`mailto:${siteEmail}`}
                  className="hover:font-bold transition-all duration-200"
                >
                  {siteEmail}
                </a>
              </li>

              <li>
                {/* <Link
                  to="/faq"
                  className="hover:font-bold transition-all duration-200"
                >
                  {t("footer.supportLinks.faq")}
                </Link> */}
              </li>
            </ul>
          </div>

          {/* Follow us */}
          <div>
            <div className="relative w-fit">
              <h4 className="font-bold text-lg mb-3   ">
                {t("footer.followUs")}
              </h4>
              <div className="absolute top-full w-full h-1 bg-linear-to-r  via-primary ">
                {" "}
              </div>
            </div>
            <p className="text-lg ">{t("footer.followUsText")}</p>
            <div className="flex gap-3 mt-3 ">
              {facebookLink ? (
                <a
                  aria-label={t("footer.socialAlt.facebook")}
                  href={facebookLink}
                  className="p-2  bg-green/50 rounded-md hover:bg-secondary hover:text-primary hover:font-bold transition-all duration-200"
                >
                  <FiFacebook />
                </a>
              ) : null}

              {instagramLink ? (
                <a
                  aria-label={t("footer.socialAlt.instagram")}
                  href={instagramLink}
                  className="p-2 bg-green/50 rounded-md hover:bg-secondary hover:text-primary hover:font-bold transition-all duration-200"
                >
                  <FiInstagram />
                </a>
              ) : null}
              {snapchatLink ? (
                <a
                  aria-label={t("footer.socialAlt.instagram")}
                  href={snapchatLink}
                  className="p-2 bg-green/50 rounded-md hover:bg-secondary hover:text-primary hover:font-bold transition-all duration-200"
                >
                  <FaSnapchatSquare />
                </a>
              ) : null}

              {twitterLink ? (
                <a
                  aria-label={t("footer.socialAlt.twitter")}
                  href={twitterLink}
                  className="p-2 bg-green/50 rounded-md hover:bg-secondary hover:text-primary hover:font-bold transition-all duration-200"
                >
                  <FaXTwitter />
                </a>
              ) : null}
              {youtubeLink ? (
                <a
                  aria-label={t("footer.socialAlt.youtube")}
                  href={youtubeLink}
                  className="p-2 border rounded-md hover:bg-secondary hover:text-primary hover:font-bold transition-all duration-200"
                >
                  <FiYoutube />
                </a>
              ) : null}
              {linkedinLink ? (
                <a
                  aria-label={t("footer.socialAlt.linkedin")}
                  href={linkedinLink}
                  className="p-2 bg-green/50 rounded-md hover:bg-secondary hover:text-primary hover:font-bold transition-all duration-200"
                >
                  <FaLinkedinIn />
                </a>
              ) : null}

              {tiktokLink ? (
                <a
                  aria-label={t("footer.socialAlt.tiktok")}
                  href={tiktokLink}
                  className="p-2 bg-green/50 rounded-md hover:bg-secondary hover:text-primary hover:font-bold transition-all duration-200"
                >
                  <FaTiktok />
                </a>
              ) : null}
            </div>
          </div>
        </div>
        <div className="mt-2 mb-3"></div>

        {/* Bottom bar */}
        <div className="py-6 border-t flex flex-col md:flex-row items-center justify-between gap-4 text-sm ">
          <p>
            {" "}
            © {new Date().getFullYear()} {t("footer.rights")}
          </p>
          <p className="flex items-center gap-2 text-sm sm:text-base font-medium text-gray-500 dark:text-gray-400">
            <span className="rtl:order-1">Designed and developed by</span>
            <a
              href="https://linktr.ee/Mairo12Mesak"
              target="_blank"
              className="flex items-center gap-1 rtl:order-0 relative group overflow-hidden"
            >
              <span className="relative rtl:pe-2 ltr:ps-2 rtl:order-1 z-10 group-hover:text-secondary transition-colors duration-300">
                 Mario Mesak
              </span>
              <HiExternalLink className="ml-1   mx-2 text-gray-400 group-hover:text-secondary transition-transform duration-300 group-hover:translate-y-[-2px]  " />

              {/* Glow effect */}
              <span className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-500"></span>
            </a>
          </p>
          <div className="flex gap-4">
            <Link
              to="/privacy-policy"
              className="hover:font-bold transition-all duration-200"
            >
              {t("footer.privacy")}
            </Link>
            <Link
              to="/terms"
              className="hover:font-bold transition-all duration-200"
            >
              {t("footer.terms")}
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute w-full h-full bg-green/70  bottom-0 z-0 backdrop-blur-sm  rounded-t-[5rem] inset-0   "></div>
    </footer>
  );
};

export default Footer;
