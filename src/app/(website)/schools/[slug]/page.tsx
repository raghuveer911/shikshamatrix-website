// ─────────────────────────────────────────────────────────────
// apps/web/src/app/(website)/schools/[slug]/page.tsx
// Public website for a single school — driven entirely by that
// school's WebsiteConfig, set from their admin panel (Settings → Website).
// ─────────────────────────────────────────────────────────────
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

// Every image URL here comes from a public-safe upload category
// (school-website / school-branding) — safe to route through
// /public/files/, which also transparently upgrades any older
// records still saved with the old /files/ (auth-required) prefix.
function img(url: string | null | undefined): string | null {
  if (!url) return null;
  if (url.startsWith("/files/")) return `${API_URL}/public/files/${url.slice("/files/".length)}`;
  if (url.startsWith("/public/files/")) return `${API_URL}${url}`;
  return url;
}

interface SchoolData {
  school: { id: number; name: string; logoUrl: string | null; address: string; city: string; state: string; phone: string; email: string };
  config: {
    theme: string; primaryColor: string;
    heroTagline: string | null; heroImageUrl: string | null;
    aboutText: string | null; aboutImageUrl: string | null;
    admissionsText: string | null; admissionsPhone: string | null; admissionsEmail: string | null;
    showAbout: boolean; showAdmissions: boolean; showGallery: boolean;
    showContact: boolean; showNotices: boolean; showTestimonials: boolean;
    enquiryEnabled: boolean; metaTitle: string | null; metaDesc: string | null;
    galleryImages: { id: number; imageUrl: string; caption: string | null }[];
    testimonials: { id: number; authorName: string; role: string | null; quote: string; photoUrl: string | null }[];
  };
  notices: { id: number; title: string; summary: string | null; publishAt: string | null; createdAt: string }[];
}

// Darkens/lightens a hex color by a percentage — used to derive a
// gradient partner from the school's single primaryColor without
// needing them to pick two colors.
function shade(hex: string, percent: number): string {
  const n = parseInt(hex.replace("#", ""), 16);
  const r = Math.min(255, Math.max(0, ((n >> 16) & 255) + percent));
  const g = Math.min(255, Math.max(0, ((n >> 8) & 255) + percent));
  const b = Math.min(255, Math.max(0, (n & 255) + percent));
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`opacity-0 translate-y-3 animate-[fadeUp_0.6s_ease-out_forwards] ${className}`}>{children}</div>;
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <a href={href} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">{children}</a>;
}

function EnquiryForm({ slug, primaryColor }: { slug: string; primaryColor: string }) {
  const [form, setForm] = useState({ studentName: "", parentName: "", mobileNumber: "", email: "", interestedClass: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch(`${API_URL}/public/school-website/${slug}/enquiry`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        setStatus("error");
        setErrorMsg(data.message ?? "Something went wrong. Please try again.");
        return;
      }
      setStatus("sent");
    } catch {
      setStatus("error");
      setErrorMsg("Couldn't reach the server — please check your connection and try again.");
    }
  };

  if (status === "sent") {
    return (
      <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-8 text-center">
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white text-xl">✓</div>
        <p className="font-bold text-emerald-800">Thank you!</p>
        <p className="mt-1 text-sm text-emerald-600">The school will get back to you soon.</p>
      </div>
    );
  }

  const inputCls = "w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-[15px] text-gray-900 outline-none transition-all focus:border-gray-300 focus:bg-white focus:ring-4";

  return (
    <form onSubmit={submit} className="space-y-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input required placeholder="Student's name *" value={form.studentName} onChange={e => setForm({ ...form, studentName: e.target.value })} className={inputCls} style={{ "--tw-ring-color": `${primaryColor}22` } as any} />
        <input placeholder="Parent's name" value={form.parentName} onChange={e => setForm({ ...form, parentName: e.target.value })} className={inputCls} style={{ "--tw-ring-color": `${primaryColor}22` } as any} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input required placeholder="Mobile number *" value={form.mobileNumber} onChange={e => setForm({ ...form, mobileNumber: e.target.value })} className={inputCls} style={{ "--tw-ring-color": `${primaryColor}22` } as any} />
        <input type="email" placeholder="Email (optional)" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className={inputCls} style={{ "--tw-ring-color": `${primaryColor}22` } as any} />
      </div>
      <input placeholder="Interested class (e.g. Class 5)" value={form.interestedClass} onChange={e => setForm({ ...form, interestedClass: e.target.value })} className={inputCls} style={{ "--tw-ring-color": `${primaryColor}22` } as any} />
      <textarea placeholder="Message (optional)" rows={3} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} className={inputCls} style={{ "--tw-ring-color": `${primaryColor}22` } as any} />
      {status === "error" && <p className="text-sm text-red-600 px-1">{errorMsg}</p>}
      <button type="submit" disabled={status === "sending"}
        className="w-full rounded-2xl py-3.5 text-[15px] font-bold text-white transition-all disabled:opacity-60 active:scale-[0.98]"
        style={{ background: `linear-gradient(135deg, ${primaryColor}, ${shade(primaryColor, -30)})`, boxShadow: `0 8px 24px -6px ${primaryColor}66` }}>
        {status === "sending" ? "Sending…" : "Submit Enquiry"}
      </button>
    </form>
  );
}

