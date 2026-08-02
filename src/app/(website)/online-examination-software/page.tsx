import type { Metadata } from "next";
import { ServiceLandingPage, type ServiceLandingData } from "../_components/service-landing-template";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Online Examination Software for Schools",
  description: "Build a reusable question bank, run online exams, and track results — connected to the same student records as the rest of ShikshaMatrix.",
  alternates: { canonical: "/online-examination-software" },
};

const data: ServiceLandingData = {
  slug: "online-examination-software",
  eyebrow: "Online Exams",
  h1: "A Question Bank Your Whole School Can Reuse",
  subhead:
    "Teachers often rebuild the same set of questions for every section they teach, or lose track of past papers entirely. ShikshaMatrix's question bank is organized by grade and subject, so it's shared across every section teaching that subject.",
  problems: [
    { title: "Questions rebuilt for every section", desc: "A teacher writing 20 questions for one section's exam often has to redo the same work for a parallel section." },
    { title: "Past papers get lost", desc: "Without a central bank, previous exams and question sets aren't easy to find or reuse." },
    { title: "Manual result compilation", desc: "Grading and compiling results by hand takes hours that could go toward teaching." },
  ],
  features: [
    { title: "Grade-Level Question Bank", desc: "Questions organized by grade and subject, chapter-wise — shared across every section, not duplicated per section." },
    { title: "Online Exam Creation", desc: "Build exams from the question bank, with multiple question types supported." },
    { title: "Automatic Grading", desc: "Objective questions are graded automatically, saving hours of manual work." },
    { title: "Result Analytics", desc: "See performance breakdowns by student, class, and question." },
  ],
  benefits: [
    "A question bank built for 'Class 5 Mathematics' is usable across every section teaching Class 5 Mathematics, not just one",
    "Automatic grading for objective questions frees up teacher time",
    "Results connect to the same student record used across the rest of the platform",
  ],
  faqs: [
    { q: "Can the same question bank be used across multiple sections of a grade?", a: "Yes — the question bank is organized at the grade + subject level specifically so it's shared across every section teaching that subject, rather than needing to be rebuilt per section." },
    { q: "Does the system grade exams automatically?", a: "Objective question types are graded automatically. Result analytics break down performance by student, class, and individual question." },
  ],
  relatedPages: [
    { label: "School ERP Software", href: "/school-erp-software" },
    { label: "Pricing", href: "/pricing" },
  ],
};

export default function Page() {
  return <ServiceLandingPage data={data} />;
}
