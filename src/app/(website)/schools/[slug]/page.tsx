// ─────────────────────────────────────────────────────────────
// apps/web/src/app/(website)/schools/[slug]/page.tsx
// Public website for a single school — the actual page prospective
// parents see when they visit shikshamatrix.in/schools/<school-slug>.
// Everything here is driven entirely by that school's WebsiteConfig,
// set from their own admin panel (Settings → Website).
// ─────────────────────────────────────────────────────────────
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

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

function Section({ id, children }: { id: string; children: React.ReactNode }) {
  return <section id={id} className="px-6 py-16 sm:py-20">{children}</section>;
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
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-center">
        <p className="font-semibold text-emerald-700">Thank you! 🎉</p>
        <p className="mt-1 text-sm text-emerald-600">The school will get back to you soon.</p>
      </div>
    );
  }

  const inputCls = "w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none focus:border-gray-400 transition-colors";

  return (
    <form onSubmit={submit} className="space-y-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input required placeholder="Student's name *" value={form.studentName} onChange={e => setForm({ ...form, studentName: e.target.value })} className={inputCls} />
        <input placeholder="Parent's name" value={form.parentName} onChange={e => setForm({ ...form, parentName: e.target.value })} className={inputCls} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input required placeholder="Mobile number *" value={form.mobileNumber} onChange={e => setForm({ ...form, mobileNumber: e.target.value })} className={inputCls} />
        <input type="email" placeholder="Email (optional)" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className={inputCls} />
      </div>
      <input placeholder="Interested class (e.g. Class 5)" value={form.interestedClass} onChange={e => setForm({ ...form, interestedClass: e.target.value })} className={inputCls} />
      <textarea placeholder="Message (optional)" rows={3} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} className={inputCls} />
      {status === "error" && <p className="text-sm text-red-600">{errorMsg}</p>}
      <button type="submit" disabled={status === "sending"}
        className="w-full rounded-xl py-3 text-sm font-semibold text-white transition-opacity disabled:opacity-60"
        style={{ background: primaryColor }}>
        {status === "sending" ? "Sending..." : "Submit Enquiry"}
      </button>
    </form>
  );
}

