"use client";

import { useEffect, useState } from "react";

export function AnimatedNumber({
  value,
  suffix = "",
  duration = 2000,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    let frame: number;
    const start = performance.now();

    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const next = Math.round(value * eased);

      setCurrent(next);

      if (progress < 1) frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [value, duration]);

  return (
    <span className="text-3xl md:text-4xl font-extrabold tracking-tight">
      {current}
      {suffix}
    </span>
  );
}
