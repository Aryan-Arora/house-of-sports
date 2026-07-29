"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { clsx } from "clsx";
import { MenuIcon, CloseIcon } from "@/components/icons";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/partner-with-us", label: "Partner With Us" },
  { href: "/join-the-team", label: "Join the Team" },
  { href: "/social-gallery", label: "Social Gallery" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-line bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link
          href="/"
          className="text-lg font-extrabold tracking-tight text-ink"
          onClick={() => setIsOpen(false)}
        >
          House of Sports
        </Link>

        <nav className="hidden items-center gap-3 md:flex">
          {NAV_LINKS.slice(1).map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={clsx(
                  "rounded-full border px-4 py-2 text-sm font-semibold transition-colors",
                  isActive
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-line text-ink/70 hover:border-ink/30 hover:text-ink"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/partner-with-us"
          className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-paper transition hover:opacity-90 md:inline-block"
        >
          Join the Movement
        </Link>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center text-ink md:hidden"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      {isOpen ? (
        <nav className="border-t border-line bg-paper md:hidden">
          {NAV_LINKS.slice(1).map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={clsx(
                  "block border-b border-line px-5 py-3.5 text-sm font-medium",
                  isActive ? "text-primary" : "text-ink"
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/partner-with-us"
            onClick={() => setIsOpen(false)}
            className="block bg-primary px-5 py-4 text-center text-sm font-semibold text-paper"
          >
            Join the Movement
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
