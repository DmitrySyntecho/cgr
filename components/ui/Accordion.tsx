"use client";

import { useState, type ReactNode } from "react";
import { Plus } from "lucide-react";

export type AccordionItem = {
  q: string;
  a: string;
  note?: string;
};

export function Accordion({
  items,
  defaultOpen = 0,
}: {
  items: AccordionItem[];
  defaultOpen?: number | null;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <div className="divide-y divide-slate-200 rounded-[var(--radius-card)] border border-slate-200 bg-white shadow-[var(--shadow-card)]">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `faq-panel-${i}`;
        const btnId = `faq-btn-${i}`;
        return (
          <div key={item.q}>
            <h3>
              <button
                id={btnId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left md:px-7"
              >
                <span className="font-heading text-lg font-bold text-slate-900">
                  {item.q}
                </span>
                <span
                  className={`grid size-8 shrink-0 place-items-center rounded-full bg-blue-tint text-blue-primary transition-transform duration-200 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  <Plus className="size-4" aria-hidden />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              hidden={!isOpen}
              className="px-5 pb-6 md:px-7"
            >
              {item.a.split("\n\n").map((p, k) => (
                <p key={k} className="mb-3 text-slate-600 leading-relaxed last:mb-0">
                  {p}
                </p>
              ))}
              {item.note && (
                <p className="mt-4 rounded-xl bg-warm-white px-4 py-3 text-sm text-slate-500 ring-1 ring-slate-200">
                  {item.note}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* Renderless content children variant for generic use */
export function AccordionPanels({
  items,
}: {
  items: { title: string; content: ReactNode }[];
}) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.title}
            className="overflow-hidden rounded-[var(--radius-card)] border border-slate-200 bg-white"
          >
            <button
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="font-heading font-bold text-slate-900">{item.title}</span>
              <Plus
                className={`size-5 shrink-0 text-blue-primary transition-transform ${
                  isOpen ? "rotate-45" : ""
                }`}
                aria-hidden
              />
            </button>
            {isOpen && <div className="px-5 pb-5">{item.content}</div>}
          </div>
        );
      })}
    </div>
  );
}
