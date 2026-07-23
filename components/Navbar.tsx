"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { clsx } from "clsx";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
  { href: "/history", label: "Gallery" },
  { href: "/socials", label: "Socials" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b-4 border-primary bg-background">
      <div className="flex w-full max-w-none items-center justify-between px-4 py-4 md:px-10">
        <Link
          href="/"
          className="font-display text-headline-md uppercase tracking-tighter text-primary"
          onClick={() => setIsOpen(false)}
        >
          HOUSE OF SPORTS
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={clsx(
                  "font-display text-headline-md uppercase transition-colors",
                  isActive
                    ? "border-b-2 border-primary pb-1 text-primary"
                    : "text-on-surface hover:text-primary"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="hidden bg-primary px-6 py-2 font-display text-headline-md uppercase text-on-primary transition-transform duration-200 active:skew-x-12 md:inline-block"
        >
          Join the squad
        </Link>

        {/* mobile toggle */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center border-2 border-on-background md:hidden"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="material-symbols-outlined">{isOpen ? "close" : "menu"}</span>
        </button>
      </div>

      {/* mobile nav */}
      {isOpen ? (
        <nav className="border-t-2 border-outline-variant bg-background md:hidden">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={clsx(
                  "block border-b border-outline-variant px-4 py-3 font-display text-headline-md uppercase",
                  isActive ? "text-primary" : "text-on-background"
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block bg-primary px-4 py-4 text-center font-display text-headline-md uppercase text-on-primary"
          >
            Join the squad
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
