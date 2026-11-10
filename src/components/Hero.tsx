import { ArrowRight } from "lucide-react";
import { HeroVisual } from "./visuals/HeroVisual";
import { Reveal } from "./Reveal";

const metrics = [
  { value: "03", label: "Ventures in Development" },
  { value: "03", label: "Distinct Industry Verticals" },
  { value: "01", label: "Shared Vision" },
  { value: "Multiple", label: "Consumer-Focused Opportunities", small: true },
];

export function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="relative overflow-hidden pt-[76px]">
      {/* Architectural rule lines in the background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="container-x relative h-full">
          <div className="absolute inset-y-0 left-[1.25rem] w-px bg-line/70 md:left-[2.5rem] xl:left-[3.5rem]" />
          <div className="absolute inset-y-0 right-[1.25rem] w-px bg-line/70 md:right-[2.5rem] xl:right-[3.5rem]" />
        </div>
      </div>

      <div className="container-x relative grid gap-14 pb-12 pt-10 md:pt-14 lg:grid-cols-12 lg:gap-10 lg:pb-16 lg:pt-16">
        <div className="flex flex-col justify-center lg:col-span-7 lg:pr-6">
          <Reveal>
            <p className="eyebrow flex items-center gap-4 text-brand">
              <span aria-hidden className="h-px w-10 bg-accent" />
              A Multi-Venture Business Group
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h1
              id="hero-title"
              className="display mt-6 text-[clamp(2.75rem,6vw,6rem)] text-ink"
            >
              Building Businesses.
              <span className="mt-1 block text-stone">
                Creating What&rsquo;s Next.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 max-w-[34rem] text-[17px] leading-[1.75] text-stone">
              Tech Prime Global is a multi-venture business group focused on building
              technology-enabled businesses that simplify everyday experiences, unlock market
              opportunities, and create lasting value.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#ventures"
                className="group inline-flex items-center justify-center gap-3 bg-brand px-7 py-4 text-[12px] font-semibold tracking-[0.16em] text-paper uppercase transition-colors duration-300 hover:bg-brand-deep"
              >
                Explore Our Ventures
                <ArrowRight aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 border border-ink/20 px-7 py-4 text-[12px] font-semibold tracking-[0.16em] text-ink uppercase transition-colors duration-300 hover:border-brand hover:text-brand"
              >
                Connect With Us
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="lg:col-span-5">
          <div className="mx-auto max-w-[400px] lg:ml-auto">
            <HeroVisual />
          </div>
        </Reveal>
      </div>

      {/* Portfolio at a glance */}
      <div className="border-y border-line bg-paper/60">
        <dl className="container-x grid grid-cols-2 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <div
              key={m.label}
              className={`flex flex-col gap-3 py-6 md:py-7 ${
                i % 2 === 1 ? "border-l border-line pl-5 md:pl-8" : ""
              } ${i === 2 ? "border-t border-line lg:border-l lg:border-t-0 lg:pl-8" : ""} ${
                i === 3 ? "border-t border-line lg:border-t-0" : ""
              }`}
            >
              <dt className="order-2 text-[12px] leading-snug tracking-[0.04em] text-stone md:text-[13px]">
                {m.label}
              </dt>
              <dd
                className={`display order-1 text-brand ${
                  m.small ? "text-[2rem] md:text-[2.6rem]" : "text-[2.6rem] md:text-[3.4rem]"
                }`}
              >
                {m.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
