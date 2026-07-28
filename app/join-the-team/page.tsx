import type { Metadata } from "next";
import JobListingCard from "@/components/JobListingCard";
import CareerApplicationForm from "@/components/CareerApplicationForm";
import careersData from "@/content/careers.json";
import type { CareerRole } from "@/lib/types";

const careers = careersData as CareerRole[];

export const metadata: Metadata = {
  title: "Join the Team",
  description:
    "Coaching, community, and engineering roles at House of Sports — help run football, cricket, runs, and yoga for a growing community.",
};

const PERKS = [
  { title: "Free access", description: "Unlimited HOS Arena access across all four sports." },
  { title: "Real programs", description: "Build coaching and community programs from scratch, not just run them." },
  { title: "Flexible hours", description: "Sessions run early mornings and evenings — plan your day around it." },
  { title: "Growing team", description: "Small enough that your work is visible, big enough to actually go somewhere." },
];

export default function JoinTheTeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-paper-muted">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center md:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Join the Team
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Help build the everyday sports destination
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-ink/70">
            We&rsquo;re a small team running coaching, events, and community across football,
            cricket, runs, and yoga — and now HOS Arena. Here&rsquo;s where we need help.
          </p>
        </div>
      </section>

      {/* Perks */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {PERKS.map((perk) => (
            <div key={perk.title}>
              <h3 className="text-base font-bold text-ink">{perk.title}</h3>
              <p className="mt-1.5 text-sm text-ink/60">{perk.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Open roles */}
      <section className="bg-paper-muted">
        <div className="mx-auto max-w-4xl px-5 py-16 md:px-8 md:py-20">
          <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
            Open roles
          </h2>
          <div className="mt-8 space-y-4">
            {careers.map((role) => (
              <JobListingCard key={role.slug} role={role} />
            ))}
          </div>
        </div>
      </section>

      {/* Application form */}
      <section id="apply" className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-20">
        <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">Apply</h2>
        <p className="mt-3 text-ink/70">
          Tell us a bit about yourself — we review every application within a few days.
        </p>
        <div className="mt-8">
          <CareerApplicationForm roles={careers} />
        </div>
      </section>
    </>
  );
}
