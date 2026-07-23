import Link from "next/link";
import { Phone, Clock, BadgeCheck, ShieldCheck, ThumbsUp } from "lucide-react";
import { COMPANY, FOOTER_LINKS } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-300">
      <div className="container-cgr py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand + trust */}
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-16 items-center rounded-xl bg-white px-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/cgr-logo.svg" alt={COMPANY.name} className="h-12 w-auto" />
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-400">
              Statewide 24/7 garage door and gate repair, service and installation for California
              homes and businesses.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                { icon: BadgeCheck, label: "Licensed" },
                { icon: ShieldCheck, label: "Insured" },
                { icon: ThumbsUp, label: "Satisfaction Guarantee" },
              ].map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white/8 px-3 py-1.5 text-xs font-semibold text-white ring-1 ring-white/12"
                >
                  <Icon className="size-3.5 text-success" /> {label}
                </span>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
                {heading}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {links.map((l) => (
                  <li key={l}>
                    <Link href="#" className="text-sm text-slate-400 transition-colors hover:text-white">
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact strip */}
        <div className="mt-12 flex flex-col gap-4 rounded-[var(--radius-card)] bg-white/5 p-6 ring-1 ring-white/10 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            <a href={COMPANY.phoneHref} className="flex items-center gap-2 font-heading text-xl font-extrabold text-white">
              <Phone className="size-5 text-red-emergency" /> {COMPANY.phone}
            </a>
            <span className="flex items-center gap-2 text-sm text-slate-300">
              <Clock className="size-4 text-success" /> Available 24/7
            </span>
            <span className="flex items-center gap-2 text-sm text-slate-300">
              <BadgeCheck className="size-4 text-blue-electric" /> {COMPANY.license}
            </span>
          </div>
          <a
            href="#contact"
            className="btn-shine btn-stroke shine-fill-blue inline-flex h-12 items-center justify-center rounded-[var(--radius-btn)] px-6 font-heading font-bold text-white"
          >
            <span className="relative z-[2]">Request Free Estimate</span>
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-cgr flex flex-col gap-4 py-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© {COMPANY.since}–2026 {COMPANY.name}. All rights reserved.</p>
          <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Legal">
            {["Privacy Policy", "Terms of Service", "Accessibility", "Sitemap"].map((l) => (
              <Link key={l} href="#" className="transition-colors hover:text-white">
                {l}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
