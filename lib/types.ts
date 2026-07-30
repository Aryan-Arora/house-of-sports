export type EventCategory = "football" | "cricket" | "runs" | "yoga" | "community";
export type GalleryItemSize = "tall" | "normal" | "short" | "diagonal";

export interface Milestone {
  period: string;
  title: string;
  description: string;
  image: string;
}

export interface SiteEvent {
  slug: string;
  title: string;
  tag: string;
  date: string; // ISO date
  category: EventCategory;
  sport: string;
  description: string;
  coverImage: string;
  size: GalleryItemSize;
  gallery: string[];
}

export interface Founder {
  slug: string;
  name: string;
  role: string;
  bio: string;
  photo: string;
}

export interface Sport {
  slug: string;
  name: string;
  description: string;
}

export interface Arena {
  name: string;
  partner: string;
  tagline: string;
  description: string;
  image: string;
}

export type CareerType = "Full-time" | "Part-time" | "Volunteer" | "Internship";

export interface CareerRole {
  slug: string;
  title: string;
  department: string;
  type: CareerType;
  location: string;
  compRange: string;
  description: string;
  requirements: string[];
}

export interface SiteStat {
  id: string;
  label: string;
  value?: number;
  prefix?: string;
  suffix?: string;
  display?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export type SocialPostSize = "featured" | "video" | "normal";

export interface SocialPost {
  id: string;
  handle: string;
  caption: string;
  image: string;
  avatar?: string;
  meta?: string;
  size: SocialPostSize;
}

export interface ContactConfig {
  email: string;
  phone: string;
  arenaName: string;
  arenaAddress: string;
  hours: string;
}
