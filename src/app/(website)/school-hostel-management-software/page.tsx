import type { Metadata } from "next";
import { ServiceLandingPage } from "../_components/service-landing-template";
import { hostelData } from "../_data/hostel";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "School Hostel Management Software",
  description: "Manage hostel room allocation, resident records, and hostel fees — connected to the same student record as the rest of your school.",
  alternates: { canonical: "/school-hostel-management-software" },
};

export default function Page() {
  return <ServiceLandingPage data={hostelData} />;
}

