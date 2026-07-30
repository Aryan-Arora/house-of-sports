"use client";

import { useEffect, useState } from "react";
import { clsx } from "clsx";

interface SportCyclerProps {
  words: string[];
  className?: string;
}

export default function SportCycler({ words, className }: SportCyclerProps) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const widthCh = Math.max(...words.map((word) => word.length)) + 0.5;

  useEffect(() => {
    let hideTimeout: ReturnType<typeof setTimeout>;
    const interval = setInterval(() => {
      setVisible(false);
      hideTimeout = setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setVisible(true);
      }, 250);
    }, 2000);
    return () => {
      clearInterval(interval);
      clearTimeout(hideTimeout);
    };
  }, [words.length]);

  return (
    <span
      className="relative inline-block h-[1.1em] overflow-hidden align-bottom"
      style={{ width: `${widthCh}ch` }}
    >
      <span
        className={clsx(
          "absolute inset-0 whitespace-nowrap transition-all duration-300 ease-in-out",
          visible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
          className
        )}
      >
        {words[index]}
      </span>
    </span>
  );
}
