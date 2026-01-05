import { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation("navbar");
  const currentLang = i18n.language as "en" | "es";

  const menuItems = [
    { key: "about", label: t("about") },
    { key: "services", label: t("services") },
    { key: "tourism", label: t("tourism") },
    { key: "contact", label: t("contact") },
  ];

  const changeLanguage = (lng: "en" | "es") => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav
      className="fixed top-0 w-full bg-sky-500 text-white z-50"
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Skip link para accesibilidad */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only absolute top-0 left-0 bg-white text-sky-500 px-4 py-2 z-50"
      >
        Skip to main content
      </a>

      {/* Navbar principal */}
      <div className="flex items-center justify-between p-4">
        {/* Logo (izquierda) */}
        <a href="#hero" className="flex items-center gap-2">
          <img
            src="/tooth.svg"
            alt="Dental Tourism Colombia"
            className="h-8 w-8"
          />
          <span className="font-bold text-black text-lg">DentalTour</span>
        </a>

        {/* Contenedor central para enlaces (solo desktop) */}
        <div className="hidden lg:flex flex-1 justify-center">
          <ul className="flex gap-6">
            {menuItems.map((item) => (
              <li key={item.key}>
                <a
                  href={`#${item.key}`}
                  aria-current={item.key === "home" ? "page" : undefined}
                  className=" relative pb-1 border-b-2 border-transparent hover:border-white focus:outline-none focus:border-white transition-all duration-300 ease-in-out"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contenedor derecho para idioma y CTA (solo desktop) */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Selector de idioma */}
          <div className="flex gap-2">
            <button
              onClick={() => changeLanguage("en")}
              aria-label="Change language to English"
              aria-pressed={currentLang === "en"}
            >
              <img
                src="/flags/us.svg"
                alt="English"
                className={`w-6 h-6 hover:opacity-80 ${currentLang === "en" ? "ring-2 ring-white rounded-full" : ""
                  }`}
              />
            </button>
            <button
              onClick={() => changeLanguage("es")}
              aria-label="Cambiar idioma a Español"
              aria-pressed={currentLang === "es"}
            >
              <img
                src="/flags/co.svg"
                alt="Español"
                className={`w-6 h-6 hover:opacity-80 ${currentLang === "es" ? "ring-2 ring-white rounded-full" : ""
                  }`}
              />
            </button>
          </div>

          {/* Botón CTA */}
          <a
            href="#contact"
            className="bg-white text-sky-500 px-4 py-2 font-semibold rounded hover:bg-slate-100 cursor-pointer focus:outline-none focus:ring-2 focus:ring-sky-300 inline-block"
          >
            {t("cta")}
          </a>
        </div>

        {/* Selector de idioma - móvil */}
        <div className="flex gap-4 lg:hidden">
          <button
            onClick={() => changeLanguage("en")}
            aria-label="Change language to English"
          >
            <img
              src="/flags/us.svg"
              alt="English"
              className="w-6 h-6 hover:opacity-80"
            />
          </button>
          <button
            onClick={() => changeLanguage("es")}
            aria-label="Cambiar idioma a Español"
          >
            <img
              src="/flags/co.svg"
              alt="Español"
              className="w-6 h-6 hover:opacity-80"
            />
          </button>
        </div>

        {/* Botón menú hamburguesa - móvil */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2 focus:outline-none rounded"
          aria-label={menuOpen ? t("closeMenu") : t("openMenu")}
          aria-expanded={menuOpen ? "true" : "false"}
          aria-controls="mobile-menu"
          type="button"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-hidden="true"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Menú desplegable - móvil */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden px-4 pb-4"
          role="menu"
          aria-label="Mobile menu"
        >
          {/* Navegación móvil */}
          <ul className="grid grid-cols-2 gap-3">
            {menuItems.map((item) => (
              <li key={item.key}>
                <a
                  href={`#${item.key}`}
                  role="menuitem"
                  tabIndex={0}
                  aria-current={item.key === "home" ? "page" : undefined}
                  className="block rounded"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Botón CTA móvil */}
          <a
            href="#contact"
            className="block w-full mt-4 bg-white text-sky-500 px-4 py-2 rounded text-center"
          >
            {t("cta")}
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
