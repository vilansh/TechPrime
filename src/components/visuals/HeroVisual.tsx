"use client";

import { motion } from "framer-motion";

const draw = (delay: number) => ({
  initial: { pathLength: 0, opacity: 0 },
  animate: { pathLength: 1, opacity: 1 },
  transition: { duration: 1.8, delay, ease: [0.65, 0, 0.35, 1] as const },
});

/**
 * Architectural composition: a colonnade of nested arches holding a single
 * burgundy archway. The apex node (the group) connects to three venture nodes.
 */
export function HeroVisual() {
  const anim = draw;

  const ventures = [
    { x: 170, label: "01" },
    { x: 240, label: "02" },
    { x: 310, label: "03" },
  ];

  return (
    <figure className="relative">
      <div className="relative aspect-[4/5] w-full overflow-hidden border border-line bg-paper">
        <svg
          viewBox="0 0 480 600"
          className="absolute inset-0 h-full w-full"
          role="img"
          aria-labelledby="hero-visual-title"
        >
          <title id="hero-visual-title">
            An architectural archway representing Tech Prime Global, connected to three independent ventures.
          </title>

          {/* Fine column grid */}
          {Array.from({ length: 13 }).map((_, i) => (
            <line key={`v${i}`} x1={i * 40} y1="0" x2={i * 40} y2="600" stroke="#B69A70" strokeOpacity="0.16" />
          ))}
          {Array.from({ length: 16 }).map((_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 40} x2="480" y2={i * 40} stroke="#B69A70" strokeOpacity="0.1" />
          ))}

          {/* Outer arches */}
          <motion.path
            d="M40 600 V250 A200 200 0 0 1 440 250 V600"
            fill="none"
            stroke="#B69A70"
            strokeWidth="1"
            {...anim(0.1)}
          />
          <motion.path
            d="M80 600 V260 A160 160 0 0 1 400 260 V600"
            fill="none"
            stroke="#641C32"
            strokeOpacity="0.55"
            strokeWidth="1"
            {...anim(0.3)}
          />

          {/* Solid inner archway */}
          <motion.path
            d="M120 600 V280 A120 120 0 0 1 360 280 V600 Z"
            fill="#641C32"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Inner keyline */}
          <path
            d="M140 600 V284 A100 100 0 0 1 340 284 V600"
            fill="none"
            stroke="#D8C7A8"
            strokeOpacity="0.35"
          />

          {/* Connections: group apex → ventures */}
          {ventures.map((v, i) => (
            <motion.path
              key={v.label}
              d={`M240 230 C240 330 ${v.x} 340 ${v.x} 440`}
              fill="none"
              stroke="#D8C7A8"
              strokeWidth="1"
              {...anim(1.1 + i * 0.15)}
            />
          ))}

          {/* Apex node */}
          <circle cx="240" cy="230" r="22" fill="#F8F6F2" />
          <circle cx="240" cy="230" r="30" fill="none" stroke="#B69A70" strokeOpacity="0.8" />
          <text
            x="240"
            y="235"
            textAnchor="middle"
            fontFamily="var(--font-playfair)"
            fontSize="15"
            fill="#641C32"
          >
            TP
          </text>

          {/* Venture nodes */}
          {ventures.map((v) => (
            <g key={`n${v.label}`}>
              <rect x={v.x - 16} y="440" width="32" height="32" fill="#F8F6F2" />
              <text
                x={v.x}
                y="461"
                textAnchor="middle"
                fontFamily="var(--font-playfair)"
                fontStyle="italic"
                fontSize="13"
                fill="#641C32"
              >
                {v.label}
              </text>
            </g>
          ))}

          {/* Base plinth */}
          <line x1="0" y1="540" x2="480" y2="540" stroke="#B69A70" strokeOpacity="0.5" />
          <line x1="120" y1="512" x2="360" y2="512" stroke="#D8C7A8" strokeOpacity="0.35" />
        </svg>

        {/* Corner registration marks */}
        <span aria-hidden className="absolute left-4 top-4 h-3 w-3 border-l border-t border-wine/40" />
        <span aria-hidden className="absolute right-4 top-4 h-3 w-3 border-r border-t border-wine/40" />
      </div>

      <figcaption className="mt-4 flex items-baseline justify-between gap-6 text-[11px] text-stone">
        <span className="eyebrow whitespace-nowrap text-stone">Fig. 01 — The Group</span>
        <span className="text-right">One parent. Three independent ventures.</span>
      </figcaption>
    </figure>
  );
}
