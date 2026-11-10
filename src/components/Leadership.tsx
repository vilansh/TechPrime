import Image from "next/image";
import { leaders, type Leader } from "@/lib/content";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

function Avatar({ leader }: { leader: Leader }) {
  return (
    <div className="relative size-16 shrink-0 overflow-hidden rounded-2xl bg-brand md:size-[72px]">
      {leader.photo ? (
        <Image
          src={leader.photo}
          alt={`Portrait of ${leader.name}, ${leader.role} of Tech Prime Global`}
          fill
          sizes="72px"
          className="object-cover"
        />
      ) : (
        <span aria-hidden className="grid h-full w-full place-items-center font-display text-xl font-semibold tracking-[-0.02em] text-paper">
          {leader.initials}
          <span className="absolute bottom-2.5 right-2.5 size-1.5 rounded-full bg-accent-soft" />
        </span>
      )}
    </div>
  );
}

export function Leadership() {
  return (
    <section id="leadership" aria-labelledby="leadership-title" className="bg-paper py-16 md:py-24">
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-6">
            <Reveal>
              <SectionLabel index="05" label="The Founders" />
            </Reveal>
            <Reveal delay={0.08}>
              <h2 id="leadership-title" className="display mt-6 text-[clamp(2.4rem,4.4vw,4rem)] text-ink">
                Leadership
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <Reveal delay={0.14}>
              <p className="text-[16px] leading-[1.75] text-stone">
                One founder sells it, one builds it. Market-facing commercial instinct paired with
                hands-on technology leadership, both focused on Indian consumers.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:mt-14 md:grid-cols-2 lg:gap-6">
          {leaders.map((l, i) => (
            <Reveal key={l.name} delay={i * 0.1}>
              <article className="flex h-full flex-col border border-line bg-ivory/60 p-6 transition-colors duration-500 hover:border-brand/30 md:p-8">
                <div className="flex items-center gap-4">
                  <Avatar leader={l} />
                  <div className="min-w-0">
                    <h3 className="font-display text-[1.35rem] font-semibold tracking-[-0.02em] text-ink">{l.name}</h3>
                    <p className="mt-1 text-[13px] text-stone">
                      <span className="font-medium text-brand">{l.role}</span> · {l.discipline}
                    </p>
                  </div>
                </div>

                <p className="mt-7 font-display text-[1.3rem] font-medium leading-[1.3] tracking-[-0.02em] text-ink md:text-[1.45rem]">
                  &ldquo;{l.headline}&rdquo;
                </p>
                <p className="mt-4 text-[15px] leading-[1.75] text-stone">{l.bio}</p>

                <ul className="mt-auto flex flex-wrap gap-2 pt-7" aria-label={`${l.name}'s areas of expertise`}>
                  {l.strengths.map((s) => (
                    <li key={s} className="rounded-full border border-line bg-paper px-3 py-1 text-[12px] text-ink/80">
                      {s}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
