import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { company, mailto } from "@/lib/content";
import { ContactForm } from "./ContactForm";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const conversationMailto = `${mailto}?subject=${encodeURIComponent("Starting a conversation with Tech Prime Global")}`;

export function InvestorContact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="grain relative bg-brand-ink text-paper">
      <div className="container-x grid gap-12 py-16 md:py-24 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-6">
          <Reveal>
            <SectionLabel index="06" label="Investors & Partners" tone="dark" />
          </Reveal>
          <Reveal delay={0.08}>
            <h2 id="contact-title" className="display mt-6 text-[clamp(2.6rem,5vw,4.5rem)]">
              Let&rsquo;s Build <em className="text-accent-soft">What&rsquo;s Next.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <div className="mt-6 max-w-lg space-y-4 text-[16px] leading-[1.85] text-paper/70">
              <p>
                We are building businesses with the ambition to create meaningful value across multiple
                industries.
              </p>
              <p>
                We welcome conversations with investors, strategic partners, and organisations interested
                in exploring opportunities with Tech Prime Global and its ventures.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={conversationMailto}
                className="group inline-flex items-center justify-center gap-3 bg-accent px-7 py-4 text-[12px] font-semibold tracking-[0.16em] text-brand-ink uppercase transition-colors duration-300 hover:bg-accent-soft"
              >
                Start a Conversation
                <ArrowUpRight aria-hidden className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href={mailto}
                className="inline-flex items-center justify-center gap-3 border border-paper/30 px-7 py-4 text-[12px] font-semibold tracking-[0.16em] uppercase transition-colors duration-300 hover:border-accent-soft hover:text-accent-soft"
              >
                Write to Us
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <dl className="mt-10 grid gap-8 border-t border-paper/15 pt-8 sm:grid-cols-2">
              <div>
                <dt className="eyebrow flex items-center gap-2 text-[10px] text-accent-soft">
                  <Mail aria-hidden className="size-3.5" /> Email
                </dt>
                <dd className="mt-3">
                  <a href={mailto} className="link-draw break-all text-[15px] text-paper">
                    {company.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow flex items-center gap-2 text-[10px] text-accent-soft">
                  <MapPin aria-hidden className="size-3.5" /> Corporate Address
                </dt>
                <dd className="mt-3 text-[15px] leading-relaxed text-paper">
                  <address className="not-italic">{company.address}.</address>
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>

        <Reveal delay={0.12} className="lg:col-span-5 lg:col-start-8">
          <div className="border border-paper/15 bg-paper/[0.03] p-6 sm:p-10">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
