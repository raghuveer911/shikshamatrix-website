import type { Metadata } from "next";
import { ServiceLandingPage, type ServiceLandingData } from "../_components/service-landing-template";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "School Communication Software — Notices, Messaging & Parent Updates",
  description: "Replace scattered WhatsApp groups and printed circulars with one official communication channel between school, staff, students, and parents.",
  alternates: { canonical: "/school-communication-software" },
};

const data: ServiceLandingData = {
  slug: "school-communication-software",
  eyebrow: "Communication",
  h1: "One Official Channel, Instead of a Dozen WhatsApp Groups",
  subhead:
    "Circulars get lost in school bags. Important updates get buried in parent WhatsApp groups nobody officially manages. ShikshaMatrix gives every school one official, trackable channel for every kind of communication.",
  problems: [
    { title: "Printed circulars get lost", desc: "A notice sent home on paper depends entirely on it surviving the trip in a student's bag." },
    { title: "WhatsApp groups aren't official", desc: "Informal parent groups run by individual teachers aren't a reliable or auditable communication channel." },
    { title: "No way to confirm a message was seen", desc: "There's no way to know if an important update actually reached parents." },
    { title: "Urgent updates move too slowly", desc: "A last-minute holiday or schedule change needs to reach every parent immediately, not whenever someone gets around to a phone call." },
  ],
  features: [
    { title: "Notice Board", desc: "Publish notices instantly to students and parents, with read tracking." },
    { title: "Direct Messaging", desc: "Staff, students, and parents can message directly within the platform." },
    { title: "Targeted Announcements", desc: "Send updates to a specific class, section, or the whole school." },
    { title: "Public Notice Sharing", desc: "Schools can choose which notices also appear on their public ShikshaMatrix website, for prospective parents to see." },
  ],
  benefits: [
    "One official channel replaces informal, teacher-run WhatsApp groups",
    "Notices reach every parent through the Parent App, not just whoever remembers a printed circular",
    "Urgent updates go out instantly, to the exact audience that needs them",
    "Communication stays within the same system as attendance, fees, and academics",
  ],
  faqs: [
    { q: "How do parents receive school notices?", a: "Notices are published through the school's Notice Board and appear directly in the Parent App." },
    { q: "Can we send an update to just one class?", a: "Yes — announcements can be targeted to a specific class or section, or sent school-wide." },
    { q: "Is there a record of what was sent and when?", a: "Yes — notices and messages are recorded in the system, unlike informal WhatsApp groups." },
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
