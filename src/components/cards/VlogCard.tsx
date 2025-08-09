import { Link } from "react-router-dom";
import { ResponsiveImage } from "@/components/media/ResponsiveImage";
import { PlayCircle } from "lucide-react";

export type Vlog = {
  slug: string;
  title: string;
  location: string;
  date: string;
  duration: string;
  tags: string[];
  thumbnail: string;
  youtubeId: string;
  description: string;
  chapters: Array<{ t: string; label: string }>;
  gallery: string[];
};

export const VlogCard = ({ vlog }: { vlog: Vlog }) => {
  return (
    <article className="group rounded-2xl overflow-hidden">
      <Link to={`/vlogs/${vlog.slug}`} className="block">
        <div className="relative">
          <ResponsiveImage src={vlog.thumbnail} alt={`${vlog.title} thumbnail`} className="w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]" />
          <div className="absolute inset-0 grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <PlayCircle size={56} className="text-background" />
          </div>
          <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-foreground/70 to-transparent">
            <h3 className="font-heading text-lg md:text-xl text-background leading-tight">{vlog.title}</h3>
          </div>
        </div>
      </Link>
    </article>
  );
};
