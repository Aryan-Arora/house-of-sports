import Image from "next/image";
import { clsx } from "clsx";
import type { Founder } from "@/lib/types";

interface FounderCardProps {
  founder: Founder;
  className?: string;
}

export default function FounderCard({ founder, className }: FounderCardProps) {
  return (
    <div className={clsx("group", className)}>
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-paper-muted">
        <Image
          src={founder.photo}
          alt={`Portrait of ${founder.name}`}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          placeholder="empty"
        />
      </div>
      <h3 className="mt-4 text-lg font-bold text-ink">{founder.name}</h3>
      <p className="text-sm font-medium text-primary">{founder.role}</p>
      <p className="mt-2 text-sm text-ink/60">{founder.bio}</p>
    </div>
  );
}
