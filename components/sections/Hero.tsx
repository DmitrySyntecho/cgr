import Image from "next/image";
import { Phone, ShieldCheck, BadgeCheck, Star, Tag } from "lucide-react";
import { COMPANY } from "@/lib/content";
import { City } from "@/components/site/City";
import { CouponButton } from "@/components/site/CouponButton";
import { BrandStrip } from "@/components/sections/BrandStrip";

function CurvedArrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden>
      {/* curved shaft rising to the top-right tip */}
      <path d="M7 35 C 6 18 15 11 31 12" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      {/* clear arrowhead at the tip (31,12) pointing up-right */}
      <path d="M31 12 L20 9 M31 12 L28 23" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const trustRow = [
  { icon: BadgeCheck, label: `CSLB Licensed #1077353` },
  { icon: ShieldCheck, label: "Fully Insured" },
  { icon: Star, label: "20 Years of Experience" },
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

      <div className="relative z-10 flex min-h-[640px] flex-col sm:min-h-[760px] lg:min-h-screen">
        <div className="container-wide flex flex-1 items-start pb-8 pt-[calc(76px+35px)] sm:items-center sm:pt-28">
          <div className="max-w-2xl text-center sm:text-left">
          <h1 className="mt-2 font-heading font-extrabold tracking-[-0.03em] text-white text-[clamp(38px,6vw,64px)] leading-[1.06]">
            Garage Door Repair in <City fallback="California" />
          </h1>

          <p className="mt-5 max-w-xl mx-auto sm:mx-0 text-lg leading-relaxed text-slate-200 md:text-xl">
            24/7 emergency service, same-day repairs and licensed technicians serving homes and
            businesses across <City fallback="California" />.
          </p>

          {/* Mobile: bullet list (left) + 15% offer (right, matches list height) */}
          <div className="mt-6 flex items-stretch justify-center gap-4 sm:hidden">
            <ul className="flex flex-col items-start justify-center gap-2.5">
              {trustRow.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2 text-left text-[13px] font-semibold text-white">
                  <Icon className="size-4 shrink-0 text-success" aria-hidden /> {label}
                </li>
              ))}
            </ul>
            <CouponButton className="flex flex-col items-center justify-center rounded-[var(--radius-btn)] border-2 border-dashed border-star/70 bg-white/5 px-4 text-center backdrop-blur-sm">
              <span className="font-heading text-xl font-extrabold leading-none text-star">15% OFF</span>
              <span className="mt-1.5 text-xs font-semibold leading-tight text-slate-200">Any Repair</span>
              <span className="text-xs font-semibold leading-tight text-slate-200">New Customers</span>
            </CouponButton>
          </div>

          {/* Desktop chips */}
          <ul className="mt-7 hidden flex-wrap gap-2.5 sm:flex">
            {trustRow.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-[13px] font-semibold text-white ring-1 ring-white/20 backdrop-blur"
              >
                <Icon className="size-4 shrink-0 text-success" aria-hidden /> {label}
              </li>
            ))}
          </ul>

          {/* CTA + framed 15% offer (desktop only offer next to the button) */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-start">
            {/* Call button + same-day strip (strip matches button width) */}
            <div className="flex flex-col gap-3">
              <a
                href={COMPANY.phoneHref}
                className="btn-shine btn-stroke shine-fill-red inline-flex h-[58px] items-center justify-center gap-2 rounded-[var(--radius-btn)] px-7 font-heading text-base font-bold text-white shadow-[var(--shadow-btn-red)]"
              >
                <span className="relative z-[2] inline-flex items-center gap-2">
                  <Phone className="size-5" aria-hidden /> Call Now — {COMPANY.phone}
                </span>
              </a>

              {/* Animated same-day arrows, full width of the Call button */}
              <div className="flex w-full items-center justify-between gap-2">
                <CurvedArrow className="arrow-bob size-10 shrink-0 text-star" />
                <span className="flex-1 text-center font-heading text-[17px] font-extrabold italic text-star">
                  Same-Day Service Available
                </span>
                <CurvedArrow className="arrow-bob size-10 shrink-0 -scale-x-100 text-star" />
              </div>
            </div>

            <CouponButton className="group hidden h-[58px] items-center gap-3 rounded-[var(--radius-btn)] border-2 border-dashed border-star/70 bg-white/5 px-4 backdrop-blur-sm transition hover:border-star hover:bg-white/10 sm:inline-flex">
              <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-star/15 text-star transition group-hover:scale-110">
                <Tag className="size-5" aria-hidden />
              </span>
              <span className="text-left leading-tight">
                <span className="block font-heading text-lg font-extrabold text-star">15% OFF</span>
                <span className="block text-xs font-semibold text-slate-200">Any Repair · New Customers</span>
              </span>
            </CouponButton>
          </div>

          <p className="mt-4 flex items-start justify-center gap-2 text-sm text-slate-300 sm:justify-start">
            <span className="mt-[7px] size-2 shrink-0 rounded-full bg-success animate-pulse" />
            <span>Technicians available now · Weekend and holiday service</span>
          </p>

          {/* Ratings */}
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
          </div>
          </div>
        </div>
        <BrandStrip />
      </div>
    </section>
  );
}
