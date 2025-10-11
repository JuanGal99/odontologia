import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-20 p-4">
        <Hero />
      </main>
    </>
  );
}

export default App;
