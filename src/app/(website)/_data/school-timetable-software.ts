import type { ServiceLandingData } from "../_components/service-landing-template";

// ─────────────────────────────────────────────────────────────
// Image convention for this module — drop files into:
//   public/features/timetable/hero.jpg   (module hero, ~1600x800)
//   public/features/timetable/digital-timetable-builder.jpg (~800x600)
//   public/features/timetable/instant-updates.jpg       (~800x600)
//   public/features/timetable/period-level-detail.jpg   (~800x600)
// Until a file exists at a path, that spot shows a soft placeholder
// tile automatically — nothing breaks, nothing needs code changes.
// ─────────────────────────────────────────────────────────────

export const schoolTimetableSoftwareData: ServiceLandingData = {
  "slug": "school-timetable-software",
  "eyebrow": "Timetable",
  "h1": "Timetable Changes That Don't Need Reprinting",
  "subhead": "A printed timetable pinned to a noticeboard is out of date the moment something changes. ShikshaMatrix keeps timetables digital, so updates reach every teacher and student's app instantly.",
  "problems": [
    {
      "title": "Printed timetables go stale",
      "desc": "Any change to the schedule means reprinting and re-pinning notices around the school."
    },
    {
      "title": "Substitutions are hard to communicate",
      "desc": "A last-minute teacher substitution often relies on word of mouth reaching the right classroom."
    },
    {
      "title": "No single source of truth",
      "desc": "Different copies of the same timetable can drift out of sync across the school."
    }
  ],
  "features": [
    {
      "title": "Digital Timetable Builder",
      "desc": "Build class and section timetables, assigning teachers and subjects to each period.",
      "slug": "digital-timetable-builder",
      "image": "/features/timetable/digital-timetable-builder.jpg",
      "bullets": [
        "Build class and section timetables, assigning teachers and subjects to each period.",
        "One digital timetable that stays in sync everywhere it's viewed",
        "Included as part of ShikshaMatrix's connected platform — not a bolt-on tool."
      ]
    },
    {
      "title": "Instant Updates",
      "desc": "Any change is reflected immediately in the Staff and Student Apps — no reprinting.",
      "slug": "instant-updates",
      "image": "/features/timetable/instant-updates.jpg",
      "bullets": [
        "Any change is reflected immediately in the Staff and Student Apps — no reprinting.",
        "Changes reach teachers and students instantly, not through word of mouth",
        "Included as part of ShikshaMatrix's connected platform — not a bolt-on tool."
      ]
    },
    {
      "title": "Period-Level Detail",
      "desc": "See exactly which subject and teacher is assigned to any period, for any class.",
      "slug": "period-level-detail",
      "image": "/features/timetable/period-level-detail.jpg",
      "bullets": [
        "See exactly which subject and teacher is assigned to any period, for any class.",
        "Connects to the same class and staff structure as the rest of the platform",
        "Included as part of ShikshaMatrix's connected platform — not a bolt-on tool."
      ]
    }
  ],
  "benefits": [
    "One digital timetable that stays in sync everywhere it's viewed",
    "Changes reach teachers and students instantly, not through word of mouth",
    "Connects to the same class and staff structure as the rest of the platform"
  ],
  "faqs": [
    {
      "q": "Do students see the timetable in their app?",
      "a": "Yes — the timetable is visible directly in the Student App, always reflecting the latest version."
    }
  ],
  "relatedPages": [
    {
      "label": "School ERP Software",
      "href": "/school-erp-software"
    },
    {
      "label": "Mobile App",
      "href": "/school-mobile-app"
    },
    {
      "label": "Pricing",
      "href": "/pricing"
    }
  ],
  "heroImage": "/features/timetable/hero.jpg"
};
