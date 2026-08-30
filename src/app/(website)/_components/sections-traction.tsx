// apps/web/src/app/(website)/_components/sections-traction.tsx
"use client";

import { Reveal, SectionHeading } from "./website-ui";
import { getTractionStats } from "../_data/traction";

export function TractionSection() {
  const stats = getTractionStats();
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Traction"
          title="Real Numbers, Not Projections"
          sub="Where ShikshaMatrix stands today — updated as the platform grows."
        />
        <Reveal delay={100}>
          <div className="sm-glass grid grid-cols-2 gap-8 rounded-3xl p-8 sm:grid-cols-3 lg:grid-cols-5">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="sm-display text-3xl font-bold text-indigo-600 sm:text-4xl">{s.value}</div>
                <div className="mt-1.5 text-xs text-[var(--sm-muted)]">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
