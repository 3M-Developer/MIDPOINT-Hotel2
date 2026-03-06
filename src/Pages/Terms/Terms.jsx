import { useTranslation } from "react-i18next";
import { FiFileText } from "react-icons/fi";
import { IoShieldCheckmarkSharp } from "react-icons/io5";

import { Helmet } from "react-helmet";
import { useContext } from "react";
import { SettingsContext } from "../../Context/SettingsContext";

export default function Terms() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const { currency, siteName_ar, siteName_en } = useContext(SettingsContext);
  const policyParagraphs = t("terms.policyParagraphs", { returnObjects: true });
  return (
    <>
      <Helmet>
        <title>
          {" "}
          {lang === "en" ? siteName_en : siteName_ar ?? siteName_en} |{" "}
          {lang === "en" ? "Terms and Conditions" : " الشروط والأحكام  "}{" "}
        </title>
      </Helmet>

      <div className="min-h-screen" dir={i18n.dir()}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 my-15">
          <div className="bg-white rounded-4xl shadow-sm border border-gray-200 p-8 lg:p-12">
            {/* Introduction */}
            <section id="introduction" className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <FiFileText className="w-8 h-8"  />
                <h2 className="text-gray-900 !text-4xl font-semibold  ">
                  {t("terms.introductionTitle")}
                </h2>
              </div>
              <p className="text-gray-700">{t("terms.introductionText")}</p>
            </section>

            {/* Terms & Policy */}
            <section id="policy" className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <IoShieldCheckmarkSharp
                  className="w-8 h-8"
                  
                />
                <h2 className="text-gray-900 !text-4xl font-semibold  ">
                  {t("terms.policyTitle")}
                </h2>
              </div>
              <div className="space-y-4 text-gray-700">
                {Array.isArray(policyParagraphs) ? (
                  policyParagraphs.map((para, idx) => <p key={idx}>{para}</p>)
                ) : (
                  <p>{policyParagraphs}</p>
                )}
              </div>
            </section>

            {/* Contact */}
            <section id="contact" className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <IoShieldCheckmarkSharp
                  className="w-8 h-8"
                   
                />
                <h2 className="text-gray-900 text-4xl! font-semibold  ">
                  {t("terms.contactTitle")}
                </h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>{t("terms.contactStop")}</p>
                <p>{t("terms.contactRefund")}</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
