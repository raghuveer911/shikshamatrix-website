import type { Metadata } from "next";
import Link from "next/link";
import { WebsiteNavbar, WebsiteFooter, Reveal, SectionHeading } from "../_components/website-ui";
import { BLOG_POSTS } from "../_data/blog-posts";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blog",
  description: "Guides and practical advice on school management, fee collection, attendance, and digital transformation for Indian schools.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  return (
    <>
      <WebsiteNavbar />
      <main className="sm-mesh min-h-screen pb-24 pt-36 lg:pt-44">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading eyebrow="Blog" title="Guides for running a modern school" sub="Practical, no-fluff articles on school management, fee collection, attendance, and digital transformation." />

          <div className="space-y-5">
            {BLOG_POSTS.map((post, i) => (
              <Reveal key={post.slug} delay={i * 60}>
                <Link href={`/blog/${post.slug}`} className="sm-glass sm-glass-hover block rounded-2xl p-6">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider">
                    <span className="rounded-full bg-indigo-500/15 px-2.5 py-1 text-indigo-600">{post.category}</span>
                    <span className="text-[var(--sm-muted)]">
                      {new Date(post.date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })} · {post.readMinutes} min read
                    </span>
                  </div>
                  <h2 className="sm-display mt-3 text-xl font-bold text-[var(--sm-text)]">{post.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--sm-muted)]">{post.description}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </main>
      <WebsiteFooter />
    </>
  );
}
