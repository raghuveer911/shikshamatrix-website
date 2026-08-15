import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FeatureDetailPage } from "../../_components/service-landing-template";
import { schoolTimetableSoftwareData } from "../../_data/school-timetable-software";

export const dynamic = "force-dynamic";

function findFeature(slug: string) {
  return schoolTimetableSoftwareData.features.find((f) => f.slug === slug);
}

export function generateStaticParams() {
  return schoolTimetableSoftwareData.features.filter((f) => f.slug).map((f) => ({ feature: f.slug! }));
}

export function generateMetadata({ params }: { params: { feature: string } }): Metadata {
  const feature = findFeature(params.feature);
  if (!feature) return { title: "Feature Not Found" };
  return {
    title: `${feature.title} — Timetable`,
    description: feature.desc,
    alternates: { canonical: `/school-timetable-software/${feature.slug}` },
  };
}

export default function Page({ params }: { params: { feature: string } }) {
  const feature = findFeature(params.feature);
  if (!feature) return notFound();
  return <FeatureDetailPage parent={schoolTimetableSoftwareData} feature={feature} />;
}
