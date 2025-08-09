import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

export type Filters = { q?: string; location?: string; year?: string; tag?: string };

export const FilterBar = ({ items }: { items: { location: string; date: string; tags: string[] }[] }) => {
  const [sp, setSp] = useSearchParams();
  const [q, setQ] = useState(sp.get('q') ?? '');
  const [location, setLocation] = useState(sp.get('location') ?? '');
  const [year, setYear] = useState(sp.get('year') ?? '');
  const [tag, setTag] = useState(sp.get('tag') ?? '');

  useEffect(() => {
    const next = new URLSearchParams();
    if (q) next.set('q', q);
    if (location) next.set('location', location);
    if (year) next.set('year', year);
    if (tag) next.set('tag', tag);
    setSp(next, { replace: true });
  }, [q, location, year, tag, setSp]);

  const locations = useMemo(() => Array.from(new Set(items.map(i => i.location))).sort(), [items]);
  const years = useMemo(() => Array.from(new Set(items.map(i => i.date.slice(0,4)))).sort().reverse(), [items]);
  const tags = useMemo(() => Array.from(new Set(items.flatMap(i => i.tags))).sort(), [items]);

  return (
    <div className="sticky top-14 z-30 border-b bg-background/90 backdrop-blur">
      <div className="container py-3 grid grid-cols-2 md:grid-cols-4 gap-2">
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search vlogs" className="rounded-md border bg-background px-3 py-2" />
        <select value={location} onChange={(e) => setLocation(e.target.value)} className="rounded-md border bg-background px-3 py-2">
          <option value="">All locations</option>
          {locations.map(l => <option key={l} value={l}>{l}</option>)}
        </select>
        <select value={year} onChange={(e) => setYear(e.target.value)} className="rounded-md border bg-background px-3 py-2">
          <option value="">All years</option>
          {years.map(y => <option key={y} value={y}>{y}</option>)}
        </select>
        <select value={tag} onChange={(e) => setTag(e.target.value)} className="rounded-md border bg-background px-3 py-2">
          <option value="">All tags</option>
          {tags.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>
    </div>
  );
};
