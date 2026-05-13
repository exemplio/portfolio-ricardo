"use client";

import { useI18n } from "@/lib/i18n";
import { skillCategories } from "@/lib/profile";

const categoryIcons: Record<string, string> = {
  mobile: "M",
  web: "W",
  database: "D",
  devops: "G",
  agile: "A",
};

const categoryAccents: Record<string, string> = {
  mobile: "from-cyan-400/30 to-cyan-400/0",
  web: "from-violet-400/30 to-violet-400/0",
  database: "from-emerald-400/30 to-emerald-400/0",
  devops: "from-amber-400/30 to-amber-400/0",
  agile: "from-pink-400/30 to-pink-400/0",
};

export function Skills() {
  const { t } = useI18n();

  return (
    <section id="skills" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            {t.nav.skills}
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t.skills.title}
          </h2>
          <p className="mt-4 text-zinc-400">{t.skills.subtitle}</p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.key}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
            >
              <div
                className={`pointer-events-none absolute -top-12 -right-12 h-40 w-40 rounded-full bg-gradient-to-br ${categoryAccents[category.key]} blur-2xl transition-opacity group-hover:opacity-100`}
              />
              <div className="relative">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-zinc-900/80 font-mono text-sm font-semibold text-zinc-200">
                    {categoryIcons[category.key]}
                  </span>
                  <h3 className="text-lg font-semibold text-white">
                    {t.skills.categories[category.key]}
                  </h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-white/10 bg-zinc-900/60 px-3 py-1 text-xs font-medium text-zinc-200"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
