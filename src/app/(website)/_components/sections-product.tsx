// ─────────────────────────────────────────────────────────────
// apps/web/src/app/(website)/_components/sections-product.tsx
// Feature Hubs → Interactive OS Map → Admissions Growth →
// Principal's Day → Pricing CTA
// ─────────────────────────────────────────────────────────────
"use client";

import { useState } from "react";
import { Reveal, SectionHeading, PrimaryCTA, GhostCTA, APP_LINKS, scrollToId } from "./website-ui";

// ═════════════════════ FEATURE HUBS ══════════════════════════
// Premium naming — hubs & centers, never "modules".
const HUBS = [
  {
    icon: "✅",
    name: "Smart Attendance Center",
    result: "Never miss an absent student again.",
    points: ["QR & manual attendance", "Teacher attendance", "Instant parent alerts", "Attendance analytics", "Leave management"],
  },
  {
    icon: "₹",
    name: "Fee Intelligence Hub",
    result: "Fees arrive on time — without follow-up calls.",
    points: ["Auto reminders to parents", "Online payments & receipts", "Dues dashboard", "Fine & discount rules", "Collection reports"],
  },
  {
    icon: "👥",
    name: "Staff Operations Hub",
    result: "Your entire team, coordinated from one screen.",
    points: ["Employee records", "Salary management", "Leave approvals", "Performance tracking", "Staff ID cards"],
  },
  {
    icon: "🎓",
    name: "Admissions Growth Engine",
    result: "Turn more inquiries into admissions.",
    points: ["Lead capture & follow-ups", "Counselling pipeline", "One-click enrolment", "Conversion analytics", "Document collection"],
  },
  {
    icon: "💬",
    name: "Parent Connect Suite",
    result: "Every update reaches every parent — instantly.",
    points: ["Announcements & circulars", "Two-way messaging", "Multi-child parent app", "Event calendar", "Homework updates"],
  },
  {
    icon: "🚌",
    name: "Campus Logistics Center",
    result: "Transport, hostel and library — fully visible.",
    points: ["Route & vehicle management", "Bed-level hostel allocation", "Library circulation", "Inventory tracking", "Task management"],
  },
];

