"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle2, AlertTriangle, Wrench, Plus } from "lucide-react";
import { CA_PROBLEMS } from "@/lib/content";
import { Icon } from "@/lib/icons";
import { SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";

export function CaliforniaProblems() {
  const [active, setActive] = useState(0);
  const [openMobile, setOpenMobile] = useState<number | null>(0);
  const problem = CA_PROBLEMS[active];

  return (
    <section className="section bg-gradient-to-b from-blue-tint/40 to-warm-white">
      <div className="container-cgr">
        <SectionHeading
          eyebrow="Local Expertise"
          title="Garage Door Problems Unique to California"
          intro="California's climate varies dramatically by region. We use parts, materials and repair methods selected for local conditions."
          align="center"
        />

        {/* Desktop tabs */}
        <Reveal className="mt-12 hidden lg:block">
          <div role="tablist" aria-label="California regions" className="flex flex-wrap justify-center gap-2">
            {CA_PROBLEMS.map((p, i) => (
              <button
                key={p.id}
                role="tab"
                aria-selected={active === i}
                aria-controls={`panel-${p.id}`}
                id={`tab-${p.id}`}
                onClick={() => setActive(i)}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-heading text-sm font-bold transition ${
                  active === i
                    ? "bg-navy-950 text-white shadow-[var(--shadow-card)]"
                    : "bg-white text-slate-600 ring-1 ring-slate-200 hover:text-slate-900"
                }`}
              >
                <Icon name={p.icon} className="size-4" /> {p.label}
              </button>
            ))}
          </div>

          <div
            id={`panel-${problem.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${problem.id}`}
            className="mt-8 grid gap-8 overflow-hidden rounded-[var(--radius-card)] bg-white p-2 ring-1 ring-slate-200 shadow-[var(--shadow-soft)] lg:grid-cols-2"
          >
            <div className="relative min-h-[360px] overflow-hidden rounded-[18px]">
              <Image src={problem.image} alt={problem.alt} fill sizes="50vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/55 to-transparent" />
              <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5 text-sm font-bold text-white ring-1 ring-white/25 backdrop-blur">
                <Icon name={problem.icon} className="size-4" /> {problem.label}
              </span>
              <p className="absolute bottom-5 left-5 right-5 text-sm font-medium text-white/90">
                {problem.regions}
              </p>
            </div>

            <ProblemDetail problem={problem} />
          </div>
        </Reveal>

        {/* Mobile accordion */}
        <Reveal className="mt-10 space-y-3 lg:hidden">
          {CA_PROBLEMS.map((p, i) => {
            const isOpen = openMobile === i;
            return (
              <div key={p.id} className="overflow-hidden rounded-[var(--radius-card)] bg-white ring-1 ring-slate-200">
                <button
                  aria-expanded={isOpen}
                  onClick={() => setOpenMobile(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
                >
                  <span className="inline-flex items-center gap-2.5 font-heading font-bold text-slate-900">
                    <Icon name={p.icon} className="size-5 text-blue-primary" /> {p.label}
                  </span>
                  <Plus className={`size-5 shrink-0 text-blue-primary transition-transform ${isOpen ? "rotate-45" : ""}`} />
                </button>
                {isOpen && (
                  <div className="px-2 pb-2">
                    <div className="relative mb-4 h-44 overflow-hidden rounded-[16px]">
                      <Image src={p.image} alt={p.alt} fill sizes="100vw" className="object-cover" />
                    </div>
                    <div className="px-3 pb-3">
                      <ProblemDetail problem={p} />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}

function ProblemDetail({ problem }: { problem: (typeof CA_PROBLEMS)[number] }) {
  return (
    <div className="flex flex-col justify-center p-4 lg:p-6">
      <p className="text-sm font-medium text-slate-500 lg:hidden">{problem.regions}</p>
      <div className="mt-1 lg:mt-0">
        <h3 className="flex items-center gap-2 font-heading text-base font-bold text-slate-900">
          <AlertTriangle className="size-5 text-red-emergency" /> Common Problems
        </h3>
        <ul className="mt-3 space-y-2">
          {problem.problems.map((p) => (
            <li key={p} className="flex gap-2.5 text-slate-600">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-red-emergency" />
              {p}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6 rounded-2xl bg-success/8 p-5 ring-1 ring-success/15">
        <h3 className="flex items-center gap-2 font-heading text-base font-bold text-slate-900">
          <Wrench className="size-5 text-success" /> Our Solution
        </h3>
        <p className="mt-2 leading-relaxed text-slate-700">{problem.solution}</p>
      </div>
    </div>
  );
}
