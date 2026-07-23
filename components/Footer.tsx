import socials from "@/content/socials.json";

export default function Footer() {
  return (
    <footer className="w-full border-t-4 border-outline-variant bg-background">
      <div className="flex flex-col items-start justify-between gap-6 px-4 py-12 md:flex-row md:px-10">
        <div className="mb-8 max-w-sm md:mb-0">
          <div className="mb-4 font-display text-headline-md uppercase tracking-tighter text-on-surface">
            HOUSE OF SPORTS
          </div>
          <p className="font-mono-label text-label-mono uppercase text-on-surface-variant">
            © {new Date().getFullYear()} House of Sports. Built for the streets.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-16">
          <div className="flex flex-col gap-2">
            <span className="mb-2 font-mono-label text-label-mono uppercase text-primary">
              Socials
            </span>
            {socials.links.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="font-mono-label text-label-mono uppercase text-on-surface-variant transition-colors hover:text-primary"
              >
                {link.platform}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <span className="mb-2 font-mono-label text-label-mono uppercase text-primary">
              Legal
            </span>
            <a
              href="#"
              className="font-mono-label text-label-mono uppercase text-on-surface-variant transition-colors hover:text-primary"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="font-mono-label text-label-mono uppercase text-on-surface-variant transition-colors hover:text-primary"
            >
              Terms of Play
            </a>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-outline-variant px-4 py-4 md:px-10">
        <span className="font-mono-label text-label-mono uppercase text-on-surface opacity-50">
          Built for the streets.
        </span>
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">bolt</span>
          <span className="font-mono-label text-label-mono uppercase text-primary">
            Powered by performance
          </span>
        </div>
      </div>
    </footer>
  );
}
