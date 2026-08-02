import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { WebsiteNavbar, WebsiteFooter, Reveal, PrimaryCTA, APP_LINKS } from "../../_components/website-ui";
import { BLOG_POSTS, getBlogPost } from "../../_data/blog-posts";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Not Found" };
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { type: "article", publishedTime: post.date },
  };
}

function ArticleStructuredData({ post }: { post: NonNullable<ReturnType<typeof getBlogPost>> }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Organization", name: "ShikshaMatrix" },
    publisher: { "@type": "Organization", name: "ShikshaMatrix" },
  };
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <>
      <ArticleStructuredData post={post} />
      <WebsiteNavbar />
      <main className="sm-mesh min-h-screen pb-24 pt-36 lg:pt-44">
        <article className="mx-auto max-w-2xl px-6">
          <Reveal>
            <Link href="/blog" className="text-sm font-medium text-indigo-300 hover:text-indigo-200">← Back to Blog</Link>
            <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-indigo-300">
              {new Date(post.date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })} · {post.readMinutes} min read
            </p>
            <h1 className="sm-display mt-2 text-3xl font-bold leading-tight text-[var(--sm-text)] sm:text-4xl">{post.title}</h1>
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

          <Reveal className="mt-14 text-center">
            <PrimaryCTA href={APP_LINKS.register}>Register Your School</PrimaryCTA>
          </Reveal>
        </article>
      </main>
      <WebsiteFooter />
    </>
  );
}
