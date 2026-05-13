"use client";

import { useI18n } from "@/lib/i18n";

export function Experience() {
  const { t } = useI18n();

  return (
    <section
      id="experience"
      className="relative scroll-mt-24 border-y border-white/5 bg-zinc-950/40 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-violet-400">
            {t.nav.experience}
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t.experience.title}
          </h2>
          <p className="mt-4 text-zinc-400">{t.experience.subtitle}</p>
        </div>

        <ol className="relative mx-auto mt-14 max-w-3xl border-l border-white/10 pl-8">
          {t.experience.items.map((job, idx) => (
            <li key={`${job.company}-${idx}`} className="relative mb-12 last:mb-0">
              <span className="absolute -left-[37px] grid h-4 w-4 place-items-center rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 ring-4 ring-zinc-950">
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-950" />
              </span>

              <article className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:border-white/20">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {job.role}
                    </h3>
                    <p className="text-sm text-zinc-400">{job.company}</p>
                  </div>
                  <span className="rounded-full border border-white/10 bg-zinc-900/60 px-3 py-1 text-xs font-medium text-zinc-300">
                    {job.period}
                  </span>
                </div>

                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-zinc-300">
                  {job.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex gap-3">
                      <span className="mt-2 h-1 w-1 flex-none rounded-full bg-cyan-400" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
