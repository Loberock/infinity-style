const services = [
  {
    id: 1,
    name: "Cortes de Cabello",
    desc: "Clásicos y modernos.",
    price: "S/10 - S/20",
    btn: "Reservar por WhatsApp",
    link: "https://wa.me/+51933738449",
    img: "https://lh5.googleusercontent.com/EwSzA1Y7ADq0W5A_QdybfKnjOcuCZS80ckBYrs3lCyY6P1UiCvWZv3sXMmDjnR4U2AeRgxR-2GIiuCMvlSPqTl8qJWa7TYJyh9A2XdCbYR6TQGShDoZwNGkJkZ_keUmGCh3coHA=s0",
  },
  {
    id: 2,
    name: "Diseños",
    desc: "Estilos únicos y personalizados.",
    price: "S/25",
    btn: "Reservar por WhatsApp",
    link: "https://wa.me/+51933738449",
    img: "https://i.pinimg.com/736x/6e/13/98/6e13985ecc1830fa05b06eb79827fe27.jpg ",
  },
  {
    id: 3,
    name: "Afeitado",
    desc: "Con navaja y acabado profesional.",
    price: "S/5",
    btn: "Reservar por WhatsApp",
    link: "https://wa.me/+51933738449",
    img: "https://joseppons.com/formacion/wp-content/uploads/2021/09/afeitado2.jpg",
  },
  {
    id: 4,
    name: "Limpieza Facial",
    desc: "Cuida tu piel y tu imagen.",
    price: "S/30",
    btn: "Reservar por WhatsApp",
    link: "https://wa.me/+51933738449",
    img: "https://barberiahudson.com/wp-content/uploads/2023/04/BLACK-MASK.jpg",
  },
];

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
                  className="w-full h-60 object-cover"
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
