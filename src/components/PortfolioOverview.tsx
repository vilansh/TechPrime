import { ventures } from "@/lib/content";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const nodeX = [170, 500, 830];

function EcosystemGraphic() {
  return (
    <svg
      viewBox="0 0 1000 380"
      className="hidden h-auto w-full md:block"
      role="img"
      aria-labelledby="eco-title"
    >
      <title id="eco-title">
        Tech Prime Global as the parent company, with Drivers24, Finder and First Lab as independent ventures beneath it.
      </title>

      {/* Umbrella arc */}
      <path d="M90 250 A410 190 0 0 1 910 250" fill="none" stroke="#B69A70" strokeOpacity="0.5" />
      <path d="M140 250 A360 150 0 0 1 860 250" fill="none" stroke="#B69A70" strokeOpacity="0.25" strokeDasharray="2 6" />

      {/* Ground line */}
      <line x1="40" y1="330" x2="960" y2="330" stroke="#191919" strokeOpacity="0.15" />

      {/* Connections */}
      {nodeX.map((x) => (
        <path
          key={x}
          d={`M500 104 C500 180 ${x} 170 ${x} 236`}
          fill="none"
          stroke="#641C32"
          strokeOpacity="0.55"
        />
      ))}

      {/* Parent */}
      <rect x="370" y="40" width="260" height="64" fill="#641C32" />
      <text x="500" y="70" textAnchor="middle" fontFamily="var(--font-playfair)" fontSize="19" letterSpacing="3" fill="#F8F6F2">
        TECH PRIME GLOBAL
      </text>
      <text x="500" y="90" textAnchor="middle" fontFamily="var(--font-inter)" fontSize="9" letterSpacing="3" fill="#D8C7A8">
        PARENT COMPANY
      </text>

      {/* Ventures */}
      {ventures.map((v, i) => (
        <g key={v.key}>
          <rect x={nodeX[i] - 110} y="236" width="220" height="94" fill="#F8F6F2" stroke="#DDD5C8" />
          <rect x={nodeX[i] - 110} y="236" width="220" height="2" fill="#B69A70" />
          <text x={nodeX[i] - 92} y="266" fontFamily="var(--font-playfair)" fontStyle="italic" fontSize="13" fill="#B69A70">
            {v.index}
          </text>
          <text x={nodeX[i] - 92} y="294" fontFamily="var(--font-playfair)" fontSize="24" fill="#191919">
            {v.name}
          </text>
          <text x={nodeX[i] - 92} y="316" fontFamily="var(--font-inter)" fontSize="10" letterSpacing="2" fill="#77736F">
            {v.shortIndustry.toUpperCase()}
          </text>
        </g>
      ))}
    </svg>
  );
}

function EcosystemMobile() {
  return (
    <div className="md:hidden">
      <div className="mx-auto w-fit bg-wine px-6 py-4 text-center">
        <p className="font-serif tracking-[0.2em] text-paper">TECH PRIME GLOBAL</p>
        <p className="eyebrow mt-1 text-[9px] text-gold-soft">Parent company</p>
      </div>
      <div className="mx-auto h-8 w-px bg-wine/50" />
      <div className="relative border-l border-wine/40 pl-6">
        {ventures.map((v) => (
          <div key={v.key} className="relative mb-4 border border-line bg-paper p-4 last:mb-0">
            <span className="absolute -left-6 top-1/2 h-px w-6 bg-wine/40" />
            <span className="font-serif text-xs italic text-gold">{v.index}</span>
            <p className="font-serif text-xl text-ink">{v.name}</p>
            <p className="eyebrow mt-1 text-[10px] text-stone">{v.shortIndustry}</p>
            <p className="mt-2 text-[14px] text-stone">{v.focus} · {v.stage}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PortfolioOverview() {
  return (
    <section id="portfolio" aria-labelledby="portfolio-title" className="bg-ivory py-24 md:py-36">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionLabel index="03" label="Portfolio Overview" />
            </Reveal>
            <Reveal delay={0.08}>
              <h2 id="portfolio-title" className="display mt-8 text-[clamp(2.4rem,4.8vw,4.5rem)] text-ink">
                Expanding Into Markets <em className="text-wine">That Matter.</em>
              </h2>
            </Reveal>
          </div>
          <div className="flex items-end lg:col-span-4 lg:col-start-9">
            <Reveal delay={0.14}>
              <p className="text-[16px] leading-[1.8] text-stone">
                Each venture operates with its own identity, market and model — held together by a
                single parent company, a shared operating philosophy and a long-term view.
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-16 md:mt-20">
            <EcosystemGraphic />
            <EcosystemMobile />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-16 hidden overflow-x-auto md:mt-20 md:block">
            <table className="w-full min-w-[520px] border-collapse text-left">
              <caption className="sr-only">Tech Prime Global portfolio by venture, industry and business focus</caption>
              <thead>
                <tr className="border-b border-ink">
                  {["Venture", "Industry", "Business Focus", "Stage"].map((h) => (
                    <th key={h} scope="col" className="eyebrow py-4 pr-6 font-semibold text-ink">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ventures.map((v) => (
                  <tr key={v.key} className="group border-b border-line transition-colors hover:bg-paper/70">
                    <th scope="row" className="py-6 pr-6 font-normal">
                      <a href={`#venture-${v.key}`} className="flex items-baseline gap-4">
                        <span className="font-serif text-sm italic text-gold">{v.index}</span>
                        <span className="font-serif text-2xl text-ink group-hover:text-wine">{v.name}</span>
                      </a>
                    </th>
                    <td className="py-6 pr-6 text-[15px] text-ink">{v.shortIndustry}</td>
                    <td className="py-6 pr-6 text-[15px] text-stone">{v.focus}</td>
                    <td className="py-6 text-[13px] text-stone">
                      <span className="inline-flex items-center gap-2">
                        <span aria-hidden className="size-1.5 rounded-full bg-gold" />
                        {v.stage}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
