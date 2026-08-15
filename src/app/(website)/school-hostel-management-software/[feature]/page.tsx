import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FeatureDetailPage } from "../../_components/service-landing-template";
import { hostelData } from "../../_data/hostel";

export const dynamic = "force-dynamic";

function findFeature(slug: string) {
  return hostelData.features.find((f) => f.slug === slug);
}

export function generateStaticParams() {
  return hostelData.features.filter((f) => f.slug).map((f) => ({ feature: f.slug! }));
}

export function generateMetadata({ params }: { params: { feature: string } }): Metadata {
  const feature = findFeature(params.feature);
  if (!feature) return { title: "Feature Not Found" };
  return {
    title: `${feature.title} — ${hostelData.eyebrow}`,
    description: feature.desc,
    alternates: { canonical: `/${hostelData.slug}/${feature.slug}` },
  };
}

export default function Page({ params }: { params: { feature: string } }) {
  const feature = findFeature(params.feature);
  if (!feature) return notFound();
  return <FeatureDetailPage parent={hostelData} feature={feature} />;
}
