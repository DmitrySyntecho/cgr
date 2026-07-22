"use client";

import { useState } from "react";
import { Play } from "lucide-react";

// Our client/team videos hosted on Vimeo (from californiagaragerepair.com).
const VIDEOS = [
  "740438967", "740439093", "740439124",
  "740439187", "740439275", "740439388",
  "740439520", "740439775", "740439867",
];

export function VimeoTestimonials() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="mt-8 grid gap-6 md:grid-cols-3">
      {VIDEOS.map((id) => (
        <div
          key={id}
          className="relative aspect-video overflow-hidden rounded-[var(--radius-card)] bg-navy-950 ring-1 ring-slate-200 shadow-[var(--shadow-card)]"
        >
          {active === id ? (
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://player.vimeo.com/video/${id}?autoplay=1&title=0&byline=0&portrait=0`}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="California Garage Door Repair video"
            />
          ) : (
            <button
              onClick={() => setActive(id)}
              className="group absolute inset-0 text-left"
              aria-label="Play video"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://vumbnail.com/${id}.jpg`}
                alt=""
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent" />
              <span className="absolute inset-0 grid place-items-center">
                <span className="grid size-16 place-items-center rounded-full bg-white/90 text-blue-primary shadow-lg transition-transform group-hover:scale-110">
                  <Play className="size-7 translate-x-0.5 fill-current" />
                </span>
              </span>
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
