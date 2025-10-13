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
      className="bg-sky-100 text-sky-900 px-6 py-16 scroll-mt-20 max-w-6xl mx-auto"
      aria-labelledby="tourism-heading"
      role="region"
    >
      <h2
        id="tourism-heading"
        className="text-3xl font-extrabold mb-8 text-center"
      >
        {t("title")}
      </h2>

      <article className="mb-12 max-w-3xl mx-auto">
        <h3 className="text-xl font-semibold mb-2">{t("whyTitle")}</h3>
        <p className="text-sky-800">{t("whyDescription")}</p>
      </article>

      <article className="mb-12 max-w-3xl mx-auto">
        <h3 className="text-xl font-semibold mb-4">
          {t("servicesIncludedTitle")}
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-sky-800">
          {isStringArray(servicesIncluded)
            ? servicesIncluded.map((service, i) => <li key={i}>{service}</li>)
            : null}
        </ul>
      </article>

      <article className="mb-12 max-w-3xl mx-auto">
        <h3 className="text-xl font-semibold mb-4">{t("processTitle")}</h3>
        <ol className="list-decimal pl-6 space-y-2 text-sky-800">
          {isStringArray(processSteps)
            ? processSteps.map((step, i) => <li key={i}>{step}</li>)
            : null}
        </ol>
      </article>

      <article className="mb-12 max-w-3xl mx-auto">
        <h3 className="text-xl font-semibold mb-6">{t("partnersTitle")}</h3>
        <div className="flex flex-wrap justify-center gap-8">
          {agencies.map((agency) => (
            <div
              key={agency.name}
              className="flex flex-col items-center max-w-[120px]"
            >
              <img
                src={agency.logo}
                alt={agency.name}
                className="max-h-16 object-contain mb-2"
                loading="lazy"
              />
              <p className="text-center text-sm text-sky-700">{agency.name}</p>
            </div>
          ))}
        </div>
      </article>

      <article className="mb-12 max-w-3xl mx-auto">
        <h3 className="text-xl font-semibold mb-6">{t("testimonialsTitle")}</h3>
        <div className="space-y-6">
          {testimonials.map(({ id, patient, quote }) => (
            <blockquote
              key={id}
              className="border-l-4 border-sky-500 pl-4 italic text-sky-800"
              aria-label={`Testimonio de ${patient}`}
            >
              <p>"{quote}"</p>
              <footer className="mt-2 font-semibold not-italic text-sky-700">
                — {patient}
              </footer>
            </blockquote>
          ))}
        </div>
      </article>
    </section>
  );
};

export default TourismDental;
