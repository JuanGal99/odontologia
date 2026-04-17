import { useTranslation } from "react-i18next";

type Service = {
  key: string;
};

const services: Service[] = [
  { key: "estetica" },
  { key: "armonizacion" },
  { key: "ortodoncia" },
  { key: "rehabilitacion" },
  { key: "general" },
  { key: "turismo" },
];

/**
 * Componente Services (Servicios):
 * Lista y describe los tratamientos o servicios odontológicos ofrecidos.
 * Renderiza dinámicamente cada servicio iterando sobre un arreglo.
 */
const Services = () => {
  const { t } = useTranslation("services");

  return (
    <section
      id="services"
      className="bg-slate-50 text-sky-900 px-6 py-24 scroll-mt-20"
      aria-labelledby="services-heading"
      role="region"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            id="services-heading"
            className="text-4xl md:text-5xl font-extrabold text-sky-950 inline-block relative"
          >
            {t("title")}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-sky-500 rounded"></div>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const title = t(`${service.key}.title`);
            const description = t(`${service.key}.description`);
            const benefits = t(`${service.key}.benefits`, {
              returnObjects: true,
            }) as string[];

            return (
              <article
                key={service.key}
                className="relative bg-white rounded-2xl p-8 flex flex-col justify-start shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.15)] hover:-translate-y-1 transition-all duration-300 border border-slate-100 group overflow-hidden"
              >
                {/* Acento superior decorativo */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-400 to-sky-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                <h3 className="text-2xl font-extrabold mb-3 text-slate-800 group-hover:text-sky-600 transition-colors duration-300">
                  {title}
                </h3>

                <p className="text-slate-500 text-sm mb-6 leading-relaxed font-medium">
                  {description}
                </p>

                <div className="h-px w-full bg-slate-100 mb-6 group-hover:bg-sky-100 transition-colors duration-300"></div>

                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-sm text-slate-600 font-medium">
                      <svg
                        className="w-5 h-5 text-sky-500 mr-3 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
