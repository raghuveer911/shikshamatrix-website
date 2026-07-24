// ─────────────────────────────────────────────────────────────
// apps/web/src/app/(website)/_components/website-ui.tsx
// Navbar, Footer, Reveal-on-scroll, shared primitives.
// ─────────────────────────────────────────────────────────────
"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";

// Where the nav buttons redirect. Adjust to your live URLs.
const ADMIN_APP_URL = process.env.NEXT_PUBLIC_ADMIN_APP_URL || "http://localhost:3000";
export const APP_LINKS = {
  register: `${ADMIN_APP_URL}/login?view=register`, // school onboarding — same login page, register steps
  login: `${ADMIN_APP_URL}/login`,                   // school admin login
  download: "/download",                             // APK download page — teachers/staff/parents/students
};

// ── Reveal-on-scroll wrapper ─────────────────────────────────
export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.style.transitionDelay = `${delay}ms`;
          el.classList.add("sm-in");
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  return (
    <div ref={ref} className={`sm-reveal ${className}`}>
      {children}
    </div>
  );
}

// ── Section heading kit ──────────────────────────────────────
export function SectionHeading({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <Reveal className="mx-auto mb-12 max-w-3xl text-center">
      <div className="mb-3 inline-block rounded-full border border-[var(--sm-border)] bg-[var(--sm-primary-soft)] px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-300">
        {eyebrow}
      </div>
      <h2 className="sm-display text-3xl font-bold leading-tight text-[var(--sm-text)] sm:text-4xl lg:text-[2.6rem]">{title}</h2>
      {sub && <p className="mt-4 text-base leading-relaxed text-[var(--sm-muted)] sm:text-lg">{sub}</p>}
    </Reveal>
  );
}

// ── CTA buttons — Liquid Button per design doc ──
// Effects: glass surface, magnetic hover, ripple on click, gradient border flow
export function PrimaryCTA({ href, children, onClick }: { href?: string; children: ReactNode; onClick?: () => void }) {
  const btnRef = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);

  const handleMagnetic = (e: React.MouseEvent) => {
    const el = btnRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const mx = ((e.clientX - r.left) / r.width - 0.5) * 14; // pull strength
    const my = ((e.clientY - r.top) / r.height - 0.5) * 10;
    el.style.transform = `translate(${mx}px, ${my}px) scale(1.03)`;
  };
  const resetMagnetic = () => { if (btnRef.current) btnRef.current.style.transform = ""; };

  const fireRipple = (e: React.MouseEvent) => {
    const el = btnRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const id = Date.now();
    setRipples((rs) => [...rs, { id, x: e.clientX - r.left, y: e.clientY - r.top }]);
    setTimeout(() => setRipples((rs) => rs.filter((rp) => rp.id !== id)), 650);
  };

  const cls =
    "sm-liquid-btn group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-transform duration-200 ease-out active:scale-[0.97]";

  const inner = (
    <>
      <span className="sm-liquid-sheen" />
      <span className="relative z-10">{children}</span>
      {ripples.map((rp) => (
        <span key={rp.id} className="sm-liquid-ripple" style={{ left: rp.x, top: rp.y }} />
      ))}
    </>
  );

  const shared = {
    ref: btnRef as any,
    className: cls,
    onMouseMove: handleMagnetic,
    onMouseLeave: resetMagnetic,
    onMouseDown: fireRipple,
  };

  return href ? (
    <Link href={href} {...shared}>{inner}</Link>
  ) : (
    <button onClick={onClick} {...shared}>{inner}</button>
  );
}

export function GhostCTA({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="sm-glass inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-[var(--sm-text)] transition-colors hover:border-[var(--sm-border-hi)]"
    >
      {children}
    </Link>
  );
}

// helper: smooth-scroll to an in-page section
export function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

// ── Navbar — floating liquid glass pill ──────────────────────
const NAV_ITEMS = [
  { label: "Problems We Solve", id: "problems" },
  { label: "Platform", id: "platform" },
  { label: "ROI", id: "roi" },
  { label: "Pricing", id: "pricing" },
  { label: "Contact", id: "contact" },
];

