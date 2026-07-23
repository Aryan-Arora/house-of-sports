"use client";

import { useState } from "react";
import Link from "next/link";
import { clsx } from "clsx";
import type { CareerRole } from "@/lib/types";

interface JobListingCardProps {
  role: CareerRole;
}

export default function JobListingCard({ role }: JobListingCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={clsx(
        "group overflow-hidden border-2 bg-surface-container-lowest transition-colors",
        isOpen ? "border-primary" : "border-outline-variant hover:border-primary"
      )}
    >
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        className="flex w-full flex-col justify-between gap-6 px-8 py-8 text-left md:flex-row md:items-center"
      >
        <div className="flex-1">
          <div className="mb-2 flex items-center gap-4">
            <span className="border border-primary/20 bg-primary/10 px-2 py-0.5 font-mono-label text-[10px] tracking-widest text-primary">
              {role.department.toUpperCase()}
            </span>
            <span className="font-mono-label text-[10px] tracking-widest text-on-surface-variant">
              {role.location.toUpperCase()}
            </span>
          </div>
          <h3 className="font-display text-headline-md uppercase text-on-surface">
            {role.title}
          </h3>
        </div>
        <div className="flex items-center gap-8">
          <div className="hidden md:block">
            <span className="block font-mono-label text-label-mono uppercase text-on-surface-variant">
              Comp range
            </span>
            <span className="font-display text-[24px] text-on-surface">{role.compRange}</span>
          </div>
          <span
            className={clsx(
              "material-symbols-outlined text-4xl text-on-surface transition-transform",
              isOpen && "rotate-180"
            )}
          >
            expand_more
          </span>
        </div>
      </button>

      {isOpen ? (
        <div className="border-t border-outline-variant px-8 pb-8 pt-6">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <p className="mb-6 text-on-surface-variant">{role.description}</p>
              <h4 className="mb-4 font-mono-label text-label-mono uppercase text-primary">
                Requirements
              </h4>
              <ul className="space-y-2 text-on-surface">
                {role.requirements.map((requirement) => (
                  <li key={requirement} className="flex items-start gap-2">
                    <span className="text-primary">/</span> {requirement}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-end">
              <Link
                href={`/contact?subject=${encodeURIComponent(
                  `Application: ${role.title}`
                )}&type=application`}
                className="w-full bg-primary py-4 text-center font-display uppercase text-on-primary transition-transform hover:scale-[1.02]"
              >
                Apply for this slot
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
