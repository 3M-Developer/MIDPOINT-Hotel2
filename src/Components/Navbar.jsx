import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
// import { Dropdown, DropdownItem } from "flowbite-react";

import {
  FiHeart,
  FiShoppingBag,
  FiShoppingCart,
  FiPackage,
  FiTag,
  FiTruck,
  FiMenu,
  FiSearch,
  FiX,
  FiPhone,
} from "react-icons/fi";
import Dropdown from "./Dropdown";
// import logo from "../assets/Home/Logo_Header.jpg";
import { FaUserCircle } from "react-icons/fa";
import { RiLoginCircleFill } from "react-icons/ri";
import { AiOutlineUserAdd } from "react-icons/ai";
import axios from "axios";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { BiCategory } from "react-icons/bi";
import { LuRefreshCcw } from "react-icons/lu";
import { IoHome, IoImage } from "react-icons/io5";
import { MdHotel, MdIron, MdMiscellaneousServices } from "react-icons/md";
import Droplist from "./Droplist";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import mainLogo from "../assets/logoWhite.webp";
import secondLogo from "../assets/logo.webp";
import { ApiAuthContext } from "../Context/AuthContext";
import { SettingsContext } from "../Context/SettingsContext";
import AppImage from "./AppImage";
import { BsInfoCircleFill } from "react-icons/bs";
import { FaMicroblog } from "react-icons/fa6";
const Navbar = () => {
  const navigate = useNavigate();

  const { siteName_ar, siteName_en, favicon } = useContext(SettingsContext);
  const { defaultLang } = useContext(ApiAuthContext);
  // Shop dropdown items
  const [isOpen, setIsOpen] = useState(false);
  function toggleLanguage() {
    const next = currentLangIsArabic ? "en" : "ar";
    i18n.changeLanguage(next);
    try {
      localStorage.setItem("lang", next);
    } catch {
      // ignore storage errors
    }
    if (typeof document !== "undefined") {
      document.documentElement.dir = next === "ar" ? "rtl" : "ltr";
    }
  }

  const { baseUrl, XApiKey } = useContext(ApiAuthContext);
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const currentLangIsArabic = i18n.language?.startsWith("ar");

  const Services = [
    {
      name: t("navigation.shopItems.allServices.name"),
      path: t("navigation.shopItems.allServices.path"),
      icon: <FiPackage size={18} />,
      description: t("navigation.shopItems.allServices.description"),
    },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const closeSidebar = () => {
    setIsOpen(false);
  };
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (location.pathname !== "/") {
      setScrolled(true);
      return;
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPoint = 50;
      setScrolled(scrollPosition > triggerPoint);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);
  // Pages dropdown items

  return (
    <>
      <div className="fixed top-0 z-50 w-full  transition-all duration-500 ease-in-out ">
        {/* Desktop Navbar */}
        <div className="hidden lg:block fixed w-full">
          {/* Top Bar */}

          {/* Main Navigation */}
          <div
            className={`  transition-all duration-300 ${scrolled ? "bg-primary border-b border-third   backdrop-blur-2xl" : "  bg-secondary/25  py-1   backdrop-blur-md  "}`}
          >
            <div className="px-10 w-full ">
              <div className="flex items-center justify-between py-2">
                {/* Logo */}

                <Link to="/" className="flex items-center">
                  {/* <img src={mainLogo} alt="Joot Bag" className="w-40" /> */}
                  <AppImage
                    src={!scrolled ? mainLogo : secondLogo}
                    alt={lang == "ar" ? siteName_ar : siteName_en}
                    className="w-40"
                  />
                </Link>

                {/* Navigation Links */}
                <nav className="hidden lg:flex items-center w-xl text-black  justify-between gap-4 font-bold lg:me-30">
                  <NavLink
                    className={({ isActive }) =>
                      `
                    flex items-center justify-center
                    transition-all
                    rounded-full
                    text-center
                    duration-300
                    ease-in-out
                    ${isActive ? ` border-s-4 border-e-4 border-primary h-12.5 w-35   flex items-center justify-center rounded-full ${scrolled ? "text-secondary border-secondary" : "text-primary border-primary"}` : `  font-medium transition-colors ${scrolled ? "text-secondary border-secondary" : "text-primary border-primary"}`}
                  `
                    }
                    to="/"
                  >
                    {t("navigation.menu.home")}
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      `
                    flex items-center justify-center
                    transition-all
                    rounded-full
                    text-center
                    duration-300
                    ease-in-out
                    ${isActive ? ` border-s-4 border-e-4 border-primary h-12.5 w-35   flex items-center justify-center rounded-full ${scrolled ? "text-secondary border-secondary" : "text-primary border-primary"}` : `  font-medium transition-colors ${scrolled ? "text-secondary border-secondary" : "text-primary border-primary"}`}
                  `
                    }
                    to="/rooms"
                  >
                    {t("navigation.menu.services")}
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      `
                    flex items-center justify-center
                    transition-all
                    rounded-full
                    text-center
                    duration-300
                    ease-in-out
                    ${isActive ? ` border-s-4 border-e-4 border-primary h-12.5 w-35   flex items-center justify-center rounded-full ${scrolled ? "text-secondary border-secondary" : "text-primary border-primary"}` : `  font-medium transition-colors ${scrolled ? "text-secondary border-secondary" : "text-primary border-primary"}`}
                  `
                    }
                    to="/gallery"
                  >
                    {t("navigation.menu.gallrey")}
                  </NavLink>

                  <NavLink
                    className={({ isActive }) =>
                      `
                    flex items-center justify-center
                    transition-all
                    rounded-full
                    text-center
                    duration-300
                    ease-in-out
                    ${isActive ? ` border-s-4 border-e-4 border-primary h-12.5 w-35   flex items-center justify-center rounded-full ${scrolled ? "text-secondary border-secondary" : "text-primary border-primary"}` : `  font-medium transition-colors ${scrolled ? "text-secondary border-secondary" : "text-primary border-primary"}`}
                  `
                    }
                    to="/about"
                  >
                    {t("navigation.menu.about")}
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      `
                    flex items-center justify-center
                    transition-all
                    rounded-full
                    text-center
                    duration-300
                    ease-in-out
                    ${isActive ? ` border-s-4 border-e-4 border-primary h-12.5 w-35   flex items-center justify-center rounded-full ${scrolled ? "text-secondary border-secondary" : "text-primary border-primary"}` : `  font-medium transition-colors ${scrolled ? "text-secondary border-secondary" : "text-primary border-primary"}`}
                  `
                    }
                    to="/amenities"
                  >
                    {t("navigation.menu.amenities")}
                  </NavLink>
                </nav>

                {/* Action Icons */}
                <div className="flex items-center space-x-4 relative">
                  <button
                    onClick={toggleLanguage}
                    className="hidden md:inline-flex items-center gap-2   rounded-xl   border-gray-300 text-sm font-semibold  text-third hover:bg-gray-50 transition-colors"
                    aria-label="Toggle language"
                  >
                    <span
                      className={`w-6 h-6 rounded  flex items-center justify-center   text-[12px] leading-5 text-center ${scrolled ? "text-primary bg-secondary" : "text-secondary bg-primary"}`}
                    >
                      {currentLangIsArabic ? "AR" : "EN"}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navbar */}

        <div className="lg:hidden ">
          {/* Main Mobile Nav */}
          <div
            className={`flex items-center justify-between   transition-all duration-300 ${scrolled ? "bg-primary" : " bg-transparent"}`}
          >
            {/* Hamburger Menu */}
            <button
              onClick={toggleSidebar}
              className="   h-full p-2 w-15 flex items-center justify-center rounded-xl  text-third hover:text-gray-900 transition-colors"
            >
              {isOpen ? (
                <FiX className="h-[60px] text-2xl" />
              ) : (
                <FiMenu className="h-[60px] text-2xl" />
              )}
            </button>

            {/* Logo */}
            <Link to="/" className="flex items-center  p-2 rounded-xl ">
              <div className="h-[60px] w-65 flex justify-center items-center">
                <AppImage
                  src={scrolled ? secondLogo : mainLogo}
                  alt={lang == "ar" ? siteName_ar : siteName_en}
                  className="h-[45px]"
                />
              </div>
            </Link>

            {/* Action Icons */}
            <div className="flex   p-2 items-center gap-2  px-3 py-2 rounded-xl  ">
              <button
                onClick={toggleLanguage}
                className="inline-flex items-center gap-2 rounded-xl text-sm font-semibold text-third hover:opacity-80 transition-opacity"
                aria-label="Toggle language"
              >
                <span className="flex items-center justify-center w-6 h-6 rounded bg-secondary text-primary text-[12px] leading-5 text-center">
                  {currentLangIsArabic ? "AR" : "EN"}
                </span>
              </button>
              {/* <button
                onClick={() => window.dispatchEvent(new Event("open-search"))}
                className="p-2 text-third hover:opacity-80 transition-opacity"
              >
                <FiSearch className="h-[40px] text-2xl" />
              </button> */}
            </div>
          </div>
        </div>

        {/* Mobile Sidebar Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/20 bg-opacity-50 z-40 lg:hidden"
            onClick={closeSidebar}
          />
        )}

        {/* Mobile Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full w-80 bg-primary shadow-xl transform transition-transform duration-300 ease-in-out z-70 lg:hidden ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-4 border-b border-third/20">
            <div className="flex">
              {secondLogo ? (
                // <img src={secondLogo} alt="Joot Bag" className="w-35" />
                <AppImage
                  src={secondLogo}
                  alt={lang == "ar" ? siteName_ar : siteName_en}
                  className="w-35"
                />
              ) : null}
            </div>
            <button
              onClick={closeSidebar}
              className="p-2 text-third hover:opacity-80 transition-opacity"
            >
              <FiX size={24} />
            </button>
          </div>

          {/* Sidebar Navigation */}
          <nav className="p-4 overflow-y-scroll no-scroll-bar">
            <ul className="space-y-4 ">
              <li>
                <Link
                  to="/"
                  className="block   px-4 text-third font-bold hover:bg-white/10 rounded-xl transition-colors"
                  onClick={closeSidebar}
                >
                  <div className="flex gap-3 items-center">
                    <IoHome size={20} />
                    {t("navigation.menu.home")}
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  to="/rooms"
                  className="flex  px-4 text-third font-bold hover:bg-white/10 rounded-xl transition-colors"
                  onClick={closeSidebar}
                >
                  <div className="flex gap-3 items-center">
                    <MdHotel size={25} />
                    <span className="text-baseTwo font-bold">
                      {t("navigation.menu.services")}
                    </span>
                  </div>
                </Link>
              </li>

              <li>
                <Link
                  onClick={closeSidebar}
                  to="/about"
                  className="  flex gap-3   px-4 text-third hover:text-third font-bold hover:bg-white/10 rounded-xl transition-colors"
                >
                  <BsInfoCircleFill size={25} />
                  {t("navigation.menu.about")}
                </Link>
              </li>
              <li>
                <Link
                  onClick={closeSidebar}
                  to="/amenities"
                  className="  flex gap-3   px-4 text-third hover:text-third font-bold hover:bg-white/10 rounded-xl transition-colors"
                >
                  <MdIron size={25} />
                  {t("navigation.menu.amenities")}
                </Link>
              </li>
              <li>
                <Link
                  onClick={closeSidebar}
                  to="/gallery"
                  className="  flex gap-3   px-4 text-third hover:text-third font-bold hover:bg-white/10 rounded-xl transition-colors"
                >
                  <IoImage size={25} />
                  {t("navigation.menu.gallrey")}
                </Link>
              </li>
            </ul>

            <div className="mt-3"></div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
