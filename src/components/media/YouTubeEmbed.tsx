type Props = { youtubeId: string; title?: string };

export const YouTubeEmbed = ({ youtubeId, title = "YouTube video" }: Props) => {
  const src = `https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1&playsinline=1`;
  return (
    <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16 / 9" }}>
      <iframe
        className="absolute left-0 top-0 h-full w-full"
        src={src}
        title={title}
        loading="lazy"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
};
