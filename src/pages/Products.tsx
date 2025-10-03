const products = [
  {
    id: 1,
    name: "Cera Spider para Cabello",
    desc: "Fijación extrema y acabado natural.",
    brand: "Spider Wax",
    price: "S/25",
    img: "https://http2.mlstatic.com/D_NQ_NP_949077-MLM49776359742_042022-O-cera-para-cabello-tipo-spider-telarana-wax-s1-150ml-nishman.webp",
    btn: "Pedir por WhatsApp",
    link: "https://wa.me/+51933738449",
  },
  {
    id: 2,
    name: "Aceite para Barba",
    desc: "Hidratación y brillo para tu barba.",
    brand: "Gold Beard",
    price: "S/30",
    img: "https://elturco.pe/cdn/shop/products/Foto-7-600x600.jpg?v=1699792207&width=600",
    btn: "Pedir por WhatsApp",
    link: "https://wa.me/+51933738449",
  },
  {
    id: 3,
    name: "Shampoo Premium",
    desc: "Limpieza profunda y frescura duradera.",
    brand: "Urban Men",
    price: "S/35",
    img: "https://lechepalpelo.com/cdn/shop/products/Relleno_proteinico.jpg?v=1739322022&width=1200",
    btn: "Pedir por WhatsApp",
    link: "https://wa.me/+51933738449",
  },
  {
    id: 4,
    name: "Cera Mate",
    desc: "Look natural sin brillo.",
    brand: "MatteFix",
    price: "S/28",
    img: "https://thebarberia.com/storage/product/vVaCQ28FfLqO0odeQMTtO2KNFhLKXHkewsSLhpiG.png",
    btn: "Pedir por WhatsApp",
    link: "https://wa.me/+51933738449",
  },
];

function Products() {
  return (
    <section
      id="products"
      className="scroll-mt-20 py-20 bg-gradient-to-b from-black via-zinc-900 to-[#2a0f12] text-white"
    >
      <div className="max-w-7xl px-6 sm:px-12 mx-auto text-center">
        {/* Título */}
        <h2 className="mb-16 text-4xl md:text-5xl font-black uppercase">
          Nuestros <span className="text-[#D4AF37]">Productos</span>
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-gradient-to-b from-zinc-900 to-black rounded-2xl overflow-hidden
            border border-zinc-700/50 flex flex-col 
            shadow-gold-glow hover:shadow-gold-glow-hover
            transition-transform duration-300 hover:scale-[1.04]"
            >
              {/* Imagen del producto */}
              <div className="relative">
                <img
                  src={item.img}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-60 object-cover"
                />
              </div>

              {/* Contenido */}
              <div className="flex-1 flex flex-col justify-between p-6">
                <div>
                  <h3 className="text-xl font-bold text-[#D4AF37] mb-2">
                    {item.name}
                  </h3>
                  <p className="text-gray-400 text-sm italic mb-1">
                    {item.brand}
                  </p>
                  <p className="text-gray-300 mb-4">{item.desc}</p>
                  <span className="block text-2xl font-bold text-white mb-6 tracking-wide">
                    {item.price}
                  </span>
                </div>

                {/* Botón siempre abajo */}
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center px-6 py-3 inline-block rounded-full font-semibold
                bg-gradient-to-r from-[#8B2F39] to-[#a8323d]
                text-white transition-all duration-300
                hover:scale-105 hover:shadow-[0px_6px_25px_rgba(37,211,102,0.7)]
                hover:from-green-500 hover:to-green-600"
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

export default Products;
