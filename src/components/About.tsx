import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { CompanyPrinciples } from "./CompanyPrinciples";

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="bg-ivory py-24 md:py-36">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <SectionLabel index="01" label="About Tech Prime Global" />
              </Reveal>
              <Reveal delay={0.08}>
                <h2 id="about-title" className="display mt-8 text-[clamp(2.4rem,4.6vw,4.25rem)] text-ink">
                  An Ambition to Build <em className="text-wine">Across Industries.</em>
                </h2>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={0.1}>
              <p className="font-serif text-[1.55rem] leading-[1.5] text-ink md:text-[1.8rem]">
                At Tech Prime Global, we believe meaningful businesses are built by solving real
                problems.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="mt-10 space-y-6 text-[16px] leading-[1.85] text-stone">
                <p>
                  Our approach combines market understanding, technology, operational execution, and
                  customer-centric thinking to create businesses with independent identities and
                  scalable foundations.
                </p>
                <p>
                  Through our growing portfolio, we are exploring opportunities across{" "}
                  <span className="text-ink">mobility services</span>,{" "}
                  <span className="text-ink">digital entertainment</span>, and{" "}
                  <span className="text-ink">healthcare discovery</span>.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <blockquote className="mt-12 border-l border-gold pl-6">
                <p className="text-[13px] leading-relaxed tracking-[0.02em] text-ink/80">
                  Identify fragmented markets. Build technology-enabled platforms. Simplify the
                  customer experience. Create scalable business models.
                </p>
              </blockquote>
            </Reveal>
          </div>
        </div>

        <CompanyPrinciples />
      </div>
    </section>
  );
}
