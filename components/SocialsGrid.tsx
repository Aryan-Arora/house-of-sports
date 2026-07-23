import Image from "next/image";
import type { SocialLink, SocialPost } from "@/lib/types";

interface SocialsGridProps {
  posts: SocialPost[];
  stat: { label: string; value: string };
  links: SocialLink[];
}

const LINK_LABEL_ICON: Record<string, string> = {
  Instagram: "camera",
  Discord: "forum",
  Twitter: "chat",
};

export default function SocialsGrid({ posts, stat, links }: SocialsGridProps) {
  const [featured, video, photo1, photo2, photo3] = posts;
  const [linkA, linkB] = links;

  return (
    <div className="grid auto-rows-[300px] grid-cols-1 gap-4 md:grid-cols-4">
      {/* Featured post */}
      <div className="group relative overflow-hidden border border-outline bg-white transition-colors hover:border-primary hover:bg-surface-bright md:col-span-2 md:row-span-2">
        <Image
          src={featured.image}
          alt={featured.caption}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          placeholder="empty"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent opacity-80" />
        <div className="absolute bottom-0 left-0 w-full p-6">
          <div className="mb-2 flex items-center gap-3">
            <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-primary bg-surface-container" />
            <div>
              <p className="font-mono-label text-label-mono text-primary">{featured.handle}</p>
              <p className="text-[10px] uppercase text-on-surface-variant">{featured.meta}</p>
            </div>
          </div>
          <p className="font-display text-headline-md uppercase text-on-surface">
            &ldquo;{featured.caption}&rdquo;
          </p>
        </div>
        <div className="absolute right-4 top-4 bg-primary p-2 text-white">
          <span className="material-symbols-outlined">star</span>
        </div>
      </div>

      {/* Video card */}
      <div className="group relative overflow-hidden border border-outline bg-white transition-colors hover:border-primary hover:bg-surface-bright">
        <Image
          src={video.image}
          alt={video.caption}
          fill
          sizes="25vw"
          className="object-cover"
          placeholder="empty"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-primary/10 opacity-0 transition-opacity group-hover:opacity-100">
          <span className="material-symbols-outlined text-6xl text-primary">play_circle</span>
        </div>
        <div className="absolute left-4 top-4 border border-primary bg-white px-2 py-1">
          <span className="font-mono-label text-[10px] text-primary">REEL</span>
        </div>
      </div>

      {/* Stat card */}
      <div className="flex flex-col justify-between border border-outline border-b-4 border-b-primary bg-white p-6">
        <div>
          <span className="material-symbols-outlined mb-4 block text-primary">trending_up</span>
          <h3 className="font-mono-label text-label-mono uppercase text-on-surface-variant">
            Global Reach
          </h3>
        </div>
        <div>
          <span className="font-display text-stat-number text-on-surface">{stat.value}</span>
          <p className="text-body-md text-primary">{stat.label}</p>
        </div>
      </div>

      {/* User photo 1 */}
      <div className="group relative overflow-hidden border border-outline bg-white transition-colors hover:border-primary hover:bg-surface-bright">
        <Image
          src={photo1.image}
          alt={photo1.caption}
          fill
          sizes="25vw"
          className="object-cover transition-transform group-hover:scale-105"
          placeholder="empty"
        />
        <div className="absolute inset-0 flex flex-col justify-end bg-white/80 p-4 opacity-0 transition-opacity group-hover:opacity-100">
          <p className="font-mono-label text-label-mono text-primary">{photo1.handle}</p>
          <div className="mt-2 flex gap-2">
            <span className="material-symbols-outlined text-sm text-primary">favorite</span>
            <span className="material-symbols-outlined text-sm text-primary">mode_comment</span>
          </div>
        </div>
      </div>

      {/* Community callout */}
      <div className="relative flex flex-col justify-end overflow-hidden bg-primary p-8 text-white md:row-span-2">
        <div className="absolute -right-[20%] -top-[20%] opacity-10">
          <span className="material-symbols-outlined text-[200px]">groups</span>
        </div>
        <div className="relative z-10">
          <h2 className="mb-6 font-display text-headline-lg uppercase leading-none">
            TAG US
            <br /> TO BE
            <br /> LEGEND
          </h2>
          <p className="border-t border-white/30 pt-4 font-mono-label text-label-mono uppercase">
            Weekly features every Friday night.
          </p>
          <button className="mt-8 w-full border-2 border-white py-4 font-display uppercase transition-colors hover:bg-white hover:text-primary">
            Submit Clip
          </button>
        </div>
      </div>

      {/* User photo 2 */}
      <div className="group relative overflow-hidden border border-outline bg-white transition-colors hover:border-primary hover:bg-surface-bright">
        <Image
          src={photo2.image}
          alt={photo2.caption}
          fill
          sizes="25vw"
          className="object-cover transition-transform group-hover:scale-105"
          placeholder="empty"
        />
        <div className="absolute right-2 top-2 bg-white/80 p-1">
          <span className="material-symbols-outlined text-sm text-primary">collections</span>
        </div>
      </div>

      {/* Social links tile */}
      <div className="grid grid-cols-2 border border-outline bg-white md:col-span-2">
        {[linkA, linkB].map((link) => (
          <a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col items-center justify-center gap-2 border-r border-outline-variant text-on-surface transition-all last:border-r-0 hover:bg-primary hover:text-white"
          >
            <span className="material-symbols-outlined text-4xl transition-transform group-hover:scale-110">
              {LINK_LABEL_ICON[link.platform] ?? link.icon}
            </span>
            <span className="font-display uppercase">{link.platform}</span>
          </a>
        ))}
      </div>

      {/* User photo 3 */}
      <div className="group relative overflow-hidden border border-outline bg-white transition-colors hover:border-primary hover:bg-surface-bright">
        <Image
          src={photo3.image}
          alt={photo3.caption}
          fill
          sizes="25vw"
          className="object-cover transition-transform group-hover:scale-105"
          placeholder="empty"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
          <div className="bg-primary px-4 py-2 font-display text-white">VIEW POST</div>
        </div>
      </div>
    </div>
  );
}
