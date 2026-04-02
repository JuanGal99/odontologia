import { useTranslation } from "react-i18next";

const agencies = [
  { name: "Agencia Viajes XYZ", logo: "/logos/xyz.svg" },
  { name: "Travel Colombia", logo: "/logos/travelcol.svg" },
];

const testimonials = [
  {
    id: 1,
    patient: "John D.",
    quote:
      "Excelente experiencia, tratamiento profesional y vacaciones increíbles en Colombia.",
  },
  {
    id: 2,
    patient: "Mary S.",
    quote:
      "La atención bilingüe y el acompañamiento hicieron que todo fuera fácil y cómodo.",
  },
];

// Type guard para arrays de strings
function isStringArray(value: unknown): value is string[] {
  return (
    Array.isArray(value) && value.every((item) => typeof item === "string")
  );
}

const TourismDental = () => {
  const { t } = useTranslation("tourismDental");

  const servicesIncluded = t("servicesIncluded", { returnObjects: true });
  const processSteps = t("processSteps", { returnObjects: true });

  return (
    <section
      id="tourism"
      className="bg-sky-900 text-white px-6 py-24 scroll-mt-20"
      aria-labelledby="tourism-heading"
      role="region"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            id="tourism-heading"
            className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-white"
          >
            {t("title")}
          </h2>
          <div className="w-24 h-1 bg-sky-400 mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <article className="bg-sky-800/50 p-8 rounded-2xl backdrop-blur-sm border border-sky-700/50">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 className="text-2xl font-bold">{t("whyTitle")}</h3>
            </div>
            <p className="text-sky-100 text-lg leading-relaxed">{t("whyDescription")}</p>
          </article>

          <article className="bg-sky-800/50 p-8 rounded-2xl backdrop-blur-sm border border-sky-700/50">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <h3 className="text-2xl font-bold">
                {t("servicesIncludedTitle")}
              </h3>
            </div>
            <ul className="space-y-3 text-sky-100 text-lg">
              {isStringArray(servicesIncluded)
                ? servicesIncluded.map((service, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-sky-400 font-bold mt-1">•</span>
                    {service}
                  </li>
                ))
                : null}
            </ul>
          </article>
        </div>

        <article className="bg-white text-sky-900 p-10 rounded-3xl shadow-2xl mb-20 max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-50 rounded-full -mr-32 -mt-32 opacity-50 pointer-events-none"></div>
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center relative z-10">{t("processTitle")}</h3>
          <ol className="relative border-l-2 border-sky-200 ml-4 space-y-8 z-10">
            {isStringArray(processSteps)
              ? processSteps.map((step, i) => (
                <li key={i} className="pl-8 relative">
                  <span className="absolute w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center text-white font-bold text-sm -left-[17px] ring-4 ring-white shadow-sm">{i + 1}</span>
                  <p className="text-lg text-slate-700 pt-1">{step}</p>
                </li>
              ))
              : null}
          </ol>
        </article>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <article>
            <h3 className="text-2xl font-bold mb-8 text-center md:text-left text-sky-200">{t("testimonialsTitle")}</h3>
            <div className="space-y-6">
              {testimonials.map(({ id, patient, quote }) => (
                <blockquote
                  key={id}
                  className="bg-sky-800 rounded-xl p-6 relative"
                  aria-label={`Testimonio de ${patient}`}
                >
                  <svg className="absolute top-4 left-4 w-8 h-8 text-sky-600/50" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8.2c.4-2.2 2.4-4 4.8-4V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-5.8c.4-2.2 2.4-4 4.8-4V8z"></path></svg>
                  <p className="text-sky-50 text-lg italic ml-8 relative z-10">"{quote}"</p>
                  <footer className="mt-4 ml-8 font-bold text-sky-300">
                    — {patient}
                  </footer>
                </blockquote>
              ))}
            </div>
          </article>
          
          <article className="text-center md:text-left hidden">
            {/* Oculto partners a menos que los logos existan o los quieran más prominentes */}
            <h3 className="text-2xl font-bold mb-8 text-sky-200">{t("partnersTitle")}</h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-8 bg-white p-8 rounded-2xl">
              {agencies.map((agency) => (
                <div
                  key={agency.name}
                  className="flex flex-col items-center max-w-[120px]"
                >
                  <img
                    src={agency.logo}
                    alt={agency.name}
                    className="max-h-16 object-contain mb-3 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                    loading="lazy"
                  />
                  <p className="text-center text-xs font-medium text-slate-500">{agency.name}</p>
                </div>
              ))}
            </div>
          </article>
        </div>

      </div>
    </section>
  );
};

export default TourismDental;
