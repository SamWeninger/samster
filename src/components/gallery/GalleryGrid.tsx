import { useState } from "react";
import { Lightbox } from "./Lightbox";
import { ResponsiveImage } from "@/components/media/ResponsiveImage";

export const GalleryGrid = ({ 
  images, 
  altPrefix = "", 
  layout = "gallery" 
}: { 
  images: string[]; 
  altPrefix?: string;
  layout?: "preview" | "gallery";
}) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  if (layout === "preview") {
    return (
      <div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
          {images.slice(0, 4).map((src, i) => (
            <div key={src + i} className="aspect-square overflow-hidden">
              <ResponsiveImage 
                src={src} 
                alt={`${altPrefix} image ${i + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((src, i) => (
          <button 
            key={src + i} 
            className="aspect-square overflow-hidden hover-scale" 
            onClick={() => { setOpen(true); setIndex(i); }}
          >
            <ResponsiveImage 
              src={src} 
              alt={`${altPrefix} image ${i + 1}`} 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
            />
          </button>
        ))}
      </div>
      {open && (
        <Lightbox images={images} index={index} onClose={() => setOpen(false)} onNavigate={(n) => setIndex(n)} />
      )}
    </div>
  );
};
