"use client";

import { useState } from "react";
import { Phone, CheckCircle2, Clock, ShieldCheck } from "lucide-react";
import { COMPANY, SERVICE_OPTIONS } from "@/lib/content";

function maskPhone(v: string) {
  const d = v.replace(/\D/g, "").slice(0, 10);
  if (d.length <= 3) return d;
  if (d.length <= 6) return `(${d.slice(0, 3)}) ${d.slice(3)}`;
  return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
}

const inputCls =
  "h-13 w-full rounded-[var(--radius-input)] border border-slate-300 bg-white px-4 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-primary focus:ring-4 focus:ring-blue-primary/15 aria-[invalid=true]:border-red-emergency aria-[invalid=true]:ring-red-emergency/15";

export function FinalCta() {
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);
  const [touched, setTouched] = useState(false);

  const phoneValid = phone.replace(/\D/g, "").length === 10;

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setTouched(true);
    const form = e.currentTarget;
    if (!form.checkValidity() || !phoneValid) return;
    setSent(true);
  }

  return (
    <section id="contact" className="section relative overflow-hidden bg-navy-950">
      <div className="absolute -left-24 top-0 size-96 rounded-full bg-blue-primary/20 blur-[120px]" aria-hidden />
      <div className="absolute -right-24 bottom-0 size-96 rounded-full bg-blue-electric/15 blur-[120px]" aria-hidden />

      <div className="container-cgr relative z-10 grid gap-12 lg:grid-cols-2 lg:items-center">
        {/* Copy */}
        <div>
          <p className="eyebrow !text-blue-electric">
            <span className="size-1.5 rounded-full bg-current" /> 24/7 Statewide Dispatch
          </p>
          <h2 className="mt-4 font-heading text-[clamp(32px,4.5vw,48px)] font-extrabold leading-[1.08] tracking-[-0.025em] text-white">
            Need Garage Door Repair Today?
          </h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-slate-300">
            Speak with a California garage door specialist or request a free, no-obligation estimate.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={COMPANY.phoneHref}
              className="inline-flex h-[54px] items-center justify-center gap-2 rounded-[var(--radius-btn)] bg-red-emergency px-7 font-heading font-bold text-white shadow-[var(--shadow-btn-red)] transition hover:bg-red-emergency-hover hover:-translate-y-0.5"
            >
              <Phone className="size-5" /> Call {COMPANY.phone}
            </a>
            <a
              href="#estimate-form"
              className="inline-flex h-[54px] items-center justify-center gap-2 rounded-[var(--radius-btn)] border-2 border-white/60 px-7 font-heading font-bold text-white transition hover:bg-white hover:text-navy-950"
            >
              <ShieldCheck className="size-5" /> Request Free Estimate
            </a>
          </div>

          <p className="mt-5 flex items-center gap-2 text-sm text-slate-300">
            <Clock className="size-4 text-success" />
            Available 24/7 · Same-day service in major California cities
          </p>
        </div>

        {/* Form */}
        <div
          id="estimate-form"
          className="rounded-[var(--radius-card)] bg-white p-6 shadow-[var(--shadow-lift)] md:p-8"
        >
          {sent ? (
            <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
              <span className="grid size-16 place-items-center rounded-full bg-success/12 text-success">
                <CheckCircle2 className="size-9" />
              </span>
              <h3 className="mt-5 font-heading text-2xl font-bold text-slate-900">Request received</h3>
              <p className="mt-2 max-w-xs text-slate-600">
                Thanks! A CGR specialist will contact you shortly to confirm your free estimate.
                For immediate help, call {COMPANY.phone}.
              </p>
              <a
                href={COMPANY.phoneHref}
                className="mt-6 inline-flex h-12 items-center gap-2 rounded-[var(--radius-btn)] bg-blue-primary px-6 font-heading font-bold text-white"
              >
                <Phone className="size-[18px]" /> Call Now
              </a>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate>
              <h3 className="font-heading text-xl font-bold text-slate-900">Get a Free Estimate</h3>
              <p className="mt-1 text-sm text-slate-500">
                Most repairs completed on the first visit. No obligation.
              </p>

              <div className="mt-5 space-y-4">
                <Field label="Name" htmlFor="f-name">
                  <input id="f-name" name="name" required placeholder="Your full name" className={inputCls} style={{ height: 52 }} />
                </Field>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Phone" htmlFor="f-phone" error={touched && !phoneValid ? "Enter a 10-digit phone number" : undefined}>
                    <input
                      id="f-phone"
                      name="phone"
                      inputMode="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(maskPhone(e.target.value))}
                      aria-invalid={touched && !phoneValid}
                      placeholder="(555) 123-4567"
                      className={inputCls}
                      style={{ height: 52 }}
                    />
                  </Field>
                  <Field label="ZIP Code" htmlFor="f-zip">
                    <input id="f-zip" name="zip" inputMode="numeric" required maxLength={5} placeholder="90001" className={inputCls} style={{ height: 52 }} />
                  </Field>
                </div>

                <Field label="Service Needed" htmlFor="f-service">
                  <select id="f-service" name="service" required defaultValue="" className={inputCls} style={{ height: 52 }}>
                    <option value="" disabled>Select a service…</option>
                    {SERVICE_OPTIONS.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </Field>

                <fieldset>
                  <legend className="mb-2 block font-heading text-sm font-bold text-slate-900">
                    Preferred Contact Method
                  </legend>
                  <div className="flex gap-3">
                    {["Call", "Text", "Email"].map((m, i) => (
                      <label key={m} className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-[var(--radius-input)] border border-slate-300 px-3 py-2.5 text-sm font-semibold text-slate-700 has-[:checked]:border-blue-primary has-[:checked]:bg-blue-tint has-[:checked]:text-blue-primary-hover">
                        <input type="radio" name="contact" value={m} defaultChecked={i === 0} className="accent-blue-primary" />
                        {m}
                      </label>
                    ))}
                  </div>
                </fieldset>
              </div>

              <button
                type="submit"
                className="mt-6 inline-flex h-[54px] w-full items-center justify-center gap-2 rounded-[var(--radius-btn)] bg-blue-primary font-heading text-base font-bold text-white shadow-[var(--shadow-btn)] transition hover:bg-blue-primary-hover"
              >
                Request My Estimate
              </button>

              <p className="mt-3 text-center text-xs text-slate-500">
                By submitting, you agree to be contacted regarding your service request.
              </p>
              <p className="mt-2 text-center text-[11px] leading-relaxed text-slate-400">
                This site is protected by reCAPTCHA and the Google{" "}
                <a href="#" className="underline">Privacy Policy</a> and{" "}
                <a href="#" className="underline">Terms of Service</a> apply.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block font-heading text-sm font-bold text-slate-900">
        {label}
      </label>
      {children}
      {error && <p className="mt-1 text-xs text-red-emergency">{error}</p>}
    </div>
  );
}
