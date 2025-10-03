import React, { Suspense } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Hero = React.lazy(() => import("./pages/Hero"));
const Services = React.lazy(() => import("./pages/Services"));
const Products = React.lazy(() => import("./pages/Products"));
const Ubication = React.lazy(() => import("./pages/Ubication"));
const Reviews = React.lazy(() => import("./pages/Reviews"));

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        <Suspense
          fallback={
            <div className="h-screen bg-black flex items-center justify-center text-[#D4AF37]">
              Cargando secciones...
            </div>
          }
        >
          <Hero />
          <Services />
          <Products />
          <Ubication />
          <Reviews />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

export default App;
