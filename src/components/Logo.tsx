type LogoProps = { tone?: "dark" | "light"; className?: string };

/** Wordmark: monogram tile + spaced serif lettering. */
export function Logo({ tone = "dark", className = "" }: LogoProps) {
  const light = tone === "light";
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <span
        aria-hidden
        className={`grid size-9 place-items-center border ${
          light ? "border-gold/70 text-paper" : "border-wine/80 bg-wine text-paper"
        }`}
      >
        <span className="font-serif text-[15px] leading-none tracking-tight">
          T<span className="italic text-gold-soft">p</span>
        </span>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-serif text-[17px] tracking-[0.18em] ${light ? "text-paper" : "text-ink"}`}
        >
          TECH PRIME
        </span>
        <span className={`mt-1 text-[9px] font-semibold tracking-[0.42em] ${light ? "text-gold-soft" : "text-gold"}`}>
          GLOBAL
        </span>
      </span>
    </span>
  );
}
