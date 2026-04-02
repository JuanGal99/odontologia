import { useState } from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation("contact");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ email?: string; country?: string }>(
    {}
  );
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: typeof errors = {};
    if (!formData.country) newErrors.country = t("validation.countryRequired");
    if (!validateEmail(formData.email))
      newErrors.email = t("validation.invalidEmail");

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSending(true);

    try {
      const response = await fetch("https://formspree.io/f/mkgqpqey", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", country: "", message: "" });
      } else {
        alert("Error al enviar. Intenta nuevamente.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error al conectar con el servidor.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-slate-50 text-sky-900 px-6 py-24 scroll-mt-20"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            id="contact-heading"
            className="text-4xl md:text-5xl font-extrabold text-sky-950 tracking-tight"
          >
            {t("title")}
          </h2>
          <div className="w-24 h-1 bg-sky-500 mx-auto mt-6 rounded"></div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 flex flex-col md:flex-row">

          {/* INFORMACIÓN DE CONTACTO */}
          <div className="bg-sky-600 text-white p-10 md:p-16 md:w-2/5 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500 rounded-full -mr-32 -mt-32 opacity-50 blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-700 rounded-full -ml-32 -mb-32 opacity-50 blur-2xl"></div>

            <div className="relative z-10 space-y-10">
              <div>
                <h3 className="text-xl font-bold mb-2 text-sky-100">{t("contactInfo.title")}</h3>
                <p className="text-lg flex items-start gap-3">
                  <svg className="w-6 h-6 mt-1 flex-shrink-0 text-sky-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  {t("contactInfo.address")}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-sky-100">{t("contactInfo.phoneTitle")}</h3>
                <p className="text-lg flex items-center gap-3">
                  <svg className="w-6 h-6 text-sky-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  {t("contactInfo.phone")}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-sky-100">{t("contactInfo.emailTitle")}</h3>
                <a
                  href={`mailto:${t("contactInfo.email")}`}
                  className="text-lg hover:text-sky-200 transition flex items-center gap-3"
                >
                  <svg className="w-6 h-6 text-sky-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  {t("contactInfo.email")}
                </a>
              </div>
            </div>

            <div className="relative z-10 mt-12 pt-8 border-t border-sky-500/50">
              <h3 className="text-xl font-bold mb-6 text-sky-100">{t("contactInfo.socialTitle")}</h3>
              <div className="flex gap-6 items-center">
                <a
                  href="https://instagram.com/dragalvis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full flex items-center gap-3"
                  aria-label="Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                    aria-hidden="true"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37a4 4 0 1 1-4.94-4.94 4 4 0 0 1 4.94 4.94z" />
                    <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
                  </svg>
                  <span className="text-lg">{`Dra. Paula Galvis`}</span>
                </a>
              </div>
            </div>
          </div>

          {/* FORMULARIO o mensaje de éxito */}
          <div className="p-10 md:p-16 md:w-3/5 bg-white">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">¡Gracias!</h3>
                <p className="text-slate-600 text-lg">
                  {t("form.successMessage")}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nombre */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-slate-700 mb-2"
                  >
                    {t("form.name")}
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors outline-none"
                    placeholder={t("form.placeholders.name")}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-slate-700 mb-2"
                    >
                      {t("form.email")}
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors outline-none ${errors.email ? "border-red-500 focus:ring-red-500" : ""
                        }`}
                      placeholder={t("form.placeholders.email")}
                    />
                    {errors.email && (
                      <p className="text-red-500 mt-2 text-sm font-medium" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* País */}
                  <div>
                    <label
                      htmlFor="country"
                      className="block text-sm font-semibold text-slate-700 mb-2"
                    >
                      {t("form.country")}
                    </label>
                    <select
                      id="country"
                      name="country"
                      required
                      value={formData.country}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors outline-none ${errors.country ? "border-red-500 focus:ring-red-500" : ""
                        }`}
                    >
                      <option value="">{t("form.selectCountry")}</option>
                      <option value="US">United States</option>
                      <option value="CO">Colombia</option>
                      <option value="CA">Canada</option>
                      <option value="MX">México</option>
                      <option value="OTHER">Otro</option>
                    </select>
                    {errors.country && (
                      <p className="text-red-500 mt-2 text-sm font-medium" role="alert">
                        {errors.country}
                      </p>
                    )}
                  </div>
                </div>

                {/* Mensaje */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-slate-700 mb-2"
                  >
                    {t("form.message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors outline-none resize-none"
                    placeholder={t("form.placeholders.message")}
                  />
                </div>

                {/* Botón */}
                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full bg-sky-600 text-white font-bold px-6 py-4 rounded-xl hover:bg-sky-700 hover:shadow-lg focus:ring-4 focus:ring-sky-500/50 transition duration-300 disabled:opacity-70 flex justify-center items-center gap-2"
                >
                  {isSending ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {t("form.sending")}
                    </>
                  ) : (
                    t("form.submit")
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* BOTÓN FLOTANTE WHATSAPP (Mantenido igual ya que es fijo en la pantalla) */}
      <a
        href="https://wa.me/573178870588?text=Hola%20quiero%20más%20info%20sobre%20odontología%20en%20Colombia"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition duration-300 z-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-8 h-8"
        >
          <path d="M20.52 3.48A11.79 11.79 0 0 0 12 0C5.373 0 0 5.373 0 12a11.958 11.958 0 0 0 2.11 6.47L0 24l5.7-2.11A11.932 11.932 0 0 0 12 24c6.627 0 12-5.373 12-12a11.8 11.8 0 0 0-3.48-8.52zM12 22a9.955 9.955 0 0 1-5.26-1.56l-.38-.23-3.39 1.25 1.26-3.31-.24-.38A9.965 9.965 0 0 1 2 12c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10zm5.37-7.42c-.29-.14-1.72-.85-1.98-.95-.26-.1-.45-.14-.64.14-.2.28-.77.95-.95 1.15-.18.2-.35.22-.64.07-.29-.15-1.22-.45-2.32-1.44-.86-.77-1.44-1.73-1.61-2.02-.17-.29-.02-.44.13-.59.14-.15.29-.35.43-.52.14-.17.17-.29.26-.48.08-.2.04-.37-.02-.52-.07-.14-.64-1.54-.88-2.1-.23-.55-.46-.48-.64-.49-.16 0-.35-.01-.54-.01s-.52.07-.79.37c-.27.3-1.04 1.02-1.04 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.21 5.08 4.5.71.31 1.26.49 1.69.63.71.23 1.35.2 1.86.12.57-.09 1.72-.7 1.97-1.37.24-.66.24-1.22.17-1.34-.06-.12-.25-.19-.54-.33z" />
        </svg>
      </a>
    </section>
  );
};

export default Contact;
