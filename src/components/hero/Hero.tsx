type Props = { title: string; subtitle?: string; image: string; cta?: { label: string; href: string } };

export const Hero = ({ title, subtitle, image, cta }: Props) => {
  return (
      <div className="relative w-full">
        <div className="relative w-full aspect-[4/5] md:aspect-[16/9]">
          <img src={image} alt="Hero background" className="absolute inset-0 h-full w-full object-cover" />
          <div className="vignette" />
          <div className="film-grain" />
        </div>
      </div>
      <div className="container absolute inset-0 flex justify-center md:justify-start items-center md:items-end pb-8">
        <div className="max-w-xl glass p-6 rounded-2xl text-center md:text-left">
          <h1 className="font-heading text-5xl md:text-6xl leading-tight">{title}</h1>
          {subtitle && <p className="mt-3 text-base md:text-lg text-muted-foreground">{subtitle}</p>}
          {cta && (
            <a href={cta.href} className="mt-5 inline-flex items-center rounded-md bg-primary text-primary-foreground px-5 py-2.5 hover:opacity-90 transition-opacity">
              {cta.label}
            </a>
          )}
        </div>
      </div>
    </section>
  );
};
