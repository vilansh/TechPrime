"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { navLinks } from "@/lib/content";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the nav item for the section currently in view.
  useEffect(() => {
    const ids = navLinks.map((l) => l.id);
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-500 ${
        solid
          ? "border-b border-line/80 bg-paper/95 shadow-[0_1px_0_rgba(25,25,25,0.02)] backdrop-blur-sm"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-brand focus:px-4 focus:py-2 focus:text-paper"
      >
        Skip to content
      </a>
      <nav aria-label="Primary" className="container-x flex h-[76px] items-center justify-between">
        <a href="#home" aria-label="Tech Prime Global — back to top" onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                aria-current={active === link.id ? "true" : undefined}
                className={`link-draw pb-1 text-[13px] font-medium tracking-[0.02em] transition-colors ${
                  active === link.id ? "text-brand [background-size:100%_1px]" : "text-ink/75 hover:text-ink"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="group hidden items-center gap-2 bg-brand px-5 py-3 text-[12px] font-semibold tracking-[0.14em] text-paper uppercase transition-colors duration-300 hover:bg-brand-deep sm:inline-flex"
          >
            Partner With Us
            <ArrowUpRight
              aria-hidden
              className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
          <button
            ref={toggleRef}
            type="button"
            className="grid size-11 place-items-center border border-ink/15 text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "calc(100dvh - 76px)" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-line bg-paper lg:hidden"
          >
            <ul className="container-x flex flex-col pt-6">
              {navLinks.map((link, i) => (
                <li key={link.id} className="border-b border-line">
                  <a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline justify-between py-5"
                  >
                    <span className="display text-3xl text-ink">{link.label}</span>
                    <span className="font-display text-sm text-accent">0{i + 1}</span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="container-x pt-8">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center gap-2 bg-brand px-5 py-4 text-[12px] font-semibold tracking-[0.14em] text-paper uppercase"
              >
                Partner With Us <ArrowUpRight aria-hidden className="size-3.5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
