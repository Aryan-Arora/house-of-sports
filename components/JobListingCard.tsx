import { ArrowRightIcon } from "@/components/icons";
import type { CareerRole } from "@/lib/types";

interface JobListingCardProps {
  role: CareerRole;
}

export default function JobListingCard({ role }: JobListingCardProps) {
  return (
    <div className="group flex flex-col gap-6 rounded-2xl border border-line bg-paper p-6 transition-colors hover:border-primary/50 md:flex-row md:items-center md:justify-between">
      <div className="space-y-3">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-paper-muted px-3 py-0.5 text-xs font-semibold uppercase text-ink/70">
            {role.type}
          </span>
          <span className="rounded-full bg-paper-muted px-3 py-0.5 text-xs font-semibold uppercase text-ink/70">
            {role.location}
          </span>
        </div>
        <h3 className="text-lg font-bold text-ink">{role.title}</h3>
        <p className="text-sm text-ink/60">{role.description}</p>
        <p className="text-sm font-semibold text-primary">{role.compRange}</p>
      </div>
      <a
        href="#apply"
        className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-paper transition-all hover:gap-4"
      >
        Apply
        <ArrowRightIcon className="h-4 w-4" />
      </a>
    </div>
  );
}
