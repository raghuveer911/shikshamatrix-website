import type { ServiceLandingData } from "../_components/service-landing-template";

// ─────────────────────────────────────────────────────────────
// Image convention for this module — drop files into:
//   public/features/website-builder/hero.jpg   (module hero, ~1600x800)
//   public/features/website-builder/no-code-website-editor.jpg (~800x600)
//   public/features/website-builder/photo-gallery.jpg   (~800x600)
//   public/features/website-builder/live-notice-board.jpg (~800x600)
//   public/features/website-builder/built-in-enquiry-form.jpg (~800x600)
//   public/features/website-builder/free-subdomain-instantly.jpg (~800x600)
// Until a file exists at a path, that spot shows a soft placeholder
// tile automatically — nothing breaks, nothing needs code changes.
// ─────────────────────────────────────────────────────────────

export const schoolWebsiteBuilderData: ServiceLandingData = {
  "slug": "school-website-builder",
  "eyebrow": "School Website",
  "h1": "Your School's Public Website, Built In — No Separate Tool Needed",
  "subhead": "Most schools either have no real website, or pay a separate developer to build and maintain one. ShikshaMatrix gives every school its own public website, managed from the same admin panel as everything else.",
  "problems": [
    {
      "title": "No real public presence",
      "desc": "Prospective parents searching online find nothing, or an outdated one-page site from years ago."
    },
    {
      "title": "Separate website means separate cost and upkeep",
      "desc": "A standalone website needs its own developer, its own hosting, and its own updates — disconnected from the school's actual data."
    },
    {
      "title": "Enquiries don't reach the right place",
      "desc": "A website contact form that just sends an email is easy to miss and doesn't connect to how the school actually tracks admissions."
    },
    {
      "title": "Content goes stale",
      "desc": "Without an easy way to update it, a school website often shows last year's information indefinitely."
    }
  ],
  "features": [
    {
      "title": "No-Code Website Editor",
      "desc": "Edit your hero section, about text, admissions info, and branding directly from Settings — no developer needed.",
      "slug": "no-code-website-editor",
      "image": "/features/website-builder/no-code-website-editor.jpg",
      "bullets": [
        "Edit your hero section, about text, admissions info, and branding directly from Settings — no developer needed.",
        "One less separate tool and one less separate cost for the school to manage",
        "Included as part of ShikshaMatrix's connected platform — not a bolt-on tool."
      ]
    },
    {
      "title": "Photo Gallery",
      "desc": "Upload campus and event photos directly, automatically optimized for fast loading.",
      "slug": "photo-gallery",
      "image": "/features/website-builder/photo-gallery.jpg",
      "bullets": [
        "Upload campus and event photos directly, automatically optimized for fast loading.",
        "Website enquiries land in the same place as every other admission enquiry",
        "Included as part of ShikshaMatrix's connected platform — not a bolt-on tool."
      ]
    },
    {
      "title": "Live Notice Board",
      "desc": "Choose which school notices also appear publicly on your website.",
      "slug": "live-notice-board",
      "image": "/features/website-builder/live-notice-board.jpg",
      "bullets": [
        "Choose which school notices also appear publicly on your website.",
        "Content is updated by school staff directly, in minutes, whenever needed",
        "Included as part of ShikshaMatrix's connected platform — not a bolt-on tool."
      ]
    },
    {
      "title": "Built-In Enquiry Form",
      "desc": "Website enquiries flow directly into the same Front Office pipeline used for walk-in and phone enquiries — nothing gets missed.",
      "slug": "built-in-enquiry-form",
      "image": "/features/website-builder/built-in-enquiry-form.jpg",
      "bullets": [
        "Website enquiries flow directly into the same Front Office pipeline used for walk-in and phone enquiries — nothing gets missed.",
        "Included with every ShikshaMatrix school — no extra setup required",
        "Included as part of ShikshaMatrix's connected platform — not a bolt-on tool."
      ]
    },
    {
      "title": "Free Subdomain, Instantly",
      "desc": "Every school gets a free, working website address the moment it's turned on — no domain purchase required to get started.",
      "slug": "free-subdomain-instantly",
      "image": "/features/website-builder/free-subdomain-instantly.jpg",
      "bullets": [
        "Every school gets a free, working website address the moment it's turned on — no domain purchase required to get started.",
        "One less separate tool and one less separate cost for the school to manage",
        "Included as part of ShikshaMatrix's connected platform — not a bolt-on tool."
      ]
    }
  ],
  "benefits": [
    "One less separate tool and one less separate cost for the school to manage",
    "Website enquiries land in the same place as every other admission enquiry",
    "Content is updated by school staff directly, in minutes, whenever needed",
    "Included with every ShikshaMatrix school — no extra setup required"
  ],
  "faqs": [
    {
      "q": "Do we need a developer to set up our school website?",
      "a": "No — the website is edited directly from your ShikshaMatrix admin panel under Settings, with no coding required."
    },
    {
      "q": "What happens to enquiries submitted through our website?",
      "a": "They go straight into your school's Front Office enquiry pipeline, the same place walk-in and phone enquiries are tracked."
    },
    {
      "q": "Can we use our own domain name instead of the free one?",
      "a": "Custom domain support is coming soon — every school already gets a free, working website address today."
    }
  ],
  "relatedPages": [
    {
      "label": "School ERP Software",
      "href": "/school-erp-software"
    },
    {
      "label": "Student Admission Software",
      "href": "/student-admission-software"
    },
    {
      "label": "Pricing",
      "href": "/pricing"
    }
  ],
  "heroImage": "/features/website-builder/hero.jpg"
};
