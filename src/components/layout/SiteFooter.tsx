import { SocialIcons } from "@/components/social/SocialIcons";

export const SiteFooter = () => {
  return (
    <footer className="border-t mt-16">
      <div className="container py-8 flex items-center justify-between">
        <span className="text-sm text-muted-foreground">© {new Date().getFullYear()} samster</span>
        <SocialIcons size={22} />
      </div>
    </footer>
  );
};
