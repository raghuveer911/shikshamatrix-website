// apps/web/src/app/(website)/_components/sections-trust.tsx
// ─────────────────────────────────────────────────────────────
// Every claim here maps to something real in the codebase — no
// "bank-grade security" or claimed certifications the company
// doesn't hold. If you add/remove a capability, keep this section
// in sync rather than letting it drift into an aspirational list.
// ─────────────────────────────────────────────────────────────
"use client";

import { Reveal, SectionHeading } from "./website-ui";

const SECURITY_POINTS = [
  { title: "Role-based access", desc: "Every staff role — teacher, accountant, front office, HR, librarian and more — only sees the permissions assigned to it." },
  { title: "Tenant isolation", desc: "Every school's data is scoped and isolated at the database level — one school can never see another's records." },
  { title: "Audit trails", desc: "Sensitive actions across finance, HR and admin are logged with who did what and when." },
  { title: "Automated backups", desc: "Scheduled backups run without manual intervention." },
];

const PAYMENT_STATES = ["Initiated", "Pending", "Success", "Failed", "Refunded", "Partially Refunded", "Expired"];

export function TrustSection() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Trust & Reliability"
          title="Built for Sensitive Education Data"
          sub="No unverified claims here — this is what the platform actually does."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="sm-glass h-full rounded-3xl p-8">
              <h3 className="sm-display mb-5 text-lg font-bold text-[var(--sm-text)]">Security</h3>
              <div className="space-y-5">
                {SECURITY_POINTS.map((p) => (
                  <div key={p.title} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-7 w-7 flex-shrink-0 place-items-center rounded-full bg-indigo-500/15 text-indigo-600">✓</span>
                    <div>
                      <p className="text-sm font-semibold text-[var(--sm-text)]">{p.title}</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-[var(--sm-muted)]">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="sm-glass h-full rounded-3xl p-8">
              <h3 className="sm-display mb-2 text-lg font-bold text-[var(--sm-text)]">Payments That Reconcile Automatically</h3>
              <p className="mb-5 text-xs leading-relaxed text-[var(--sm-muted)]">
                Every online payment moves through a tracked lifecycle, verified against the payment gateway before a fee is marked collected.
              </p>
              <div className="flex flex-wrap gap-2">
                {PAYMENT_STATES.map((s) => (
                  <span key={s} className="rounded-full border border-[var(--sm-border)] bg-[var(--sm-primary-soft)] px-3 py-1.5 text-xs font-medium text-indigo-600">
                    {s}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-xs leading-relaxed text-[var(--sm-muted)]">
                Parent pays → gateway confirms → fee ledger updates → receipt issued → school notified — automatically, without manual reconciliation.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
