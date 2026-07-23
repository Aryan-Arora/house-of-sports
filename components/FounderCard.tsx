import Image from "next/image";
import { clsx } from "clsx";
import type { Founder } from "@/lib/types";

interface FounderCardProps {
  founder: Founder;
  className?: string;
}

export default function FounderCard({ founder, className }: FounderCardProps) {
  return (
    <div
      className={clsx(
        "group flex flex-col border border-outline-variant bg-surface-container-lowest p-4 transition-all hover:shadow-xl",
        className
      )}
    >
      <div className="relative mb-6 overflow-hidden border-2 border-outline-variant transition-colors group-hover:border-primary">
        <div className="relative aspect-[3/4] w-full">
          <Image
            src={founder.photo}
            alt={`Portrait of ${founder.name}`}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            placeholder="empty"
          />
        </div>
        <div className="absolute left-4 top-4 bg-primary px-3 py-1 font-display leading-none text-on-primary text-[40px]">
          {founder.jersey}
        </div>
      </div>
      <div className="flex items-start justify-between">
        <div>
          <h4 className="font-display text-headline-md uppercase text-true-black">
            {founder.name}
          </h4>
          <p className="font-mono-label text-label-mono uppercase text-primary">{founder.role}</p>
        </div>
        <div className="border border-outline-variant bg-surface-container-high p-2">
          <span className="material-symbols-outlined text-true-black">{founder.icon}</span>
        </div>
      </div>
      <p className="mt-4 text-true-black/70">{founder.bio}</p>
    </div>
  );
}