export function FeatureHubsSection() {
  return (
    <section id="platform" className="sm-mesh relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="The Platform"
          title="One Platform to Run Your Entire School"
          sub="Every hub is built around a result your school actually feels — not a checkbox on a feature list."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {HUBS.map((h, i) => (
            <Reveal key={h.name} delay={(i % 3) * 100}>
              <div className="sm-glass sm-glass-hover sm-card-liquid group relative h-full overflow-hidden rounded-3xl p-7">
                <span className="sm-card-sheen" />
                <div className="sm-clay sm-clay-hover relative z-10 mb-4 grid h-12 w-12 place-items-center rounded-2xl text-2xl transition-transform duration-300 group-hover:scale-110">
                  {h.icon}
                </div>
                <h3 className="sm-display relative z-10 mb-1 text-lg font-bold">{h.name}</h3>
                <p className="relative z-10 mb-4 text-sm font-medium text-indigo-600">{h.result}</p>
                <ul className="relative z-10 space-y-2">
                  {h.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-[var(--sm-muted)]">
                      <span className="mt-0.5 text-emerald-600">✔</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═════════════════ INTERACTIVE OS MAP ════════════════════════
// Click a module → see where its data flows across the school.
const OS_MODULES: Record<string, { icon: string; flow: string[] }> = {
  Attendance: { icon: "✅", flow: ["Attendance marked", "Parent notified instantly", "Reports updated", "Payroll synced", "Analytics refreshed"] },
  Fees: { icon: "₹", flow: ["Fee due generated", "Auto reminder to parent", "Online payment received", "Receipt issued", "Accounts updated"] },
  Admissions: { icon: "🎓", flow: ["Inquiry captured", "Follow-up scheduled", "Counselling done", "Admission confirmed", "Student record created"] },
  Exams: { icon: "📝", flow: ["Exam scheduled", "Marks entered once", "Report cards generated", "Parents notified", "Performance analytics"] },
  Transport: { icon: "🚌", flow: ["Route assigned", "Stop mapped to student", "Fee linked to route", "Driver records synced", "Parent informed"] },
  Communication: { icon: "💬", flow: ["Announcement created", "Delivered to app instantly", "Read receipts tracked", "Follow-up automated", "Zero lost circulars"] },
};

export function OSMapSection() {
  const names = Object.keys(OS_MODULES);
  const [active, setActive] = useState("Attendance");
  const mod = OS_MODULES[active];

  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="How It Works Together"
          title="Not Separate Software. One Connected System."
          sub="Tap any module and watch how one action flows through your whole school automatically."
        />
        <Reveal>
          <div className="sm-glass rounded-3xl p-6 sm:p-10">
            {/* module selector */}
            <div className="mb-8 flex flex-wrap justify-center gap-3">
              {names.map((n) => (
                <button
                  key={n}
                  onClick={() => setActive(n)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                    active === n
                      ? "bg-gradient-to-r from-indigo-500 to-violet-500 text-white shadow-[0_8px_25px_-8px_rgba(99,102,241,.8)]"
                      : "sm-glass text-[var(--sm-muted)] hover:text-[var(--sm-text)]"
                  }`}
                >
                  <span className="mr-1.5">{OS_MODULES[n].icon}</span>
                  {n}
                </button>
              ))}
            </div>

            {/* data flow */}
            <div className="flex flex-col items-stretch gap-2 lg:flex-row lg:items-center" key={active}>
              {mod.flow.map((step, i) => (
                <div key={step} className="flex flex-1 items-center gap-2 lg:flex-col">
                  <div
                    className="sm-glass w-full rounded-2xl border-[var(--sm-border-hi)] p-4 text-center"
                    style={{ animation: `sm-flowin .5s ease ${i * 120}ms both` }}
                  >
                    <div className="mb-1 text-xs font-bold uppercase tracking-wider text-indigo-600">Step {i + 1}</div>
                    <div className="text-sm font-medium">{step}</div>
                  </div>
                  {i < mod.flow.length - 1 && (
                    <div className="hidden text-indigo-500/70 lg:block" style={{ animation: `sm-flowin .5s ease ${i * 120 + 60}ms both` }}>→</div>
                  )}
                </div>
              ))}
            </div>
            <style>{`@keyframes sm-flowin { from { opacity: 0; transform: translateY(10px) } to { opacity: 1; transform: none } }`}</style>

            <p className="mt-8 text-center text-sm text-[var(--sm-muted)]">
              Zero double entry. Enter data once — every connected hub updates itself.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ═════════════════ PRINCIPAL'S DAY ═══════════════════════════
export function PrincipalDaySection() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Built for the Person Running It All"
          title="A Principal's Day — Before and After"
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-[var(--sm-border)] bg-black/[0.03] p-8">
              <div className="mb-5 text-sm font-bold uppercase tracking-wider text-red-600">Before</div>
              <ul className="space-y-4 text-sm text-[var(--sm-muted)]">
                <li>📞 Calling teachers one by one for attendance status</li>
                <li>📚 Collecting reports from three different offices</li>
                <li>💰 Asking accounts who hasn't paid this month</li>
                <li>😤 Handling parent complaints about missed circulars</li>
                <li>🌙 Leaving late — again — with work still pending</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="relative h-full overflow-hidden rounded-3xl border border-indigo-500/30 bg-[var(--sm-primary-soft)] p-8">
              <div className="sm-pulse absolute -right-10 -top-10 h-40 w-40 rounded-full bg-indigo-500/20 blur-2xl" />
              <div className="relative">
                <div className="mb-5 text-sm font-bold uppercase tracking-wider text-emerald-600">After</div>
                <p className="sm-display text-2xl font-bold leading-snug">
                  Everything visible from one dashboard —<br />
                  <span className="text-indigo-600">before the first bell rings.</span>
                </p>
                <ul className="mt-6 space-y-3 text-sm">
                  <li className="flex gap-2"><span className="text-emerald-600">✓</span> Live attendance across every class</li>
                  <li className="flex gap-2"><span className="text-emerald-600">✓</span> Today's fee collection, updated in real time</li>
                  <li className="flex gap-2"><span className="text-emerald-600">✓</span> Staff presence and pending approvals</li>
                  <li className="flex gap-2"><span className="text-emerald-600">✓</span> Every parent message answered on time</li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ═════════════════════ PRICING CTA ═══════════════════════════
export function PricingSection() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <SectionHeading
          eyebrow="Simple Pricing"
          title="Pay Per Student. No Hidden Costs."
          sub="Pricing scales with your school — small schools pay small, growing schools grow with us. Get an exact quote in your demo."
        />
        <Reveal>
          <div className="sm-glass mx-auto max-w-2xl rounded-3xl p-10">
            <div className="mb-6 grid gap-4 text-left sm:grid-cols-2">
              {[
                "All hubs included — no per-module pricing",
                "Free onboarding & data migration",
                "Staff training included",
                "Mobile apps for parents, students & staff",
                "Dedicated support on WhatsApp & phone",
                "Cancel anytime — your data stays yours",
              ].map((x) => (
                <div key={x} className="flex items-start gap-2 text-sm text-[var(--sm-muted)]">
                  <span className="mt-0.5 text-emerald-600">✔</span>
                  {x}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <PrimaryCTA onClick={() => scrollToId("contact")}>Get Your School's Quote</PrimaryCTA>
              <GhostCTA href={APP_LINKS.register}>Start Registration</GhostCTA>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}