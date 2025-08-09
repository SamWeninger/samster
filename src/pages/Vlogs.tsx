import vlogs from "@/data/vlogs.json";
import { VlogCard } from "@/components/cards/VlogCard";
import { SEO } from "@/components/SEO";
import { FilterBar } from "@/components/filters/FilterBar";
import { useSearchParams } from "react-router-dom";

const Vlogs = () => {
  const [sp] = useSearchParams();
  const q = (sp.get('q') ?? '').toLowerCase();
  const location = sp.get('location');
  const year = sp.get('year');
  const tag = sp.get('tag');

  const filtered = vlogs.filter(v =>
    (!q || v.title.toLowerCase().includes(q) || v.location.toLowerCase().includes(q) || v.tags.some(t => t.toLowerCase().includes(q))) &&
    (!location || v.location === location) &&
    (!year || v.date.startsWith(year)) &&
    (!tag || v.tags.includes(tag))
  );

  return (
    <main>
      <SEO title="Vlogs — Travel Videos" description="Browse cinematic travel vlogs by location, year and tags." canonical="/vlogs" />
      <FilterBar items={vlogs.map(v => ({ location: v.location, date: v.date, tags: v.tags }))} />
      <section className="container py-8">
        <h1 className="sr-only">Vlogs</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(v => (
            <VlogCard key={v.slug} vlog={v as any} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Vlogs;
