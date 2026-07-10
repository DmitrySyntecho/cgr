import Image from "next/image";
import { MapPin, ShieldCheck } from "lucide-react";
import { TECHNICIANS } from "@/lib/content";
import { SectionHeading } from "@/components/ui/primitives";

export function Technicians() {
  return (
    <section className="section bg-gradient-to-b from-warm-white to-blue-tint/40">
      <div className="container-cgr">
        <SectionHeading
          eyebrow="Meet the Team"
          title="Our California-Licensed Garage Door Technicians"
          intro="Factory-trained, background-checked professionals who show up on time, in uniform and fully equipped."
        />

        <div className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:thin] lg:grid lg:grid-cols-5 lg:overflow-visible">
          {TECHNICIANS.map((t) => (
            <article
              key={t.name}
              className="group w-[260px] shrink-0 snap-start overflow-hidden rounded-[var(--radius-card)] bg-white ring-1 ring-slate-200 shadow-[var(--shadow-card)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)] lg:w-auto"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={t.image}
                  alt={`${t.name}, ${t.role} at CGR`}
                  fill
                  sizes="260px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-bold text-slate-900 backdrop-blur">
                  <ShieldCheck className="size-3.5 text-success" /> {t.badge}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-heading font-bold text-slate-900">{t.name}</h3>
                <p className="text-sm text-blue-primary">{t.role}</p>
                <p className="mt-1.5 inline-flex items-center gap-1 text-xs text-slate-500">
                  <MapPin className="size-3.5" /> {t.region}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
