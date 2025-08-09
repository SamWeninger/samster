import { useParams, useNavigate } from "react-router-dom";
import vlogs from "@/data/vlogs.json";
import { SEO } from "@/components/SEO";
import { YouTubeEmbed } from "@/components/media/YouTubeEmbed";
import { TagPills } from "@/components/typography/TagPills";
import { ChevronLeft } from "lucide-react";

const VlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const vlog = vlogs.find(v => v.slug === slug);
  if (!vlog) return <div className="container py-10">Not found</div>;

  const vlogIndex = vlogs.findIndex(v => v.slug === slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: vlog.title,
    description: vlog.description,
    uploadDate: vlog.date,
    thumbnailUrl: vlog.thumbnail,
  };

  const handleBackClick = () => {
    navigate('/vlogs');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <main className="pt-20 bg-white">
      <SEO title="Samster" description={vlog.description} canonical={`/vlogs/${vlog.slug}`} jsonLd={jsonLd} />
      
      {/* Back Navigation */}
      <section className="px-8 py-6 border-b border-black/10">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={handleBackClick}
            className="flex items-center gap-3 text-black/60 hover:text-black transition-colors group"
          >
            <ChevronLeft size={20} className="transition-transform group-hover:-translate-x-1" />
            <span className="text-sm tracking-wide font-light">BACK TO VIDEOS</span>
          </button>
        </div>
      </section>

      {/* Video Section */}
      <section className="px-8 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <div className="mb-8">
              <YouTubeEmbed youtubeId={vlog.youtubeId} title={vlog.title} />
            </div>
            
            <div className="space-y-6">
              <div className="flex items-baseline gap-4">
                <span className="text-sm text-black/30 font-light tracking-[0.15em]">
                  {String(vlogIndex + 1).padStart(2, '0')}
                </span>
                <h1 className="text-3xl md:text-4xl font-light tracking-[-0.02em]">
                  {vlog.title}
                </h1>
              </div>
              
              <div className="w-24 h-px bg-black"></div>
              
              <div className="flex items-center space-x-8 text-sm text-black/60 font-light tracking-wide">
                <span>{vlog.location}</span>
                <span>•</span>
                <span>{new Date(vlog.date).toLocaleDateString()}</span>
                <span>•</span>
                <span>{vlog.duration}</span>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {vlog.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-black/5 text-black/60 text-xs tracking-wide font-light">
                    {tag}
                  </span>
                ))}
              </div>
              
              <p className="text-lg text-black/70 font-light leading-relaxed max-w-3xl">
                {vlog.description}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default VlogDetail;
