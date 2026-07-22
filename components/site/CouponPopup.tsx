"use client";

import { useEffect, useState } from "react";
import { Phone, Tag, X } from "lucide-react";
import { COMPANY } from "@/lib/content";

export function CouponPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (new URLSearchParams(window.location.search).has("nopopup")) return;
    if (sessionStorage.getItem("cgr-coupon-seen")) return;
    const t = setTimeout(() => setOpen(true), 3500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener("cgr-open-coupon", onOpen);
    return () => window.removeEventListener("cgr-open-coupon", onOpen);
  }, []);

  function close() {
    setOpen(false);
    try {
      sessionStorage.setItem("cgr-coupon-seen", "1");
    } catch {
      /* noop */
    }
  }

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="New customer discount"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
    >
      <button
        aria-label="Close"
        onClick={close}
        className="absolute inset-0 bg-navy-950/70 backdrop-blur-sm"
      />
      <div className="relative w-full max-w-md overflow-hidden rounded-[var(--radius-card)] bg-white shadow-[var(--shadow-lift)]">
        <button
          onClick={close}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 grid size-9 place-items-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-slate-200"
        >
          <X className="size-5" />
        </button>

        <div className="bg-navy-950 px-6 py-7 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-red-emergency px-3 py-1 text-xs font-bold text-white">
            <Tag className="size-3.5" /> Limited-Time Offer
          </span>
          <p className="mt-4 font-heading text-5xl font-extrabold leading-none text-white">15% OFF</p>
          <p className="mt-2 font-heading text-lg font-bold text-blue-electric">Any Repair for New Customers</p>
        </div>

        <div className="px-6 py-6 text-center">
          <p className="text-slate-600">
            Call now and mention this offer to claim your discount. Licensed, insured and available
            24/7 across California.
          </p>
          <a
            href={COMPANY.phoneHref}
            onClick={close}
            className="btn-shine btn-stroke shine-fill-red mt-5 inline-flex h-[54px] w-full items-center justify-center gap-2 rounded-[var(--radius-btn)] font-heading text-base font-bold text-white shadow-[var(--shadow-btn-red)]"
          >
            <span className="relative z-[2] inline-flex items-center gap-2">
              <Phone className="size-5" /> Call {COMPANY.phone}
            </span>
          </a>
          <button onClick={close} className="mt-3 text-sm font-semibold text-slate-500 hover:text-slate-700">
            No thanks, maybe later
          </button>
        </div>
      </div>
    </div>
  );
}
