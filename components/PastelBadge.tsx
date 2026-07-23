import { clsx } from "clsx";
import type { EventCategory } from "@/lib/types";

export type PastelTone = "sky" | "lavender" | "mint" | "coral" | "butter";

const CATEGORY_TONE: Record<EventCategory, PastelTone> = {
  badminton: "sky",
  football: "mint",
  "slip-and-slide": "coral",
};

const TONE_BG: Record<PastelTone, string> = {
  sky: "bg-pastel-sky",
  lavender: "bg-pastel-lavender",
  mint: "bg-pastel-mint",
  coral: "bg-pastel-coral",
  butter: "bg-pastel-butter",
};

interface PastelBadgeProps {
  /** Either a known event category (auto-mapped to a tone) or an explicit tone. */
  category?: EventCategory;
  tone?: PastelTone;
  icon?: string;
  rotate?: string;
  className?: string;
  children: React.ReactNode;
}

export default function PastelBadge({
  category,
  tone,
  icon,
  rotate,
  className,
  children,
}: PastelBadgeProps) {
  const resolvedTone = tone ?? (category ? CATEGORY_TONE[category] : undefined);

  return (
    <span
      className={clsx(
        "inline-flex items-center gap-2 border border-black/10 px-4 py-2 font-mono-label text-label-mono uppercase text-on-background",
        resolvedTone ? TONE_BG[resolvedTone] : null,
        rotate,
        className
      )}
    >
      {icon ? <span className="material-symbols-outlined text-[18px]">{icon}</span> : null}
      {children}
    </span>
  );
}
