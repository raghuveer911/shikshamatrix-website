// ─────────────────────────────────────────────────────────────
// Reusable structure for every /xxx-software service landing page.
// Keeps design consistent, keeps content genuinely useful (not thin/
// keyword-stuffed) by forcing every page through the same real
// sections: problem, features, benefits, FAQ, related pages.
// ─────────────────────────────────────────────────────────────
"use client";

import { useState } from "react";
import Link from "next/link";
import { WebsiteNavbar, WebsiteFooter, Reveal, SectionHeading, PrimaryCTA, GhostCTA, APP_LINKS } from "./website-ui";
import { InquiryCompact } from "./inquiry-form";

export interface ServiceFeature {
  title: string;
  desc: string;
  slug?: string;      // present → card links to its own deep-dive page at /<serviceSlug>/<slug>
  image?: string;      // path under /public, e.g. "/features/hostel/room-bed-allocation.jpg"
  bullets?: string[];  // extra detail shown on the deep-dive page (falls back to [desc] if omitted)
}

export interface ServiceLandingData {
  slug: string;   // e.g. "school-erp-software" — used to build the breadcrumb URL
  eyebrow: string;
  h1: string;
  subhead: string;
  heroImage?: string; // path under /public for the top-of-page hero image
  problems: { title: string; desc: string }[];
  features: ServiceFeature[];
  benefits: string[];
  faqs: { q: string; a: string }[];
  relatedPages: { label: string; href: string }[];
}

// Image with a graceful placeholder when the file hasn't been dropped in yet —
// never a broken-image icon, just a soft branded tile until the real asset lands.
function FeatureImage({ src, alt, className = "" }: { src?: string; alt: string; className?: string }) {
  const [broken, setBroken] = useState(false);
  if (!src || broken) {
    return (
      <div className={`grid place-items-center bg-gradient-to-br from-indigo-500/10 to-violet-500/10 ${className}`}>
        <span className="text-3xl opacity-40">🖼️</span>
      </div>
    );
  }
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} className={`object-cover ${className}`} onError={() => setBroken(true)} loading="lazy" />;
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

        {data.heroImage && (
          <Reveal delay={180} className="mx-auto mt-12 max-w-5xl px-6">
            <div className="sm-glass overflow-hidden rounded-3xl p-2">
              <FeatureImage src={data.heroImage} alt={h1} className="aspect-[16/8] w-full rounded-2xl" />
            </div>
          </Reveal>
        )}

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

        {/* Features — each an image card; ones with a slug open their own deep-dive page */}
        <div className="mx-auto mt-24 max-w-5xl px-6">
          <SectionHeading eyebrow="How ShikshaMatrix Helps" title="Everything you need, built in" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => {
              const card = (
                <div className="sm-glass sm-glass-hover sm-card-liquid group relative flex h-full flex-col overflow-hidden rounded-3xl">
                  <span className="sm-card-sheen" />
                  <FeatureImage src={f.image} alt={f.title} className="aspect-[4/3] w-full transition-transform duration-500 group-hover:scale-105" />
                  <div className="relative z-10 flex flex-1 flex-col p-6">
                    <h3 className="sm-display text-base font-bold text-[var(--sm-text)]">{f.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--sm-muted)]">{f.desc}</p>
                    {f.slug && (
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600">
                        Explore this feature <span className="transition-transform group-hover:translate-x-1">→</span>
                      </span>
                    )}
                  </div>
                </div>
              );
              return (
                <Reveal key={f.title} delay={i * 60}>
                  {f.slug ? (
                    <Link href={`/${slug}/${f.slug}`} className="block h-full">
                      {card}
                    </Link>
                  ) : (
                    card
                  )}
                </Reveal>
              );
            })}
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

        {/* Final CTA — direct fill-it-here option, no page hop required */}
        <div className="mx-auto mt-24 max-w-md px-6">
          <Reveal>
            <InquiryCompact title={`See "${eyebrow}" for your school`} source={`service-page:${slug}`} />
          </Reveal>
          <Reveal delay={100} className="mt-5 text-center">
            <PrimaryCTA href={APP_LINKS.register}>Register Your School</PrimaryCTA>
          </Reveal>
        </div>
      </main>
      <WebsiteFooter />
    </>
  );
}

