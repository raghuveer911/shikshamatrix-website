import type { Metadata } from "next";
import { ServiceLandingPage } from "../_components/service-landing-template";
import { schoolErpSoftwareData } from "../_data/school-erp-software";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "School ERP Software for Indian Schools",
  description: "ShikshaMatrix is an all-in-one School ERP software — admissions, attendance, fee collection, academics, HR, communication, transport, hostel and library, in one connected platform.",
  alternates: { canonical: "/school-erp-software" },
};

export default function Page() {
  return <ServiceLandingPage data={schoolErpSoftwareData} />;
}
