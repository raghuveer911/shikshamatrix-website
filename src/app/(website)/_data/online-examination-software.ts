import type { ServiceLandingData } from "../_components/service-landing-template";

// ─────────────────────────────────────────────────────────────
// Image convention for this module — drop files into:
//   public/features/exams/hero.jpg   (module hero, ~1600x800)
//   public/features/exams/grade-level-question-bank.jpg (~800x600)
//   public/features/exams/online-exam-creation.jpg      (~800x600)
//   public/features/exams/automatic-grading.jpg         (~800x600)
//   public/features/exams/result-analytics.jpg          (~800x600)
// Until a file exists at a path, that spot shows a soft placeholder
// tile automatically — nothing breaks, nothing needs code changes.
// ─────────────────────────────────────────────────────────────

export const onlineExaminationSoftwareData: ServiceLandingData = {
  "slug": "online-examination-software",
  "eyebrow": "Online Exams",
  "h1": "A Question Bank Your Whole School Can Reuse",
  "subhead": "Teachers often rebuild the same set of questions for every section they teach, or lose track of past papers entirely. ShikshaMatrix's question bank is organized by grade and subject, so it's shared across every section teaching that subject.",
  "problems": [
    {
      "title": "Questions rebuilt for every section",
      "desc": "A teacher writing 20 questions for one section's exam often has to redo the same work for a parallel section."
    },
    {
      "title": "Past papers get lost",
      "desc": "Without a central bank, previous exams and question sets aren't easy to find or reuse."
    },
    {
      "title": "Manual result compilation",
      "desc": "Grading and compiling results by hand takes hours that could go toward teaching."
    }
  ],
  "features": [
    {
      "title": "Grade-Level Question Bank",
      "desc": "Questions organized by grade and subject, chapter-wise — shared across every section, not duplicated per section.",
      "slug": "grade-level-question-bank",
      "image": "/features/exams/grade-level-question-bank.jpg",
      "bullets": [
        "Questions organized by grade and subject, chapter-wise — shared across every section, not duplicated per section.",
        "A question bank built for 'Class 5 Mathematics' is usable across every section teaching Class 5 Mathematics, not just one",
        "Included as part of ShikshaMatrix's connected platform — not a bolt-on tool."
      ]
    },
    {
      "title": "Online Exam Creation",
      "desc": "Build exams from the question bank, with multiple question types supported.",
      "slug": "online-exam-creation",
      "image": "/features/exams/online-exam-creation.jpg",
      "bullets": [
        "Build exams from the question bank, with multiple question types supported.",
        "Automatic grading for objective questions frees up teacher time",
        "Included as part of ShikshaMatrix's connected platform — not a bolt-on tool."
      ]
    },
    {
      "title": "Automatic Grading",
      "desc": "Objective questions are graded automatically, saving hours of manual work.",
      "slug": "automatic-grading",
      "image": "/features/exams/automatic-grading.jpg",
      "bullets": [
        "Objective questions are graded automatically, saving hours of manual work.",
        "Results connect to the same student record used across the rest of the platform",
        "Included as part of ShikshaMatrix's connected platform — not a bolt-on tool."
      ]
    },
    {
      "title": "Result Analytics",
      "desc": "See performance breakdowns by student, class, and question.",
      "slug": "result-analytics",
      "image": "/features/exams/result-analytics.jpg",
      "bullets": [
        "See performance breakdowns by student, class, and question.",
        "A question bank built for 'Class 5 Mathematics' is usable across every section teaching Class 5 Mathematics, not just one",
        "Included as part of ShikshaMatrix's connected platform — not a bolt-on tool."
      ]
    }
  ],
  "benefits": [
    "A question bank built for 'Class 5 Mathematics' is usable across every section teaching Class 5 Mathematics, not just one",
    "Automatic grading for objective questions frees up teacher time",
    "Results connect to the same student record used across the rest of the platform"
  ],
  "faqs": [
    {
      "q": "Can the same question bank be used across multiple sections of a grade?",
      "a": "Yes — the question bank is organized at the grade + subject level specifically so it's shared across every section teaching that subject, rather than needing to be rebuilt per section."
    },
    {
      "q": "Does the system grade exams automatically?",
      "a": "Objective question types are graded automatically. Result analytics break down performance by student, class, and individual question."
    }
  ],
  "relatedPages": [
    {
      "label": "School ERP Software",
      "href": "/school-erp-software"
    },
    {
      "label": "Pricing",
      "href": "/pricing"
    }
  ],
  "heroImage": "/features/exams/hero.jpg"
};
