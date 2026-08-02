import type { Metadata } from "next";
import { ServiceLandingPage, type ServiceLandingData } from "../_components/service-landing-template";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "School Mobile App for Staff, Students & Parents",
  description: "ShikshaMatrix gives every school three dedicated mobile apps — for staff, students, and parents — not one generic app trying to serve everyone.",
  alternates: { canonical: "/school-mobile-app" },
};

const data: ServiceLandingData = {
  slug: "school-mobile-app",
  eyebrow: "Mobile App",
  h1: "Three Apps, Built for Three Very Different Users",
  subhead:
    "Most school apps try to serve staff, students, and parents from one generic interface. ShikshaMatrix gives each group its own purpose-built app instead — because a teacher marking attendance and a parent checking fee dues need completely different things.",
  problems: [
    { title: "One-size-fits-all apps feel clunky", desc: "A single app trying to serve teachers, students, and parents ends up compromising on all three." },
    { title: "Parents miss updates", desc: "Without a dedicated channel, notices and homework get lost in WhatsApp groups run informally by individual teachers." },
    { title: "Staff need quick, in-the-moment tools", desc: "Marking attendance or updating a lesson plan needs to take seconds, not require navigating a heavy admin interface." },
    { title: "Students need their own view", desc: "Homework, notes, and exam schedules are things a student should see directly, not always secondhand through a parent." },
  ],
  features: [
    { title: "Staff App", desc: "Attendance marking, lesson plans, syllabus tracking, messaging — the daily tools a teacher actually needs, in one focused app." },
    { title: "Student App", desc: "Homework, study materials, notices, exam schedules, and class communication, built for the student's own use." },
    { title: "Parent App", desc: "Attendance, fee dues with online payment, notices, and direct communication with the school — one place for everything." },
    { title: "Real-Time Sync", desc: "An attendance mark, a fee payment, or a notice appears across the right app instantly — no manual syncing." },
    { title: "Secure, Isolated Access", desc: "Each user only sees what's relevant to them and their school — nothing from other schools on the platform." },
  ],
  benefits: [
    "No compromise between what a teacher needs and what a parent needs — each gets their own app",
    "Parents and students always have an official channel for school communication",
    "Every plan — even the entry-level one — includes full access to all three apps",
    "Available on both Android and iOS",
  ],
  faqs: [
    { q: "Do parents and students use the same app?", a: "No — parents and students each have their own dedicated app, built around what they specifically need to see and do." },
    { q: "Is the mobile app included in every plan?", a: "Yes — every ShikshaMatrix plan, including the entry-level tier, includes full access to the Staff App, Student App, and Parent App." },
    { q: "Which platforms are supported?", a: "The ShikshaMatrix mobile apps are available for both Android and iOS." },
    { q: "Can parents pay fees directly from the app?", a: "Yes — the Parent App includes online fee payment alongside attendance, notices, and communication." },
  ],
  relatedPages: [
    { label: "School ERP Software", href: "/school-erp-software" },
    { label: "Download the App", href: "/download" },
    { label: "Pricing", href: "/pricing" },
  ],
};

export default function Page() {
  return <ServiceLandingPage data={data} />;
}
