import type { Metadata } from "next";
import Link from "next/link";
import { WebsiteNavbar, WebsiteFooter, Reveal, SectionHeading, PrimaryCTA, APP_LINKS } from "../_components/website-ui";
import { CASE_STUDIES } from "../_data/case-studies";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Real schools running on ShikshaMatrix — what changed, and the results they've seen.",
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudiesIndexPage() {
  return (
    <>
      <WebsiteNavbar />
      <main className="sm-mesh min-h-screen pb-24 pt-36 lg:pt-44">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading eyebrow="Case Studies" title="Real Schools, Real Results" sub="How schools already running on ShikshaMatrix use it day to day." />

          {CASE_STUDIES.length === 0 ? (
            <Reveal className="sm-glass rounded-3xl p-10 text-center">
              <p className="text-[var(--sm-muted)]">
                Case studies are being prepared with the schools currently running on ShikshaMatrix. Check back soon —
                in the meantime, see how ShikshaMatrix compares to traditional school management.
              </p>
              <div className="mt-6">
                <PrimaryCTA href="/compare">See the Comparison</PrimaryCTA>
              </div>
            </Reveal>
          ) : (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {CASE_STUDIES.map((cs, i) => (
                <Reveal key={cs.slug} delay={i * 60}>
                  <Link href={`/case-studies/${cs.slug}`} className="sm-glass sm-glass-hover block h-full rounded-2xl p-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-indigo-300">{cs.location} · {cs.board}</p>
                    <h2 className="sm-display mt-2 text-lg font-bold text-[var(--sm-text)]">{cs.schoolName}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--sm-muted)]">{cs.summary}</p>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </main>
      <WebsiteFooter />
    </>
  );
}
