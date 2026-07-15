import Image from "next/image";
import { VALUE_PROPS } from "@/lib/content";
import { SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";

export function ValueProps() {
  return (
    <section id="why-us" className="section bg-gradient-to-b from-warm-white to-blue-tint/40">
      <div className="container-cgr">
        <SectionHeading
          eyebrow="One-Stop Service"
          title="Your One-Stop California Garage Door Repair Company"
          intro="From emergency repairs to complete door replacement, our licensed technicians provide fast, transparent and fully equipped service across California."
        />

        <div className="mt-12 flex flex-wrap justify-center gap-5">
          {/* Featured video card — real LA crews */}
          <Reveal className="group relative w-full min-h-[320px] overflow-hidden rounded-[var(--radius-card)] ring-1 ring-navy-900 shadow-[var(--shadow-card)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)] sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/images/valueprop-poster.jpg"
              aria-label="California Garage Door Repair crew arriving in Los Angeles, repairing a garage door and shaking hands"
            >
              <source src="/videos/crew-la.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/35 to-navy-950/5" />
            <div className="relative z-10 flex h-full flex-col justify-end p-7">
              <span className="mb-3 inline-flex w-fit items-center gap-2 rounded-full bg-white/12 px-3 py-1 text-xs font-bold text-white ring-1 ring-white/25 backdrop-blur">
                <span className="size-1.5 rounded-full bg-red-emergency animate-pulse" /> Los Angeles · On the Road Now
              </span>
              <h3 className="font-heading text-xl font-bold text-white">Real Local Crews, Job Done Right</h3>
              <p className="mt-2 leading-relaxed text-slate-200">
                Watch our licensed technicians arrive, repair and shake on a job well done — across
                Los Angeles and all of California.
              </p>
            </div>
          </Reveal>

          {VALUE_PROPS.map((v, i) => (
            <Reveal
              key={v.title}
              delay={i * 60}
              className={`group w-full rounded-[var(--radius-card)] p-7 ring-1 transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)] sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] ${
                v.featured
                  ? "bg-navy-950 text-white ring-navy-900"
                  : "bg-white ring-slate-200 shadow-[var(--shadow-card)]"
              }`}
            >
              <div className="relative size-16 shrink-0">
                <Image
                  src={v.img}
                  alt=""
                  fill
                  sizes="64px"
                  className="object-contain drop-shadow-[0_8px_16px_rgba(37,99,235,0.25)] transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3
                className={`mt-5 font-heading text-xl font-bold ${
                  v.featured ? "text-white" : "text-slate-900"
                }`}
              >
                {v.title}
              </h3>
              <p className={`mt-2.5 leading-relaxed ${v.featured ? "text-slate-300" : "text-slate-600"}`}>
                {v.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
