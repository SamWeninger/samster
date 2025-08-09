type Props = { title: string; subtitle?: string; image: string; cta?: { label: string; href: string } };

export const Hero = ({ title, subtitle, image, cta }: Props) => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={image} 
          alt="Hero background" 
          className="w-full h-full object-cover object-center scale-105" 
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>
      
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
        <div className="flex flex-col items-center space-y-12">
          <div className="space-y-8">
            <h1 className="font-light text-5xl md:text-7xl lg:text-8xl text-white leading-[0.9] tracking-[-0.02em]">
              {title.split('').map((char, i) => (
                <span 
                  key={i} 
                  className="inline-block opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </h1>
            
            {subtitle && (
              <p className="text-lg md:text-xl text-white/80 font-light tracking-[0.05em] max-w-2xl mx-auto opacity-0 animate-[fadeInUp_0.8s_ease-out_0.5s_forwards]">
                {subtitle}
              </p>
            )}
          </div>
          
          {cta && (
            <div className="opacity-0 animate-[fadeInUp_0.8s_ease-out_1s_forwards]">
              <a 
                href={cta.href} 
                className="inline-block border border-white/30 text-white px-12 py-4 text-sm tracking-[0.1em] font-light hover:bg-white hover:text-black transition-all duration-700 group"
              >
                <span className="relative overflow-hidden">
                  {cta.label.toUpperCase()}
                </span>
              </a>
            </div>
          )}
          
          <div className="opacity-0 animate-[fadeInUp_0.8s_ease-out_1.5s_forwards] mt-16">
            <div className="flex flex-col items-center justify-center space-y-3 pulse-slow">
              <span className="text-white/60 text-xs tracking-[0.15em] font-light whitespace-nowrap">SCROLL TO EXPLORE</span>
              <div className="w-px h-12 bg-white/30 mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
