import { company, mailto } from "@/lib/content";
import { Logo } from "./Logo";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#ventures", label: "Ventures" },
  { href: "#leadership", label: "Leadership" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="container-x py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo tone="light" />
            <p className="eyebrow mt-8 text-[10px] text-paper/80">{company.legalName}</p>
            <p className="mt-4 max-w-sm font-serif text-[1.3rem] leading-snug text-paper/85">
              {company.descriptor}
            </p>
          </div>

          <nav aria-label="Footer" className="md:col-span-2 md:col-start-7">
            <p className="eyebrow text-[10px] text-gold">Navigate</p>
            <ul className="mt-5 space-y-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="link-draw text-[14px] text-paper/70 hover:text-paper">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-8 md:col-span-4 md:col-start-9">
            <div>
              <p className="eyebrow text-[10px] text-gold">Contact</p>
              <a href={mailto} className="link-draw mt-4 inline-block break-all text-[14px] text-paper/80 hover:text-paper">
                {company.email}
              </a>
              <address className="mt-3 text-[14px] not-italic leading-relaxed text-paper/60">
                Corporate Address:
                <br />
                {company.address}.
              </address>
            </div>
            <dl className="grid grid-cols-2 gap-6 text-[14px]">
              <div>
                <dt className="eyebrow text-[10px] text-gold">Founder</dt>
                <dd className="mt-2 text-paper/80">{company.founder}</dd>
              </div>
              <div>
                <dt className="eyebrow text-[10px] text-gold">Co-Founder</dt>
                <dd className="mt-2 text-paper/80">{company.coFounder}</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-paper/10 pt-8 text-[12px] text-paper/45 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Tech Prime Global Private Limited. All Rights Reserved.</p>
          <p>Gurgaon, Haryana, India</p>
        </div>
      </div>
    </footer>
  );
}
