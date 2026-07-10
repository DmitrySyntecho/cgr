import { BRANDS } from "@/lib/content";

export function BrandStrip() {
  const row = [...BRANDS, ...BRANDS];
  return (
    <section aria-labelledby="brands-heading" className="border-b border-slate-200 bg-white py-12 md:py-16">
      <div className="container-cgr">
        <h2
          id="brands-heading"
          className="text-center font-heading text-sm font-bold uppercase tracking-[0.14em] text-slate-400"
        >
          We Repair All Major Garage Door &amp; Gate Brands
        </h2>

        {/* Desktop grid */}
        <div className="mt-8 hidden grid-cols-3 items-center gap-x-6 gap-y-6 sm:grid md:grid-cols-5 lg:grid-cols-9">
          {BRANDS.map((b) => (
            <span
              key={b}
              className="text-center font-heading text-xl font-extrabold tracking-tight text-slate-300 grayscale transition-all duration-200 hover:text-slate-900 hover:grayscale-0"
            >
              {b}
            </span>
          ))}
        </div>

        {/* Mobile marquee */}
        <div className="mt-8 overflow-hidden sm:hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="marquee-track flex w-max items-center gap-8">
            {row.map((b, i) => (
              <span key={i} className="font-heading text-lg font-extrabold tracking-tight text-slate-300">
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
