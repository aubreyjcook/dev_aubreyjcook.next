const services = [
  {
    title: "Static Web Sites",
    description:
      "Landing pages and small-business sites with a clear offer, fast pages, and a structure that is easy to update.",
  },
  {
    title: "Server-Side-Rendered Websites & Web Applications",
    description:
      "Interfaces for products and internal tools, built with React and Next.js around how people actually use them.",
  },
  {
    title: "Updates and Maintenance",
    description:
      "After launch: new pages, performance passes, and the smaller changes that keep a site useful.",
  },
];

const projects = [
  {
    name: "aubreyjcook.com",
    type: "personal",
    summary:
      "Personal website built using Next.js.",
  },
  {
    name: "CSI Conference",
    type: "Static Web Site",
    summary:
      "Conference site built using Gatsby",
  },
  {
    name: "Center for Inquiry",
    type: "WordPress Web Site",
    summary:
      "WordPress site built for a non-profit organization.",
  },
  {
    name: "Skeptical Inquirer",
    type: "WordPress Web Site",
    summary:
      "WordPress site built for a non-profit organization.",
  },
  {
    name: "Free Inquirer",
    type: "WordPress Web Site",
    summary:
      "WordPress site built for a non-profit organization.",
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
          Valuable solutions for those seeking web sites and web applications.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-stone-600">
          Aubrey Cook is a professional programmer with experience in Web Programming and Software Engineering. Aubrey&apos;s main areas of experience are in the direct usage of programming languages, especially Javascript and Typescript. Aubrey also has practical experience in the usage of frameworks and libraries such as React, Next.js, and TailwindCSS.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#contact"
            className="inline-flex h-11 items-center rounded-full bg-stone-950 px-5 text-sm font-medium text-stone-50 transition-colors hover:bg-stone-800"
          >
            Get in touch
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

      <section id="portfolio" className="border-t border-stone-200">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-stone-500">
            Portfolio
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
              Aubrey&apos;s experience with using computers begins at a very early age, starting with memories of using an Apple IIe alone in a basement of a school in the late afterhours. Aubrey never forgot the experience of using the terminal environment on these early personal computers. It shaped the knowledge and understanding Aubrey had about technology for years to come.

Growing up, Aubrey had access to a Windows 98 based PC, and later learned to install operating systems with Windows XP and early Linux distributions.

A little while after graduating with a GED, Aubrey became interested in programming languages like C++, but didn&apos;t start formal learning yet.

Aubrey first assembled a computer from separate components in the era of Windows 7, primarily using it for the purposes of gaming.

After starting to attend Mchenry County Community College, Aubrey first began to learn programming formally with C++ and came to understand the fundamentals of Object-Oriented Programming

Over the years, Aubrey began to dabble in Web-Programming Languages, especially PHP and Javascript, and began a long process of self-learning starting in Community College.

As Aubrey continued to progress, React.JS became the primary framework for front-end development that Aubrey would leverage. Aubrey developed a mental model of building primarily with components, and thinking in terms of reusable components as Javascript functions after gaining more experience with React.

Towards the later stages of Aubrey&apos;s professional skill development, Aubrey began to favor Next.js as an all-encompassing solution for both web sites and web apps and now focuses primarily on this framework to address most web development challenges.
            </p>
          </div>
          <div id="contact">
            <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-stone-500">
              Contact
            </h2>
            <p className="mt-6 max-w-md text-lg leading-8 text-stone-800">
              Make contact to request services for building a web site or web application. Or to update an existing one.
            </p>
            <a
              href="mailto:aubreyjcook.contact@gmail.com"
              className="mt-6 inline-flex text-sm font-medium text-teal-800 underline decoration-teal-800/30 underline-offset-4 hover:decoration-teal-800"
            >
              aubreyjcook.contact@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
