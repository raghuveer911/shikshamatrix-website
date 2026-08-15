import type { Metadata } from "next";
import { ServiceLandingPage } from "../_components/service-landing-template";
import { schoolLibraryManagementSoftwareData } from "../_data/school-library-management-software";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "School Library Management Software",
  description: "Track book issues, returns, and your digital library catalog — connected to student records, not a separate register.",
  alternates: { canonical: "/school-library-management-software" },
};

export default function Page() {
  return <ServiceLandingPage data={schoolLibraryManagementSoftwareData} />;
}
