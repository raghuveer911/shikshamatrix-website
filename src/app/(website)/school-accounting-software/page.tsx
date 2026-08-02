import type { Metadata } from "next";
import { ServiceLandingPage, type ServiceLandingData } from "../_components/service-landing-template";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "School Accounting Software",
  description: "Track income, expenses, and financial reports for your school in one connected system — not a separate accounting file disconnected from fee collection.",
  alternates: { canonical: "/school-accounting-software" },
};

const data: ServiceLandingData = {
  slug: "school-accounting-software",
  eyebrow: "Accounting",
  h1: "School Finances, Not Just Fee Collection",
  subhead:
    "Fee collection is only part of a school's finances — there's also staff payroll, vendor payments, and day-to-day expenses. ShikshaMatrix connects fee income with the school's broader financial picture instead of tracking them separately.",
  problems: [
    { title: "Fee income and expenses tracked separately", desc: "Fee collection systems and expense tracking often live in completely different tools, making a true financial picture hard to see." },
    { title: "Manual reconciliation at month-end", desc: "Bringing income and expense records together for a monthly report takes manual effort." },
    { title: "Limited visibility for school leadership", desc: "It's hard for management to see cash flow trends without compiling reports from multiple sources." },
  ],
  features: [
    { title: "Income & Expense Tracking", desc: "Record school expenses alongside fee income in the same system." },
    { title: "Financial Reports", desc: "Generate financial summaries without manually compiling data from separate sources." },
    { title: "Connected to Fee Collection", desc: "Fee income feeds directly into the school's financial records, without manual re-entry." },
  ],
  benefits: [
    "Fee income and school expenses live in one connected financial picture",
    "Less manual reconciliation work at month-end",
    "Better visibility for school leadership into overall cash flow",
  ],
  faqs: [
    { q: "Does fee income automatically feed into accounting reports?", a: "Yes — fee collection connects directly to the school's broader financial records, without needing manual re-entry." },
  ],
  relatedPages: [
    { label: "Fee Management Software", href: "/school-fee-management-software" },
    { label: "School ERP Software", href: "/school-erp-software" },
    { label: "Pricing", href: "/pricing" },
  ],
};

export default function Page() {
  return <ServiceLandingPage data={data} />;
}
