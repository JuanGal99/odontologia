import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation("hero");

  return (
    <section
      id="hero"
      className="bg-gradient-to-b from-sky-100 via-white to-white text-sky-900 px-6 py-6 lg:py-10 scroll-mt-20"
      aria-labelledby="hero-heading"
      role="region"
    >
      <div className="max-w-5xl mx-auto lg:grid lg:grid-cols-[4fr_2fr] lg:items-center lg:gap-10">
        {/* Columna texto */}
        <div className="text-center lg:text-left space-y-8">
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
          <div className="flex flex-col md:flex-row justify-center lg:justify-start gap-4 pt-2 text-center">
            <a
              href="#services"
              className="bg-sky-500 text-white px-6 py-3 rounded-md font-semibold shadow hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
              aria-label="Descubre nuestros servicios"
            >
              {t("services")}
            </a>

            <a
              href="#contact"
              className="bg-white text-sky-500 border border-sky-500 px-6 py-3 rounded-md font-semibold hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-300 transition"
              aria-label="Soy paciente internacional"
            >
              {t("pacientI")}
            </a>
          </div>
        </div>

        {/* Contenedor de imágenes con grid */}
        <div className="grid grid-cols-2 gap-4 mt-8 lg:grid-cols-1 lg:mt-0 max-w-[360px] mx-auto lg:mx-0 lg:justify-self-end">
          {/* Imagen 1 */}
          <div className="rounded-lg overflow-hidden shadow aspect-[4/3]">
            <picture>
              <source
                srcSet="/images/beach-desktop.webp"
                media="(min-width: 768px)"
                type="image/webp"
              />
              <img
                src="/images/beach-mobile.webp"
                alt="Playa tropical en Colombia"
                loading="lazy"
                width={360}
                height={270}
                className="w-full h-full object-cover"
              />
            </picture>
          </div>

          {/* Imagen 2 */}
          <div className="rounded-lg overflow-hidden shadow aspect-[4/3]">
            <picture>
              <source
                srcSet="/images/cartagena-desktop.webp"
                media="(min-width: 768px)"
                type="image/webp"
              />
              <img
                src="/images/cartagena-mobile.webp"
                alt="Calles coloridas de Cartagena"
                loading="lazy"
                width={360}
                height={270}
                className="w-full h-full object-cover"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
