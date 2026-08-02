import type { Metadata } from "next";
import { ServiceLandingPage, type ServiceLandingData } from "../_components/service-landing-template";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "School Timetable Management Software",
  description: "Build and share class timetables digitally — visible instantly to teachers and students, with no reprinting when something changes.",
  alternates: { canonical: "/school-timetable-software" },
};

const data: ServiceLandingData = {
  slug: "school-timetable-software",
  eyebrow: "Timetable",
  h1: "Timetable Changes That Don't Need Reprinting",
  subhead:
    "A printed timetable pinned to a noticeboard is out of date the moment something changes. ShikshaMatrix keeps timetables digital, so updates reach every teacher and student's app instantly.",
  problems: [
    { title: "Printed timetables go stale", desc: "Any change to the schedule means reprinting and re-pinning notices around the school." },
    { title: "Substitutions are hard to communicate", desc: "A last-minute teacher substitution often relies on word of mouth reaching the right classroom." },
    { title: "No single source of truth", desc: "Different copies of the same timetable can drift out of sync across the school." },
  ],
  features: [
    { title: "Digital Timetable Builder", desc: "Build class and section timetables, assigning teachers and subjects to each period." },
    { title: "Instant Updates", desc: "Any change is reflected immediately in the Staff and Student Apps — no reprinting." },
    { title: "Period-Level Detail", desc: "See exactly which subject and teacher is assigned to any period, for any class." },
  ],
  benefits: [
    "One digital timetable that stays in sync everywhere it's viewed",
    "Changes reach teachers and students instantly, not through word of mouth",
    "Connects to the same class and staff structure as the rest of the platform",
  ],
  faqs: [
    { q: "Do students see the timetable in their app?", a: "Yes — the timetable is visible directly in the Student App, always reflecting the latest version." },
  ],
  relatedPages: [
    { label: "School ERP Software", href: "/school-erp-software" },
    { label: "Mobile App", href: "/school-mobile-app" },
    { label: "Pricing", href: "/pricing" },
  ],
};

export default function Page() {
  return <ServiceLandingPage data={data} />;
}
