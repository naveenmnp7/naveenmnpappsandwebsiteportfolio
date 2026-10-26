import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Auto-advances an index every `intervalMs`.
 * - starts at a random item on each page load (so a refresh shows something new)
 * - pauses on hover, while off-screen, and for people who prefer reduced motion
 * - `ref` must be attached to the element that should be watched for visibility
 */
export function useRotatingIndex<E extends HTMLElement = HTMLDivElement>(count: number, intervalMs = 4500) {
  const reduce = useReducedMotion();
  const ref = useRef<E>(null);
  const [index, setIndex] = useState(() => Math.floor(Math.random() * count));
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const obs = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (reduce || paused || !visible) return;
    const id = window.setInterval(() => setIndex((n) => (n + 1) % count), intervalMs);
    return () => window.clearInterval(id); // restarts after a manual pick
  }, [reduce, paused, visible, count, index, intervalMs]);

  return { index, setIndex, setPaused, ref };
}
