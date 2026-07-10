import Image from "next/image";
import { Play, Quote } from "lucide-react";
import { TRUST_STATS, REVIEWS, VIDEO_TESTIMONIALS } from "@/lib/content";
import { Icon } from "@/lib/icons";
import { SectionHeading, Stars } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";

export function SocialProof() {
  return (
    <section id="reviews" className="section bg-warm-white">
      <div className="container-cgr">
        <SectionHeading
          eyebrow="Social Proof"
          title="Trusted by California Homeowners and Businesses"
          align="center"
        />

        {/* Trust stats */}
        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {TRUST_STATS.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center rounded-2xl bg-white p-4 text-center ring-1 ring-slate-200 shadow-[var(--shadow-card)]"
            >
              <Icon name={s.icon} className="size-5 text-blue-primary" />
              <span className="mt-2 font-heading text-lg font-extrabold text-slate-900">{s.value}</span>
              <span className="text-xs font-medium text-slate-500">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Reviews */}
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
              <div className="mt-5 border-t border-slate-200 pt-4">
                <p className="font-heading font-bold text-slate-900">{r.name}</p>
                <p className="text-sm text-slate-500">
                  {r.city} · <span className="text-blue-primary">{r.job}</span>
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Video testimonials */}
        <div className="mt-16">
          <h3 className="text-center font-heading text-2xl font-bold text-slate-900">
            Video Testimonials From Our Clients
          </h3>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {VIDEO_TESTIMONIALS.map((v) => (
              <button
                key={v.name}
                className="group relative aspect-video overflow-hidden rounded-[var(--radius-card)] text-left ring-1 ring-slate-200 shadow-[var(--shadow-card)]"
                aria-label={`Play video testimonial from ${v.name}, ${v.city}`}
              >
                <Image src={v.poster} alt="" fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />
                <span className="absolute inset-0 grid place-items-center">
                  <span className="grid size-16 place-items-center rounded-full bg-white/90 text-blue-primary shadow-lg transition-transform group-hover:scale-110">
                    <Play className="size-7 translate-x-0.5 fill-current" />
                  </span>
                </span>
                <span className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <span className="text-white">
                    <span className="block font-heading font-bold">{v.name}</span>
                    <span className="text-sm text-slate-300">{v.city}</span>
                  </span>
                  <span className="rounded-md bg-black/50 px-2 py-0.5 text-xs font-semibold text-white">
                    {v.duration}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
