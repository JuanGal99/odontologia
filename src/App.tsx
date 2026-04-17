import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import TourismDental from "./components/TourismDental";
import Contact from "./components/Contact";

/**
 * Componente principal de la aplicación (App).
 * Aquí se ensamblan todas las secciones principales de la landing page.
 * El Navbar permanece fijo en la parte superior, seguido por el contenido principal.
 */
function App() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-16">
        <Hero />
        <About />
        <Services />
        <TourismDental />
        <Contact />
      </main>
    </>
  );
}

export default App;
