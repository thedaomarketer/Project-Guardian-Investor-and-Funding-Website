import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://projectguardian.example";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Project Guardian — Child Safety Technology for Investors",
    template: "%s | Project Guardian",
  },
  description:
    "Project Guardian is developing a modular connected child safety platform. Explore the concept, technology roadmap, business model and investment opportunity.",
  keywords: [
    "Project Guardian",
    "child safety technology",
    "child safety device",
    "child GPS safety",
    "emergency child safety technology",
    "connected child safety",
    "child safety wearable",
    "family safety technology",
  ],
  openGraph: {
    title: "Project Guardian — Child Safety Technology for Investors",
    description:
      "A modular connected safety platform concept, built into everyday form factors. Explore the technology, roadmap and investment opportunity.",
    url: siteUrl,
    siteName: "Project Guardian",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Project Guardian — Child Safety Technology for Investors",
    description:
      "A modular connected safety platform concept, built into everyday form factors.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
