import { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

/**
 * Componente Navbar:
 * Representa la barra de navegación superior.
 * Incluye el logo, los enlaces de anclaje a las secciones,
 * el selector de idioma y el menú responsivo para móviles.
 */
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
    setMenuOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full bg-black/95 backdrop-blur-md border-b border-white/10 z-50"
      role="navigation"
      aria-label="Main navigation"
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only absolute top-2 left-2 bg-white text-black px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>

      <div className="max-w-7xl mx-auto h-[82px] px-6 lg:px-8 flex items-center justify-between">
        {/* LOGO */}
        <a
          href="#hero"
          className="flex items-center shrink-0 pr-6"
          aria-label="Go to homepage"
        >
          <img
            src="/logo.svg"
            alt="Paula Galvis"
            className="h-12 sm:h-14 lg:h-[58px] w-auto object-contain select-none brightness-0 invert drop-shadow-[0_0_6px_rgba(255,255,255,0.25)] transition-all duration-300"
          />
        </a>

        {/* LINKS DESKTOP */}
        <div className="hidden lg:flex flex-1 justify-center">
          <ul className="flex items-center gap-9 xl:gap-11">
            {menuItems.map((item) => (
              <li key={item.key}>
                <a
                  href={`#${item.key}`}
                  className="text-white/90 text-[15px] xl:text-base font-medium relative pb-1 border-b-2 border-transparent hover:text-white hover:border-[#d4af37] focus:outline-none focus:text-white focus:border-[#d4af37] transition-all duration-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* DERECHA DESKTOP */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-5 shrink-0">
          <div className="flex items-center gap-2">
            <button
              onClick={() => changeLanguage("en")}
              type="button"
              aria-label="Change language to English"
              className="rounded-full focus:outline-none focus:ring-2 focus:ring-[#d4af37]/70"
            >
              <img
                src="/flags/us.svg"
                alt="English"
                className={`w-7 h-7 rounded-full transition ${currentLang === "en" ? "ring-2 ring-[#d4af37]" : ""
                  }`}
              />
            </button>

            <button
              onClick={() => changeLanguage("es")}
              type="button"
              aria-label="Cambiar idioma a español"
              className="rounded-full focus:outline-none focus:ring-2 focus:ring-[#d4af37]/70"
            >
              <img
                src="/flags/co.svg"
                alt="Español"
                className={`w-7 h-7 rounded-full transition ${currentLang === "es" ? "ring-2 ring-[#d4af37]" : ""
                  }`}
              />
            </button>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-[#1f2f46] text-white px-5 xl:px-6 py-2.5 text-sm font-semibold rounded-xl hover:bg-[#2b3f5d] focus:outline-none focus:ring-2 focus:ring-[#d4af37]/60 transition-all duration-300 shadow-sm whitespace-nowrap"
          >
            {t("cta")}
          </a>
        </div>

        {/* MOBILE */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={() => changeLanguage("en")}
            type="button"
            aria-label="Change language to English"
            className="rounded-full focus:outline-none focus:ring-2 focus:ring-[#d4af37]/70"
          >
            <img
              src="/flags/us.svg"
              alt="English"
              className={`w-6 h-6 rounded-full ${currentLang === "en" ? "ring-2 ring-[#d4af37]" : ""
                }`}
            />
          </button>

          <button
            onClick={() => changeLanguage("es")}
            type="button"
            aria-label="Cambiar idioma a español"
            className="rounded-full focus:outline-none focus:ring-2 focus:ring-[#d4af37]/70"
          >
            <img
              src="/flags/co.svg"
              alt="Español"
              className={`w-6 h-6 rounded-full ${currentLang === "es" ? "ring-2 ring-[#d4af37]" : ""
                }`}
            />
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4af37]/70"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  d="M6 18L18 6M6 6l12 12"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              ) : (
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden px-4 pb-4 pt-2 bg-black border-t border-white/10"
        >
          <ul className="grid grid-cols-2 gap-3">
            {menuItems.map((item) => (
              <li key={item.key}>
                <a
                  href={`#${item.key}`}
                  onClick={() => setMenuOpen(false)}
                  className="block px-3 py-2 text-white/90 rounded-lg hover:bg-white/5 transition"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block w-full mt-4 bg-[#1f2f46] text-white px-4 py-3 rounded-xl text-center font-semibold hover:bg-[#2b3f5d] transition"
          >
            {t("cta")}
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;