// ─────────────────────────────────────────────────────────────
// FeatureDetailPage — the deep-dive sub-page for one feature
// within a service (e.g. /school-hostel-management-software/room-bed-allocation).
// Every service module that wants "each section opens on its own
// page" builds this via a [feature]/page.tsx route — see
// school-hostel-management-software/[feature]/page.tsx for the pattern.
// ─────────────────────────────────────────────────────────────
export function FeatureDetailPage({
  parent,
  feature,
}: {
  parent: Pick<ServiceLandingData, "slug" | "eyebrow" | "h1" | "features">;
  feature: ServiceFeature;
}) {
  const bullets = feature.bullets && feature.bullets.length > 0 ? feature.bullets : [feature.desc];
  const siblings = parent.features.filter((f) => f.slug && f.slug !== feature.slug);

  return (
    <>
      <WebsiteNavbar />
      <main className="sm-mesh min-h-screen pb-24 pt-36 lg:pt-44">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <div className="mb-5 flex flex-wrap items-center gap-2 text-xs text-[var(--sm-muted)]">
              <Link href={`/${parent.slug}`} className="font-semibold text-indigo-600 hover:text-indigo-700">{parent.eyebrow}</Link>
              <span>/</span>
              <span>{feature.title}</span>
            </div>
            <h1 className="sm-display text-3xl font-bold leading-tight text-[var(--sm-text)] sm:text-5xl">{feature.title}</h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[var(--sm-muted)] sm:text-lg">{feature.desc}</p>
          </Reveal>
          <Reveal delay={100} className="mt-8 flex flex-wrap gap-3">
            <PrimaryCTA href={APP_LINKS.register}>Register Your School</PrimaryCTA>
            <GhostCTA href={`/${parent.slug}`}>← Back to {parent.eyebrow}</GhostCTA>
          </Reveal>
        </div>

        <Reveal delay={150} className="mx-auto mt-12 max-w-5xl px-6">
          <div className="sm-glass overflow-hidden rounded-3xl p-2">
            <FeatureImage src={feature.image} alt={feature.title} className="aspect-[16/9] w-full rounded-2xl" />
          </div>
        </Reveal>

        <div className="mx-auto mt-16 max-w-3xl px-6">
          <Reveal className="sm-glass rounded-3xl p-8">
            <h2 className="sm-display mb-5 text-xl font-bold text-[var(--sm-text)]">What this gives your school</h2>
            <ul className="space-y-3">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-sm text-[var(--sm-muted)]">
                  <span className="mt-0.5 text-emerald-600">✓</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {siblings.length > 0 && (
          <div className="mx-auto mt-16 max-w-5xl px-6">
            <SectionHeading eyebrow={parent.eyebrow} title="Other features in this hub" />
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {siblings.map((s, i) => (
                <Reveal key={s.slug} delay={i * 60}>
                  <Link href={`/${parent.slug}/${s.slug}`} className="sm-glass sm-glass-hover group flex h-full flex-col overflow-hidden rounded-2xl">
                    <FeatureImage src={s.image} alt={s.title} className="aspect-[4/3] w-full transition-transform duration-500 group-hover:scale-105" />
                    <div className="p-5">
                      <h3 className="sm-display text-sm font-bold text-[var(--sm-text)]">{s.title}</h3>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        )}

        <div className="mx-auto mt-16 max-w-md px-6">
          <Reveal>
            <InquiryCompact title={`See "${feature.title}" in action`} source={`feature-page:${parent.slug}/${feature.slug}`} />
          </Reveal>
        </div>
      </main>
      <WebsiteFooter />
    </>
  );
}
