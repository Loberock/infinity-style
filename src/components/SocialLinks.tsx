import React from "react";
import { SOCIAL_LINKS } from "../constants";
import type { SocialLink } from "../constants";

interface SocialLinksProps {
  items?: SocialLink[];
  className?: string;
  isMobile?: boolean;
  onLinkClick?: () => void;
}

const SocialLinks: React.FC<SocialLinksProps> = ({
  items = SOCIAL_LINKS,
  className = "space-x-4",
  isMobile = false,
  onLinkClick = () => {},
}) => {
  return (
    <ul className={`flex ${className}`}>
      {items.map((r) => (
        <li key={r.id}>
          <a
            href={r.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={isMobile ? onLinkClick : undefined}
            className="inline-block transform transition-transform duration-300 hover:scale-125"
          >
            <i className={`${r.icon} text-white text-2xl ${r.color}`}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
