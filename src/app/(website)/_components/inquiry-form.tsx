// ─────────────────────────────────────────────────────────────
// apps/web/src/app/(website)/_components/inquiry-form.tsx
// Demo / Contact form → POST /api/website/inquiry
// Reusable in 3 places:
//   - InquirySection  → full form, used on the homepage (#contact) and /contact
//   - InquiryCompact  → smaller inline card, drops onto feature/service pages
// ─────────────────────────────────────────────────────────────
"use client";

import { useState } from "react";
import { Reveal, SectionHeading } from "./website-ui";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.shikshamatrix.in";

type FormState = {
  type: "DEMO_REQUEST" | "CONTACT" | "PRICING";
  schoolName: string;
  contactName: string;
  designation: string;
  email: string;
  phone: string;
  city: string;
  studentCount: string;
  message: string;
  website: string; // honeypot — hidden from humans
};

const INITIAL: FormState = {
  type: "DEMO_REQUEST",
  schoolName: "",
  contactName: "",
  designation: "",
  email: "",
  phone: "",
  city: "",
  studentCount: "",
  message: "",
  website: "",
};

const inputCls =
  "w-full rounded-xl border border-[var(--sm-border)] bg-black/[0.025] px-4 py-3 text-sm text-[var(--sm-text)] placeholder-[var(--sm-muted)] outline-none transition-colors focus:border-indigo-400";

// Shared form logic + fields — rendered inside either the full section or the compact card.
function useInquiryForm(source: string) {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const set = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async () => {
    if (form.schoolName.trim().length < 3) return fail("Please enter your school name.");
    if (form.contactName.trim().length < 2) return fail("Please enter your name.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) return fail("Please enter a valid email.");
    if (!/^[0-9+\-\s()]{8,15}$/.test(form.phone.trim())) return fail("Please enter a valid phone number.");

    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch(`${API_URL}/api/website/inquiry`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          studentCount: form.studentCount ? Number(form.studentCount) : undefined,
          source,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message || "Something went wrong.");
      setStatus("done");
    } catch (err: any) {
      fail(err.message || "Could not send. Please try again or call us directly.");
    }
  };

  function fail(msg: string) {
    setErrorMsg(msg);
    setStatus("error");
  }

  return { form, setForm, status, errorMsg, set, submit };
}

