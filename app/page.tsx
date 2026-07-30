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
    description: "Scale your sports facility or brand with our extensive community network.",
    linkLabel: "Learn More",
    image: "/images/partner/cover.jpg",
  },
  {
    href: "/join-the-team",
    label: "Join the Team",
    description: "Passionate about sports? We're looking for coaches, managers, and visionaries.",
    linkLabel: "Careers",
    image: "/images/join-team/cover.jpg",
  },
  {
    href: "/social-gallery",
    label: "Social Gallery",
    description: "Relive the highlights of our recent community matches and events.",
    linkLabel: "View Gallery",
    image: "/images/gallery/cover.jpg",
  },
];

interface SectionContent {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  badges: [string, string];
  cta: { label: string; href: string };
}

const SECTIONS: SectionContent[] = [
  {
    eyebrow: "Inclusive Sports",
    title: "Elevating Female Football",
    description:
      "Professional training camps and competitive leagues designed specifically for women athletes to showcase talent and build professional careers.",
    image: womensFootballEvent?.coverImage ?? "/images/events/womens-football/cover.jpg",
    imageAlt: "Women's football league at House of Sports",
    badges: ["Pro-Leagues", "Weekly Training"],
    cta: { label: "Explore Leagues", href: "/social-gallery" },
  },
  {
    eyebrow: "Mentorship",
    title: "Expert Coaching & Guidance",
    description:
      "Our certified coaches focus on fundamental skill development and tactical awareness, ensuring every player reaches their maximum potential.",
    image: "/images/coaching/cover.jpg",
    imageAlt: "Coaching session at House of Sports",
    badges: ["Certified Coaches", "1-on-1 Mentoring"],
    cta: { label: "Find a Coach", href: "/join-the-team" },
  },
  {
    eyebrow: "Everyday Play",
    title: "Dynamic Pickup Matches",
    description:
      "No team? No problem. Join our daily open sessions. Just show up, grab a bib, and play. We manage the teams and logistics.",
    image: "/images/pickup-matches/cover.jpg",
    imageAlt: "Pickup football match at House of Sports",
    badges: ["All Skill Levels", "Daily Slots"],
    cta: { label: "Book a Slot", href: "/partner-with-us#get-in-touch" },
  },
  {
    eyebrow: "Celebrations",
    title: "Major Sports Events",
    description:
      "From championship finals to community festivals, we host the most energetic sports events in the city, bringing fans and players together.",
    image: spotlightEvent.coverImage,
    imageAlt: `${spotlightEvent.title} cover photo`,
    badges: ["Tournaments", "Live Screenings"],
    cta: { label: "Upcoming Events", href: "/social-gallery" },
  },
  {
    eyebrow: "Heart of the Hub",
    title: "Global Sports Community",
    description:
      "Our community spans across borders, uniting people of all backgrounds through the shared language of sports and active living.",
    image: "/images/community/cover.jpg",
    imageAlt: "House of Sports community gathering",
    badges: ["Diverse Culture", "Global Network"],
    cta: { label: "Join the Hub", href: "/social-gallery" },
  },
  {
    eyebrow: "World Class Facilities",
    title: "The House of Sports Arena",
    description:
      "Experience our flagship facility, featuring Olympic-standard fields, high-performance gyms, and premium recovery centers.",
    image: arena.image,
    imageAlt: `${arena.name} venue`,
    badges: ["Elite Facilities", "Recovery Spa"],
    cta: { label: "Visit the Arena", href: "/partner-with-us" },
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
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="text-lg font-semibold text-paper/90">For</span>
              <span className="inline-flex items-center rounded-full border border-paper/20 bg-paper/10 px-4 py-1.5">
                <SportCycler
                  words={["Football", "Cricket", "Runs", "Yoga"]}
                  className="text-sm font-bold uppercase italic text-paper"
                />
              </span>
            </div>
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
                <h3 className="text-lg font-bold text-ink">{page.label}</h3>
                <p className="mt-2 text-sm text-ink/60">{page.description}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  {page.linkLabel}
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Stats strip */}
      <section className="relative overflow-hidden bg-primary py-16 text-paper">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-10 -top-16 select-none text-[200px] font-extrabold leading-none text-paper/10"
        >
          HOS
        </div>
        <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 md:grid-cols-4 md:px-8">
          {siteStats.map((stat) => (
            <div key={stat.id} className="text-center">
              <StatCounter stat={stat} className="text-3xl font-extrabold text-paper sm:text-4xl" />
              <p className="mt-2 text-xs font-medium uppercase tracking-wide text-paper/70">
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
                <div className="relative">
                  <span
                    aria-hidden
                    className={`absolute -top-10 z-0 select-none text-[110px] font-extrabold leading-none text-primary/10 ${
                      reversed ? "-right-4" : "-left-4"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="relative z-10 aspect-[4/3] w-full overflow-hidden rounded-3xl bg-paper">
                    <Image
                      src={section.image}
                      alt={section.imageAlt}
                      fill
                      sizes="(min-width: 768px) 45vw, 100vw"
                      className="object-cover grayscale transition-all duration-500 hover:grayscale-0"
                      placeholder="empty"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                    {section.eyebrow}
                  </p>
                  <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                    {section.title}
                  </h2>
                  <p className="mt-4 max-w-md text-ink/70">{section.description}</p>
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    {section.badges.map((badge) => (
                      <span
                        key={badge}
                        className="rounded-full border border-line px-4 py-1 text-xs font-semibold uppercase tracking-wide text-ink/60"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
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
            Whether you&rsquo;re an athlete, a fan, or a partner, there&rsquo;s a place for you at
            the House of Sports. Let&rsquo;s redefine the game together.
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
