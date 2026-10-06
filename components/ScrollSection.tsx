"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

/**
 * Lookbook-/kortleks-effekt:
 * När man scrollar förbi en sektion stannar den kvar, krymper och tonar
 * in i bakgrunden, medan nästa sektion glider upp över den.
 * Följer scrollen exakt och stängs av vid "minska rörelse".
 */
export default function ScrollSection({
  children,
  index,
  last = false,
}: {
  children: ReactNode;
  index: number;
  last?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  // Fast markör i sidflödet precis efter sektionen (påverkas inte av sticky)
  const endRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  // Höga sektioner fastnar när deras botten når skärmens botten
  const [stickyTop, setStickyTop] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () =>
      setStickyTop(Math.min(0, window.innerHeight - el.offsetHeight));
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  // 0 när sektionen fastnar, 1 när nästa sektion har täckt den helt
  const { scrollYProgress } = useScroll({
    target: endRef,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.88]);
  const radius = useTransform(scrollYProgress, [0, 0.25], [0, 32]);
  const shade = useTransform(scrollYProgress, [0, 1], [0, 0.65]);

  if (reduceMotion) return <div>{children}</div>;

  return (
    <>
      <motion.div
        ref={ref}
        className="relative overflow-hidden"
        style={{
          position: last ? "relative" : "sticky",
          top: stickyTop,
          zIndex: index,
          scale: last ? 1 : scale,
          borderRadius: last ? 0 : radius,
          transformOrigin: "center bottom",
          willChange: "transform",
        }}
      >
        {children}
        {!last && (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-background"
            style={{ opacity: shade }}
          />
        )}
      </motion.div>
      <div ref={endRef} aria-hidden className="h-0" />
    </>
  );
}
