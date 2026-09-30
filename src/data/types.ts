// Shapes for everything in profile.ts. You normally don't need to edit this file —
// it exists so your editor can autocomplete fields and flag typos in profile.ts.
import type { IconName } from '../lib/icons';

export type { IconName };

export interface SocialLink {
  label: string;
  href: string;
  icon: IconName;
}

export interface Profile {
  name: string;
  /** Shown in the navbar logo and favicon. */
  initials: string;
  role: string;
  /** Small pill above your name in the hero. */
  status: string;
  /** Phrases cycled by the typing animation: "I build …". */
  typewriter: string[];
  tagline: string;
  location: string;
  email: string;
  /** "YYYY-MM" of your first job — years of experience are calculated from it on every build. */
  careerStart: string;
  /**
   * Path to a PDF in /public (e.g. "resume.pdf") or a full URL.
   * Leave empty to hide the "Download CV" button.
   */
  resumeUrl: string;
  socials: SocialLink[];
  /** Shown in the "profile.cs" code card in the hero. */
  heroCode: {
    stack: string[];
    focus: string[];
  };
}

export interface Seo {
  title: string;
  description: string;
  keywords: string[];
}

export interface Stat {
  /** A number, or 'years' for your auto-calculated years of experience. */
  value: number | 'years';
  /** Text after the number, e.g. "+" or "%". */
  suffix?: string;
  label: string;
}

export interface Highlight {
  icon: IconName;
  title: string;
  body: string;
  tags: string[];
}

export interface Role {
  title: string;
  start: string;
  end: string;
}

export interface Job {
  company: string;
  location: string;
  /** Client you worked for through this employer (optional). */
  client?: string;
  /** One role, or several to show a promotion path (newest first). */
  roles: Role[];
  summary: string;
  /** The first few are shown; the rest sit behind a "Show more" toggle. */
  highlights: string[];
  tech: string[];
}

export type ProjectCategory = 'professional' | 'personal';

export interface Project {
  title: string;
  category: ProjectCategory;
  period?: string;
  description: string;
  /** Headline result shown in gradient text. */
  metric?: string;
  points?: string[];
  tech: string[];
  link?: string;
  /** Featured projects are listed first and get a badge. */
  featured?: boolean;
}

export interface SkillGroup {
  icon: IconName;
  title: string;
  items: string[];
}

export interface Recognition {
  icon: IconName;
  title: string;
  issuer: string;
  date: string;
  description: string;
  /** Show a "×N" badge when you received it more than once. */
  count?: number;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
}

export interface Education {
  degree: string;
  school: string;
  university: string;
  period: string;
  grade: string;
  coursework: string[];
}

export interface Contact {
  heading: string;
  body: string;
}
