import { useTranslation } from "react-i18next";

type Service = {
  key: string;
};

const services: Service[] = [
  { key: "estetica" },
  { key: "implantes" },
  { key: "ortodoncia" },
  { key: "rehabilitacion" },
  { key: "general" },
  { key: "pediatria" },
  { key: "cirugia" },
  { key: "turismo" },
];

const Services = () => {
  const { t } = useTranslation("services");

  return (
    <section
      id="services"
      className="bg-white text-sky-900 px-6 py-16 scroll-mt-20"
      aria-labelledby="services-heading"
      role="region"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          id="services-heading"
          className="text-3xl md:text-4xl font-extrabold mb-12 text-center"
        >
          {t("title")}
        </h2>

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
                className="bg-sky-50 rounded-xl shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition"
              >
                <div>
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>
                  <p className="text-sky-800 text-sm mb-4">{description}</p>

                  <ul className="list-disc pl-5 text-sm text-sky-700 space-y-1">
                    {benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <a
                    href="#contact"
                    className="block w-full text-center bg-sky-500 text-white font-semibold py-2 px-4 rounded hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400"
                  >
                    {t("cta")}
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
