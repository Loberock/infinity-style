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
          <span className="font-semibold text-white">Av. Los Barberos 123</span>
          . Ven y disfruta de la mejor experiencia en cuidado de cabello y
          barba.
        </p>

        {/* Mapa */}
        <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-gold-glow hover:shadow-gold-glow-hover transition duration-300">
          <iframe
            title="Ubicación Barbería"
            src="https://www.google.com/maps/embed?pb=!3m2!1ses-419!2spe!4v1764090998345!5m2!1ses-419!2spe!6m8!1m7!1sx3PjUK1d3w_RVBAZtqCFug!2m2!1d-6.704717925285385!2d-79.90170849037354!3f158.51255610528318!4f5.632385611280853!5f0.7820865974627469"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Ubication;
