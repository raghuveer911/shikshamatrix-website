import type { Metadata } from "next";
import { ServiceLandingPage } from "../_components/service-landing-template";
import { schoolReportCardSoftwareData } from "../_data/school-report-card-software";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "School Report Card & Result Management Software",
  description: "Generate report cards directly from exam results and attendance data — no manual compilation, no re-typing marks across templates.",
  alternates: { canonical: "/school-report-card-software" },
};

export default function Page() {
  return <ServiceLandingPage data={schoolReportCardSoftwareData} />;
}
