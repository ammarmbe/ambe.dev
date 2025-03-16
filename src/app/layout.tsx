import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { unstable_ViewTransition as ViewTransition } from "react";
import Header from "./_components/header";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ambe.dev"),
  title: {
    default: "Ammar Elbehery",
    template: `%s | ${"Ammar Elbehery"}`,
  },
  description: "Ammar Elbehery - Full-stack web developer",
  keywords:
    "Ammar Elbehery, Ammar, Elbehery, web developer, full-stack, full-stack web developer, software engineer, software developer, web development, software development, react",
  openGraph: {
    title: "Ammar Elbehery",
    description: "Ammar Elbehery - Full-stack web developer",
    url: "./",
    siteName: "Ammar Elbehery",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Ammar Elbehery",
    card: "summary_large_image",
  },
  icons: [
    {
      url: "/images/hero.png",
      rel: "icon",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="overflow-auto" lang="en">
      <body
        className={`flex min-h-screen flex-col bg-neutral-50 text-neutral-950 antialiased [scrollbar-gutter:stable] dark:bg-neutral-950 dark:text-neutral-50 ${inter.className}`}
      >
        <ViewTransition>
          <Header />
          {children}
        </ViewTransition>
      </body>
    </html>
  );
}
