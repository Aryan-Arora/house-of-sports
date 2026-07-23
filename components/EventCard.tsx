import Image from "next/image";
import { clsx } from "clsx";
import type { SiteEvent } from "@/lib/types";

interface EventCardProps {
  event: SiteEvent;
  className?: string;
}

/** Gallery tile used on the History/Gallery masonry grid. */
export default function EventCard({ event, className }: EventCardProps) {
  return (
    <div
      className={clsx(
        "group relative h-full overflow-hidden border-2 border-outline-variant bg-surface transition-all hover:border-primary",
        className
      )}
    >
      <Image
        src={event.coverImage}
        alt={`${event.title} cover photo`}
        fill
        sizes="(min-width: 768px) 33vw, 100vw"
        className="object-cover transition-transform duration-500 group-hover:scale-110"
        placeholder="empty"
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
        <span className="mb-2 inline-block bg-primary px-2 py-1 font-mono-label text-label-mono text-on-primary">
          {event.tag}
        </span>
        <h3 className="font-display text-headline-md uppercase text-on-background">
          {event.title}
        </h3>
      </div>
    </div>
  );
}
