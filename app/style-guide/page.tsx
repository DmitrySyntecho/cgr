import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowLeft, Star, Loader2, Check, Plus } from "lucide-react";
import { Button, ButtonLink } from "@/components/ui/Button";
import { Badge, RatingChip, TrustChip, Stars } from "@/components/ui/primitives";
import { Accordion } from "@/components/ui/Accordion";

export const metadata: Metadata = {
  title: "UI Style Guide — CGR Design System",
  robots: { index: false, follow: false },
};

const COLORS: { group: string; items: { name: string; token: string; hex: string; dark?: boolean }[] }[] = [
  {
    group: "Navy & Dark",
    items: [
      { name: "Navy 950", token: "navy-950", hex: "#0B1630", dark: true },
      { name: "Navy 900", token: "navy-900", hex: "#102142", dark: true },
      { name: "Slate 900 (text)", token: "slate-900", hex: "#172033", dark: true },
    ],
  },
  {
    group: "Blue (primary)",
    items: [
      { name: "Primary Blue", token: "blue-primary", hex: "#2563EB", dark: true },
      { name: "Blue Hover", token: "blue-primary-hover", hex: "#1D4ED8", dark: true },
      { name: "Electric Blue", token: "blue-electric", hex: "#3B82F6", dark: true },
      { name: "Blue Tint", token: "blue-tint", hex: "#EFF6FF" },
    ],
  },
  {
    group: "Accent & Status",
    items: [
      { name: "Emergency Red", token: "red-emergency", hex: "#EF3F4C", dark: true },
      { name: "Red Hover", token: "red-emergency-hover", hex: "#D92F3C", dark: true },
      { name: "Success Green", token: "success", hex: "#16A36A", dark: true },
      { name: "Star Yellow", token: "star", hex: "#FBBF24" },
    ],
  },
  {
    group: "Neutrals",
    items: [
      { name: "Warm White (bg)", token: "warm-white", hex: "#F8FAFC" },
      { name: "Pure White", token: "pure-white", hex: "#FFFFFF" },
      { name: "Slate 600", token: "slate-600", hex: "#5B6578", dark: true },
      { name: "Slate 300 (border)", token: "slate-300", hex: "#CBD5E1" },
    ],
  },
];

const inputCls =
  "h-13 w-full rounded-[var(--radius-input)] border border-slate-300 bg-white px-4 text-base outline-none transition placeholder:text-slate-400 focus:border-blue-primary focus:ring-4 focus:ring-blue-primary/15";

