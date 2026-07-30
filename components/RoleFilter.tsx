"use client";

import { useState } from "react";
import { clsx } from "clsx";
import JobListingCard from "@/components/JobListingCard";
import type { CareerRole } from "@/lib/types";

interface RoleFilterProps {
  roles: CareerRole[];
}

export default function RoleFilter({ roles }: RoleFilterProps) {
  const departments = ["All", ...Array.from(new Set(roles.map((role) => role.department)))];
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? roles : roles.filter((role) => role.department === active);

  return (
    <>
      <div className="flex flex-wrap gap-2">
        {departments.map((department) => (
          <button
            key={department}
            type="button"
            onClick={() => setActive(department)}
            className={clsx(
              "rounded-full px-5 py-2 text-sm font-semibold transition-colors",
              active === department
                ? "bg-primary text-paper"
                : "bg-paper-muted text-ink/70 hover:bg-line/60"
            )}
          >
            {department}
          </button>
        ))}
      </div>

      <div className="mt-8 space-y-4">
        {filtered.map((role) => (
          <JobListingCard key={role.slug} role={role} />
        ))}
      </div>
    </>
  );
}
