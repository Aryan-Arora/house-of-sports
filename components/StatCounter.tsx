"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import type { SiteStat } from "@/lib/types";

interface StatCounterProps {
  stat: SiteStat;
  className?: string;
}

export default function StatCounter({ stat, className }: StatCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView || stat.value === undefined) return;
    const controls = animate(0, stat.value, {
      duration: 1.2,
      ease: "easeOut",
      onUpdate: (value) => setDisplay(Math.round(value)),
    });
    return () => controls.stop();
  }, [isInView, stat.value]);

  const text =
    stat.display ??
    `${stat.prefix ?? ""}${stat.value !== undefined ? display : ""}${stat.suffix ?? ""}`;

  return (
    <span ref={ref} className={className}>
      {text}
    </span>
  );
}
