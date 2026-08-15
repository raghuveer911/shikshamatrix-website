import type { ServiceLandingData } from "../_components/service-landing-template";

// ─────────────────────────────────────────────────────────────
// Image convention for this module — drop files into:
//   public/features/attendance/hero.jpg   (module hero, ~1600x800)
//   public/features/attendance/digital-attendance-marking.jpg (~800x600)
//   public/features/attendance/instant-parent-notification.jpg (~800x600)
//   public/features/attendance/real-time-reports.jpg    (~800x600)
//   public/features/attendance/staff-attendance-too.jpg (~800x600)
//   public/features/attendance/class-and-school-wide-views.jpg (~800x600)
// Until a file exists at a path, that spot shows a soft placeholder
// tile automatically — nothing breaks, nothing needs code changes.
// ─────────────────────────────────────────────────────────────

export const schoolAttendanceSoftwareData: ServiceLandingData = {
  "slug": "school-attendance-software",
  "eyebrow": "Attendance Software",
  "h1": "Attendance That Takes Seconds, Not Minutes",
  "subhead": "Paper attendance registers mean manual compilation, delayed reports, and no way for parents to know their child is absent until it's too late. ShikshaMatrix makes attendance instant and visible to everyone who needs it.",
  "problems": [
    {
      "title": "Paper registers are slow",
      "desc": "Marking attendance by hand, class by class, takes time out of every teaching period."
    },
    {
      "title": "Parents find out too late",
      "desc": "An absent student's parent often only finds out at the end of the day, if at all."
    },
    {
      "title": "Reports are always delayed",
      "desc": "Monthly attendance summaries are compiled manually, often days after the fact."
    },
    {
      "title": "No pattern visibility",
      "desc": "Chronic absenteeism is hard to spot when records live in separate paper registers."
    }
  ],
  "features": [
    {
      "title": "Digital Attendance Marking",
      "desc": "Teachers mark attendance in seconds from the Staff App, for the whole class at once.",
      "slug": "digital-attendance-marking",
      "image": "/features/attendance/digital-attendance-marking.jpg",
      "bullets": [
        "Teachers mark attendance in seconds from the Staff App, for the whole class at once.",
        "Cuts the time teachers spend on attendance every single period",
        "Included as part of ShikshaMatrix's connected platform — not a bolt-on tool."
      ]
    },
    {
      "title": "Instant Parent Notification",
      "desc": "Parents are notified automatically the moment their child is marked absent.",
      "slug": "instant-parent-notification",
      "image": "/features/attendance/instant-parent-notification.jpg",
      "bullets": [
        "Parents are notified automatically the moment their child is marked absent.",
        "Parents know about an absence the same day, not weeks later",
        "Included as part of ShikshaMatrix's connected platform — not a bolt-on tool."
      ]
    },
    {
      "title": "Real-Time Reports",
      "desc": "Attendance percentages and trends are available instantly, not at month-end.",
      "slug": "real-time-reports",
      "image": "/features/attendance/real-time-reports.jpg",
      "bullets": [
        "Attendance percentages and trends are available instantly, not at month-end.",
        "Attendance patterns are visible immediately, making early intervention possible",
        "Included as part of ShikshaMatrix's connected platform — not a bolt-on tool."
      ]
    },
    {
      "title": "Staff Attendance Too",
      "desc": "The same system tracks staff attendance and leave, not just students.",
      "slug": "staff-attendance-too",
      "image": "/features/attendance/staff-attendance-too.jpg",
      "bullets": [
        "The same system tracks staff attendance and leave, not just students.",
        "One system handles both student and staff attendance",
        "Included as part of ShikshaMatrix's connected platform — not a bolt-on tool."
      ]
    },
    {
      "title": "Class & School-Wide Views",
      "desc": "See attendance at the student, class, or whole-school level in one dashboard.",
      "slug": "class-and-school-wide-views",
      "image": "/features/attendance/class-and-school-wide-views.jpg",
      "bullets": [
        "See attendance at the student, class, or whole-school level in one dashboard.",
        "Cuts the time teachers spend on attendance every single period",
        "Included as part of ShikshaMatrix's connected platform — not a bolt-on tool."
      ]
    }
  ],
  "benefits": [
    "Cuts the time teachers spend on attendance every single period",
    "Parents know about an absence the same day, not weeks later",
    "Attendance patterns are visible immediately, making early intervention possible",
    "One system handles both student and staff attendance"
  ],
  "faqs": [
    {
      "q": "How is attendance marked in ShikshaMatrix?",
      "a": "Teachers mark attendance digitally from the Staff App, for an entire class in seconds — no paper register needed."
    },
    {
      "q": "Do parents get notified if their child is absent?",
      "a": "Yes — parents are notified automatically through the Parent App as soon as an absence is marked."
    },
    {
      "q": "Can we see attendance trends over time?",
      "a": "Yes — attendance percentages and trends are available in real time at the student, class, and school level."
    },
    {
      "q": "Does ShikshaMatrix also track staff attendance?",
      "a": "Yes — the same platform handles staff attendance and leave management alongside student attendance."
    }
  ],
  "relatedPages": [
    {
      "label": "School ERP Software",
      "href": "/school-erp-software"
    },
    {
      "label": "Fee Management Software",
      "href": "/school-fee-management-software"
    },
    {
      "label": "Pricing",
      "href": "/pricing"
    },
    {
      "label": "FAQ",
      "href": "/faq"
    }
  ],
  "heroImage": "/features/attendance/hero.jpg"
};
