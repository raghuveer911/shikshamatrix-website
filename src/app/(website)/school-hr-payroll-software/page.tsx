import type { Metadata } from "next";
import { ServiceLandingPage, type ServiceLandingData } from "../_components/service-landing-template";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "School HR & Payroll Software",
  description: "Staff attendance, leave, payroll, and documents in one place — instead of a spreadsheet only one person understands.",
  alternates: { canonical: "/school-hr-payroll-software" },
};

const data: ServiceLandingData = {
  slug: "school-hr-payroll-software",
  eyebrow: "HR & Payroll",
  h1: "Staff Management That Doesn't Depend on One Person's Spreadsheet",
  subhead:
    "Staff attendance, leave requests, and payroll calculations often live in one person's spreadsheet — hard to audit, and a risk if that person is unavailable. ShikshaMatrix centralizes it in one system the whole school can rely on.",
  problems: [
    { title: "Payroll tracked in a personal spreadsheet", desc: "Salary calculations, deductions, and leave adjustments often live in one person's file, hard for anyone else to verify." },
    { title: "Leave requests handled informally", desc: "Leave approvals happen over messages or in person, with no consistent record." },
    { title: "Staff documents scattered", desc: "Contracts, ID proofs, and certificates end up in physical files or random folders." },
    { title: "No visibility for management", desc: "It's hard for school leadership to see staff attendance patterns or department-wide leave trends at a glance." },
  ],
  features: [
    { title: "Staff Directory & Departments", desc: "A structured staff directory with departments, designations, and roles." },
    { title: "Attendance & Shifts", desc: "Track staff attendance and shift schedules alongside student attendance." },
    { title: "Leave Management", desc: "Leave requests and approvals tracked in one place, with a clear record for every staff member." },
    { title: "Payroll", desc: "Salary structures, deductions, and payslips generated consistently, not recalculated by hand each month." },
    { title: "Documents & Compliance", desc: "Staff documents stored securely and attached to their record." },
    { title: "ID Cards", desc: "Generate staff ID cards directly from their profile data." },
  ],
  benefits: [
    "Payroll and leave records don't depend on one person's personal file",
    "Staff attendance and student attendance live in the same connected system",
    "Documents are attached to each staff member's record, not scattered across folders",
    "Available from the Essential plan onward, alongside core staff directory access on every tier",
  ],
  faqs: [
    { q: "Can staff apply for leave through the app?", a: "Yes — leave requests and approvals are tracked through the Staff App and HR module." },
    { q: "Does the system calculate payroll automatically?", a: "Yes — salary structures and deductions are set up once, and payslips generate consistently each cycle." },
    { q: "Is the staff directory available on every plan?", a: "Yes — the core Staff Directory, Departments, and HR Dashboard are available from the entry-level plan, since they're needed to add staff at all. Deeper HR features (payroll, leave, ID cards) are available from Essential onward." },
  ],
  relatedPages: [
    { label: "School ERP Software", href: "/school-erp-software" },
    { label: "Pricing", href: "/pricing" },
    { label: "FAQ", href: "/faq" },
  ],
};

export default function Page() {
  return <ServiceLandingPage data={data} />;
}
