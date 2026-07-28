import Link from "next/link";
import Image from "next/image";
import SportCycler from "@/components/SportCycler";
import StatCounter from "@/components/StatCounter";
import { ArrowRightIcon } from "@/components/icons";
import siteStats from "@/content/site-stats.json";
import sports from "@/content/sports.json";
import arena from "@/content/arena.json";
import eventsData from "@/content/events.json";
import type { SiteEvent } from "@/lib/types";

const events = eventsData as SiteEvent[];
const womensFootballEvent = events.find((event) => event.slug === "womens-football-league-kickoff");
const spotlightEvent = events.find((event) => event.slug === "mini-football-world-cup") ?? events[0];
const trueLatestEvent = [...events].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
)[0];

const dateFormatter = new Intl.DateTimeFormat("en-IN", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

const CONNECTING_PAGES = [
  {
    href: "/partner-with-us",
    label: "Partner With Us",
    description: "Schools, brands, and venues — build the next HOS Arena with us.",
    image: "/images/partner/cover.jpg",
  },
  {
    href: "/join-the-team",
    label: "Join the Team",
    description: "Coaching, community, and engineering roles — open now.",
    image: "/images/join-team/cover.jpg",
  },
  {
    href: "/social-gallery",
    label: "Social Gallery",
    description: "Our story, our founders, and every event we've run since day one.",
    image: "/images/gallery/cover.jpg",
  },
];

interface SectionContent {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  cta: { label: string; href: string };
}

const SECTIONS: SectionContent[] = [
  {
    eyebrow: "Football",
    title: "Female Football",
    description:
      "A program built from the ground up for women who want to play seriously — proper coaching, a real league, and a squad that shows up every week.",
    image: womensFootballEvent?.coverImage ?? "/images/events/womens-football/cover.jpg",
    imageAlt: "Women's football league at House of Sports",
    cta: { label: "See the league", href: "/social-gallery" },
  },
  {
    eyebrow: "Coaching",
    title: "Coaching",
    description:
      "Structured sessions across football, cricket, runs, and yoga — led by coaches who care more about your next rep than your last excuse.",
    image: "/images/coaching/cover.jpg",
    imageAlt: "Coaching session at House of Sports",
    cta: { label: "Meet the coaches", href: "/join-the-team" },
  },
  {
    eyebrow: "Everyday",
    title: "Pickup Matches",
    description:
      "No season, no commitment — just show up. Daily pickup games across all four sports, organized so you always have somewhere to play.",
    image: "/images/pickup-matches/cover.jpg",
    imageAlt: "Pickup football match at House of Sports",
    cta: { label: "Find a match", href: "/partner-with-us#get-in-touch" },
  },
  {
    eyebrow: "Signature event",
    title: "Events",
    description: spotlightEvent.description,
    image: spotlightEvent.coverImage,
    imageAlt: `${spotlightEvent.title} cover photo`,
    cta: { label: "See all events", href: "/social-gallery" },
  },
  {
    eyebrow: "Community",
    title: "Community",
    description:
      "House of Sports was never just about the games. It's the group chat, the post-match chai, and the people who keep showing up for each other.",
    image: "/images/community/cover.jpg",
    imageAlt: "House of Sports community gathering",
    cta: { label: "Meet the community", href: "/social-gallery" },
  },
  {
    eyebrow: arena.partner,
    title: arena.name,
    description: arena.description,
    image: arena.image,
    imageAlt: `${arena.name} venue`,
    cta: { label: "About the partnership", href: "/partner-with-us" },
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero — full-bleed looping video, headline pinned via scroll */}
      <section className="relative h-[160vh]">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {/* TODO: drop the real video file in as public/videos/hero.mp4 — poster shows until then */}
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/images/hero/home-hero.jpg"
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-ink/10" />

          <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col justify-end px-5 pb-20 md:px-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-paper/80">
              Join the Movement
            </p>
            <h1 className="mt-4 max-w-2xl text-4xl font-extrabold leading-[1.05] tracking-tight text-paper sm:text-5xl lg:text-6xl">
              Your everyday sports &amp; fitness destination
            </h1>
            <p className="mt-6 max-w-lg text-lg text-paper/80">
              <SportCycler
                words={["Football", "Cricket", "Runs", "Yoga"]}
                className="font-semibold text-paper"
              />{" "}
              — coaching, events, and community, all in one place.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/partner-with-us#get-in-touch"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-paper transition hover:opacity-90"
              >
                Join the Movement
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/social-gallery"
                className="inline-flex items-center gap-2 rounded-full border border-paper/40 bg-paper/10 px-7 py-3.5 text-sm font-semibold text-paper backdrop-blur transition hover:bg-paper/20"
              >
                See our story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sports strip */}
      <section className="border-y border-line bg-paper">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden bg-line md:grid-cols-4">
          {sports.map((sport) => (
            <div key={sport.slug} className="bg-paper px-6 py-8">
              <h3 className="text-lg font-bold text-ink">{sport.name}</h3>
              <p className="mt-2 text-sm text-ink/60">{sport.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Connecting pages */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {CONNECTING_PAGES.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="group block overflow-hidden rounded-2xl border border-line transition-colors hover:border-ink/20"
            >
              <div className="relative aspect-[16/10] w-full bg-paper-muted">
                <Image
                  src={page.image}
                  alt={page.label}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  placeholder="empty"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-ink">{page.label}</h3>
                  <ArrowRightIcon className="h-4 w-4 text-ink/40 transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                </div>
                <p className="mt-2 text-sm text-ink/60">{page.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-ink py-16 text-paper">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 md:grid-cols-4 md:px-8">
          {siteStats.map((stat) => (
            <div key={stat.id} className="text-center">
              <StatCounter stat={stat} className="text-3xl font-extrabold text-paper sm:text-4xl" />
              <p className="mt-2 text-xs font-medium uppercase tracking-wide text-paper/50">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Six sections */}
      {SECTIONS.map((section, index) => {
        const reversed = index % 2 === 1;
        return (
          <section
            key={section.title}
            className={index % 2 === 0 ? "bg-paper" : "bg-paper-muted"}
          >
            <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
              <div
                className={`grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16 ${
                  reversed ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-paper">
                  <Image
                    src={section.image}
                    alt={section.imageAlt}
                    fill
                    sizes="(min-width: 768px) 45vw, 100vw"
                    className="object-cover"
                    placeholder="empty"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                    {section.eyebrow}
                  </p>
                  <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                    {section.title}
                  </h2>
                  <p className="mt-4 max-w-md text-ink/70">{section.description}</p>
                  <Link
                    href={section.cta.href}
                    className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                  >
                    {section.cta.label}
                    <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Latest event note */}
      <section className="mx-auto max-w-7xl px-5 pb-4 md:px-8">
        <p className="text-xs text-ink/40">
          Latest: {trueLatestEvent.title} — {dateFormatter.format(new Date(trueLatestEvent.date))}
        </p>
      </section>

      {/* Final CTA */}
      <section className="bg-primary py-20 text-paper">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Join the Movement
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-paper/80">
            Football, cricket, runs, or yoga — there&rsquo;s a session with your name on it.
            Reach out and we&rsquo;ll get you started.
          </p>
          <Link
            href="/partner-with-us#get-in-touch"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-paper px-8 py-3.5 text-sm font-semibold text-primary transition hover:opacity-90"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
