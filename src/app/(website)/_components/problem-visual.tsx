"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Problem3DScene = dynamic(() => import("./problem-3d-scene"), {
  ssr: false,
  loading: () => <div className="h-full w-full animate-pulse rounded-3xl bg-black/[0.03]" />,
});

export function ProblemVisual() {
  const [allow3D, setAllow3D] = useState(true);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setAllow3D(!prefersReduced);
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