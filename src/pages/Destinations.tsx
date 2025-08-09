import destinations from "@/data/destinations.json";
import { SEO } from "@/components/SEO";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { Link } from "react-router-dom";

const Destinations = () => {
  return (
    <main>
      <SEO title="Destinations — Photo Galleries" description="Explore travel photo galleries by destination." canonical="/destinations" />
      <section className="container py-8 space-y-10">
        <h1 className="text-3xl font-bold">Destinations</h1>
        {destinations.map(d => (
          <article key={d.slug} className="space-y-3">
            <div className="flex items-baseline justify-between">
              <h2 className="text-xl font-semibold">{d.name}</h2>
              <Link to={`/destinations/${d.slug}`} className="text-sm underline story-link">View page</Link>
            </div>
            <GalleryGrid images={d.gallery} altPrefix={d.name} />
          </article>
        ))}
      </section>
    </main>
  );
};

export default Destinations;
