import { ArrowRight } from "lucide-react";
import { PortfolioDeck } from "./visuals/PortfolioDeck";
import { Reveal } from "./Reveal";

const metrics = [
  { value: "03", label: "Ventures in development" },
  { value: "03", label: "Distinct industry verticals" },
  { value: "01", label: "Shared vision" },
  { value: "Multiple", label: "Consumer-focused opportunities" },
];

const verticals = ["Mobility", "Entertainment", "Healthcare"];

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="grain relative isolate overflow-hidden bg-brand-ink pt-[76px] text-paper"
    >
      {/* Atmosphere: soft light sources + a fading architectural grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-40 -top-40 h-[640px] w-[640px] rounded-full bg-[#1E5C5A]/50 blur-[120px]" />
        <div className="absolute -left-32 bottom-0 h-[420px] w-[420px] rounded-full bg-accent-soft/10 blur-[110px]" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(#F8F9F7 1px, transparent 1px), linear-gradient(90deg, #F8F9F7 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 75%)",
          }}
        />
      </div>

      <div className="container-x grid items-center gap-10 pb-12 pt-10 md:pt-14 lg:min-h-[640px] lg:grid-cols-12 lg:gap-6 lg:pb-14 lg:pt-10">
        <div className="lg:col-span-6">
          <Reveal>
            <p className="inline-flex items-center gap-2.5 rounded-full border border-paper/15 bg-paper/[0.04] py-1.5 pl-2 pr-4 text-[12px] text-paper/75 backdrop-blur-sm">
              <span className="rounded-full bg-accent-soft px-2 py-0.5 text-[10px] font-semibold tracking-[0.12em] text-brand-ink uppercase">
                Group
              </span>
              <span>
                A multi-venture business group<span className="hidden sm:inline"> · Gurgaon, India</span>
              </span>
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 id="hero-title" className="display mt-7 text-[clamp(2.9rem,6vw,5.75rem)] !leading-[0.98]">
              <span className="block">Building</span>
              <span className="block">Businesses.</span>
              <span className="block bg-gradient-to-r from-accent-soft via-[#B9D98A] to-[#7FC7B6] bg-clip-text pb-1 text-transparent">
                Creating
                <br />
                What&rsquo;s Next.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 max-w-[33rem] text-[17px] leading-[1.7] text-paper/70">
              Tech Prime Global is a multi-venture business group focused on building
              technology-enabled businesses that simplify everyday experiences, unlock market
              opportunities, and create lasting value.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#ventures"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-accent-soft px-7 py-4 text-[13px] font-semibold text-brand-ink transition-colors duration-300 hover:bg-paper"
              >
                Explore Our Ventures
                <ArrowRight aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-paper/25 px-7 py-4 text-[13px] font-semibold text-paper transition-colors duration-300 hover:border-paper/60 hover:bg-paper/5"
              >
                Connect With Us
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <ul className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] tracking-[0.12em] uppercase sm:gap-x-5 sm:text-[12px] sm:tracking-[0.14em]">
              <li className="hidden text-paper/40 sm:block">Building in</li>
              {verticals.map((v, i) => (
                <li key={v} className="flex items-center gap-4 sm:gap-5">
                  {i > 0 && <span aria-hidden className="size-1 rounded-full bg-accent-soft/60" />}
                  <span className="text-paper/80">{v}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="lg:col-span-6">
          <PortfolioDeck />
        </div>
      </div>

      {/* Portfolio at a glance */}
      <div className="border-t border-paper/10 bg-black/15">
        <dl className="container-x grid grid-cols-2 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <div
              key={m.label}
              className={`flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:gap-3 md:py-6 ${
                i % 2 === 1 ? "border-l border-paper/10 pl-5 md:pl-8" : ""
              } ${i === 2 ? "border-t border-paper/10 lg:border-l lg:border-t-0 lg:pl-8" : ""} ${
                i === 3 ? "border-t border-paper/10 lg:border-t-0" : ""
              }`}
            >
              <dt className="order-2 text-[12px] leading-snug text-paper/55 md:text-[13px]">{m.label}</dt>
              <dd className="display order-1 text-[1.6rem] text-accent-soft md:text-[2rem]">{m.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