export function WebsiteNavbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const loginDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Click-outside to close — far more reliable than onBlur+setTimeout,
  // which raced against the click event on the links inside the dropdown
  // and could close it before the navigation registered.
  useEffect(() => {
    if (!loginOpen) return;
    const onClickOutside = (e: MouseEvent) => {
      if (loginDropdownRef.current && !loginDropdownRef.current.contains(e.target as Node)) {
        setLoginOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [loginOpen]);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav
        className={`sm-glass mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-3 transition-all duration-300 ${
          scrolled ? "shadow-[0_14px_45px_-12px_rgba(0,0,0,.6)] border-[var(--sm-border-hi)]" : ""
        }`}
      >
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/shikshamatrix.svg" alt="ShikshaMatrix" className="h-9 w-auto" />
          <span className="sm-display text-lg font-bold tracking-tight">
            Shiksha<span className="text-indigo-400">Matrix</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-7 lg:flex">
          {NAV_ITEMS.map((n) => (
            <button key={n.id} onClick={() => scrollToId(n.id)} className="sm-navlink text-sm font-medium text-[var(--sm-muted)] transition-colors hover:text-[var(--sm-text)]">
              {n.label}
            </button>
          ))}
        </div>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 lg:flex">
          {/* Login dropdown — role portals */}
          <div className="relative" ref={loginDropdownRef}>
            <button
              onClick={() => setLoginOpen((v) => !v)}
              className="rounded-full px-4 py-2 text-sm font-semibold text-[var(--sm-text)] transition-colors hover:bg-white/5"
            >
              Login ▾
            </button>
            {loginOpen && (
              <div className="sm-glass absolute right-0 top-12 w-56 rounded-2xl p-2 shadow-2xl">
                <Link href={APP_LINKS.login} onClick={() => setLoginOpen(false)} className="block rounded-xl px-4 py-2.5 text-sm hover:bg-white/5">
                  School Admin
                </Link>
                <Link href={APP_LINKS.download} onClick={() => setLoginOpen(false)} className="block rounded-xl px-4 py-2.5 text-sm hover:bg-white/5">
                  Teacher / Staff <span className="ml-1 text-[10px] text-indigo-300">Mobile App</span>
                </Link>
                <Link href={APP_LINKS.download} onClick={() => setLoginOpen(false)} className="block rounded-xl px-4 py-2.5 text-sm hover:bg-white/5">
                  Parent / Student <span className="ml-1 text-[10px] text-indigo-300">Mobile App</span>
                </Link>
              </div>
            )}
          </div>
          <PrimaryCTA href={APP_LINKS.register}>Register Your School</PrimaryCTA>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen((v) => !v)} className="grid h-10 w-10 place-items-center rounded-full hover:bg-white/5 lg:hidden" aria-label="Menu">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {/* Mobile menu sheet */}
      {open && (
        <div className="sm-glass mx-auto mt-2 max-w-6xl rounded-3xl p-4 lg:hidden">
          {NAV_ITEMS.map((n) => (
            <button
              key={n.id}
              onClick={() => { setOpen(false); scrollToId(n.id); }}
              className="block w-full rounded-xl px-4 py-3 text-left text-sm font-medium hover:bg-white/5"
            >
              {n.label}
            </button>
          ))}
          <div className="my-2 h-px bg-[var(--sm-border)]" />
          <Link href={APP_LINKS.login} className="block rounded-xl px-4 py-3 text-sm font-semibold hover:bg-white/5">School Login</Link>
          <Link href={APP_LINKS.register} className="mt-2 block rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-4 py-3 text-center text-sm font-semibold text-white">
            Register Your School
          </Link>
        </div>
      )}
    </header>
  );
}

// ── Footer ───────────────────────────────────────────────────
export function WebsiteFooter() {
  return (
    <footer className="border-t border-[var(--sm-border)] bg-[var(--sm-bg-2)]/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="mb-3 flex items-center gap-2.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/shikshamatrix.svg" alt="ShikshaMatrix" className="h-10 w-auto" />
            <span className="sm-display text-xl font-bold tracking-tight">
              Shiksha<span className="text-indigo-400">Matrix</span>
            </span>
          </div>
          <p className="text-sm leading-relaxed text-[var(--sm-muted)]">
            The operating system for modern schools. One intelligent platform for admissions, academics, fees, staff and parents.
          </p>
        </div>
        <div>
          <div className="mb-3 text-sm font-semibold uppercase tracking-wider text-[var(--sm-muted)]">Platform</div>
          {["Admissions", "Attendance", "Fee Management", "Communication", "Transport", "Examinations"].map((x) => (
            <button key={x} onClick={() => scrollToId("platform")} className="block py-1.5 text-sm text-[var(--sm-muted)] hover:text-[var(--sm-text)]">{x}</button>
          ))}
        </div>
        <div>
          <div className="mb-3 text-sm font-semibold uppercase tracking-wider text-[var(--sm-muted)]">Company</div>
          <button onClick={() => scrollToId("contact")} className="block py-1.5 text-sm text-[var(--sm-muted)] hover:text-[var(--sm-text)]">Contact Us</button>
          <button onClick={() => scrollToId("roi")} className="block py-1.5 text-sm text-[var(--sm-muted)] hover:text-[var(--sm-text)]">ROI Calculator</button>
          <button onClick={() => scrollToId("pricing")} className="block py-1.5 text-sm text-[var(--sm-muted)] hover:text-[var(--sm-text)]">Pricing</button>
        </div>
        <div>
          <div className="mb-3 text-sm font-semibold uppercase tracking-wider text-[var(--sm-muted)]">Get Started</div>
          <Link href={APP_LINKS.register} className="block py-1.5 text-sm text-indigo-300 hover:text-indigo-200">Register Your School →</Link>
          <Link href={APP_LINKS.login} className="block py-1.5 text-sm text-[var(--sm-muted)] hover:text-[var(--sm-text)]">School Login</Link>
          <Link href={APP_LINKS.download} className="block py-1.5 text-sm text-[var(--sm-muted)] hover:text-[var(--sm-text)]">Download Mobile App</Link>
        </div>
      </div>
      <div className="border-t border-[var(--sm-border)] py-5 text-center text-xs text-[var(--sm-muted)]">
        © {new Date().getFullYear()} ShikshaMatrix · shikshamatrix.in · Made in India for Indian Schools
      </div>
    </footer>
  );
}