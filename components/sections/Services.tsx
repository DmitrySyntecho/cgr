import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/content";
import { SectionHeading, Badge } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";

export function Services() {
  return (
    <section id="services" className="section bg-warm-white">
      <div className="container-cgr">
        <SectionHeading
          eyebrow="Services"
          title="Garage Door Repair & Installation Services"
          intro="Complete residential and commercial garage door solutions, available statewide."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 70}>
              <Link
                href={s.href}
                className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] bg-white ring-1 ring-slate-200 shadow-[var(--shadow-card)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-[var(--ease-out-soft)] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/25 to-transparent" />
                  {s.badge && (
                    <span className="absolute left-4 top-4">
                      <Badge tone="red">{s.badge}</Badge>
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-heading text-xl font-bold text-slate-900">{s.title}</h3>
                  <p className="mt-2 flex-1 leading-relaxed text-slate-600">{s.body}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 font-heading text-sm font-bold text-blue-primary">
                    Learn more
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
