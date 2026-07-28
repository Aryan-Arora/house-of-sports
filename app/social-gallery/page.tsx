import type { Metadata } from "next";
import FounderCard from "@/components/FounderCard";
import GalleryFilter from "@/components/GalleryFilter";
import SocialsGrid from "@/components/SocialsGrid";
import foundersData from "@/content/founders.json";
import eventsData from "@/content/events.json";
import socials from "@/content/socials.json";
import type { Founder, SiteEvent, SocialPost } from "@/lib/types";

const founders = foundersData as Founder[];
const events = eventsData as SiteEvent[];
const posts = socials.posts as SocialPost[];

export const metadata: Metadata = {
  title: "Social Gallery",
  description:
    "Our founders, our history, and every House of Sports event since day one — plus what the community's been posting.",
};

const MILESTONES = [
  {
    year: "2021",
    title: "Where it started",
    description:
      "House of Sports began with informal pickup football games around Delhi — no venue, no budget, just people who wanted to play.",
  },
  {
    year: "2023",
    title: "Coaching begins",
    description:
      "Structured coaching sessions and our first community events — cricket, runs, and yoga joined football on the calendar.",
  },
  {
    year: "2025",
    title: "HOS Arena opens",
    description:
      "We partnered with Holy Innocent Public School to open HOS Arena — our first dedicated home ground.",
  },
];

export default function SocialGalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-paper-muted">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center md:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Social Gallery
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Our story, in photos
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-ink/70">
            The people who started it, how we got here, and every event since day one.
          </p>
        </div>
      </section>

      {/* Founders */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
          The founders
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {founders.map((founder) => (
            <FounderCard key={founder.slug} founder={founder} />
          ))}
        </div>
      </section>

      {/* History / milestones */}
      <section className="bg-paper-muted">
        <div className="mx-auto max-w-4xl px-5 py-16 md:px-8 md:py-20">
          <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
            Our history
          </h2>
          <div className="mt-10 space-y-10">
            {MILESTONES.map((milestone) => (
              <div key={milestone.year} className="flex gap-6">
                <span className="w-16 shrink-0 text-lg font-extrabold text-primary">
                  {milestone.year}
                </span>
                <div>
                  <h3 className="text-base font-bold text-ink">{milestone.title}</h3>
                  <p className="mt-1 text-sm text-ink/60">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event gallery */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">Events</h2>
        <p className="mt-2 text-ink/60">Every tournament, league, and meetup we&rsquo;ve run.</p>
        <div className="mt-8">
          <GalleryFilter events={events} />
        </div>
      </section>

      {/* Social feed */}
      <section className="bg-paper-muted">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
            From the community
          </h2>
          <p className="mt-2 text-ink/60">Tag {socials.handle} to get featured here.</p>
          <div className="mt-8">
            <SocialsGrid posts={posts} stat={socials.stat} links={socials.links} />
          </div>
        </div>
      </section>
    </>
  );
}
