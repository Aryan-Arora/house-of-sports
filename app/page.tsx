import Link from "next/link";
import Image from "next/image";
import SportCycler from "@/components/SportCycler";
import StatCounter from "@/components/StatCounter";
import siteStats from "@/content/site-stats.json";
import eventsData from "@/content/events.json";
import socials from "@/content/socials.json";
import type { SiteEvent } from "@/lib/types";

const events = eventsData as SiteEvent[];

const STAT_STYLES = [
  { bg: "bg-brand-mint", rotate: "rotate-2" },
  { bg: "bg-brand-lavender", rotate: "-rotate-2" },
  { bg: "bg-brand-coral", rotate: "rotate-3" },
  { bg: "bg-brand-sky", rotate: "-rotate-1" },
];

const featuredEvent: SiteEvent = [...events].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
)[0];

const dateFormatter = new Intl.DateTimeFormat("en-IN", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex h-[80vh] min-h-[560px] flex-col justify-end overflow-hidden md:h-[921px]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-transparent to-transparent" />
          <Image
            src="/images/hero/home-hero.jpg"
            alt="A basketball court in Delhi at twilight, lit by cobalt neon"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            placeholder="empty"
          />
        </div>
        <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 -skew-x-12 translate-x-1/4 bg-primary opacity-5" />
        <div className="relative z-20 max-w-5xl px-4 pb-24 md:px-10">
          <h1 className="mb-4 font-display text-[64px] uppercase leading-[0.85] tracking-tighter text-on-background md:text-[120px]">
            DELHI&apos;S
            <br />
            PICKUP GAME
          </h1>
          <SportCycler words={["FOOTBALL", "BASKETBALL", "BADMINTON", "CRICKET"]} />
          <Link
            href="/contact"
            className="group inline-flex items-center gap-4 bg-primary px-8 py-4 font-display text-headline-lg uppercase text-on-primary transition-all hover:pr-12"
          >
            Join the next game
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-2">
              arrow_forward
            </span>
          </Link>
        </div>
      </section>

      {/* Stats strip */}
      <section className="court-pattern relative overflow-hidden border-y-4 border-primary bg-surface-container-highest px-4 py-12 md:px-10">
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-4">
          {siteStats.map((stat, index) => {
            const style = STAT_STYLES[index % STAT_STYLES.length];
            return (
              <div key={stat.id} className="flex items-center gap-4">
                <StatCounter
                  stat={stat}
                  className="font-display text-stat-number text-primary"
                />
                <div className={`border border-on-background/10 px-2 py-1 ${style.bg} ${style.rotate}`}>
                  <span className="font-mono-label text-label-mono uppercase text-on-background">
                    {stat.label}
                  </span>
                </div>
                {index < siteStats.length - 1 ? (
                  <div className="hidden h-12 w-[2px] bg-primary opacity-30 md:block" />
                ) : null}
              </div>
            );
          })}
        </div>
      </section>

      {/* What we do (bento) */}
      <section className="bg-background px-4 py-24 md:px-10">
        <div className="mb-16">
          <p className="mb-2 font-mono-label text-label-mono uppercase text-primary">
            {"// Our ecosystem"}
          </p>
          <h2 className="font-display text-headline-lg uppercase tracking-tighter text-on-background md:text-display-xl">
            WHAT WE DO
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-12">
          <div className="group relative overflow-hidden border-2 border-outline-variant bg-surface-container p-8 shadow-sm transition-colors hover:bg-primary md:col-span-8">
            <div className="relative z-10">
              <div className="mb-6 inline-block border border-on-background/10 bg-brand-mint px-3 py-1">
                <span className="font-mono-label text-label-mono uppercase text-on-background">
                  Pickup matches
                </span>
              </div>
              <h3 className="mb-4 font-display text-headline-lg uppercase text-on-background group-hover:text-on-primary">
                DAILY RUNS ON YOUR TIME
              </h3>
              <p className="max-w-md text-body-lg text-on-surface-variant group-hover:text-on-primary/80">
                No commitment. No hassle. Just high-quality games organized by experts. Show up,
                play hard, go home.
              </p>
            </div>
            <div className="absolute bottom-0 right-0 opacity-[0.05] transition-opacity group-hover:opacity-20">
              <span className="material-symbols-outlined text-[160px] text-on-background group-hover:text-on-primary">
                sports_soccer
              </span>
            </div>
          </div>

          <div className="border-2 border-outline-variant bg-surface-container p-8 shadow-sm transition-colors hover:bg-primary md:col-span-4">
            <div className="mb-6 inline-block border border-on-background/10 bg-brand-lavender px-3 py-1">
              <span className="font-mono-label text-label-mono uppercase text-on-background">
                Tournaments
              </span>
            </div>
            <h3 className="group mb-4 font-display text-headline-md uppercase text-on-background hover:text-on-primary">
              BRAGGING RIGHTS
            </h3>
            <p className="text-body-md text-on-surface-variant">
              Elite competition, professional refereeing, and massive prizes.
            </p>
          </div>

          <div className="group border-2 border-outline-variant bg-surface-container p-8 shadow-sm transition-colors hover:bg-primary md:col-span-4">
            <div className="mb-6 inline-block border border-on-background/10 bg-brand-coral px-3 py-1">
              <span className="font-mono-label text-label-mono uppercase text-on-background">
                Signature events
              </span>
            </div>
            <h3 className="mb-4 font-display text-headline-md uppercase text-on-background group-hover:text-on-primary">
              STREET VIBE
            </h3>
            <p className="text-body-md text-on-surface-variant group-hover:text-on-primary/80">
              Experience sports like never before with music, art, and high-stakes games.
            </p>
          </div>

          <div className="group flex flex-col justify-between gap-6 overflow-hidden border-2 border-outline-variant bg-surface-container p-8 shadow-sm transition-colors hover:bg-primary md:col-span-8 md:flex-row md:items-end">
            <div className="relative z-10 max-w-md">
              <div className="mb-6 inline-block border border-on-background/10 bg-brand-sky px-3 py-1">
                <span className="font-mono-label text-label-mono uppercase text-on-background">
                  Community
                </span>
              </div>
              <h3 className="mb-4 font-display text-headline-lg uppercase text-on-background group-hover:text-on-primary">
                MORE THAN PLAYERS
              </h3>
              <p className="text-body-lg text-on-surface-variant group-hover:text-on-primary/80">
                Join the Discord, connect with athletes across the city, and build your own
                squad.
              </p>
            </div>
            <div className="font-display text-[80px] leading-none text-primary opacity-10 group-hover:text-on-primary group-hover:opacity-40">
              SQUAD
            </div>
          </div>
        </div>
      </section>

      {/* Featured event */}
      <section className="relative bg-background p-4 md:p-10">
        <div className="grid grid-cols-1 border-4 border-primary lg:grid-cols-2">
          <div className="relative h-96 overflow-hidden lg:h-auto">
            <Image
              src={featuredEvent.coverImage}
              alt={`${featuredEvent.title} cover photo`}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              placeholder="empty"
            />
            <div className="absolute left-8 top-8 bg-primary px-4 py-2 font-mono-label text-label-mono font-bold uppercase text-on-primary">
              Featured Event
            </div>
          </div>
          <div className="flex flex-col justify-center bg-surface-container p-8 md:p-16">
            <div className="mb-6 flex items-center gap-4">
              <span className="border border-primary px-3 py-1 font-mono-label text-label-mono uppercase text-primary">
                {featuredEvent.tag}
              </span>
              <span className="font-mono-label text-label-mono uppercase text-on-surface-variant">
                {dateFormatter.format(new Date(featuredEvent.date))}
              </span>
            </div>
            <h2 className="mb-8 font-display text-headline-lg uppercase leading-tight text-on-background md:text-[80px]">
              {featuredEvent.title}
            </h2>
            <p className="mb-10 max-w-lg text-body-lg text-on-surface-variant">
              {featuredEvent.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/history"
                className="bg-primary px-10 py-4 font-display uppercase text-on-primary transition-all hover:bg-on-background"
              >
                See full gallery
              </Link>
              <Link
                href="/contact"
                className="border-2 border-on-background px-10 py-4 font-display uppercase text-on-background transition-all hover:bg-on-background hover:text-on-primary"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Community CTA */}
      <section className="court-pattern relative overflow-hidden bg-primary py-32 text-on-primary">
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center md:px-10">
          <h2 className="mb-8 font-display text-headline-lg uppercase leading-none md:text-[100px]">
            DON&apos;T SIT ON THE SIDELINE
          </h2>
          <p className="mb-12 text-2xl font-bold uppercase italic">
            Level up your game with Delhi&apos;s elite pickup community.
          </p>
          <div className="flex flex-col justify-center gap-6 md:flex-row">
            <div className="rotate-1 border-2 border-on-primary bg-on-primary p-1 text-primary transition-transform hover:rotate-0">
              <a
                href={socials.links.find((link) => link.platform === "Discord")?.url ?? "#"}
                target="_blank"
                rel="noreferrer"
                className="block w-full bg-primary px-12 py-6 text-center font-display text-headline-md uppercase text-on-primary"
              >
                Join Discord
              </a>
            </div>
            <div className="-rotate-1 border-2 border-on-primary bg-primary p-1 text-on-primary transition-transform hover:rotate-0">
              <Link
                href="/contact"
                className="block w-full border-2 border-on-primary bg-transparent px-12 py-6 text-center font-display text-headline-md uppercase text-on-primary"
              >
                Book a court
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
