type Props = { title: string; subtitle?: string; image: string; cta?: { label: string; href: string } };

export const Hero = ({ title, subtitle, image, cta }: Props) => {
  return (
    <section className="relative isolate">
      <div className="absolute inset-0 -z-10">
        <img src={image} alt="Hero background" className="h-[60vh] w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/30 to-background/10" />
      </div>
      <div className="container h-[60vh] flex items-end pb-10">
        <div className="max-w-xl glass p-6 rounded-xl">
          <h1 className="font-black text-4xl md:text-5xl leading-tight">{title}</h1>
          {subtitle && <p className="mt-3 text-lg text-muted-foreground">{subtitle}</p>}
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
