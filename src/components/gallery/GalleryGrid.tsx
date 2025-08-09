import { useState } from "react";
import { Lightbox } from "./Lightbox";
import { ResponsiveImage } from "@/components/media/ResponsiveImage";

export const GalleryGrid = ({ images, altPrefix = "" }: { images: string[]; altPrefix?: string }) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <div>
      <div className="columns-2 md:columns-3 gap-4 [column-fill:_balance]">
        {images.map((src, i) => (
          <button key={src + i} className="mb-4 w-full overflow-hidden rounded-lg hover-scale" onClick={() => { setOpen(true); setIndex(i); }}>
            <ResponsiveImage src={src} alt={`${altPrefix} image ${i + 1}`} className="w-full h-auto object-cover break-inside-avoid" />
          </button>
        ))}
      </div>
      {open && (
        <Lightbox images={images} index={index} onClose={() => setOpen(false)} onNavigate={(n) => setIndex(n)} />
      )}
    </div>
  );
};
