import Image from "next/image";
import { Check, Phone } from "lucide-react";
import { COMPANY } from "@/lib/content";
import { City } from "@/components/site/City";
import { SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";

const bullets = [
  { lead: "Family-owned business", rest: "giving quality service to area locals since 2006." },
  { lead: "Our vision", rest: "is to become the most preferred and trusted garage door service in the US." },
  { lead: "Thousands of residents helped", rest: "with garage door repairs and new door installations." },
  { lead: "Consistently high standards", rest: "and prompt service for homeowners and businesses." },
];

export function LocalExperts() {
  return (
    <section className="section bg-gradient-to-b from-warm-white to-blue-tint/40">
      <div className="container-cgr grid gap-12 lg:grid-cols-2 lg:items-stretch">
        {/* Team photo — matches the text column height */}
        <Reveal className="relative min-h-[380px] overflow-hidden rounded-[var(--radius-card)] shadow-[var(--shadow-soft)] lg:min-h-0">
          <Image
            src="/images/team-photo.jpg"
            alt="The California Garage Door Repair team"
            fill
            sizes="(max-width:1024px) 100vw, 50vw"
            className="object-cover"
          />
        </Reveal>

        {/* Copy + bullets */}
        <div>
          <SectionHeading
            eyebrow="Local Experts"
            title={<>Garage Door Repair Experts in <City fallback="California" /> Since 2006</>}
          />
          <ul className="mt-7 space-y-4">
            {bullets.map((b) => (
              <Reveal as="li" key={b.lead} className="flex items-start gap-3">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-md bg-blue-primary text-white">
                  <Check className="size-4" strokeWidth={3} />
                </span>
                <span className="leading-relaxed text-slate-700">
                  <span className="font-bold text-slate-900">{b.lead}</span> {b.rest}
                </span>
              </Reveal>
            ))}
          </ul>
          <a
            href={COMPANY.phoneHref}
            className="btn-shine btn-stroke shine-fill-red mt-8 inline-flex h-[54px] w-full items-center justify-center gap-2 rounded-[var(--radius-btn)] px-7 font-heading text-base font-bold text-white shadow-[var(--shadow-btn-red)] sm:w-auto"
          >
            <span className="relative z-[2] inline-flex items-center gap-2">
              <Phone className="size-5" /> Call {COMPANY.phone}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
