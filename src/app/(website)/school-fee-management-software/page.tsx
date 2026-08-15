import type { Metadata } from "next";
import { ServiceLandingPage } from "../_components/service-landing-template";
import { schoolFeeManagementSoftwareData } from "../_data/school-fee-management-software";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "School Fee Management Software",
  description: "Collect fees on time, track dues automatically, and give parents an easy way to pay — online or offline — with ShikshaMatrix's school fee management software.",
  alternates: { canonical: "/school-fee-management-software" },
};

export default function Page() {
  return <ServiceLandingPage data={schoolFeeManagementSoftwareData} />;
}
