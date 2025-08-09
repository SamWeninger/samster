import vlogs from "@/data/vlogs.json";
import destinations from "@/data/destinations.json";
import { SEO } from "@/components/SEO";
import { Hero } from "@/components/hero/Hero";
import { Link } from "react-router-dom";
import { ResponsiveImage } from "@/components/media/ResponsiveImage";
import { PlayCircle } from "lucide-react";

const Index = () => {
  const latestVlog = [...vlogs].sort((a, b) => (a.date < b.date ? 1 : -1))[0];
  const latestDestination = destinations[0];

  return (
    <main className="bg-white">
      <SEO
        title="Samster"
        description="Latest cinematic travel vlog and galleries. Tokyo, Bali, Iceland and more."
        canonical="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Samsterishamster",
          url: "/",
        }}
      />

      <Hero
        title="SAMSTER"
        subtitle="Capturing the world's hidden poetry through lens and motion"
        image="/images/hero.jpg"
        cta={{ label: "Explore", href: "#philosophy" }}
      />

      {/* Philosophy Section */}
      <section id="philosophy" className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-light tracking-[-0.02em] leading-tight">
                Where time<br />
                <em className="italic">stands still</em>
              </h2>
              <p className="text-lg text-black/60 font-light leading-relaxed max-w-xl">
                Every destination tells a story. Through careful observation and patient waiting, 
                I capture the essence of places that speak to the soul.
              </p>
            </div>
            <div className="relative">
              <ResponsiveImage 
                src="/images/tokyo/hero.jpg" 
                alt="Travel photography" 
                className="w-full aspect-[4/5] object-cover" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section id="destinations" className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-light tracking-[-0.02em] mb-6">DESTINATIONS</h2>
            <div className="w-16 h-px bg-black"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
            {destinations.map((d, index) => (
              <Link 
                key={d.slug} 
                to={`/destinations/${d.slug}`} 
                className="group relative overflow-hidden aspect-square bg-black"
              >
                <ResponsiveImage 
                  src={d.hero} 
                  alt={d.name} 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:opacity-80" 
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
                <div className="absolute inset-8 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="text-right">
                    <span className="text-white text-xs tracking-[0.15em] font-light">
                      0{index + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-white text-xl font-light tracking-wide mb-2">
                      {d.name}
                    </h3>
                    <p className="text-white/80 text-sm font-light">
                      {d.summary}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Work Section */}
      <section className="py-32 px-8 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <Link 
                to={`/vlogs/${latestVlog.slug}`}
                onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
                className="group block relative overflow-hidden"
              >
                <ResponsiveImage 
                  src={latestVlog.thumbnail} 
                  alt={latestVlog.title} 
                  className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="border border-white/50 rounded-full p-4">
                    <PlayCircle size={32} className="text-white" />
                  </div>
                </div>
              </Link>
            </div>
            
            <div className="space-y-8">
              <div>
                <span className="text-white/50 text-sm tracking-[0.15em] font-light">LATEST WORK</span>
                <h3 className="text-3xl md:text-4xl font-light tracking-[-0.02em] mt-4 mb-6">
                  {latestVlog.title}
                </h3>
                <p className="text-white/70 text-lg font-light leading-relaxed mb-8">
                  {latestVlog.description}
                </p>
              </div>
              
              <div className="flex items-center space-x-8 text-sm text-white/60 font-light tracking-wide">
                <span>{latestVlog.location}</span>
                <span>•</span>
                <span>{latestVlog.duration}</span>
              </div>
              
              <Link 
                to={`/vlogs/${latestVlog.slug}`}
                onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
                className="inline-block border border-white/30 text-white px-8 py-3 text-sm tracking-[0.1em] font-light hover:bg-white hover:text-black transition-all duration-500"
              >
                WATCH FILM
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
