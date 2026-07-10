"use client";

import { useState } from "react";
import { MapPin, Search, CheckCircle2, ArrowRight, Phone } from "lucide-react";
import { REGIONS, POPULAR_CITIES, COMPANY } from "@/lib/content";
import { SectionHeading } from "@/components/ui/primitives";

export function LocationSearch() {
  const [zip, setZip] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "ok">("idle");

  function onCheck(e: React.FormEvent) {
    e.preventDefault();
    if (/^\d{5}$/.test(zip)) setStatus("ok");
    else setStatus("error");
  }

  return (
    <section id="areas" className="section bg-white">
      <div className="container-cgr">
        <SectionHeading
          eyebrow="Areas We Serve"
          title="Find Garage Door Repair Near You"
          intro="Enter your ZIP code to check service availability and find the nearest technician."
          align="center"
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-stretch">
          {/* ZIP finder + regions */}
          <div className="rounded-[var(--radius-card)] bg-warm-white p-6 ring-1 ring-slate-200 md:p-8">
            <form onSubmit={onCheck} noValidate>
              <label htmlFor="zip" className="block font-heading text-sm font-bold text-slate-900">
                Check your ZIP code
              </label>
              <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                <div className="relative flex-1">
                  <MapPin className="pointer-events-none absolute left-3.5 top-1/2 size-5 -translate-y-1/2 text-slate-400" aria-hidden />
                  <input
                    id="zip"
                    inputMode="numeric"
                    maxLength={5}
                    value={zip}
                    onChange={(e) => {
                      setZip(e.target.value.replace(/\D/g, ""));
                      setStatus("idle");
                    }}
                    placeholder="Enter ZIP code"
                    aria-invalid={status === "error"}
                    aria-describedby="zip-msg"
                    className="h-13 w-full rounded-[var(--radius-input)] border border-slate-300 bg-white pl-11 pr-4 text-base outline-none transition focus:border-blue-primary focus:ring-4 focus:ring-blue-primary/15"
                    style={{ height: 52 }}
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex h-13 items-center justify-center gap-2 rounded-[var(--radius-btn)] bg-blue-primary px-6 font-heading font-bold text-white shadow-[var(--shadow-btn)] transition hover:bg-blue-primary-hover"
                  style={{ height: 52 }}
                >
                  <Search className="size-[18px]" aria-hidden /> Check Availability
                </button>
              </div>
              <p id="zip-msg" className="mt-2.5 min-h-5 text-sm" aria-live="polite">
                {status === "error" && (
                  <span className="text-red-emergency">Please enter a valid 5-digit ZIP code.</span>
                )}
                {status === "ok" && (
                  <span className="inline-flex items-center gap-1.5 text-success">
                    <CheckCircle2 className="size-4" /> Great news — we service {zip}. A technician is available now.
                  </span>
                )}
              </p>
            </form>

            <div className="mt-6 border-t border-slate-200 pt-6">
              <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-slate-500">
                Service Regions
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {REGIONS.map((r) => (
                  <li
                    key={r}
                    className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-sm font-medium text-slate-700 ring-1 ring-slate-200"
                  >
                    <span className="size-1.5 rounded-full bg-blue-electric" /> {r}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-slate-500">
                Popular Cities
              </h3>
              <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1.5 sm:grid-cols-3">
                {POPULAR_CITIES.map((c) => (
                  <a
                    key={c}
                    href="#contact"
                    className="group inline-flex items-center gap-1 py-1 text-sm text-slate-600 transition hover:text-blue-primary"
                  >
                    <ArrowRight className="size-3.5 -translate-x-1 opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100" />
                    {c}
                  </a>
                ))}
              </div>
              <a
                href="#contact"
                className="mt-4 inline-flex items-center gap-1.5 font-heading text-sm font-bold text-blue-primary hover:text-blue-primary-hover"
              >
                View all California service areas <ArrowRight className="size-4" />
              </a>
            </div>
          </div>

          {/* Abstract CA map */}
          <div className="relative overflow-hidden rounded-[var(--radius-card)] bg-navy-950 p-6 ring-1 ring-navy-900 md:p-8">
            <div className="absolute -right-16 -top-16 size-64 rounded-full bg-blue-primary/20 blur-3xl" />
            <div className="relative z-10 flex h-full flex-col">
              <p className="eyebrow !text-blue-electric">
                <span className="size-1.5 rounded-full bg-current" /> Statewide Coverage
              </p>
              <h3 className="mt-3 font-heading text-2xl font-bold text-white">
                One team, every California region
              </h3>

              <div className="relative mx-auto my-6 flex-1">
                <CaliforniaMap />
              </div>

              <a
                href={COMPANY.phoneHref}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-[var(--radius-btn)] bg-white/10 font-heading font-bold text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/15"
              >
                <Phone className="size-[18px]" /> Talk to dispatch — {COMPANY.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Stylized California silhouette with regional markers */
function CaliforniaMap() {
  const markers = [
    { x: 30, y: 18, label: "Bay Area" },
    { x: 44, y: 30, label: "Sacramento" },
    { x: 52, y: 46, label: "Central Valley" },
    { x: 70, y: 72, label: "Los Angeles" },
    { x: 82, y: 88, label: "San Diego" },
  ];
  return (
    <svg viewBox="0 0 100 120" className="mx-auto h-64 w-auto" role="img" aria-label="Map of California service regions">
      <path
        d="M14 6 L34 4 L40 20 L46 26 L44 40 L58 60 L70 66 L78 78 L92 96 L86 110 L74 112 L64 96 L52 84 L40 74 L30 58 L22 40 L16 24 Z"
        fill="rgba(59,130,246,0.12)"
        stroke="rgba(59,130,246,0.55)"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      {markers.map((m) => (
        <g key={m.label}>
          <circle cx={m.x} cy={m.y} r="3.4" fill="#3B82F6" stroke="#fff" strokeWidth="1.1" />
          <circle cx={m.x} cy={m.y} r="6.5" fill="none" stroke="#3B82F6" strokeWidth="0.8" opacity="0.5" />
          <text x={m.x + 6} y={m.y + 2.5} fill="#CBD5E1" fontSize="4.4" fontWeight="600">
            {m.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
