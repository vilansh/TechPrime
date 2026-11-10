import Image from "next/image";
import { company } from "@/lib/content";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

type Leader = {
  name: string;
  role: string;
  initials: string;
  /** Path under /public, e.g. "/leadership/anil-sharma.jpg". Leave undefined until a photograph is supplied. */
  photo?: string;
};

const leaders: Leader[] = [
  { name: company.founder, role: "Founder", initials: "AS" },
  { name: company.coFounder, role: "Co-Founder", initials: "VS" },
];

function Portrait({ leader }: { leader: Leader }) {
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden border border-line bg-ivory-deep">
      {leader.photo ? (
        <Image
          src={leader.photo}
          alt={`Portrait of ${leader.name}, ${leader.role} of Tech Prime Global`}
          fill
          sizes="(min-width: 1024px) 40vw, 90vw"
          className="object-cover grayscale-[15%] transition duration-700 group-hover:grayscale-0"
        />
      ) : (
        <div aria-hidden className="absolute inset-0">
          <svg viewBox="0 0 400 500" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
            <path d="M80 500 V210 A120 120 0 0 1 320 210 V500" fill="none" stroke="#B69A70" strokeOpacity="0.6" />
            <path d="M110 500 V220 A90 90 0 0 1 290 220 V500" fill="none" stroke="#641C32" strokeOpacity="0.2" />
          </svg>
          <span className="absolute inset-0 grid place-items-center font-serif text-[5.5rem] italic text-wine/80 transition-transform duration-700 group-hover:scale-105">
            {leader.initials}
          </span>
        </div>
      )}
    </div>
  );
}

export function Leadership() {
  return (
    <section id="leadership" aria-labelledby="leadership-title" className="bg-paper py-24 md:py-36">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Reveal>
              <SectionLabel index="05" label="The Founders" />
            </Reveal>
            <Reveal delay={0.08}>
              <h2 id="leadership-title" className="display mt-8 text-[clamp(2.6rem,5.4vw,5rem)] text-ink">
                Leadership
              </h2>
            </Reveal>
          </div>
          <div className="flex items-end lg:col-span-5 lg:col-start-8">
            <Reveal delay={0.14}>
              <p className="text-[16px] leading-[1.8] text-stone">
                Tech Prime Global is founder-led. Its leadership takes direct ownership of the
                group&rsquo;s direction, the development of each venture, and the responsibility of
                building businesses designed to last.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid gap-14 md:mt-24 md:grid-cols-2 md:gap-10 lg:gap-16">
          {leaders.map((l, i) => (
            <Reveal key={l.name} delay={i * 0.1}>
              <article className="group">
                <Portrait leader={l} />
                <div className="mt-7 flex items-end justify-between gap-6 border-b border-ink pb-6">
                  <div>
                    <p className="eyebrow text-wine">{l.role}</p>
                    <h3 className="display mt-3 text-[2.2rem] text-ink md:text-[2.6rem]">{l.name}</h3>
                  </div>
                  <span className="pb-2 font-serif text-sm italic text-gold">0{i + 1}</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
