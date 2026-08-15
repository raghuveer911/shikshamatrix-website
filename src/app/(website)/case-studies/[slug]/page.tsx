import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { WebsiteNavbar, WebsiteFooter, Reveal, PrimaryCTA, APP_LINKS } from "../../_components/website-ui";
import { getCaseStudy } from "../../_data/case-studies";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return { title: "Not Found" };
  return {
    title: `${cs.schoolName} — Case Study`,
    description: cs.summary,
    alternates: { canonical: `/case-studies/${cs.slug}` },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  return (
    <>
      <WebsiteNavbar />
      <main className="sm-mesh min-h-screen pb-24 pt-36 lg:pt-44">
        <article className="mx-auto max-w-2xl px-6">
          <Reveal>
            <Link href="/case-studies" className="text-sm font-medium text-indigo-600 hover:text-indigo-700">← Back to Case Studies</Link>
            <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-indigo-600">{cs.location} · {cs.board} · {cs.studentCount}</p>
            <h1 className="sm-display mt-2 text-3xl font-bold leading-tight text-[var(--sm-text)] sm:text-4xl">{cs.schoolName}</h1>
            <p className="mt-3 text-base text-[var(--sm-muted)]">{cs.summary}</p>
          </Reveal>

          {cs.results.length > 0 && (
            <Reveal delay={80} className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {cs.results.map((r) => (
                <div key={r.label} className="sm-glass rounded-2xl p-5 text-center">
                  <p className="sm-display text-2xl font-bold text-indigo-600">{r.metric}</p>
                  <p className="mt-1 text-xs text-[var(--sm-muted)]">{r.label}</p>
                </div>
              ))}
            </Reveal>
          )}

          <Reveal delay={120} className="mt-10">
            <h2 className="sm-display mb-3 text-xl font-bold text-[var(--sm-text)]">The Challenge</h2>
            {cs.challenge.map((p, i) => (
              <p key={i} className="mb-3 text-base leading-relaxed text-[var(--sm-muted)]">{p}</p>
            ))}
          </Reveal>

          <Reveal delay={160} className="mt-10">
            <h2 className="sm-display mb-3 text-xl font-bold text-[var(--sm-text)]">What Changed</h2>
            {cs.solution.map((p, i) => (
              <p key={i} className="mb-3 text-base leading-relaxed text-[var(--sm-muted)]">{p}</p>
            ))}
          </Reveal>

          {cs.quote && (
            <Reveal delay={200} className="sm-glass mt-10 rounded-3xl p-8">
              <p className="text-lg italic leading-relaxed text-[var(--sm-text)]">&ldquo;{cs.quote.text}&rdquo;</p>
              <p className="mt-4 text-sm font-semibold text-indigo-600">{cs.quote.author} · {cs.quote.role}</p>
            </Reveal>
          )}

          <Reveal delay={240} className="mt-14 text-center">
            <PrimaryCTA href={APP_LINKS.register}>Register Your School</PrimaryCTA>
          </Reveal>
        </article>
      </main>
      <WebsiteFooter />
    </>
  );
}
