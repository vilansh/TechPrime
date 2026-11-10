"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Minus } from "lucide-react";
import { ventures, type Venture, type VentureKey } from "@/lib/content";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { DriversVisual, FinderVisual, FirstLabVisual } from "./visuals/VentureVisuals";

const visuals: Record<VentureKey, () => React.JSX.Element> = {
  drivers24: DriversVisual,
  finder: FinderVisual,
  firstlab: FirstLabVisual,
};

/** Each venture carries its own wordmark so they read as independent brands. */
function Wordmark({ venture, dark }: { venture: Venture; dark: boolean }) {
  const base = "text-[clamp(2.9rem,5.4vw,4.9rem)] leading-none";
  switch (venture.key) {
    case "drivers24":
      return (
        <span className={`${base} font-sans font-extrabold tracking-[-0.045em] text-ink`}>
          Drivers<span className="text-gold">24</span>
        </span>
      );
    case "finder":
      return (
        <span className={`${base} font-serif italic tracking-[-0.03em] ${dark ? "text-paper" : "text-ink"}`}>
          finder<span className="not-italic text-gold-soft">.</span>
        </span>
      );
    case "firstlab":
      return (
        <span className={`${base} font-sans font-light tracking-[0.06em] text-ink`}>
          FIRST<span className="font-semibold text-wine">LAB</span>
          <span className="ml-2 align-top text-[0.4em] font-normal text-wine">+</span>
        </span>
      );
  }
}

const themes: Record<VentureKey, { section: string; dark: boolean }> = {
  drivers24: { section: "bg-paper", dark: false },
  finder: { section: "bg-charcoal grain", dark: true },
  firstlab: { section: "bg-[#FBFAF7]", dark: false },
};

