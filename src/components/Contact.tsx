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
      className="bg-white text-sky-900 px-6 py-12 max-w-5xl mx-auto scroll-mt-20"
      aria-labelledby="contact-heading"
    >
      <h2
        id="contact-heading"
        className="text-3xl font-extrabold mb-8 text-center"
      >
        {t("title")}
      </h2>

      <div className="grid gap-10 md:grid-cols-2">
        {/* FORMULARIO o mensaje de éxito */}
        <div>
          {submitted ? (
            <p className="text-green-600 font-medium">
              {t("form.successMessage")}
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nombre */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
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
                  className="w-full p-2 border rounded"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
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
                  className={`w-full p-2 border rounded ${
                    errors.email ? "border-red-500" : ""
                  }`}
                />
                {errors.email && (
                  <p className="text-red-600 mt-1 text-sm" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* País */}
              <div>
                <label
                  htmlFor="country"
                  className="block text-sm font-medium mb-1"
                >
                  {t("form.country")}
                </label>
                <select
                  id="country"
                  name="country"
                  required
                  value={formData.country}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded ${
                    errors.country ? "border-red-500" : ""
                  }`}
                >
                  <option value="">{t("form.selectCountry")}</option>
                  <option value="US">United States</option>
                  <option value="CO">Colombia</option>
                  {/* Puedes agregar más países */}
                </select>
                {errors.country && (
                  <p className="text-red-600 mt-1 text-sm" role="alert">
                    {errors.country}
                  </p>
                )}
              </div>

              {/* Mensaje */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  {t("form.message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 border rounded resize-none"
                />
              </div>

              {/* Botón */}
              <button
                type="submit"
                disabled={isSending}
                className="bg-sky-500 text-white px-6 py-3 rounded hover:bg-sky-600 transition disabled:opacity-50"
              >
                {isSending ? t("form.sending") : t("form.submit")}
              </button>
            </form>
          )}
        </div>

        {/* INFORMACIÓN DE CONTACTO */}
        <div className="space-y-6 text-sm md:text-base">
          <div>
            <h3 className="font-semibold">{t("contactInfo.title")}</h3>
            <p>{t("contactInfo.address")}</p>
          </div>
          <div>
            <h3 className="font-semibold">{t("contactInfo.phoneTitle")}</h3>
            <p>{t("contactInfo.phone")}</p>
          </div>
          <div>
            <h3 className="font-semibold">{t("contactInfo.emailTitle")}</h3>
            <a
              href={`mailto:${t("contactInfo.email")}`}
              className="text-sky-600 hover:underline"
            >
              {t("contactInfo.email")}
            </a>
          </div>
          <div>
            <h3 className="font-semibold">{t("contactInfo.socialTitle")}</h3>
            <div className="flex flex-col gap-4 mt-2">
              <a
                href="https://facebook.com/Paangape"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 hover:text-blue-800"
              >
                {/* Ícono Facebook SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 mr-2"
                  aria-hidden="true"
                >
                  <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.333v21.334C0 23.403.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.66-4.788 1.325 0 2.464.099 2.797.142v3.24h-1.918c-1.505 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.728 0 1.325-.597 1.325-1.333V1.333C24 .597 23.403 0 22.675 0z" />
                </svg>
                Paula Andrea Galvis
              </a>

              <a
                href="https://instagram.com/paulagalvis"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-pink-600 hover:text-pink-800"
              >
                {/* Ícono Instagram SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 mr-2"
                  aria-hidden="true"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37a4 4 0 1 1-4.94-4.94 4 4 0 0 1 4.94 4.94z" />
                  <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
                </svg>
                <span className="text-blue-600">@paulagalvis</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* BOTÓN FLOTANTE WHATSAPP */}
      <a
        href="https://wa.me/573178870588?text=Hola%20quiero%20más%20info%20sobre%20odontología%20en%20Colombia"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-6 h-6"
        >
          <path d="M20.52 3.48A11.79 11.79 0 0 0 12 0C5.373 0 0 5.373 0 12a11.958 11.958 0 0 0 2.11 6.47L0 24l5.7-2.11A11.932 11.932 0 0 0 12 24c6.627 0 12-5.373 12-12a11.8 11.8 0 0 0-3.48-8.52zM12 22a9.955 9.955 0 0 1-5.26-1.56l-.38-.23-3.39 1.25 1.26-3.31-.24-.38A9.965 9.965 0 0 1 2 12c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10zm5.37-7.42c-.29-.14-1.72-.85-1.98-.95-.26-.1-.45-.14-.64.14-.2.28-.77.95-.95 1.15-.18.2-.35.22-.64.07-.29-.15-1.22-.45-2.32-1.44-.86-.77-1.44-1.73-1.61-2.02-.17-.29-.02-.44.13-.59.14-.15.29-.35.43-.52.14-.17.17-.29.26-.48.08-.2.04-.37-.02-.52-.07-.14-.64-1.54-.88-2.1-.23-.55-.46-.48-.64-.49-.16 0-.35-.01-.54-.01s-.52.07-.79.37c-.27.3-1.04 1.02-1.04 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.21 5.08 4.5.71.31 1.26.49 1.69.63.71.23 1.35.2 1.86.12.57-.09 1.72-.7 1.97-1.37.24-.66.24-1.22.17-1.34-.06-.12-.25-.19-.54-.33z" />
        </svg>
      </a>
    </section>
  );
};

export default Contact;
