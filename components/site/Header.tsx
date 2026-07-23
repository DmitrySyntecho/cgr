"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Phone } from "lucide-react";
import { COMPANY } from "@/lib/content";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-[0_4px_20px_rgba(15,23,42,0.05)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-wide flex h-[76px] items-center justify-between gap-4 md:h-[82px]">
        {/* Logo only */}
        <Link href="#top" className="flex shrink-0 items-center" aria-label={COMPANY.name}>
          <span className="flex h-14 items-center rounded-xl bg-white px-3 ring-1 ring-slate-200">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/cgr-logo.svg" alt={COMPANY.name} className="h-10 w-auto" />
          </span>
        </Link>

        {/* Right: call for a free estimate */}
        <div className="flex items-center gap-3">
          <div className="hidden text-right leading-tight sm:block">
            <span className={`flex items-center justify-end gap-1.5 text-xs font-bold ${scrolled ? "text-success" : "text-white"}`}>
              <span className="size-1.5 rounded-full bg-success animate-pulse" /> Available 24/7
            </span>
            <span className={`text-sm font-semibold ${scrolled ? "text-slate-600" : "text-slate-200"}`}>
              Call for a free estimate
            </span>
          </div>

          <a
            href={COMPANY.phoneHref}
            className="btn-shine btn-stroke shine-fill-red inline-flex h-12 items-center justify-center gap-2 rounded-[var(--radius-btn)] px-4 font-heading text-[15px] font-bold text-white shadow-[var(--shadow-btn-red)] md:h-[52px] md:px-6"
            aria-label={`Call ${COMPANY.phone}`}
          >
            <span className="relative z-[2] inline-flex items-center gap-2">
              <Phone className="size-[18px]" /> {COMPANY.phone}
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
