import type { ServiceLandingData } from "../_components/service-landing-template";

// ─────────────────────────────────────────────────────────────
// Image convention for this module — drop files into:
//   public/features/transport/hero.jpg   (module hero, ~1600x800)
//   public/features/transport/route-management.jpg      (~800x600)
//   public/features/transport/vehicle-and-driver-records.jpg (~800x600)
//   public/features/transport/student-transport-assignment.jpg (~800x600)
//   public/features/transport/fee-integration.jpg       (~800x600)
// Until a file exists at a path, that spot shows a soft placeholder
// tile automatically — nothing breaks, nothing needs code changes.
// ─────────────────────────────────────────────────────────────

export const schoolTransportManagementSoftwareData: ServiceLandingData = {
  "slug": "school-transport-management-software",
  "eyebrow": "Transport",
  "h1": "School Transport, Tracked Like Everything Else",
  "subhead": "Bus routes, vehicle assignments, and which students ride which bus are often tracked separately from the rest of a school's records. ShikshaMatrix keeps transport connected to the same student data as everything else.",
  "problems": [
    {
      "title": "Routes tracked on paper or in isolated spreadsheets",
      "desc": "Route assignments live separately from the student records they actually relate to."
    },
    {
      "title": "No easy way to know who's on which bus",
      "desc": "Front-office staff and parents alike often can't quickly confirm a student's transport assignment."
    },
    {
      "title": "Vehicle and driver details scattered",
      "desc": "Vehicle documents, driver details, and maintenance records end up in separate files."
    }
  ],
  "features": [
    {
      "title": "Route Management",
      "desc": "Set up bus routes and stops for the school.",
      "slug": "route-management",
      "image": "/features/transport/route-management.jpg",
      "bullets": [
        "Set up bus routes and stops for the school.",
        "Transport assignments live in the same system as the rest of a student's record, not a separate spreadsheet",
        "Included as part of ShikshaMatrix's connected platform — not a bolt-on tool."
      ]
    },
    {
      "title": "Vehicle & Driver Records",
      "desc": "Track vehicle details and driver assignments in the system.",
      "slug": "vehicle-and-driver-records",
      "image": "/features/transport/vehicle-and-driver-records.jpg",
      "bullets": [
        "Track vehicle details and driver assignments in the system.",
        "Front-office staff can look up a student's route without cross-referencing multiple files",
        "Included as part of ShikshaMatrix's connected platform — not a bolt-on tool."
      ]
    },
    {
      "title": "Student Transport Assignment",
      "desc": "Assign students to routes, connected directly to their student record.",
      "slug": "student-transport-assignment",
      "image": "/features/transport/student-transport-assignment.jpg",
      "bullets": [
        "Assign students to routes, connected directly to their student record.",
        "Transport fees connect directly to the same fee collection and receipt system as everything else",
        "Included as part of ShikshaMatrix's connected platform — not a bolt-on tool."
      ]
    },
    {
      "title": "Fee Integration",
      "desc": "Transport charges can be included as part of a student's fee structure.",
      "slug": "fee-integration",
      "image": "/features/transport/fee-integration.jpg",
      "bullets": [
        "Transport charges can be included as part of a student's fee structure.",
        "Transport assignments live in the same system as the rest of a student's record, not a separate spreadsheet",
        "Included as part of ShikshaMatrix's connected platform — not a bolt-on tool."
      ]
    }
  ],
  "benefits": [
    "Transport assignments live in the same system as the rest of a student's record, not a separate spreadsheet",
    "Front-office staff can look up a student's route without cross-referencing multiple files",
    "Transport fees connect directly to the same fee collection and receipt system as everything else"
  ],
  "faqs": [
    {
      "q": "Can transport fees be part of a student's regular fee plan?",
      "a": "Yes — transport charges can be included in a student's overall fee structure, tracked through the same fee collection system."
    },
    {
      "q": "Is transport management included in every plan?",
      "a": "Transport management is part of ShikshaMatrix's broader module set — see the Pricing page for which tier includes which modules."
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
  "heroImage": "/features/transport/hero.png"
};
