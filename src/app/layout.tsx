import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col bg-zinc-950 text-zinc-100">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
