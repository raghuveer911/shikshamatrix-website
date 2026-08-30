// apps/web/src/app/(website)/_components/sections-competition.tsx
// ─────────────────────────────────────────────────────────────
// Category comparison, not competitor bashing — no company named.
// Every ✓ here is something demonstrable in the live product today;
// Skill OS row is explicitly "Coming Soon" (not ✓) since it isn't
// built yet — see sections-two-verticals.tsx.
// ─────────────────────────────────────────────────────────────
"use client";

import { Reveal, SectionHeading } from "./website-ui";

type Mark = "yes" | "partial" | "no" | "soon";

const MARK_STYLE: Record<Mark, { symbol: string; cls: string }> = {
  yes: { symbol: "✓", cls: "text-emerald-600" },
  partial: { symbol: "~", cls: "text-amber-500" },
  no: { symbol: "✕", cls: "text-[var(--sm-muted)]" },
  soon: { symbol: "Soon", cls: "text-indigo-500 text-[10px] font-bold" },
};

const ROWS: { capability: string; legacyErp: Mark; pointSolutions: Mark; shikshamatrix: Mark }[] = [
  { capability: "School administration", legacyErp: "yes", pointSolutions: "partial", shikshamatrix: "yes" },
  { capability: "Parent mobile app", legacyErp: "partial", pointSolutions: "partial", shikshamatrix: "yes" },
  { capability: "Fees + online payments", legacyErp: "yes", pointSolutions: "partial", shikshamatrix: "yes" },
  { capability: "HR + payroll", legacyErp: "partial", pointSolutions: "partial", shikshamatrix: "yes" },
  { capability: "Parent communication", legacyErp: "partial", pointSolutions: "yes", shikshamatrix: "yes" },
  { capability: "Connected data model", legacyErp: "partial", pointSolutions: "no", shikshamatrix: "yes" },
  { capability: "Skill-development workflows", legacyErp: "no", pointSolutions: "partial", shikshamatrix: "soon" },
  { capability: "Placement / outcomes tracking", legacyErp: "no", pointSolutions: "partial", shikshamatrix: "soon" },
];

function Cell({ mark }: { mark: Mark }) {
  const s = MARK_STYLE[mark];
  return <span className={`font-bold ${s.cls}`}>{s.symbol}</span>;
}

export function CompetitionSection() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Why ShikshaMatrix"
          title="Fragmented Software Creates Fragmented Operations"
          sub="Most schools today stitch together an ERP, WhatsApp, Excel, a payment gateway and separate HR software. Here's how that compares to one connected platform."
        />
        <Reveal>
          <div className="sm-glass overflow-x-auto rounded-3xl p-6 sm:p-8">
            <table className="w-full min-w-[560px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-[var(--sm-border)] text-left text-xs font-bold uppercase tracking-wider text-[var(--sm-muted)]">
                  <th className="py-3 pr-4">Capability</th>
                  <th className="py-3 px-4 text-center">Legacy ERP</th>
                  <th className="py-3 px-4 text-center">Point Solutions</th>
                  <th className="py-3 pl-4 text-center text-indigo-600">ShikshaMatrix</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((r) => (
                  <tr key={r.capability} className="border-b border-[var(--sm-border)] last:border-0">
                    <td className="py-3.5 pr-4 font-medium text-[var(--sm-text)]">{r.capability}</td>
                    <td className="py-3.5 px-4 text-center"><Cell mark={r.legacyErp} /></td>
                    <td className="py-3.5 px-4 text-center"><Cell mark={r.pointSolutions} /></td>
                    <td className="py-3.5 pl-4 text-center bg-indigo-500/[0.04]"><Cell mark={r.shikshamatrix} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-5 text-xs text-[var(--sm-muted)]">✓ full support · ~ partial / add-on · ✕ not typically offered · Soon — in active development</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
