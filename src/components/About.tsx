import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation("about");

  return (
    <section
      id="about"
      className="bg-sky-50 text-sky-900 px-6 py-12 scroll-mt-20"
      aria-labelledby="about-heading"
      role="region"
    >
      <div className="max-w-5xl mx-auto text-center lg:text-left">
        <h2
          id="about-heading"
          className="text-3xl md:text-4xl font-extrabold mb-6"
        >
          {t("title")}
        </h2>

        <p className="text-lg leading-relaxed text-sky-800 mb-6">
          {t("description")}
        </p>

        {/* Foto del equipo o doctor principal */}
        <div className="mt-8 flex flex-col-reverse lg:flex-row items-center gap-8">
          <div className="lg:w-1/2">
            <ul className="space-y-3 text-left list-disc pl-5 text-sky-800">
              <li>{t("point1")}</li>
              <li>{t("point2")}</li>
              <li>{t("point3")}</li>
            </ul>
          </div>

          <div className="lg:w-1/2 max-w-md mx-auto">
            <img
              src="/images/team.webp"
              alt={t("imageAlt")}
              className="rounded-lg shadow-md object-cover w-full"
              loading="lazy"
              width={500}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
