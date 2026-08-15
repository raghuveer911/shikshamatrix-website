import type { ServiceLandingData } from "../_components/service-landing-template";

// ─────────────────────────────────────────────────────────────
// Image convention for this module — drop files into:
//   public/features/inventory/hero.jpg   (module hero, ~1600x800)
//   public/features/inventory/stock-tracking.jpg        (~800x600)
//   public/features/inventory/purchase-requests.jpg     (~800x600)
//   public/features/inventory/inventory-dashboard.jpg   (~800x600)
// Until a file exists at a path, that spot shows a soft placeholder
// tile automatically — nothing breaks, nothing needs code changes.
// ─────────────────────────────────────────────────────────────

export const schoolInventoryManagementSoftwareData: ServiceLandingData = {
  "slug": "school-inventory-management-software",
  "eyebrow": "Inventory",
  "h1": "Know What's In Stock Before You Reorder It",
  "subhead": "Lab equipment, sports gear, and stationery are often tracked (if at all) in a notebook that only one staff member checks. ShikshaMatrix keeps school inventory and purchase requests in one visible system.",
  "problems": [
    {
      "title": "Stock levels tracked informally",
      "desc": "Without a proper system, knowing what's actually in stock often depends on someone physically checking a storeroom."
    },
    {
      "title": "Duplicate or missed purchases",
      "desc": "Without visibility into current stock, schools risk over-ordering some items and running out of others."
    },
    {
      "title": "No record of who requested what",
      "desc": "Purchase requests made informally are hard to track or approve consistently."
    }
  ],
  "features": [
    {
      "title": "Stock Tracking",
      "desc": "Track inventory levels for lab equipment, sports gear, stationery, and other assets.",
      "slug": "stock-tracking",
      "image": "/features/inventory/stock-tracking.jpg",
      "bullets": [
        "Track inventory levels for lab equipment, sports gear, stationery, and other assets.",
        "Stock levels are visible without needing to physically check a storeroom",
        "Included as part of ShikshaMatrix's connected platform — not a bolt-on tool."
      ]
    },
    {
      "title": "Purchase Requests",
      "desc": "Staff can raise purchase requests that go through a clear approval process.",
      "slug": "purchase-requests",
      "image": "/features/inventory/purchase-requests.jpg",
      "bullets": [
        "Staff can raise purchase requests that go through a clear approval process.",
        "Purchase requests are tracked and approved consistently, not handled informally",
        "Included as part of ShikshaMatrix's connected platform — not a bolt-on tool."
      ]
    },
    {
      "title": "Inventory Dashboard",
      "desc": "See current stock levels and pending requests in one place.",
      "slug": "inventory-dashboard",
      "image": "/features/inventory/inventory-dashboard.jpg",
      "bullets": [
        "See current stock levels and pending requests in one place.",
        "Stock levels are visible without needing to physically check a storeroom",
        "Included as part of ShikshaMatrix's connected platform — not a bolt-on tool."
      ]
    }
  ],
  "benefits": [
    "Stock levels are visible without needing to physically check a storeroom",
    "Purchase requests are tracked and approved consistently, not handled informally"
  ],
  "faqs": [
    {
      "q": "Can staff request items through the system?",
      "a": "Yes — staff can raise purchase requests, which go through a defined approval process rather than being handled informally."
    }
  ],
  "relatedPages": [
    {
      "label": "School ERP Software",
      "href": "/school-erp-software"
    },
    {
      "label": "School Accounting Software",
      "href": "/school-accounting-software"
    },
    {
      "label": "Pricing",
      "href": "/pricing"
    }
  ],
  "heroImage": "/features/inventory/hero.jpg"
};
