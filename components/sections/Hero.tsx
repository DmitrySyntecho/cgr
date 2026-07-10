import Image from "next/image";
import { Phone, ShieldCheck, BadgeCheck, Clock, Star, Tag } from "lucide-react";
import { COMPANY } from "@/lib/content";
import { ButtonLink } from "@/components/ui/Button";

const trustRow = [
  { icon: BadgeCheck, label: `CSLB Licensed #1077353` },
  { icon: ShieldCheck, label: "Fully Insured" },
  { icon: Star, label: "20 Years of Experience" },
  { icon: Clock, label: "Same-Day Service" },
];

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-navy-950">
      {/* Background photo */}
      <Image
        src="/images/hero-home.jpg"
        alt="Modern California home with a large contemporary garage door in warm daylight"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Navy gradient overlay for legibility (left → right) */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-navy-950/30" />

      {/* Technician cutout (right) */}
      <div className="pointer-events-none absolute bottom-0 right-0 hidden h-[92%] w-[42%] justify-end xl:flex">
        <Image
          src="/cgr-hero-source.png"
          alt="CGR garage door technician in branded uniform"
          width={900}
          height={1200}
          className="h-full w-auto object-contain object-bottom drop-shadow-2xl"
          priority
        />
      </div>

      <div className="container-wide relative z-10 flex min-h-[720px] items-center pb-28 pt-32 md:min-h-[760px] lg:min-h-[800px]">
        <div className="max-w-2xl">
          <p className="eyebrow !text-blue-electric mb-5">
            <span className="size-1.5 rounded-full bg-current" />
            California Statewide Garage Door Service
          </p>

          <h1 className="font-heading font-extrabold tracking-[-0.03em] text-white text-[clamp(38px,6vw,64px)] leading-[1.06]">
            Garage Door Repair Across California
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-200 md:text-xl">
            24/7 emergency service, same-day repairs and licensed technicians serving homes and
            businesses throughout California.
          </p>

          {/* Trust row */}
          <ul className="mt-7 flex flex-wrap gap-2.5">
            {trustRow.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-[13px] font-semibold text-white ring-1 ring-white/20 backdrop-blur"
              >
                <Icon className="size-4 text-success" aria-hidden /> {label}
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={COMPANY.phoneHref} variant="emergency" size="lg">
              <Phone className="size-5" aria-hidden /> Call Now — {COMPANY.phone}
            </ButtonLink>
            <ButtonLink href="#contact" variant="outline" size="lg">
              <ShieldCheck className="size-5" aria-hidden /> Get a Free Estimate
            </ButtonLink>
          </div>

          <p className="mt-4 flex items-center gap-2 text-sm text-slate-300">
            <span className="size-2 rounded-full bg-success animate-pulse" />
            Technicians available now · Weekend and holiday service
          </p>

          {/* Ratings + promo */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {[COMPANY.google, COMPANY.yelp].map((r, i) => (
              <div
                key={i}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-2 text-sm text-white ring-1 ring-white/20 backdrop-blur"
              >
                <span className="font-bold">{i === 0 ? "Google" : "Yelp"}</span>
                <span className="flex">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="size-3.5 fill-star text-star" aria-hidden />
                  ))}
                </span>
                <span className="text-slate-300">
                  {r.rating} · {r.count} reviews
                </span>
              </div>
            ))}

            <div className="inline-flex items-center gap-2 rounded-full bg-red-emergency px-4 py-2 text-sm font-bold text-white shadow-[var(--shadow-btn-red)]">
              <Tag className="size-4" aria-hidden /> {COMPANY.promo}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
