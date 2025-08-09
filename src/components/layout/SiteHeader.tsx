import { Link, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export const SiteHeader = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClass = ({ isActive }: { isActive: boolean }) =>
    `relative px-6 py-3 text-sm font-normal tracking-wide transition-all duration-500 group ${
      isActive 
        ? isHomePage && !isScrolled
          ? "text-white/80"
          : "text-black"
        : isHomePage && !isScrolled
          ? "text-white/90 hover:text-white"
          : "text-black/70 hover:text-black"
    }`;

  const headerBg = isHomePage && !isScrolled 
    ? "bg-transparent" 
    : "bg-white/95 backdrop-blur-xl border-b border-black/5";

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-700 ${headerBg}`}>
      <div className="max-w-7xl mx-auto px-8 flex h-20 items-center justify-between">
        <Link 
          to="/" 
          className={`font-light text-xl tracking-[0.1em] transition-colors duration-500 ${
            isHomePage && !isScrolled ? "text-white" : "text-black"
          }`}
        >
          SAMSTER
        </Link>
        
        <nav className="flex items-center">
          <NavLink to="/" className={navClass} onClick={scrollToTop}>
            <span className="relative">
              HOME
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-current transition-all duration-300 group-hover:w-full"></span>
            </span>
          </NavLink>
          <NavLink to="/destinations" className={navClass} onClick={scrollToTop}>
            <span className="relative">
              DESTINATIONS
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-current transition-all duration-300 group-hover:w-full"></span>
            </span>
          </NavLink>
          <NavLink to="/vlogs" className={navClass} onClick={scrollToTop}>
            <span className="relative">
              VIDEOS
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-current transition-all duration-300 group-hover:w-full"></span>
            </span>
          </NavLink>
        </nav>
        
        <div className="w-16"></div>
      </div>
    </header>
  );
};
