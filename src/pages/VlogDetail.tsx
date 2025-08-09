import { useParams } from "react-router-dom";
import vlogs from "@/data/vlogs.json";
import { SEO } from "@/components/SEO";
import { YouTubeEmbed } from "@/components/media/YouTubeEmbed";
import { TagPills } from "@/components/typography/TagPills";

const VlogDetail = () => {
  const { slug } = useParams();
  const vlog = vlogs.find(v => v.slug === slug);
  if (!vlog) return <div className="container py-10">Not found</div>;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: vlog.title,
    description: vlog.description,
    uploadDate: vlog.date,
    thumbnailUrl: vlog.thumbnail,
  };

  return (
    <main className="container py-8">
      <SEO title={`${vlog.title} — Vlog`} description={vlog.description} canonical={`/vlogs/${vlog.slug}`} jsonLd={jsonLd} />
      <article className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          <YouTubeEmbed youtubeId={vlog.youtubeId} title={vlog.title} />
          <h1 className="text-2xl font-bold">{vlog.title}</h1>
          <p className="text-muted-foreground">{vlog.location} • {new Date(vlog.date).toLocaleDateString()}</p>
          <TagPills tags={vlog.tags} />
          <p className="mt-4">{vlog.description}</p>
          {vlog.chapters?.length ? (
            <div className="mt-4">
              <h2 className="font-semibold mb-2">Chapters</h2>
              <ul className="list-disc pl-6 space-y-1">
                {vlog.chapters.map((c: any, i: number) => (
                  <li key={i}><span className="font-mono text-sm">{c.t}</span> — {c.label}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
        <aside className="space-y-4">
          <h3 className="font-semibold">Related</h3>
          <p className="text-sm text-muted-foreground">More vlogs coming soon.</p>
        </aside>
      </article>
    </main>
  );
};

export default VlogDetail;
