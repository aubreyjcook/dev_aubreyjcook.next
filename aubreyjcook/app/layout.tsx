import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aubrey J. Cook — Web Developer",
  description:
    "Web programmer developing web sites and web applications. Specializes in using React, Next.js, Typescript, and Tailwind. Experienced in front-end development, effective in full-stack development. Expert in JavaScript. Effective in PHP, MySQL, GraphQL, PostgreSQL, and WordPress. Familiar with Cursor, DeepSeek, and other AI tools. Available for freelance work.",
};

/*

const nav = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

*/

const nav = [
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-stone-50 text-stone-950">
        <header className="sticky top-0 z-10 border-b border-stone-200 bg-stone-50/90 backdrop-blur">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-3 px-6 py-4">
            <Link href="/" className="text-sm font-medium tracking-tight">
              Aubrey J. Cook
            </Link>
            <nav aria-label="Primary" className="flex flex-wrap gap-x-5 gap-y-2">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-stone-600 transition-colors hover:text-stone-950"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-stone-200">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-6 text-sm text-stone-500">
            <p>Aubrey J. Cook</p>
            <p>Website and Web Application Programmer</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
