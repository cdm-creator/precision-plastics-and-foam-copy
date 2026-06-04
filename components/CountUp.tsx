import React, { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

type CountUpProps = {
  end: number;
  duration?: number;
  className?: string;
  startOnView?: boolean;
};

export default function CountUp({
  end,
  duration = 1.0,
  className = "",
  startOnView = true
}: CountUpProps) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);
  const elRef = useRef<HTMLSpanElement | null>(null);
  const reduceMotion = useReducedMotion();

  const [shouldStart, setShouldStart] = useState(() => {
    if (reduceMotion) return true;
    return !startOnView;
  });

  useEffect(() => {
    if (reduceMotion) {
      setValue(end);
      return;
    }

    if (!startOnView || shouldStart) return;

    const node = elRef.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setShouldStart(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldStart(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );

    io.observe(node);

    return () => io.disconnect();
  }, [end, startOnView, reduceMotion, shouldStart]);

  useEffect(() => {
    if (reduceMotion) return;
    if (!shouldStart) return;

    setValue(0);
    startRef.current = null;

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    function step(ts: number) {
      if (startRef.current === null) startRef.current = ts;
      const elapsed = ts - (startRef.current as number);
      const progress = Math.min(1, elapsed / (duration * 1000));
      const eased = easeOutCubic(progress);
      const current = Math.round(eased * end);
      setValue(current);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    }

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      startRef.current = null;
    };
  }, [end, duration, reduceMotion, shouldStart]);

  return (
    <span ref={elRef} className={className} aria-hidden={reduceMotion ? false : undefined}>
      {value}
    </span>
  );
}
