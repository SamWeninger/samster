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
    <main>
      <SEO
        title="Home — Travel Vlogs & Photo Galleries"
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
        title="samster"
        subtitle="travel journals in motion"
        image="/images/hero.jpg"
        cta={{ label: "View Destinations", href: "#destinations" }}
      />

      <section id="destinations" className="container py-12 space-y-6">
        <h2 className="text-2xl font-heading font-bold">Destinations</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.slice(0, 6).map((d) => (
            <Link key={d.slug} to={`/destinations/${d.slug}`} className="group rounded-2xl overflow-hidden block">
              <div className="relative">
                <ResponsiveImage src={d.hero} alt={`${d.name} hero`} className="w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]" />
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-foreground/70 to-transparent">
                  <h3 className="font-heading text-xl text-background">{d.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="container py-12">
        <h2 className="text-2xl font-heading font-bold mb-4">Latest Vlog</h2>
        <Link to={`/vlogs/${latestVlog.slug}`} className="group block rounded-2xl overflow-hidden">
          <div className="relative">
            <ResponsiveImage src={latestVlog.thumbnail} alt={`${latestVlog.title} thumbnail`} className="w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]" />
            <div className="absolute inset-0 grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <PlayCircle size={72} className="text-background" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-foreground/70 to-transparent">
              <h3 className="font-heading text-2xl text-background">{latestVlog.title}</h3>
              <p className="text-sm text-background/90 line-clamp-2">{(latestVlog as any).description}</p>
            </div>
          </div>
        </Link>
      </section>
    </main>
  );
};

export default Index;
