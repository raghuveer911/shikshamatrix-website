import type { ServiceLandingData } from "../_components/service-landing-template";

// ─────────────────────────────────────────────────────────────
// Image convention for this module — drop files into:
//   public/features/fees/hero.jpg   (module hero, ~1600x800)
//   public/features/fees/flexible-fee-structures.jpg    (~800x600)
//   public/features/fees/online-offline-collection.jpg  (~800x600)
//   public/features/fees/automatic-due-reminders.jpg    (~800x600)
//   public/features/fees/digital-receipts.jpg           (~800x600)
//   public/features/fees/discounts-and-scholarships.jpg (~800x600)
//   public/features/fees/real-time-dues-dashboard.jpg   (~800x600)
// Until a file exists at a path, that spot shows a soft placeholder
// tile automatically — nothing breaks, nothing needs code changes.
// ─────────────────────────────────────────────────────────────

export const schoolFeeManagementSoftwareData: ServiceLandingData = {
  "slug": "school-fee-management-software",
  "eyebrow": "Fee Management Software",
  "h1": "Stop Chasing Fee Dues Every Month",
  "subhead": "Late fees, follow-up calls, and manually reconciled ledgers eat up staff time every single month. ShikshaMatrix automates the whole fee collection cycle — from due reminders to digital receipts.",
  "problems": [
    {
      "title": "Manual due tracking",
      "desc": "Staff manually check who's paid and who hasn't, class by class, month after month."
    },
    {
      "title": "Late payments hurt cash flow",
      "desc": "Without automatic reminders, dues quietly pile up until someone notices."
    },
    {
      "title": "Follow-up calls take hours",
      "desc": "Front-office staff spend hours every week calling parents about pending fees."
    },
    {
      "title": "Paper receipts get lost",
      "desc": "Manual receipt books are easy to misplace and hard to audit later."
    }
  ],
  "features": [
    {
      "title": "Flexible Fee Structures",
      "desc": "Set up fee heads, installments, and class-wise or student-wise plans.",
      "slug": "flexible-fee-structures",
      "image": "/features/fees/flexible-fee-structures.jpg",
      "bullets": [
        "Set up fee heads, installments, and class-wise or student-wise plans.",
        "Reduces the manual follow-up work that eats into staff time every month",
        "Included as part of ShikshaMatrix's connected platform — not a bolt-on tool."
      ]
    },
    {
      "title": "Online + Offline Collection",
      "desc": "Accept online payments alongside cash/cheque, all tracked in one place.",
      "slug": "online-offline-collection",
      "image": "/features/fees/online-offline-collection.jpg",
      "bullets": [
        "Accept online payments alongside cash/cheque, all tracked in one place.",
        "Parents always know exactly what's due and can pay without visiting the office",
        "Included as part of ShikshaMatrix's connected platform — not a bolt-on tool."
      ]
    },
    {
      "title": "Automatic Due Reminders",
      "desc": "Parents get notified automatically as due dates approach — no manual calls needed.",
      "slug": "automatic-due-reminders",
      "image": "/features/fees/automatic-due-reminders.jpg",
      "bullets": [
        "Parents get notified automatically as due dates approach — no manual calls needed.",
        "Every payment is receipted and traceable — nothing depends on a physical register",
        "Included as part of ShikshaMatrix's connected platform — not a bolt-on tool."
      ]
    },
    {
      "title": "Digital Receipts",
      "desc": "Every payment generates an instant, auditable digital receipt.",
      "slug": "digital-receipts",
      "image": "/features/fees/digital-receipts.jpg",
      "bullets": [
        "Every payment generates an instant, auditable digital receipt.",
        "Works alongside the rest of ShikshaMatrix — fee data connects to the student's full record",
        "Included as part of ShikshaMatrix's connected platform — not a bolt-on tool."
      ]
    },
    {
      "title": "Discounts & Scholarships",
      "desc": "Apply discounts, scholarships, and fines directly against a student's fee plan.",
      "slug": "discounts-and-scholarships",
      "image": "/features/fees/discounts-and-scholarships.jpg",
      "bullets": [
        "Apply discounts, scholarships, and fines directly against a student's fee plan.",
        "Reduces the manual follow-up work that eats into staff time every month",
        "Included as part of ShikshaMatrix's connected platform — not a bolt-on tool."
      ]
    },
    {
      "title": "Real-Time Dues Dashboard",
      "desc": "See exactly who owes what, updated the moment a payment is made.",
      "slug": "real-time-dues-dashboard",
      "image": "/features/fees/real-time-dues-dashboard.jpg",
      "bullets": [
        "See exactly who owes what, updated the moment a payment is made.",
        "Parents always know exactly what's due and can pay without visiting the office",
        "Included as part of ShikshaMatrix's connected platform — not a bolt-on tool."
      ]
    }
  ],
  "benefits": [
    "Reduces the manual follow-up work that eats into staff time every month",
    "Parents always know exactly what's due and can pay without visiting the office",
    "Every payment is receipted and traceable — nothing depends on a physical register",
    "Works alongside the rest of ShikshaMatrix — fee data connects to the student's full record"
  ],
  "faqs": [
    {
      "q": "Can parents pay fees online through ShikshaMatrix?",
      "a": "Yes — online fee payment is built into the platform, alongside support for tracking offline (cash/cheque) payments."
    },
    {
      "q": "Can we set up different fee plans for different classes?",
      "a": "Yes — fee structures can be configured per class, per academic year, with installments, discounts, and scholarships applied where needed."
    },
    {
      "q": "Do parents get reminded automatically about due fees?",
      "a": "Yes — due-date reminders go out automatically, without staff needing to call individually."
    },
    {
      "q": "Is there a record of every payment made?",
      "a": "Every payment generates a digital receipt and is recorded in the student's fee ledger, so nothing depends on a paper register."
    }
  ],
  "relatedPages": [
    {
      "label": "School ERP Software",
      "href": "/school-erp-software"
    },
    {
      "label": "Attendance Software",
      "href": "/school-attendance-software"
    },
    {
      "label": "Pricing",
      "href": "/pricing"
    },
    {
      "label": "Compare to Traditional Management",
      "href": "/compare"
    }
  ],
  "heroImage": "/features/fees/hero.jpg"
};
