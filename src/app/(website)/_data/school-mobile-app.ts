import type { ServiceLandingData } from "../_components/service-landing-template";

// ─────────────────────────────────────────────────────────────
// Image convention for this module — drop files into:
//   public/features/mobile-app/hero.jpg   (module hero, ~1600x800)
//   public/features/mobile-app/staff-app.jpg            (~800x600)
//   public/features/mobile-app/student-app.jpg          (~800x600)
//   public/features/mobile-app/parent-app.jpg           (~800x600)
//   public/features/mobile-app/real-time-sync.jpg       (~800x600)
//   public/features/mobile-app/secure-isolated-access.jpg (~800x600)
// Until a file exists at a path, that spot shows a soft placeholder
// tile automatically — nothing breaks, nothing needs code changes.
// ─────────────────────────────────────────────────────────────

export const schoolMobileAppData: ServiceLandingData = {
  "slug": "school-mobile-app",
  "eyebrow": "Mobile App",
  "h1": "Three Apps, Built for Three Very Different Users",
  "subhead": "Most school apps try to serve staff, students, and parents from one generic interface. ShikshaMatrix gives each group its own purpose-built app instead — because a teacher marking attendance and a parent checking fee dues need completely different things.",
  "problems": [
    {
      "title": "One-size-fits-all apps feel clunky",
      "desc": "A single app trying to serve teachers, students, and parents ends up compromising on all three."
    },
    {
      "title": "Parents miss updates",
      "desc": "Without a dedicated channel, notices and homework get lost in WhatsApp groups run informally by individual teachers."
    },
    {
      "title": "Staff need quick, in-the-moment tools",
      "desc": "Marking attendance or updating a lesson plan needs to take seconds, not require navigating a heavy admin interface."
    },
    {
      "title": "Students need their own view",
      "desc": "Homework, notes, and exam schedules are things a student should see directly, not always secondhand through a parent."
    }
  ],
  "features": [
    {
      "title": "Staff App",
      "desc": "Attendance marking, lesson plans, syllabus tracking, messaging — the daily tools a teacher actually needs, in one focused app.",
      "slug": "staff-app",
      "image": "/features/mobile-app/staff-app.jpg",
      "bullets": [
        "Attendance marking, lesson plans, syllabus tracking, messaging — the daily tools a teacher actually needs, in one focused app.",
        "No compromise between what a teacher needs and what a parent needs — each gets their own app",
        "Included as part of ShikshaMatrix's connected platform — not a bolt-on tool."
      ]
    },
    {
      "title": "Student App",
      "desc": "Homework, study materials, notices, exam schedules, and class communication, built for the student's own use.",
      "slug": "student-app",
      "image": "/features/mobile-app/student-app.jpg",
      "bullets": [
        "Homework, study materials, notices, exam schedules, and class communication, built for the student's own use.",
        "Parents and students always have an official channel for school communication",
        "Included as part of ShikshaMatrix's connected platform — not a bolt-on tool."
      ]
    },
    {
      "title": "Parent App",
      "desc": "Attendance, fee dues with online payment, notices, and direct communication with the school — one place for everything.",
      "slug": "parent-app",
      "image": "/features/mobile-app/parent-app.jpg",
      "bullets": [
        "Attendance, fee dues with online payment, notices, and direct communication with the school — one place for everything.",
        "Every plan — even the entry-level one — includes full access to all three apps",
        "Included as part of ShikshaMatrix's connected platform — not a bolt-on tool."
      ]
    },
    {
      "title": "Real-Time Sync",
      "desc": "An attendance mark, a fee payment, or a notice appears across the right app instantly — no manual syncing.",
      "slug": "real-time-sync",
      "image": "/features/mobile-app/real-time-sync.jpg",
      "bullets": [
        "An attendance mark, a fee payment, or a notice appears across the right app instantly — no manual syncing.",
        "Available on both Android and iOS",
        "Included as part of ShikshaMatrix's connected platform — not a bolt-on tool."
      ]
    },
    {
      "title": "Secure, Isolated Access",
      "desc": "Each user only sees what's relevant to them and their school — nothing from other schools on the platform.",
      "slug": "secure-isolated-access",
      "image": "/features/mobile-app/secure-isolated-access.jpg",
      "bullets": [
        "Each user only sees what's relevant to them and their school — nothing from other schools on the platform.",
        "No compromise between what a teacher needs and what a parent needs — each gets their own app",
        "Included as part of ShikshaMatrix's connected platform — not a bolt-on tool."
      ]
    }
  ],
  "benefits": [
    "No compromise between what a teacher needs and what a parent needs — each gets their own app",
    "Parents and students always have an official channel for school communication",
    "Every plan — even the entry-level one — includes full access to all three apps",
    "Available on both Android and iOS"
  ],
  "faqs": [
    {
      "q": "Do parents and students use the same app?",
      "a": "No — parents and students each have their own dedicated app, built around what they specifically need to see and do."
    },
    {
      "q": "Is the mobile app included in every plan?",
      "a": "Yes — every ShikshaMatrix plan, including the entry-level tier, includes full access to the Staff App, Student App, and Parent App."
    },
    {
      "q": "Which platforms are supported?",
      "a": "The ShikshaMatrix mobile apps are available for both Android and iOS."
    },
    {
      "q": "Can parents pay fees directly from the app?",
      "a": "Yes — the Parent App includes online fee payment alongside attendance, notices, and communication."
    }
  ],
  "relatedPages": [
    {
      "label": "School ERP Software",
      "href": "/school-erp-software"
    },
    {
      "label": "Download the App",
      "href": "/download"
    },
    {
      "label": "Pricing",
      "href": "/pricing"
    }
  ],
  "heroImage": "/features/mobile-app/hero.jpg"
};
