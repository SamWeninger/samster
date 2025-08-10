import vlogs from "@/data/vlogs.json";
import { VlogCard } from "@/components/cards/VlogCard";
import { SEO } from "@/components/SEO";
import { FilterBar } from "@/components/filters/FilterBar";
import { useSearchParams, Link } from "react-router-dom";
import { ResponsiveImage } from "@/components/media/ResponsiveImage";
import { PlayCircle } from "lucide-react";

const Vlogs = () => {
  const [sp] = useSearchParams();
  const q = (sp.get('q') ?? '').toLowerCase();
  const location = sp.get('location');
  const year = sp.get('year');

  const filtered = vlogs.filter(v =>
    (!q || v.title.toLowerCase().includes(q) || v.location.toLowerCase().includes(q) || v.tags.some(t => t.toLowerCase().includes(q))) &&
    (!location || v.location === location) &&
    (!year || v.date.startsWith(year))
  );

  return (
    <main className="pt-20 bg-white">
      <SEO title="Samster" description="Browse cinematic travel films by location, year and tags." canonical="/vlogs" />
      
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h1 className="text-4xl md:text-6xl font-light tracking-[-0.02em] mb-8">
              VIDEOS
            </h1>
            <div className="w-24 h-px bg-black mb-8"></div>
            <p className="text-lg text-black/60 font-light max-w-2xl">
              Films that capture the spirit of each place and journey.
              I try to capture these places through my own eyes.
            </p>
          </div>

          <FilterBar items={vlogs.map(v => ({ location: v.location, date: v.date, tags: v.tags }))} />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {filtered.map((v, index) => (
              <article key={v.slug} className="group">
                <Link 
                  to={`/vlogs/${v.slug}`} 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
                  className="block"
                >
                  <div className="relative overflow-hidden aspect-[16/10] mb-6">
                    <ResponsiveImage 
                      src={v.thumbnail} 
                      alt={v.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="border border-white/50 rounded-full p-3">
                        <PlayCircle size={24} className="text-white" />
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="text-white text-xs tracking-[0.15em] font-light bg-black/50 px-2 py-1">
                        {v.duration}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-baseline gap-3">
                      <span className="text-xs text-black/30 font-light tracking-[0.15em]">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h3 className="text-lg font-light tracking-wide group-hover:text-black/70 transition-colors">
                        {v.title}
                      </h3>
                    </div>
                    <p className="text-black/60 text-sm font-light">
                      {v.location}
                    </p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Vlogs;
