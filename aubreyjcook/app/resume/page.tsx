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
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-teal-800">
        Resume
      </p>
      <h1 className="mt-5 text-4xl font-medium tracking-tight text-balance sm:text-5xl">
        Aubrey J. Cook
      </h1>
      <p className="mt-4 text-lg leading-8 text-stone-600">
        Web developer building fast, maintainable sites and web applications.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="/aubrey-cook-resume.pdf"
          download
          className="inline-flex h-11 items-center rounded-full bg-stone-950 px-5 text-sm font-medium text-stone-50 transition-colors hover:bg-stone-800"
        >
          Download PDF
        </a>
        <a
          href="mailto:aubreyjcook.contact@gmail.com"
          className="inline-flex h-11 items-center rounded-full border border-stone-300 px-5 text-sm font-medium transition-colors hover:border-stone-950"
        >
          Email me
        </a>
      </div>

      {/* Sections below — Experience, Skills, Education, etc. */}
      <section className="mt-16 border-t border-stone-200 pt-10">
        <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-stone-500">
          Experience
        </h2>
        {/* ... */}
      </section>

      <section className="mt-16 border-t border-stone-200 pt-10">
        <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-stone-500">
          Skills
        </h2>
        {/* ... */}
      </section>
    </div>
  );
}