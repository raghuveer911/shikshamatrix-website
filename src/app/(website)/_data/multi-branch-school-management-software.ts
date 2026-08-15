import type { ServiceLandingData } from "../_components/service-landing-template";

// ─────────────────────────────────────────────────────────────
// Image convention for this module — drop files into:
//   public/features/multi-branch/hero.jpg   (module hero, ~1600x800)
//   public/features/multi-branch/true-multi-tenant-isolation.jpg (~800x600)
//   public/features/multi-branch/consistent-setup-across-branches.jpg (~800x600)
//   public/features/multi-branch/independent-subscriptions-per-branch.jpg (~800x600)
// Until a file exists at a path, that spot shows a soft placeholder
// tile automatically — nothing breaks, nothing needs code changes.
// ─────────────────────────────────────────────────────────────

export const multiBranchSchoolManagementSoftwareData: ServiceLandingData = {
  "slug": "multi-branch-school-management-software",
  "eyebrow": "School Groups",
  "h1": "Running Multiple Schools Shouldn't Mean Managing Multiple Systems",
  "subhead": "A group running more than one school campus often ends up with each branch on its own inconsistent process, or worse, its own separate system entirely. ShikshaMatrix is built multi-tenant from the ground up, so each branch gets its own fully isolated setup on the same consistent platform.",
  "problems": [
    {
      "title": "Each branch runs its own process",
      "desc": "Without a shared system, different campuses in the same group end up doing things inconsistently."
    },
    {
      "title": "No group-level visibility",
      "desc": "It's hard for group leadership to compare attendance, fees, or performance across branches without manually collecting reports from each one."
    },
    {
      "title": "Data isolation concerns",
      "desc": "Running multiple schools on one shared system raises a fair question: could one branch's data leak into another's?"
    }
  ],
  "features": [
    {
      "title": "True Multi-Tenant Isolation",
      "desc": "Each school's data is fully isolated at the database level — one branch cannot see another's students, staff, or records.",
      "slug": "true-multi-tenant-isolation",
      "image": "/features/multi-branch/true-multi-tenant-isolation.jpg",
      "bullets": [
        "Each school's data is fully isolated at the database level — one branch cannot see another's students, staff, or records.",
        "Each branch's data is genuinely isolated, not just permission-hidden within a shared database",
        "Included as part of ShikshaMatrix's connected platform — not a bolt-on tool."
      ]
    },
    {
      "title": "Consistent Setup Across Branches",
      "desc": "Every branch runs on the same platform, with the same modules, reducing training and process inconsistency.",
      "slug": "consistent-setup-across-branches",
      "image": "/features/multi-branch/consistent-setup-across-branches.jpg",
      "bullets": [
        "Every branch runs on the same platform, with the same modules, reducing training and process inconsistency.",
        "New branches can be set up on the same platform without inheriting another branch's data",
        "Included as part of ShikshaMatrix's connected platform — not a bolt-on tool."
      ]
    },
    {
      "title": "Independent Subscriptions Per Branch",
      "desc": "Each school registers and subscribes independently, scaled to its own size.",
      "slug": "independent-subscriptions-per-branch",
      "image": "/features/multi-branch/independent-subscriptions-per-branch.jpg",
      "bullets": [
        "Each school registers and subscribes independently, scaled to its own size.",
        "Consistent processes across a group make staff training and oversight simpler",
        "Included as part of ShikshaMatrix's connected platform — not a bolt-on tool."
      ]
    }
  ],
  "benefits": [
    "Each branch's data is genuinely isolated, not just permission-hidden within a shared database",
    "New branches can be set up on the same platform without inheriting another branch's data",
    "Consistent processes across a group make staff training and oversight simpler"
  ],
  "faqs": [
    {
      "q": "Can one branch see another branch's student data?",
      "a": "No — ShikshaMatrix is multi-tenant by design, meaning each school's data is fully isolated from every other school on the platform, including other branches in the same group."
    },
    {
      "q": "Does each branch need its own subscription?",
      "a": "Yes — each school registers and subscribes independently, so pricing scales to each branch's actual size rather than the group as a whole."
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
  "heroImage": "/features/multi-branch/hero.jpg"
};
