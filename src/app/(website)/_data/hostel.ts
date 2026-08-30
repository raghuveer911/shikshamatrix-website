import type { ServiceLandingData } from "../_components/service-landing-template";

// ─────────────────────────────────────────────────────────────
// Image convention for this module — drop files into:
//   public/features/hostel/hero.jpg                     (module hero, ~1600x800)
//   public/features/hostel/room-bed-allocation.jpg       (~800x600)
//   public/features/hostel/resident-records.jpg          (~800x600)
//   public/features/hostel/hostel-fee-integration.jpg    (~800x600)
// Until a file exists at a path, that spot shows a soft placeholder
// tile automatically — nothing breaks, nothing needs code changes.
// ─────────────────────────────────────────────────────────────

export const hostelData: ServiceLandingData = {
  slug: "school-hostel-management-software",
  eyebrow: "Hostel",
  h1: "Hostel Records, Connected to the Rest of the School",
  subhead:
    "Hostel allocation and resident records are often kept entirely separately from a school's main student data. ShikshaMatrix keeps hostel management connected to the same student and fee records as everything else.",
  heroImage: "/features/hostel/hero.png",
  problems: [
    { title: "Room allocation tracked separately", desc: "Hostel warden records often live apart from the school's main student database." },
    { title: "Hostel fees managed outside the main ledger", desc: "Hostel charges tracked separately make it harder to see a student's complete fee picture." },
    { title: "No easy visibility for school management", desc: "It's hard for school leadership to get a combined view of academic and hostel status for a resident student." },
  ],
  features: [
    {
      title: "Room & Bed Allocation",
      desc: "Assign hostel rooms and beds to students, tracked against their main student record.",
      slug: "room-bed-allocation",
      image: "/features/hostel/room-bed-allocation.jpg",
      bullets: [
        "Assign or reassign a bed to any student in a few taps",
        "See room-wise and floor-wise occupancy at a glance",
        "Room capacity and vacancy update automatically as students move in or out",
        "Every allocation is tied to the same student record used across the platform",
      ],
    },
    {
      title: "Resident Records",
      desc: "Hostel-specific details connected to the same student profile used across the platform.",
      slug: "resident-records",
      image: "/features/hostel/resident-records.jpg",
      bullets: [
        "Guardian contacts, medical notes, and check-in/out history in one place",
        "Warden can pull up a resident's full profile instantly",
        "No separate hostel register to maintain by hand",
        "Connects directly to attendance and academic records for the same student",
      ],
    },
    {
      title: "Hostel Fee Integration",
      desc: "Hostel charges can be included in a student's overall fee structure.",
      slug: "hostel-fee-integration",
      image: "/features/hostel/hostel-fee-integration.png",
      bullets: [
        "Hostel fees appear alongside tuition and other charges — one bill, not three",
        "Same reminders, receipts, and payment tracking as the rest of fee collection",
        "School management sees a resident student's complete financial picture",
        "No manual reconciliation between hostel and accounts records",
      ],
    },
  ],
  benefits: [
    "Hostel records connect to the same student data as academics and attendance",
    "Hostel fees are tracked through the same fee collection and receipt system",
    "One system for school leadership to see a complete picture of a resident student",
  ],
  faqs: [
    { q: "Can hostel fees be part of a student's regular fee plan?", a: "Yes — hostel charges can be included in a student's overall fee structure alongside tuition and other fees." },
  ],
  relatedPages: [
    { label: "School ERP Software", href: "/school-erp-software" },
    { label: "Fee Management Software", href: "/school-fee-management-software" },
    { label: "Pricing", href: "/pricing" },
  ],
};
