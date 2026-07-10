import Image from "next/image";
import { Check, BadgeCheck, ShieldCheck, Award } from "lucide-react";
import { WHY_CHOOSE, COMPANY } from "@/lib/content";
import { SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";

const badges = [
  { icon: BadgeCheck, title: "Licensed", sub: COMPANY.license },
  { icon: ShieldCheck, title: "Insured", sub: `${COMPANY.insurance}` },
  { icon: Award, title: "Guaranteed", sub: "100% satisfaction" },
];

export function WhyChooseUs() {
  return (
    <section className="section bg-white">
      <div className="container-cgr">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Photo + badges */}
          <Reveal>
            <div className="relative overflow-hidden rounded-[var(--radius-card)] shadow-[var(--shadow-soft)]">
              <Image
                src="/images/team.jpg"
                alt="The CGR team of licensed California garage door technicians"
                width={1376}
                height={768}
                sizes="(max-width:1024px) 100vw, 50vw"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {badges.map((b) => (
                <div key={b.title} className="rounded-2xl bg-warm-white p-4 text-center ring-1 ring-slate-200">
                  <b.icon className="mx-auto size-6 text-blue-primary" />
                  <p className="mt-2 font-heading text-sm font-bold text-slate-900">{b.title}</p>
                  <p className="text-xs text-slate-500">{b.sub}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Checklist */}
          <div>
            <SectionHeading
              eyebrow="Why Choose Us"
              title="Why California Chooses Our Garage Door Team"
            />
            <ul className="mt-8 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {WHY_CHOOSE.map((item, i) => (
                <Reveal
                  as="li"
                  key={item}
                  delay={(i % 2) * 50}
                  className="flex items-start gap-3 rounded-xl bg-warm-white px-4 py-3 ring-1 ring-slate-200"
                >
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-success text-white">
                    <Check className="size-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-sm font-medium text-slate-700">{item}</span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
