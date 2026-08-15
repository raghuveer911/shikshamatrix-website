import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { WebsiteNavbar, WebsiteFooter, Reveal, PrimaryCTA, APP_LINKS } from "../../_components/website-ui";
import { getBlogPost, getRelatedPosts } from "../../_data/blog-posts";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Not Found" };
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { type: "article", publishedTime: post.date, modifiedTime: post.dateModified ?? post.date },
  };
}

function ArticleStructuredData({ post }: { post: NonNullable<ReturnType<typeof getBlogPost>> }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.dateModified ?? post.date,
    author: { "@type": "Organization", name: post.author.name },
    publisher: { "@type": "Organization", name: "ShikshaMatrix" },
    keywords: post.tags.join(", "),
  };
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.shikshamatrix.in/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.shikshamatrix.in/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://www.shikshamatrix.in/blog/${post.slug}` },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
    </>
  );
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();
  const related = getRelatedPosts(slug);

  return (
    <>
      <ArticleStructuredData post={post} />
      <WebsiteNavbar />
      <main className="sm-mesh min-h-screen pb-24 pt-36 lg:pt-44">
        <article className="mx-auto max-w-2xl px-6">
          <Reveal>
            <Link href="/blog" className="text-sm font-medium text-indigo-600 hover:text-indigo-700">← Back to Blog</Link>
            <div className="mt-5 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider">
              <span className="rounded-full bg-indigo-500/15 px-2.5 py-1 text-indigo-600">{post.category}</span>
              <span className="text-[var(--sm-muted)]">
                {new Date(post.date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })} · {post.readMinutes} min read
              </span>
            </div>
            <h1 className="sm-display mt-3 text-3xl font-bold leading-tight text-[var(--sm-text)] sm:text-4xl">{post.title}</h1>
            <p className="mt-3 text-sm text-[var(--sm-muted)]">By {post.author.name} · {post.author.role}</p>
          </Reveal>

          <div className="mt-10 space-y-8">
            {post.content.map((block, i) => (
              <Reveal key={i} delay={i * 40}>
                {block.heading && <h2 className="sm-display mb-3 text-xl font-bold text-[var(--sm-text)]">{block.heading}</h2>}
                {block.paragraphs.map((p, j) => (
                  <p key={j} className="mb-3 text-base leading-relaxed text-[var(--sm-muted)]">{p}</p>
                ))}
              </Reveal>
            ))}
          </div>

          {post.tags.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-2">
              {post.tags.map((t) => (
                <span key={t} className="rounded-full border border-[var(--sm-border)] px-3 py-1 text-xs text-[var(--sm-muted)]">#{t}</span>
              ))}
            </div>
          )}

          {related.length > 0 && (
            <div className="mt-14 border-t border-[var(--sm-border)] pt-10">
              <h3 className="sm-display mb-4 text-lg font-bold text-[var(--sm-text)]">Related Articles</h3>
              <div className="space-y-3">
                {related.map((r) => (
                  <Link key={r.slug} href={`/blog/${r.slug}`} className="sm-glass sm-glass-hover block rounded-xl p-4 text-sm font-medium text-[var(--sm-text)]">
                    {r.title}
                  </Link>
                ))}
              </div>
            </div>
          )}

          <Reveal className="mt-14 text-center">
            <PrimaryCTA href={APP_LINKS.register}>Register Your School</PrimaryCTA>
          </Reveal>
        </article>
      </main>
      <WebsiteFooter />
    </>
  );
}
