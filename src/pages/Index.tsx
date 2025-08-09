import vlogs from "@/data/vlogs.json";
import destinations from "@/data/destinations.json";
import { SEO } from "@/components/SEO";
import { Hero } from "@/components/hero/Hero";
import { VlogCard } from "@/components/cards/VlogCard";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";

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
        title="Cinematic travel — vlogs & photo stories"
        subtitle="Mobile-first stories from Tokyo, Bali, Iceland and beyond."
        image={latestDestination.hero}
        cta={{ label: "Watch latest vlog", href: `/vlogs/${latestVlog.slug}` }}
      />

      <section className="container py-12">
        <h2 className="text-2xl font-bold mb-4">Latest Vlog</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <VlogCard vlog={latestVlog as any} />
          <div>
            <h3 className="font-semibold mb-2">Latest Gallery</h3>
            <GalleryGrid images={latestDestination.gallery} altPrefix={latestDestination.name} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
