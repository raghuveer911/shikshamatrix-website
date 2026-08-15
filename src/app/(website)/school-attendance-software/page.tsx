import type { Metadata } from "next";
import { ServiceLandingPage } from "../_components/service-landing-template";
import { schoolAttendanceSoftwareData } from "../_data/school-attendance-software";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "School Attendance Management Software",
  description: "Mark attendance digitally in seconds, notify parents automatically, and get real-time attendance reports — with ShikshaMatrix's school attendance software.",
  alternates: { canonical: "/school-attendance-software" },
};

export default function Page() {
  return <ServiceLandingPage data={schoolAttendanceSoftwareData} />;
}