export default function SchoolWebsitePage() {
  const params = useParams();
  const slug = params.slug as string;
  const [data, setData] = useState<SchoolData | null>(null);
  const [loadState, setLoadState] = useState<"loading" | "ready" | "not-found">("loading");

  useEffect(() => {
    if (!slug) return;
    fetch(`${API_URL}/public/school-website/${slug}`)
      .then(res => res.json())
      .then(json => {
        if (json.success && json.data) {
          setData(json.data);
          setLoadState("ready");
        } else {
          setLoadState("not-found");
        }
      })
      .catch(() => setLoadState("not-found"));
  }, [slug]);

  if (loadState === "loading") {
    return <div className="flex min-h-screen items-center justify-center text-gray-400">Loading...</div>;
  }
  if (loadState === "not-found" || !data) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center">
        <p className="text-xl font-bold text-gray-900">This school's website isn't available</p>
        <p className="text-sm text-gray-500">It may not be set up yet, or the link might be incorrect.</p>
      </div>
    );
  }

  const { school, config, notices } = data;
  const primary = config.primaryColor || "#6366f1";

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* ── Navbar ─────────────────────────────────────── */}
      <header className="sticky top-0 z-40 border-b border-gray-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            {school.logoUrl
              ? <img src={school.logoUrl} alt={school.name} className="h-10 w-10 rounded-xl object-cover" />
              : <div className="flex h-10 w-10 items-center justify-center rounded-xl text-white font-bold" style={{ background: primary }}>{school.name.charAt(0)}</div>}
            <span className="font-bold text-gray-900">{school.name}</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm font-medium text-gray-600">
            {config.showAbout && <a href="#about" className="hover:text-gray-900">About</a>}
            {config.showAdmissions && <a href="#admissions" className="hover:text-gray-900">Admissions</a>}
            {config.showGallery && config.galleryImages.length > 0 && <a href="#gallery" className="hover:text-gray-900">Gallery</a>}
            {config.showNotices && notices.length > 0 && <a href="#notices" className="hover:text-gray-900">Notices</a>}
            {config.showContact && <a href="#contact" className="hover:text-gray-900">Contact</a>}
          </nav>
        </div>
      </header>

      {/* ── Hero ───────────────────────────────────────── */}
      <Section id="hero">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900">{school.name}</h1>
          {config.heroTagline && <p className="mt-4 text-lg text-gray-600">{config.heroTagline}</p>}
          {config.enquiryEnabled && (
            <a href="#contact" className="mt-8 inline-block rounded-full px-8 py-3.5 text-sm font-semibold text-white" style={{ background: primary }}>
              Enquire Now
            </a>
          )}
        </div>
        {config.heroImageUrl && (
          <div className="mx-auto mt-10 max-w-4xl">
            <img src={config.heroImageUrl} alt={school.name} className="w-full rounded-3xl object-cover shadow-xl" style={{ maxHeight: 420 }} />
          </div>
        )}
      </Section>

      {/* ── About ──────────────────────────────────────── */}
      {config.showAbout && config.aboutText && (
        <Section id="about">
          <div className="mx-auto grid max-w-5xl gap-10 sm:grid-cols-2 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About Us</h2>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">{config.aboutText}</p>
            </div>
            {config.aboutImageUrl && <img src={config.aboutImageUrl} alt="About" className="rounded-2xl object-cover w-full" style={{ maxHeight: 320 }} />}
          </div>
        </Section>
      )}

      {/* ── Admissions ─────────────────────────────────── */}
      {config.showAdmissions && config.admissionsText && (
        <Section id="admissions">
          <div className="mx-auto max-w-3xl rounded-3xl p-8 sm:p-10" style={{ background: `${primary}0d` }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Admissions</h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">{config.admissionsText}</p>
            {(config.admissionsPhone || config.admissionsEmail) && (
              <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium">
                {config.admissionsPhone && <span>📞 {config.admissionsPhone}</span>}
                {config.admissionsEmail && <span>✉️ {config.admissionsEmail}</span>}
              </div>
            )}
          </div>
        </Section>
      )}

      {/* ── Gallery ────────────────────────────────────── */}
      {config.showGallery && config.galleryImages.length > 0 && (
        <Section id="gallery">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Gallery</h2>
          <div className="mx-auto grid max-w-5xl grid-cols-2 sm:grid-cols-3 gap-3">
            {config.galleryImages.map(img => (
              <img key={img.id} src={img.imageUrl} alt={img.caption ?? "Gallery"} className="aspect-square w-full rounded-xl object-cover" />
            ))}
          </div>
        </Section>
      )}

      {/* ── Notices ────────────────────────────────────── */}
      {config.showNotices && notices.length > 0 && (
        <Section id="notices">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Notice Board</h2>
          <div className="mx-auto max-w-2xl space-y-3">
            {notices.map(n => (
              <div key={n.id} className="rounded-xl border border-gray-100 p-4">
                <p className="font-semibold text-gray-900 text-sm">{n.title}</p>
                {n.summary && <p className="mt-1 text-sm text-gray-500">{n.summary}</p>}
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* ── Testimonials ───────────────────────────────── */}
      {config.showTestimonials && config.testimonials.length > 0 && (
        <Section id="testimonials">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">What People Say</h2>
          <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-3">
            {config.testimonials.map(t => (
              <div key={t.id} className="rounded-2xl border border-gray-100 p-5">
                <p className="text-sm text-gray-700 italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-4 flex items-center gap-2">
                  {t.photoUrl ? <img src={t.photoUrl} alt={t.authorName} className="h-8 w-8 rounded-full object-cover" /> : <div className="h-8 w-8 rounded-full" style={{ background: primary }} />}
                  <div>
                    <p className="text-xs font-semibold text-gray-900">{t.authorName}</p>
                    {t.role && <p className="text-[11px] text-gray-400">{t.role}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* ── Contact / Enquiry ──────────────────────────── */}
      {config.showContact && (
        <Section id="contact">
          <div className="mx-auto max-w-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Get in Touch</h2>
            <p className="text-sm text-gray-500 text-center mb-8">{school.address}, {school.city}, {school.state}</p>
            {config.enquiryEnabled
              ? <EnquiryForm slug={slug} primaryColor={primary} />
              : (
                <div className="text-center text-sm text-gray-600 space-y-1">
                  {school.phone && <p>📞 {school.phone}</p>}
                  {school.email && <p>✉️ {school.email}</p>}
                </div>
              )}
          </div>
        </Section>
      )}

      <footer className="border-t border-gray-100 py-8 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} {school.name} · Powered by ShikshaMatrix
      </footer>
    </main>
  );
}
