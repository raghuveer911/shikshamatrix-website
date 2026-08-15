import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FeatureDetailPage } from "../../_components/service-landing-template";
import { schoolAttendanceSoftwareData } from "../../_data/school-attendance-software";

export const dynamic = "force-dynamic";

function findFeature(slug: string) {
  return schoolAttendanceSoftwareData.features.find((f) => f.slug === slug);
}

export function generateStaticParams() {
  return schoolAttendanceSoftwareData.features.filter((f) => f.slug).map((f) => ({ feature: f.slug! }));
}

export function generateMetadata({ params }: { params: { feature: string } }): Metadata {
  const feature = findFeature(params.feature);
  if (!feature) return { title: "Feature Not Found" };
  return {
    title: `${feature.title} — Attendance Software`,
    description: feature.desc,
    alternates: { canonical: `/school-attendance-software/${feature.slug}` },
  };
}

export default function Page({ params }: { params: { feature: string } }) {
  const feature = findFeature(params.feature);
  if (!feature) return notFound();
  return <FeatureDetailPage parent={schoolAttendanceSoftwareData} feature={feature} />;
}
