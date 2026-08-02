import type { Metadata } from "next";
import { ServiceLandingPage, type ServiceLandingData } from "../_components/service-landing-template";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "School Inventory Management Software",
  description: "Track lab equipment, sports gear, stationery, and other school assets — with purchase requests and stock levels in one place.",
  alternates: { canonical: "/school-inventory-management-software" },
};

const data: ServiceLandingData = {
  slug: "school-inventory-management-software",
  eyebrow: "Inventory",
  h1: "Know What's In Stock Before You Reorder It",
  subhead:
    "Lab equipment, sports gear, and stationery are often tracked (if at all) in a notebook that only one staff member checks. ShikshaMatrix keeps school inventory and purchase requests in one visible system.",
  problems: [
    { title: "Stock levels tracked informally", desc: "Without a proper system, knowing what's actually in stock often depends on someone physically checking a storeroom." },
    { title: "Duplicate or missed purchases", desc: "Without visibility into current stock, schools risk over-ordering some items and running out of others." },
    { title: "No record of who requested what", desc: "Purchase requests made informally are hard to track or approve consistently." },
  ],
  features: [
    { title: "Stock Tracking", desc: "Track inventory levels for lab equipment, sports gear, stationery, and other assets." },
    { title: "Purchase Requests", desc: "Staff can raise purchase requests that go through a clear approval process." },
    { title: "Inventory Dashboard", desc: "See current stock levels and pending requests in one place." },
  ],
  benefits: [
    "Stock levels are visible without needing to physically check a storeroom",
    "Purchase requests are tracked and approved consistently, not handled informally",
  ],
  faqs: [
    { q: "Can staff request items through the system?", a: "Yes — staff can raise purchase requests, which go through a defined approval process rather than being handled informally." },
  ],
  relatedPages: [
    { label: "School ERP Software", href: "/school-erp-software" },
    { label: "School Accounting Software", href: "/school-accounting-software" },
    { label: "Pricing", href: "/pricing" },
  ],
};

export default function Page() {
  return <ServiceLandingPage data={data} />;
}
