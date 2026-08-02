import type { Metadata } from "next";
import { ServiceLandingPage, type ServiceLandingData } from "../_components/service-landing-template";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Free School Website Builder — Built Into Your ERP",
  description: "Every ShikshaMatrix school gets its own public website — hero, about, admissions, gallery, notices, and an enquiry form — managed from the same admin panel, no separate website needed.",
  alternates: { canonical: "/school-website-builder" },
};

const data: ServiceLandingData = {
  slug: "school-website-builder",
  eyebrow: "School Website",
  h1: "Your School's Public Website, Built In — No Separate Tool Needed",
  subhead:
    "Most schools either have no real website, or pay a separate developer to build and maintain one. ShikshaMatrix gives every school its own public website, managed from the same admin panel as everything else.",
  problems: [
    { title: "No real public presence", desc: "Prospective parents searching online find nothing, or an outdated one-page site from years ago." },
    { title: "Separate website means separate cost and upkeep", desc: "A standalone website needs its own developer, its own hosting, and its own updates — disconnected from the school's actual data." },
    { title: "Enquiries don't reach the right place", desc: "A website contact form that just sends an email is easy to miss and doesn't connect to how the school actually tracks admissions." },
    { title: "Content goes stale", desc: "Without an easy way to update it, a school website often shows last year's information indefinitely." },
  ],
  features: [
    { title: "No-Code Website Editor", desc: "Edit your hero section, about text, admissions info, and branding directly from Settings — no developer needed." },
    { title: "Photo Gallery", desc: "Upload campus and event photos directly, automatically optimized for fast loading." },
    { title: "Live Notice Board", desc: "Choose which school notices also appear publicly on your website." },
    { title: "Built-In Enquiry Form", desc: "Website enquiries flow directly into the same Front Office pipeline used for walk-in and phone enquiries — nothing gets missed." },
    { title: "Free Subdomain, Instantly", desc: "Every school gets a free, working website address the moment it's turned on — no domain purchase required to get started." },
  ],
  benefits: [
    "One less separate tool and one less separate cost for the school to manage",
    "Website enquiries land in the same place as every other admission enquiry",
    "Content is updated by school staff directly, in minutes, whenever needed",
    "Included with every ShikshaMatrix school — no extra setup required",
  ],
  faqs: [
    { q: "Do we need a developer to set up our school website?", a: "No — the website is edited directly from your ShikshaMatrix admin panel under Settings, with no coding required." },
    { q: "What happens to enquiries submitted through our website?", a: "They go straight into your school's Front Office enquiry pipeline, the same place walk-in and phone enquiries are tracked." },
    { q: "Can we use our own domain name instead of the free one?", a: "Custom domain support is coming soon — every school already gets a free, working website address today." },
  ],
  relatedPages: [
    { label: "School ERP Software", href: "/school-erp-software" },
    { label: "Student Admission Software", href: "/student-admission-software" },
    { label: "Pricing", href: "/pricing" },
  ],
};

export default function Page() {
  return <ServiceLandingPage data={data} />;
}
