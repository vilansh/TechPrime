import { Clock3, MessageCircle, Phone, Star } from "lucide-react";

/* ------------------------------------------------------------------ */
/* Drivers24 — the view from the driver's seat at dusk                 */
/* ------------------------------------------------------------------ */
export function DriversVisual() {
  return (
    <div className="grain relative aspect-square w-full overflow-hidden bg-charcoal">
      <svg viewBox="0 0 400 500" className="absolute inset-0 h-full w-full" aria-hidden preserveAspectRatio="xMidYMax slice">
        <defs>
          <linearGradient id="d24-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#0F1716" />
            <stop offset="0.38" stopColor="#1E3433" />
            <stop offset="0.42" stopColor="#4A5C2C" />
            <stop offset="0.43" stopColor="#121A19" />
            <stop offset="1" stopColor="#0B100F" />
          </linearGradient>
          <radialGradient id="d24-sun" cx="0.5" cy="0.4" r="0.35">
            <stop offset="0" stopColor="#D4E27A" stopOpacity="0.55" />
            <stop offset="1" stopColor="#D4E27A" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="400" height="500" fill="url(#d24-sky)" />
        <rect width="400" height="500" fill="url(#d24-sun)" />

        {/* Skyline */}
        <path
          d="M0 205 V180 h22 v-14 h18 v22 h14 v-40 h20 v40 h10 v-18 h26 v18 h14 v-30 h16 v30 h120 v-26 h18 v-20 h14 v46 h20 v-32 h22 v32 h16 v-12 h20 v24 h18 V205 Z"
          fill="#081010"
          opacity="0.8"
        />

        {/* Road in perspective */}
        <path d="M200 208 L-40 500 H440 Z" fill="#101615" />
        <path d="M200 208 L30 500" stroke="#8C9A48" strokeOpacity="0.5" />
        <path d="M200 208 L370 500" stroke="#8C9A48" strokeOpacity="0.5" />
        {[0, 1, 2, 3].map((i) => {
          const y1 = 225 + i * i * 14 + i * 22;
          const y2 = y1 + 8 + i * 6;
          return <line key={i} x1="200" y1={y1} x2="200" y2={y2} stroke="#F8F9F7" strokeOpacity="0.55" strokeWidth={1 + i * 0.8} />;
        })}

        {/* Dashboard */}
        <path d="M-10 380 Q200 330 410 380 V500 H-10 Z" fill="#070B0B" />
        <path d="M-10 380 Q200 330 410 380" fill="none" stroke="#8C9A48" strokeOpacity="0.35" />

        {/* Steering wheel */}
        <g transform="translate(200 470)">
          <circle r="150" fill="none" stroke="#1C2726" strokeWidth="26" />
          <circle r="150" fill="none" stroke="#F8F9F7" strokeOpacity="0.12" strokeWidth="1" />
          <circle r="137" fill="none" stroke="#8C9A48" strokeOpacity="0.55" strokeWidth="1" />
          <path d="M-137 -10 Q-80 -40 -38 -18" fill="none" stroke="#1C2726" strokeWidth="22" strokeLinecap="round" />
          <path d="M137 -10 Q80 -40 38 -18" fill="none" stroke="#1C2726" strokeWidth="22" strokeLinecap="round" />
          <circle r="44" fill="#172120" stroke="#8C9A48" strokeOpacity="0.6" />
          <text y="6" textAnchor="middle" fontFamily="var(--font-inter)" fontWeight="700" fontSize="15" fill="#D4E27A" letterSpacing="1">
            24
          </text>
        </g>
      </svg>

      <div className="absolute bottom-5 left-5 flex items-center gap-2 border border-paper/15 bg-black/40 px-3 py-2 text-[11px] text-paper/85 backdrop-blur-sm md:bottom-7 md:left-7">
        <Clock3 aria-hidden className="size-3.5 text-accent-soft" /> Booked by the hour
      </div>
      <div className="absolute right-5 top-5 max-w-[13rem] border border-accent/30 bg-charcoal/85 p-4 text-paper md:right-7 md:top-7">
        <p className="eyebrow text-[9px] text-accent-soft">Your vehicle</p>
        <p className="mt-2 font-display text-[15px] leading-snug">A professional driver, behind your wheel.</p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Finder — two portrait archways in conversation                      */
/* ------------------------------------------------------------------ */
export function FinderVisual() {
  const bars = [10, 22, 36, 18, 44, 28, 52, 30, 40, 16, 34, 24, 12, 26, 8];
  return (
    <div className="grain relative aspect-square w-full overflow-hidden bg-gradient-to-br from-brand-deep via-brand to-brand-ink">
      <svg viewBox="0 0 400 500" className="absolute inset-0 h-full w-full" aria-hidden preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="f-p1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#D4E27A" />
            <stop offset="1" stopColor="#2F6F68" />
          </linearGradient>
          <linearGradient id="f-p2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#9FD3C7" />
            <stop offset="1" stopColor="#1E5C5A" />
          </linearGradient>
          <clipPath id="f-arch1">
            <path d="M40 470 V190 A90 90 0 0 1 220 190 V470 Z" />
          </clipPath>
          <clipPath id="f-arch2">
            <path d="M180 430 V150 A90 90 0 0 1 360 150 V430 Z" />
          </clipPath>
        </defs>

        {/* Arch 1 portrait */}
        <path d="M40 470 V190 A90 90 0 0 1 220 190 V470 Z" fill="#061B1C" />
        <g clipPath="url(#f-arch1)">
          <circle cx="130" cy="235" r="46" fill="url(#f-p1)" opacity="0.9" />
          <path d="M40 470 Q50 320 130 305 Q210 320 220 470 Z" fill="url(#f-p1)" opacity="0.75" />
        </g>
        <path d="M40 470 V190 A90 90 0 0 1 220 190 V470" fill="none" stroke="#D4E27A" strokeOpacity="0.5" />

        {/* Arch 2 portrait */}
        <path d="M180 430 V150 A90 90 0 0 1 360 150 V430 Z" fill="#0C3334" opacity="0.92" />
        <g clipPath="url(#f-arch2)">
          <circle cx="270" cy="195" r="44" fill="url(#f-p2)" />
          <path d="M180 430 Q190 285 270 268 Q350 285 360 430 Z" fill="url(#f-p2)" opacity="0.85" />
        </g>
        <path d="M180 430 V150 A90 90 0 0 1 360 150 V430" fill="none" stroke="#D4E27A" strokeOpacity="0.6" />

        {/* Voice waveform */}
        <g transform="translate(70 90)">
          {bars.map((h, i) => (
            <rect key={i} x={i * 8} y={-h / 2} width="3" height={h} rx="1.5" fill="#D4E27A" opacity={0.45 + (h / 52) * 0.5} />
          ))}
        </g>
      </svg>

      <div className="absolute bottom-5 left-5 w-[15rem] border border-paper/15 bg-brand-ink/80 p-4 text-paper backdrop-blur-sm md:bottom-7 md:left-7">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="grid size-9 place-items-center rounded-full bg-accent-soft font-display text-sm text-brand-ink">A</span>
            <div>
              <p className="text-[13px] font-medium">Host profile</p>
              <p className="flex items-center gap-1.5 text-[11px] text-paper/60">
                <span className="size-1.5 rounded-full bg-accent-soft" /> Available now
              </p>
            </div>
          </div>
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {["Music", "Cinema", "Travel"].map((t) => (
            <span key={t} className="border border-paper/15 px-2 py-0.5 text-[10px] tracking-wide text-paper/75">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2 text-[11px]">
          <span className="flex items-center justify-center gap-1.5 bg-paper py-2 font-medium text-brand">
            <Phone aria-hidden className="size-3" /> Voice
          </span>
          <span className="flex items-center justify-center gap-1.5 border border-paper/25 py-2">
            <MessageCircle aria-hidden className="size-3" /> Chat
          </span>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* First Lab — a calm comparison surface                               */
/* ------------------------------------------------------------------ */
export function FirstLabVisual() {
  const providers = [
    { name: "Diagnostic Provider A", price: 62, tests: 4, best: false },
    { name: "Diagnostic Provider B", price: 48, tests: 5, best: true },
    { name: "Diagnostic Provider C", price: 78, tests: 4, best: false },
  ];
  return (
    <div className="relative aspect-square w-full overflow-hidden border border-line bg-paper">
      {/* Specimen-plate grid */}
      <svg viewBox="0 0 400 500" className="absolute inset-0 h-full w-full" aria-hidden preserveAspectRatio="xMidYMid slice">
        {Array.from({ length: 9 }).map((_, r) =>
          Array.from({ length: 8 }).map((_, c) => (
            <circle
              key={`${r}-${c}`}
              cx={30 + c * 49}
              cy={30 + r * 56}
              r={r === 1 && c === 6 ? 9 : 7}
              fill={r === 1 && c === 6 ? "#0F3D3E" : "none"}
              stroke="#8C9A48"
              strokeOpacity={r === 1 && c === 6 ? 0 : 0.35}
            />
          )),
        )}
      </svg>

      <div className="absolute inset-x-5 top-1/2 -translate-y-1/2 border border-line bg-white p-5 shadow-[0_30px_60px_-30px_rgba(15,61,62,0.22)] md:inset-x-9 md:p-6">
        <div className="flex items-start justify-between gap-3 border-b border-line pb-4">
          <div>
            <p className="eyebrow text-[9px] text-brand">Health checkup package</p>
            <p className="mt-2 font-display text-[19px] text-ink">Full Body Checkup</p>
          </div>
          <span className="shrink-0 border border-brand/30 px-2 py-1 text-[10px] text-brand">Compare 3</span>
        </div>
        <ul className="divide-y divide-line">
          {providers.map((p) => (
            <li key={p.name} className="flex items-center gap-4 py-3.5">
              <div className="min-w-0 flex-1">
                <p className="truncate text-[12px] font-medium text-ink">{p.name}</p>
                <div className="mt-2 flex items-center gap-2">
                  <span className="relative h-1 flex-1 bg-ivory-deep">
                    <span className={`absolute inset-y-0 left-0 ${p.best ? "bg-brand" : "bg-accent"}`} style={{ width: `${p.price}%` }} />
                  </span>
                  <span className="flex gap-0.5 text-accent">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} aria-hidden className={`size-2.5 ${i < p.tests ? "fill-current" : ""}`} />
                    ))}
                  </span>
                </div>
              </div>
              <span
                className={`shrink-0 px-2.5 py-1.5 text-[10px] font-semibold tracking-wider uppercase ${
                  p.best ? "bg-brand text-paper" : "border border-line text-stone"
                }`}
              >
                {p.best ? "Book" : "View"}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <p className="absolute bottom-5 left-5 text-[10px] tracking-wide text-stone md:bottom-7 md:left-9">
        Illustrative interface · not live data
      </p>
    </div>
  );
}
