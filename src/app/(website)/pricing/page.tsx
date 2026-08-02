import type { Metadata } from "next";
import Link from "next/link";
import { WebsiteNavbar, WebsiteFooter, PrimaryCTA, GhostCTA, Reveal, SectionHeading, APP_LINKS } from "../_components/website-ui";

export const metadata: Metadata = {
  title: "Pricing",
  description: "ShikshaMatrix pricing plans — Economy, Essential, and Professional. Transparent, per-student pricing for Indian schools of every size.",
  alternates: { canonical: "/pricing" },
};

const PLANS = [
  {
    name: "Economy",
    tagline: "For small schools getting started",
    price: "₹8",
    unit: "/ student / year",
    students: "Up to 200 students",
    highlight: false,
    features: [
      "School Admin Panel, Staff App, Student App, Parent App — full access",
      "Admissions, Attendance, Fee Collection (core)",
      "Up to 30 staff accounts",
      "2GB document storage",
      "Basic SMS notifications",
      "Library — Book Issue/Return",
    ],
  },
  {
    name: "Essential",
    tagline: "For growing schools",
    price: "₹1,999",
    unit: "/ year (school-wide)",
    students: "Up to 500 students",
    highlight: true,
    features: [
      "Everything in Economy, plus:",
      "Up to 100 staff accounts",
      "10GB document storage",
      "Higher SMS limits + basic WhatsApp",
      "Digital Library + Reservations",
      "Deeper HR: Leave, Payroll, ID Cards",
    ],
  },
  {
    name: "Professional",
    tagline: "For established schools that want it all",
    price: "₹4,199",
    unit: "/ year (school-wide)",
    students: "Up to 1,000 students",
    highlight: false,
    features: [
      "Everything in Essential, plus:",
      "Unlimited staff accounts",
      "Large storage allocation",
      "Full WhatsApp integration + Online Payments",
      "Advanced analytics & automation",
      "Recruitment, Performance Management",
      "Priority support",
    ],
  },
];

export default function PricingPage() {
  return (
    <>
      <WebsiteNavbar />
      <main className="sm-mesh min-h-screen pb-24 pt-36 lg:pt-44">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Pricing"
            title="Simple, transparent pricing"
            sub="No hidden fees. Every plan includes the full School Admin Panel, Staff App, Student App, and Parent App — plans differ only in feature depth and scale, never in which apps you can use."
          />

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {PLANS.map((plan, i) => (
              <Reveal key={plan.name} delay={i * 100}>
                <div
                  className={`sm-glass sm-glass-hover relative flex h-full flex-col rounded-3xl p-8 ${
                    plan.highlight ? "border-[var(--sm-border-hi)] shadow-[0_20px_60px_-20px_rgba(99,102,241,.4)]" : ""
                  }`}
                >
                  {plan.highlight && (
                    <div className="sm-display absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-4 py-1 text-xs font-bold text-white">
                      Most Popular
                    </div>
                  )}
                  <h3 className="sm-display text-2xl font-bold text-[var(--sm-text)]">{plan.name}</h3>
                  <p className="mt-1 text-sm text-[var(--sm-muted)]">{plan.tagline}</p>
                  <div className="mt-5 flex items-baseline gap-1">
                    <span className="sm-display text-4xl font-bold text-[var(--sm-text)]">{plan.price}</span>
                    <span className="text-sm text-[var(--sm-muted)]">{plan.unit}</span>
                  </div>
                  <p className="mt-1 text-xs font-semibold text-indigo-300">{plan.students}</p>
                  <ul className="mt-6 flex-1 space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-[var(--sm-muted)]">
                        <span className="mt-0.5 text-emerald-400">✓</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    {plan.highlight ? (
                      <PrimaryCTA href={APP_LINKS.register}>Get Started</PrimaryCTA>
                    ) : (
                      <GhostCTA href={APP_LINKS.register}>Get Started</GhostCTA>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={300} className="mx-auto mt-14 max-w-2xl text-center">
            <p className="text-sm text-[var(--sm-muted)]">
              Need a plan for more than 1,000 students, or have a specific requirement? {" "}
              <Link href={APP_LINKS.register} className="font-semibold text-indigo-300 hover:text-indigo-200">
                Talk to us
              </Link>{" "}
              — we'll work out something that fits.
            </p>
          </Reveal>
        </div>
      </main>
      <WebsiteFooter />
    </>
  );
}
