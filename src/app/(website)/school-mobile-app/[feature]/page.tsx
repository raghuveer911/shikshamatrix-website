import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FeatureDetailPage } from "../../_components/service-landing-template";
import { schoolMobileAppData } from "../../_data/school-mobile-app";

export const dynamic = "force-dynamic";

function findFeature(slug: string) {
  return schoolMobileAppData.features.find((f) => f.slug === slug);
}

export function generateStaticParams() {
  return schoolMobileAppData.features.filter((f) => f.slug).map((f) => ({ feature: f.slug! }));
}

export function generateMetadata({ params }: { params: { feature: string } }): Metadata {
  const feature = findFeature(params.feature);
  if (!feature) return { title: "Feature Not Found" };
  return {
    title: `${feature.title} — Mobile App`,
    description: feature.desc,
    alternates: { canonical: `/school-mobile-app/${feature.slug}` },
  };
}

export default function Page({ params }: { params: { feature: string } }) {
  const feature = findFeature(params.feature);
  if (!feature) return notFound();
  return <FeatureDetailPage parent={schoolMobileAppData} feature={feature} />;
}
