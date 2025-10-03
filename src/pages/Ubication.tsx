function Ubication() {
  return (
    <section
      id="ubication"
      className="scroll-mt-20 py-20 bg-gradient-to-b from-[#2a0f12] via-zinc-900 to-black text-white"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 text-center">
        {/* Título */}
        <h2 className="text-4xl md:text-5xl font-black uppercase mb-10">
          Nuestra <span className="text-[#D4AF37]">Ubicación</span>
        </h2>

        {/* Descripción */}
        <p className="text-gray-300 text-lg mb-10">
          Te esperamos en{" "}
          <span className="font-semibold text-white">
            Av. Los Barberos 123, Lambayeque
          </span>
          . Ven y disfruta de la mejor experiencia en cuidado de cabello y
          barba.
        </p>

        {/* Mapa */}
        <div className="w-full h-96 rounded-2xl overflow-hidden shadow-gold-glow hover:shadow-gold-glow-hover transition duration-300">
          <iframe
            title="Ubicación Barbería"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.691975458063!2d-77.04279322490845!3d-12.062106742173842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8c0f9cf3a07%3A0x31f4a64a6b1c9b!2sBarber%C3%ADa!5e0!3m2!1ses!2spe!4v1699792257648!5m2!1ses!2spe"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Ubication;
