import type { Metadata } from "next";
import JobListingCard from "@/components/JobListingCard";
import PastelBadge from "@/components/PastelBadge";
import CareerApplicationForm from "@/components/CareerApplicationForm";
import careersData from "@/content/careers.json";
import type { CareerRole } from "@/lib/types";

const careers = careersData as CareerRole[];

export const metadata: Metadata = {
  title: "Careers",
  description:
    "House of Sports is hiring the elite. Open roles in engineering, product design, and community — join the team building Delhi's pickup scene.",
};

const PERKS = [
  { icon: "sports_basketball", label: "UNLIMITED TURF ACCESS", bg: "bg-[#D1E8FF]", rotate: "rotate-2" },
  { icon: "health_and_safety", label: "ELITE PERFORMANCE HEALTH", bg: "bg-[#E2F9BE]", rotate: "-rotate-3" },
  { icon: "work_history", label: "FLEXIBLE LOCKER HOURS", bg: "bg-[#FFE5D1]", rotate: "-rotate-1" },
  { icon: "stadium", label: "MAJOR EVENT ACCESS", bg: "bg-[#F0D1FF]", rotate: "rotate-3" },
  { icon: "school", label: "SKILL-UP TRAINING", bg: "bg-[#D1FFF3]", rotate: "rotate-1" },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="court-pattern relative min-h-[600px] overflow-hidden bg-background pt-12 opacity-100 md:min-h-[716px]">
        <div className="relative z-10 mx-auto px-4 py-16 md:px-10">
          <div className="max-w-4xl">
            <span className="mb-4 block font-mono-label text-label-mono uppercase tracking-[0.2em] text-primary">
              Hiring the elite
            </span>
            <h1 className="mb-8 font-display text-[64px] uppercase leading-[0.85] tracking-tighter text-on-background md:text-[140px]">
              PLAY YOUR <span className="text-primary">PART.</span>
            </h1>
            <p className="mb-12 max-w-xl text-body-lg text-on-surface-variant">
              We don&apos;t just build sports platforms; we craft the digital arena for the
              streets. Join a team where performance is the only metric that matters.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#roles"
                className="bg-primary px-8 py-4 font-display text-headline-md uppercase text-on-primary transition-all hover:translate-x-2"
              >
                View Open Positions
              </a>
              <div className="border-2 border-on-surface px-8 py-4 font-display text-headline-md uppercase text-on-surface">
                {careers.length} Positions Open
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 h-2 w-1/3 bg-primary" />
      </section>

      {/* Perks */}
      <section className="border-y-4 border-outline-variant bg-surface-container-low py-24">
        <div className="mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 font-display text-headline-lg uppercase text-on-background">
                WHY HOUSE OF SPORTS
              </h2>
              <p className="mb-8 max-w-md text-on-surface-variant">
                It&rsquo;s more than a job. It&rsquo;s a culture designed to fuel your ambition,
                keeping you at peak performance both in and out of the locker room.
              </p>
              <div className="flex flex-wrap gap-4">
                {PERKS.map((perk) => (
                  <PastelBadge
                    key={perk.label}
                    icon={perk.icon}
                    rotate={perk.rotate}
                    className={perk.bg}
                  >
                    {perk.label}
                  </PastelBadge>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="group relative aspect-square overflow-hidden border-2 border-primary bg-surface">
                <div
                  className="h-full w-full bg-cover bg-center grayscale transition-all group-hover:scale-105 group-hover:grayscale-0"
                  style={{ backgroundImage: "url('/images/careers/the-court.jpg')" }}
                />
                <div className="absolute bottom-4 left-4 bg-background px-2 font-display uppercase text-primary">
                  THE COURT
                </div>
              </div>
              <div className="group relative mt-8 aspect-square overflow-hidden border-2 border-outline bg-surface">
                <div
                  className="h-full w-full bg-cover bg-center grayscale transition-all group-hover:scale-105 group-hover:grayscale-0"
                  style={{ backgroundImage: "url('/images/careers/the-hub.jpg')" }}
                />
                <div className="absolute bottom-4 left-4 bg-background px-2 font-display uppercase text-on-surface">
                  THE HUB
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section id="roles" className="bg-background py-24">
        <div className="mx-auto px-4 md:px-10">
          <div className="mb-16 flex items-end justify-between border-b-4 border-primary pb-4">
            <h2 className="font-display text-headline-lg uppercase text-on-surface">
              OPEN ROLES
            </h2>
            <div className="mb-2 font-mono-label text-primary">FILTER BY DEPARTMENT: [ ALL ]</div>
          </div>
          <div className="space-y-4">
            {careers.map((role) => (
              <JobListingCard key={role.slug} role={role} />
            ))}
          </div>
        </div>
      </section>

      {/* Application form */}
      <section className="court-pattern relative bg-surface-container-low py-24 opacity-100">
        <div className="relative z-10 mx-auto px-4 md:px-10">
          <div className="mx-auto max-w-3xl border-2 border-primary bg-background p-8 md:p-16">
            <h2 className="mb-4 font-display text-headline-lg uppercase text-on-surface">
              JOIN THE SQUAD
            </h2>
            <p className="mb-12 font-mono-label uppercase tracking-wide text-on-surface-variant">
              Enter the draft. We review all applications within 48 hours.
            </p>
            <CareerApplicationForm roles={careers} />
          </div>
        </div>
      </section>
    </>
  );
}
