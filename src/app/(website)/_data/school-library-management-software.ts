import type { ServiceLandingData } from "../_components/service-landing-template";

// ─────────────────────────────────────────────────────────────
// Image convention for this module — drop files into:
//   public/features/library/hero.jpg   (module hero, ~1600x800)
//   public/features/library/book-issue-and-return.jpg   (~800x600)
//   public/features/library/digital-library.jpg         (~800x600)
//   public/features/library/reservations.jpg            (~800x600)
//   public/features/library/inventory-and-analytics.jpg (~800x600)
// Until a file exists at a path, that spot shows a soft placeholder
// tile automatically — nothing breaks, nothing needs code changes.
// ─────────────────────────────────────────────────────────────

export const schoolLibraryManagementSoftwareData: ServiceLandingData = {
  "slug": "school-library-management-software",
  "eyebrow": "Library",
  "h1": "A Library Catalog That Knows Who Has What",
  "subhead": "Book issue registers are easy to lose track of — who has which book, and for how long. ShikshaMatrix's library module connects book tracking directly to student records.",
  "problems": [
    {
      "title": "Manual issue/return registers",
      "desc": "Tracking who currently has a book depends on a physical register being kept up to date."
    },
    {
      "title": "No visibility into overdue books",
      "desc": "Without automated tracking, overdue books are easy to lose track of entirely."
    },
    {
      "title": "Digital resources managed separately",
      "desc": "E-books and digital references often live outside the physical library's tracking system."
    }
  ],
  "features": [
    {
      "title": "Book Issue & Return",
      "desc": "Track which student currently has which book, available on every plan.",
      "slug": "book-issue-and-return",
      "image": "/features/library/book-issue-and-return.jpg",
      "bullets": [
        "Track which student currently has which book, available on every plan.",
        "Book tracking connects to the same student records as the rest of the platform",
        "Included as part of ShikshaMatrix's connected platform — not a bolt-on tool."
      ]
    },
    {
      "title": "Digital Library",
      "desc": "Manage e-books and digital reference materials alongside the physical catalog (Essential and above).",
      "slug": "digital-library",
      "image": "/features/library/digital-library.jpg",
      "bullets": [
        "Manage e-books and digital reference materials alongside the physical catalog (Essential and above).",
        "Feature depth scales with your plan — from simple issue/return up to full inventory analytics",
        "Included as part of ShikshaMatrix's connected platform — not a bolt-on tool."
      ]
    },
    {
      "title": "Reservations",
      "desc": "Students can reserve a book that's currently checked out.",
      "slug": "reservations",
      "image": "/features/library/reservations.jpg",
      "bullets": [
        "Students can reserve a book that's currently checked out.",
        "No separate system needed for digital resources",
        "Included as part of ShikshaMatrix's connected platform — not a bolt-on tool."
      ]
    },
    {
      "title": "Inventory & Analytics",
      "desc": "Track the full library inventory and usage patterns (Professional).",
      "slug": "inventory-and-analytics",
      "image": "/features/library/inventory-and-analytics.jpg",
      "bullets": [
        "Track the full library inventory and usage patterns (Professional).",
        "Book tracking connects to the same student records as the rest of the platform",
        "Included as part of ShikshaMatrix's connected platform — not a bolt-on tool."
      ]
    }
  ],
  "benefits": [
    "Book tracking connects to the same student records as the rest of the platform",
    "Feature depth scales with your plan — from simple issue/return up to full inventory analytics",
    "No separate system needed for digital resources"
  ],
  "faqs": [
    {
      "q": "Is library management included in the entry-level plan?",
      "a": "Basic Book Issue/Return is available from the entry-level Economy plan. Digital Library and Reservations are available from Essential onward, with full Inventory Tracking and Analytics on Professional."
    },
    {
      "q": "Can we manage e-books alongside physical books?",
      "a": "Yes — the Digital Library feature lets you manage e-books and digital references alongside the physical catalog."
    }
  ],
  "relatedPages": [
    {
      "label": "School ERP Software",
      "href": "/school-erp-software"
    },
    {
      "label": "Pricing",
      "href": "/pricing"
    }
  ],
  "heroImage": "/features/library/hero.jpg"
};
