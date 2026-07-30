import type { Metadata } from "next";
import FounderCard from "@/components/FounderCard";
import GalleryFilter from "@/components/GalleryFilter";
import SocialsGrid from "@/components/SocialsGrid";
import HistoryTimeline from "@/components/HistoryTimeline";
import foundersData from "@/content/founders.json";
import eventsData from "@/content/events.json";
import socials from "@/content/socials.json";
import milestonesData from "@/content/milestones.json";
import type { Founder, Milestone, SiteEvent, SocialPost } from "@/lib/types";

const founders = foundersData as Founder[];
const events = eventsData as SiteEvent[];
const posts = socials.posts as SocialPost[];
const milestones = milestonesData as Milestone[];

export const metadata: Metadata = {
  title: "Social Gallery",
  description:
    "Our founders, our history, and every House of Sports event since day one — plus what the community's been posting.",
};

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
        <div className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-20">
          <h2 className="mb-12 text-center text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
            Our history
          </h2>
          <HistoryTimeline milestones={milestones} />
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
