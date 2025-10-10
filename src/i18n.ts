import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import navbarEn from "./locales/en/navbar";
import navbarEs from "./locales/es/navbar";

const resources = {
  en: {
    navbar: navbarEn,
  },
  es: {
    navbar: navbarEs,
  },
} as const;

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  ns: ["navbar"],
  defaultNS: "navbar",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
