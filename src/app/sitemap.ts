import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "./(website)/_data/blog-posts";
import { CASE_STUDIES } from "./(website)/_data/case-studies";
import { hostelData } from "./(website)/_data/hostel";
import { multiBranchSchoolManagementSoftwareData } from "./(website)/_data/multi-branch-school-management-software";
import { onlineExaminationSoftwareData } from "./(website)/_data/online-examination-software";
import { schoolAccountingSoftwareData } from "./(website)/_data/school-accounting-software";
import { schoolAttendanceSoftwareData } from "./(website)/_data/school-attendance-software";
import { schoolCommunicationSoftwareData } from "./(website)/_data/school-communication-software";
import { schoolErpSoftwareData } from "./(website)/_data/school-erp-software";
import { schoolFeeManagementSoftwareData } from "./(website)/_data/school-fee-management-software";
import { schoolHrPayrollSoftwareData } from "./(website)/_data/school-hr-payroll-software";
import { schoolInventoryManagementSoftwareData } from "./(website)/_data/school-inventory-management-software";
import { schoolLibraryManagementSoftwareData } from "./(website)/_data/school-library-management-software";
import { schoolMobileAppData } from "./(website)/_data/school-mobile-app";
import { schoolReportCardSoftwareData } from "./(website)/_data/school-report-card-software";
import { schoolTimetableSoftwareData } from "./(website)/_data/school-timetable-software";
import { schoolTransportManagementSoftwareData } from "./(website)/_data/school-transport-management-software";
import { schoolWebsiteBuilderData } from "./(website)/_data/school-website-builder";
import { studentAdmissionSoftwareData } from "./(website)/_data/student-admission-software";
import type { ServiceLandingData } from "./(website)/_components/service-landing-template";

const BASE_URL = "https://www.shikshamatrix.in";

// Every service module with per-feature sub-pages — used to auto-generate
// their /<module>/<feature> sitemap entries below. Add a new module here
// and its feature pages are picked up automatically.
const SERVICE_MODULES: ServiceLandingData[] = [
  hostelData,
  multiBranchSchoolManagementSoftwareData,
  onlineExaminationSoftwareData,
  schoolAccountingSoftwareData,
  schoolAttendanceSoftwareData,
  schoolCommunicationSoftwareData,
  schoolErpSoftwareData,
  schoolFeeManagementSoftwareData,
  schoolHrPayrollSoftwareData,
  schoolInventoryManagementSoftwareData,
  schoolLibraryManagementSoftwareData,
  schoolMobileAppData,
  schoolReportCardSoftwareData,
  schoolTimetableSoftwareData,
  schoolTransportManagementSoftwareData,
  schoolWebsiteBuilderData,
  studentAdmissionSoftwareData,
];

// Next.js serves this automatically at /sitemap.xml.
// Add a new entry here every time a new indexable page ships —
// service landing pages, blog posts, comparison pages, etc.
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/download`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/pricing`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/faq`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/compare`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/resources`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/skill-development`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/school-erp-software`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/school-fee-management-software`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/school-attendance-software`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/school-mobile-app`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/school-communication-software`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/student-admission-software`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/school-hr-payroll-software`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/school-website-builder`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/school-transport-management-software`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/school-library-management-software`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/online-examination-software`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/school-hostel-management-software`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/school-timetable-software`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/school-report-card-software`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/school-accounting-software`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/multi-branch-school-management-software`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/school-inventory-management-software`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/case-studies`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
  ];

  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const caseStudyRoutes: MetadataRoute.Sitemap = CASE_STUDIES.map((cs) => ({
    url: `${BASE_URL}/case-studies/${cs.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Auto-generated: every per-feature deep-dive page (e.g.
  // /school-fee-management-software/digital-receipts) across every
  // service module — new modules/features are picked up automatically.
  const featureRoutes: MetadataRoute.Sitemap = SERVICE_MODULES.flatMap((mod) =>
    mod.features
      .filter((f) => f.slug)
      .map((f) => ({
        url: `${BASE_URL}/${mod.slug}/${f.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.6,
      }))
  );

  // NOTE: /schools/[slug] (each school's own public website) is
  // intentionally NOT included — those pages belong to individual
  // schools, not to ShikshaMatrix's own SEO surface, and there's no
  // public endpoint here to enumerate all active school slugs safely.

  return [...staticRoutes, ...blogRoutes, ...caseStudyRoutes, ...featureRoutes];
}
