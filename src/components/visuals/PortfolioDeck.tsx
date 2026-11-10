"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

type Pose = { x: number; y: number; rotate: number };
type CardSpec = {
  key: string;
  href: string;
  index: string;
  vertical: string;
  rest: Pose;
  spread: Pose;
  z: number;
  surface: string;
  body: React.ReactNode;
};

const cardVariants = (c: CardSpec, i: number): Variants => ({
  hidden: { opacity: 0, x: 0, y: 140, rotate: 0, scale: 0.92 },
  rest: { opacity: 1, ...c.rest, scale: 1, transition: { duration: 1.1, delay: 0.35 + i * 0.12, ease } },
  spread: { opacity: 1, ...c.spread, scale: 1.02, transition: { duration: 0.6, ease } },
});

function Pill({ dark }: { dark: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-medium tracking-wide ${
        dark ? "bg-paper/10 text-paper/80" : "bg-brand/8 text-brand"
      }`}
    >
      <span className={`size-1.5 rounded-full ${dark ? "bg-accent-soft" : "bg-accent"}`} />
      In development
    </span>
  );
}

const cards: CardSpec[] = [
  {
    key: "drivers24",
    href: "#venture-drivers24",
    index: "01",
    vertical: "Mobility",
    rest: { x: -128, y: 26, rotate: -9 },
    spread: { x: -176, y: 34, rotate: -14 },
    z: 1,
    surface: "bg-[#0B1312] text-paper ring-1 ring-paper/10",
    body: (
      <>
        <svg viewBox="0 0 200 110" className="mt-auto w-full" aria-hidden>
          <path d="M100 18 L20 110 M100 18 L180 110" stroke="#8C9A48" strokeOpacity="0.6" />
          <line x1="100" y1="40" x2="100" y2="52" stroke="#F8F9F7" strokeOpacity="0.5" />
          <line x1="100" y1="66" x2="100" y2="82" stroke="#F8F9F7" strokeOpacity="0.5" strokeWidth="1.5" />
          <circle cx="100" cy="150" r="78" fill="none" stroke="#1C2726" strokeWidth="14" />
          <circle cx="100" cy="150" r="70" fill="none" stroke="#D4E27A" strokeOpacity="0.5" />
        </svg>
        <p className="font-sans text-[30px] font-extrabold leading-none tracking-[-0.05em]">
          Drivers<span className="text-accent-soft">24</span>
        </p>
        <p className="mt-2 text-[12px] leading-snug text-paper/60">Your car. Our driver. By the hour.</p>
      </>
    ),
  },
  {
    key: "firstlab",
    href: "#venture-firstlab",
    index: "03",
    vertical: "Healthcare",
    rest: { x: 128, y: 26, rotate: 9 },
    spread: { x: 176, y: 34, rotate: 14 },
    z: 2,
    surface: "bg-paper text-ink ring-1 ring-ink/5",
    body: (
      <>
        <div className="mt-auto space-y-2.5" aria-hidden>
          {[62, 44, 78].map((w, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="h-1.5 w-10 rounded-full bg-ivory-deep" />
              <span className="relative h-1.5 flex-1 rounded-full bg-ivory-deep">
                <span
                  className={`absolute inset-y-0 left-0 rounded-full ${i === 1 ? "bg-brand" : "bg-accent/70"}`}
                  style={{ width: `${w}%` }}
                />
              </span>
            </div>
          ))}
        </div>
        <p className="mt-6 text-[28px] font-light leading-none tracking-[0.04em]">
          FIRST<span className="font-semibold text-brand">LAB</span>
          <span className="ml-1 align-top text-[12px] text-brand">+</span>
        </p>
        <p className="mt-2 text-[12px] leading-snug text-stone">Compare labs. Book diagnostics.</p>
      </>
    ),
  },
  {
    key: "finder",
    href: "#venture-finder",
    index: "02",
    vertical: "Entertainment",
    rest: { x: 0, y: -18, rotate: 0 },
    spread: { x: 0, y: -46, rotate: 0 },
    z: 3,
    surface: "bg-gradient-to-br from-[#1E5C5A] via-brand to-brand-ink text-paper ring-1 ring-accent-soft/25",
    body: (
      <>
        <div className="mt-auto flex h-16 items-center justify-center gap-[5px]" aria-hidden>
          {[14, 28, 44, 22, 56, 34, 62, 30, 46, 18, 36, 24, 12].map((h, i) => (
            <span key={i} className="w-[3px] rounded-full bg-accent-soft" style={{ height: h, opacity: 0.45 + h / 120 }} />
          ))}
        </div>
        <p className="mt-6 font-display text-[34px] font-semibold leading-none tracking-[-0.055em]">
          finder<span className="text-accent-soft">.</span>
        </p>
        <p className="mt-2 text-[12px] leading-snug text-paper/65">Voice &amp; chat with real hosts.</p>
      </>
    ),
  },
];

/**
 * Three venture cards fanned like a hand of cards over the group's arch.
 * Hovering the deck spreads the hand; each card links to its venture.
 */
export function PortfolioDeck() {
  return (
    <div className="relative mx-auto h-[400px] w-full max-w-[560px] sm:h-[460px]">
      {/* Arch motif + glow behind the deck */}
      <div aria-hidden className="pointer-events-none absolute inset-0 flex items-end justify-center">
        <div className="absolute -bottom-px h-[104%] w-[94%] rounded-t-full border border-b-0 border-accent-soft/20" />
        <div className="absolute -bottom-px h-[90%] w-[76%] rounded-t-full border border-b-0 border-paper/10" />
        <div className="absolute bottom-[18%] h-64 w-64 rounded-full bg-accent-soft/15 blur-3xl" />
      </div>

      <motion.div
        className="absolute inset-0 origin-center scale-[0.7] sm:scale-[0.85] lg:scale-100"
        initial="hidden"
        animate="rest"
        whileHover="spread"
      >
        {cards.map((c, i) => (
          <motion.a
            key={c.key}
            href={c.href}
            variants={cardVariants(c, i)}
            style={{ zIndex: c.z, marginLeft: -118, marginTop: -160 }}
            className={`group absolute left-1/2 top-1/2 flex h-[320px] w-[236px] flex-col rounded-[22px] p-5 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.65)] ${c.surface}`}
            aria-label={`${c.key === "firstlab" ? "First Lab" : c.key === "finder" ? "Finder" : "Drivers24"}: ${c.vertical} venture`}
          >
            <div className="flex items-start justify-between">
              <span className="text-[11px] font-medium tracking-[0.16em] uppercase opacity-60">
                {c.index} · {c.vertical}
              </span>
              <ArrowUpRight
                aria-hidden
                className="size-4 opacity-40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
              />
            </div>
            <div className="mt-3">
              <Pill dark={c.key !== "firstlab"} />
            </div>
            {c.body}
          </motion.a>
        ))}
      </motion.div>

      {/* Parent plate */}
      <div className="absolute inset-x-0 bottom-0 z-10 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease }}
          className="flex items-center gap-3 whitespace-nowrap rounded-full border border-paper/15 bg-brand-ink/80 py-2 pl-2 pr-4 text-[11px] text-paper/80 backdrop-blur-md"
        >
          <span className="grid size-6 place-items-center rounded-full bg-accent-soft text-[9px] font-bold text-brand-ink">TP</span>
          Three ventures · One parent company
        </motion.div>
      </div>
    </div>
  );
}
