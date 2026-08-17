// ─────────────────────────────────────────────────────────────
// schools-showcase.tsx — social-proof band: real schools running
// on ShikshaMatrix. Auto-scrolling marquee so it scales cleanly
// whether there are 8 schools or 48 — no giant static grid eating
// vertical space, no "load more" needed.
// ─────────────────────────────────────────────────────────────
"use client";

import { useState } from "react";
import { Reveal, SectionHeading } from "./website-ui";
import { PARTNER_SCHOOLS, type PartnerSchool } from "../_data/partner-schools";

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

function SchoolCard({ school }: { school: PartnerSchool }) {
  const [broken, setBroken] = useState(false);
  const logoSrc = school.logo || `/school-logos/${school.id}.png`;

  return (
    <div className="sm-glass mx-2.5 flex w-[220px] flex-shrink-0 items-center gap-3 rounded-2xl px-4 py-3.5">
      {!broken ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={logoSrc}
          alt={school.name}
          className="h-10 w-10 flex-shrink-0 rounded-xl object-cover"
          onError={() => setBroken(true)}
        />
      ) : (
        <div className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 text-xs font-bold text-white">
          {initials(school.name)}
        </div>
      )}
      <div className="min-w-0">
        <div className="truncate text-sm font-semibold text-[var(--sm-text)]">{school.name}</div>
        <div className="truncate text-xs text-[var(--sm-muted)]">{school.city}</div>
      </div>
    </div>
  );
}

function MarqueeRow({ schools, reverse = false }: { schools: PartnerSchool[]; reverse?: boolean }) {
  // duplicate the list so the CSS loop is seamless
  const looped = [...schools, ...schools];
  return (
    <div className="sm-marquee-mask overflow-hidden py-2">
      <div className={`flex w-max ${reverse ? "sm-marquee-rev" : "sm-marquee"}`}>
        {looped.map((s, i) => (
          <SchoolCard key={`${s.id}-${i}`} school={s} />
        ))}
      </div>
    </div>
  );
}

export function SchoolsShowcaseSection() {
  if (PARTNER_SCHOOLS.length === 0) return null;

  const mid = Math.ceil(PARTNER_SCHOOLS.length / 2);
  const rowA = PARTNER_SCHOOLS.slice(0, mid);
  const rowB = PARTNER_SCHOOLS.slice(mid).length > 0 ? PARTNER_SCHOOLS.slice(mid) : rowA;

  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Real Schools, Real Results"
          title={`30+ Schools Run on ShikshaMatrix`}
          sub="From single campuses to multi-branch groups — here's a few of the schools already saving hours every week."
        />
      </div>
      <Reveal delay={100}>
        <div className="space-y-3">
          <MarqueeRow schools={rowA} />
          <MarqueeRow schools={rowB} reverse />
        </div>
      </Reveal>
      <style>{`
        .sm-marquee-mask {
          -webkit-mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
          mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
        }
        @keyframes sm-marquee-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes sm-marquee-scroll-rev { from { transform: translateX(-50%); } to { transform: translateX(0); } }
        .sm-marquee { animation: sm-marquee-scroll 38s linear infinite; }
        .sm-marquee-rev { animation: sm-marquee-scroll-rev 34s linear infinite; }
        .sm-marquee-mask:hover .sm-marquee,
        .sm-marquee-mask:hover .sm-marquee-rev { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .sm-marquee, .sm-marquee-rev { animation: none; }
        }
      `}</style>
    </section>
  );
}
