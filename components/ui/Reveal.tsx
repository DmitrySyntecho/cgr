"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type State = "side" | "top" | "visible";

export function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [state, setState] = useState<State>("side");

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Horizontal direction: elements on the left half slide in from the left,
    // elements on the right half slide in from the right — assembling from the sides.
    const rect = node.getBoundingClientRect();
    const fromLeft = rect.left + rect.width / 2 <= window.innerWidth / 2;
    node.style.setProperty("--rx", fromLeft ? "-72px" : "72px");

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("visible");
        } else {
          // Left via the top edge (scrolling up reveals it from the top);
          // otherwise it enters from the side (scrolling down).
          setState(entry.boundingClientRect.top < 0 ? "top" : "side");
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -12% 0px" }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  const stateClass =
    state === "visible" ? "is-visible" : state === "top" ? "from-top" : "from-side";

  const Comp = Tag as React.ElementType;
  return (
    <Comp
      ref={ref}
      className={`reveal ${stateClass} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Comp>
  );
}
