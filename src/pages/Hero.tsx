import { useEffect, useState } from "react";

const sliders = [
  {
    id: 1,
    title: "UNA EXPERIENCIA DE BARBERÍA DE PRIMER NIVEL",
    desc: "No solo es un corte, es un ritual de estilo y confianza. Vive la experiencia premium que transformará tu imagen.",
    btn: "RESERVAR UNA CITA",
    link: "https://wa.me/+51933738449",
    img: "https://images.jumpseller.com/store/piston-barberia/store/cover/IMG_0875-2.jpg?1723851084",
  },
  {
    id: 2,
    title: "ESTILO, ELEGANCIA Y CUIDADO PERSONAL",
    desc: "Disfruta de cortes impecables, limpiezas faciales revitalizantes y un servicio pensado en resaltar lo mejor de ti.",
    btn: "VER SERVICIOS",
    link: "#services",
    img: "https://joseppons.com/formacion/wp-content/uploads/2022/03/corte-degradado.jpg",
  },
  {
    id: 3,
    title: "PRODUCTOS DE BARBERÍA DE ALTA GAMA",
    desc: "Encuentra productos exclusivos que cuidan tu cabello y piel, manteniendo tu look fresco y lleno de personalidad.",
    btn: "VER PRODUCTOS",
    link: "#products",
    img: "https://www.ibsimportadora.pe/cdn/shop/files/BANNER_MARMARA_2.png?v=1743009343&width=3000",
  },
];

function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === sliders.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden">
      {sliders.map((item, index) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-20" : "opacity-0 z-10"
          }`}
        >
          {/* Fondo */}
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Contenido */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-6 md:px-16 max-w-4xl">
              {/* Título con efecto metálico */}
              <h1 className="text-3xl md:text-5xl font-bold py-2 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200 bg-clip-text text-transparent drop-shadow-[2px_2px_6px_rgba(0,0,0,0.6)]">
                {item.title}
              </h1>
              {/* Descripción */}
              <p className="text-lg md:text-xl mb-6 text-gray-300">
                {item.desc}
              </p>
              {/* Botón */}
              <a
                href={item.link}
                target={item.link.startsWith("#") ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className="
                  px-6 py-3
                  inline-block
                  bg-gradient-to-r from-[#D4AF37] to-[#b8860b]
                  text-black font-bold rounded-full
                  transform
                  transition-all duration-300
                  hover:scale-110
                  hover:shadow-[0px_6px_25px_rgba(212,175,55,0.9)]
                "
              >
                {item.btn}
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Indicadores */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {sliders.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === current ? "bg-[#D4AF37] scale-125" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;
