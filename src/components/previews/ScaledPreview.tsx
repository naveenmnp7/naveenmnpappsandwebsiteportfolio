import { useEffect, useRef, useState, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  /** The width the preview page is designed at; it is scaled to fit its container. */
  designWidth?: number;
  /** true → the full page scrolls inside the container (modal). false → fixed crop (cards). */
  scroll?: boolean;
}

export default function ScaledPreview({ children, designWidth = 1000, scroll = false }: Props) {
  const wrap = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.4);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const update = () => {
      if (wrap.current) setScale(wrap.current.clientWidth / designWidth);
      if (inner.current) setHeight(inner.current.offsetHeight);
    };
    update();
    const ro = new ResizeObserver(update);
    if (wrap.current) ro.observe(wrap.current);
    if (inner.current) ro.observe(inner.current);
    return () => ro.disconnect();
  }, [designWidth]);

  // Card thumbnails are decorative: make them inert so nothing inside is focusable/clickable.
  // Set imperatively because React 18 and 19 treat the `inert` prop differently.
  useEffect(() => {
    const el = wrap.current;
    if (!el || scroll) return;
    el.setAttribute("inert", "");
    return () => el.removeAttribute("inert");
  }, [scroll]);

  return (
    <div
      ref={wrap}
      className={scroll ? "h-full w-full overflow-y-auto overflow-x-hidden" : "pointer-events-none absolute inset-0 overflow-hidden"}
      {...(scroll
        ? { tabIndex: 0, role: "region", "aria-label": "Scrollable website preview" }
        : { "aria-hidden": true as const })}
    >
      <div style={{ height: height * scale }}>
        <div ref={inner} style={{ width: designWidth, transform: `scale(${scale})`, transformOrigin: "top left" }}>
          {children}
        </div>
      </div>
    </div>
  );
}
