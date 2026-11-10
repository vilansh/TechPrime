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

/** Principles as a compact three-column row divided by hairlines. */
export function CompanyPrinciples() {
  return (
    <div className="mt-12 md:mt-16">
      <Reveal>
        <div className="flex items-end justify-between border-b border-ink pb-4">
          <h3 className="eyebrow text-ink">How We Build</h3>
          <span className="text-[13px] text-stone">Three principles</span>
        </div>
      </Reveal>
      <ol className="grid md:grid-cols-3">
        {principles.map((p, i) => (
          <li key={p.n} className={`border-b border-line md:border-b-0 ${i > 0 ? "md:border-l md:pl-8" : ""} ${i < 2 ? "md:pr-8" : ""}`}>
            <Reveal delay={i * 0.08}>
              <div className="group py-7 md:py-9">
                <span className="display text-[2rem] text-accent transition-colors duration-500 group-hover:text-brand">
                  {p.n}
                </span>
                <h4 className="display mt-3 text-[1.45rem] text-ink">{p.title}</h4>
                <p className="mt-3 text-[15px] leading-[1.7] text-stone">{p.body}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  );
}
