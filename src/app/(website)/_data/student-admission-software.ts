import type { ServiceLandingData } from "../_components/service-landing-template";

// ─────────────────────────────────────────────────────────────
// Image convention for this module — drop files into:
//   public/features/admissions/hero.jpg   (module hero, ~1600x800)
//   public/features/admissions/digital-admission-forms.jpg (~800x600)
//   public/features/admissions/enquiry-and-follow-up-tracking.jpg (~800x600)
//   public/features/admissions/roll-number-management.jpg (~800x600)
//   public/features/admissions/document-uploads.jpg     (~800x600)
//   public/features/admissions/parent-and-sibling-linking.jpg (~800x600)
// Until a file exists at a path, that spot shows a soft placeholder
// tile automatically — nothing breaks, nothing needs code changes.
// ─────────────────────────────────────────────────────────────

export const studentAdmissionSoftwareData: ServiceLandingData = {
  "slug": "student-admission-software",
  "eyebrow": "Admissions",
  "h1": "Admission Data That Doesn't Need Re-Typing Three Times",
  "subhead": "Paper admission forms mean the same student's details get typed into separate registers for academics, fees, and records. ShikshaMatrix captures it once and connects it to everything else automatically.",
  "problems": [
    {
      "title": "Paper forms, manual re-entry",
      "desc": "Every admitted student's details get typed by hand into multiple separate systems."
    },
    {
      "title": "Enquiries fall through the cracks",
      "desc": "Walk-in and phone enquiries are tracked inconsistently, with no reliable follow-up process."
    },
    {
      "title": "Roll number and class conflicts",
      "desc": "Manually assigning roll numbers leads to accidental duplicates that surface only when it's too late."
    },
    {
      "title": "No visibility into the admission pipeline",
      "desc": "It's hard to know how many enquiries convert to admissions, or where prospective families drop off."
    }
  ],
  "features": [
    {
      "title": "Digital Admission Forms",
      "desc": "Student, parent, academic, health, and document details captured once, feeding directly into the student's full record.",
      "slug": "digital-admission-forms",
      "image": "/features/admissions/digital-admission-forms.jpg",
      "bullets": [
        "Student, parent, academic, health, and document details captured once, feeding directly into the student's full record.",
        "Admission data is captured once and connects directly to fees, academics, and communication",
        "Included as part of ShikshaMatrix's connected platform — not a bolt-on tool."
      ]
    },
    {
      "title": "Enquiry & Follow-Up Tracking",
      "desc": "Every enquiry — walk-in, phone, or from the school's public website — is tracked through to admission or drop-off.",
      "slug": "enquiry-and-follow-up-tracking",
      "image": "/features/admissions/enquiry-and-follow-up-tracking.jpg",
      "bullets": [
        "Every enquiry — walk-in, phone, or from the school's public website — is tracked through to admission or drop-off.",
        "Enquiries from the school's public website flow straight into the same admission pipeline front-office staff already use",
        "Included as part of ShikshaMatrix's connected platform — not a bolt-on tool."
      ]
    },
    {
      "title": "Roll Number Management",
      "desc": "See which roll numbers are already taken in a class before assigning a new one, avoiding conflicts entirely.",
      "slug": "roll-number-management",
      "image": "/features/admissions/roll-number-management.jpg",
      "bullets": [
        "See which roll numbers are already taken in a class before assigning a new one, avoiding conflicts entirely.",
        "Roll number conflicts are caught before they happen, not after",
        "Included as part of ShikshaMatrix's connected platform — not a bolt-on tool."
      ]
    },
    {
      "title": "Document Uploads",
      "desc": "Birth certificates, transfer certificates, and photos attached directly to the student's record.",
      "slug": "document-uploads",
      "image": "/features/admissions/document-uploads.jpg",
      "bullets": [
        "Birth certificates, transfer certificates, and photos attached directly to the student's record.",
        "New students and their parents get app access as part of the admission process itself",
        "Included as part of ShikshaMatrix's connected platform — not a bolt-on tool."
      ]
    },
    {
      "title": "Parent & Sibling Linking",
      "desc": "Automatically link siblings to the same parent account during admission.",
      "slug": "parent-and-sibling-linking",
      "image": "/features/admissions/parent-and-sibling-linking.jpg",
      "bullets": [
        "Automatically link siblings to the same parent account during admission.",
        "Admission data is captured once and connects directly to fees, academics, and communication",
        "Included as part of ShikshaMatrix's connected platform — not a bolt-on tool."
      ]
    }
  ],
  "benefits": [
    "Admission data is captured once and connects directly to fees, academics, and communication",
    "Enquiries from the school's public website flow straight into the same admission pipeline front-office staff already use",
    "Roll number conflicts are caught before they happen, not after",
    "New students and their parents get app access as part of the admission process itself"
  ],
  "faqs": [
    {
      "q": "Do enquiries from our public website show up automatically?",
      "a": "Yes — enquiries submitted through a school's ShikshaMatrix public website feed directly into the same Front Office enquiry pipeline used for walk-in and phone enquiries."
    },
    {
      "q": "Can we see which roll numbers are already taken before assigning one?",
      "a": "Yes — the admission form shows existing roll numbers for the selected class, so conflicts are avoided upfront."
    },
    {
      "q": "Does admission data need to be re-entered elsewhere?",
      "a": "No — once a student is admitted, their details are available across fees, academics, attendance, and communication without re-entry."
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
    }
  ],
  "heroImage": "/features/admissions/hero.jpg"
};
