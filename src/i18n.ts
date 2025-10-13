import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import navbarEn from "./locales/en/navbar";
import navbarEs from "./locales/es/navbar";
import heroEn from "./locales/en/hero";
import heroEs from "./locales/es/hero";
import aboutEn from "./locales/en/about";
import aboutEs from "./locales/es/about";
import servicesEn from "./locales/en/services";
import servicesEs from "./locales/es/services";
import tourismDentalEn from "./locales/en/tourismDental";
import tourismDentalEs from "./locales/es/tourismDental";
import contactEn from "./locales/en/contact";
import contactEs from "./locales/es/contact";

const resources = {
  en: {
    navbar: navbarEn,
    hero: heroEn,
    about: aboutEn,
    services: servicesEn,
    tourismDental: tourismDentalEn,
    contact: contactEn,
  },
  es: {
    navbar: navbarEs,
    hero: heroEs,
    about: aboutEs,
    services: servicesEs,
    tourismDental: tourismDentalEs,
    contact: contactEs,
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
