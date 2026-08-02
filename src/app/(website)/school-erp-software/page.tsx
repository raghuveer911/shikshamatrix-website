import type { Metadata } from "next";
import { ServiceLandingPage, type ServiceLandingData } from "../_components/service-landing-template";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "School ERP Software for Indian Schools",
  description: "ShikshaMatrix is an all-in-one School ERP software — admissions, attendance, fee collection, academics, HR, communication, transport, hostel and library, in one connected platform.",
  alternates: { canonical: "/school-erp-software" },
};

const data: ServiceLandingData = {
  eyebrow: "School ERP Software",
  h1: "One School ERP for Everything Your School Runs On",
  subhead:
    "Most schools run on a patchwork of paper registers, spreadsheets, and phone calls. ShikshaMatrix replaces all of it with one connected platform — for the school office, teachers, students, and parents.",
  problems: [
    { title: "Data scattered everywhere", desc: "Admission forms in one folder, attendance in a register, fee ledgers in Excel — nothing talks to anything else." },
    { title: "No real-time visibility", desc: "By the time a report reaches the principal's desk, it's already out of date." },
    { title: "Parents left in the dark", desc: "Attendance, fees, and homework updates depend on someone remembering to make a phone call." },
    { title: "Staff repeating the same data entry", desc: "The same student's information gets typed into three different registers by three different people." },
  ],
  features: [
    { title: "Admissions & Student Records", desc: "Digital admission forms that feed directly into a student's full academic record." },
    { title: "Attendance", desc: "Marked digitally in seconds, with automatic parent notification." },
    { title: "Fee Collection", desc: "Online and offline payment tracking, automatic due reminders, digital receipts." },
    { title: "HR & Payroll", desc: "Staff attendance, leave, payroll, and documents in one place." },
    { title: "Communication", desc: "One official channel to reach every parent — notices, homework, alerts." },
    { title: "Exams & Academics", desc: "Timetables, exams, report cards, and progress tracking." },
  ],
  benefits: [
    "One system for the School Admin Panel, Staff App, Student App, and Parent App — no separate logins to manage",
    "Each school's data is fully isolated and private — no other school can see it",
    "Built specifically for how Indian schools actually operate, not adapted from a generic global product",
    "Plans that scale from small schools to large institutions, without losing access to core apps at any tier",
  ],
  faqs: [
    { q: "What does a School ERP actually do?", a: "A School ERP brings every part of running a school — admissions, attendance, fees, academics, HR, and communication — into one connected system, instead of managing each separately on paper or in spreadsheets." },
    { q: "Is ShikshaMatrix suitable for small schools?", a: "Yes — ShikshaMatrix has plans starting from small schools (roughly 100+ students) up to large institutions with 1,000+ students. See the Pricing page for details." },
    { q: "Do teachers and parents need separate apps?", a: "Staff use a dedicated Staff App; students and parents use the Student/Parent App. The school itself manages everything from the web-based Admin Panel." },
    { q: "How is our school's data kept private?", a: "ShikshaMatrix is multi-tenant by design — each school's data is fully isolated from every other school on the platform." },
  ],
  relatedPages: [
    { label: "Fee Management Software", href: "/school-fee-management-software" },
    { label: "Attendance Software", href: "/school-attendance-software" },
    { label: "Pricing", href: "/pricing" },
    { label: "FAQ", href: "/faq" },
  ],
};

export default function Page() {
  return <ServiceLandingPage data={data} />;
}
