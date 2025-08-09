import { SEO } from "@/components/SEO";

const About = () => {
  return (
    <main className="container py-10">
      <SEO title="About — Samsterishamster" description="Short bio, gear list, and contact." canonical="/about" />
      <section className="grid md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2 space-y-4">
          <h1 className="text-3xl font-bold">About</h1>
          <p>
            I make cinematic, mobile-first travel stories with a focus on atmosphere and sound. This site showcases
            my latest vlogs and curated photo galleries.
          </p>
          <div>
            <h2 className="font-semibold mb-2">Gear</h2>
            <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
              <li>Mirrorless camera + 24-70mm lens</li>
              <li>Compact drone</li>
              <li>Travel tripod</li>
              <li>Action cam for POV</li>
            </ul>
          </div>
        </div>
        <form action="https://formspree.io/f/your-id" method="POST" className="space-y-3 p-4 rounded-xl border">
          <h2 className="font-semibold">Contact</h2>
          <input name="name" required placeholder="Name" className="w-full rounded-md border bg-background px-3 py-2" />
          <input name="email" required type="email" placeholder="Email" className="w-full rounded-md border bg-background px-3 py-2" />
          <textarea name="message" required placeholder="Message" className="w-full rounded-md border bg-background px-3 py-2 h-32" />
          <button className="rounded-md bg-primary text-primary-foreground px-4 py-2 hover:opacity-90 transition-opacity" type="submit">Send</button>
          <p className="text-xs text-muted-foreground">Powered by Formspree. Replace action URL with your endpoint.</p>
        </form>
      </section>
    </main>
  );
};

export default About;
