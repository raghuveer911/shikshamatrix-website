// apps/web/src/app/(website)/_components/sections-two-verticals.tsx
// ─────────────────────────────────────────────────────────────
// "One platform. Two operating systems." — School OS is the real,
// live product. Skill OS is intentionally shown as a roadmap item,
// not a live feature — there is no Skill Development module in the
// product yet, so this section must never claim otherwise (no fake
// screenshots, no "Explore Skill OS" CTA that leads nowhere real).
// ─────────────────────────────────────────────────────────────
"use client";

import { Reveal, SectionHeading, PrimaryCTA, GhostCTA, scrollToId } from "./website-ui";

const SCHOOL_MODULES = [
  "Admissions", "Academics", "Attendance", "Fees",
  "Exams", "HR & Payroll", "Communication", "Transport",
  "Library", "Finance",
];

const SKILL_MODULES = [
  "Learners", "Courses", "Batches", "Trainers",
  "Attendance", "Assessments", "Certifications", "Placement",
  "Employer Connect", "Outcomes",
];

export function TwoVerticalsSection() {
  return (
    <section id="platform-verticals" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="One Platform, Two Operating Systems"
          title="Run the Institution. Run the Program."
          sub="ShikshaMatrix starts with school administration and is expanding into skill-development and outcomes."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {/* School OS — live product */}
          <Reveal>
            <div className="sm-glass sm-glass-hover flex h-full flex-col rounded-3xl p-8">
              <div className="mb-1 inline-flex w-fit items-center gap-2 rounded-full bg-emerald-500/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-emerald-600">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Live
              </div>
              <h3 className="sm-display mt-3 text-2xl font-bold text-[var(--sm-text)]">🏫 School OS</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--sm-muted)]">
                Everything a school needs to run its institution — admissions through analytics, in one connected platform.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {SCHOOL_MODULES.map((m) => (
                  <span key={m} className="rounded-full border border-[var(--sm-border)] bg-[var(--sm-primary-soft)] px-3 py-1 text-xs font-medium text-indigo-600">
                    {m}
                  </span>
                ))}
              </div>
              <div className="mt-7">
                <PrimaryCTA onClick={() => scrollToId("platform")}>Explore School OS</PrimaryCTA>
              </div>
            </div>
          </Reveal>

          {/* Skill OS — coming soon, honestly labelled */}
          <Reveal delay={100}>
            <div className="relative flex h-full flex-col rounded-3xl border border-dashed border-[var(--sm-border-hi)] bg-[var(--sm-surface)]/60 p-8">
              <div className="mb-1 inline-flex w-fit items-center gap-2 rounded-full bg-amber-500/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-amber-600">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500" /> Coming Soon
              </div>
              <h3 className="sm-display mt-3 text-2xl font-bold text-[var(--sm-text)]">🎓 Skill OS</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--sm-muted)]">
                Taking learners from enrollment to employment — programs, batches, assessments, certification and placement, built on the same connected data model as School OS.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {SKILL_MODULES.map((m) => (
                  <span key={m} className="rounded-full border border-[var(--sm-border)] px-3 py-1 text-xs font-medium text-[var(--sm-muted)]">
                    {m}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-xs text-[var(--sm-muted)]">
                In active development — not yet available to schools. See the full plan, or get notified when it launches.
              </p>
              <div className="mt-4">
                <GhostCTA href="/skill-development">Learn More →</GhostCTA>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
