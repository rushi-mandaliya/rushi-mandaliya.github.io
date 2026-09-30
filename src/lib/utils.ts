import { profile } from '../data/profile';

/** Whole years since `profile.careerStart` ("YYYY-MM"), evaluated at build time. */
export const yearsOfExperience = (() => {
  const [year, month] = profile.careerStart.split('-').map(Number);
  const now = new Date();
  const months = (now.getFullYear() - year) * 12 + (now.getMonth() + 1 - month);
  return Math.max(0, Math.floor(months / 12));
})();

/** Replaces {years} placeholders used in profile.ts text. */
export const fill = (text: string) => text.replaceAll('{years}', String(yearsOfExperience));

/** Prefixes a site-relative path with the configured base (needed on GitHub Pages project sites). */
export function withBase(path: string) {
  if (/^([a-z]+:)?\/\//i.test(path) || path.startsWith('mailto:') || path.startsWith('#')) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}

export const isExternal = (href: string) => /^https?:\/\//i.test(href);

export const hostname = (href: string) => new URL(href).hostname.replace(/^www\./, '');
