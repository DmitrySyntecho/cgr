import Image from "next/image";
import { Phone, ShieldCheck, BadgeCheck, Clock, Star, Tag } from "lucide-react";
import { COMPANY } from "@/lib/content";
import { City } from "@/components/site/City";
import { CouponButton } from "@/components/site/CouponButton";

function CurvedArrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden>
      <path d="M5 28 C 4 13 12 6 22 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M22 6 L15.5 5 M22 6 L23 12.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const trustRow = [
  { icon: BadgeCheck, label: `CSLB Licensed #1077353` },
  { icon: ShieldCheck, label: "Fully Insured" },
  { icon: Star, label: "20 Years of Experience" },
  { icon: Clock, label: "Same-Day Service" },
];

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-navy-950">
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/hero-home.jpg"
        aria-hidden="true"
      >
        <source src="/videos/crew-la.mp4" type="video/mp4" />
      </video>
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

      <div className="container-wide relative z-10 flex min-h-[600px] items-start pb-16 pt-[calc(76px+35px)] sm:min-h-[720px] sm:items-center sm:pb-28 sm:pt-32 md:min-h-[760px] lg:min-h-[800px]">
        <div className="max-w-2xl text-center sm:text-left">
          <h1 className="mt-2 font-heading font-extrabold tracking-[-0.03em] text-white text-[clamp(38px,6vw,64px)] leading-[1.06]">
            Garage Door Repair in <City fallback="California" />
          </h1>

          <p className="mt-5 max-w-xl mx-auto sm:mx-0 text-lg leading-relaxed text-slate-200 md:text-xl">
            24/7 emergency service, same-day repairs and licensed technicians serving homes and
            businesses across <City fallback="California" />.
          </p>

          {/* Trust row — plain labels on mobile, chips from sm+ */}
          <ul className="mt-7 grid grid-cols-2 gap-x-4 gap-y-2 sm:flex sm:flex-wrap sm:gap-2.5">
            {trustRow.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center justify-center gap-2 py-1 text-[13px] font-semibold text-white sm:rounded-full sm:bg-white/10 sm:px-3.5 sm:py-1.5 sm:ring-1 sm:ring-white/20 sm:backdrop-blur"
              >
                <Icon className="size-4 shrink-0 text-success" aria-hidden /> {label}
              </li>
            ))}
          </ul>

          {/* CTAs — calls only */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={COMPANY.phoneHref}
              className="btn-shine btn-stroke shine-fill-red inline-flex h-[54px] items-center justify-center gap-2 rounded-[var(--radius-btn)] px-7 font-heading text-base font-bold text-white shadow-[var(--shadow-btn-red)]"
            >
              <span className="relative z-[2] inline-flex items-center gap-2">
                <Phone className="size-5" aria-hidden /> Call Now — {COMPANY.phone}
              </span>
            </a>
            <a
              href={COMPANY.phoneHref}
              className="btn-shine btn-stroke inline-flex h-[54px] items-center justify-center gap-2 rounded-[var(--radius-btn)] border-2 border-white/60 px-7 font-heading text-base font-bold text-white backdrop-blur-sm hover:bg-white/10"
            >
              <span className="relative z-[2] inline-flex items-center gap-2">
                <ShieldCheck className="size-5" aria-hidden /> Call for a Free Estimate
              </span>
            </a>
          </div>

          {/* Same-day arrows pointing to the Call button */}
          <div className="mt-4 flex items-center justify-center gap-2 sm:justify-start">
            <CurvedArrow className="size-8 shrink-0 text-star" />
            <span className="font-heading text-lg font-extrabold italic text-star">
              Same-Day Service Available
            </span>
            <CurvedArrow className="size-8 shrink-0 -scale-x-100 text-star" />
          </div>

          <p className="mt-4 flex items-center justify-center gap-2 text-sm text-slate-300 sm:justify-start">
            <span className="size-2 shrink-0 rounded-full bg-success animate-pulse" />
            Technicians available now · Weekend and holiday service
          </p>

          {/* Ratings + promo */}
          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            {[
              { name: "Google", ...COMPANY.google },
              { name: "eKomi", ...COMPANY.ekomi },
            ].map((r) => (
              <div
                key={r.name}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-white/10 px-3.5 py-2 text-sm text-white ring-1 ring-white/20 backdrop-blur sm:inline-flex sm:w-auto"
              >
                <span className="font-bold">{r.name}</span>
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

            <CouponButton className="flex w-full items-center justify-center gap-2 rounded-full bg-red-emergency px-4 py-2 text-sm font-bold text-white shadow-[var(--shadow-btn-red)] transition hover:bg-red-emergency-hover sm:inline-flex sm:w-auto">
              <Tag className="size-4 shrink-0" aria-hidden /> {COMPANY.promo}
            </CouponButton>
          </div>
        </div>
      </div>
    </section>
  );
}