function VentureShowcase({ venture, reverse }: { venture: Venture; reverse: boolean }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const Visual = visuals[venture.key];
  const { section, dark } = themes[venture.key];

  const muted = dark ? "text-paper/65" : "text-stone";
  const strong = dark ? "text-paper" : "text-ink";
  const rule = dark ? "border-paper/15" : "border-line";

  return (
    <article
      id={`venture-${venture.key}`}
      aria-labelledby={`${venture.key}-name`}
      className={`${section} py-20 md:py-28`}
    >
      <div className="container-x">
        {/* Meta strip */}
        <Reveal>
          <div className={`grid grid-cols-2 gap-y-3 border-b pb-5 text-[11px] md:grid-cols-3 ${rule}`}>
            <span className={`eyebrow ${dark ? "text-gold-soft" : "text-wine"}`}>Venture {venture.index}</span>
            <span className={`eyebrow hidden text-center md:block ${muted}`}>{venture.industry}</span>
            <span className={`eyebrow flex items-center justify-end gap-2 ${muted}`}>
              <span className={`size-1.5 rounded-full ${dark ? "bg-gold-soft" : "bg-gold"}`} aria-hidden />
              {venture.stage}
            </span>
          </div>
        </Reveal>

        <div className="mt-12 grid items-center gap-12 lg:mt-16 lg:grid-cols-12 lg:gap-16">
          <Reveal className={`lg:col-span-6 ${reverse ? "lg:order-2" : ""}`} y={32}>
            <div className="transition-transform duration-700 ease-[var(--ease-editorial)] hover:scale-[1.01]">
              <Visual />
            </div>
          </Reveal>

          <div className={`lg:col-span-6 ${reverse ? "lg:order-1" : ""}`}>
            <Reveal delay={0.06}>
              <p className={`eyebrow md:hidden ${muted}`}>{venture.industry}</p>
              <h3 id={`${venture.key}-name`} className="mt-3 md:mt-0">
                <Wordmark venture={venture} dark={dark} />
                <span className="sr-only">{venture.name}</span>
              </h3>
            </Reveal>

            <Reveal delay={0.12}>
              <p className={`display mt-8 text-[1.55rem] italic md:text-[1.9rem] ${dark ? "text-gold-soft" : "text-wine"}`}>
                &ldquo;{venture.tagline}&rdquo;
              </p>
              <p className={`mt-6 max-w-xl text-[16px] leading-[1.8] ${muted}`}>{venture.description}</p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className={`mt-10 border-t pt-7 ${rule}`}>
                <p className={`eyebrow ${strong}`}>Core features</p>
                <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                  {venture.features.map((f) => (
                    <li key={f} className={`flex items-start gap-3 text-[14.5px] leading-snug ${strong} ${dark ? "opacity-90" : ""}`}>
                      <Minus aria-hidden className={`mt-0.5 size-4 shrink-0 ${dark ? "text-gold-soft" : "text-gold"}`} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="mt-10">
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => setOpen((v) => !v)}
                  className={`group inline-flex items-center gap-3 border-b pb-2 text-[12px] font-semibold tracking-[0.16em] uppercase transition-colors ${
                    dark
                      ? "border-gold-soft text-paper hover:text-gold-soft"
                      : "border-wine text-wine hover:text-wine-deep"
                  }`}
                >
                  {open ? "Close Venture Brief" : "Explore Venture"}
                  <ArrowRight
                    aria-hidden
                    className={`size-4 transition-transform duration-300 ${open ? "rotate-90" : "group-hover:translate-x-1"}`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-label={`${venture.name} venture brief`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className={`mt-8 grid gap-8 border-l pl-6 md:grid-cols-2 ${dark ? "border-gold-soft/50" : "border-gold"}`}>
                        <div>
                          <p className={`eyebrow ${strong}`}>Business concept</p>
                          <div className={`mt-3 space-y-3 text-[14.5px] leading-[1.75] ${muted}`}>
                            {venture.concept.map((c) => (
                              <p key={c}>{c}</p>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className={`eyebrow ${strong}`}>Positioning</p>
                          <p className={`mt-3 font-serif text-[1.15rem] leading-[1.6] ${strong}`}>{venture.positioning}</p>
                          <p className={`mt-5 text-[12px] ${muted}`}>
                            Industry: {venture.industry}
                            <br />
                            Current stage: {venture.stage}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </article>
  );
}

export function Ventures() {
  return (
    <section id="ventures" aria-labelledby="ventures-title">
      <div className="bg-paper pt-24 md:pt-36">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <Reveal>
                <SectionLabel index="02" label="Our Ventures" />
              </Reveal>
              <Reveal delay={0.08}>
                <h2 id="ventures-title" className="display mt-8 text-[clamp(2.6rem,5.6vw,5.4rem)] text-ink">
                  Three Ventures. Distinct Markets.{" "}
                  <em className="text-wine">One Vision.</em>
                </h2>
              </Reveal>
            </div>
            <div className="flex items-end lg:col-span-4">
              <Reveal delay={0.14}>
                <p className="max-w-sm text-[16px] leading-[1.8] text-stone">
                  Building focused businesses that address different dimensions of everyday consumer
                  needs.
                </p>
              </Reveal>
            </div>
          </div>

          {/* Index of ventures */}
          <Reveal delay={0.1}>
            <nav aria-label="Venture index" className="mt-16 grid border-t border-ink md:grid-cols-3">
              {ventures.map((v, i) => (
                <a
                  key={v.key}
                  href={`#venture-${v.key}`}
                  className={`group flex items-baseline justify-between gap-4 border-b border-line py-5 transition-colors hover:text-wine md:border-b-0 md:py-6 ${
                    i > 0 ? "md:border-l md:pl-6" : ""
                  } ${i < 2 ? "md:pr-6" : ""}`}
                >
                  <span>
                    <span className="font-serif text-sm italic text-gold">{v.index}</span>
                    <span className="ml-4 font-serif text-xl text-ink group-hover:text-wine">{v.name}</span>
                  </span>
                  <span className="eyebrow text-[10px] text-stone">{v.shortIndustry}</span>
                </a>
              ))}
            </nav>
          </Reveal>
        </div>
      </div>

      {ventures.map((v, i) => (
        <VentureShowcase key={v.key} venture={v} reverse={i % 2 === 1} />
      ))}
    </section>
  );
}
