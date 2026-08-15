// ─────────────────────────────────────────────────────────────
// apps/web/src/app/(website)/download/page.tsx
// Mobile app download page — for Teacher/Staff, Parent & Student
// roles, who use the mobile app rather than a web login.
// ─────────────────────────────────────────────────────────────
"use client";

import { WebsiteNavbar, WebsiteFooter, Reveal, SectionHeading } from "../_components/website-ui";

// Hosted via GitHub Releases (not in this repo — GitHub blocks files
// over 100MB in git). "latest" in the URL means this link always
// points to whichever release is newest — just keep naming the
// uploaded asset "shikshamatrix.apk" in every future release and
// this URL never needs to change.
const APK_URL = "https://github.com/raghuveer911/shikshamatrix-website/releases/latest/download/shikshamatrix.apk";
const APK_VERSION = "1.0.7";
const APK_SIZE = "~129.23 MB";

const AUDIENCES = [
  { icon: "🧑‍🏫", label: "Teachers & Staff", desc: "Attendance, fees, HR, library, inventory & more" },
  { icon: "👨‍👩‍👧", label: "Parents", desc: "Track your child's attendance, fees, results & notices" },
  { icon: "🎓", label: "Students", desc: "Timetable, homework, results & AI study assistant" },
];

const STEPS = [
  { n: "1", title: "Tap Install", desc: "Download the app file to your phone using the button above." },
  { n: "2", title: "Allow unknown sources", desc: "Android may ask permission to install apps from this source — tap Settings, then allow it." },
  { n: "3", title: "Open & install", desc: "Open the downloaded file and tap Install. It only takes a few seconds." },
  { n: "4", title: "Log in", desc: "Open ShikshaMatrix and log in with the credentials your school gave you." },
];

export default function DownloadPage() {
  return (
    <main className="overflow-x-hidden">
      <WebsiteNavbar />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="sm-mesh relative px-6 pb-20 pt-36 sm:pt-44">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <div className="mb-6 inline-block rounded-full border border-[var(--sm-border)] bg-[var(--sm-primary-soft)] px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600">
              Mobile App
            </div>
            <h1 className="sm-display text-4xl font-bold leading-tight text-[var(--sm-text)] sm:text-5xl lg:text-6xl">
              Get ShikshaMatrix <span className="text-indigo-600">on your phone</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[var(--sm-muted)] sm:text-lg">
              For teachers, staff, parents and students. Everything your school needs, in your pocket.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mx-auto mt-10 max-w-sm">
              <a
                href={APK_URL}
                download
                className="sm-liquid-btn relative isolate flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl px-8 py-4 text-base font-bold text-white transition-transform hover:scale-[1.02]"
              >
                <span className="sm-liquid-sheen" />
                <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 3v13m0 0l-4-4m4 4l4-4M5 21h14" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Install ShikshaMatrix
              </a>
              <p className="mt-3 text-xs text-[var(--sm-muted)]">
                Version {APK_VERSION} · {APK_SIZE} · Android 8.0 and above
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── WHO IT'S FOR ─────────────────────────────────── */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <SectionHeading eyebrow="Built for everyone" title="One app, three experiences" />
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {AUDIENCES.map((a, i) => (
              <Reveal key={a.label} delay={i * 0.1}>
                <div className="sm-glass sm-glass-hover h-full rounded-2xl p-6 text-center">
                  <div className="mb-3 text-3xl">{a.icon}</div>
                  <h3 className="sm-display text-lg font-bold text-[var(--sm-text)]">{a.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--sm-muted)]">{a.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── INSTALL STEPS ────────────────────────────────── */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <SectionHeading eyebrow="Quick setup" title="How to install" sub="Takes less than a minute — no app store needed." />
          </Reveal>
          <div className="mt-10 space-y-4">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <div className="sm-glass flex items-start gap-4 rounded-2xl p-5">
                  <div className="sm-clay flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-sm font-bold text-indigo-600">
                    {s.n}
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--sm-text)]">{s.title}</h4>
                    <p className="mt-1 text-sm text-[var(--sm-muted)]">{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCHOOL NOT ONBOARDED YET ─────────────────────── */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <div className="sm-glass rounded-2xl p-8 text-center">
              <p className="text-sm text-[var(--sm-muted)]">
                Don't have login credentials yet? Your school admin needs to register on ShikshaMatrix
                and add your account first — ask them, or if you're the school administrator,{" "}
                <a href="/register-school" className="font-semibold text-indigo-600 hover:text-indigo-700">
                  register your school here →
                </a>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <WebsiteFooter />
    </main>
  );
}
