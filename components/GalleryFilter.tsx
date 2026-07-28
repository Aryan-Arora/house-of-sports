"use client";

import { useState } from "react";
import { clsx } from "clsx";
import GalleryGrid from "@/components/GalleryGrid";
import EventCard from "@/components/EventCard";
import type { EventCategory, SiteEvent } from "@/lib/types";

interface GalleryFilterProps {
  events: SiteEvent[];
}

const FILTERS: { label: string; value: EventCategory | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Football", value: "football" },
  { label: "Cricket", value: "cricket" },
  { label: "Runs", value: "runs" },
  { label: "Yoga", value: "yoga" },
  { label: "Community", value: "community" },
];

const SIZE_ROW_SPAN: Record<SiteEvent["size"], string> = {
  tall: "[grid-row-end:span_42]",
  normal: "[grid-row-end:span_26]",
  short: "[grid-row-end:span_18]",
  diagonal: "[grid-row-end:span_26]",
};

export default function GalleryFilter({ events }: GalleryFilterProps) {
  const [active, setActive] = useState<EventCategory | "all">("all");

  const filtered = active === "all" ? events : events.filter((event) => event.category === active);

  return (
    <>
      <div className="flex flex-wrap gap-2">
        {FILTERS.map((filter) => (
          <button
            key={filter.value}
            type="button"
            onClick={() => setActive(filter.value)}
            className={clsx(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              active === filter.value
                ? "border-primary bg-primary text-paper"
                : "border-line text-ink/70 hover:border-ink/30 hover:text-ink"
            )}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="mt-8">
        <GalleryGrid>
          {filtered.map((event) => (
            <div key={event.slug} className={SIZE_ROW_SPAN[event.size]}>
              <EventCard event={event} />
            </div>
          ))}
        </GalleryGrid>
      </div>
    </>
  );
}
