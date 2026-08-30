// apps/web/src/app/(website)/_components/sections-moat.tsx
"use client";

import { Reveal, SectionHeading } from "./website-ui";

const MOAT_FACTORS = [
  { title: "Workflow integration", desc: "Admissions, attendance, fees, exams, communication and certificates already sit in one connected data model per school — not bolted-together point tools." },
  { title: "Institutional switching cost", desc: "Once years of academic, financial and communication history live on one platform, moving away means re-entering all of it elsewhere." },
  { title: "Accumulated operational data", desc: "Every attendance mark, fee payment and result adds to a structured record of how that institution actually runs." },
  { title: "Distribution through institutions", desc: "Each school brings its own staff, students and parents onto the platform — growth compounds through the institutions already on it." },
];

export function MoatSection() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Long-Term Direction"
          title="More Than Modules — A Connected Data Model"
          sub="A features checklist can be copied. A connected record of how an institution actually operates, over years, is harder to replicate."
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {MOAT_FACTORS.map((m, i) => (
            <Reveal key={m.title} delay={i * 90}>
              <div className="sm-glass sm-glass-hover flex h-full items-start gap-4 rounded-2xl p-6">
                <span className="mt-0.5 grid h-8 w-8 flex-shrink-0 place-items-center rounded-full bg-indigo-500/15 text-indigo-600">→</span>
                <div>
                  <h3 className="sm-display mb-1.5 text-base font-bold text-[var(--sm-text)]">{m.title}</h3>
                  <p className="text-sm leading-relaxed text-[var(--sm-muted)]">{m.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={360}>
          <p className="mt-8 text-center text-xs text-[var(--sm-muted)]">
            This is a direction, not a guarantee — it has to be earned through scale, retention and the trust institutions place in the platform over time.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
