import { useTranslation } from "react-i18next";

/**
 * Componente Hero:
 * Representa la primera sección visible (el banner principal) al cargar la página.
 * Contiene el título principal, el subtítulo y llamadas a la acción (botones).
 */
const Hero = () => {
  const { t } = useTranslation("hero");

  return (
    <section
      id="hero"
      className="relative min-h-[50vh] sm:min-h-[75vh] md:min-h-[85vh] flex items-center justify-center md:justify-end scroll-mt-20 overflow-hidden"
      aria-labelledby="hero-heading"
      role="region"
    >
      {/* Fondo MOBILE (320–375 optimizado) */}
      <div
        className="absolute inset-0 md:hidden"
        style={{
          backgroundImage: "url('/images/img_principal.jpeg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "75% 50%",
        }}
      />

      {/* Fondo DESKTOP / TABLET */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          backgroundImage: "url('/images/img_principal.jpeg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center 55%",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Contenido */}
      <div className="relative z-10 px-4 sm:px-6 py-10 sm:py-20 w-full max-w-7xl">
        <div className="max-w-3xl mx-auto md:ml-auto md:mr-20 lg:mr-24 text-white">

          {/* 
            md:translate-x-14 = tablet más a la derecha
            lg:translate-x-16 = laptop 1024 más a la derecha
            xl:translate-x-8  = desktop grande un poco menos agresivo
          */}
          <div className="flex flex-col items-center md:translate-x-14 lg:translate-x-16 xl:translate-x-8">

            <h1
              id="hero-heading"
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight drop-shadow-lg text-center md:text-right cursor-default select-none"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {t("title")}
            </h1>

            <p
              className="mt-4 sm:mt-6 text-sm sm:text-2xl md:text-2xl lg:text-3xl font-light max-w-xs sm:max-w-2xl text-center drop-shadow-md text-sky-50 cursor-default select-none"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {t("subtitle")}
            </p>

            <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center items-center">
              <a
                href="#services"
                className="inline-flex items-center justify-center bg-white text-sky-800 px-5 sm:px-8 py-2.5 sm:py-4 rounded-full font-bold shadow-xl hover:shadow-2xl hover:bg-sky-50 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-white/50 transition-all duration-300 text-sm sm:text-lg"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {t("services")}
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-sky-600 text-white px-5 sm:px-8 py-2.5 sm:py-4 rounded-full font-bold shadow-xl hover:shadow-2xl hover:bg-sky-500 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-sky-400/50 transition-all duration-300 text-sm sm:text-lg"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {t("pacientI")}
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;