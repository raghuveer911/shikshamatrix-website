// apps/web/src/app/(website)/_components/sections-vision.tsx
"use client";

import { Reveal } from "./website-ui";

export function VisionSection() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-500">Our Vision</p>
          <h2 className="sm-display mt-3 text-2xl font-bold leading-snug text-[var(--sm-text)] sm:text-3xl">
            To build the operating infrastructure connecting institutions, learners and outcomes —
            starting with school administration, and expanding into skill development and
            measurable outcomes.
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-[var(--sm-muted)]">
            Built in Jodhpur, Rajasthan, India — for how Indian schools and institutions actually operate.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
