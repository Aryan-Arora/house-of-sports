import type { ReactNode } from "react";

interface GalleryGridProps {
  children: ReactNode;
}

/** Masonry-style grid: fixed 10px row tracks, items span rows to vary height. */
export default function GalleryGrid({ children }: GalleryGridProps) {
  return (
    <div
      className="grid gap-4 [grid-auto-rows:10px] [grid-template-columns:repeat(auto-fill,minmax(280px,1fr))]"
    >
      {children}
    </div>
  );
}
