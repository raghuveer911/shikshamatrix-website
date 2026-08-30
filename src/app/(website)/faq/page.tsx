import type { Metadata } from "next";
import { WebsiteNavbar, WebsiteFooter, Reveal, SectionHeading, APP_LINKS, PrimaryCTA } from "../_components/website-ui";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Common questions about ShikshaMatrix — what it is, how pricing works, how onboarding works, and how your school's data is kept secure.",
  alternates: { canonical: "/faq" },
};

const FAQS = [
  {
    category: "Schools",
    q: "What is ShikshaMatrix?",
    a: "ShikshaMatrix is a School ERP (Enterprise Resource Planning) platform built specifically for Indian schools. It brings admissions, attendance, fee collection, academics, HR/payroll, communication, transport, hostel, and library management into one connected system — with a web-based admin panel for the school, and dedicated mobile apps for staff, students, and parents.",
  },
  {
    category: "Schools",
    q: "Is ShikshaMatrix only for large schools?",
    a: "No. ShikshaMatrix has plans starting from small schools (as few as ~100 students) up to large institutions with 1,000+ students. Every plan — even the entry-level one — includes full access to the School Admin Panel, Staff App, Student App, and Parent App; plans differ in feature depth and scale, not in which apps you're allowed to use.",
  },
  {
    category: "Schools",
    q: "How is ShikshaMatrix priced?",
    a: "ShikshaMatrix uses transparent, per-student/year pricing across three tiers — Economy, Essential, and Professional. See the Pricing page for current numbers and what's included at each tier. Plan prices cover the platform; payment-gateway fees on online collections and SMS/WhatsApp usage beyond your plan's included limit are billed at actual cost.",
  },
  {
    category: "Schools",
    q: "Is my school's data private from other schools on the platform?",
    a: "Yes. ShikshaMatrix is multi-tenant by design — each school's data (students, staff, fees, records) is fully isolated. No other school on the platform can see or access another school's data.",
  },
  {
    category: "Schools",
    q: "Do parents and students need to install an app?",
    a: "Yes — parents and students use the ShikshaMatrix mobile app (Android and iOS) to see attendance, fees due, homework, notices, and communicate with the school. Staff use their own dedicated app for day-to-day teaching and administrative tasks.",
  },
  {
    category: "Schools",
    q: "How long does it take to set up ShikshaMatrix for our school?",
    a: "Most schools can get their core setup (classes, sections, staff, students, fee structure) done within a few days, with our team available to help with data migration and onboarding.",
  },
  {
    category: "Schools",
    q: "Can existing student and fee data be migrated from our current system?",
    a: "Yes — our onboarding team helps migrate existing records (students, classes, fee structures) into ShikshaMatrix as part of setup, so you're not starting from a blank slate.",
  },
  {
    category: "Schools",
    q: "Can we collect fees online through ShikshaMatrix?",
    a: "Yes — online fee payment is available as part of the platform, alongside traditional fee collection tracking, receipts, and due management.",
  },
  {
    category: "Schools",
    q: "What happens if an online payment fails or is only partially processed?",
    a: "Every online payment is tracked through its full lifecycle (initiated, pending, success, failed, refunded) and verified against the payment gateway before a fee is marked as collected — a failed or incomplete payment never silently shows up as paid.",
  },
  {
    category: "Schools",
    q: "Can our school export its data?",
    a: "Yes — reports and records across modules can be exported; higher-tier plans include broader export access.",
  },
  {
    category: "Schools",
    q: "Is WhatsApp supported for parent communication?",
    a: "Yes — WhatsApp notifications are available on Essential and Professional plans, alongside SMS and in-app push notifications.",
  },
  {
    category: "Schools",
    q: "What kind of support does ShikshaMatrix provide?",
    a: "All plans include support; higher-tier plans include priority support with faster response times.",
  },
  {
    category: "Skill Development",
    q: "Is Skill OS available now?",
    a: "Not yet — Skill OS (program, batch, trainer, assessment, certification and placement management for training organizations) is currently in active development. See the Skill Development page for the planned workflow and module architecture.",
  },
  {
    category: "Skill Development",
    q: "How can I stay updated on the Skill OS launch?",
    a: "Use the \"Get Notified\" form on the Skill Development page — we'll reach out when it's ready for early access.",
  },
];

function FAQStructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function FAQPage() {
  return (
    <>
      <FAQStructuredData />
      <WebsiteNavbar />
      <main className="sm-mesh min-h-screen pb-24 pt-36 lg:pt-44">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" sub="Everything you need to know before getting started with ShikshaMatrix." />

          {["Schools", "Skill Development"].map((cat) => {
            const items = FAQS.filter((f) => f.category === cat);
            return (
              <div key={cat} className="mb-10">
                <h2 className="sm-display mb-4 text-xs font-bold uppercase tracking-[0.14em] text-indigo-500">{cat}</h2>
                <div className="space-y-4">
                  {items.map((f, i) => (
                    <Reveal key={f.q} delay={i * 40}>
                      <details className="sm-glass group rounded-2xl p-6 open:border-[var(--sm-border-hi)]">
                        <summary className="sm-display cursor-pointer list-none text-base font-semibold text-[var(--sm-text)]">
                          {f.q}
                        </summary>
                        <p className="mt-3 text-sm leading-relaxed text-[var(--sm-muted)]">{f.a}</p>
                      </details>
                    </Reveal>
                  ))}
                </div>
              </div>
            );
          })}

          <Reveal delay={FAQS.length * 40} className="mt-14 text-center">
            <p className="mb-5 text-sm text-[var(--sm-muted)]">Still have a question?</p>
            <PrimaryCTA href={APP_LINKS.register}>Talk to Us</PrimaryCTA>
          </Reveal>
        </div>
      </main>
      <WebsiteFooter />
    </>
  );
}
