type SectionLabelProps = {
  index: string;
  label: string;
  tone?: "light" | "dark";
};

/** Editorial section marker: "01 —— About the Group" */
export function SectionLabel({ index, label, tone = "light" }: SectionLabelProps) {
  const dark = tone === "dark";
  return (
    <div className="flex items-center gap-4">
      <span className={`font-display text-sm ${dark ? "text-accent-soft" : "text-brand"}`}>{index}</span>
      <span aria-hidden className={`h-px w-10 ${dark ? "bg-accent/60" : "bg-accent"}`} />
      <span className={`eyebrow ${dark ? "text-paper/70" : "text-stone"}`}>{label}</span>
    </div>
  );
}
