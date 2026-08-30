// apps/web/src/app/(website)/_components/sections-roadmap.tsx
// ─────────────────────────────────────────────────────────────
// Deliberately NOT a dated "Q1/Q2 2027" timeline, and NOT a list of
// existing modules relabelled as "coming soon" — that undersells a
// product that's already live and complete for what it does today.
// This section is about DIRECTION and EFFECT: where the platform is
// headed and why, not a checklist of unfinished features.
// ─────────────────────────────────────────────────────────────
"use client";

import { Reveal, SectionHeading } from "./website-ui";

const DIRECTIONS = [
  {
    icon: "🎯",
    title: "From operations to outcomes",
    desc: "School OS already gives institutions real-time visibility into attendance, fees and academics. We're working toward extending that visibility further — toward the outcomes those operations are meant to produce.",
  },
  {
    icon: "🔗",
    title: "One connected journey, not two separate products",
    desc: "Skill Development is being built on the same connected data model as School OS, so a learner's journey — enrollment, attendance, assessment, certification — can eventually connect back to where it started, not live in a disconnected system.",
  },
  {
    icon: "🧠",
    title: "A deeper intelligence layer",
    desc: "The data schools already generate every day — attendance patterns, fee timelines, communication — is a foundation for surfacing insights automatically, not just storing records.",
  },
  {
    icon: "📍",
    title: "Reach beyond Rajasthan",
    desc: "ShikshaMatrix is built and proven with schools across Rajasthan today. As adoption grows, the direction is wider reach — while staying grounded in how Indian institutions actually operate.",
  },
];

export function RoadmapSection() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Where We're Headed"
          title="Building in This Direction"
          sub="Not a feature list with dates — the direction the platform is growing in, and why."
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {DIRECTIONS.map((d, i) => (
            <Reveal key={d.title} delay={i * 90}>
              <div className="sm-glass sm-glass-hover h-full rounded-2xl p-7">
                <div className="text-3xl">{d.icon}</div>
                <h3 className="sm-display mt-4 text-base font-bold text-[var(--sm-text)]">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--sm-muted)]">{d.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
