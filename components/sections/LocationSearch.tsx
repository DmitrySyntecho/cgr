"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Search, CheckCircle2, ArrowRight, Phone } from "lucide-react";
import { REGIONS, POPULAR_CITIES, COMPANY } from "@/lib/content";
import { SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";

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
          <Reveal className="rounded-[var(--radius-card)] bg-warm-white p-6 ring-1 ring-slate-200 md:p-8">
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
                  className="btn-shine btn-stroke shine-fill-blue inline-flex h-13 items-center justify-center gap-2 rounded-[var(--radius-btn)] px-6 font-heading font-bold text-white shadow-[var(--shadow-btn)]"
                  style={{ height: 52 }}
                >
                  <span className="relative z-[2] inline-flex items-center gap-2"><Search className="size-[18px]" aria-hidden /> Check Availability</span>
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
          </Reveal>

          {/* California coverage map + technician */}
          <Reveal className="relative min-h-[440px] overflow-hidden rounded-[var(--radius-card)] bg-navy-950 ring-1 ring-navy-900 lg:min-h-0">
            <Image
              src="/images/areas-map.jpg"
              alt="Glowing map of California showing statewide garage door service coverage"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-navy-950/90 via-navy-950/25 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-navy-950 to-transparent" />

            {/* Spotlight behind technician */}
            <div className="absolute bottom-0 right-0 z-[1] h-[85%] w-3/4 bg-[radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.45),rgba(37,99,235,0.15)_45%,transparent_72%)]" />

            {/* Technician cutout */}
            <Image
              src="/images/areas-tech.png"
              alt="CGR garage door technician ready to dispatch"
              width={620}
              height={827}
              className="pointer-events-none absolute -bottom-2 right-0 z-[2] h-[80%] w-auto object-contain object-bottom drop-shadow-[0_10px_40px_rgba(0,0,0,0.5)] sm:h-[86%]"
            />

            <div className="relative z-10 flex h-full flex-col p-6 md:p-8">
              <p className="eyebrow !text-blue-electric">
                <span className="size-1.5 rounded-full bg-current" /> Statewide Coverage
              </p>
              <h3 className="mt-3 max-w-[60%] font-heading text-2xl font-bold text-white sm:max-w-[62%]">
                One team, every California region
              </h3>
              <p className="mt-2 max-w-[58%] text-sm text-slate-300">
                Licensed technicians dispatched to the nearest job — day or night.
              </p>

              <a
                href={COMPANY.phoneHref}
                className="btn-shine btn-stroke mt-auto inline-flex h-12 w-full items-center justify-center gap-2 rounded-[var(--radius-btn)] bg-white/10 font-heading font-bold text-white ring-1 ring-white/20 backdrop-blur"
              >
                <span className="relative z-[2] inline-flex items-center gap-2"><Phone className="size-[18px]" /> Talk to dispatch — {COMPANY.phone}</span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
