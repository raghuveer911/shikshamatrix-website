import type { ServiceLandingData } from "../_components/service-landing-template";

// ─────────────────────────────────────────────────────────────
// Image convention for this module — drop files into:
//   public/features/erp/hero.jpg   (module hero, ~1600x800)
//   public/features/erp/admissions-and-student-records.jpg (~800x600)
//   public/features/erp/attendance.jpg                  (~800x600)
//   public/features/erp/fee-collection.jpg              (~800x600)
//   public/features/erp/hr-and-payroll.jpg              (~800x600)
//   public/features/erp/communication.jpg               (~800x600)
//   public/features/erp/exams-and-academics.jpg         (~800x600)
// Until a file exists at a path, that spot shows a soft placeholder
// tile automatically — nothing breaks, nothing needs code changes.
// ─────────────────────────────────────────────────────────────

export const schoolErpSoftwareData: ServiceLandingData = {
  "slug": "school-erp-software",
  "eyebrow": "School ERP Software",
  "h1": "One School ERP for Everything Your School Runs On",
  "subhead": "Most schools run on a patchwork of paper registers, spreadsheets, and phone calls. ShikshaMatrix replaces all of it with one connected platform — for the school office, teachers, students, and parents.",
  "problems": [
    {
      "title": "Data scattered everywhere",
      "desc": "Admission forms in one folder, attendance in a register, fee ledgers in Excel — nothing talks to anything else."
    },
    {
      "title": "No real-time visibility",
      "desc": "By the time a report reaches the principal's desk, it's already out of date."
    },
    {
      "title": "Parents left in the dark",
      "desc": "Attendance, fees, and homework updates depend on someone remembering to make a phone call."
    },
    {
      "title": "Staff repeating the same data entry",
      "desc": "The same student's information gets typed into three different registers by three different people."
    }
  ],
  "features": [
    {
      "title": "Admissions & Student Records",
      "desc": "Digital admission forms that feed directly into a student's full academic record.",
      "slug": "admissions-and-student-records",
      "image": "/features/erp/admissions-and-student-records.jpg",
      "bullets": [
        "Digital admission forms that feed directly into a student's full academic record.",
        "One system for the School Admin Panel, Staff App, Student App, and Parent App — no separate logins to manage",
        "Included as part of ShikshaMatrix's connected platform — not a bolt-on tool."
      ]
    },
    {
      "title": "Attendance",
      "desc": "Marked digitally in seconds, with automatic parent notification.",
      "slug": "attendance",
      "image": "/features/erp/attendance.jpg",
      "bullets": [
        "Marked digitally in seconds, with automatic parent notification.",
        "Each school's data is fully isolated and private — no other school can see it",
        "Included as part of ShikshaMatrix's connected platform — not a bolt-on tool."
      ]
    },
    {
      "title": "Fee Collection",
      "desc": "Online and offline payment tracking, automatic due reminders, digital receipts.",
      "slug": "fee-collection",
      "image": "/features/erp/fee-collection.jpg",
      "bullets": [
        "Online and offline payment tracking, automatic due reminders, digital receipts.",
        "Built specifically for how Indian schools actually operate, not adapted from a generic global product",
        "Included as part of ShikshaMatrix's connected platform — not a bolt-on tool."
      ]
    },
    {
      "title": "HR & Payroll",
      "desc": "Staff attendance, leave, payroll, and documents in one place.",
      "slug": "hr-and-payroll",
      "image": "/features/erp/hr-and-payroll.jpg",
      "bullets": [
        "Staff attendance, leave, payroll, and documents in one place.",
        "Plans that scale from small schools to large institutions, without losing access to core apps at any tier",
        "Included as part of ShikshaMatrix's connected platform — not a bolt-on tool."
      ]
    },
    {
      "title": "Communication",
      "desc": "One official channel to reach every parent — notices, homework, alerts.",
      "slug": "communication",
      "image": "/features/erp/communication.jpg",
      "bullets": [
        "One official channel to reach every parent — notices, homework, alerts.",
        "One system for the School Admin Panel, Staff App, Student App, and Parent App — no separate logins to manage",
        "Included as part of ShikshaMatrix's connected platform — not a bolt-on tool."
      ]
    },
    {
      "title": "Exams & Academics",
      "desc": "Timetables, exams, report cards, and progress tracking.",
      "slug": "exams-and-academics",
      "image": "/features/erp/exams-and-academics.jpg",
      "bullets": [
        "Timetables, exams, report cards, and progress tracking.",
        "Each school's data is fully isolated and private — no other school can see it",
        "Included as part of ShikshaMatrix's connected platform — not a bolt-on tool."
      ]
    }
  ],
  "benefits": [
    "One system for the School Admin Panel, Staff App, Student App, and Parent App — no separate logins to manage",
    "Each school's data is fully isolated and private — no other school can see it",
    "Built specifically for how Indian schools actually operate, not adapted from a generic global product",
    "Plans that scale from small schools to large institutions, without losing access to core apps at any tier"
  ],
  "faqs": [
    {
      "q": "What does a School ERP actually do?",
      "a": "A School ERP brings every part of running a school — admissions, attendance, fees, academics, HR, and communication — into one connected system, instead of managing each separately on paper or in spreadsheets."
    },
    {
      "q": "Is ShikshaMatrix suitable for small schools?",
      "a": "Yes — ShikshaMatrix has plans starting from small schools (roughly 100+ students) up to large institutions with 1,000+ students. See the Pricing page for details."
    },
    {
      "q": "Do teachers and parents need separate apps?",
      "a": "Staff use a dedicated Staff App; students and parents use the Student/Parent App. The school itself manages everything from the web-based Admin Panel."
    },
    {
      "q": "How is our school's data kept private?",
      "a": "ShikshaMatrix is multi-tenant by design — each school's data is fully isolated from every other school on the platform."
    }
  ],
  "relatedPages": [
    {
      "label": "Fee Management Software",
      "href": "/school-fee-management-software"
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
      "label": "FAQ",
      "href": "/faq"
    }
  ],
  "heroImage": "/features/erp/hero.jpg"
};
