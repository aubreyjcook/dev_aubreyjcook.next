// app/resume/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume — Aubrey J. Cook",
  description:
    "Resume for Aubrey J. Cook, web developer specializing in React, Next.js, TypeScript, and Tailwind CSS.",
};

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <p className="text-xs uppercase tracking-[0.18em] text-mist">
        <span className="text-glow">$</span> cat resume.txt
      </p>
      <h1 className="mt-5 text-4xl font-medium tracking-tight text-balance sm:text-5xl">
        Aubrey J. Cook
        <span className="term-cursor" aria-hidden="true" />
      </h1>
      <p className="mt-4 text-lg leading-8 text-fog">
        Web developer building fast, maintainable sites and web applications.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="/aubrey-cook-resume.pdf"
          download
          className="inline-flex h-10 items-center border border-glow/50 bg-glow/10 px-4 text-sm text-glow transition-colors hover:bg-glow hover:text-void"
        >
          ./download-pdf
        </a>
        <a
          href="mailto:aubreyjcook.contact@gmail.com"
          className="inline-flex h-10 items-center border border-line px-4 text-sm text-ice transition-colors hover:border-glow/60 hover:text-glow"
        >
          ./email
        </a>
      </div>

      {/* Sections below — Experience, Skills, Education, etc. */}
      <section className="mt-16 border-t border-line pt-10">
        <h2 className="text-xs uppercase tracking-[0.18em] text-mist">
          <span className="text-glow">$</span> experience
        </h2>
        {/* ... */}
      </section>

      <section className="mt-16 border-t border-line pt-10">
        <h2 className="text-xs uppercase tracking-[0.18em] text-mist">
          <span className="text-glow">$</span> skills
        </h2>
        {/* ... */}
      </section>
    </div>
  );
}
