const reviews = [
  {
    id: 1,
    name: "Carlos Gómez",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    comment:
      "Excelente atención, el corte me quedó impecable. Definitivamente volveré pronto.",
    stars: 5,
  },
  {
    id: 2,
    name: "Luis Fernández",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    comment:
      "La mejor barbería de la zona, el ambiente es increíble y los productos son de calidad.",
    stars: 5,
  },
  {
    id: 3,
    name: "Andrés Ramírez",
    img: "https://randomuser.me/api/portraits/men/78.jpg",
    comment:
      "Muy profesionales y detallistas, quedé más que satisfecho con mi afeitado.",
    stars: 4,
  },
];

function Reviews() {
  return (
    <section
      id="reviews"
      className="scroll-mt-20 py-20 bg-gradient-to-b from-black via-[#1a1a1a] to-zinc-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 text-center">
        {/* Título */}
        <h2 className="text-4xl md:text-5xl font-black uppercase mb-16">
          Lo que <span className="text-[#D4AF37]">dicen</span> nuestros clientes
        </h2>

        {/* Grid de reseñas */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r) => (
            <div
              key={r.id}
              className="bg-zinc-900/70 backdrop-blur-sm rounded-2xl p-8 
              shadow-blue-glow hover:shadow-blue-glow-hover
              transition duration-300 hover:-translate-y-2 flex flex-col items-center"
            >
              {/* Imagen cliente */}
              <img
                src={r.img}
                alt={r.name}
                loading="lazy"
                className="w-20 h-20 rounded-full border-4 border-[#D4AF37] mb-4 object-cover"
              />

              {/* Nombre */}
              <h3 className="text-xl font-semibold text-[#D4AF37] mb-2">
                {r.name}
              </h3>

              {/* Estrellas */}
              <div className="flex justify-center mb-4 text-yellow-400">
                {Array.from({ length: r.stars }).map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>

              {/* Comentario */}
              <p className="text-gray-300 italic">“{r.comment}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
