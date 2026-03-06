import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

import { SettingsContext } from "../../Context/SettingsContext";

const ContactUs = () => {
  const { siteEmail, sitePhone, address_en, address_ar } =
    useContext(SettingsContext);

  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const MotionDiv = motion.div;

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay },
    }),
  };

  return (
    <section className="relative py-16 px-4 mb-9  bg-primary rounded-4xl lg:mx-15 shadow-sm mx-3  overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-base opacity-10 blur-3xl rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        {/* Left Side: Info */}
        <MotionDiv
          className="space-y-6 px-4"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-snug">
            {t("contact.headingLine1")}
            <br />
            <span className="text-base">{t("contact.headingLine2")}</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-lg">
            {t("contact.subtitle")}
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            {[
              {
                icon: <FiMapPin size={22} />,
                title: t("contact.findUsTitle"),
                value: lang == "en" ? address_en : (address_ar ?? address_en),
              },
              {
                icon: <FiMail size={22} />,
                title: t("contact.mailUsTitle"),
                value: (
                  <a
                    href={`mailto:${siteEmail}`}
                    className="hover:text-base transition"
                  >
                    {siteEmail}
                  </a>
                ),
              },
              {
                icon: <FiPhone size={22} />,
                title: t("contact.contactUsTitle"),
                value: (
                  <a
                    href={`tel:${sitePhone}`}
                    className="hover:text-base transition"
                  >
                    {sitePhone}
                  </a>
                ),
              },
            ].map((item, i) => (
              <MotionDiv
                key={i}
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                custom={i * 0.2}
                className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-white">
                  {item.icon}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {item.title}
                  </div>
                  <div className="text-gray-600 text-sm mt-1">{item.value}</div>
                </div>
              </MotionDiv>
            ))}
          </div>
        </MotionDiv>

        {/* Right Side: Form */}
        <MotionDiv
          className="w-full bg-white  rounded-2xl "
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={0.3}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3789.8414988816476!2d42.51048947522964!3d18.217206082818496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15e355875ab2155b%3A0xc53c87ab16124976!2zTUlEUE9JTlQgSE9URUwgfCDZgdmG2K_ZgiDZhdmK2K_YqNmI2YrZhtiq!5e0!3m2!1sen!2seg!4v1770399266619!5m2!1sen!2seg"
            width={600}
            height={450}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-2xl"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </MotionDiv>
      </div>
    </section>
  );
};

export default ContactUs;
