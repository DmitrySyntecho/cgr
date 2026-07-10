import { Phone, ShieldCheck } from "lucide-react";
import { COMPANY } from "@/lib/content";

export function MobileActionBar() {
  return (
    <div className="lg:hidden fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 backdrop-blur-md px-3 py-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom))] shadow-[0_-6px_24px_rgba(15,23,42,0.08)]">
      <div className="grid grid-cols-2 gap-2.5">
        <a
          href={COMPANY.phoneHref}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-[var(--radius-btn)] bg-red-emergency font-heading text-[15px] font-bold text-white"
        >
          <Phone className="size-[18px]" /> Call Now
        </a>
        <a
          href="#contact"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-[var(--radius-btn)] bg-blue-primary font-heading text-[15px] font-bold text-white"
        >
          <ShieldCheck className="size-[18px]" /> Free Estimate
        </a>
      </div>
    </div>
  );
}
