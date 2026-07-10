"use client";

import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { profile, skillCategories } from "@/lib/profile";
import {
  cvLabels,
  cvRole,
  cvSummary,
  cvSkillOrder,
  cvEducation,
  cvLanguages,
  type CvVariant,
} from "@/lib/cv";

const stripUrl = (url: string) =>
  url.replace(/^https?:\/\//, "").replace(/\/$/, "");

export default function CvPage() {
  const { t, locale, setLocale } = useI18n();
  const [variant, setVariant] = useState<CvVariant>("mobile");
  const [withPhoto, setWithPhoto] = useState(false);
  const L = cvLabels[locale];

  const orderedSkills = cvSkillOrder[variant]
    .map((key) => ({
      label: t.skills.categories[key],
      items: skillCategories.find((c) => c.key === key)?.items ?? [],
    }))
    .filter((c) => c.items.length > 0);

  return (
    <div className="min-h-screen bg-zinc-200 py-8 print:bg-white print:py-0">
      {/* Toolbar — hidden when printing */}
      <div className="mx-auto mb-6 flex max-w-[820px] flex-wrap items-center justify-between gap-3 rounded-xl bg-zinc-900 px-4 py-3 text-sm text-zinc-200 print:hidden">
        <div className="flex items-center gap-2">
          <span className="text-xs uppercase tracking-wider text-zinc-500">
            {L.variant}
          </span>
          {(["mobile", "fullstack"] as CvVariant[]).map((v) => (
            <button
              key={v}
              type="button"
              onClick={() => setVariant(v)}
              className={`rounded-md px-3 py-1 text-xs font-medium transition-colors ${
                variant === v
                  ? "bg-white text-zinc-900"
                  : "bg-white/10 text-zinc-300 hover:bg-white/20"
              }`}
            >
              {L.variantNames[v]}
            </button>
          ))}
          <span className="ml-2 text-xs uppercase tracking-wider text-zinc-500">
            {L.photo}
          </span>
          <button
            type="button"
            onClick={() => setWithPhoto((p) => !p)}
            className={`rounded-md px-3 py-1 text-xs font-medium transition-colors ${
              withPhoto
                ? "bg-white text-zinc-900"
                : "bg-white/10 text-zinc-300 hover:bg-white/20"
            }`}
          >
            {withPhoto ? L.photoOn : L.photoOff}
          </button>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs uppercase tracking-wider text-zinc-500">
            {L.language}
          </span>
          {(["es", "en"] as const).map((lng) => (
            <button
              key={lng}
              type="button"
              onClick={() => setLocale(lng)}
              className={`rounded-md px-3 py-1 text-xs font-medium uppercase transition-colors ${
                locale === lng
                  ? "bg-white text-zinc-900"
                  : "bg-white/10 text-zinc-300 hover:bg-white/20"
              }`}
            >
              {lng}
            </button>
          ))}
          <button
            type="button"
            onClick={() => window.print()}
            className="ml-2 rounded-md bg-emerald-500 px-3 py-1 text-xs font-semibold text-white transition-colors hover:bg-emerald-400"
          >
            {L.print}
          </button>
        </div>
      </div>

      {/* The CV "paper" */}
      <article className="mx-auto max-w-[820px] bg-white px-10 py-10 text-[13px] leading-relaxed text-zinc-700 shadow-xl print:max-w-none print:px-0 print:py-0 print:shadow-none">
        {/* Header */}
        <header className="flex items-start justify-between gap-6 border-b border-zinc-300 pb-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900">
              {profile.name}
            </h1>
            <p className="mt-1 text-sm font-medium text-zinc-600">
              {cvRole[variant][locale]}
            </p>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-zinc-600">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <span>{profile.phone}</span>
              <span>{profile.location}</span>
              <a href={`https://${profile.website}`}>{profile.website}</a>
              <a href={profile.linkedin}>{stripUrl(profile.linkedin)}</a>
              <a href={profile.github}>{stripUrl(profile.github)}</a>
            </div>
          </div>
          {withPhoto && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={profile.photo}
              alt={profile.name}
              className="h-24 w-24 shrink-0 rounded-full object-cover"
            />
          )}
        </header>

        <Section title={L.profile}>
          <p>{cvSummary[variant][locale]}</p>
        </Section>

        <Section title={L.experience}>
          <div className="space-y-4">
            {t.experience.items.map((item, i) => (
              <div key={`${item.company}-${i}`}>
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-semibold text-zinc-900">
                    {item.role} ·{" "}
                    <span className="font-normal text-zinc-600">
                      {item.company}
                    </span>
                  </h3>
                  <span className="shrink-0 text-xs text-zinc-500">
                    {item.period}
                  </span>
                </div>
                <ul className="mt-1 list-disc space-y-0.5 pl-5">
                  {item.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section title={L.projects}>
          <div className="space-y-2.5">
            {t.projects.items.map((p, i) => (
              <div key={`${p.title}-${i}`}>
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-semibold text-zinc-900">{p.title}</h3>
                  <span className="shrink-0 text-xs text-zinc-500">
                    {p.status === "active" ? t.projects.inProgress : p.period}
                  </span>
                </div>
                <p>{p.description}</p>
                <p className="mt-0.5 text-xs text-zinc-500">
                  {p.tags.join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section title={L.education}>
          {cvEducation[locale].map((e, i) => (
            <div key={i} className="flex items-baseline justify-between gap-4">
              <div>
                <h3 className="font-semibold text-zinc-900">{e.institution}</h3>
                <p>{e.degree}</p>
              </div>
              <span className="shrink-0 text-xs text-zinc-500">{e.period}</span>
            </div>
          ))}
        </Section>

        <Section title={L.skills}>
          <ul className="space-y-1">
            {orderedSkills.map((cat) => (
              <li key={cat.label}>
                <span className="font-semibold text-zinc-900">
                  {cat.label}:
                </span>{" "}
                {cat.items.join(", ")}
              </li>
            ))}
          </ul>
        </Section>

        <Section title={L.additional}>
          <p>
            <span className="font-semibold text-zinc-900">{L.languages}:</span>{" "}
            {cvLanguages[locale].join(" · ")}
          </p>
        </Section>
      </article>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-5 break-inside-avoid">
      <h2 className="mb-2 border-b border-zinc-200 pb-1 text-[11px] font-bold uppercase tracking-widest text-zinc-500">
        {title}
      </h2>
      {children}
    </section>
  );
}
