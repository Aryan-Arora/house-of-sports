import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import { MailIcon, PhoneIcon, MapPinIcon, ClockIcon } from "@/components/icons";
import arena from "@/content/arena.json";
import contactConfig from "@/content/contact-config.json";

export const metadata: Metadata = {
  title: "Partner With Us",
  description:
    "Schools, brands, and venues — partner with House of Sports. We built HOS Arena with Holy Innocent Public School; let's build what's next.",
};

const PARTNERSHIP_VALUE = [
  {
    number: "01",
    title: "Active Sessions",
    description: "Daily high-intensity coaching sessions for all skill levels.",
    badge: "50+ SESSIONS/MONTH",
  },
  {
    number: "02",
    title: "Community Reach",
    description: "Engaging the next generation through sports excellence.",
    badge: "500+ STUDENTS REACHED",
  },
  {
    number: "03",
    title: "Elite Facilities",
    description: "Professional grade arenas designed for peak performance.",
    badge: "DEDICATED COURTS",
  },
  {
    number: "04",
    title: "Expert Staff",
    description: "Certified professional coaches and facility managers.",
    badge: "FULL-TIME COACHES",
  },
];

export default function PartnerWithUsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-paper-muted">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center md:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Partner With Us
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Let&rsquo;s build the next HOS Arena
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-ink/70">
            We collaborate with schools, premium brands, and urban venues to create high-octane
            grassroots infrastructure. Together, we can transform underutilized spaces into
            professional-grade sports destinations.
          </p>
        </div>
      </section>

      {/* Featured spotlight */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-paper-muted">
            <Image
              src={arena.image}
              alt={`${arena.name} venue`}
              fill
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover"
              placeholder="empty"
            />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              {arena.partner}
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              {arena.name}
            </h2>
            <p className="mt-2 text-base font-medium italic text-primary/80">{arena.tagline}</p>
            <p className="mt-4 max-w-md text-ink/70">
              Witness the transformation of a standard school field into an elite
              professional-grade destination. Our partnership model focuses on long-term
              sustainability, providing the school with world-class facilities while creating a
              hub for the local athletic community.
            </p>
            <a
              href="#partnership-value"
              className="mt-6 inline-flex items-center rounded-full border border-ink px-8 py-3 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-paper"
            >
              Explore Project
            </a>
          </div>
        </div>
      </section>

      {/* The partnership value */}
      <section id="partnership-value" className="bg-paper-muted">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-line sm:grid-cols-2 lg:grid-cols-4">
            {PARTNERSHIP_VALUE.map((pillar) => (
              <div key={pillar.number} className="flex flex-col gap-4 bg-paper p-8">
                <span className="text-3xl font-extrabold text-line">{pillar.number}</span>
                <div>
                  <h3 className="text-lg font-bold text-ink">{pillar.title}</h3>
                  <p className="mt-1.5 text-sm text-ink/60">{pillar.description}</p>
                </div>
                <span className="inline-block w-fit rounded-full bg-paper-muted px-3 py-1 text-xs font-semibold uppercase text-ink/70">
                  {pillar.badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="get-in-touch" className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Ready to transform your space?
            </h2>
            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <MailIcon className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-semibold text-ink">Email</p>
                  <a
                    href={`mailto:${contactConfig.email}`}
                    className="text-sm text-ink/60 transition-colors hover:text-primary"
                  >
                    {contactConfig.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <PhoneIcon className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-semibold text-ink">Phone</p>
                  <a
                    href={`tel:${contactConfig.phone.replace(/\s/g, "")}`}
                    className="text-sm text-ink/60 transition-colors hover:text-primary"
                  >
                    {contactConfig.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPinIcon className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-semibold text-ink">Address</p>
                  <p className="text-sm text-ink/60">
                    {contactConfig.arenaName} — {contactConfig.arenaAddress}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <ClockIcon className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-semibold text-ink">Hours</p>
                  <p className="text-sm text-ink/60">{contactConfig.hours}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-line bg-paper p-8 shadow-sm">
            <ContactForm subject="Partnership inquiry" type="partnership" />
          </div>
        </div>
      </section>
    </>
  );
}