export default function StyleGuide() {
  return (
    <div className="min-h-screen bg-warm-white">
      {/* Top bar */}
      <header className="border-b border-slate-200 bg-white">
        <div className="container-cgr flex h-16 items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 font-heading font-bold text-slate-900">
            <ArrowLeft className="size-4" /> Back to site
          </Link>
          <span className="font-heading text-sm font-bold uppercase tracking-widest text-blue-primary">
            CGR Design System
          </span>
        </div>
      </header>

      <div className="container-cgr py-14">
        <p className="eyebrow"><span className="size-1.5 rounded-full bg-current" /> Style Guide</p>
        <h1 className="mt-3 font-heading text-[clamp(34px,5vw,52px)] font-extrabold tracking-[-0.03em]">
          UI Style Guide
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-slate-600">
          Component library, tokens and states for the California Garage Door Repair website.
          Naming maps directly to the React components in <code className="rounded bg-slate-200 px-1.5 py-0.5 text-sm">/components</code>.
        </p>

        {/* COLORS */}
        <Section id="color" title="Color Tokens" note="Use red only for urgent/phone CTAs. Interface is blue, white and navy.">
          <div className="space-y-8">
            {COLORS.map((g) => (
              <div key={g.group}>
                <h3 className="mb-3 font-heading text-sm font-bold uppercase tracking-wider text-slate-500">{g.group}</h3>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {g.items.map((c) => (
                    <div key={c.token} className="overflow-hidden rounded-2xl ring-1 ring-slate-200">
                      <div className="h-20" style={{ background: c.hex }} />
                      <div className="bg-white p-3">
                        <p className="font-heading text-sm font-bold text-slate-900">{c.name}</p>
                        <p className="text-xs text-slate-500">{c.hex}</p>
                        <p className="mt-0.5 font-mono text-[11px] text-blue-primary">bg-{c.token}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* TYPOGRAPHY */}
        <Section id="type" title="Typography Scale" note="Headings: Manrope · Body/UI: Inter. Title Case for headings; UPPERCASE only for eyebrows/badges.">
          <div className="space-y-6 rounded-[var(--radius-card)] bg-white p-8 ring-1 ring-slate-200">
            {[
              { tag: "Display / H1", cls: "font-heading text-[clamp(38px,6vw,64px)] font-extrabold tracking-[-0.03em] leading-[1.06]", txt: "Garage Door Repair" },
              { tag: "H2 · 40–48", cls: "font-heading text-[46px] font-extrabold tracking-[-0.025em] leading-[1.1]", txt: "Services & Areas" },
              { tag: "H3 · 24–28", cls: "font-heading text-[26px] font-bold leading-snug", txt: "Same-Day Response" },
              { tag: "Body Large · 18–20", cls: "text-xl leading-relaxed text-slate-600", txt: "24/7 emergency service and licensed technicians statewide." },
              { tag: "Body · 16–18", cls: "text-base leading-relaxed text-slate-600", txt: "You receive a written, no-obligation estimate before work begins." },
              { tag: "Small · 14", cls: "text-sm text-slate-500", txt: "Pricing is provided for general reference only." },
              { tag: "Eyebrow", cls: "eyebrow", txt: "CALIFORNIA STATEWIDE SERVICE" },
            ].map((t) => (
              <div key={t.tag} className="grid gap-2 border-b border-slate-100 pb-5 last:border-0 last:pb-0 sm:grid-cols-[160px_1fr] sm:items-baseline">
                <span className="font-mono text-xs text-slate-400">{t.tag}</span>
                <span className={t.cls}>{t.txt}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* SPACING */}
        <Section id="spacing" title="Spacing & Radius System">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[var(--radius-card)] bg-white p-6 ring-1 ring-slate-200">
              <h3 className="font-heading font-bold">Section rhythm</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
                <li>Desktop: <b>112px</b> · Tablet: <b>80px</b> · Mobile: <b>56px</b></li>
                <li>Container: <b>1280px</b> · Wide media: <b>1440px</b></li>
                <li>Gutters: 40 / 32 / 20px</li>
              </ul>
            </div>
            <div className="rounded-[var(--radius-card)] bg-white p-6 ring-1 ring-slate-200">
              <h3 className="font-heading font-bold">Radius</h3>
              <div className="mt-4 flex flex-wrap items-end gap-4">
                {[
                  { r: 22, l: "Card" },
                  { r: 12, l: "Button / Input" },
                  { r: 999, l: "Pill / Chip" },
                ].map((x) => (
                  <div key={x.l} className="text-center">
                    <div className="size-16 bg-blue-tint ring-1 ring-blue-primary/30" style={{ borderRadius: x.r }} />
                    <p className="mt-2 text-xs text-slate-500">{x.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* BUTTONS */}
        <Section id="buttons" title="Buttons" note="Height 48–54px. <Button /> and <ButtonLink /> — variant: primary | emergency | outline | ghost | link.">
          <div className="space-y-6 rounded-[var(--radius-card)] bg-white p-8 ring-1 ring-slate-200">
            <Row label="Variants">
              <Button variant="primary">Get Free Estimate</Button>
              <Button variant="emergency"><Phone className="size-[18px]" /> Call Now</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Text link</Button>
            </Row>
            <Row label="On dark / outline">
              <div className="flex flex-wrap gap-3 rounded-xl bg-navy-950 p-4">
                <Button variant="outline">Get a Free Estimate</Button>
                <Button variant="emergency"><Phone className="size-[18px]" /> Call Now</Button>
              </div>
            </Row>
            <Row label="Sizes">
              <Button size="md">Medium (48)</Button>
              <Button size="lg">Large (54)</Button>
            </Row>
            <Row label="States">
              <Button loading>Loading</Button>
              <Button disabled>Disabled</Button>
              <button className="inline-flex h-12 items-center gap-2 rounded-[var(--radius-btn)] bg-blue-primary px-5 font-heading text-[15px] font-bold text-white ring-4 ring-blue-primary/30">
                Focus ring
              </button>
              <span className="grid size-12 place-items-center rounded-[var(--radius-btn)] bg-blue-tint text-blue-primary" aria-label="Icon button">
                <Phone className="size-5" />
              </span>
            </Row>
          </div>
        </Section>

        {/* BADGES & CHIPS */}
        <Section id="chips" title="Badges, Chips & Ratings">
          <div className="flex flex-wrap items-center gap-4 rounded-[var(--radius-card)] bg-white p-8 ring-1 ring-slate-200">
            <Badge tone="blue">New</Badge>
            <Badge tone="red">24/7</Badge>
            <Badge tone="green"><Check className="size-3" /> Licensed</Badge>
            <TrustChip><Star className="size-3.5 text-star fill-star" /> 20 Years</TrustChip>
            <RatingChip source="Google" rating="5.0" count="400+" />
            <div className="rounded-lg bg-navy-950 p-3"><RatingChip source="Yelp" rating="5.0" count="900+" onDark /></div>
            <Stars n={5} />
          </div>
        </Section>

        {/* FORMS */}
        <Section id="forms" title="Form States" note="Radius 12px, focus ring 4px blue. Inline validation, visible labels.">
          <div className="grid gap-5 rounded-[var(--radius-card)] bg-white p-8 ring-1 ring-slate-200 md:grid-cols-2">
            <label className="block">
              <span className="mb-1.5 block font-heading text-sm font-bold">Default</span>
              <input placeholder="Your full name" className={inputCls} style={{ height: 52 }} />
            </label>
            <label className="block">
              <span className="mb-1.5 block font-heading text-sm font-bold">Focus</span>
              <input placeholder="Focused" className={`${inputCls} border-blue-primary ring-4 ring-blue-primary/15`} style={{ height: 52 }} />
            </label>
            <label className="block">
              <span className="mb-1.5 block font-heading text-sm font-bold">Error</span>
              <input placeholder="(818) 000" aria-invalid className={`${inputCls} border-red-emergency ring-4 ring-red-emergency/15`} style={{ height: 52 }} />
              <span className="mt-1 block text-xs text-red-emergency">Enter a valid 10-digit phone number.</span>
            </label>
            <label className="block">
              <span className="mb-1.5 block font-heading text-sm font-bold">Success</span>
              <input defaultValue="90210" className={`${inputCls} border-success ring-4 ring-success/15`} style={{ height: 52 }} />
              <span className="mt-1 block text-xs text-success">We service this ZIP code.</span>
            </label>
            <label className="block">
              <span className="mb-1.5 block font-heading text-sm font-bold">Select</span>
              <select className={inputCls} style={{ height: 52 }} defaultValue=""><option value="" disabled>Select a service…</option><option>Spring Repair</option></select>
            </label>
            <label className="block">
              <span className="mb-1.5 block font-heading text-sm font-bold">Textarea</span>
              <textarea rows={2} placeholder="Describe the issue" className="w-full rounded-[var(--radius-input)] border border-slate-300 bg-white p-4 outline-none focus:border-blue-primary focus:ring-4 focus:ring-blue-primary/15" />
            </label>
          </div>
        </Section>

        {/* CARDS */}
        <Section id="cards" title="Cards" note="Service · Review · Technician · Benefit · Project · Location — 22px radius, soft shadow, hover lift.">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-[var(--radius-card)] bg-white p-6 ring-1 ring-slate-200 shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
              <span className="grid size-12 place-items-center rounded-2xl bg-blue-tint text-blue-primary"><Star className="size-6" /></span>
              <h3 className="mt-4 font-heading text-lg font-bold">Benefit Card</h3>
              <p className="mt-2 text-slate-600">Icon, title and short supporting copy with hover lift.</p>
            </div>
            <div className="rounded-[var(--radius-card)] bg-navy-950 p-6 text-white shadow-[var(--shadow-card)]">
              <span className="grid size-12 place-items-center rounded-2xl bg-white/10 text-blue-electric"><Phone className="size-6" /></span>
              <h3 className="mt-4 font-heading text-lg font-bold">Featured (dark)</h3>
              <p className="mt-2 text-slate-300">Highlighted variant on navy background.</p>
            </div>
            <div className="rounded-[var(--radius-card)] bg-white p-6 ring-1 ring-slate-200 shadow-[var(--shadow-card)]">
              <div className="flex items-center justify-between"><Stars /><span className="rounded-full bg-blue-tint px-2.5 py-1 text-xs font-bold text-blue-primary-hover">Google</span></div>
              <p className="mt-3 text-slate-700">“Fast, transparent and professional.”</p>
              <p className="mt-4 border-t border-slate-200 pt-3 font-heading font-bold">Marisol R. <span className="font-normal text-sm text-slate-500">· Long Beach</span></p>
            </div>
          </div>
        </Section>

        {/* ACCORDION */}
        <Section id="accordion" title="Accordion" note="Keyboard accessible, aria-expanded/controls. First item open by default.">
          <Accordion
            defaultOpen={0}
            items={[
              { q: "What are your service hours?", a: "We operate 24/7, including weekends and holidays." },
              { q: "Which brands do you service?", a: "All major brands including LiftMaster, Clopay, Genie and more." },
            ]}
          />
        </Section>

        {/* ANNOTATIONS */}
        <Section id="notes" title="Developer Notes">
          <div className="rounded-[var(--radius-card)] bg-navy-950 p-8 text-slate-300">
            <ul className="grid gap-3 sm:grid-cols-2">
              {[
                "Tokens live in app/globals.css @theme — change once, propagate everywhere.",
                "Sections use .section (responsive vertical rhythm) + .container-cgr.",
                "Reveal wraps content for fade-up; respects prefers-reduced-motion.",
                "One H1 per page (Hero). All section titles are H2 via <SectionHeading>.",
                "Phone CTA is red; primary action CTA is blue. Never two competing CTAs per section.",
                "Images: next/image, descriptive alt text, hover scale on media only.",
                "Mobile: sticky bottom action bar (Call + Estimate), 44px min tap targets.",
                "Focus-visible ring is global (3px electric blue).",
              ].map((n) => (
                <li key={n} className="flex gap-2.5">
                  <Plus className="mt-0.5 size-4 shrink-0 text-blue-electric" />
                  <span className="text-sm">{n}</span>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <div className="mt-16 flex justify-center">
          <ButtonLink href="/" variant="primary" size="lg"><ArrowLeft className="size-5" /> Back to homepage</ButtonLink>
        </div>
      </div>
    </div>
  );
}

function Section({ id, title, note, children }: { id: string; title: string; note?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mt-16 scroll-mt-24">
      <div className="mb-6 border-l-4 border-blue-primary pl-4">
        <h2 className="font-heading text-2xl font-extrabold tracking-tight text-slate-900">{title}</h2>
        {note && <p className="mt-1 max-w-3xl text-sm text-slate-500">{note}</p>}
      </div>
      {children}
    </section>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-3 border-b border-slate-100 pb-6 last:border-0 last:pb-0 sm:grid-cols-[120px_1fr] sm:items-center">
      <span className="font-mono text-xs text-slate-400">{label}</span>
      <div className="flex flex-wrap items-center gap-3">{children}</div>
    </div>
  );
}
