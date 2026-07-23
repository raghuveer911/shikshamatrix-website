"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Hero3DScene = dynamic(() => import("./hero-3d-scene"), {
  ssr: false,
  loading: () => <div className="h-full w-full animate-pulse rounded-full bg-indigo-500/5" />,
});

export function HeroVisual() {
  const [allow3D, setAllow3D] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isSmall = window.innerWidth < 768;
    setAllow3D(!prefersReduced && !isSmall);
  }, []);

  if (!allow3D) {
    // lightweight 2D fallback — same visual language, zero WebGL cost
    return (
      <div className="grid h-full w-full place-items-center">
        <div className="sm-glass sm-pulse grid h-40 w-40 place-items-center rounded-full border-[var(--sm-border-hi)]">
          <span className="sm-display text-sm font-bold text-indigo-300">
            ShikshaMatrix
            <br />
            Core
          </span>
        </div>
      </div>
    );
  }

  return <Hero3DScene />;
}