import type { Metadata } from "next";
import { ServiceLandingPage } from "../_components/service-landing-template";
import { onlineExaminationSoftwareData } from "../_data/online-examination-software";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Online Examination Software for Schools",
  description: "Build a reusable question bank, run online exams, and track results — connected to the same student records as the rest of ShikshaMatrix.",
  alternates: { canonical: "/online-examination-software" },
};

export default function Page() {
  return <ServiceLandingPage data={onlineExaminationSoftwareData} />;
}
