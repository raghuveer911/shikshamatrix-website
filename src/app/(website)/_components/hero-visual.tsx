"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ICON_PATHS, MODULES, MODULE_LINKS } from "./hero-modules";

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
    // lightweight 2D fallback — same clickable modules, zero WebGL cost
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-6 py-4">
        <div className="sm-glass sm-pulse grid h-32 w-32 place-items-center rounded-full border-[var(--sm-border-hi)]">
          <span className="sm-display text-sm font-bold text-indigo-600">
            ShikshaMatrix
            <br />
            Core
          </span>
        </div>
        <div className="grid w-full max-w-md grid-cols-4 gap-2.5 sm:grid-cols-4">
          {MODULES.map((mod) => (
            <Link
              key={mod.key}
              href={MODULE_LINKS[mod.key]}
              className="sm-glass sm-glass-hover flex flex-col items-center gap-1.5 rounded-2xl px-2 py-3 text-center"
            >
              <span
                className="grid h-8 w-8 place-items-center rounded-lg"
                style={{ background: `${mod.color}1a`, border: `1px solid ${mod.color}55` }}
              >
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke={mod.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={ICON_PATHS[mod.key]} />
                </svg>
              </span>
              <span className="text-[11px] font-semibold leading-tight text-[var(--sm-text)]">{mod.label}</span>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return <Hero3DScene />;
}