import { VALUE_PROPS } from "@/lib/content";
import { Icon } from "@/lib/icons";
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

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {VALUE_PROPS.map((v, i) => (
            <Reveal
              key={v.title}
              delay={i * 60}
              className={`group rounded-[var(--radius-card)] p-7 ring-1 transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)] ${
                v.featured
                  ? "bg-navy-950 text-white ring-navy-900 lg:row-span-1"
                  : "bg-white ring-slate-200 shadow-[var(--shadow-card)]"
              }`}
            >
              <span
                className={`grid size-13 w-13 place-items-center rounded-2xl ${
                  v.featured ? "bg-white/10 text-blue-electric" : "bg-blue-tint text-blue-primary"
                }`}
                style={{ width: 52, height: 52 }}
              >
                <Icon name={v.icon} className="size-6" />
              </span>
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
