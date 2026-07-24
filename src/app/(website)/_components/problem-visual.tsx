"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Problem3DScene = dynamic(() => import("./problem-3d-scene"), {
  ssr: false,
  loading: () => <div className="h-full w-full animate-pulse rounded-3xl bg-white/[0.02]" />,
});

export function ProblemVisual() {
  const [allow3D, setAllow3D] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isSmall = window.innerWidth < 768;
    setAllow3D(!prefersReduced && !isSmall);
  }, []);

  if (!allow3D) {
    return (
      <div className="grid h-full w-full place-items-center text-sm text-[var(--sm-muted)]">
        Chaotic manual work → one connected, glowing system.
      </div>
    );
  }

  return <Problem3DScene />;
}