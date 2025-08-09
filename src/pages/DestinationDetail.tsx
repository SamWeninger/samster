import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import destinations from "@/data/destinations.json";
import vlogs from "@/data/vlogs.json";
import { SEO } from "@/components/SEO";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { VlogCard } from "@/components/cards/VlogCard";
import { ResponsiveImage } from "@/components/media/ResponsiveImage";
import { ChevronLeft, PlayCircle } from "lucide-react";

const DestinationDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [scrollPosition, setScrollPosition] = useState(0);
  
  const dest = destinations.find(d => d.slug === slug);
  if (!dest) return <div className="container py-10">Not found</div>;

  const related = vlogs.filter(v => dest.vlogs.includes(v.slug));
  const destIndex = destinations.findIndex(d => d.slug === slug);

  useEffect(() => {
    // Get stored scroll position
    const stored = sessionStorage.getItem(`destinations-scroll-${slug}`);
    if (stored) {
      setScrollPosition(parseInt(stored));
    }
  }, [slug]);

  const handleBackClick = () => {
    // Navigate back to destinations and scroll to top
    navigate('/destinations');
  };

  return (
    <main className="pt-20 bg-white">
      <SEO 
        title="Samster" 
        description={dest.summary} 
        canonical={`/destinations/${dest.slug}`} 
        jsonLd={{"@context":"https://schema.org","@type":"Place", name: dest.name}} 
      />
      
      {/* Back Navigation */}
      <section className="px-8 py-6 border-b border-black/10">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={handleBackClick}
            className="flex items-center gap-3 text-black/60 hover:text-black transition-colors group"
          >
            <ChevronLeft size={20} className="transition-transform group-hover:-translate-x-1" />
            <span className="text-sm tracking-wide font-light">BACK TO DESTINATIONS</span>
          </button>
        </div>
      </section>

      {/* Hero Section */}
      <section className="px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
            <div className="space-y-8">
              <div>
                <span className="text-sm text-black/30 font-light tracking-[0.15em]">
                  0{destIndex + 1}
                </span>
                <h1 className="text-4xl md:text-6xl font-light tracking-[-0.02em] mt-4 mb-6">
                  {dest.name}
                </h1>
                <div className="w-24 h-px bg-black mb-8"></div>
                <p className="text-lg text-black/60 font-light leading-relaxed">
                  {dest.summary}
                </p>
              </div>
            </div>
            <div className="relative">
              <ResponsiveImage 
                src={dest.hero} 
                alt={dest.name} 
                className="w-full aspect-[4/5] object-cover" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="px-8 py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-light tracking-[-0.02em] mb-6">
              Collection
            </h2>
            <div className="w-16 h-px bg-black"></div>
          </div>
          <GalleryGrid images={dest.gallery} altPrefix={dest.name} />
        </div>
      </section>

      {/* Related Videos Section */}
      {related.length > 0 && (
        <section className="px-8 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-light tracking-[-0.02em] mb-6">
                Related Films
              </h2>
              <div className="w-16 h-px bg-black"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {related.map((v, index) => (
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
      )}
    </main>
  );
};

export default DestinationDetail;
