"use client";

import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { profile } from "@/lib/profile";

export function Navbar() {
  const { t, locale, toggleLocale } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#skills", label: t.nav.skills },
    { href: "#experience", label: t.nav.experience },
    { href: "#projects", label: t.nav.projects },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-zinc-950/70 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          className="group flex items-center gap-2 text-sm font-semibold tracking-tight"
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500 text-zinc-950 shadow-lg shadow-cyan-500/20 transition-transform group-hover:scale-105">
            {profile.initials}
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-md px-3 py-2 text-sm text-zinc-300 transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleLocale}
            aria-label="Toggle language"
            className="flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-zinc-200 transition-colors hover:border-white/20 hover:bg-white/10"
          >
            <span
              className={
                locale === "es" ? "text-white" : "text-zinc-500"
              }
            >
              ES
            </span>
            <span className="text-zinc-600">/</span>
            <span
              className={
                locale === "en" ? "text-white" : "text-zinc-500"
              }
            >
              EN
            </span>
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            className="grid h-9 w-9 place-items-center rounded-md border border-white/10 bg-white/5 text-white md:hidden"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {mobileOpen ? (
                <>
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </>
              ) : (
                <>
                  <path d="M4 6h16" />
                  <path d="M4 12h16" />
                  <path d="M4 18h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-zinc-950/95 backdrop-blur-xl md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-6 py-3">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm text-zinc-200 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
