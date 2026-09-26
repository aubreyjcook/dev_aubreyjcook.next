const services = [
  {
    title: "Marketing sites",
    description:
      "Landing pages and small-business sites with a clear offer, fast pages, and a structure that is easy to update.",
  },
  {
    title: "Web applications",
    description:
      "Interfaces for products and internal tools, built with React and Next.js around how people actually use them.",
  },
  {
    title: "Ongoing work",
    description:
      "After launch: new pages, performance passes, and the smaller changes that keep a site useful.",
  },
];

const projects = [
  {
    name: "Practice site",
    type: "Marketing site",
    summary:
      "A portfolio for an independent studio, with case studies that stay readable on a phone.",
  },
  {
    name: "Booking desk",
    type: "Web app",
    summary:
      "A scheduling tool for a solo service business: availability, requests, and a simple admin view.",
  },
  {
    name: "Launch page",
    type: "Landing page",
    summary:
      "A single page for a product release, written so the offer is clear in one scroll.",
  },
];

export default function Home() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-16 md:pb-28 md:pt-24">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-teal-800">
          Available for freelance work
        </p>
        <h1 className="mt-5 max-w-3xl text-4xl font-medium tracking-tight text-balance sm:text-6xl sm:leading-[1.05]">
          Clear websites for people who have something to say.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-stone-600">
          I&apos;m Aubrey, a freelance web developer. I design and build
          marketing sites and web apps for independent businesses — fast to
          load, plain to maintain, and written in language your clients
          understand.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#contact"
            className="inline-flex h-11 items-center rounded-full bg-stone-950 px-5 text-sm font-medium text-stone-50 transition-colors hover:bg-stone-800"
          >
            Start a project
          </a>
          <a
            href="#work"
            className="inline-flex h-11 items-center rounded-full border border-stone-300 px-5 text-sm font-medium transition-colors hover:border-stone-950"
          >
            See typical work
          </a>
        </div>
      </section>

      <section id="services" className="border-t border-stone-200">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-stone-500">
            Services
          </h2>
          <ul className="mt-8 grid gap-10 md:grid-cols-3">
            {services.map((service, index) => (
              <li key={service.title}>
                <p className="font-mono text-xs text-stone-400">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-lg font-medium">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-stone-600">
                  {service.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="work" className="border-t border-stone-200">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-stone-500">
            Typical projects
          </h2>
          <ul className="mt-8 divide-y divide-stone-200 border-y border-stone-200">
            {projects.map((project) => (
              <li
                key={project.name}
                className="grid gap-2 py-6 sm:grid-cols-[12rem_1fr] sm:gap-8"
              >
                <div>
                  <h3 className="font-medium">{project.name}</h3>
                  <p className="mt-1 font-mono text-xs text-stone-500">
                    {project.type}
                  </p>
                </div>
                <p className="max-w-xl text-sm leading-6 text-stone-600">
                  {project.summary}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="about" className="border-t border-stone-200">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:py-20">
          <div>
            <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-stone-500">
              About
            </h2>
            <p className="mt-6 max-w-md text-lg leading-8 text-stone-800">
              I work remotely with freelancers, studios, and small teams who
              need a site that feels considered and stays easy to change after
              it ships.
            </p>
          </div>
          <div id="contact">
            <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-stone-500">
              Contact
            </h2>
            <p className="mt-6 max-w-md text-lg leading-8 text-stone-800">
              Tell me what you&apos;re building and when you&apos;d like to
              start.
            </p>
            <a
              href="mailto:hello@aubreyjcook.com"
              className="mt-6 inline-flex text-sm font-medium text-teal-800 underline decoration-teal-800/30 underline-offset-4 hover:decoration-teal-800"
            >
              hello@aubreyjcook.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
