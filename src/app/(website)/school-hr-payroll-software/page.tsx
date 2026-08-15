import type { Metadata } from "next";
import { ServiceLandingPage } from "../_components/service-landing-template";
import { schoolHrPayrollSoftwareData } from "../_data/school-hr-payroll-software";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "School HR & Payroll Software",
  description: "Staff attendance, leave, payroll, and documents in one place — instead of a spreadsheet only one person understands.",
  alternates: { canonical: "/school-hr-payroll-software" },
};

export default function Page() {
  return <ServiceLandingPage data={schoolHrPayrollSoftwareData} />;
}
