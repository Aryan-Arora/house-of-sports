# House of Sports

Your everyday sports & fitness destination — football, cricket, runs, and yoga. Coaching,
events, and community, home of HOS Arena (built with Holy Innocent Public School). Next.js
(App Router) + TypeScript + Tailwind CSS v4 + Framer Motion. Clean, minimal design: blue,
white, and black.

## Folder structure

```
app/                    Routes (App Router). Each folder is a URL segment.
  page.tsx              /
  partner-with-us/      /partner-with-us — partnership pitch + inquiry form
  join-the-team/        /join-the-team — open roles + application form
  social-gallery/       /social-gallery — founders, history, event gallery, socials feed
  api/contact/route.ts  POST endpoint the contact/application forms submit to
  globals.css           Design tokens (colors, type) + base styles
  layout.tsx            Root layout: fonts, <Navbar>/<Footer>, metadata

components/              Reusable, mostly presentational UI. Pull data via props,
                         not by importing content/*.json directly (pages do that).

content/                 Editable site content as JSON. Change these files to
                         update copy/data without touching component code.
  sports.json            The 4 sports strip on the homepage (football/cricket/runs/yoga)
  arena.json             HOS Arena details (partner, description, image)
  founders.json          Founders grid on /social-gallery
  events.json            Event gallery on /social-gallery + Home's "Events" section
  careers.json           Role listings on /join-the-team
  site-stats.json        Animated stat strip on the homepage
  socials.json           Social links + the /social-gallery feed
  contact-config.json    Email/phone/arena address shown in the footer + Partner page

lib/types.ts             TypeScript types for everything in content/*.json

public/images/           Placeholder image folders, one per section. Drop real
                         photos in with the same filenames the pages already
                         reference (see below), no code changes needed.
```

## Site structure

Only four pages are linked in navigation, by design — there's no separate About or Contact
page. Founder/mission content lives on **Social Gallery**; general contact info is in the
**footer** on every page, and the contact form lives on **Partner With Us** (it doubles as the
site's general inquiry channel).

## Adding a new event

Open `content/events.json` and append an object:

```json
{
  "slug": "unique-url-safe-id",
  "title": "Short punchy title",
  "tag": "CATEGORY / SUBTITLE",
  "date": "2026-01-01",
  "category": "football",        // "football" | "cricket" | "runs" | "yoga" | "community"
  "sport": "Football",
  "description": "One or two sentences.",
  "coverImage": "/images/events/<folder>/cover.jpg",
  "size": "normal",              // "tall" | "normal" | "short" | "diagonal" — masonry height on /social-gallery
  "gallery": ["/images/events/<folder>/gallery-1.jpg"]
}
```

Create a matching folder under `public/images/events/<folder>/` and drop in `cover.jpg` (+ any
gallery images). To add a new category, also add a filter chip in
`components/GalleryFilter.tsx` (`FILTERS`).

## Adding a new founder

Add an entry to `content/founders.json`:

```json
{
  "slug": "unique-id",
  "name": "Full Name",
  "role": "Title",
  "bio": "One sentence.",
  "photo": "/images/founders/full-name.jpg"
}
```

Drop the photo into `public/images/founders/`. The Social Gallery founders grid renders every
entry automatically — no component changes needed.

## Swapping placeholder images

Every image path referenced in `content/*.json` or hardcoded in a page (hero shot, section
images) points at a file under `public/images/<section>/`. Those folders already exist — just
replace the placeholder file with a real photo **using the same filename**, and it picks up
automatically. If you rename a file, update the corresponding path in the JSON (or in the page
component, for the few hardcoded images).

## Contact & application forms

`components/ContactForm.tsx` (Partner With Us) and `components/CareerApplicationForm.tsx`
(Join the Team) both POST to `app/api/contact/route.ts`, which currently just validates + logs
the submission and returns `{ ok: true }`. See the `TODO` in that file for wiring up a real
email service (Resend, Formspree, etc.) or CRM.

## Local development

```bash
npm install
npm run dev
```

Deploys to Vercel with zero config (`next build` / `next start`).
