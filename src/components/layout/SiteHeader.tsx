import { Link, NavLink } from "react-router-dom";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { SocialIcons } from "@/components/social/SocialIcons";

export const SiteHeader = () => {
  const navClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-md text-sm font-medium hover-scale ${
      isActive ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:text-foreground"
    }`;

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container flex h-14 items-center justify-between">
        <Link to="/" className="font-heading font-bold tracking-tight text-lg">
          samster
        </Link>
        <nav className="flex items-center gap-1">
          <NavLink to="/vlogs" className={navClass}>
            Vlogs
          </NavLink>
          <NavLink to="/destinations" className={navClass}>
            Destinations
          </NavLink>
        </nav>
        <div className="flex items-center gap-3">
          <SocialIcons />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
