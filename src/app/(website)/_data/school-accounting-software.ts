import type { ServiceLandingData } from "../_components/service-landing-template";

// ─────────────────────────────────────────────────────────────
// Image convention for this module — drop files into:
//   public/features/accounting/hero.jpg   (module hero, ~1600x800)
//   public/features/accounting/income-and-expense-tracking.jpg (~800x600)
//   public/features/accounting/financial-reports.jpg    (~800x600)
//   public/features/accounting/connected-to-fee-collection.jpg (~800x600)
// Until a file exists at a path, that spot shows a soft placeholder
// tile automatically — nothing breaks, nothing needs code changes.
// ─────────────────────────────────────────────────────────────

export const schoolAccountingSoftwareData: ServiceLandingData = {
  "slug": "school-accounting-software",
  "eyebrow": "Accounting",
  "h1": "School Finances, Not Just Fee Collection",
  "subhead": "Fee collection is only part of a school's finances — there's also staff payroll, vendor payments, and day-to-day expenses. ShikshaMatrix connects fee income with the school's broader financial picture instead of tracking them separately.",
  "problems": [
    {
      "title": "Fee income and expenses tracked separately",
      "desc": "Fee collection systems and expense tracking often live in completely different tools, making a true financial picture hard to see."
    },
    {
      "title": "Manual reconciliation at month-end",
      "desc": "Bringing income and expense records together for a monthly report takes manual effort."
    },
    {
      "title": "Limited visibility for school leadership",
      "desc": "It's hard for management to see cash flow trends without compiling reports from multiple sources."
    }
  ],
  "features": [
    {
      "title": "Income & Expense Tracking",
      "desc": "Record school expenses alongside fee income in the same system.",
      "slug": "income-and-expense-tracking",
      "image": "/features/accounting/income-and-expense-tracking.jpg",
      "bullets": [
        "Record school expenses alongside fee income in the same system.",
        "Fee income and school expenses live in one connected financial picture",
        "Included as part of ShikshaMatrix's connected platform — not a bolt-on tool."
      ]
    },
    {
      "title": "Financial Reports",
      "desc": "Generate financial summaries without manually compiling data from separate sources.",
      "slug": "financial-reports",
      "image": "/features/accounting/financial-reports.jpg",
      "bullets": [
        "Generate financial summaries without manually compiling data from separate sources.",
        "Less manual reconciliation work at month-end",
        "Included as part of ShikshaMatrix's connected platform — not a bolt-on tool."
      ]
    },
    {
      "title": "Connected to Fee Collection",
      "desc": "Fee income feeds directly into the school's financial records, without manual re-entry.",
      "slug": "connected-to-fee-collection",
      "image": "/features/accounting/connected-to-fee-collection.jpg",
      "bullets": [
        "Fee income feeds directly into the school's financial records, without manual re-entry.",
        "Better visibility for school leadership into overall cash flow",
        "Included as part of ShikshaMatrix's connected platform — not a bolt-on tool."
      ]
    }
  ],
  "benefits": [
    "Fee income and school expenses live in one connected financial picture",
    "Less manual reconciliation work at month-end",
    "Better visibility for school leadership into overall cash flow"
  ],
  "faqs": [
    {
      "q": "Does fee income automatically feed into accounting reports?",
      "a": "Yes — fee collection connects directly to the school's broader financial records, without needing manual re-entry."
    }
  ],
  "relatedPages": [
    {
      "label": "Fee Management Software",
      "href": "/school-fee-management-software"
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
  "heroImage": "/features/accounting/hero.jpg"
};
