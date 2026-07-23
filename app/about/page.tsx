import type { Metadata } from "next";
import Image from "next/image";
import FounderCard from "@/components/FounderCard";
import founders from "@/content/founders.json";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "House of Sports started with a single basketball court in South Delhi. Three years, 1000+ members, and a founding trio later, here's the story.",
};

const VALUES = [
  {
    tone: "outline" as const,
    icon: "bolt",
    tag: "VOLTAGE",
    title: "UNAPOLOGETIC ENERGY",
    body: "We don't do quiet. Every event is a high-decibel collision of culture and competition. If it's not loud, it's not us.",
  },
  {
    tone: "filled" as const,
    icon: "groups",
    tag: "TRIBAL",
    title: "SQUAD SYNDICATE",
    body: "Community is our currency. We build spaces where the street-baller and the pro athlete share the same oxygen and respect.",
  },
  {
    tone: "outline" as const,
    icon: "shield",
    tag: "PURE",
    title: "RAW INTEGRITY",
    body: "No fluff, no corporate filters. We keep the game honest and the stakes high. Always for the streets.",
  },
];

const MILESTONES = [
  {
    year: "2021",
    title: "THE FIRST SPARK",
    body: "Launched our first 3x3 basketball invitational on a rooftop court in Vasant Kunj. 12 teams, zero chill.",
    image: "/images/about/milestone-1.jpg",
  },
  {
    year: "2022",
    title: "URBAN TAKEOVER",
    body: "Expanded into football and volleyball. Over 500 athletes joined the HOS syndicate across NCR.",
    image: "/images/about/milestone-2.jpg",
  },
  {
    year: "2024",
    title: "STADIUM DREAMS",
    body: "Inaugurated the House of Sports Training Center. Our first permanent facility for the next generation.",
    image: "/images/about/milestone-3.jpg",
  },
];

