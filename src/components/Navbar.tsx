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
      className="fixed top-0 w-full bg-black/95 backdrop-blur-md border-b border-white/10 z-50"
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only absolute top-0 left-0 bg-white text-black px-4 py-2 z-50"
      >
        Skip to main content
      </a>

      {/* Navbar */}
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-2">

        {/* LOGO */}
        <a href="#hero" className="flex items-center shrink-0">
          <img
            src="/logo.png"
            alt="Dental Tourism Colombia"
            className="h-10 sm:h-11 lg:h-12 w-auto object-contain select-none"
          />
        </a>

        {/* LINKS DESKTOP */}
        <div className="hidden lg:flex flex-1 justify-center">
          <ul className="flex items-center gap-8">
            {menuItems.map((item) => (
              <li key={item.key}>
                <a
                  href={`#${item.key}`}
                  className="text-white/90 relative pb-1 border-b-2 border-transparent hover:text-white hover:border-[#d4af37] transition-all duration-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* DERECHA DESKTOP */}
        <div className="hidden lg:flex items-center gap-5">
          {/* Idiomas */}
          <div className="flex items-center gap-2">
            <button onClick={() => changeLanguage("en")} type="button">
              <img
                src="/flags/us.svg"
                className={`w-6 h-6 ${currentLang === "en"
                    ? "ring-2 ring-[#d4af37] rounded-full"
                    : ""
                  }`}
              />
            </button>

            <button onClick={() => changeLanguage("es")} type="button">
              <img
                src="/flags/co.svg"
                className={`w-6 h-6 ${currentLang === "es"
                    ? "ring-2 ring-[#d4af37] rounded-full"
                    : ""
                  }`}
              />
            </button>
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="bg-[#1f2f46] text-white px-5 py-2 font-semibold rounded-md hover:bg-[#2b3f5d] transition-all duration-300"
          >
            {t("cta")}
          </a>
        </div>

        {/* MOBILE */}
        <div className="flex items-center gap-3 lg:hidden">
          <button onClick={() => changeLanguage("en")} type="button">
            <img src="/flags/us.svg" className="w-6 h-6" />
          </button>

          <button onClick={() => changeLanguage("es")} type="button">
            <img src="/flags/co.svg" className="w-6 h-6" />
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-white"
            type="button"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor">
              {menuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" strokeWidth={2} />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" strokeWidth={2} />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="lg:hidden px-4 pb-4 pt-2 bg-black border-t border-white/10">
          <ul className="grid grid-cols-2 gap-3">
            {menuItems.map((item) => (
              <li key={item.key}>
                <a
                  href={`#${item.key}`}
                  className="block px-3 py-2 text-white/90 hover:bg-white/5"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="block w-full mt-4 bg-[#1f2f46] text-white px-4 py-3 rounded-md text-center font-semibold"
          >
            {t("cta")}
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;