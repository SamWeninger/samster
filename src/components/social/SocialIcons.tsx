import { Youtube, Instagram } from "lucide-react";

export const SocialIcons = ({ size = 18 }: { size?: number }) => (
  <div className="flex items-center gap-3">
    <a
      href="https://www.instagram.com/samsterishamster"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
      className="hover-scale"
    >
      <Instagram size={size} />
    </a>
    <a
      href="https://www.youtube.com/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="YouTube"
      className="hover-scale"
    >
      <Youtube size={size} />
    </a>
  </div>
);
