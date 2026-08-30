// apps/web/src/app/(website)/_components/sections-why-now.tsx
"use client";

import { Reveal, SectionHeading } from "./website-ui";

const REASONS = [
  {
    icon: "💻",
    title: "Digital-first education operations",
    desc: "Schools and training organizations are moving away from fragmented registers, spreadsheets and disconnected software toward a single connected system.",
  },
  {
    icon: "⚙️",
    title: "AI + automation",
    desc: "Administrative workflows — attendance, reminders, reports — can increasingly be automated end-to-end, not just digitized into another form to fill.",
  },
  {
    icon: "📈",
    title: "Outcome-driven education",
    desc: "Institutions increasingly need visibility beyond enrollment — into attendance, learning, certification and eventual outcomes.",
  },
];

export function WhyNowSection() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Why Now" title="Why This Needs to Exist Today" />
        <div className="grid gap-6 sm:grid-cols-3">
          {REASONS.map((r, i) => (
            <Reveal key={r.title} delay={i * 100}>
              <div className="sm-glass sm-glass-hover h-full rounded-2xl p-7">
                <div className="text-3xl">{r.icon}</div>
                <h3 className="sm-display mt-4 text-base font-bold text-[var(--sm-text)]">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--sm-muted)]">{r.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
