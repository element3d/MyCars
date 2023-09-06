import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: require("../locales/en.json"),
    },
    ru: {
      translation: require("../locales/ru.json"),
    },
    am: {
      translation: require("../locales/am.json"),
    },
  },
  lng: "en", // Default language
  fallbackLng: "en", // Fallback language
  interpolation: {
    escapeValue: false, // React already escapes string interpolation
  },
  react: {
    useSuspense: false, // Set to true if you want to use Suspense for loading translations
  },
  html: {
    setAttribute: true,
    attributeName: "lang",
  },
});

export default i18n;
