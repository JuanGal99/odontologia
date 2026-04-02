import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation("hero");

  return (
    <section
      id="hero"
      className="relative min-h-[85vh] flex items-center justify-center scroll-mt-20 overflow-hidden"
      aria-labelledby="hero-heading"
      role="region"
      style={{
        backgroundImage: "url('/images/img_principal.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center 47%",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Capa oscura con degradado para un look más premium */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Contenido */}
      <div className="relative z-10 px-6 py-20 max-w-5xl mx-auto text-center text-white">
        <h1
          id="hero-heading"
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight tracking-tight drop-shadow-lg"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          {t("title")}
        </h1>

        <p
          className="mt-6 text-xl md:text-3xl font-light max-w-3xl mx-auto drop-shadow-md text-sky-50"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          {t("subtitle")}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="#services"
            className="inline-flex items-center justify-center bg-white text-sky-800 px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl hover:bg-sky-50 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-white/50 transition-all duration-300 text-lg"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            {t("services")}
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-sky-600 text-white px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl hover:bg-sky-500 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-sky-400/50 transition-all duration-300 text-lg"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            {t("pacientI")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;