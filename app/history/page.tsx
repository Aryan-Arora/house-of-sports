import type { Metadata } from "next";
import GalleryFilter from "@/components/GalleryFilter";
import eventsData from "@/content/events.json";
import type { SiteEvent } from "@/lib/types";

const events = eventsData as SiteEvent[];

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "The Archive — every House of Sports tournament and meetup, from the first Slip & Slide x Floor 5 to the latest Smash Series.",
};

export default function HistoryPage() {
  return (
    <div className="px-4 pb-20 pt-12 md:px-10">
      <header className="mb-12 border-l-8 border-primary pl-6">
        <h1 className="mb-2 font-display text-display-xl uppercase leading-none text-on-background">
          The Archive
        </h1>
        <p className="font-mono-label text-label-mono uppercase tracking-[0.2em] text-primary">
          Capture the sweat. Record the glory.
        </p>
      </header>

      <GalleryFilter events={events} />

      <div className="mt-16 flex flex-col items-center">
        <div className="relative mb-12 h-1 w-full overflow-hidden bg-surface-variant">
          <div className="animate-move-line absolute left-0 top-0 h-full w-1/3 bg-primary" />
        </div>
        <p className="font-mono-label text-label-mono uppercase text-on-surface-variant">
          {events.length} events and counting
        </p>
      </div>
    </div>
  );
}
