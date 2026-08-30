// apps/web/src/app/(website)/_components/sections-market.tsx
// ─────────────────────────────────────────────────────────────
// Market context — every number here is public government data
// (UDISE+ / Economic Survey), cited with its source, not a TAM
// slide number pulled from a generic SaaS deck. This describes the
// addressable landscape, not a claim about ShikshaMatrix's own
// current reach (that's the separate, honest Traction section).
// ─────────────────────────────────────────────────────────────
"use client";

import { Reveal, SectionHeading } from "./website-ui";

const MARKET_FACTS = [
  { value: "14.72L", label: "Schools in India", detail: "Total recognised schools nationally" },
  { value: "3.31L", label: "Private schools", detail: "Private unaided recognised schools — the core segment School OS is built for" },
  { value: "24.8Cr", label: "Students enrolled", detail: "Across all schools nationally" },
];

export function MarketSection() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Market"
          title="A Large, Structurally Fragmented Market"
          sub="India's private school sector is large and growing — and still runs largely on disconnected registers, spreadsheets and point tools."
        />
        <Reveal>
          <div className="sm-glass grid grid-cols-1 gap-8 rounded-3xl p-8 sm:grid-cols-3">
            {MARKET_FACTS.map((f) => (
              <div key={f.label} className="text-center">
                <div className="sm-display text-3xl font-bold text-indigo-600 sm:text-4xl">{f.value}</div>
                <div className="mt-1.5 text-sm font-semibold text-[var(--sm-text)]">{f.label}</div>
                <div className="mt-1 text-xs leading-relaxed text-[var(--sm-muted)]">{f.detail}</div>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-6 text-center text-xs text-[var(--sm-muted)]">
            Source: UDISE+ 2023–24, cited in India's Economic Survey 2024–25 (Ministry of Education). ShikshaMatrix is currently live in a small fraction of this — see Traction above for where the platform actually stands today.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
