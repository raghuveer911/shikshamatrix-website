import type { Metadata } from "next";
import { WebsiteNavbar, WebsiteFooter, Reveal, SectionHeading } from "../_components/website-ui";
import { InquirySection } from "../_components/inquiry-form";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Talk to ShikshaMatrix — book a free demo, get pricing, or ask a question. We reply within 24 hours.",
  alternates: { canonical: "/contact" },
};

const DIRECT = [
  { label: "Call Us", value: "+91 7877832549", href: "tel:+917877832549", icon: "📞" },
  { label: "WhatsApp", value: "Chat with our team", href: "https://wa.me/917877832549", icon: "💬" },
  { label: "Email", value: "info@shikshamatrix.in", href: "mailto:info@shikshamatrix.in", icon: "✉️" },
];

export default function ContactPage() {
  return (
    <>
      <WebsiteNavbar />
      <main className="sm-mesh min-h-screen pb-24 pt-36 lg:pt-44">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <div className="mb-5 inline-block rounded-full border border-[var(--sm-border)] bg-[var(--sm-primary-soft)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600">
              Contact Us
            </div>
            <h1 className="sm-display text-3xl font-bold leading-tight text-[var(--sm-text)] sm:text-5xl">
              Let's talk about your school
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[var(--sm-muted)] sm:text-lg">
              Book a free demo, get a straight answer on pricing, or ask us anything. Real people reply — usually within a few hours.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-4 px-6 sm:grid-cols-3">
          {DIRECT.map((d, i) => (
            <Reveal key={d.label} delay={i * 80}>
              <a
                href={d.href}
                target={d.href.startsWith("http") ? "_blank" : undefined}
                rel={d.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="sm-glass sm-glass-hover flex h-full flex-col items-center gap-1.5 rounded-2xl p-6 text-center"
              >
                <span className="text-2xl">{d.icon}</span>
                <span className="sm-display text-sm font-bold text-[var(--sm-text)]">{d.label}</span>
                <span className="text-xs text-[var(--sm-muted)]">{d.value}</span>
              </a>
            </Reveal>
          ))}
        </div>

        <div className="mt-8">
          <InquirySection compactHeading />
        </div>
      </main>
      <WebsiteFooter />
    </>
  );
}
