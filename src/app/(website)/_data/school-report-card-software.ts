import type { ServiceLandingData } from "../_components/service-landing-template";

// ─────────────────────────────────────────────────────────────
// Image convention for this module — drop files into:
//   public/features/report-cards/hero.jpg   (module hero, ~1600x800)
//   public/features/report-cards/auto-generated-report-cards.jpg (~800x600)
//   public/features/report-cards/consistent-templates.jpg (~800x600)
//   public/features/report-cards/parent-app-delivery.jpg (~800x600)
// Until a file exists at a path, that spot shows a soft placeholder
// tile automatically — nothing breaks, nothing needs code changes.
// ─────────────────────────────────────────────────────────────

export const schoolReportCardSoftwareData: ServiceLandingData = {
  "slug": "school-report-card-software",
  "eyebrow": "Report Cards",
  "h1": "Report Cards That Generate Themselves From Real Data",
  "subhead": "Compiling report cards by hand means re-typing marks from exam registers into a template, class by class. ShikshaMatrix generates report cards directly from the exam and attendance data already in the system.",
  "problems": [
    {
      "title": "Marks re-typed into templates",
      "desc": "Exam results recorded in one place often get manually re-entered into a separate report card template."
    },
    {
      "title": "Inconsistent formatting across teachers",
      "desc": "Different teachers filling report cards by hand leads to inconsistent formatting and occasional errors."
    },
    {
      "title": "Slow turnaround for parents",
      "desc": "Manual compilation delays how quickly report cards reach parents after exams."
    }
  ],
  "features": [
    {
      "title": "Auto-Generated Report Cards",
      "desc": "Report cards pull directly from recorded exam results and attendance — no manual re-entry.",
      "slug": "auto-generated-report-cards",
      "image": "/features/report-cards/auto-generated-report-cards.jpg",
      "bullets": [
        "Report cards pull directly from recorded exam results and attendance — no manual re-entry.",
        "No manual re-typing of marks from exam registers into report cards",
        "Included as part of ShikshaMatrix's connected platform — not a bolt-on tool."
      ]
    },
    {
      "title": "Consistent Templates",
      "desc": "Every report card follows the same school-wide format.",
      "slug": "consistent-templates",
      "image": "/features/report-cards/consistent-templates.jpg",
      "bullets": [
        "Every report card follows the same school-wide format.",
        "Consistent formatting across every class and section",
        "Included as part of ShikshaMatrix's connected platform — not a bolt-on tool."
      ]
    },
    {
      "title": "Parent App Delivery",
      "desc": "Report cards are available directly in the Parent App as soon as they're finalized.",
      "slug": "parent-app-delivery",
      "image": "/features/report-cards/parent-app-delivery.jpg",
      "bullets": [
        "Report cards are available directly in the Parent App as soon as they're finalized.",
        "Parents get report cards the moment they're ready, without waiting for a physical copy",
        "Included as part of ShikshaMatrix's connected platform — not a bolt-on tool."
      ]
    }
  ],
  "benefits": [
    "No manual re-typing of marks from exam registers into report cards",
    "Consistent formatting across every class and section",
    "Parents get report cards the moment they're ready, without waiting for a physical copy"
  ],
  "faqs": [
    {
      "q": "Do we need to re-enter marks to generate report cards?",
      "a": "No — report cards are generated directly from exam results and attendance data already recorded in the system."
    },
    {
      "q": "How do parents receive the report card?",
      "a": "Report cards are made available directly in the Parent App as soon as they're finalized by the school."
    }
  ],
  "relatedPages": [
    {
      "label": "Online Examination Software",
      "href": "/online-examination-software"
    },
    {
      "label": "School ERP Software",
      "href": "/school-erp-software"
    },
    {
      "label": "Pricing",
      "href": "/pricing"
    }
  ],
  "heroImage": "/features/report-cards/hero.jpg"
};
