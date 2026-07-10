"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Menu, X, ShieldCheck } from "lucide-react";
import { COMPANY, NAV } from "@/lib/content";
import { ButtonLink } from "@/components/ui/Button";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-[0_4px_20px_rgba(15,23,42,0.05)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-wide flex h-[76px] items-center justify-between gap-4 md:h-[82px]">
        {/* Logo */}
        <Link href="#top" className="flex items-center gap-2.5 shrink-0" aria-label={COMPANY.name}>
          <span className="grid size-11 place-items-center rounded-xl bg-white ring-1 ring-slate-200 overflow-hidden">
            <Image src="/logo-cgr.png" alt="" width={40} height={40} className="object-contain" />
          </span>
          <span className="hidden sm:block leading-tight">
            <span className={`block font-heading text-[17px] font-extrabold tracking-tight ${solid ? "text-slate-900" : "text-white"}`}>
              California Garage
            </span>
            <span className={`block text-[11px] font-semibold tracking-wide ${solid ? "text-blue-primary" : "text-blue-electric"}`}>
              DOOR REPAIR · CGR
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`rounded-lg px-3.5 py-2 text-[15px] font-semibold transition-colors ${
                solid
                  ? "text-slate-600 hover:text-blue-primary hover:bg-blue-tint"
                  : "text-white/85 hover:text-white hover:bg-white/10"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right */}
        <div className="flex items-center gap-3">
          <div className="hidden xl:flex flex-col items-end leading-tight">
            <span className={`flex items-center gap-1.5 text-xs font-bold ${solid ? "text-success" : "text-white"}`}>
              <span className="size-1.5 rounded-full bg-success animate-pulse" /> Available 24/7
            </span>
            <a
              href={COMPANY.phoneHref}
              className={`font-heading text-lg font-extrabold tracking-tight ${solid ? "text-slate-900" : "text-white"}`}
            >
              {COMPANY.phone}
            </a>
          </div>

          <a
            href={COMPANY.phoneHref}
            className="lg:hidden grid size-11 place-items-center rounded-xl bg-red-emergency text-white shadow-[var(--shadow-btn-red)]"
            aria-label={`Call ${COMPANY.phone}`}
          >
            <Phone className="size-5" />
          </a>

          <span className="hidden md:contents">
            <ButtonLink href="#contact" variant="primary">
              <ShieldCheck className="size-[18px]" aria-hidden /> Get Free Estimate
            </ButtonLink>
          </span>

          <button
            onClick={() => setOpen((v) => !v)}
            className={`lg:hidden grid size-11 place-items-center rounded-xl ring-1 ${
              solid ? "ring-slate-200 text-slate-900" : "ring-white/30 text-white"
            }`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <nav className="container-cgr py-4 flex flex-col" aria-label="Mobile">
            {NAV.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-base font-semibold text-slate-900 hover:bg-blue-tint"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 grid grid-cols-2 gap-3">
              <ButtonLink href={COMPANY.phoneHref} variant="emergency" onClick={() => setOpen(false)}>
                <Phone className="size-[18px]" /> Call Now
              </ButtonLink>
              <ButtonLink href="#contact" variant="primary" onClick={() => setOpen(false)}>
                Free Estimate
              </ButtonLink>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
