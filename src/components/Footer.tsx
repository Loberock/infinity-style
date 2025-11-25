import Logo from "/logo.webp";
import SocialLinks from "./SocialLinks";
import { services } from "../constants/servicesInfo";

function Footer() {
  return (
    <footer className="bg-black/70 text-gray-300 py-8">
      <div className="container mx-auto px-5 md:px-0 flex flex-col gap-8 md:flex-row justify-between">
        {/* Logo y descripción */}
        <div className="">
          <img src={Logo} alt="Logo" className="w-32 h-auto" />
          <p className="mt-2 text-base">
            Barbería y productos premium para tu mejor versión.
          </p>
        </div>

        {/* Servicios */}
        <div className="">
          <h3 className="text-lg font-semibold mb-2 text-white">Servicios</h3>
          {services.map((service) => (
            <a key={service.id} className="flex flex-col" href={service.link}>
              <p>{service.name}</p>
            </a>
          ))}
        </div>

        {/* Información */}
        <div className="">
          <h3 className="text-lg font-semibold mb-2 text-white">Información</h3>
          <p>Av. Principal 123</p>
          <p>+51 975 701 380</p>
        </div>

        {/* Redes */}
        <div className="">
          <h3 className="text-lg font-semibold mb-2 text-white">Síguenos</h3>
          <SocialLinks className="text-2xl space-x-4"></SocialLinks>
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
