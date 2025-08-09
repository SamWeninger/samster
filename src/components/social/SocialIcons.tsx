import { Youtube, Instagram } from "lucide-react";

export const SocialIcons = ({ size = 18 }: { size?: number }) => (
  <div className="flex items-center gap-2">
    <a
      href="https://www.instagram.com/samsterishamster"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
      className="p-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white/20 transition-all duration-300 hover:scale-105"
    >
      <Instagram size={size} className="text-white" />
    </a>
    <a
      href="https://www.youtube.com/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="YouTube"
      className="p-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white/20 transition-all duration-300 hover:scale-105"
    >
      <Youtube size={size} className="text-white" />
    </a>
  </div>
);
