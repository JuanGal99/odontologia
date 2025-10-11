import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import navbarEn from "./locales/en/navbar";
import navbarEs from "./locales/es/navbar";
import heroEn from "./locales/en/hero";
import heroEs from "./locales/es/hero";

const resources = {
  en: {
    navbar: navbarEn,
    hero: heroEn,
  },
  es: {
    navbar: navbarEs,
    hero: heroEs,
  },
} as const;

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  ns: ["navbar", "hero"],
  defaultNS: "navbar",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
