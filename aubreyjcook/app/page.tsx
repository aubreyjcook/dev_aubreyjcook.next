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
    type: "Personal Website",
    summary: "Personal website built using Next.js.",
    href: "https://aubreyjcook.com",
  },
  {
    name: "CSI Conference",
    type: "Static Web Site",
    summary: "Conference site built using Gatsby",
    href: "https://csiconference.org",
  },
  {
    name: "Center for Inquiry",
    type: "WordPress Web Site",
    summary: "WordPress site built for a non-profit organization.",
    href: "https://centerforinquiry.org",
  },
  {
    name: "Skeptical Inquirer",
    type: "WordPress Web Site",
    summary: "WordPress site built for a non-profit organization.",
    href: "https://skepticalinquirer.org",
  },
  {
    name: "Free Inquirer",
    type: "WordPress Web Site",
    summary: "WordPress site built for a non-profit organization.",
    href: "https://secularhumanism.org",
  },
];

export default function Home() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-10 md:pb-24 md:pt-16">
        <div className="overflow-hidden rounded-md border border-line bg-panel/80 shadow-[0_0_80px_rgba(92,236,255,0.07)]">
          <div className="flex items-center gap-2 border-b border-line bg-void/70 px-4 py-2.5">
            <span className="size-2 rounded-full bg-line" />
            <span className="size-2 rounded-full bg-line" />
            <span className="size-2 rounded-full bg-glow shadow-[0_0_8px_rgba(92,236,255,0.85)]" />
            <span className="ml-3 text-xs text-mist">bash — aubreyjcook.com</span>
          </div>
          <div className="px-5 py-8 sm:px-8 sm:py-10">
            <p className="text-xs uppercase tracking-[0.18em] text-mist">
              <span className="text-glow">$</span> status
            </p>
            <p className="mt-3 text-sm text-glow">available for freelance work</p>
            <h1 className="mt-6 max-w-3xl text-3xl font-medium tracking-tight text-balance sm:text-5xl sm:leading-[1.12]">
              Valuable solutions for those seeking web sites and web applications.
              <span className="term-cursor" aria-hidden="true" />
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-fog sm:text-lg sm:leading-8">
              Aubrey Cook is a professional programmer with experience in Web Programming and Software Engineering. Aubrey&apos;s main areas of experience are in the direct usage of programming languages, especially Javascript and Typescript. Aubrey also has practical experience in the usage of frameworks and libraries such as React, Next.js, and TailwindCSS.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex h-10 items-center border border-glow/50 bg-glow/10 px-4 text-sm text-glow transition-colors hover:bg-glow hover:text-void"
              >
                ./contact
              </a>
              <a
                href="#portfolio"
                className="inline-flex h-10 items-center border border-line px-4 text-sm text-ice transition-colors hover:border-glow/60 hover:text-glow"
              >
                ./portfolio
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="scroll-mt-32 border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <h2 className="text-xs uppercase tracking-[0.18em] text-mist">
            <span className="text-glow">$</span> services --list
          </h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {services.map((service, index) => (
              <li
                key={service.title}
                className="border border-line bg-panel/70 p-5 transition-colors hover:border-glow/40"
              >
                <p className="text-xs text-glow">
                  [{String(index + 1).padStart(2, "0")}]
                </p>
                <h3 className="mt-3 text-base font-medium">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-mist">
                  {service.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="portfolio" className="scroll-mt-32 border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <h2 className="text-xs uppercase tracking-[0.18em] text-mist">
            <span className="text-glow">$</span> ls ./portfolio
          </h2>
          <ul className="mt-8 divide-y divide-line border border-line bg-panel/50">
            {projects.map((project) => (
              <li
                key={project.name}
                className="grid gap-2 px-5 py-5 transition-colors hover:bg-glow/5 sm:grid-cols-[14rem_1fr] sm:gap-8"
              >
                <div>
                  <h3 className="font-medium">
                    {project.href ? (
                      <a
                        href={project.href}
                        rel="noopener noreferrer"
                        className="underline decoration-glow/30 underline-offset-4 transition-colors hover:text-glow hover:decoration-glow"
                      >
                        {project.name}
                      </a>
                    ) : (
                      project.name
                    )}
                  </h3>
                  <p className="mt-1 text-xs text-mist">{project.type}</p>
                </div>
                <p className="max-w-xl text-sm leading-6 text-fog">
                  {project.summary}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="about" className="scroll-mt-32 border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:py-20">
          <div>
            <h2 className="text-xs uppercase tracking-[0.18em] text-mist">
              <span className="text-glow">$</span> cat about.txt
            </h2>
            <div className="mt-6 max-w-md space-y-6 border-l border-glow/30 pl-5 text-base leading-7 text-fog sm:text-lg sm:leading-8">
              <p>
                Programmer with an exceptional drive to deeply understand fundamental systems of technology and how they are integrated in our daily lives. Focus on using comprehensive mental models to understand and solve problems, generating value for others.
              </p>
              <p>
                Mainly experienced in JavaScript, with a preference for TypeScript over vanilla JS. Highly experienced in HTML, and CSS. Equipped with a strong mental model of the fundamental building blocks of the web. Experienced in React.JS as a solution for developing most front-end applications. Familiar with Next.JS, utilizing it as a well-rounded solution for any kind of website or modern web application.
              </p>
              <p>
                Other areas of experience are Node.JS, PHP, WordPress, and several other frameworks, libraries, and run-times. Preference for Tailwind.CSS for styling on the web. Possesses an overall familiarity with frameworks as a versatile solution to many problems, without over-reliance.
              </p>
              <p>
                Interested in Rust, and cybersecurity. Preferred operating system is Linux, especially ParrotOS. Familiar with Windows, and Unix.
              </p>
            </div>
          </div>
          <div id="contact" className="scroll-mt-32">
            <h2 className="text-xs uppercase tracking-[0.18em] text-mist">
              <span className="text-glow">$</span> contact --open
            </h2>
            <p className="mt-6 max-w-md text-base leading-7 text-fog sm:text-lg sm:leading-8">
              Make contact to request services for building a web site or web application. Or to update an existing one.
            </p>
            <a
              href="mailto:aubreyjcook.contact@gmail.com"
              className="mt-6 inline-flex text-sm text-glow underline decoration-glow/30 underline-offset-4 hover:decoration-glow"
            >
              aubreyjcook.contact@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
