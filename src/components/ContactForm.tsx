"use client";

import { useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { company } from "@/lib/content";

type Fields = { name: string; email: string; organisation: string; message: string };
type FieldKey = keyof Fields;

const empty: Fields = { name: "", email: "", organisation: "", message: "" };

/**
 * Optional backend: set NEXT_PUBLIC_CONTACT_ENDPOINT to a form service URL
 * (e.g. Formspree / your own API) that accepts a JSON POST. Without it, the
 * form opens the visitor's email client with the message pre-filled.
 */
const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;

function validate(f: Fields): Partial<Record<FieldKey, string>> {
  const e: Partial<Record<FieldKey, string>> = {};
  if (f.name.trim().length < 2) e.name = "Please enter your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email.trim())) e.email = "Please enter a valid email address, e.g. name@company.com.";
  if (f.message.trim().length < 10) e.message = "Please add a short message (at least 10 characters).";
  return e;
}

type Status =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "sent" }
  | { kind: "mailto" }
  | { kind: "error" };

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(empty);
  const [touched, setTouched] = useState<Partial<Record<FieldKey, boolean>>>({});
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  const errors = validate(fields);
  const show = (k: FieldKey) => (touched[k] ? errors[k] : undefined);

  const update = (k: FieldKey) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFields((f) => ({ ...f, [k]: e.target.value }));
  const blur = (k: FieldKey) => () => setTouched((t) => ({ ...t, [k]: true }));

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTouched({ name: true, email: true, organisation: true, message: true });
    const firstInvalid = (Object.keys(errors) as FieldKey[])[0];
    if (firstInvalid) {
      document.getElementById(`cf-${firstInvalid}`)?.focus();
      return;
    }

    if (endpoint) {
      setStatus({ kind: "sending" });
      try {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(fields),
        });
        if (!res.ok) throw new Error(String(res.status));
        setStatus({ kind: "sent" });
        setFields(empty);
        setTouched({});
      } catch {
        setStatus({ kind: "error" });
      }
      return;
    }

    const subject = `Partnership enquiry — ${fields.name}${fields.organisation ? `, ${fields.organisation}` : ""}`;
    const body = [
      fields.message.trim(),
      "",
      "—",
      `Name: ${fields.name.trim()}`,
      `Email: ${fields.email.trim()}`,
      fields.organisation.trim() ? `Organisation: ${fields.organisation.trim()}` : "",
    ]
      .filter((l, i, a) => !(l === "" && i === a.length - 1))
      .join("\n");
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus({ kind: "mailto" });
  };

  const inputBase =
    "mt-2 w-full border-0 border-b bg-transparent px-0 py-3 text-[16px] text-paper placeholder:text-paper/30 transition-colors focus:outline-none focus:ring-0";
  const borderFor = (k: FieldKey) =>
    show(k) ? "border-[#F4A99A]" : "border-paper/25 focus:border-accent-soft";

  const field = (k: FieldKey, label: string, opts: { type?: string; optional?: boolean; autoComplete?: string; hint?: string }) => (
    <div>
      <label htmlFor={`cf-${k}`} className="eyebrow flex justify-between text-[10px] text-paper/70">
        <span>{label}</span>
        {opts.optional && <span className="tracking-[0.1em] normal-case text-paper/40">Optional</span>}
      </label>
      <input
        id={`cf-${k}`}
        name={k}
        type={opts.type ?? "text"}
        autoComplete={opts.autoComplete}
        placeholder={opts.hint}
        value={fields[k]}
        onChange={update(k)}
        onBlur={opts.optional ? undefined : blur(k)}
        aria-invalid={Boolean(show(k))}
        aria-describedby={show(k) ? `cf-${k}-err` : undefined}
        className={`${inputBase} ${borderFor(k)}`}
      />
      {show(k) && (
        <p id={`cf-${k}-err`} className="mt-2 text-[12.5px] text-[#F7BDB0]">
          {show(k)}
        </p>
      )}
    </div>
  );

  return (
    <form noValidate onSubmit={onSubmit} aria-labelledby="contact-form-title" className="space-y-8">
      <p id="contact-form-title" className="eyebrow text-accent-soft">
        Send an enquiry
      </p>
      <div className="grid gap-8 sm:grid-cols-2">
        {field("name", "Full Name", { autoComplete: "name" })}
        {field("email", "Email Address", { type: "email", autoComplete: "email", hint: "name@company.com" })}
      </div>
      {field("organisation", "Organisation", { optional: true, autoComplete: "organization" })}

      <div>
        <label htmlFor="cf-message" className="eyebrow text-[10px] text-paper/70">
          Message
        </label>
        <textarea
          id="cf-message"
          name="message"
          rows={4}
          value={fields.message}
          onChange={update("message")}
          onBlur={blur("message")}
          aria-invalid={Boolean(show("message"))}
          aria-describedby={show("message") ? "cf-message-err" : undefined}
          className={`${inputBase} resize-y ${borderFor("message")}`}
        />
        {show("message") && (
          <p id="cf-message-err" className="mt-2 text-[12.5px] text-[#F7BDB0]">
            {show("message")}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status.kind === "sending"}
          className="group inline-flex shrink-0 items-center justify-center gap-3 whitespace-nowrap bg-paper px-7 py-4 text-[12px] font-semibold tracking-[0.16em] text-brand uppercase transition-colors duration-300 hover:bg-accent-soft disabled:opacity-70"
        >
          {status.kind === "sending" ? (
            <>
              <Loader2 aria-hidden className="size-4 animate-spin" /> Sending
            </>
          ) : (
            <>
              Send Enquiry
              <ArrowRight aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </>
          )}
        </button>
        {!endpoint && (
          <p className="text-[12px] leading-relaxed text-paper/50 sm:max-w-[16rem] sm:text-right">
            Opens your email app with your message prepared.
          </p>
        )}
      </div>

      <div aria-live="polite" className="min-h-[1.5rem] text-[14px] leading-relaxed">
        {status.kind === "sent" && (
          <p className="text-accent-soft">Thank you — your message has been sent. We&rsquo;ll be in touch.</p>
        )}
        {status.kind === "mailto" && (
          <p className="text-paper/80">
            Your email app should now open with the message ready to send. If it didn&rsquo;t, write to us
            directly at{" "}
            <a href={`mailto:${company.email}`} className="text-accent-soft underline underline-offset-4">
              {company.email}
            </a>
            .
          </p>
        )}
        {status.kind === "error" && (
          <p className="text-[#F7BDB0]">
            We couldn&rsquo;t send your message just now. Please try again, or email{" "}
            <a href={`mailto:${company.email}`} className="underline underline-offset-4">
              {company.email}
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}
