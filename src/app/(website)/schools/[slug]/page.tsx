// ─────────────────────────────────────────────────────────────
// apps/web/src/app/(website)/schools/[slug]/page.tsx
// Public website for a single school — driven entirely by that
// school's WebsiteConfig, set from their admin panel (Settings → Website).
// ─────────────────────────────────────────────────────────────
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import {
  Phone, Mail, MapPin, Play, Download, ChevronRight, ChevronDown,
  Building2, BookOpen, Users, Trophy, Heart, Wifi, Bus, UtensilsCrossed,
  Dumbbell, Microscope, Music, Palette, ShieldCheck, Library, Monitor,
  GraduationCap, Award, Sparkles, Quote,
} from "lucide-react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.shikshamatrix.in";

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

const FACILITY_ICONS: Record<string, any> = {
  Building2, BookOpen, Users, Trophy, Heart, Wifi, Bus, UtensilsCrossed,
  Dumbbell, Microscope, Music, Palette, ShieldCheck, Library, Monitor,
  GraduationCap, Award, Sparkles,
};
const STAT_ICONS = [GraduationCap, Users, Award, Trophy];

interface SchoolData {
  school: { id: number; name: string; logoUrl: string | null; address: string; city: string; state: string; phone: string; email: string };
  config: {
    theme: string; primaryColor: string;
    heroTagline: string | null; heroImageUrl: string | null;
    aboutText: string | null; aboutImageUrl: string | null;
    admissionsText: string | null; admissionsPhone: string | null; admissionsEmail: string | null;
    principalName: string | null; principalMessage: string | null; principalPhotoUrl: string | null;
    stats: { value: string; label: string }[];
    brochureUrl: string | null; virtualTourUrl: string | null;
    showAbout: boolean; showAdmissions: boolean; showGallery: boolean;
    showContact: boolean; showNotices: boolean; showTestimonials: boolean;
    showPrincipalMessage: boolean; showFacilities: boolean; showFAQs: boolean;
    enquiryEnabled: boolean; metaTitle: string | null; metaDesc: string | null;
    galleryImages: { id: number; imageUrl: string; caption: string | null }[];
    testimonials: { id: number; authorName: string; role: string | null; quote: string; photoUrl: string | null }[];
    facilities: { id: number; icon: string; title: string; description: string | null }[];
    faqs: { id: number; question: string; answer: string }[];
  };
  notices: { id: number; title: string; summary: string | null; publishAt: string | null; createdAt: string }[];
}

