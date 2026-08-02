import type { Metadata } from "next";
import { ServiceLandingPage, type ServiceLandingData } from "../_components/service-landing-template";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "School Fee Management Software",
  description: "Collect fees on time, track dues automatically, and give parents an easy way to pay — online or offline — with ShikshaMatrix's school fee management software.",
  alternates: { canonical: "/school-fee-management-software" },
};

const data: ServiceLandingData = {
  slug: "school-fee-management-software",
  eyebrow: "Fee Management Software",
  h1: "Stop Chasing Fee Dues Every Month",
  subhead:
    "Late fees, follow-up calls, and manually reconciled ledgers eat up staff time every single month. ShikshaMatrix automates the whole fee collection cycle — from due reminders to digital receipts.",
  problems: [
    { title: "Manual due tracking", desc: "Staff manually check who's paid and who hasn't, class by class, month after month." },
    { title: "Late payments hurt cash flow", desc: "Without automatic reminders, dues quietly pile up until someone notices." },
    { title: "Follow-up calls take hours", desc: "Front-office staff spend hours every week calling parents about pending fees." },
    { title: "Paper receipts get lost", desc: "Manual receipt books are easy to misplace and hard to audit later." },
  ],
  features: [
    { title: "Flexible Fee Structures", desc: "Set up fee heads, installments, and class-wise or student-wise plans." },
    { title: "Online + Offline Collection", desc: "Accept online payments alongside cash/cheque, all tracked in one place." },
    { title: "Automatic Due Reminders", desc: "Parents get notified automatically as due dates approach — no manual calls needed." },
    { title: "Digital Receipts", desc: "Every payment generates an instant, auditable digital receipt." },
    { title: "Discounts & Scholarships", desc: "Apply discounts, scholarships, and fines directly against a student's fee plan." },
    { title: "Real-Time Dues Dashboard", desc: "See exactly who owes what, updated the moment a payment is made." },
  ],
  benefits: [
    "Reduces the manual follow-up work that eats into staff time every month",
    "Parents always know exactly what's due and can pay without visiting the office",
    "Every payment is receipted and traceable — nothing depends on a physical register",
    "Works alongside the rest of ShikshaMatrix — fee data connects to the student's full record",
  ],
  faqs: [
    { q: "Can parents pay fees online through ShikshaMatrix?", a: "Yes — online fee payment is built into the platform, alongside support for tracking offline (cash/cheque) payments." },
    { q: "Can we set up different fee plans for different classes?", a: "Yes — fee structures can be configured per class, per academic year, with installments, discounts, and scholarships applied where needed." },
    { q: "Do parents get reminded automatically about due fees?", a: "Yes — due-date reminders go out automatically, without staff needing to call individually." },
    { q: "Is there a record of every payment made?", a: "Every payment generates a digital receipt and is recorded in the student's fee ledger, so nothing depends on a paper register." },
  ],
  relatedPages: [
    { label: "School ERP Software", href: "/school-erp-software" },
    { label: "Attendance Software", href: "/school-attendance-software" },
    { label: "Pricing", href: "/pricing" },
    { label: "Compare to Traditional Management", href: "/compare" },
  ],
};

export default function Page() {
  return <ServiceLandingPage data={data} />;
}
