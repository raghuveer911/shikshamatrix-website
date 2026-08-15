import type { Metadata } from "next";
import { ServiceLandingPage } from "../_components/service-landing-template";
import { studentAdmissionSoftwareData } from "../_data/student-admission-software";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Student Admission Management Software",
  description: "Digital admission forms that feed directly into a student's full record — no re-typing the same data across multiple registers.",
  alternates: { canonical: "/student-admission-software" },
};

export default function Page() {
  return <ServiceLandingPage data={studentAdmissionSoftwareData} />;
}
