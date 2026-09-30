# Rushikumar Mandaliya — Personal Website

A fast, single-page portfolio built with [Astro](https://astro.build). No UI framework and no client-side
runtime beyond a few small scripts for animations.

## Updating your details

**Almost everything lives in one file: [`src/data/profile.ts`](src/data/profile.ts).**

| To change…                                   | Edit in `profile.ts`             |
| -------------------------------------------- | -------------------------------- |
| Name, role, tagline, email, location, socials | `profile`                        |
| Typing animation phrases in the hero          | `profile.typewriter`             |
| The `profile.cs` code card in the hero        | `profile.heroCode` (+ `profile`) |
| Hero numbers (8+, 67%, …)                     | `stats`                          |
| About paragraphs and the four cards           | `about`, `highlights`            |
| Jobs, promotions, bullet points, tech tags    | `experience`                     |
| Projects (professional / personal)            | `projects`                       |
| Scrolling tech band                           | `marquee`                        |
| Skill groups                                  | `skills`                         |
| Awards, certifications, education             | `recognition`, `certifications`, `education` |
| Contact heading and text                      | `contact`                        |
| Browser title / search description            | `seo`                            |

Tips:

- Write `{years}` in any text and it's replaced with your years of experience, calculated from
  `profile.careerStart` on every build — so "8+ years" becomes "9+ years" on its own.
- Newest job first. For a promotion, list several `roles` under one job (newest first).
- The first 4 bullets of a job are shown; the rest are behind a "Show more" button.
- Projects with `featured: true` are shown first with a gradient border.
- An empty list hides its section (and its navbar link).
- Icon names autocomplete in VS Code; the full list is in [`src/lib/icons.ts`](src/lib/icons.ts).
- **CV download:** put your PDF at `public/resume.pdf` and set `resumeUrl: 'resume.pdf'`. A "Download CV"
  button then appears in the hero and contact sections.

## Running locally

Requires Node.js 22.12+.

```bash
npm install
npm run dev       # http://localhost:4321 — reloads as you edit profile.ts
npm run check     # type-checks profile.ts and all components
npm run build     # production build into dist/
```

## Deploying to GitHub Pages (free)

1. Create a GitHub repo. Name it `<your-username>.github.io` for the address `https://<your-username>.github.io`,
   or use any other name for `https://<your-username>.github.io/<repo-name>`.
2. Push this folder to the `main` branch.
3. In the repo, open **Settings → Pages** and set **Source** to **GitHub Actions**.

Every push to `main` then rebuilds and deploys the site through `.github/workflows/deploy.yml`. The
workflow detects the correct URL and base path itself. Custom domains work too: add one under
Settings → Pages.

> The `data/` folder (raw CVs and notes) is git-ignored so it doesn't end up in a public repo.

## Project structure

```
src/
  data/profile.ts      ← your content (edit this)
  data/types.ts        field definitions + docs for profile.ts
  components/          one component per section (Hero, Experience, Projects, …)
  layouts/BaseLayout   <head>, SEO tags, theme bootstrapping, animated background
  styles/global.css    design tokens (colors, fonts, spacing) for dark and light themes
  scripts/main.ts      scroll reveal, card spotlight, count-up numbers
  pages/index.astro    assembles the sections
  pages/favicon.svg.ts favicon generated from your initials
```

To change the color scheme, edit the CSS variables at the top of `src/styles/global.css`
(`--violet`, `--cyan`, `--gradient`, …).
