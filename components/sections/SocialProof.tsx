import Image from "next/image";
import { Quote } from "lucide-react";
import { TRUST_STATS, REVIEWS } from "@/lib/content";
import { SectionHeading, Stars } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { City } from "@/components/site/City";
import { VideoCarousel } from "@/components/site/VideoCarousel";

export function SocialProof() {
  return (
    <section id="reviews" className="section bg-warm-white">
      <div className="container-cgr">
        <SectionHeading
          eyebrow="Social Proof"
          title={<>Trusted by <City fallback="California" /> Homeowners and Businesses</>}
          align="center"
        />

        {/* Trust stats */}
        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {TRUST_STATS.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center rounded-2xl bg-white p-4 text-center ring-1 ring-slate-200 shadow-[var(--shadow-card)]"
            >
              <span className="relative size-12">
                <Image src={s.img} alt="" fill sizes="48px" className="object-contain drop-shadow-[0_6px_12px_rgba(37,99,235,0.2)]" />
              </span>
              <span className="mt-1.5 font-heading text-lg font-extrabold text-slate-900">{s.value}</span>
              <span className="text-xs font-medium text-slate-500">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Video testimonials — real Vimeo videos, moved up */}
        <div className="mt-14">
          <h3 className="text-center font-heading text-2xl font-bold text-slate-900">
            Video Testimonials From Our Clients
          </h3>
          <VideoCarousel />
        </div>

        {/* Written reviews */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <Reveal
              key={r.name}
              delay={(i % 3) * 70}
              className="flex h-full flex-col rounded-[var(--radius-card)] bg-white p-6 ring-1 ring-slate-200 shadow-[var(--shadow-card)]"
            >
              <div className="flex items-center justify-between">
                <Stars n={r.rating} />
                <span className="rounded-full bg-blue-tint px-2.5 py-1 text-xs font-bold text-blue-primary-hover">
                  {r.source}
                </span>
              </div>
              <Quote className="mt-4 size-6 text-slate-200" aria-hidden />
              <p className="mt-2 flex-1 leading-relaxed text-slate-700">{r.text}</p>
              <div className="mt-5 flex items-center gap-3 border-t border-slate-200 pt-4">
                <span className="relative size-11 shrink-0 overflow-hidden rounded-full ring-2 ring-white shadow-[var(--shadow-card)]">
                  <Image src={r.avatar} alt={r.name} fill sizes="44px" className="object-cover" />
                </span>
                <div>
                  <p className="font-heading font-bold text-slate-900">{r.name}</p>
                  <p className="text-sm text-slate-500">
                    {r.city} · <span className="text-blue-primary">{r.job}</span>
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
