import { useTranslation } from "react-i18next";

// Type guard para arrays de strings
function isStringArray(value: unknown): value is string[] {
  return (
    Array.isArray(value) && value.every((item) => typeof item === "string")
  );
}

/**
 * Componente TourismDental (Turismo Dental):
 * Destaca el enfoque de turismo médico en Colombia.
 * Muestra información sobre el proceso y fotos de destinos turísticos.
 * Los testimonios de pacientes fueron eliminados.
 */
const TourismDental = () => {
  const { t } = useTranslation("tourismDental");

  const servicesIncluded = t("servicesIncluded", { returnObjects: true });
  const processSteps = t("processSteps", { returnObjects: true });

  return (
    <section
      id="tourism"
      className="bg-[#060F1E] text-white px-6 py-24 scroll-mt-20"
      aria-labelledby="tourism-heading"
      role="region"
    >
      <div className="max-w-6xl mx-auto">

        {/* Encabezado */}
        <div className="text-center mb-16">
          <span className="inline-block mb-4 text-xs font-semibold tracking-[0.2em] uppercase text-[#C9A84C]">
            — {t("sectionLabel")}
          </span>
          <h2
            id="tourism-heading"
            className="text-4xl md:text-5xl font-extrabold mb-5 tracking-tight text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {t("title")}
          </h2>
          <div className="w-16 h-[3px] bg-gradient-to-r from-[#C9A84C] to-[#E0BC6A] mx-auto rounded-full" />
        </div>

        {/* Tarjetas info — Por qué Colombia + Servicios incluidos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">

          {/* Por qué Colombia */}
          <article className="bg-white/5 p-8 rounded-2xl border border-[#C9A84C]/20 hover:border-[#C9A84C]/40 transition-colors duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[#C9A84C]/15 rounded-xl border border-[#C9A84C]/25 flex items-center justify-center flex-shrink-0">
                <svg aria-hidden="true" className="w-6 h-6 text-[#C9A84C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">{t("whyTitle")}</h3>
            </div>
            <p className="text-white/65 text-base leading-relaxed font-light">{t("whyDescription")}</p>
          </article>

          {/* Servicios incluidos */}
          <article className="bg-white/5 p-8 rounded-2xl border border-[#C9A84C]/20 hover:border-[#C9A84C]/40 transition-colors duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[#C9A84C]/15 rounded-xl border border-[#C9A84C]/25 flex items-center justify-center flex-shrink-0">
                <svg aria-hidden="true" className="w-6 h-6 text-[#C9A84C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">{t("servicesIncludedTitle")}</h3>
            </div>
            <ul className="space-y-3 text-white/65 text-base font-light">
              {isStringArray(servicesIncluded)
                ? servicesIncluded.map((service, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#C9A84C] font-bold mt-0.5 flex-shrink-0">•</span>
                    {service}
                  </li>
                ))
                : null}
            </ul>
          </article>
        </div>

        {/* Galería de destinos turísticos */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-white/90">
            {t("destinosTitle")}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

            {[
              { src: "/images/turismo-1.jpeg", city: "Cartagena", desc: "Ciudad moderna y acogedora" },
              { src: "/images/turismo-2.jpeg", city: "San Andrés", desc: "Historia, mar y encanto colonial" },
              { src: "/images/turismo-3.jpeg", city: "Cañón del Chicamocha", desc: "Aventura y paisajes inolvidables" },
              { src: "/images/turismo-4.jpeg", city: "Mompox", desc: "Pueblo colonial con gran belleza" },
            ].map((place) => (
              <div key={place.city} className="group relative overflow-hidden rounded-2xl shadow-lg border border-[#C9A84C]/10 hover:border-[#C9A84C]/30 transition-colors duration-300">
                <img
                  src={place.src}
                  alt={place.city}
                  className="w-full h-72 object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1527]/85 via-[#0B1527]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-5">
                  <p className="text-white text-base font-semibold">{place.city}</p>
                  <p className="text-white/70 text-xs mt-0.5">{place.desc}</p>
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* Proceso paso a paso */}
        <article className="bg-white text-[#0B1527] p-10 rounded-3xl shadow-2xl max-w-4xl mx-auto relative overflow-hidden border border-[#C9A84C]/20">
          {/* Decoración dorada de fondo */}
          <div className="absolute top-0 right-0 w-56 h-56 bg-[#C9A84C]/5 rounded-full -mr-28 -mt-28 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#C9A84C]/5 rounded-full -ml-20 -mb-20 pointer-events-none" />

          <h3
            className="text-2xl md:text-3xl font-bold mb-8 text-center relative z-10 text-[#0B1527]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {t("processTitle")}
          </h3>

          <ol className="relative border-l-2 border-[#C9A84C]/30 ml-4 space-y-8 z-10">
            {isStringArray(processSteps)
              ? processSteps.map((step, i) => (
                <li key={i} className="pl-8 relative">
                  <span className="absolute w-8 h-8 bg-[#C9A84C] rounded-full flex items-center justify-center text-[#0B1527] font-bold text-sm -left-[17px] ring-4 ring-white shadow-md">
                    {i + 1}
                  </span>
                  <p className="text-base text-slate-700 pt-1 font-light leading-relaxed">{step}</p>
                </li>
              ))
              : null}
          </ol>
        </article>

      </div>
    </section>
  );
};

export default TourismDental;
