import type { Metadata } from "next";
import { ServiceLandingPage } from "../_components/service-landing-template";
import { schoolCommunicationSoftwareData } from "../_data/school-communication-software";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "School Communication Software — Notices, Messaging & Parent Updates",
  description: "Replace scattered WhatsApp groups and printed circulars with one official communication channel between school, staff, students, and parents.",
  alternates: { canonical: "/school-communication-software" },
};

export default function Page() {
  return <ServiceLandingPage data={schoolCommunicationSoftwareData} />;
}
