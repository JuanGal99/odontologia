import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 w-full bg-sky-500 text-white z-50"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="flex items-center justify-between p-4">
        {/* Logo */}
        <a href="#" className="text-lg font-bold">
          Logo
        </a>

        {/* Desktop nav: solo visible en lg */}
        <ul className="hidden lg:flex gap-6">
          <li>
            <a href="#" aria-current="page">
              Home
            </a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Dental tourism</a>
          </li>
          <li>
            <a href="#">Testimonials</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>

        {/* CTA Button: solo en pantallas grandes */}
        <button
          className="hidden lg:block bg-white text-sky-500 px-4 py-2 rounded hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-sky-500"
          type="button"
        >
          Agendar cita
        </button>

        {/* Mobile hamburger menu */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2 focus:outline-none  rounded"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          type="button"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden px-4 pb-4"
          role="menu"
          aria-label="Mobile menu"
        >
          <ul className="grid grid-cols-2 gap-3">
            {[
              "Home",
              "About us",
              "Services",
              "Dental tourism",
              "Testimonials",
              "Blog",
              "Contact",
            ].map((item, index) => (
              <li key={item}>
                <a
                  href="#"
                  role="menuitem"
                  tabIndex={0}
                  className="block focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-sky-500 rounded"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <button
            className="w-full mt-2 bg-white text-sky-500 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
            type="button"
          >
            Agendar cita
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
