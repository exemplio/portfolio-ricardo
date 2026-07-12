"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { translations, type Locale, type Translation } from "./translations";

type I18nContextValue = {
  locale: Locale;
  t: Translation;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
};

const I18nContext = createContext<I18nContextValue | null>(null);

const STORAGE_KEY = "portfolio-locale";

function detectInitialLocale(): Locale {
  if (typeof window === "undefined") return "es";
  const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
  if (stored === "es" || stored === "en" || stored === "pt") return stored;
  const browser = window.navigator.language?.toLowerCase() ?? "";
  return browser.startsWith("en") ? "en" : "es";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("es");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setLocaleState(detectInitialLocale());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(STORAGE_KEY, locale);
    document.documentElement.lang = locale;
  }, [locale, hydrated]);

  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      t: translations[locale],
      setLocale: (next) => setLocaleState(next),
      toggleLocale: () => setLocaleState((prev) => (prev === "es" ? "en" : "es")),
    }),
    [locale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used inside <I18nProvider>");
  }
  return ctx;
}
