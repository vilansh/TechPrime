type LogoProps = { tone?: "dark" | "light"; className?: string };

/** Wordmark: monogram tile + tracked sans lettering. */
export function Logo({ tone = "dark", className = "" }: LogoProps) {
  const light = tone === "light";
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <span
        aria-hidden
        className={`grid size-9 place-items-center rounded-[9px] ${
          light ? "bg-paper text-brand" : "bg-brand text-paper"
        }`}
      >
        <span className="font-display text-[13px] font-semibold leading-none tracking-[-0.02em]">
          TP<span className="text-accent-soft">.</span>
        </span>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[15px] font-semibold tracking-[0.14em] ${light ? "text-paper" : "text-ink"}`}
        >
          TECH PRIME
        </span>
        <span className={`mt-1 text-[9px] font-medium tracking-[0.44em] ${light ? "text-accent-soft" : "text-stone"}`}>
          GLOBAL
        </span>
      </span>
    </span>
  );
}
