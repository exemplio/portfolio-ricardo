"use client";

import { useI18n } from "@/lib/i18n";
import { profile } from "@/lib/profile";

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-center text-sm text-zinc-500 sm:flex-row sm:text-left">
        <p>
          © {year} {profile.name}. {t.footer.rights}
        </p>
        <p className="text-xs text-zinc-600">{t.footer.builtWith}</p>
      </div>
    </footer>
  );
}
