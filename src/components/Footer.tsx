import Logo from "../assets/logo.webp";
import SocialLinks from "./SocialLinks";

function Footer() {
  return (
    <footer className="bg-black/70 text-gray-300 py-8">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Logo y descripción */}
        <div className="mx-auto">
          <img src={Logo} alt="Logo" className="h-[30px]" />
          <p className="mt-2 text-sm">
            Barbería y productos premium para tu mejor versión.
          </p>
        </div>

        {/* Contacto */}
        <div className="mx-auto">
          <h3 className="text-lg font-semibold mb-2 text-white">Contacto</h3>
          <p>📍 Av. Principal 123 - Lambayeque</p>
          <p>📞 +51 933 738 449</p>
          <p>✉️ contacto@infinitystyle.com</p>
        </div>

        {/* Redes */}
        <div className="mx-auto">
          <h3 className="text-lg font-semibold mb-2 text-white">Síguenos</h3>
          <SocialLinks className="text-2xl justify-center md:justify-start space-x-4"></SocialLinks>
        </div>
      </div>

      <div className="mt-6 text-center border-t border-gray-700 pt-4 text-sm">
        © {new Date().getFullYear()} Infinity Style. Todos los derechos
        reservados.
      </div>
    </footer>
  );
}

export default Footer;
