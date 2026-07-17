"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, ArrowUpRight } from "lucide-react";
import { PROJECTS, PROJECT_FILTERS } from "@/lib/content";
import { SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";

export function RecentProjects() {
  const [filter, setFilter] = useState("All");
  const visible = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section bg-white">
      <div className="container-cgr">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Portfolio"
            title="Recent Garage Door Repairs Across California"
          />
          <div role="tablist" aria-label="Filter projects" className="flex flex-wrap gap-2">
            {PROJECT_FILTERS.map((f) => (
              <button
                key={f}
                role="tab"
                aria-selected={filter === f}
                onClick={() => setFilter(f)}
                className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                  filter === f
                    ? "bg-blue-primary text-white shadow-[var(--shadow-btn)]"
                    : "bg-warm-white text-slate-600 ring-1 ring-slate-200 hover:text-slate-900"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => (
            <Reveal
              as="article"
              key={p.title}
              className="overflow-hidden rounded-[var(--radius-card)] bg-white ring-1 ring-slate-200 shadow-[var(--shadow-card)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={p.image}
                  alt={`${p.service} in ${p.city}`}
                  fill
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                  className="object-cover"
                />
                <span className="absolute left-4 top-4 rounded-full bg-navy-950/80 px-3 py-1 text-xs font-bold text-white backdrop-blur">
                  {p.category}
                </span>
              </div>
              <div className="p-6">
                <p className="inline-flex items-center gap-1 text-xs font-semibold text-blue-primary">
                  <MapPin className="size-3.5" /> {p.city}
                </p>
                <h3 className="mt-1.5 font-heading text-lg font-bold text-slate-900">{p.title}</h3>
                <dl className="mt-3 space-y-1 text-sm text-slate-600">
                  <div className="flex gap-2">
                    <dt className="font-semibold text-slate-500">Service:</dt>
                    <dd>{p.service}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="font-semibold text-slate-500">Door:</dt>
                    <dd>{p.door}</dd>
                  </div>
                </dl>
                <p className="mt-3 border-t border-slate-200 pt-3 text-sm text-slate-700">{p.result}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
