import { useEffect, useState } from "react";
import Logo from "/logo.webp";
import { NAV_LINKS } from "../constants/links";
import SocialLinks from "./SocialLinks";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");

  /* Menú Hamburguesa */
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  /* Scroll Navbar */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Link Activo con IntersectionObserver + MutationObserver */
  useEffect(() => {
    const createObserver = () => {
      const sections = document.querySelectorAll<HTMLElement>("section[id]");
      if (sections.length === 0) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActive(entry.target.id);
            }
          });
        },
        { root: null, rootMargin: "-40% 0px -50% 0px", threshold: 0 }
      );

      sections.forEach((s) => observer.observe(s));
      return observer;
    };

    let observer: IntersectionObserver | null = createObserver();

    const mutationObserver = new MutationObserver(() => {
      if (observer) observer.disconnect();
      observer = createObserver();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      if (observer) observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 
        ${scrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-5 md:px-0 py-5">
        <div className="flex justify-between items-center">
          {/* Logo Navbar */}
          <div>
            <a href="/">
              <img
                src={Logo}
                alt="Logo Infinity Style"
                className="w-32 h-auto"
              />
            </a>
          </div>

          {/* Menú Hamburguesa */}
          <button onClick={toggleMenu} className="text-white lg:hidden">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Menú Navegación Desktop */}
          <div className="hidden lg:block">
            <ul className="flex space-x-8">
              {NAV_LINKS.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.link}
                    onClick={() => {
                      setActive(item.link.replace("#", ""));
                      setIsOpen(false);
                    }}
                    className={`relaive inline-block text-lg transition-all duration-300 hover:scale-110
                    ${
                      active === item.link.replace("#", "")
                        ? "text-[#D4AF37] scale-110"
                        : "text-white hover:text-[#d4af377e]"
                    }`}
                  >
                    {item.name}
                    <span
                      className={`absolute left-0 -bottom-1 h-[2px] bg-[#D4AF37] transition-all duration-300 ${
                        active === item.link.replace("#", "")
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Redes Desktop */}
          <div className="hidden lg:block">
            <SocialLinks></SocialLinks>
          </div>
        </div>

        {/* Menú Mobile */}
        <div
          className={`lg:hidden absolute top-full left-0 w-full z-40 transition-all duration-300 
          ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
          ${scrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"}`}
        >
          <ul className="flex flex-col px-4 py-2 border-t border-gray-800">
            {NAV_LINKS.map((item) => (
              <li key={item.id} className="py-2 text-center">
                <a
                  href={item.link}
                  onClick={() => {
                    setActive(item.link.replace("#", ""));
                    setIsOpen(false);
                  }}
                  className={`text-lg block ${
                    active === item.link.replace("#", "")
                      ? "text-[#D4AF37] scale-110"
                      : "text-white"
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <ul className="flex px-4 py-2 border-t border-gray-800 justify-center">
            <SocialLinks
              isMobile={true}
              onLinkClick={() => setIsOpen(false)}
            ></SocialLinks>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
