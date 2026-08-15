import type { Metadata } from "next";
import { ServiceLandingPage } from "../_components/service-landing-template";
import { schoolWebsiteBuilderData } from "../_data/school-website-builder";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Free School Website Builder — Built Into Your ERP",
  description: "Every ShikshaMatrix school gets its own public website — hero, about, admissions, gallery, notices, and an enquiry form — managed from the same admin panel, no separate website needed.",
  alternates: { canonical: "/school-website-builder" },
};

export default function Page() {
  return <ServiceLandingPage data={schoolWebsiteBuilderData} />;
}