function shade(hex: string, percent: number): string {
  const n = parseInt(hex.replace("#", ""), 16);
  const r = Math.min(255, Math.max(0, ((n >> 16) & 255) + percent));
  const g = Math.min(255, Math.max(0, ((n >> 8) & 255) + percent));
  const b = Math.min(255, Math.max(0, (n & 255) + percent));
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

function Reveal({ children, className = "", delay = 0, style = {} }: { children: React.ReactNode; className?: string; delay?: number; style?: React.CSSProperties }) {
  return <div className={`opacity-0 translate-y-3 animate-[fadeUp_0.6s_ease-out_forwards] ${className}`} style={{ animationDelay: `${delay}ms`, ...style }}>{children}</div>;
}

function Eyebrow({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <div className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider mb-3"
      style={{ background: `${color}14`, color }}>
      {children}
    </div>
  );
}

function FAQItem({ q, a, color }: { q: string; a: string; color: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-gray-100 overflow-hidden">
      <button onClick={() => setOpen(v => !v)} className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left">
        <span className="text-[15px] font-semibold text-gray-900">{q}</span>
        <ChevronDown size={18} className={`flex-shrink-0 text-gray-400 transition-transform ${open ? "rotate-180" : ""}`} style={open ? { color } : {}} />
      </button>
      {open && <div className="px-5 pb-4 text-sm text-gray-500 leading-relaxed">{a}</div>}
    </div>
  );
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
      if (!res.ok || !data.success) { setStatus("error"); setErrorMsg(data.message ?? "Something went wrong. Please try again."); return; }
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

  const inputCls = "w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-[15px] text-gray-900 outline-none transition-all focus:border-gray-300 focus:bg-white";

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
    return <div className="flex min-h-screen items-center justify-center bg-white"><div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-200 border-t-gray-900" /></div>;
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
  const primary = config.primaryColor || "#2563EB";
  const primaryDark = shade(primary, -35);
  const logoSrc = img(school.logoUrl);
  const heroSrc = img(config.heroImageUrl);
  const aboutSrc = img(config.aboutImageUrl);
  const principalSrc = img(config.principalPhotoUrl);
  const mapQuery = encodeURIComponent(`${school.address}, ${school.city}, ${school.state}`);

  const navItems = [
    config.showAbout && config.aboutText && { href: "#about", label: "About" },
    config.showFacilities && config.facilities.length > 0 && { href: "#facilities", label: "Facilities" },
    config.showAdmissions && config.admissionsText && { href: "#admissions", label: "Admissions" },
    config.showGallery && config.galleryImages.length > 0 && { href: "#gallery", label: "Gallery" },
    config.showFAQs && config.faqs.length > 0 && { href: "#faqs", label: "FAQs" },
    config.showContact && { href: "#contact", label: "Contact" },
  ].filter(Boolean) as { href: string; label: string }[];

  return (
    <main className="min-h-screen bg-white text-gray-900 antialiased" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      <style>{`@keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }`}</style>

      {/* ── Utility bar ────────────────────────────────── */}
      {(school.phone || school.email) && (
        <div className="hidden sm:block text-white text-xs" style={{ background: primaryDark }}>
          <div className="mx-auto max-w-6xl px-6 py-2 flex items-center gap-5">
            {school.phone && <span className="flex items-center gap-1.5 opacity-90"><Phone size={11} /> {school.phone}</span>}
            {school.email && <span className="flex items-center gap-1.5 opacity-90"><Mail size={11} /> {school.email}</span>}
            <span className="flex items-center gap-1.5 opacity-90 ml-auto"><MapPin size={11} /> {school.city}, {school.state}</span>
          </div>
        </div>
      )}

      {/* ── Navbar ─────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-gray-100/80 bg-white/90 backdrop-blur-lg">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-6">
          <div className="flex items-center gap-2.5 min-w-0">
            {logoSrc
              ? <img src={logoSrc} alt={school.name} className="h-9 w-9 sm:h-10 sm:w-10 rounded-xl object-cover flex-shrink-0" />
              : <div className="flex h-9 w-9 sm:h-10 sm:w-10 flex-shrink-0 items-center justify-center rounded-xl text-white font-bold text-sm" style={{ background: `linear-gradient(135deg, ${primary}, ${primaryDark})` }}>{school.name.charAt(0)}</div>}
            <span className="font-bold text-gray-900 text-[15px] sm:text-base truncate">{school.name}</span>
          </div>
          <nav className="hidden md:flex items-center gap-7">
            {navItems.map(n => <a key={n.href} href={n.href} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">{n.label}</a>)}
          </nav>
          <div className="flex items-center gap-2">
            {config.enquiryEnabled && (
              <a href="#contact" className="hidden sm:inline-flex items-center rounded-full px-4 py-2 text-xs font-bold text-white" style={{ background: primary }}>
                Enquire Now
              </a>
            )}
            {navItems.length > 0 && (
              <button onClick={() => setMenuOpen(v => !v)} className="md:hidden flex h-9 w-9 items-center justify-center rounded-full hover:bg-gray-100 flex-shrink-0" aria-label="Menu">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                  {menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
                </svg>
              </button>
            )}
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white px-5 py-3 space-y-1">
            {navItems.map(n => <a key={n.href} href={n.href} onClick={() => setMenuOpen(false)} className="block rounded-xl px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50">{n.label}</a>)}
          </div>
        )}
      </header>

      {/* ── Hero ───────────────────────────────────────── */}
      <section className="relative overflow-hidden px-5 pt-14 pb-10 sm:px-6 sm:pt-20" style={{ background: `linear-gradient(180deg, ${primary}0d 0%, white 75%)` }}>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal><Eyebrow color={primary}><Sparkles size={11} /> Welcome to {school.name}</Eyebrow></Reveal>
          <Reveal delay={60}>
            <h1 className="text-[2.15rem] leading-[1.1] font-extrabold tracking-tight text-gray-900 sm:text-5xl sm:leading-[1.05] lg:text-6xl">
              {config.heroTagline || `${school.name}`}
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="mx-auto mt-4 max-w-xl text-base text-gray-500 sm:text-lg">
              {school.city && school.state ? `Located in ${school.city}, ${school.state}` : "Nurturing minds, building futures"}
            </p>
          </Reveal>
          <Reveal delay={180}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {config.enquiryEnabled && (
                <a href="#contact" className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold text-white transition-transform active:scale-95"
                  style={{ background: `linear-gradient(135deg, ${primary}, ${primaryDark})`, boxShadow: `0 12px 28px -8px ${primary}80` }}>
                  Enquire Now <ChevronRight size={16} />
                </a>
              )}
              {config.virtualTourUrl && (
                <a href={config.virtualTourUrl} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-6 py-3.5 text-sm font-bold text-gray-700 hover:bg-gray-50 transition-colors">
                  <Play size={14} /> Watch Video
                </a>
              )}
              {config.brochureUrl && (
                <a href={img(config.brochureUrl) ?? config.brochureUrl} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-6 py-3.5 text-sm font-bold text-gray-700 hover:bg-gray-50 transition-colors">
                  <Download size={14} /> Brochure
                </a>
              )}
            </div>
          </Reveal>
        </div>
        {heroSrc && (
          <Reveal delay={220} className="mx-auto mt-12 max-w-4xl">
            <div className="overflow-hidden rounded-2xl sm:rounded-[2rem] shadow-2xl shadow-gray-900/10 ring-1 ring-gray-900/5">
              <img src={heroSrc} alt={school.name} className="w-full object-cover" style={{ maxHeight: 460 }} loading="eager" fetchPriority="high" />
            </div>
          </Reveal>
        )}

        {/* Trust stat bar — floats over the hero/content boundary */}
        {config.stats.length > 0 && (
          <Reveal delay={280} className="relative z-10 mx-auto -mb-16 mt-12 max-w-4xl">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-px overflow-hidden rounded-2xl sm:rounded-3xl bg-gray-100 shadow-xl shadow-gray-900/10 ring-1 ring-gray-900/5">
              {config.stats.map((s, i) => {
                const Icon = STAT_ICONS[i % STAT_ICONS.length];
                return (
                  <div key={i} className="bg-white p-4 sm:p-6 text-center">
                    <Icon size={18} className="mx-auto mb-2" style={{ color: primary }} />
                    <p className="text-xl sm:text-2xl font-extrabold text-gray-900">{s.value}</p>
                    <p className="text-[11px] sm:text-xs text-gray-400 mt-0.5">{s.label}</p>
                  </div>
                );
              })}
            </div>
          </Reveal>
        )}
      </section>

      {/* spacer to clear the floating stat bar */}
      {config.stats.length > 0 && <div className="h-16" />}

      {/* ── About ──────────────────────────────────────── */}
      {config.showAbout && config.aboutText && (
        <section id="about" className="px-5 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto grid max-w-5xl gap-10 sm:grid-cols-2 sm:items-center sm:gap-14">
            <Reveal className={aboutSrc ? "" : "sm:col-span-2 sm:mx-auto sm:max-w-2xl sm:text-center"}>
              <Eyebrow color={primary}>About Us</Eyebrow>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Who We Are</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-gray-500 whitespace-pre-line">{config.aboutText}</p>
            </Reveal>
            {aboutSrc && (
              <Reveal delay={100}>
                <img src={aboutSrc} alt="About" className="w-full rounded-2xl sm:rounded-3xl object-cover shadow-lg" style={{ maxHeight: 340 }} loading="lazy" />
              </Reveal>
            )}
          </div>
        </section>
      )}

      {/* ── Principal's Message ────────────────────────── */}
      {config.showPrincipalMessage && config.principalMessage && (
        <section className="px-5 py-16 sm:px-6 sm:py-24" style={{ background: `${primary}08` }}>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Quote size={32} className="mx-auto mb-4 opacity-20" style={{ color: primary }} />
            <p className="text-lg sm:text-xl leading-relaxed text-gray-700 italic whitespace-pre-line">&ldquo;{config.principalMessage}&rdquo;</p>
            <div className="mt-6 flex items-center justify-center gap-3">
              {principalSrc ? <img src={principalSrc} alt={config.principalName ?? ""} className="h-12 w-12 rounded-full object-cover" loading="lazy" /> : <div className="h-12 w-12 rounded-full" style={{ background: primary }} />}
              <div className="text-left">
                <p className="font-bold text-gray-900 text-sm">{config.principalName ?? "Principal"}</p>
                <p className="text-xs text-gray-400">Principal, {school.name}</p>
              </div>
            </div>
          </Reveal>
        </section>
      )}

      {/* ── Facilities ─────────────────────────────────── */}
      {config.showFacilities && config.facilities.length > 0 && (
        <section id="facilities" className="px-5 py-16 sm:px-6 sm:py-24">
          <Reveal className="text-center mb-10">
            <Eyebrow color={primary}>Facilities</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Everything Your Child Needs</h2>
          </Reveal>
          <div className="mx-auto grid max-w-5xl grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {config.facilities.map((f, i) => {
              const Icon = FACILITY_ICONS[f.icon] ?? Building2;
              return (
                <Reveal key={f.id} delay={(i % 3) * 60}>
                  <div className="h-full rounded-2xl border border-gray-100 p-5 hover:border-gray-200 hover:shadow-md transition-all">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl mb-3" style={{ background: `${primary}14`, color: primary }}>
                      <Icon size={18} />
                    </div>
                    <p className="font-bold text-gray-900 text-sm">{f.title}</p>
                    {f.description && <p className="mt-1 text-xs text-gray-400 leading-relaxed">{f.description}</p>}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>
      )}

      {/* ── Admissions (CTA banner) ────────────────────── */}
      {config.showAdmissions && config.admissionsText && (
        <section id="admissions" className="px-5 sm:px-6">
          <Reveal className="mx-auto max-w-5xl rounded-3xl p-8 sm:p-12 text-center sm:text-left sm:flex sm:items-center sm:justify-between sm:gap-8"
            style={{ background: `linear-gradient(135deg, ${primary}, ${primaryDark})` }}>
            <div>
              <p className="text-white/70 text-xs font-bold uppercase tracking-wider mb-2">Admissions Open</p>
              <h2 className="text-white text-2xl sm:text-3xl font-bold">Join {school.name}</h2>
              <p className="mt-3 text-white/85 text-[15px] leading-relaxed max-w-lg whitespace-pre-line">{config.admissionsText}</p>
              {(config.admissionsPhone || config.admissionsEmail) && (
                <div className="mt-4 flex flex-wrap items-center justify-center sm:justify-start gap-x-5 gap-y-1.5 text-sm font-semibold text-white/90">
                  {config.admissionsPhone && <span className="flex items-center gap-1.5"><Phone size={13} /> {config.admissionsPhone}</span>}
                  {config.admissionsEmail && <span className="flex items-center gap-1.5"><Mail size={13} /> {config.admissionsEmail}</span>}
                </div>
              )}
            </div>
            {config.enquiryEnabled && (
              <a href="#contact" className="mt-6 sm:mt-0 inline-flex flex-shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold whitespace-nowrap" style={{ color: primary }}>
                Apply Now <ChevronRight size={16} />
              </a>
            )}
          </Reveal>
        </section>
      )}

      {/* ── Gallery ────────────────────────────────────── */}
      {config.showGallery && config.galleryImages.length > 0 && (
        <section id="gallery" className="px-5 py-16 sm:px-6 sm:py-24">
          <Reveal className="text-center mb-10">
            <Eyebrow color={primary}>Gallery</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Life at {school.name}</h2>
          </Reveal>
          <div className="mx-auto grid max-w-5xl grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-4">
            {config.galleryImages.map((g, i) => {
              const src = img(g.imageUrl);
              if (!src) return null;
              return (
                <Reveal key={g.id} delay={(i % 3) * 80}>
                  <div className="overflow-hidden rounded-xl sm:rounded-2xl">
                    <img src={src} alt={g.caption ?? ""} className="aspect-square w-full object-cover hover:scale-[1.06] transition-transform duration-500" loading="lazy" />
                  </div>
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
            <Eyebrow color={primary}>Notice Board</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Latest Updates</h2>
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
        <section className="px-5 py-16 sm:px-6 sm:py-24">
          <Reveal className="text-center mb-10">
            <Eyebrow color={primary}>Testimonials</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">What People Say</h2>
          </Reveal>
          <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-3">
            {config.testimonials.map((t, i) => {
              const photo = img(t.photoUrl);
              return (
                <Reveal key={t.id} delay={i * 80}>
                  <div className="h-full rounded-2xl sm:rounded-3xl bg-gray-50 p-6 ring-1 ring-gray-900/5">
                    <Quote size={20} className="mb-3 opacity-20" style={{ color: primary }} />
                    <p className="text-[15px] text-gray-700 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                    <div className="mt-5 flex items-center gap-3">
                      {photo ? <img src={photo} alt={t.authorName} className="h-9 w-9 rounded-full object-cover" loading="lazy" /> : <div className="h-9 w-9 rounded-full" style={{ background: primary }} />}
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

      {/* ── FAQs ───────────────────────────────────────── */}
      {config.showFAQs && config.faqs.length > 0 && (
        <section id="faqs" className="px-5 py-16 sm:px-6 sm:py-24" style={{ background: `${primary}08` }}>
          <Reveal className="text-center mb-10">
            <Eyebrow color={primary}>FAQs</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Common Questions</h2>
          </Reveal>
          <div className="mx-auto max-w-2xl space-y-3">
            {config.faqs.map(f => <FAQItem key={f.id} q={f.question} a={f.answer} color={primary} />)}
          </div>
        </section>
      )}

      {/* ── Contact / Enquiry ──────────────────────────── */}
      {config.showContact && (
        <section id="contact" className="px-5 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-5xl grid gap-10 sm:grid-cols-2 sm:items-start">
            <Reveal>
              <Eyebrow color={primary}>Contact</Eyebrow>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              <div className="space-y-3 text-sm text-gray-600 mb-6">
                <p className="flex items-start gap-2.5"><MapPin size={16} className="flex-shrink-0 mt-0.5" style={{ color: primary }} /> {school.address}, {school.city}, {school.state}</p>
                {school.phone && <p className="flex items-center gap-2.5"><Phone size={16} style={{ color: primary }} /> {school.phone}</p>}
                {school.email && <p className="flex items-center gap-2.5"><Mail size={16} style={{ color: primary }} /> {school.email}</p>}
              </div>
              <div className="overflow-hidden rounded-2xl border border-gray-100" style={{ height: 220 }}>
                <iframe title="Map" width="100%" height="100%" style={{ border: 0 }} loading="lazy"
                  src={`https://www.google.com/maps?q=${mapQuery}&output=embed`} />
              </div>
            </Reveal>
            <Reveal delay={100}>
              {config.enquiryEnabled
                ? <div className="rounded-3xl border border-gray-100 p-6 sm:p-8 shadow-sm"><EnquiryForm slug={slug} primaryColor={primary} /></div>
                : <div className="rounded-3xl bg-gray-50 p-8 text-center text-sm text-gray-500">Call or email us directly using the details above.</div>}
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
