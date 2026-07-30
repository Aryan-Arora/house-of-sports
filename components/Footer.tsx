import Link from "next/link";
import contactConfig from "@/content/contact-config.json";
import socials from "@/content/socials.json";
import { MailIcon, PhoneIcon, MapPinIcon, InstagramIcon, YoutubeIcon } from "@/components/icons";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/partner-with-us", label: "Partner With Us" },
  { href: "/join-the-team", label: "Join the Team" },
  { href: "/social-gallery", label: "Social Gallery" },
];

const SOCIAL_ICON: Record<string, typeof InstagramIcon> = {
  Instagram: InstagramIcon,
  YouTube: YoutubeIcon,
  "WhatsApp Community": MailIcon,
};

export default function Footer() {
  return (
    <footer className="mt-auto bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <p className="text-xl font-extrabold tracking-tight">House of Sports</p>
            <p className="mt-3 max-w-xs text-sm text-paper/60">
              Your everyday sports and fitness destination — football, cricket, runs, and yoga.
              Coaching, events, and community, all in one place.
            </p>
            <Link
              href="/partner-with-us"
              className="mt-6 inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-paper transition hover:opacity-90"
            >
              Join the Movement
            </Link>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-paper/40">Explore</p>
            <ul className="mt-4 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-paper/80 hover:text-paper">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-paper/40">
              Get in touch
            </p>
            <ul className="mt-4 space-y-3 text-sm text-paper/80">
              <li>
                <a
                  href={`mailto:${contactConfig.email}`}
                  className="flex items-center gap-2 hover:text-paper"
                >
                  <MailIcon className="h-4 w-4 shrink-0" />
                  {contactConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contactConfig.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 hover:text-paper"
                >
                  <PhoneIcon className="h-4 w-4 shrink-0" />
                  {contactConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-2 text-paper/60">
                <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  {contactConfig.arenaName} — {contactConfig.arenaAddress}
                </span>
              </li>
            </ul>
            <ul className="mt-6 flex gap-4">
              {socials.links.map((link) => {
                const Icon = SOCIAL_ICON[link.platform] ?? MailIcon;
                return (
                  <li key={link.platform}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={link.platform}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-paper/15 text-paper/70 transition hover:border-paper/40 hover:text-paper"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-paper/10 pt-6 text-xs text-paper/40 sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} House of Sports. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-paper/70">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-paper/70">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
