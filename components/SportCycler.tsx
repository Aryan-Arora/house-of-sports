"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface SportCyclerProps {
  words: string[];
}

export default function SportCycler({ words }: SportCyclerProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="relative mb-8 h-20 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center font-display text-5xl uppercase italic text-primary md:text-7xl"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