// ── Full form — homepage #contact section + /contact page ─────
export function InquirySection({ compactHeading = false }: { compactHeading?: boolean }) {
  const { form, setForm, status, errorMsg, set, submit } = useInquiryForm("contact-section");

  return (
    <section id="contact" className="sm-mesh relative py-24">
      <div className="mx-auto max-w-5xl px-6">
        {!compactHeading && (
          <SectionHeading
            eyebrow="Get Started"
            title="See ShikshaMatrix Running Your School"
            sub="Book a free 30-minute demo. We'll show you exactly how much time and money your school can save — with your own numbers."
          />
        )}

        <Reveal>
          <div className="sm-glass mx-auto max-w-3xl rounded-3xl p-6 sm:p-10">
            {status === "done" ? (
              <div className="py-10 text-center">
                <div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-full bg-emerald-500/15 text-3xl">🎉</div>
                <h3 className="sm-display mb-2 text-2xl font-bold">Inquiry received!</h3>
                <p className="mx-auto max-w-md text-sm leading-relaxed text-[var(--sm-muted)]">
                  Our team will reach out within 24 hours to schedule your demo. Meanwhile, feel free to explore the platform above.
                </p>
              </div>
            ) : (
              <div className="grid gap-5">
                {/* inquiry type */}
                <div className="flex flex-wrap gap-2.5 sm:gap-3">
                  {([
                    ["DEMO_REQUEST", "📅 Book a Demo"],
                    ["PRICING", "₹ Get Pricing"],
                    ["CONTACT", "💬 General Inquiry"],
                  ] as const).map(([val, label]) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => setForm((f) => ({ ...f, type: val }))}
                      className={`rounded-full px-4 py-2 text-xs font-semibold transition-all sm:text-sm ${
                        form.type === val
                          ? "bg-gradient-to-r from-indigo-500 to-violet-500 text-white"
                          : "sm-glass text-[var(--sm-muted)] hover:text-[var(--sm-text)]"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-[var(--sm-muted)]">School name *</label>
                    <input className={inputCls} placeholder="e.g. Sunrise Public School" value={form.schoolName} onChange={set("schoolName")} />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-[var(--sm-muted)]">Your name *</label>
                    <input className={inputCls} placeholder="Full name" value={form.contactName} onChange={set("contactName")} />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-[var(--sm-muted)]">Designation</label>
                    <select className={inputCls} value={form.designation} onChange={set("designation")}>
                      <option value="">Select…</option>
                      <option>Principal</option>
                      <option>Director / Owner</option>
                      <option>Administrator</option>
                      <option>IT In-charge</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-[var(--sm-muted)]">Number of students</label>
                    <input className={inputCls} type="number" min={0} placeholder="e.g. 500" value={form.studentCount} onChange={set("studentCount")} />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-[var(--sm-muted)]">Email *</label>
                    <input className={inputCls} type="email" placeholder="you@school.in" value={form.email} onChange={set("email")} />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-[var(--sm-muted)]">Phone *</label>
                    <input className={inputCls} type="tel" placeholder="+91" value={form.phone} onChange={set("phone")} />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-1.5 block text-xs font-semibold text-[var(--sm-muted)]">City</label>
                    <input className={inputCls} placeholder="e.g. Jodhpur" value={form.city} onChange={set("city")} />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-1.5 block text-xs font-semibold text-[var(--sm-muted)]">Anything specific you want to see?</label>
                    <textarea className={`${inputCls} min-h-[100px] resize-y`} placeholder="e.g. Fee management and parent app…" value={form.message} onChange={set("message")} />
                  </div>
                </div>

                {/* honeypot — invisible to humans, bots fill it */}
                <input
                  type="text"
                  value={form.website}
                  onChange={set("website")}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  style={{ position: "absolute", left: "-9999px", height: 0, width: 0, opacity: 0 }}
                />

                {status === "error" && (
                  <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-600">{errorMsg}</div>
                )}

                <button
                  onClick={submit}
                  disabled={status === "sending"}
                  className="group relative mx-auto inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-10 py-4 text-sm font-semibold text-white shadow-[0_10px_35px_-10px_rgba(99,102,241,.7)] transition-transform hover:scale-[1.03] disabled:opacity-60"
                >
                  {status === "sending" ? "Sending…" : form.type === "DEMO_REQUEST" ? "Book My Free Demo" : "Send Inquiry"}
                </button>
                <p className="text-center text-xs text-[var(--sm-muted)]">No spam. No pressure. Just a walkthrough with your school's numbers.</p>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ── Compact inline card — drop into any feature/service page ──
// Smaller footprint, fewer fields, same backend — for pages that want
// a "fill it right here" option instead of just a CTA button.
export function InquiryCompact({
  title = "Want to see this for your school?",
  sub = "Leave your number — we'll call you back with a quick walkthrough.",
  source = "inline-compact",
}: {
  title?: string;
  sub?: string;
  source?: string;
}) {
  const { form, status, errorMsg, set, submit } = useInquiryForm(source);

  if (status === "done") {
    return (
      <div className="sm-glass mx-auto max-w-md rounded-2xl p-6 text-center">
        <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full bg-emerald-500/15 text-2xl">🎉</div>
        <h3 className="sm-display mb-1 text-lg font-bold">Got it!</h3>
        <p className="text-sm text-[var(--sm-muted)]">We'll call you back within 24 hours.</p>
      </div>
    );
  }

  return (
    <div className="sm-glass mx-auto max-w-md rounded-2xl p-5 sm:p-6">
      <h3 className="sm-display mb-1 text-base font-bold text-[var(--sm-text)]">{title}</h3>
      <p className="mb-4 text-xs leading-relaxed text-[var(--sm-muted)] sm:text-sm">{sub}</p>
      <div className="grid gap-3">
        <input className={inputCls} placeholder="School name *" value={form.schoolName} onChange={set("schoolName")} />
        <div className="grid grid-cols-2 gap-3">
          <input className={inputCls} placeholder="Your name *" value={form.contactName} onChange={set("contactName")} />
          <input className={inputCls} type="tel" placeholder="Phone *" value={form.phone} onChange={set("phone")} />
        </div>
        <input className={inputCls} type="email" placeholder="Email *" value={form.email} onChange={set("email")} />

        {status === "error" && <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-xs text-red-600">{errorMsg}</div>}

        <button
          onClick={submit}
          disabled={status === "sending"}
          className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_28px_-10px_rgba(99,102,241,.7)] transition-transform hover:scale-[1.02] disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Request a Callback"}
        </button>
      </div>
    </div>
  );
}