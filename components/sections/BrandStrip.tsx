import { City } from "@/components/site/City";

const BRAND_LOGOS = [
  "amarr", "chamberlain", "chi", "clopay", "craftsman", "genie", "garaga",
  "hormann", "liftmaster", "linear", "marantec", "sommer", "wayne-dalton",
];

function Chip({ b }: { b: string }) {
  return (
    <div className="flex h-16 w-36 shrink-0 items-center justify-center px-4">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/images/brands/${b}.svg`}
        alt={`${b.replace("-", " ")} garage door brand`}
        className="max-h-8 w-auto max-w-[110px] object-contain"
        loading="lazy"
      />
    </div>
  );
}

export function BrandStrip() {
  const row = [...BRAND_LOGOS, ...BRAND_LOGOS];
  return (
    <section aria-labelledby="brands-heading" className="bg-blue-primary py-14 md:py-16">
      <div className="container-wide">
        <h2
          id="brands-heading"
          className="text-center font-heading text-2xl font-extrabold tracking-tight text-white sm:text-3xl"
        >
          We Repair All Garage Door &amp; Gate Brands in <City fallback="California" />
        </h2>
      </div>

      {/* Seamless infinite marquee */}
      <div className="mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        <div className="marquee-track flex w-max items-center gap-5">
          {row.map((b, i) => (
            <Chip key={`${b}-${i}`} b={b} />
          ))}
        </div>
      </div>
    </section>
  );
}
