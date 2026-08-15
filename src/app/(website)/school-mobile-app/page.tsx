import type { Metadata } from "next";
import { ServiceLandingPage } from "../_components/service-landing-template";
import { schoolMobileAppData } from "../_data/school-mobile-app";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "School Mobile App for Staff, Students & Parents",
  description: "ShikshaMatrix gives every school three dedicated mobile apps — for staff, students, and parents — not one generic app trying to serve everyone.",
  alternates: { canonical: "/school-mobile-app" },
};

export default function Page() {
  return <ServiceLandingPage data={schoolMobileAppData} />;
}
