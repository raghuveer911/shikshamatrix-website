import type { Metadata } from "next";
import { ServiceLandingPage } from "../_components/service-landing-template";
import { schoolInventoryManagementSoftwareData } from "../_data/school-inventory-management-software";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "School Inventory Management Software",
  description: "Track lab equipment, sports gear, stationery, and other school assets — with purchase requests and stock levels in one place.",
  alternates: { canonical: "/school-inventory-management-software" },
};

export default function Page() {
  return <ServiceLandingPage data={schoolInventoryManagementSoftwareData} />;
}
