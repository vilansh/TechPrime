import { Reveal } from "./Reveal";

const principles = [
  {
    n: "01",
    title: "Identify Opportunities",
    body: "Recognising underserved markets and customer problems with meaningful potential.",
  },
  {
    n: "02",
    title: "Build With Purpose",
    body: "Creating practical, technology-enabled platforms that make services more accessible and convenient.",
  },
  {
    n: "03",
    title: "Scale With Discipline",
    body: "Developing independent business models supported by operational efficiency, customer trust, and sustainable growth.",
  },
];

/** Principles set as editorial ledger rows rather than cards. */
export function CompanyPrinciples() {
  return (
    <div className="mt-24 md:mt-32">
      <Reveal>
        <div className="flex items-end justify-between border-b border-ink pb-5">
          <h3 className="eyebrow text-ink">How We Build</h3>
          <span className="font-display text-sm text-stone">Three principles</span>
        </div>
      </Reveal>
      <ol>
        {principles.map((p, i) => (
          <li key={p.n}>
            <Reveal delay={i * 0.08}>
              <div className="group grid gap-4 border-b border-line py-10 transition-colors duration-500 hover:bg-paper/70 md:grid-cols-12 md:items-baseline md:gap-8 md:px-4 md:py-12">
                <span className="display text-[3.25rem] text-accent transition-colors duration-500 group-hover:text-brand md:col-span-2 md:text-[4.5rem]">
                  {p.n}
                </span>
                <h4 className="display text-[1.85rem] text-ink md:col-span-4 md:text-[2.3rem]">
                  {p.title}
                </h4>
                <p className="max-w-md text-[15.5px] leading-[1.8] text-stone md:col-span-5 md:col-start-8">
                  {p.body}
                </p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  );
}
