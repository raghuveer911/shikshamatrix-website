import type { Metadata } from "next";
import { ServiceLandingPage, type ServiceLandingData } from "../_components/service-landing-template";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Multi-Branch School Management Software",
  description: "Running more than one school? ShikshaMatrix keeps each branch's data properly isolated while giving your group a consistent system across all of them.",
  alternates: { canonical: "/multi-branch-school-management-software" },
};

const data: ServiceLandingData = {
  slug: "multi-branch-school-management-software",
  eyebrow: "School Groups",
  h1: "Running Multiple Schools Shouldn't Mean Managing Multiple Systems",
  subhead:
    "A group running more than one school campus often ends up with each branch on its own inconsistent process, or worse, its own separate system entirely. ShikshaMatrix is built multi-tenant from the ground up, so each branch gets its own fully isolated setup on the same consistent platform.",
  problems: [
    { title: "Each branch runs its own process", desc: "Without a shared system, different campuses in the same group end up doing things inconsistently." },
    { title: "No group-level visibility", desc: "It's hard for group leadership to compare attendance, fees, or performance across branches without manually collecting reports from each one." },
    { title: "Data isolation concerns", desc: "Running multiple schools on one shared system raises a fair question: could one branch's data leak into another's?" },
  ],
  features: [
    { title: "True Multi-Tenant Isolation", desc: "Each school's data is fully isolated at the database level — one branch cannot see another's students, staff, or records." },
    { title: "Consistent Setup Across Branches", desc: "Every branch runs on the same platform, with the same modules, reducing training and process inconsistency." },
    { title: "Independent Subscriptions Per Branch", desc: "Each school registers and subscribes independently, scaled to its own size." },
  ],
  benefits: [
    "Each branch's data is genuinely isolated, not just permission-hidden within a shared database",
    "New branches can be set up on the same platform without inheriting another branch's data",
    "Consistent processes across a group make staff training and oversight simpler",
  ],
  faqs: [
    { q: "Can one branch see another branch's student data?", a: "No — ShikshaMatrix is multi-tenant by design, meaning each school's data is fully isolated from every other school on the platform, including other branches in the same group." },
    { q: "Does each branch need its own subscription?", a: "Yes — each school registers and subscribes independently, so pricing scales to each branch's actual size rather than the group as a whole." },
  ],
  relatedPages: [
    { label: "School ERP Software", href: "/school-erp-software" },
    { label: "Pricing", href: "/pricing" },
  ],
};

export default function Page() {
  return <ServiceLandingPage data={data} />;
}
