"use client";

import { useI18n } from "@/lib/i18n";

const statusStyles: Record<string, string> = {
  active: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
  completed: "border-sky-400/30 bg-sky-400/10 text-sky-300",
};

export function Projects() {
  const { t } = useI18n();

  return (
    <section id="projects" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
            {t.nav.projects}
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t.projects.title}
          </h2>
          <p className="mt-4 text-zinc-400">{t.projects.subtitle}</p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.projects.items.map((project, idx) => (
            <article
              key={`${project.title}-${idx}`}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
            >
              <div className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity group-hover:opacity-100">
                <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-gradient-to-br from-cyan-500/20 to-violet-500/20 blur-3xl" />
              </div>

              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold text-white">
                  {project.title}
                </h3>
                <span
                  className={`rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${statusStyles[project.status]}`}
                >
                  {project.status === "active"
                    ? t.projects.inProgress
                    : project.period}
                </span>
              </div>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
                {project.description}
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-white/10 bg-zinc-900/60 px-2.5 py-1 text-[11px] font-medium text-zinc-300"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
