import type { Metadata } from "next";
import { WebsiteNavbar, WebsiteFooter, Reveal, SectionHeading, PrimaryCTA, APP_LINKS } from "../_components/website-ui";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "ShikshaMatrix vs Traditional School Management",
  description: "See how ShikshaMatrix compares to running a school on registers, spreadsheets, and phone calls — and what changes when everything moves to one connected platform.",
  alternates: { canonical: "/compare" },
};

const ROWS = [
  { area: "Attendance", old: "Marked on paper registers, manually compiled into reports", new: "Marked digitally in seconds, parents notified automatically, reports generate instantly" },
  { area: "Fee Collection", old: "Cash/cheque tracked in ledgers, manual follow-up calls for dues", new: "Online + offline payment tracking, automatic due reminders, digital receipts" },
  { area: "Parent Communication", old: "Phone calls, printed circulars, WhatsApp groups run by individual teachers", new: "One official channel — notices, homework, attendance, fees, all in the Parent App" },
  { area: "Staff Records & Payroll", old: "Spreadsheets maintained by one person, hard to audit", new: "Centralized HR module — attendance, leave, payroll, documents in one place" },
  { area: "Admissions", old: "Paper forms, manual data entry into multiple registers", new: "Digital admission forms, data flows directly into the student's full record" },
  { area: "Data Safety", old: "Single physical copies, vulnerable to loss/damage", new: "Cloud-backed, access-controlled, isolated per school" },
  { area: "Visibility for Management", old: "Reports compiled manually, often outdated by the time they're ready", new: "Real-time dashboards across attendance, fees, and academics" },
];

export default function ComparePage() {
  return (
    <>
      <WebsiteNavbar />
      <main className="sm-mesh min-h-screen pb-24 pt-36 lg:pt-44">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading
            eyebrow="Compare"
            title="ShikshaMatrix vs Traditional School Management"
            sub="Most Indian schools still run on a mix of paper registers, spreadsheets, and phone calls. Here's what changes when it all moves to one connected platform."
          />

          <Reveal className="overflow-hidden rounded-3xl">
            <div className="grid grid-cols-1 divide-y divide-[var(--sm-border)] sm:grid-cols-[1fr_1.4fr_1.4fr] sm:divide-y-0">
              {/* Header row (desktop) */}
              <div className="hidden bg-white/[0.03] p-5 text-xs font-bold uppercase tracking-wider text-[var(--sm-muted)] sm:block">Area</div>
              <div className="hidden bg-white/[0.03] p-5 text-xs font-bold uppercase tracking-wider text-[var(--sm-muted)] sm:block">Traditional / Manual</div>
              <div className="hidden bg-indigo-500/10 p-5 text-xs font-bold uppercase tracking-wider text-indigo-300 sm:block">With ShikshaMatrix</div>

              {ROWS.map((r) => (
                <div key={r.area} className="contents">
                  <div className="sm-glass p-5 text-sm font-bold text-[var(--sm-text)] sm:rounded-none sm:border-0 sm:bg-white/[0.02]">{r.area}</div>
                  <div className="p-5 text-sm text-[var(--sm-muted)] sm:bg-white/[0.02]">{r.old}</div>
                  <div className="p-5 text-sm text-[var(--sm-text)] sm:bg-indigo-500/[0.06]">{r.new}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={150} className="mt-14 text-center">
            <p className="mb-5 text-sm text-[var(--sm-muted)]">See it running on your own school's structure.</p>
            <PrimaryCTA href={APP_LINKS.register}>Register Your School</PrimaryCTA>
          </Reveal>
        </div>
      </main>
      <WebsiteFooter />
    </>
  );
}
