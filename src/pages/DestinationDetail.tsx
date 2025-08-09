import { useParams, Link } from "react-router-dom";
import destinations from "@/data/destinations.json";
import vlogs from "@/data/vlogs.json";
import { SEO } from "@/components/SEO";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { VlogCard } from "@/components/cards/VlogCard";

const DestinationDetail = () => {
  const { slug } = useParams();
  const dest = destinations.find(d => d.slug === slug);
  if (!dest) return <div className="container py-10">Not found</div>;

  const related = vlogs.filter(v => dest.vlogs.includes(v.slug));

  return (
    <main>
      <SEO title={`${dest.name} — Destination`} description={dest.summary} canonical={`/destinations/${dest.slug}`} jsonLd={{"@context":"https://schema.org","@type":"Place", name: dest.name}} />
      <section className="relative isolate">
        <img src={dest.hero} alt={`${dest.name} hero`} className="h-[40vh] w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
      </section>
      <section className="container py-8 space-y-8">
        <div className="flex items-baseline justify-between">
          <div>
            <h1 className="text-3xl font-bold">{dest.name}</h1>
            <p className="text-muted-foreground">{dest.summary}</p>
          </div>
          <Link to="/destinations" className="underline story-link">All destinations</Link>
        </div>
        <GalleryGrid images={dest.gallery} altPrefix={dest.name} />
        <div>
          <h2 className="text-xl font-semibold mb-4">Vlogs from {dest.name}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map(v => <VlogCard key={v.slug} vlog={v as any} />)}
          </div>
        </div>
      </section>
    </main>
  );
};

export default DestinationDetail;