export default function SchoolWebsitePage() {
  const params = useParams();
  const slug = params.slug as string;
  const [data, setData] = useState<SchoolData | null>(null);
  const [loadState, setLoadState] = useState<"loading" | "ready" | "not-found">("loading");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!slug) return;
    fetch(`${API_URL}/public/school-website/${slug}`)
      .then(res => res.json())
      .then(json => {
        if (json.success && json.data) { setData(json.data); setLoadState("ready"); }
        else setLoadState("not-found");
      })
      .catch(() => setLoadState("not-found"));
  }, [slug]);

  if (loadState === "loading") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-200 border-t-gray-900" />
      </div>
    );
  }
  if (loadState === "not-found" || !data) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-2 bg-white px-6 text-center">
        <p className="text-xl font-bold text-gray-900">This school's website isn't available</p>
        <p className="text-sm text-gray-500">It may not be set up yet, or the link might be incorrect.</p>
      </div>
    );
  }

  const { school, config, notices } = data;
  const primary = config.primaryColor || "#6366f1";
  const primaryDark = shade(primary, -35);
  const logoSrc = img(school.logoUrl);
  const heroSrc = img(config.heroImageUrl);
  const aboutSrc = img(config.aboutImageUrl);

  const navItems = [
    config.showAbout && config.aboutText && { href: "#about", label: "About" },
    config.showAdmissions && config.admissionsText && { href: "#admissions", label: "Admissions" },
    config.showGallery && config.galleryImages.length > 0 && { href: "#gallery", label: "Gallery" },
    config.showNotices && notices.length > 0 && { href: "#notices", label: "Notices" },
    config.showContact && { href: "#contact", label: "Contact" },
  ].filter(Boolean) as { href: string; label: string }[];

  return (
    <main className="min-h-screen bg-white text-gray-900 antialiased">
      <style>{`@keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }`}</style>

      {/* ── Navbar ─────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-gray-100/80 bg-white/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-6">
          <div className="flex items-center gap-2.5 min-w-0">
            {logoSrc
              ? <img src={logoSrc} alt={school.name} className="h-9 w-9 sm:h-10 sm:w-10 rounded-xl object-cover flex-shrink-0" />
              : <div className="flex h-9 w-9 sm:h-10 sm:w-10 flex-shrink-0 items-center justify-center rounded-xl text-white font-bold text-sm" style={{ background: `linear-gradient(135deg, ${primary}, ${primaryDark})` }}>{school.name.charAt(0)}</div>}
            <span className="font-bold text-gray-900 text-[15px] sm:text-base truncate">{school.name}</span>
          </div>
          <nav className="hidden md:flex items-center gap-7">
            {navItems.map(n => <NavLink key={n.href} href={n.href}>{n.label}</NavLink>)}
          </nav>
          {navItems.length > 0 && (
            <button onClick={() => setMenuOpen(v => !v)} className="md:hidden flex h-9 w-9 items-center justify-center rounded-full hover:bg-gray-100 flex-shrink-0" aria-label="Menu">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                {menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
            </button>
          )}
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white px-5 py-3 space-y-1">
            {navItems.map(n => (
              <a key={n.href} href={n.href} onClick={() => setMenuOpen(false)} className="block rounded-xl px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50">{n.label}</a>
            ))}
          </div>
        )}
      </header>

      {/* ── Hero ───────────────────────────────────────── */}
      <section className="relative overflow-hidden px-5 pt-14 pb-16 sm:px-6 sm:pt-20 sm:pb-24" style={{ background: `linear-gradient(180deg, ${primary}0d 0%, white 65%)` }}>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h1 className="text-[2.1rem] leading-[1.1] font-extrabold tracking-tight text-gray-900 sm:text-5xl sm:leading-[1.05] lg:text-6xl">
              {school.name}
            </h1>
          </Reveal>
          {config.heroTagline && (
            <Reveal className="[animation-delay:100ms]">
              <p className="mx-auto mt-4 max-w-xl text-base text-gray-500 sm:text-lg">{config.heroTagline}</p>
            </Reveal>
          )}
          {config.enquiryEnabled && (
            <Reveal className="[animation-delay:200ms]">
              <a href="#contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white transition-transform active:scale-95"
                style={{ background: `linear-gradient(135deg, ${primary}, ${primaryDark})`, boxShadow: `0 12px 28px -8px ${primary}80` }}>
                Enquire Now
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14m-6-6l6 6-6 6" /></svg>
              </a>
            </Reveal>
          )}
        </div>
        {heroSrc && (
          <Reveal className="mx-auto mt-12 max-w-4xl [animation-delay:150ms]">
            <div className="overflow-hidden rounded-2xl sm:rounded-[2rem] shadow-2xl shadow-gray-900/10 ring-1 ring-gray-900/5">
              <img src={heroSrc} alt={school.name} className="w-full object-cover" style={{ maxHeight: 460 }} />
            </div>
          </Reveal>
        )}
      </section>

      {/* ── About ──────────────────────────────────────── */}
      {config.showAbout && config.aboutText && (
        <section id="about" className="px-5 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto grid max-w-5xl gap-10 sm:grid-cols-2 sm:items-center sm:gap-14">
            <Reveal className={aboutSrc ? "" : "sm:col-span-2 sm:mx-auto sm:max-w-2xl sm:text-center"}>
              <p className="text-xs font-bold uppercase tracking-widest" style={{ color: primary }}>About Us</p>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900">Who We Are</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-gray-500 whitespace-pre-line">{config.aboutText}</p>
            </Reveal>
            {aboutSrc && (
              <Reveal className="[animation-delay:100ms]">
                <img src={aboutSrc} alt="About" className="w-full rounded-2xl sm:rounded-3xl object-cover shadow-lg" style={{ maxHeight: 340 }} />
              </Reveal>
            )}
          </div>
        </section>
      )}

      {/* ── Admissions ─────────────────────────────────── */}
      {config.showAdmissions && config.admissionsText && (
        <section id="admissions" className="px-5 py-16 sm:px-6 sm:py-24" style={{ background: `${primary}08` }}>
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest" style={{ color: primary }}>Admissions</p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900">Join Our School</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-gray-600 whitespace-pre-line text-left sm:text-center">{config.admissionsText}</p>
            {(config.admissionsPhone || config.admissionsEmail) && (
              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-semibold text-gray-700">
                {config.admissionsPhone && <span className="flex items-center gap-1.5">📞 {config.admissionsPhone}</span>}
                {config.admissionsEmail && <span className="flex items-center gap-1.5">✉️ {config.admissionsEmail}</span>}
              </div>
            )}
          </Reveal>
        </section>
      )}

      {/* ── Gallery ────────────────────────────────────── */}
      {config.showGallery && config.galleryImages.length > 0 && (
        <section id="gallery" className="px-5 py-16 sm:px-6 sm:py-24">
          <Reveal className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-widest" style={{ color: primary }}>Gallery</p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900">Life at {school.name}</h2>
          </Reveal>
          <div className="mx-auto grid max-w-5xl grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-4">
            {config.galleryImages.map((g, i) => {
              const src = img(g.imageUrl);
              if (!src) return null;
              return (
                <Reveal key={g.id} className={i % 3 === 1 ? "[animation-delay:80ms]" : i % 3 === 2 ? "[animation-delay:160ms]" : ""}>
                  <img src={src} alt={g.caption ?? ""} className="aspect-square w-full rounded-xl sm:rounded-2xl object-cover hover:scale-[1.03] transition-transform duration-300" />
                </Reveal>
              );
            })}
          </div>
        </section>
      )}

      {/* ── Notices ────────────────────────────────────── */}
      {config.showNotices && notices.length > 0 && (
        <section id="notices" className="px-5 py-16 sm:px-6 sm:py-24" style={{ background: `${primary}08` }}>
          <Reveal className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-widest" style={{ color: primary }}>Notice Board</p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900">Latest Updates</h2>
          </Reveal>
          <div className="mx-auto max-w-2xl space-y-3">
            {notices.map(n => (
              <Reveal key={n.id}>
                <div className="rounded-2xl bg-white p-4 sm:p-5 shadow-sm ring-1 ring-gray-900/5">
                  <p className="font-semibold text-gray-900 text-[15px]">{n.title}</p>
                  {n.summary && <p className="mt-1 text-sm text-gray-500">{n.summary}</p>}
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* ── Testimonials ───────────────────────────────── */}
      {config.showTestimonials && config.testimonials.length > 0 && (
        <section id="testimonials" className="px-5 py-16 sm:px-6 sm:py-24">
          <Reveal className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-widest" style={{ color: primary }}>Testimonials</p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900">What People Say</h2>
          </Reveal>
          <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-3">
            {config.testimonials.map(t => {
              const photo = img(t.photoUrl);
              return (
                <Reveal key={t.id}>
                  <div className="h-full rounded-2xl sm:rounded-3xl bg-gray-50 p-6 ring-1 ring-gray-900/5">
                    <p className="text-[15px] text-gray-700 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                    <div className="mt-5 flex items-center gap-3">
                      {photo ? <img src={photo} alt={t.authorName} className="h-9 w-9 rounded-full object-cover" /> : <div className="h-9 w-9 rounded-full" style={{ background: primary }} />}
                      <div>
                        <p className="text-sm font-bold text-gray-900">{t.authorName}</p>
                        {t.role && <p className="text-xs text-gray-400">{t.role}</p>}
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>
      )}

      {/* ── Contact / Enquiry ──────────────────────────── */}
      {config.showContact && (
        <section id="contact" className="px-5 py-16 sm:px-6 sm:py-24" style={{ background: `linear-gradient(180deg, white 0%, ${primary}08 100%)` }}>
          <div className="mx-auto max-w-lg">
            <Reveal className="text-center mb-8">
              <p className="text-xs font-bold uppercase tracking-widest" style={{ color: primary }}>Contact</p>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900">Get in Touch</h2>
              <p className="mt-2 text-sm text-gray-400">{school.address}, {school.city}, {school.state}</p>
            </Reveal>
            <Reveal className="[animation-delay:100ms]">
              {config.enquiryEnabled
                ? <EnquiryForm slug={slug} primaryColor={primary} />
                : (
                  <div className="text-center text-sm text-gray-600 space-y-1.5 rounded-2xl bg-gray-50 p-6">
                    {school.phone && <p>📞 {school.phone}</p>}
                    {school.email && <p>✉️ {school.email}</p>}
                  </div>
                )}
            </Reveal>
          </div>
        </section>
      )}

      <footer className="border-t border-gray-100 py-8 text-center text-xs text-gray-400 px-5">
        © {new Date().getFullYear()} {school.name} · Powered by ShikshaMatrix
      </footer>
    </main>
  );
}
