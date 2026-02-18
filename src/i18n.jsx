import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEN from "./Locales/en/translation.json";
import translationAR from "./Locales/ar/translation.json";

const resources = {
  en: { translation: translationEN },
  ar: { translation: translationAR },
};

const detectorOptions = {
  order: ["localStorage"],
  lookupLocalStorage: "i18nextLng",
  caches: ["localStorage"],
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,

    // lng: "en",
    fallbackLng: "en",

    detection: detectorOptions,
    interpolation: {
      escapeValue: false,
    },
  });

const updateDocumentLang = (lng) => {
  if (typeof document === "undefined") return;

  document.documentElement.lang = lng;
  document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
};

updateDocumentLang(i18n.language);

i18n.on("languageChanged", (lng) => {
  try {
    localStorage.setItem("i18nextLng", lng);
  } catch {}

  updateDocumentLang(lng);
});

export default i18n;
