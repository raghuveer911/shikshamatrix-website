import type { Metadata } from "next";
import { ServiceLandingPage, type ServiceLandingData } from "../_components/service-landing-template";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "School Hostel Management Software",
  description: "Manage hostel room allocation, resident records, and hostel fees — connected to the same student record as the rest of your school.",
  alternates: { canonical: "/school-hostel-management-software" },
};

const data: ServiceLandingData = {
  slug: "school-hostel-management-software",
  eyebrow: "Hostel",
  h1: "Hostel Records, Connected to the Rest of the School",
  subhead:
    "Hostel allocation and resident records are often kept entirely separately from a school's main student data. ShikshaMatrix keeps hostel management connected to the same student and fee records as everything else.",
  problems: [
    { title: "Room allocation tracked separately", desc: "Hostel warden records often live apart from the school's main student database." },
    { title: "Hostel fees managed outside the main ledger", desc: "Hostel charges tracked separately make it harder to see a student's complete fee picture." },
    { title: "No easy visibility for school management", desc: "It's hard for school leadership to get a combined view of academic and hostel status for a resident student." },
  ],
  features: [
    { title: "Room & Bed Allocation", desc: "Assign hostel rooms and beds to students, tracked against their main student record." },
    { title: "Resident Records", desc: "Hostel-specific details connected to the same student profile used across the platform." },
    { title: "Hostel Fee Integration", desc: "Hostel charges can be included in a student's overall fee structure." },
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

export default function Page() {
  return <ServiceLandingPage data={data} />;
}
