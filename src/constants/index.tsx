export interface LinkItem {
  id: number;
  name: string;
  link: string;
}

export interface SocialLink extends LinkItem {
  icon: string;
  color: string;
}

export const NAV_LINKS: LinkItem[] = [
  { id: 1, name: "Inicio", link: "#hero" },
  { id: 2, name: "Servicios", link: "#services" },
  { id: 3, name: "Productos", link: "#products" },
  { id: 4, name: "Ubicación", link: "#ubication" },
  { id: 5, name: "Reseñas", link: "#reviews" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 1,
    name: "WhatsApp",
    link: "https://wa.me/+51933738449",
    icon: "bi bi-whatsapp",
    color:
      "hover:text-green-500 hover:filter hover:drop-shadow-[0_0_15px_rgba(34,197,94,1)]",
  },
  {
    id: 2,
    name: "Facebook",
    link: "https://www.facebook.com",
    icon: "bi bi-facebook",
    color:
      "hover:text-blue-500 hover:filter hover:drop-shadow-[0_0_15px_rgba(59,130,246,1)]",
  },
  {
    id: 3,
    name: "Instagram",
    link: "https://www.instagram.com",
    icon: "bi bi-instagram",
    color: `
      hover:filter
      hover:text-transparent 
      hover:bg-clip-text 
      hover:bg-gradient-to-r 
      hover:from-pink-500 hover:via-purple-500 hover:to-yellow-400 
      hover:drop-shadow-[0_0_20px_rgba(236,72,153,1)]
    `,
  },
  {
    id: 4,
    name: "TikTok",
    link: "https://www.tiktok.com",
    icon: "bi bi-tiktok",
    color:
      "hover:text-red-500 hover:filter hover:drop-shadow-[0_0_15px_rgba(239,68,68,1)]",
  },
];
