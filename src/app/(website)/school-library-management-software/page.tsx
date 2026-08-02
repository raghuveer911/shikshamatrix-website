import type { Metadata } from "next";
import { ServiceLandingPage, type ServiceLandingData } from "../_components/service-landing-template";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "School Library Management Software",
  description: "Track book issues, returns, and your digital library catalog — connected to student records, not a separate register.",
  alternates: { canonical: "/school-library-management-software" },
};

const data: ServiceLandingData = {
  slug: "school-library-management-software",
  eyebrow: "Library",
  h1: "A Library Catalog That Knows Who Has What",
  subhead:
    "Book issue registers are easy to lose track of — who has which book, and for how long. ShikshaMatrix's library module connects book tracking directly to student records.",
  problems: [
    { title: "Manual issue/return registers", desc: "Tracking who currently has a book depends on a physical register being kept up to date." },
    { title: "No visibility into overdue books", desc: "Without automated tracking, overdue books are easy to lose track of entirely." },
    { title: "Digital resources managed separately", desc: "E-books and digital references often live outside the physical library's tracking system." },
  ],
  features: [
    { title: "Book Issue & Return", desc: "Track which student currently has which book, available on every plan." },
    { title: "Digital Library", desc: "Manage e-books and digital reference materials alongside the physical catalog (Essential and above)." },
    { title: "Reservations", desc: "Students can reserve a book that's currently checked out." },
    { title: "Inventory & Analytics", desc: "Track the full library inventory and usage patterns (Professional)." },
  ],
  benefits: [
    "Book tracking connects to the same student records as the rest of the platform",
    "Feature depth scales with your plan — from simple issue/return up to full inventory analytics",
    "No separate system needed for digital resources",
  ],
  faqs: [
    { q: "Is library management included in the entry-level plan?", a: "Basic Book Issue/Return is available from the entry-level Economy plan. Digital Library and Reservations are available from Essential onward, with full Inventory Tracking and Analytics on Professional." },
    { q: "Can we manage e-books alongside physical books?", a: "Yes — the Digital Library feature lets you manage e-books and digital references alongside the physical catalog." },
  ],
  relatedPages: [
    { label: "School ERP Software", href: "/school-erp-software" },
    { label: "Pricing", href: "/pricing" },
  ],
};

export default function Page() {
  return <ServiceLandingPage data={data} />;
}
