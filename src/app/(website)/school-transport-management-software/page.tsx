import type { Metadata } from "next";
import { ServiceLandingPage, type ServiceLandingData } from "../_components/service-landing-template";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "School Transport Management Software",
  description: "Manage routes, vehicles, and student transport assignments in one place, connected to the rest of your school's records.",
  alternates: { canonical: "/school-transport-management-software" },
};

const data: ServiceLandingData = {
  slug: "school-transport-management-software",
  eyebrow: "Transport",
  h1: "School Transport, Tracked Like Everything Else",
  subhead:
    "Bus routes, vehicle assignments, and which students ride which bus are often tracked separately from the rest of a school's records. ShikshaMatrix keeps transport connected to the same student data as everything else.",
  problems: [
    { title: "Routes tracked on paper or in isolated spreadsheets", desc: "Route assignments live separately from the student records they actually relate to." },
    { title: "No easy way to know who's on which bus", desc: "Front-office staff and parents alike often can't quickly confirm a student's transport assignment." },
    { title: "Vehicle and driver details scattered", desc: "Vehicle documents, driver details, and maintenance records end up in separate files." },
  ],
  features: [
    { title: "Route Management", desc: "Set up bus routes and stops for the school." },
    { title: "Vehicle & Driver Records", desc: "Track vehicle details and driver assignments in the system." },
    { title: "Student Transport Assignment", desc: "Assign students to routes, connected directly to their student record." },
    { title: "Fee Integration", desc: "Transport charges can be included as part of a student's fee structure." },
  ],
  benefits: [
    "Transport assignments live in the same system as the rest of a student's record, not a separate spreadsheet",
    "Front-office staff can look up a student's route without cross-referencing multiple files",
    "Transport fees connect directly to the same fee collection and receipt system as everything else",
  ],
  faqs: [
    { q: "Can transport fees be part of a student's regular fee plan?", a: "Yes — transport charges can be included in a student's overall fee structure, tracked through the same fee collection system." },
    { q: "Is transport management included in every plan?", a: "Transport management is part of ShikshaMatrix's broader module set — see the Pricing page for which tier includes which modules." },
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
