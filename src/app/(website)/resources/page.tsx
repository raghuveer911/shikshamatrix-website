// apps/web/src/app/(website)/resources/page.tsx
// ─────────────────────────────────────────────────────────────
// A navigation hub linking to content that already exists elsewhere
// on the site (solution pages, guides, comparison, FAQ, case
// studies) — deliberately NOT a new pile of thin pages. Per the doc:
// "Don't create 100 thin SEO pages... Google traffic isn't a moat
// by itself." This page's job is to help both visitors and search
// engines find the real content that's already there.
// ─────────────────────────────────────────────────────────────
import type { Metadata } from "next";
import Link from "next/link";
import { WebsiteNavbar, WebsiteFooter, Reveal, SectionHeading } from "../_components/website-ui";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Resources",
  description: "Guides, solution pages, comparisons and answers for schools and training organizations evaluating ShikshaMatrix.",
  alternates: { canonical: "/resources" },
};

interface ResourceLink { title: string; href: string; desc: string }
interface ResourceGroup { title: string; links: ResourceLink[] }

const GROUPS: ResourceGroup[] = [
  {
    title: "Guides",
    links: [
      { title: "How to Choose the Right School ERP Software", href: "/blog/how-to-choose-school-erp-software", desc: "A buyer's checklist for evaluating any School ERP." },
      { title: "What Is a School ERP?", href: "/blog/what-is-a-school-erp", desc: "A complete introduction for Indian schools new to the category." },
      { title: "Digital School Transformation: A Practical Roadmap", href: "/blog/digital-school-transformation-roadmap", desc: "How schools actually move from paper to digital, step by step." },
      { title: "School Attendance System Guide", href: "/blog/school-attendance-system-guide", desc: "What changes in practice when attendance goes digital." },
      { title: "Reducing Manual Work in Fee Collection", href: "/blog/reduce-manual-work-school-fee-collection", desc: "Where fee-collection workload actually goes when it's automated." },
      { title: "Parent Communication: Beyond WhatsApp Groups", href: "/blog/parent-communication-school-app-guide", desc: "Why teacher-run groups break down at scale, and what to look for instead." },
      { title: "What Is Skill Development Management Software?", href: "/blog/what-is-skill-development-management-software", desc: "A plain-language explainer of the training-center software category." },
    ],
  },
  {
    title: "School Solutions",
    links: [
      { title: "School ERP Software", href: "/school-erp-software", desc: "The full platform overview." },
      { title: "Fee Management Software", href: "/school-fee-management-software", desc: "Fee structures, online payments, dues and receipts." },
      { title: "Attendance Software", href: "/school-attendance-software", desc: "Digital attendance for students and staff." },
      { title: "HR & Payroll Software", href: "/school-hr-payroll-software", desc: "Staff records, leave, and payroll in one place." },
      { title: "Communication Software", href: "/school-communication-software", desc: "One official channel for notices, alerts and conversations." },
      { title: "Student Admission Software", href: "/student-admission-software", desc: "Digital admissions from form to full student record." },
      { title: "Transport Management Software", href: "/school-transport-management-software", desc: "Routes, vehicles and student transport assignment." },
      { title: "Hostel Management Software", href: "/school-hostel-management-software", desc: "Rooms, beds and student allocation." },
      { title: "Library Management Software", href: "/school-library-management-software", desc: "Book issue, return and digital resources." },
      { title: "Online Examination Software", href: "/online-examination-software", desc: "Secure, structured online exams." },
      { title: "Report Card Software", href: "/school-report-card-software", desc: "Configurable, board-aligned report cards." },
      { title: "Timetable Software", href: "/school-timetable-software", desc: "Period, subject and teacher scheduling." },
      { title: "Accounting Software", href: "/school-accounting-software", desc: "School-wide financial tracking." },
      { title: "Inventory Management Software", href: "/school-inventory-management-software", desc: "Assets, stock and procurement." },
      { title: "Multi-Branch Management", href: "/multi-branch-school-management-software", desc: "Running multiple campuses on one platform." },
      { title: "School Mobile App", href: "/school-mobile-app", desc: "Staff, student and parent apps." },
      { title: "School Website Builder", href: "/school-website-builder", desc: "A public website for your school, built in." },
    ],
  },
  {
    title: "Skill Development",
    links: [
      { title: "Skill OS Overview", href: "/skill-development", desc: "The planned workflow and module architecture — in active development." },
    ],
  },
  {
    title: "Decide",
    links: [
      { title: "Compare vs Traditional Management", href: "/compare", desc: "What changes moving from registers/spreadsheets to ShikshaMatrix." },
      { title: "Pricing", href: "/pricing", desc: "Economy, Essential and Professional plans." },
      { title: "FAQ", href: "/faq", desc: "Common questions from schools and training organizations." },
      { title: "Case Studies", href: "/case-studies", desc: "Real schools running on ShikshaMatrix." },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <>
      <WebsiteNavbar />
      <main className="sm-mesh min-h-screen pb-24 pt-36 lg:pt-44">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading eyebrow="Resources" title="Guides, Solutions & Answers" sub="Everything on the site, organized in one place." />
          <div className="space-y-14">
            {GROUPS.map((group, gi) => (
              <div key={group.title}>
                <h2 className="sm-display mb-5 text-lg font-bold text-[var(--sm-text)]">{group.title}</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {group.links.map((link, i) => (
                    <Reveal key={link.href} delay={gi * 40 + i * 30}>
                      <Link href={link.href} className="sm-glass sm-glass-hover block h-full rounded-2xl p-5">
                        <p className="text-sm font-semibold text-[var(--sm-text)]">{link.title}</p>
                        <p className="mt-1 text-xs leading-relaxed text-[var(--sm-muted)]">{link.desc}</p>
                      </Link>
                    </Reveal>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <WebsiteFooter />
    </>
  );
}
