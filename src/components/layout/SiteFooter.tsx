import { SocialIcons } from "@/components/social/SocialIcons";

export const SiteFooter = () => {
  return (
    <footer className="border-t mt-16">
      <div className="container py-10 grid gap-6 md:grid-cols-3">
        <div>
          <h3 className="font-semibold mb-2">Contact</h3>
          <a className="story-link" href="mailto:hello@example.com">hello@example.com</a>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Socials</h3>
          <SocialIcons size={22} />
        </div>
        <div>
          <h3 className="font-semibold mb-2">Newsletter</h3>
          <form className="flex gap-2">
            <input className="flex-1 rounded-md border bg-background px-3 py-2" placeholder="Your email" type="email" aria-label="Email" />
            <button className="rounded-md bg-primary text-primary-foreground px-4 py-2 hover:opacity-90 transition-opacity" type="button">Join</button>
          </form>
        </div>
      </div>
      <div className="border-t py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Samsterishamster. All rights reserved.
      </div>
    </footer>
  );
};
