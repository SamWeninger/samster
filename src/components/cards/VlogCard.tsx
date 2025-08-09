import { Link } from "react-router-dom";
import { TagPills } from "@/components/typography/TagPills";
import { ResponsiveImage } from "@/components/media/ResponsiveImage";

export type Vlog = {
  slug: string;
  title: string;
  location: string;
  date: string;
  duration: string;
  tags: string[];
  thumbnail: string;
  youtubeId: string;
};

export const VlogCard = ({ vlog }: { vlog: Vlog }) => {
  return (
    <article className="group rounded-xl border bg-card text-card-foreground overflow-hidden hover:shadow-xl transition-shadow">
      <Link to={`/vlogs/${vlog.slug}`} className="block">
        <div className="relative">
          <ResponsiveImage src={vlog.thumbnail} alt={`${vlog.title} thumbnail`} className="w-full object-cover" />
          <span className="absolute bottom-3 right-3 rounded-md bg-background/80 backdrop-blur px-2 py-1 text-xs">{vlog.duration}</span>
        </div>
        <div className="p-4 space-y-2">
          <h3 className="font-semibold leading-tight">{vlog.title}</h3>
          <p className="text-sm text-muted-foreground">{vlog.location}</p>
          <TagPills tags={vlog.tags} />
          <div className="pt-2">
            <span className="inline-flex items-center rounded-md bg-primary px-3 py-1.5 text-sm text-primary-foreground group-hover:opacity-90 transition-opacity">
              Watch
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
};
