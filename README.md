# House of Sports

Delhi sports community site. Next.js (App Router) + TypeScript + Tailwind CSS v4 +
Framer Motion. Visual design ported 1:1 from a Stitch mockup (neo-brutalist,
cobalt-on-off-white).

## Folder structure

```
app/                  Routes (App Router). Each folder is a URL segment.
  page.tsx            /
  about/page.tsx       /about
  careers/page.tsx     /careers
  contact/page.tsx     /contact
  history/page.tsx     /history  (nav label: "Gallery")
  socials/page.tsx     /socials
  api/contact/route.ts POST endpoint the contact form submits to
  globals.css          Design tokens (colors, fonts, type scale) + base styles
  layout.tsx           Root layout: fonts, <Navbar>/<Footer>, metadata

components/            Reusable, mostly presentational UI. Pull data via props,
                       not by importing content/*.json directly (pages do that).

content/               Editable site content as JSON. Change these files to
                       update copy/data without touching component code.
  founders.json        Founders grid on /about
  events.json          Gallery items on /history + the Home "featured event"
  careers.json         Role listings on /careers
  site-stats.json      Animated stat strip on the homepage
  socials.json         Social links + the /socials bento feed
  contact-config.json  "Front office" contacts + HQ address on /contact

lib/types.ts           TypeScript types for everything in content/*.json

public/images/         Placeholder image folders, one per section. Drop real
                       photos in with the same filenames the pages already
                       reference (see below), no code changes needed.
```

## Adding a new event

Open `content/events.json` and append an object:

```json
{
  "slug": "unique-url-safe-id",
  "title": "Short punchy title",
  "tag": "CATEGORY / SUBTITLE",
  "date": "2026-01-01",
  "category": "badminton",       // "badminton" | "football" | "slip-and-slide"
  "sport": "Badminton",
  "description": "One or two sentences.",
  "coverImage": "/images/events/<folder>/cover.jpg",
  "size": "normal",              // "tall" | "normal" | "short" | "diagonal" — masonry height on /history
  "gallery": ["/images/events/<folder>/gallery-1.jpg"]
}
```

Create a matching folder under `public/images/events/<folder>/` and drop in
`cover.jpg` (+ any gallery images). The most recent event by `date` is what
shows in the homepage "Featured Event" module automatically.

To add a new category, also add a color mapping in
`components/PastelBadge.tsx` (`CATEGORY_TONE`) and a filter chip in
`components/GalleryFilter.tsx` (`FILTERS`).

## Adding a new founder

Add an entry to `content/founders.json`:

```json
{
  "slug": "unique-id",
  "name": "Full Name",
  "jersey": "23",
  "role": "Title / Founder",
  "bio": "One sentence.",
  "icon": "bolt",              // any Material Symbols Outlined icon name
  "photo": "/images/founders/full-name.jpg"
}
```

Drop the photo into `public/images/founders/`. The `/about` "Starting Lineup"
grid renders every entry in `founders.json` automatically — no component
changes needed.

## Swapping placeholder images

Every image path referenced in `content/*.json` or hardcoded in a page
(hero shots, milestone photos, career perk photos) points at a file under
`public/images/<section>/`. Those folders already exist — just replace the
placeholder file with a real photo **using the same filename**, and it picks
up automatically. If you rename a file, update the corresponding path in the
JSON (or in the page component, for the few hardcoded hero/milestone images).

## Contact form

`components/ContactForm.tsx` does client-side validation and POSTs to
`app/api/contact/route.ts`, which currently just validates + logs the
submission and returns `{ ok: true }`. See the `TODO` in that file for wiring
up a real email service (Resend, Formspree, etc.) or CRM.

## Local development

```bash
npm install
npm run dev
```

Deploys to Vercel with zero config (`next build` / `next start`).
