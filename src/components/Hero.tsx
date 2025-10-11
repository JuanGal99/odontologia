import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation("hero");

  return (
    <section
      id="hero"
      className="bg-white text-sky-900 px-6 py-6 lg:py-10 scroll-mt-20"
      aria-labelledby="hero-heading"
      role="region"
    >
      <div className="max-w-5xl mx-auto text-center space-y-8">
        {/* Heading principal */}
        <h1
          id="hero-heading"
          className="text-4xl md:text-5xl font-extrabold leading-tight"
        >
          {t("title")}
        </h1>

        {/* Subtítulo */}
        <h2 className="text-xl md:text-2xl text-sky-700 font-medium">
          {t("subtitle")}
        </h2>

        {/* Botones de acción */}
        <div className="flex flex-col md:flex-row justify-center gap-4 pt-2">
          <a
            href="#services"
            className="bg-sky-500 text-white px-6 py-3 rounded-md font-semibold shadow hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400 transition text-center"
            aria-label="Descubre nuestros servicios"
          >
            {t("services")}
          </a>

          <button
            className="bg-white text-sky-500 border border-sky-500 px-6 py-3 rounded-md font-semibold hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-300 transition"
            type="button"
            aria-label="Soy paciente internacional"
          >
            {t("pacientI")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
