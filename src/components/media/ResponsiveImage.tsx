import { useState } from "react";

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  srcSetSizes?: number[]; // e.g., [640, 960, 1280]
};

export const ResponsiveImage = ({ src = "", alt = "", srcSetSizes = [], className = "", ...rest }: Props) => {
  const [loaded, setLoaded] = useState(false);

  const buildSrcSet = () => {
    const base = src.replace(/\.(jpg|jpeg|png|webp)$/i, "");
    const ext = (src.match(/\.(jpg|jpeg|png|webp)$/i)?.[0] ?? ".jpg");
    return srcSetSizes.map((w) => `${base}-${w}${ext} ${w}w`).join(", ");
  };

  const srcSet = srcSetSizes.length ? buildSrcSet() : undefined;

  return (
    <img
      src={src}
      alt={alt}
      className={`transition-[filter,transform,opacity] duration-500 ${loaded ? "opacity-100" : "opacity-80 blur-sm"} ${className}`}
      loading="lazy"
      decoding="async"
      srcSet={srcSet}
      sizes={srcSet ? "(max-width: 768px) 100vw, 50vw" : undefined}
      onLoad={() => setLoaded(true)}
      {...rest}
    />
  );
};
