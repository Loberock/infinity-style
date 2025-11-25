import { services } from "../constants/servicesInfo";

function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-20 py-20 bg-gradient-to-b from-black via-zinc-900 to-[#0d1b2a] text-white"
    >
      <div className="max-w-7xl px-6 sm:px-12 mx-auto text-center">
        {/* Título */}
        <h2 className="mb-16 text-4xl md:text-5xl font-black uppercase">
          Nuestros <span className="text-[#D4AF37]">Servicios</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((item) => (
            <div
              key={item.id}
              className="bg-gradient-to-b from-zinc-900 to-black rounded-2xl overflow-hidden 
             border border-zinc-700/50 shadow-blue-glow hover:shadow-blue-glow-hover 
             hover:scale-[1.04] transition duration-300 flex flex-col"
            >
              {/* Imagen arriba */}
              <div className="relative">
                <img
                  src={item.img}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <h3 className="absolute bottom-3 left-4 text-2xl font-bold text-[#D4AF37] drop-shadow-lg">
                  {item.name}
                </h3>
              </div>

              {/* Contenido */}
              <div className="flex-1 flex flex-col justify-between p-6 text-center">
                <p className="text-gray-300 mb-4">{item.desc}</p>
                <span className="text-xl font-semibold text-white mb-6 block">
                  {item.price}
                </span>

                <a
                  className="px-6 py-3 inline-block rounded-full font-semibold
                bg-gradient-to-r from-[#8B2F39] to-[#a8323d]
                text-white transition-all duration-300
                hover:scale-105 hover:shadow-[0px_6px_25px_rgba(37,211,102,0.7)]
                hover:from-green-500 hover:to-green-600"
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.btn}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
