import CategoriasGrid from "./components/categorias-grid";
import HeroSection from "./components/hero-section";

function App() {
  return (
    <div className="flex flex-col gap-8">
      <HeroSection />
      <CategoriasGrid />
    </div>
  );
}

export default App;
