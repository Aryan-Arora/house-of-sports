import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import contactConfig from "@/content/contact-config.json";
import socials from "@/content/socials.json";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with House of Sports — reach the front office, apply for a role, or ask about the next event.",
};

interface ContactPageProps {
  searchParams: Promise<{ subject?: string; type?: string }>;
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;

  return (
    <div className="px-4 pb-20 pt-12 md:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16">
          <div className="mb-4 inline-block -rotate-2 bg-primary px-3 py-1 font-mono-label text-label-mono text-on-primary">
            GET IN THE GAME
          </div>
          <h1 className="font-display text-display-xl uppercase leading-none text-on-surface">
            PULL UP TO
            <br />
            <span className="text-primary">THE HOUSE.</span>
          </h1>
        </div>

        {/* Split layout */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          {/* Left: contact info */}
          <div className="flex flex-col gap-4 lg:col-span-5">
            <div className="court-pattern border-2 border-primary bg-surface-container-low p-8 opacity-100">
              <h2 className="mb-8 border-b-2 border-primary pb-2 font-display text-headline-lg uppercase text-on-surface">
                THE FRONT OFFICE
              </h2>
              <div className="space-y-8">
                {contactConfig.contacts.map((contact) => (
                  <div key={contact.email}>
                    <p className="mb-1 font-mono-label text-label-mono uppercase text-primary">
                      {contact.role}
                    </p>
                    <p className="mb-2 font-display text-headline-md uppercase text-on-surface">
                      {contact.name}
                    </p>
                    <a
                      href={`mailto:${contact.email}`}
                      className="flex items-center gap-2 text-on-surface-variant transition-colors hover:text-primary"
                    >
                      <span className="material-symbols-outlined">alternate_email</span>
                      <span className="font-mono-label text-label-mono uppercase">
                        {contact.email}
                      </span>
                    </a>
                  </div>
                ))}

                <div className="border-t-2 border-outline-variant pt-8">
                  <p className="mb-4 font-mono-label text-label-mono uppercase text-on-surface-variant">
                    On the Street
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {socials.links.map((link) => (
                      <a
                        key={link.platform}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="border border-outline bg-surface-container px-4 py-2 font-mono-label text-label-mono uppercase text-on-surface-variant transition-all hover:bg-primary hover:text-on-primary"
                      >
                        {link.platform}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative hidden h-48 overflow-hidden border border-outline-variant bg-surface-container [clip-path:polygon(0_0,100%_0,100%_100%,10%_100%,0_90%)] lg:block">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-8xl uppercase tracking-tighter text-primary opacity-20">
                  EST. 2024
                </span>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-7">
            <div className="relative border-2 border-outline-variant bg-surface-container-lowest p-8">
              <div className="absolute -right-2 -top-2 h-24 w-24 border-r-4 border-t-4 border-primary opacity-30" />
              <ContactForm defaultSubject={params.subject} defaultType={params.type} />
            </div>
          </div>
        </div>
      </div>

      {/* HQ / location */}
      <section className="mx-auto mt-20 max-w-7xl">
        <div className="relative h-[300px] border-2 border-outline-variant bg-surface-container md:h-[400px]">
          <div className="absolute left-8 top-8 max-w-xs border-2 border-primary bg-background p-6">
            <p className="mb-2 font-mono-label text-label-mono uppercase text-primary">
              HQ Location
            </p>
            <p className="mb-4 font-display text-headline-md uppercase text-on-surface">
              {contactConfig.address}
            </p>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">directions_run</span>
              <span className="font-mono-label text-label-mono uppercase text-on-surface-variant">
                {contactConfig.hours}
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
