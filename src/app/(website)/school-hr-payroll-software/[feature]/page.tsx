import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FeatureDetailPage } from "../../_components/service-landing-template";
import { schoolHrPayrollSoftwareData } from "../../_data/school-hr-payroll-software";

export const dynamic = "force-dynamic";

function findFeature(slug: string) {
  return schoolHrPayrollSoftwareData.features.find((f) => f.slug === slug);
}

export function generateStaticParams() {
  return schoolHrPayrollSoftwareData.features.filter((f) => f.slug).map((f) => ({ feature: f.slug! }));
}

export function generateMetadata({ params }: { params: { feature: string } }): Metadata {
  const feature = findFeature(params.feature);
  if (!feature) return { title: "Feature Not Found" };
  return {
    title: `${feature.title} — HR & Payroll`,
    description: feature.desc,
    alternates: { canonical: `/school-hr-payroll-software/${feature.slug}` },
  };
}

export default function Page({ params }: { params: { feature: string } }) {
  const feature = findFeature(params.feature);
  if (!feature) return notFound();
  return <FeatureDetailPage parent={schoolHrPayrollSoftwareData} feature={feature} />;
}
