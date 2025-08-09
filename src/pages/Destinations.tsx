import destinations from "@/data/destinations.json";
import { SEO } from "@/components/SEO";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { Link } from "react-router-dom";
import { ResponsiveImage } from "@/components/media/ResponsiveImage";
import { useEffect } from "react";
import { getGalleryImages } from "@/lib/utils";

const Destinations = () => {
  useEffect(() => {
    // Always scroll to top when navigating to destinations
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);
  return (
    <main className="pt-20 bg-white">
      <SEO title="Samster" description="Explore travel photo galleries by destination." canonical="/destinations" />
      
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h1 className="text-4xl md:text-6xl font-light tracking-[-0.02em] mb-8">
              DESTINATIONS
            </h1>
            <div className="w-24 h-px bg-black mb-8"></div>
            <p className="text-lg text-black/60 font-light max-w-2xl">
              A curated collection of moments captured across the globe. Each destination 
              reveals its own character through careful observation and patient waiting.
            </p>
          </div>
          
          <div className="space-y-32">
            {destinations.map((d, index) => (
              <article key={d.slug} id={`destination-${d.slug}`} className="group">
                <div className="grid lg:grid-cols-5 gap-12 items-start mb-16">
                  <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-baseline gap-4">
                      <span className="text-sm text-black/30 font-light tracking-[0.15em]">
                        0{index + 1}
                      </span>
                      <h2 className="text-2xl md:text-3xl font-light tracking-wide">
                        {d.name}
                      </h2>
                    </div>
                    <p className="text-black/60 font-light leading-relaxed">
                      {d.summary}
                    </p>
                    <Link 
                      to={`/destinations/${d.slug}`}
                      onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
                      className="inline-block border border-black/20 text-black px-8 py-3 text-sm tracking-[0.1em] font-light hover:bg-black hover:text-white transition-all duration-500"
                    >
                      VIEW COLLECTION
                    </Link>
                  </div>
                  <div className="lg:col-span-3">
                    <ResponsiveImage 
                      src={d.hero} 
                      alt={d.name} 
                      className="w-full aspect-[16/10] object-cover" 
                    />
                  </div>
                </div>
                
                                    <GalleryGrid 
                      images={getGalleryImages(d.galleryFolder, d.galleryCount)} 
                      altPrefix={d.name} 
                      layout="preview" 
                    />
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Destinations;
