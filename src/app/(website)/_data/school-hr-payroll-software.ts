import type { ServiceLandingData } from "../_components/service-landing-template";

// ─────────────────────────────────────────────────────────────
// Image convention for this module — drop files into:
//   public/features/hr/hero.jpg   (module hero, ~1600x800)
//   public/features/hr/staff-directory-and-departments.jpg (~800x600)
//   public/features/hr/attendance-and-shifts.jpg        (~800x600)
//   public/features/hr/leave-management.jpg             (~800x600)
//   public/features/hr/payroll.jpg                      (~800x600)
//   public/features/hr/documents-and-compliance.jpg     (~800x600)
//   public/features/hr/id-cards.jpg                     (~800x600)
// Until a file exists at a path, that spot shows a soft placeholder
// tile automatically — nothing breaks, nothing needs code changes.
// ─────────────────────────────────────────────────────────────

export const schoolHrPayrollSoftwareData: ServiceLandingData = {
  "slug": "school-hr-payroll-software",
  "eyebrow": "HR & Payroll",
  "h1": "Staff Management That Doesn't Depend on One Person's Spreadsheet",
  "subhead": "Staff attendance, leave requests, and payroll calculations often live in one person's spreadsheet — hard to audit, and a risk if that person is unavailable. ShikshaMatrix centralizes it in one system the whole school can rely on.",
  "problems": [
    {
      "title": "Payroll tracked in a personal spreadsheet",
      "desc": "Salary calculations, deductions, and leave adjustments often live in one person's file, hard for anyone else to verify."
    },
    {
      "title": "Leave requests handled informally",
      "desc": "Leave approvals happen over messages or in person, with no consistent record."
    },
    {
      "title": "Staff documents scattered",
      "desc": "Contracts, ID proofs, and certificates end up in physical files or random folders."
    },
    {
      "title": "No visibility for management",
      "desc": "It's hard for school leadership to see staff attendance patterns or department-wide leave trends at a glance."
    }
  ],
  "features": [
    {
      "title": "Staff Directory & Departments",
      "desc": "A structured staff directory with departments, designations, and roles.",
      "slug": "staff-directory-and-departments",
      "image": "/features/hr/staff-directory-and-departments.jpg",
      "bullets": [
        "A structured staff directory with departments, designations, and roles.",
        "Payroll and leave records don't depend on one person's personal file",
        "Included as part of ShikshaMatrix's connected platform — not a bolt-on tool."
      ]
    },
    {
      "title": "Attendance & Shifts",
      "desc": "Track staff attendance and shift schedules alongside student attendance.",
      "slug": "attendance-and-shifts",
      "image": "/features/hr/attendance-and-shifts.jpg",
      "bullets": [
        "Track staff attendance and shift schedules alongside student attendance.",
        "Staff attendance and student attendance live in the same connected system",
        "Included as part of ShikshaMatrix's connected platform — not a bolt-on tool."
      ]
    },
    {
      "title": "Leave Management",
      "desc": "Leave requests and approvals tracked in one place, with a clear record for every staff member.",
      "slug": "leave-management",
      "image": "/features/hr/leave-management.jpg",
      "bullets": [
        "Leave requests and approvals tracked in one place, with a clear record for every staff member.",
        "Documents are attached to each staff member's record, not scattered across folders",
        "Included as part of ShikshaMatrix's connected platform — not a bolt-on tool."
      ]
    },
    {
      "title": "Payroll",
      "desc": "Salary structures, deductions, and payslips generated consistently, not recalculated by hand each month.",
      "slug": "payroll",
      "image": "/features/hr/payroll.jpg",
      "bullets": [
        "Salary structures, deductions, and payslips generated consistently, not recalculated by hand each month.",
        "Available from the Essential plan onward, alongside core staff directory access on every tier",
        "Included as part of ShikshaMatrix's connected platform — not a bolt-on tool."
      ]
    },
    {
      "title": "Documents & Compliance",
      "desc": "Staff documents stored securely and attached to their record.",
      "slug": "documents-and-compliance",
      "image": "/features/hr/documents-and-compliance.jpg",
      "bullets": [
        "Staff documents stored securely and attached to their record.",
        "Payroll and leave records don't depend on one person's personal file",
        "Included as part of ShikshaMatrix's connected platform — not a bolt-on tool."
      ]
    },
    {
      "title": "ID Cards",
      "desc": "Generate staff ID cards directly from their profile data.",
      "slug": "id-cards",
      "image": "/features/hr/id-cards.jpg",
      "bullets": [
        "Generate staff ID cards directly from their profile data.",
        "Staff attendance and student attendance live in the same connected system",
        "Included as part of ShikshaMatrix's connected platform — not a bolt-on tool."
      ]
    }
  ],
  "benefits": [
    "Payroll and leave records don't depend on one person's personal file",
    "Staff attendance and student attendance live in the same connected system",
    "Documents are attached to each staff member's record, not scattered across folders",
    "Available from the Essential plan onward, alongside core staff directory access on every tier"
  ],
  "faqs": [
    {
      "q": "Can staff apply for leave through the app?",
      "a": "Yes — leave requests and approvals are tracked through the Staff App and HR module."
    },
    {
      "q": "Does the system calculate payroll automatically?",
      "a": "Yes — salary structures and deductions are set up once, and payslips generate consistently each cycle."
    },
    {
      "q": "Is the staff directory available on every plan?",
      "a": "Yes — the core Staff Directory, Departments, and HR Dashboard are available from the entry-level plan, since they're needed to add staff at all. Deeper HR features (payroll, leave, ID cards) are available from Essential onward."
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
    },
    {
      "label": "FAQ",
      "href": "/faq"
    }
  ],
  "heroImage": "/features/hr/hero.jpg"
};