export default function AboutPage() {
  return (
    <div className="font-hanken">
      {/* Origin story hero */}
      <section className="court-pattern relative flex min-h-[716px] flex-col justify-center overflow-hidden px-5 py-20 opacity-100 md:px-16">
        <div className="relative z-10 grid grid-cols-1 items-center gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="mb-6 inline-block -rotate-3 bg-primary px-3 py-1 font-mono-label text-label-mono text-on-primary">
              EST. 2021
            </span>
            <h1 className="mb-8 text-[56px] uppercase leading-none text-on-background sm:text-[80px]" style={{ fontFamily: "var(--font-anton)" }}>
              THE THREE YEAR
              <br />
              <span className="text-primary">OVERNIGHT SUCCESS.</span>
            </h1>
            <div className="max-w-xl space-y-6">
              <p className="text-[18px] leading-[28px] text-true-black/80">
                It started with a single basketball court in South Delhi and a collective
                frustration. We didn&apos;t want corporate clubs; we wanted the energy of the
                street. For three years, we&apos;ve lived on the concrete, building more than
                just leagues—we&apos;ve built a sanctuary for the restless.
              </p>
              <p className="text-[18px] leading-[28px] text-true-black/80">
                House of Sports is the raw culmination of every missed shot, every
                buzzer-beater, and every sweat-soaked jersey. We are the grassroots uprising of
                Delhi&rsquo;s athletic elite.
              </p>
            </div>
          </div>
          <div className="relative mt-12 lg:col-span-5 lg:mt-0">
            <div className="relative border-4 border-primary bg-surface-container-high p-2 [clip-path:polygon(0_0,100%_0,100%_85%,85%_100%,0_100%)]">
              <div className="relative aspect-[4/5] w-full [clip-path:polygon(0_0,100%_0,100%_85%,85%_100%,0_100%)]">
                <Image
                  src="/images/about/hero.jpg"
                  alt="Night basketball game on a concrete court in Delhi"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                  placeholder="empty"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 hidden bg-primary p-6 text-on-primary md:block">
              <div className="font-display text-stat-number">1,095</div>
              <div className="font-mono-label text-label-mono uppercase">Days of Grit</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Values */}
      <section className="bg-surface-container-low px-5 py-20 md:px-16">
        <div className="mb-12 flex flex-col items-end justify-between gap-4 md:flex-row">
          <h2 className="border-l-8 border-primary pl-6 text-[48px] uppercase leading-[48px] text-true-black" style={{ fontFamily: "var(--font-anton)" }}>
            OUR PLAYBOOK
          </h2>
          <p className="max-w-xs text-right font-mono-label text-label-mono text-true-black/60">
            001 // CORE ARCHITECTURE
          </p>
        </div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {VALUES.map((value) => (
            <div
              key={value.tag}
              className={
                value.tone === "filled"
                  ? "group relative overflow-hidden border-2 border-primary bg-primary p-8 text-on-primary"
                  : "group relative overflow-hidden border-2 border-outline-variant bg-surface-container-lowest p-8 transition-all hover:border-primary"
              }
            >
              <div
                className={
                  value.tone === "filled"
                    ? "absolute -right-4 -top-4 opacity-20"
                    : "absolute -right-4 -top-4 opacity-5 transition-opacity group-hover:opacity-10"
                }
              >
                <span
                  className="material-symbols-outlined text-[120px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {value.icon}
                </span>
              </div>
              <div
                className={
                  value.tone === "filled"
                    ? "mb-6 inline-flex items-center gap-2 rounded-full border border-on-primary/20 bg-on-primary/10 px-3 py-1 font-mono-label text-label-mono text-on-primary"
                    : "mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 font-mono-label text-label-mono text-primary"
                }
              >
                <span className="material-symbols-outlined text-sm">{value.icon}</span>
                {value.tag}
              </div>
              <h3
                className={
                  value.tone === "filled"
                    ? "mb-4 text-[32px] uppercase leading-[32px]"
                    : "mb-4 text-[32px] uppercase leading-[32px] text-true-black"
                }
                style={{ fontFamily: "var(--font-anton)" }}
              >
                {value.title}
              </h3>
              <p className={value.tone === "filled" ? "" : "text-true-black/70"}>{value.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Starting lineup */}
      <section className="bg-background px-5 py-20 md:px-16">
        <div className="mb-16">
          <h2
            className="mb-2 text-center text-[48px] uppercase leading-[48px] text-true-black"
            style={{ fontFamily: "var(--font-anton)" }}
          >
            THE STARTING LINEUP
          </h2>
          <div className="mx-auto h-1 w-32 bg-primary" />
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {founders.map((founder, index) => (
            <FounderCard
              key={founder.slug}
              founder={founder}
              className={index === 1 ? "md:mt-12" : undefined}
            />
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="court-pattern relative bg-surface-container-high px-5 py-20 opacity-100 md:px-16">
        <h2
          className="mb-16 text-center text-[48px] uppercase leading-[48px] text-true-black"
          style={{ fontFamily: "var(--font-anton)" }}
        >
          THE TIMELINE
        </h2>
        <div className="relative mx-auto max-w-5xl">
          <div className="absolute left-1/2 hidden h-full w-1 -translate-x-1/2 bg-primary/20 md:block" />
          {MILESTONES.map((milestone, index) => {
            const reversed = index % 2 === 1;
            return (
              <div
                key={milestone.year}
                className={`relative mb-24 flex flex-col items-center gap-8 last:mb-0 md:gap-0 ${
                  reversed ? "md:flex-row-reverse" : "md:flex-row"
                }`}
              >
                <div
                  className={`w-full text-center md:w-1/2 ${
                    reversed ? "md:pl-12 md:text-left" : "md:pr-12 md:text-right"
                  }`}
                >
                  <div className="mb-2 text-[24px] text-primary" style={{ fontFamily: "var(--font-anton)" }}>
                    {milestone.year}
                  </div>
                  <h4
                    className="mb-2 text-[24px] uppercase leading-[28px] text-true-black"
                    style={{ fontFamily: "var(--font-anton)" }}
                  >
                    {milestone.title}
                  </h4>
                  <p className="text-true-black/70">{milestone.body}</p>
                </div>
                <div className="z-10 flex h-8 w-8 items-center justify-center rounded-full border-4 border-background bg-primary">
                  <div className="h-2 w-2 rounded-full bg-on-primary" />
                </div>
                <div className={`w-full md:w-1/2 ${reversed ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="border border-outline-variant bg-surface-container-lowest p-2 shadow-sm">
                    <div className="relative h-48 w-full">
                      <Image
                        src={milestone.image}
                        alt={milestone.title}
                        fill
                        sizes="(min-width: 768px) 40vw, 100vw"
                        className="object-cover"
                        placeholder="empty"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
