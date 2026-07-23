import type { Metadata } from "next";
import SocialsGrid from "@/components/SocialsGrid";
import socials from "@/content/socials.json";
import type { SocialPost } from "@/lib/types";

const posts = socials.posts as SocialPost[];

export const metadata: Metadata = {
  title: "Socials",
  description:
    "The streets are watching — House of Sports' live social feed. Tag @houseofsports_in and #HOSDELHI to get featured.",
};

const TAGS = [
  { text: "#STREETRULES", emphasis: false },
  { text: socials.hashtag, emphasis: true },
  { text: "#BORNREADY", emphasis: false },
  { text: "#COURTKINGS", emphasis: false },
  { text: "#JOINTHEBOARD", emphasis: "solid" as const },
];

export default function SocialsPage() {
  return (
    <div className="font-hanken">
      {/* Hero */}
      <header className="court-pattern relative w-full overflow-hidden px-4 pb-12 pt-12 opacity-100 md:px-10">
        <div className="relative z-10 flex flex-col items-end justify-between gap-6 md:flex-row">
          <div className="max-w-2xl">
            <span className="mb-4 inline-block bg-primary/10 px-2 py-1 font-mono-label text-label-mono uppercase tracking-widest text-primary">
              Live Social Feed
            </span>
            <h1 className="mb-6 text-[56px] uppercase leading-none text-on-background sm:text-[72px]" style={{ fontFamily: "var(--font-anton)" }}>
              THE STREETS <br />
              <span className="italic text-primary">ARE WATCHING</span>
            </h1>
            <p className="max-w-lg text-[18px] leading-[28px] text-on-surface-variant">
              Capture your game, tag the house, and get featured on the main board. This is
              where the Delhi grassroots scene lives.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="-rotate-2 border-2 border-primary bg-white p-6 shadow-[4px_4px_0_0_#0027d2]">
              <div className="flex flex-col items-center justify-center">
                <span className="material-symbols-outlined text-4xl text-primary">share</span>
                <span className="mt-2 font-mono-label text-label-mono">{socials.handle}</span>
              </div>
            </div>
            <div className="rotate-3 border-2 border-primary bg-primary p-6 text-white shadow-[4px_4px_0_0_#0027d2]">
              <div className="flex flex-col items-center justify-center">
                <span className="material-symbols-outlined text-4xl">add_a_photo</span>
                <span className="mt-2 font-mono-label text-label-mono">{socials.hashtag}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Bento grid */}
      <main className="px-4 pb-24 md:px-10">
        <SocialsGrid posts={posts} stat={socials.stat} links={socials.links} />

        <div className="mt-12 flex justify-center">
          <button className="group flex items-center gap-4 border-2 border-outline-variant bg-white px-12 py-4 transition-all hover:border-primary hover:text-primary">
            <span className="font-display uppercase text-on-surface">Load Older Entries</span>
            <span className="material-symbols-outlined text-primary transition-transform group-hover:rotate-180">
              refresh
            </span>
          </button>
        </div>
      </main>

      {/* Tag wall */}
      <section className="border-t-4 border-primary bg-white py-16">
        <div className="overflow-hidden px-4 md:px-10">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {TAGS.map((tag) => (
              <span
                key={tag.text}
                className={
                  tag.emphasis === true
                    ? "whitespace-nowrap text-headline-lg-mobile uppercase italic text-primary md:text-headline-lg"
                    : tag.emphasis === "solid"
                      ? "whitespace-nowrap text-headline-lg-mobile uppercase text-on-surface md:text-headline-lg"
                      : "whitespace-nowrap text-headline-lg-mobile uppercase opacity-10 md:text-headline-lg"
                }
                style={{ fontFamily: "var(--font-anton)" }}
              >
                {tag.text}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
