// ─────────────────────────────────────────────────────────────
// apps/web/src/app/(website)/_components/sections-story.tsx
// Hero → Pain Points → Before/After → ROI Calculator
// Copy strategy: results first, features later.
// ─────────────────────────────────────────────────────────────
"use client";

import { useMemo, useState } from "react";
import { Reveal, SectionHeading, PrimaryCTA, GhostCTA, APP_LINKS, scrollToId } from "./website-ui";
import { HeroVisual } from "./hero-visual";
import { ProblemVisual } from "./problem-visual";

// ═════════════════════════ HERO ══════════════════════════════
export function HeroSection() {
  return (
    <section className="sm-mesh relative overflow-hidden pb-24 pt-36 lg:pt-44">
      {/* ambient blobs */}
      <div className="sm-float-slow pointer-events-none absolute -left-32 top-24 h-72 w-72 rounded-full bg-indigo-600/20 blur-3xl" />
      <div className="sm-float pointer-events-none absolute -right-24 top-1/2 h-80 w-80 rounded-full bg-violet-600/15 blur-3xl" />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-2">
        {/* Left — the pitch */}
        <div>
          <Reveal>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--sm-border)] bg-[var(--sm-primary-soft)] px-4 py-1.5 text-xs font-semibold text-indigo-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> The Operating System for Modern Schools
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="sm-display text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-[3.4rem]">
              Spend Less Time <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">Managing</span> School.
              <br />
              More Time <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">Growing</span> It.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-[var(--sm-muted)]">
              One intelligent platform that collects fees on time, tracks every attendance automatically, keeps parents informed instantly — and gives you your day back.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-8 flex flex-wrap gap-4">
              <PrimaryCTA onClick={() => scrollToId("contact")}>Book a Free Demo</PrimaryCTA>
              <GhostCTA href={APP_LINKS.register}>Register Your School</GhostCTA>
            </div>
          </Reveal>
          <Reveal delay={400}>
            <div className="mt-10 grid max-w-md grid-cols-3 gap-4">
              {[
                ["70%", "Less admin work"],
                ["75+ hrs", "Saved monthly"],
                ["1", "Platform for all"],
              ].map(([num, label]) => (
                <div key={label}>
                  <div className="sm-display text-2xl font-bold text-indigo-300">{num}</div>
                  <div className="mt-1 text-xs text-[var(--sm-muted)]">{label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Right — floating 3D school ecosystem */}
        <Reveal delay={250} className="relative mx-auto mt-4 aspect-square w-full max-w-[380px] sm:mt-0 sm:max-w-[440px] lg:max-w-[560px] xl:max-w-[620px]">
          <HeroVisual />
        </Reveal>
      </div>
    </section>
  );
}

// (2D CSS orbit removed — replaced by real 3D scene in hero-3d-scene.tsx,
// loaded via <HeroVisual/>. The 2D fallback for mobile lives inside hero-visual.tsx.)

// ═════════════════════ PAIN POINTS ═══════════════════════════
const PAINS = [
  {
    icon: "⏰",
    title: "Fee Collection Delays",
    desc: "Parents forget due dates. Follow-up calls eat staff hours. Money arrives late and cash flow suffers.",
  },
  {
    icon: "🧩",
    title: "Staff Working in Silos",
    desc: "Teachers, office staff and management coordinate over calls and paper. Nothing is visible in one place.",
  },
  {
    icon: "📄",
    title: "Too Much Manual Work",
    desc: "Attendance registers, Excel reports and paper records consume the hours your team should spend on students.",
  },
  {
    icon: "📵",
    title: "Parent Communication Gaps",
    desc: "Circulars get lost in bags. Important updates never reach home on time — and complaints reach you instead.",
  },
];

export function PainPointsSection() {
  return (
    <section id="problems" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="The Real Problem"
          title="What Is Slowing Your School Down?"
          sub="It's rarely one big issue. It's a hundred small manual tasks stealing time every single day."
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {PAINS.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <div className="sm-glass sm-glass-hover h-full rounded-3xl p-7">
                <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-red-500/10 text-2xl">{p.icon}</div>
                <h3 className="sm-display mb-2 text-lg font-bold">{p.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--sm-muted)]">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={300} className="mt-10 aspect-[16/8] w-full overflow-hidden rounded-3xl border border-[var(--sm-border)]">
          <ProblemVisual />
        </Reveal>
        <Reveal delay={350} className="mt-10 text-center">
          <div className="sm-display inline-block rounded-full border border-emerald-500/30 bg-emerald-500/10 px-6 py-3 text-sm font-bold text-emerald-300">
            ShikshaMatrix solves all of these — in one place.
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ═════════════════════ BEFORE / AFTER ════════════════════════
const BEFORE = ["Manual attendance registers", "Paper-based student records", "Endless fee follow-up calls", "Reports built in Excel for hours", "Parents complaining about missed updates"];
const AFTER = ["Real-time digital attendance", "Every record searchable in seconds", "Automatic fee reminders to parents", "Any report in one click", "Instant notifications reaching every parent"];

export function BeforeAfterSection() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="The Transformation"
          title="Your School — Before and After"
          sub="Not a feature list. The actual difference your team feels from week one."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-red-500/20 bg-red-500/[0.04] p-8">
              <div className="mb-5 flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-red-500/15 text-red-400">✕</span>
                <h3 className="sm-display text-lg font-bold text-red-300">Without ShikshaMatrix</h3>
              </div>
              <ul className="space-y-3.5">
                {BEFORE.map((x) => (
                  <li key={x} className="flex items-start gap-3 text-sm text-[var(--sm-muted)]">
                    <span className="mt-0.5 text-red-400/70">—</span>
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="h-full rounded-3xl border border-emerald-500/25 bg-emerald-500/[0.05] p-8 shadow-[0_20px_60px_-25px_rgba(34,197,94,.25)]">
              <div className="mb-5 flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-emerald-500/15 text-emerald-400">✓</span>
                <h3 className="sm-display text-lg font-bold text-emerald-300">With ShikshaMatrix</h3>
              </div>
              <ul className="space-y-3.5">
                {AFTER.map((x) => (
                  <li key={x} className="flex items-start gap-3 text-sm text-[var(--sm-text)]">
                    <span className="mt-0.5 text-emerald-400">✓</span>
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ═════════════════════ ROI CALCULATOR ════════════════════════
export function ROISection() {
  const [students, setStudents] = useState(500);

  const roi = useMemo(() => {
    const scale = students / 500;
    const attendance = Math.round(40 * scale);
    const fees = Math.round(30 * scale);
    const reports = Math.round(25 * scale);
    const manual = attendance + fees + reports;
    const withSM = Math.max(6, Math.round(manual * 0.21));
    return { attendance, fees, reports, manual, withSM, saved: manual - withSM };
  }, [students]);

  return (
    <section id="roi" className="relative py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Return on Investment"
          title="How Many Hours Is Manual Work Costing You?"
          sub="Move the slider to your school's size and see what your office staff gets back every month."
        />
        <Reveal>
          <div className="sm-glass rounded-3xl p-8 sm:p-10">
            {/* slider */}
            <div className="mb-8">
              <div className="mb-3 flex items-end justify-between">
                <label className="text-sm font-semibold text-[var(--sm-muted)]">School size</label>
                <div className="sm-display text-3xl font-bold text-indigo-300">
                  {students.toLocaleString("en-IN")} <span className="text-base font-medium text-[var(--sm-muted)]">students</span>
                </div>
              </div>
              <input
                type="range"
                min={100}
                max={3000}
                step={50}
                value={students}
                onChange={(e) => setStudents(Number(e.target.value))}
                className="w-full accent-indigo-500"
                aria-label="Number of students"
              />
              <div className="mt-1 flex justify-between text-xs text-[var(--sm-muted)]">
                <span>100</span>
                <span>3,000</span>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {/* current cost */}
              <div className="rounded-2xl border border-[var(--sm-border)] bg-black/20 p-6">
                <div className="mb-4 text-sm font-semibold text-[var(--sm-muted)]">Current monthly staff hours</div>
                {[
                  ["Attendance & registers", roi.attendance],
                  ["Fee tracking & follow-ups", roi.fees],
                  ["Reports & records", roi.reports],
                ].map(([label, hrs]) => (
                  <div key={label as string} className="mb-3 flex items-center justify-between text-sm">
                    <span className="text-[var(--sm-muted)]">{label}</span>
                    <span className="font-semibold text-red-300">{hrs} hrs</span>
                  </div>
                ))}
                <div className="mt-4 flex items-center justify-between border-t border-[var(--sm-border)] pt-4">
                  <span className="font-semibold">Total</span>
                  <span className="sm-display text-xl font-bold text-red-300">{roi.manual} hrs/month</span>
                </div>
              </div>

              {/* saved */}
              <div className="flex flex-col justify-between rounded-2xl border border-emerald-500/25 bg-emerald-500/[0.06] p-6">
                <div>
                  <div className="mb-2 text-sm font-semibold text-emerald-300">With ShikshaMatrix</div>
                  <div className="sm-display text-lg font-bold">{roi.withSM} hrs/month</div>
                  <p className="mt-2 text-xs leading-relaxed text-[var(--sm-muted)]">
                    Attendance, reminders, reports and records run automatically. Staff only handles exceptions.
                  </p>
                </div>
                <div className="mt-6 rounded-2xl bg-emerald-500/15 p-5 text-center">
                  <div className="sm-display text-4xl font-bold text-emerald-300">{roi.saved}+ hrs</div>
                  <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-emerald-400/80">Saved every month</div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <PrimaryCTA onClick={() => scrollToId("contact")}>See This For Your School — Book a Demo</PrimaryCTA>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}