import Image from "next/image";
import { PlayIcon } from "@/components/icons";
import type { SocialLink, SocialPost } from "@/lib/types";

interface SocialsGridProps {
  posts: SocialPost[];
  stat: { label: string; value: string };
  links: SocialLink[];
}

export default function SocialsGrid({ posts, stat, links }: SocialsGridProps) {
  const [featured, video, photo1, photo2, photo3] = posts;
  const [linkA, linkB] = links;

  return (
    <div className="grid auto-rows-[240px] grid-cols-1 gap-3 sm:grid-cols-4">
      {/* Featured post */}
      <div className="group relative overflow-hidden rounded-2xl bg-paper-muted sm:col-span-2 sm:row-span-2">
        <Image
          src={featured.image}
          alt={featured.caption}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          placeholder="empty"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent p-5 pt-16">
          <p className="text-sm font-semibold text-paper">{featured.handle}</p>
          {featured.meta ? <p className="text-xs text-paper/70">{featured.meta}</p> : null}
          <p className="mt-1 text-sm text-paper/90">&ldquo;{featured.caption}&rdquo;</p>
        </div>
      </div>

      {/* Video card */}
      <div className="group relative overflow-hidden rounded-2xl bg-paper-muted">
        <Image
          src={video.image}
          alt={video.caption}
          fill
          sizes="25vw"
          className="object-cover"
          placeholder="empty"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-ink/0 transition-colors group-hover:bg-ink/20">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-paper text-ink shadow-sm">
            <PlayIcon className="h-4 w-4" />
          </span>
        </div>
      </div>

      {/* Stat card */}
      <div className="flex flex-col justify-between rounded-2xl border border-line p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-ink/40">Reach</p>
        <div>
          <span className="text-3xl font-extrabold text-ink">{stat.value}</span>
          <p className="mt-1 text-xs text-ink/60">{stat.label}</p>
        </div>
      </div>

      {/* Photo 1 */}
      <div className="group relative overflow-hidden rounded-2xl bg-paper-muted">
        <Image
          src={photo1.image}
          alt={photo1.caption}
          fill
          sizes="25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          placeholder="empty"
        />
      </div>

      {/* Community callout */}
      <div className="relative flex flex-col justify-end overflow-hidden rounded-2xl bg-primary p-6 text-paper sm:row-span-2">
        <h2 className="text-xl font-extrabold leading-tight">Tag us to get featured</h2>
        <p className="mt-2 text-sm text-paper/80">
          Post from a session, tag @houseofsports.in, and we&rsquo;ll share the best ones every
          week.
        </p>
        <a
          href={linkA?.url ?? "#"}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center justify-center rounded-full border border-paper/40 py-2.5 text-sm font-semibold transition hover:bg-paper hover:text-primary"
        >
          Follow along
        </a>
      </div>

      {/* Photo 2 */}
      <div className="group relative overflow-hidden rounded-2xl bg-paper-muted">
        <Image
          src={photo2.image}
          alt={photo2.caption}
          fill
          sizes="25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          placeholder="empty"
        />
      </div>

      {/* Social links tile */}
      <div className="grid grid-cols-2 gap-3 sm:col-span-2">
        {[linkA, linkB].map((link) =>
          link ? (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center justify-center gap-1 rounded-2xl border border-line py-6 text-sm font-semibold text-ink transition hover:border-primary hover:text-primary"
            >
              {link.platform}
            </a>
          ) : null
        )}
      </div>

      {/* Photo 3 */}
      <div className="group relative overflow-hidden rounded-2xl bg-paper-muted">
        <Image
          src={photo3.image}
          alt={photo3.caption}
          fill
          sizes="25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          placeholder="empty"
        />
      </div>
    </div>
  );
}
