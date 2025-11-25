import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./pages/Hero";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Ubication from "./pages/Ubication";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        <Hero />
        <Services />
        <Products />
        <Ubication />
      </main>

      <Footer />
    </div>
  );
}

export default App;
