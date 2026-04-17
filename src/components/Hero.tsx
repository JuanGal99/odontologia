import { useTranslation } from "react-i18next";

/**
 * Componente Hero:
 * Banner principal al cargar la página.
 * Título, subtítulo y botones CTA con paleta navy + dorada.
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
      {/*
        Imagen de fondo como <img> con fetchPriority="high" — clave para el LCP.
        Posicionada absolutamente, el browser la detecta en el HTML y la prioriza.
        object-position diferente para mobile vs desktop con clases responsive.
      */}
      <img
        src="/images/img_principal.jpeg"
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        decoding="auto"
        className="absolute inset-0 w-full h-full object-cover object-[75%_50%] md:object-[center_55%]"
      />

      {/* Overlay más dramático y premium — navy profundo */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1527]/85 via-[#0B1527]/55 to-[#0B1527]/75" />

      {/* Línea dorada decorativa — borde inferior del hero */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C9A84C]/60 to-transparent" />

      {/* Contenido */}
      <div className="relative z-10 px-4 sm:px-6 py-10 sm:py-20 w-full max-w-7xl">
        <div className="max-w-3xl mx-auto md:ml-auto md:mr-20 lg:mr-24 text-white">
          <div className="flex flex-col items-center md:translate-x-14 lg:translate-x-16 xl:translate-x-8">

            {/* Etiqueta premium sobre el título — traducida por i18n */}
            <span className="mb-4 px-4 py-1 text-xs font-semibold tracking-[0.2em] uppercase text-[#C9A84C] border border-[#C9A84C]/40 rounded-full bg-[#C9A84C]/5">
              {t("badge")}
            </span>

            <h1
              id="hero-heading"
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight drop-shadow-lg text-center md:text-right cursor-default select-none"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {t("title")}
            </h1>

            {/* Línea dorada decorativa bajo el título */}
            <div className="mt-5 w-16 h-[2px] bg-gradient-to-r from-[#C9A84C] to-[#E0BC6A] rounded-full md:self-end" />

            <p
              className="mt-5 sm:mt-6 text-sm sm:text-2xl md:text-2xl lg:text-3xl font-light max-w-xs sm:max-w-2xl text-center drop-shadow-md text-white/85 cursor-default select-none"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {t("subtitle")}
            </p>

            {/* Botones CTA */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center items-center">
              {/* Botón primario — dorado */}
              <a
                href="#services"
                className="inline-flex items-center justify-center bg-[#C9A84C] text-[#0B1527] px-6 sm:px-9 py-3 sm:py-4 rounded-full font-bold shadow-xl hover:shadow-[0_8px_30px_-4px_rgba(201,168,76,0.5)] hover:bg-[#E0BC6A] hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-[#C9A84C]/50 transition-all duration-300 text-sm sm:text-lg tracking-wide"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {t("services")}
              </a>

              {/* Botón secundario — borde blanco transparente */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center border-2 border-white/60 text-white px-6 sm:px-9 py-3 sm:py-4 rounded-full font-bold hover:border-[#C9A84C] hover:text-[#C9A84C] hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-white/30 transition-all duration-300 text-sm sm:text-lg tracking-wide"
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