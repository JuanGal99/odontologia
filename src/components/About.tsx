import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation("about");

  return (
    <section
      id="about"
      className="bg-gradient-to-b from-white to-sky-50 text-sky-900 px-6 py-24 scroll-mt-20"
      aria-labelledby="about-heading"
      role="region"
    >
      <div className="max-w-6xl mx-auto text-center lg:text-left">
        <div className="lg:flex lg:items-center lg:gap-16">
          {/* Contenido Textual */}
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h2
              id="about-heading"
              className="text-4xl md:text-5xl font-extrabold mb-8 text-sky-950 tracking-tight"
            >
              {t("title")}
            </h2>

            <p className="text-xl leading-relaxed text-slate-700 mb-8 font-light">
              {t("description")}
            </p>

            <ul className="space-y-4 text-left">
              {[t("point1"), t("point2"), t("point3")].map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-sky-500 mt-1 flex-shrink-0"
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
                  <span className="text-lg text-slate-700 font-medium">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Foto del equipo o doctor principal */}
          <div className="lg:w-1/2 max-w-lg mx-auto relative">
            <div className="absolute inset-0 bg-sky-200 rounded-2xl transform translate-x-4 translate-y-4 -z-10"></div>
            <img
              src="/images/team.jpeg"
              alt={t("imageAlt")}
              className="rounded-2xl shadow-2xl object-cover w-full border-4 border-white"
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
