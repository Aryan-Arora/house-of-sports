import type { Metadata } from "next";
import RoleFilter from "@/components/RoleFilter";
import CareerApplicationForm from "@/components/CareerApplicationForm";
import careersData from "@/content/careers.json";
import type { CareerRole } from "@/lib/types";

const careers = careersData as CareerRole[];

export const metadata: Metadata = {
  title: "Join the Team",
  description:
    "Coaching, community, and engineering roles at House of Sports — help run football, cricket, runs, and yoga for a growing community.",
};

const PILLARS = [
  {
    number: "01",
    title: "Empowerment",
    description:
      "Support the next generation of athletes by providing them with professional-grade mentorship and opportunities.",
    badge: "REAL COMMUNITY IMPACT",
  },
  {
    number: "02",
    title: "Flexibility",
    description:
      "Balance your passion for sports with your lifestyle. We offer roles that respect your time and professional goals.",
    badge: "FLEXIBLE HOURS",
  },
  {
    number: "03",
    title: "Excellence",
    description:
      "Work alongside elite professional coaches and tech pioneers to set new standards in the sporting world.",
    badge: "CLEAR GROWTH PATH",
  },
];

export default function JoinTheTeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-paper-muted">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center md:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Join the Team
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Coach, build, and grow with us
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-ink/70">
            We&rsquo;re looking for passionate individuals to redefine grassroots athletics.
            Whether you are a tactical coach, a community visionary, or a product engineer,
            there&rsquo;s a space for you in our movement.
          </p>
        </div>
      </section>

      {/* Why join us */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="space-y-6 border-l border-line pl-8 transition-colors hover:border-primary"
            >
              <span className="text-3xl font-extrabold text-line">{pillar.number}</span>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-ink">{pillar.title}</h3>
                <p className="text-sm text-ink/60">{pillar.description}</p>
                <span className="inline-block rounded-full bg-paper-muted px-4 py-1 text-xs font-semibold uppercase text-ink/70">
                  {pillar.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Open roles */}
      <section className="bg-paper-muted">
        <div className="mx-auto max-w-4xl px-5 py-16 md:px-8 md:py-20">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
                Open roles
              </h2>
              <p className="mt-2 text-ink/60">Find your place in our growing ecosystem.</p>
            </div>
          </div>
          <div className="mt-8">
            <RoleFilter roles={careers} />
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
