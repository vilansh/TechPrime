import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

export function Vision() {
  return (
    <section id="vision" aria-labelledby="vision-title" className="grain relative overflow-hidden bg-brand text-paper">
      {/* Architectural arcs */}
      <svg
        aria-hidden
        viewBox="0 0 800 800"
        className="pointer-events-none absolute -right-48 top-1/2 hidden h-[900px] w-[900px] -translate-y-1/2 lg:block"
      >
        {[380, 320, 260, 200].map((r, i) => (
          <circle key={r} cx="400" cy="400" r={r} fill="none" stroke="#D4E27A" strokeOpacity={0.1 + i * 0.05} />
        ))}
      </svg>

      <div className="container-x relative py-16 md:py-28">
        <Reveal>
          <SectionLabel index="04" label="Our Vision" tone="dark" />
        </Reveal>

        <Reveal delay={0.08}>
          <h2 id="vision-title" className="display mt-6 max-w-5xl text-[clamp(2.6rem,6.2vw,6rem)]">
            Built Around Opportunities.{" "}
            <em className="text-accent-soft">Driven By Execution.</em>
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-8 md:mt-14 md:grid-cols-12">
          <Reveal delay={0.12} className="md:col-span-5">
            <p className="font-display text-[1.45rem] leading-[1.55] text-paper md:text-[1.65rem]">
              Our vision is to build a portfolio of independent, customer-focused businesses that
              address meaningful market opportunities.
            </p>
          </Reveal>
          <Reveal delay={0.18} className="md:col-span-6 md:col-start-7">
            <div className="space-y-6 text-[16px] leading-[1.85] text-paper/75">
              <p>
                We aim to combine technology, business operations, and market understanding to create
                platforms that deliver real utility while establishing sustainable commercial models.
              </p>
              <p>
                We see every venture as an opportunity to build something valuable, scalable, and
                enduring.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 border-t border-accent/40 pt-10 md:mt-16 md:pt-12">
            <p className="display max-w-5xl text-[clamp(1.9rem,3.8vw,3.4rem)] leading-[1.15]">
              Different markets. Different challenges.{" "}
              <span className="text-accent-soft">A shared commitment to building better businesses.</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
