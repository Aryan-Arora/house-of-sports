import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import arena from "@/content/arena.json";
import contactConfig from "@/content/contact-config.json";

export const metadata: Metadata = {
  title: "Partner With Us",
  description:
    "Schools, brands, and venues — partner with House of Sports. We built HOS Arena with Holy Innocent Public School; let's build what's next.",
};

const PARTNERSHIP_TYPES = [
  {
    title: "Schools & institutions",
    description:
      "HOS Arena started as a partnership with Holy Innocent Public School — shared venue, shared coaching, shared community. If your school has space and we have the programs, let's talk.",
  },
  {
    title: "Brands & sponsors",
    description:
      "Put your brand next to real events — tournaments, community runs, and everything in between. We keep sponsor activations useful to the people actually showing up.",
  },
  {
    title: "Venues & turfs",
    description:
      "Own a ground, court, or studio that sits empty on weekdays? We fill it with coaching sessions, leagues, and pickup games — consistent bookings, zero hassle for you.",
  },
];

export default function PartnerWithUsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-paper-muted">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center md:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Partner With Us
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Let&rsquo;s build the next HOS Arena
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-ink/70">
            We partner with schools, brands, and venues to bring coaching, events, and community
            to more people, more often. Here&rsquo;s what that&rsquo;s looked like so far.
          </p>
        </div>
      </section>

      {/* Arena spotlight */}
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
            <p className="mt-2 text-base font-medium text-ink/50">{arena.tagline}</p>
            <p className="mt-4 max-w-md text-ink/70">{arena.description}</p>
          </div>
        </div>
      </section>

      {/* Partnership types */}
      <section className="bg-paper-muted">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
            Ways to partner
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {PARTNERSHIP_TYPES.map((type) => (
              <div key={type.title} className="rounded-2xl border border-line bg-paper p-6">
                <h3 className="text-lg font-bold text-ink">{type.title}</h3>
                <p className="mt-2 text-sm text-ink/60">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section id="get-in-touch" className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-20">
        <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
          Get in touch
        </h2>
        <p className="mt-3 text-ink/70">
          Tell us about your school, brand, or venue and what you have in mind. We reply to every
          message.
        </p>
        <p className="mt-2 text-sm text-ink/50">
          Prefer email or a call? Reach us directly at{" "}
          <a href={`mailto:${contactConfig.email}`} className="font-medium text-primary hover:underline">
            {contactConfig.email}
          </a>{" "}
          or{" "}
          <a href={`tel:${contactConfig.phone.replace(/\s/g, "")}`} className="font-medium text-primary hover:underline">
            {contactConfig.phone}
          </a>
          .
        </p>
        <div className="mt-8">
          <ContactForm subject="Partnership inquiry" type="partnership" />
        </div>
      </section>
    </>
  );
}
