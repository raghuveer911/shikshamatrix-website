// ─────────────────────────────────────────────────────────────
// Reusable structure for every /xxx-software service landing page.
// Keeps design consistent, keeps content genuinely useful (not thin/
// keyword-stuffed) by forcing every page through the same real
// sections: problem, features, benefits, FAQ, related pages.
// ─────────────────────────────────────────────────────────────
"use client";

import Link from "next/link";
import { WebsiteNavbar, WebsiteFooter, Reveal, SectionHeading, PrimaryCTA, GhostCTA, APP_LINKS } from "./website-ui";

export interface ServiceLandingData {
  slug: string;   // e.g. "school-erp-software" — used to build the breadcrumb URL
  eyebrow: string;
  h1: string;
  subhead: string;
  problems: { title: string; desc: string }[];
  features: { title: string; desc: string }[];
  benefits: string[];
  faqs: { q: string; a: string }[];
  relatedPages: { label: string; href: string }[];
}

function BreadcrumbStructuredData({ slug, label }: { slug: string; label: string }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.shikshamatrix.in/" },
      { "@type": "ListItem", position: 2, name: label, item: `https://www.shikshamatrix.in/${slug}` },
    ],
  };
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function FAQStructuredData({ faqs }: { faqs: { q: string; a: string }[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
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

export function ServiceLandingPage({ data }: { data: ServiceLandingData }) {
  const { slug, eyebrow, h1, subhead, problems, features, benefits, faqs, relatedPages } = data;

  return (
    <>
      <FAQStructuredData faqs={faqs} />
      <BreadcrumbStructuredData slug={slug} label={eyebrow} />
      <WebsiteNavbar />
      <main className="sm-mesh min-h-screen pb-24 pt-36 lg:pt-44">
        {/* Hero */}
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <div className="mb-5 inline-block rounded-full border border-[var(--sm-border)] bg-[var(--sm-primary-soft)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600">
              {eyebrow}
            </div>
            <h1 className="sm-display text-3xl font-bold leading-tight text-[var(--sm-text)] sm:text-5xl">{h1}</h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[var(--sm-muted)] sm:text-lg">{subhead}</p>
          </Reveal>
          <Reveal delay={120} className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <PrimaryCTA href={APP_LINKS.register}>Register Your School</PrimaryCTA>
            <GhostCTA href="/pricing">See Pricing</GhostCTA>
          </Reveal>
        </div>

        {/* Problems this solves */}
        <div className="mx-auto mt-24 max-w-5xl px-6">
          <SectionHeading eyebrow="The Problem" title="What schools struggle with today" />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {problems.map((p, i) => (
              <Reveal key={p.title} delay={i * 60}>
                <div className="sm-glass sm-glass-hover h-full rounded-2xl p-6">
                  <h3 className="sm-display text-base font-bold text-[var(--sm-text)]">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--sm-muted)]">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mx-auto mt-24 max-w-5xl px-6">
          <SectionHeading eyebrow="How ShikshaMatrix Helps" title="Everything you need, built in" />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 60}>
                <div className="sm-glass sm-glass-hover h-full rounded-2xl p-6">
                  <h3 className="sm-display text-base font-bold text-[var(--sm-text)]">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--sm-muted)]">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Benefits (quick list) */}
        <div className="mx-auto mt-24 max-w-3xl px-6">
          <Reveal className="sm-glass rounded-3xl p-8">
            <h2 className="sm-display mb-5 text-xl font-bold text-[var(--sm-text)]">Why schools choose ShikshaMatrix for this</h2>
            <ul className="space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-sm text-[var(--sm-muted)]">
                  <span className="mt-0.5 text-emerald-600">✓</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* FAQ */}
        <div className="mx-auto mt-24 max-w-3xl px-6">
          <SectionHeading eyebrow="FAQ" title="Common questions" />
          <div className="space-y-4">
            {faqs.map((f) => (
              <Reveal key={f.q}>
                <details className="sm-glass group rounded-2xl p-6 open:border-[var(--sm-border-hi)]">
                  <summary className="sm-display cursor-pointer list-none text-base font-semibold text-[var(--sm-text)]">{f.q}</summary>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--sm-muted)]">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Related pages */}
        {relatedPages.length > 0 && (
          <div className="mx-auto mt-24 max-w-3xl px-6 text-center">
            <p className="mb-4 text-sm text-[var(--sm-muted)]">Related:</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {relatedPages.map((r) => (
                <Link key={r.href} href={r.href} className="sm-glass sm-glass-hover rounded-full px-4 py-2 text-sm font-medium text-indigo-600">
                  {r.label}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Final CTA */}
        <Reveal className="mx-auto mt-24 max-w-2xl px-6 text-center">
          <PrimaryCTA href={APP_LINKS.register}>Register Your School</PrimaryCTA>
        </Reveal>
      </main>
      <WebsiteFooter />
    </>
  );
}
