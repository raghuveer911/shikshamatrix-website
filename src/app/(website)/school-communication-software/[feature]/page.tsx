import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FeatureDetailPage } from "../../_components/service-landing-template";
import { schoolCommunicationSoftwareData } from "../../_data/school-communication-software";

export const dynamic = "force-dynamic";

function findFeature(slug: string) {
  return schoolCommunicationSoftwareData.features.find((f) => f.slug === slug);
}

export function generateStaticParams() {
  return schoolCommunicationSoftwareData.features.filter((f) => f.slug).map((f) => ({ feature: f.slug! }));
}

export function generateMetadata({ params }: { params: { feature: string } }): Metadata {
  const feature = findFeature(params.feature);
  if (!feature) return { title: "Feature Not Found" };
  return {
    title: `${feature.title} — Communication`,
    description: feature.desc,
    alternates: { canonical: `/school-communication-software/${feature.slug}` },
  };
}

export default function Page({ params }: { params: { feature: string } }) {
  const feature = findFeature(params.feature);
  if (!feature) return notFound();
  return <FeatureDetailPage parent={schoolCommunicationSoftwareData} feature={feature} />;
}
