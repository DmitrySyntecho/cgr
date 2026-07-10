import { Star } from "lucide-react";
import type { ReactNode } from "react";

/* ---------- Badge ---------- */
export function Badge({
  children,
  tone = "blue",
  className = "",
}: {
  children: ReactNode;
  tone?: "blue" | "red" | "green" | "white";
  className?: string;
}) {
  const tones = {
    blue: "bg-blue-tint text-blue-primary-hover",
    red: "bg-red-emergency text-white",
    green: "bg-success/12 text-success",
    white: "bg-white/15 text-white ring-1 ring-white/25 backdrop-blur",
  };
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold tracking-wide ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}

/* ---------- Rating chip (Google / Yelp) ---------- */
export function RatingChip({
  source,
  rating,
  count,
  onDark = false,
}: {
  source: string;
  rating: string;
  count: string;
  onDark?: boolean;
}) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-sm ${
        onDark ? "bg-white/10 ring-1 ring-white/20 text-white" : "bg-white ring-1 ring-slate-200 shadow-[var(--shadow-card)]"
      }`}
    >
      <span className="font-bold">{source}</span>
      <span className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="size-3.5 fill-star text-star" aria-hidden />
        ))}
      </span>
      <span className={onDark ? "text-slate-300" : "text-slate-600"}>
        {rating} · {count}
      </span>
    </div>
  );
}

/* ---------- Trust chip ---------- */
export function TrustChip({
  children,
  onDark = false,
}: {
  children: ReactNode;
  onDark?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[13px] font-semibold ${
        onDark
          ? "bg-white/10 text-white ring-1 ring-white/20"
          : "bg-white text-slate-900 ring-1 ring-slate-200"
      }`}
    >
      {children}
    </span>
  );
}

/* ---------- Section heading ---------- */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  onDark = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  onDark?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className={`eyebrow mb-4 ${onDark ? "!text-blue-electric" : ""}`}>
          <span className="size-1.5 rounded-full bg-current" />
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-heading font-extrabold tracking-[-0.025em] text-[clamp(30px,4vw,46px)] leading-[1.1] ${
          onDark ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            onDark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}

/* ---------- Stars row ---------- */
export function Stars({ n = 5 }: { n?: number }) {
  return (
    <span className="flex items-center gap-0.5" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: n }).map((_, i) => (
        <Star key={i} className="size-4 fill-star text-star" aria-hidden />
      ))}
    </span>
  );
}
