"use client";

import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

/**
 * Vertical (9:16) auto-scrolling video carousel with prev/next navigation.
 * Drop the real vertical review videos into public/videos/reviews/ as
 * review-1.mp4 … review-9.mp4 (optionally review-1.jpg posters).
 */
const COUNT = 9;
const VIDEOS = Array.from({ length: COUNT }, (_, i) => i + 1);

export function VideoCarousel() {
  const trackRef = useRef<HTMLDivElement | null>(null);

  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 16 : 280;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 8;
    if (dir === 1 && atEnd) el.scrollTo({ left: 0, behavior: "smooth" });
    else el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  // Auto-advance
  useEffect(() => {
    const id = setInterval(() => scrollByCard(1), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative mt-8">
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {VIDEOS.map((n) => (
          <div
            key={n}
            data-card
            className="relative aspect-[9/16] w-[240px] shrink-0 snap-center overflow-hidden rounded-[var(--radius-card)] bg-gradient-to-b from-navy-900 to-navy-950 ring-1 ring-slate-200 shadow-[var(--shadow-card)] sm:w-[260px]"
          >
            {/* Placeholder shown until the real vertical video is added */}
            <span className="absolute inset-0 grid place-items-center">
              <span className="grid size-14 place-items-center rounded-full bg-white/10 text-white/80 ring-1 ring-white/20">
                <Play className="size-6 translate-x-0.5 fill-current" />
              </span>
            </span>
            <video
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={`/videos/reviews/review-${n}.jpg`}
            >
              <source src={`/videos/reviews/review-${n}.mp4`} type="video/mp4" />
            </video>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <button
        onClick={() => scrollByCard(-1)}
        aria-label="Previous"
        className="absolute -left-2 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white text-slate-900 shadow-[var(--shadow-soft)] ring-1 ring-slate-200 transition hover:bg-blue-primary hover:text-white lg:-left-5"
      >
        <ChevronLeft className="size-5" />
      </button>
      <button
        onClick={() => scrollByCard(1)}
        aria-label="Next"
        className="absolute -right-2 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white text-slate-900 shadow-[var(--shadow-soft)] ring-1 ring-slate-200 transition hover:bg-blue-primary hover:text-white lg:-right-5"
      >
        <ChevronRight className="size-5" />
      </button>
    </div>
  );
}
