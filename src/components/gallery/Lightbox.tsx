import { useEffect } from "react";

export const Lightbox = ({ images, index, onClose, onNavigate }: { images: string[]; index: number; onClose: () => void; onNavigate: (next: number) => void; }) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate(index + 1);
      if (e.key === 'ArrowLeft') onNavigate(index - 1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [index, onClose, onNavigate]);

  let startX = 0;
  const onTouchStart = (e: React.TouchEvent) => { startX = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - startX;
    if (dx > 40) onNavigate(index - 1);
    if (dx < -40) onNavigate(index + 1);
  };

  const safeIndex = ((index % images.length) + images.length) % images.length;

  return (
    <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <button aria-label="Close" onClick={onClose} className="absolute top-4 right-4 rounded-md bg-background/80 px-3 py-1">Close</button>
      <img onTouchStart={onTouchStart} onTouchEnd={onTouchEnd} src={images[safeIndex]} alt="Gallery image" className="max-h-[90vh] max-w-[90vw] object-contain" />
    </div>
  );
};
