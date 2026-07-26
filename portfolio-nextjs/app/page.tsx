const currentLinks = [
  {
    href: "https://bradleymatera.dev/",
    title: "Current website",
    description: "My active website, current positioning, and contact information.",
  },
  {
    href: "https://bradleymatera.dev/services/",
    title: "Services",
    description: "Current web design, development, SEO, accessibility, and support services.",
  },
  {
    href: "https://bradleymatera.dev/work/",
    title: "Work and case studies",
    description: "Current project work, outcomes, and examples of how I approach client problems.",
  },
  {
    href: "https://bradleymatera.dev/demos/",
    title: "Industry demos",
    description: "Purpose-built website concepts for the industries and businesses I serve.",
  },
  {
    href: "https://bradleymatera.dev/pricing/",
    title: "Pricing",
    description: "Current packages, pricing guidance, and ways to work with me.",
  },
  {
    href: "https://bradleymatera.dev/recruiter/",
    title: "Technical portfolio",
    description: "Developer experience, technical background, and information for recruiters.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07101f] text-slate-100">
      <section className="mx-auto w-full max-w-5xl px-5 py-14 sm:px-8 sm:py-20 lg:py-24">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-sm font-semibold tracking-wide text-amber-200">
            Archived portfolio · Deprecated July 2026
          </p>

          <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-6xl">
            This is my old portfolio.
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-300 sm:text-xl">
            This GitHub Pages site is an early portfolio from a previous stage of my
            education and development work. I keep it online only as a historical
            archive. It no longer represents my current services, design standards,
            projects, pricing, or business.
          </p>

          <div className="mt-8 rounded-2xl border border-red-300/25 bg-red-400/10 p-5 text-red-100">
            <p className="font-bold">Do not use this page as my current portfolio.</p>
            <p className="mt-2 leading-7 text-red-100/85">
              For accurate information, examples, and ways to work with me, use
              bradleymatera.dev.
            </p>
          </div>

          <a
            href="https://bradleymatera.dev/"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-xl bg-cyan-300 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-200 focus:outline-none focus:ring-4 focus:ring-cyan-200/50"
          >
            Visit my current website
            <span aria-hidden="true" className="ml-2">→</span>
          </a>
        </div>

        <section aria-labelledby="current-links" className="mt-16">
          <h2 id="current-links" className="text-2xl font-bold text-white sm:text-3xl">
            Current links
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {currentLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-0.5 hover:border-cyan-200/40 hover:bg-white/[0.07] focus:outline-none focus:ring-4 focus:ring-cyan-200/40"
              >
                <h3 className="font-bold text-cyan-200">
                  {link.title}
                  <span aria-hidden="true" className="ml-2 transition group-hover:translate-x-1">
                    →
                  </span>
                </h3>
                <p className="mt-2 leading-7 text-slate-400">{link.description}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="mt-16 border-t border-white/10 pt-8">
          <h2 className="text-xl font-bold text-white">Why this site was retired</h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-400">
            The original portfolio was useful for documenting earlier learning and
            projects, but its content and presentation became outdated. My current
            website is the single source of truth so visitors and search engines do
            not confuse old student-era material with the business and work I offer
            today.
          </p>
          <p className="mt-5 text-sm text-slate-500">
            Bradley Matera · Loves Park and Rockford, Illinois
          </p>
        </section>
      </section>
    </main>
  );
}
