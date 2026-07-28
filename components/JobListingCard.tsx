"use client";

import { useState } from "react";
import { clsx } from "clsx";
import { ChevronDownIcon } from "@/components/icons";
import type { CareerRole } from "@/lib/types";

interface JobListingCardProps {
  role: CareerRole;
}

export default function JobListingCard({ role }: JobListingCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={clsx(
        "overflow-hidden rounded-2xl border transition-colors",
        isOpen ? "border-primary" : "border-line hover:border-ink/20"
      )}
    >
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        className="flex w-full flex-col justify-between gap-4 px-6 py-6 text-left sm:flex-row sm:items-center"
      >
        <div className="flex-1">
          <div className="mb-2 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              {role.department}
            </span>
            <span className="text-xs text-ink/50">{role.location}</span>
          </div>
          <h3 className="text-lg font-bold text-ink">{role.title}</h3>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden text-right sm:block">
            <span className="block text-xs text-ink/50">Comp range</span>
            <span className="text-sm font-semibold text-ink">{role.compRange}</span>
          </div>
          <ChevronDownIcon
            className={clsx("h-5 w-5 text-ink/50 transition-transform", isOpen && "rotate-180")}
          />
        </div>
      </button>

      {isOpen ? (
        <div className="border-t border-line px-6 pb-6 pt-5">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <p className="mb-4 text-sm text-ink/70">{role.description}</p>
              <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink/40">
                What we&rsquo;re looking for
              </h4>
              <ul className="space-y-1.5 text-sm text-ink/80">
                {role.requirements.map((requirement) => (
                  <li key={requirement} className="flex items-start gap-2">
                    <span className="mt-0.5 text-primary">•</span> {requirement}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-end">
              <a
                href="#apply"
                className="rounded-full bg-primary py-3 text-center text-sm font-semibold text-paper transition hover:opacity-90"
              >
                Apply for this role
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
