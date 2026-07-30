import Image from "next/image";
import { clsx } from "clsx";
import type { SiteEvent } from "@/lib/types";

interface EventCardProps {
  event: SiteEvent;
  className?: string;
}

const MONTH_ABBR = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

/** Gallery tile used on the Social Gallery masonry grid. */
export default function EventCard({ event, className }: EventCardProps) {
  const eventDate = new Date(event.date);

  return (
    <div
      className={clsx(
        "group relative h-full overflow-hidden rounded-2xl bg-paper-muted",
        className
      )}
    >
      <Image
        src={event.coverImage}
        alt={`${event.title} cover photo`}
        fill
        sizes="(min-width: 768px) 33vw, 100vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        placeholder="empty"
      />

      {/* Date-block badge — ClayGrounds-style */}
      <div className="absolute left-4 top-4 flex w-12 flex-col items-center overflow-hidden rounded-lg bg-paper shadow-sm">
        <span className="w-full bg-primary py-0.5 text-center text-[10px] font-bold uppercase tracking-wide text-paper">
          {MONTH_ABBR[eventDate.getMonth()]}
        </span>
        <span className="py-1 text-lg font-extrabold leading-none text-ink">
          {eventDate.getDate()}
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent p-4 pt-12">
        <span className="text-[11px] font-semibold uppercase tracking-wide text-paper/70">
          {event.tag}
        </span>
        <h3 className="mt-1 text-base font-bold text-paper">{event.title}</h3>
      </div>
    </div>
  );
}
