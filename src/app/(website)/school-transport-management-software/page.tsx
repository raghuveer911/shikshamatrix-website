import type { Metadata } from "next";
import { ServiceLandingPage } from "../_components/service-landing-template";
import { schoolTransportManagementSoftwareData } from "../_data/school-transport-management-software";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "School Transport Management Software",
  description: "Manage routes, vehicles, and student transport assignments in one place, connected to the rest of your school's records.",
  alternates: { canonical: "/school-transport-management-software" },
};

export default function Page() {
  return <ServiceLandingPage data={schoolTransportManagementSoftwareData} />;
}
