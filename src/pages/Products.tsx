import { products } from "../constants/productsInfo";

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
                  className="w-full h-72 object-cover"
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
