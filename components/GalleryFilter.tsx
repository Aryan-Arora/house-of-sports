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
  { label: "All Access", value: "all" },
  { label: "Badminton", value: "badminton" },
  { label: "Football", value: "football" },
  { label: "Slip & Slide", value: "slip-and-slide" },
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
      <section className="mb-16 flex flex-wrap items-center gap-3">
        <span className="mr-4 font-mono-label text-label-mono uppercase text-on-background opacity-60">
          Filter by Arena:
        </span>
        {FILTERS.map((filter) => (
          <button
            key={filter.value}
            type="button"
            onClick={() => setActive(filter.value)}
            className={clsx(
              "rounded-full border-2 px-4 py-2 font-mono-label text-label-mono uppercase transition-all",
              active === filter.value
                ? "border-primary bg-primary text-on-primary"
                : "border-outline-variant bg-surface text-on-surface hover:border-primary hover:text-primary"
            )}
          >
            {filter.label}
          </button>
        ))}
      </section>

      <GalleryGrid>
        {filtered.map((event) => (
          <div
            key={event.slug}
            className={clsx(
              SIZE_ROW_SPAN[event.size],
              event.size === "diagonal" && "[clip-path:polygon(0_0,100%_0,100%_90%,92%_100%,0_100%)]"
            )}
          >
            <EventCard event={event} />
          </div>
        ))}
      </GalleryGrid>
    </>
  );
}
