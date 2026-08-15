import type { Metadata } from "next";
import { ServiceLandingPage } from "../_components/service-landing-template";
import { schoolTimetableSoftwareData } from "../_data/school-timetable-software";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "School Timetable Management Software",
  description: "Build and share class timetables digitally — visible instantly to teachers and students, with no reprinting when something changes.",
  alternates: { canonical: "/school-timetable-software" },
};

export default function Page() {
  return <ServiceLandingPage data={schoolTimetableSoftwareData} />;
}
