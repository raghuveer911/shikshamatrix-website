// apps/web/src/app/(website)/skill-development/page.tsx
// ─────────────────────────────────────────────────────────────
// Skill OS landing page. IMPORTANT: there is no Skill Development
// module in the product yet (verified against schema.prisma and
// every route file). This page explains the vision and workflow
// honestly, as something in development — no screenshots, no "log
// in and try it" CTA, no claim that any of this is live today.
// If you build the actual module before this copy is revisited,
// update the framing (remove "in development" language, add real
// screenshots) rather than leaving this stale.
// ─────────────────────────────────────────────────────────────
import type { Metadata } from "next";
import { WebsiteNavbar, WebsiteFooter, Reveal, SectionHeading, GhostCTA } from "../_components/website-ui";
import { InquirySection } from "../_components/inquiry-form";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Skill Development Software — Coming Soon | ShikshaMatrix",
  description: "Skill OS: taking learners from enrollment to employment. In active development, built on the same connected data model as ShikshaMatrix School OS.",
  alternates: { canonical: "/skill-development" },
};

const WORKFLOW = ["Enroll", "Assess", "Train", "Track", "Certify", "Place", "Measure Outcomes"];

const MODULE_GROUPS = [
  { title: "Program Management", items: ["Schemes / programs", "Program batches", "Centers", "Program timelines"] },
  { title: "Learner Management", items: ["Registration & KYC", "Education background", "Eligibility", "Enrollment status"] },
  { title: "Course & Curriculum", items: ["Courses & modules", "Learning outcomes", "Curriculum versions", "Training hours"] },
  { title: "Batch Management", items: ["Batch creation", "Capacity & schedule", "Trainer assignment", "Batch status"] },
  { title: "Trainer Management", items: ["Trainer profiles", "Qualifications", "Allocation", "Performance"] },
  { title: "Attendance", items: ["Daily learner attendance", "Trainer attendance", "Attendance percentage", "Exceptions"] },
  { title: "Assessment", items: ["Tests & practicals", "Internal / external assessment", "Pass / fail tracking", "Reassessment"] },
  { title: "Certification", items: ["Certificate generation", "QR verification", "Digital certificates"] },
  { title: "Placement", items: ["Employer database", "Job openings", "Interview tracking", "Placement status"] },
  { title: "Outcome Intelligence", items: ["Enrolled → Attended → Completed", "→ Certified → Placed → Retained"] },
];

const AUDIENCES = [
  { icon: "🏫", title: "Skill training organizations", desc: "Run programs across one or more centers." },
  { icon: "🤝", title: "Training providers / operators", desc: "Manage batches, trainers and assessments in one place." },
  { icon: "🏢", title: "Employers", desc: "Connect open roles to job-ready, certified candidates." },
];

export default function SkillDevelopmentPage() {
  return (
    <>
      <WebsiteNavbar />
      <main className="sm-mesh min-h-screen pb-24 pt-36 lg:pt-44">
        <div className="mx-auto max-w-5xl px-6">
          {/* Hero */}
          <Reveal>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-500/25 bg-amber-500/10 px-4 py-1.5 text-xs font-semibold text-amber-600">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" /> In Development — Not Yet Available
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="sm-display text-4xl font-bold leading-[1.1] sm:text-5xl">
              Skill OS: Run Learning-to-Employment Programs
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--sm-muted)]">
              Everything a training organization needs to move a learner from enrollment to employment — built on the same connected data model as ShikshaMatrix School OS. Currently in active development.
            </p>
          </Reveal>

          {/* Workflow strip */}
          <Reveal delay={200} className="mt-10">
            <div className="sm-glass flex flex-wrap items-center gap-2 rounded-2xl p-5 sm:gap-3">
              {WORKFLOW.map((step, i) => (
                <div key={step} className="flex items-center gap-2 sm:gap-3">
                  <span className="rounded-full bg-indigo-500/10 px-3.5 py-1.5 text-xs font-semibold text-indigo-600 sm:text-sm">{step}</span>
                  {i < WORKFLOW.length - 1 && <span className="text-[var(--sm-muted)]">→</span>}
                </div>
              ))}
            </div>
          </Reveal>

          {/* Who it's for */}
          <div className="mt-20">
            <SectionHeading eyebrow="Built For" title="Who Skill OS Is Being Built For" />
            <div className="grid gap-6 sm:grid-cols-3">
              {AUDIENCES.map((a, i) => (
                <Reveal key={a.title} delay={i * 90}>
                  <div className="sm-glass h-full rounded-2xl p-6 text-center">
                    <div className="text-3xl">{a.icon}</div>
                    <h3 className="sm-display mt-3 text-base font-bold text-[var(--sm-text)]">{a.title}</h3>
                    <p className="mt-1.5 text-sm text-[var(--sm-muted)]">{a.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Planned module architecture */}
          <div className="mt-20">
            <SectionHeading
              eyebrow="Planned Architecture"
              title="What We're Building"
              sub="These are the modules planned for Skill OS — shown here for transparency about direction, not as features you can use today."
            />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {MODULE_GROUPS.map((g, i) => (
                <Reveal key={g.title} delay={(i % 6) * 70}>
                  <div className="sm-glass h-full rounded-2xl p-6">
                    <h3 className="sm-display mb-3 text-sm font-bold text-[var(--sm-text)]">{g.title}</h3>
                    <ul className="space-y-1.5">
                      {g.items.map((it) => (
                        <li key={it} className="text-xs leading-relaxed text-[var(--sm-muted)]">· {it}</li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Connection to School OS */}
          <Reveal className="mt-20">
            <div className="sm-glass rounded-3xl p-8 text-center sm:p-10">
              <h2 className="sm-display text-xl font-bold text-[var(--sm-text)] sm:text-2xl">
                Built on the Same Foundation as School OS
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-[var(--sm-muted)]">
                Skill OS isn't a separate product bolted on later — it shares the same connected, tenant-isolated data
                architecture already running School OS today, so a learner's record can eventually connect back to
                where their journey started.
              </p>
              <div className="mt-6">
                <GhostCTA href="/">← See School OS, live today</GhostCTA>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Notify me */}
        <div className="mt-10">
          <SectionHeading eyebrow="Stay Updated" title="Get Notified at Launch" />
          <InquirySection compactHeading />
        </div>
      </main>
      <WebsiteFooter />
    </>
  );
}
