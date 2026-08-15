import type { Metadata } from "next";
import { ServiceLandingPage } from "../_components/service-landing-template";
import { schoolAccountingSoftwareData } from "../_data/school-accounting-software";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "School Accounting Software",
  description: "Track income, expenses, and financial reports for your school in one connected system — not a separate accounting file disconnected from fee collection.",
  alternates: { canonical: "/school-accounting-software" },
};

export default function Page() {
  return <ServiceLandingPage data={schoolAccountingSoftwareData} />;
}
