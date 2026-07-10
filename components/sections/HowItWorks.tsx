import Image from "next/image";
import { Phone, ShieldCheck, CheckCircle2 } from "lucide-react";
import { STEPS, COMPANY } from "@/lib/content";
import { SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";

export function HowItWorks() {
  return (
    <section className="section bg-white">
      <div className="container-cgr">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-center">
          {/* Photo */}
          <Reveal className="order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-[var(--radius-card)] shadow-[var(--shadow-soft)]">
              <Image
                src="/images/svc-maintenance.jpg"
                alt="CGR technician performing an on-site garage door inspection with a tablet"
                width={1200}
                height={900}
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-2xl bg-white/95 p-4 backdrop-blur shadow-[var(--shadow-card)]">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-success/12 text-success">
                  <CheckCircle2 className="size-6" />
                </span>
                <p className="text-sm font-semibold text-slate-900">
                  25-point inspection · usually 15–30 minutes on site
                </p>
              </div>
            </div>
          </Reveal>

          {/* Steps */}
          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Simple Process"
              title="How to Get a Garage Door Estimate"
            />

            <ol className="relative mt-8 space-y-6">
              <span className="absolute left-[22px] top-4 bottom-4 hidden w-px bg-slate-200 sm:block" aria-hidden />
              {STEPS.map((s, i) => (
                <Reveal as="li" key={s.title} delay={i * 60} className="relative flex gap-4">
                  <span className="relative z-10 grid size-11 shrink-0 place-items-center rounded-full bg-blue-primary font-heading text-lg font-extrabold text-white ring-4 ring-white">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-slate-900">{s.title}</h3>
                    <p className="mt-1 leading-relaxed text-slate-600">{s.body}</p>
                  </div>
                </Reveal>
              ))}
            </ol>

            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold text-slate-600">
              {["No pressure", "No hidden fees", "Workmanship guarantee"].map((t) => (
                <span key={t} className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="size-4 text-success" /> {t}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={COMPANY.phoneHref} variant="emergency">
                <Phone className="size-[18px]" /> Call {COMPANY.phone}
              </ButtonLink>
              <ButtonLink href="#contact" variant="primary">
                <ShieldCheck className="size-[18px]" /> Get a Free Estimate
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
