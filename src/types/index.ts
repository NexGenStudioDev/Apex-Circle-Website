export type EventType = "Hackathon" | "Workshop" | "Meetup";

export type EventStatus = "Upcoming" | "Live" | "Closed";

export interface Event {
  id: string;
  title: string;

  type: EventType;
  status: EventStatus;

  date: string;       // e.g. "12 Mar 2026"
  time: string;       // e.g. "10:00 AM"
  location: string;

  description: string;
  image: string;

  // ✅ OPTIONAL (for your upgraded UI)
  duration?: string;   // "48 Hours"
  tags?: string[];     // ["AI", "Web3"]
  seats?: number;      // 120
}

// Contributor Type
export interface Contributor {
  name: string;
  avatar: string; // GitHub profile image
  githubUrl?: string;
}

// Project Type
export interface Project {
  id: string;
  title: string;
  team: string;
  category: string;
  hackathon: string;
  description: string;
  demoUrl: string;
  githubUrl: string;
  image: string;
  featured: boolean;

  // ✅ NEW FIELDS
  techStack: string[];
  features: string[];
  contributors: Contributor[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  image: string;
  socials: {
    twitter: string;
    github: string;
    linkedin: string;
  };
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  date: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image: string;
}

export interface JobOpening {
  id: string;
  title: string;
  type: string;
  location: string;
  category: string;
  desc: string;
}
