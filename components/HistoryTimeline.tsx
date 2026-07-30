"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { clsx } from "clsx";
import type { Milestone } from "@/lib/types";

interface HistoryTimelineProps {
  milestones: Milestone[];
}

// Matches the easing/duration used by playall.in's "Our Journey" scroll reveal.
const REVEAL_TRANSITION = { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const };

export default function HistoryTimeline({ milestones }: HistoryTimelineProps) {
  return (
    <div className="relative mx-auto max-w-5xl">
      {/* connecting line */}
      <div className="absolute left-1/2 hidden h-full w-px -translate-x-1/2 bg-line md:block" />

      <div className="space-y-16 md:space-y-24">
        {milestones.map((milestone, index) => {
          const reversed = index % 2 === 1;
          return (
            <div key={milestone.period} className="relative grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-16">
              {/* node dot */}
              <div className="absolute left-1/2 top-1/2 z-10 hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-paper bg-primary md:block" />

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={REVEAL_TRANSITION}
                className={clsx(
                  "relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-paper-muted",
                  reversed && "md:order-2"
                )}
              >
                <Image
                  src={milestone.image}
                  alt={milestone.title}
                  fill
                  sizes="(min-width: 768px) 45vw, 100vw"
                  className="object-cover"
                  placeholder="empty"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ ...REVEAL_TRANSITION, delay: 0.1 }}
                className={clsx(
                  "rounded-2xl border border-line bg-paper p-6 md:p-8",
                  reversed && "md:order-1"
                )}
              >
                <span className="inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-paper">
                  {milestone.period}
                </span>
                <h3 className="mt-4 text-xl font-extrabold text-ink">{milestone.title}</h3>
                <p className="mt-2 text-sm text-ink/60">{milestone.description}</p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
