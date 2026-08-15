import type { Metadata } from "next";
import { ServiceLandingPage } from "../_components/service-landing-template";
import { multiBranchSchoolManagementSoftwareData } from "../_data/multi-branch-school-management-software";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Multi-Branch School Management Software",
  description: "Running more than one school? ShikshaMatrix keeps each branch's data properly isolated while giving your group a consistent system across all of them.",
  alternates: { canonical: "/multi-branch-school-management-software" },
};

export default function Page() {
  return <ServiceLandingPage data={multiBranchSchoolManagementSoftwareData} />;
}
