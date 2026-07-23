export type EventCategory = "badminton" | "football" | "slip-and-slide";
export type GalleryItemSize = "tall" | "normal" | "short" | "diagonal";

export interface SiteEvent {
  slug: string;
  title: string;
  tag: string;
  date: string; // ISO date, e.g. "2024-03-16"
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
  jersey: string;
  role: string;
  bio: string;
  icon: string;
  photo: string;
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

export interface ContactPerson {
  role: string;
  name: string;
  email: string;
}

export interface ContactConfig {
  contacts: ContactPerson[];
  address: string;
  hours: string;
}
