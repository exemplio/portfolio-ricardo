import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n";
import { ThemeProvider } from "@/lib/theme";

// Runs before first paint to set the theme with no flash of the wrong colors:
// stored preference → system preference → dark.
const themeScript = `(function(){try{var t=localStorage.getItem('portfolio-theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.dataset.theme=t;}catch(e){document.documentElement.dataset.theme='dark';}})();`;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ricardo Molina · Mobile & Web Developer",
  description:
    "Portafolio de Ricardo Molina. Desarrollador de software especializado en aplicaciones móviles (Flutter, Kotlin) y web (React, Angular, Node.js).",
  keywords: [
    "Ricardo Molina",
    "Portfolio",
    "Flutter Developer",
    "Mobile Developer",
    "Web Developer",
    "React",
    "Angular",
    "Node.js",
  ],
  authors: [{ name: "Ricardo Molina" }],
  openGraph: {
    title: "Ricardo Molina · Mobile & Web Developer",
    description:
      "Desarrollador de software especializado en aplicaciones móviles y web.",
    type: "website",
    locale: "es_VE",
  },
  other: {
    // The site ships its own light/dark toggle, so force-dark extensions
    // like Dark Reader should stand down (this meta is Dark Reader's
    // official opt-out — it disables itself on pages that declare it).
    "darkreader-lock": "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      data-theme="dark"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <ThemeProvider>
          <I18nProvider>{children}</I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
