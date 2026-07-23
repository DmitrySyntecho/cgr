"use client";

import Image from "next/image";
import { MapPin, Phone, CheckCircle2, Clock } from "lucide-react";
import { COMPANY } from "@/lib/content";
import { SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { useCity } from "@/components/site/City";

const points = [
  { icon: Clock, text: "Same-day dispatch to the nearest available technician" },
  { icon: CheckCircle2, text: "Licensed CSLB #1077353, fully insured & background-checked" },
  { icon: MapPin, text: "24/7 emergency service, weekends and holidays included" },
];

export function LocationSearch() {
  const city = useCity("California");
  const mapQuery = `Garage Door Repair ${city}`;
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&z=${city === "California" ? 6 : 11}&output=embed`;

  return (
    <section id="areas" className="section bg-white">
      <div className="container-cgr">
        <SectionHeading
          eyebrow="Areas We Serve"
          title={<>Garage Door Repair Near You in {city}</>}
          intro={`Fast, local service across ${city} — call now and we'll dispatch the nearest licensed technician.`}
          align="center"
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-stretch">
          {/* Local info + call */}
          <Reveal className="flex flex-col justify-center rounded-[var(--radius-card)] bg-warm-white p-6 ring-1 ring-slate-200 md:p-8">
            <h3 className="font-heading text-2xl font-bold text-slate-900">
              Serving {city} &amp; all of California
            </h3>
            <ul className="mt-5 space-y-3">
              {points.map((p) => (
                <li key={p.text} className="flex items-start gap-3 text-slate-700">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-blue-tint text-blue-primary">
                    <p.icon className="size-3.5" />
                  </span>
                  {p.text}
                </li>
              ))}
            </ul>
            <a
              href={COMPANY.phoneHref}
              className="btn-shine btn-stroke shine-fill-red mt-7 inline-flex h-[54px] w-full items-center justify-center gap-2 rounded-[var(--radius-btn)] font-heading text-base font-bold text-white shadow-[var(--shadow-btn-red)] sm:w-auto"
            >
              <span className="relative z-[2] inline-flex items-center gap-2">
                <Phone className="size-5" /> Call {COMPANY.phone}
              </span>
            </a>
          </Reveal>

          {/* Google Map */}
          <Reveal className="relative min-h-[420px] overflow-hidden rounded-[var(--radius-card)] ring-1 ring-slate-200 shadow-[var(--shadow-card)] lg:min-h-0">
            <iframe
              title={`Map of garage door service in ${city}`}
              src={mapSrc}
              className="absolute inset-0 h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
