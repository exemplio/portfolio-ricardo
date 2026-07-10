@AGENTS.md

# Portfolio · Ricardo Molina

A single-page, bilingual (ES/EN) personal portfolio for Ricardo Molina, a Mobile & Web developer. Dark theme, fully responsive, SEO-oriented, and meant to deploy on Vercel.

## Stack

- **Next.js 16.2** (App Router) — see `AGENTS.md`: this Next.js differs from training data, read the guides in `node_modules/next/dist/docs/` before writing framework code.
- **React 19.2**
- **Tailwind CSS 4** via `@tailwindcss/postcss` (no `tailwind.config` — configuration lives in `src/app/globals.css`)
- **TypeScript 5** (strict), path alias `@/*` → `src/*`
- Fonts: Geist Sans / Geist Mono via `next/font/google`

## Commands

```bash
npm run dev     # dev server at http://localhost:3000
npm run build   # production build
npm run start   # serve production build
npm run lint    # eslint (flat config, eslint.config.mjs)
```

## Architecture

- `src/app/layout.tsx` — root layout. Sets `<html lang="es">`, dark `bg-zinc-950` body, page metadata/OpenGraph, and wraps everything in `I18nProvider`.
- `src/app/page.tsx` — the whole page: composes section components in order (Navbar → Hero → Skills → Experience → Projects → Contact → Footer). There is only one route.
- `src/components/*` — one component per section. All are `"use client"` and read copy through the i18n context.
- `src/lib/i18n.tsx` — React context providing `{ locale, t, setLocale, toggleLocale }` via the `useI18n()` hook. Initial locale is detected from `localStorage` (key `portfolio-locale`), falling back to browser language, defaulting to `es`. Persists to `localStorage` and syncs `document.documentElement.lang`. Guards against hydration mismatch with a `hydrated` flag.
- `src/lib/translations.ts` — all UI copy for both locales, strongly typed by the `Translation` type. This is the source of truth for text and for the Experience/Projects data.
- `src/lib/profile.ts` — contact info, links, and the technical `skillCategories` list (non-translated data).

## Content model

- **Text (both languages)** lives in `translations.ts`. The `Translation` type enforces that `es` and `en` stay in sync — add a key to the type and both locales must implement it.
- **Experience entries** and **Project cards** are arrays inside `translations.ts` (`experience.items`, `projects.items`). Projects carry a `status: "active" | "completed" | "placeholder"` and `tags`.
- **Skills** are split between `profile.ts` (`skillCategories` — the actual tech items, e.g. Flutter/React) and `translations.ts` (`skills.categories` — the translated category labels). The `SkillCategoryKey` union ties them together.
- **Personal data / links** (name, email, phone, GitHub, LinkedIn, CV path) live in `profile.ts`. The CV PDF is served from `public/cv_ricardo_molina.pdf`.

## Conventions

- Section components are named exports (e.g. `export function Hero()`), imported into `page.tsx`.
- Navigation is anchor-based: sections have `id`s (`#home`, `#skills`, `#experience`, `#projects`, `#contact`) and the Navbar links to them.
- Styling is Tailwind utility classes inline. Design language: zinc-950 background, cyan→violet gradients for accents, `white/5`–`white/10` translucent surfaces and borders, rounded pills/cards, subtle blur backdrops.
- User-facing strings must go through `t.*` (the translations), never hardcoded in JSX — the site must work in both ES and EN.

## Common edits

- New project → add an entry to `projects.items` in **both** `es` and `en` in `translations.ts`.
- New skill / category → update `skillCategories` in `profile.ts` and the matching label in `skills.categories` (and `SkillCategoryKey` if it's a new category).
- Contact info / links → `profile.ts`.
