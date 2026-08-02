// ─────────────────────────────────────────────────────────────
// Case studies — ONLY real schools, ONLY with their permission to
// be featured publicly, ONLY with facts/quotes they've actually
// confirmed. Never fabricate a number or a quote here — a fake
// testimonial is false advertising and destroys trust the moment
// a prospective school checks with the featured school directly.
// ─────────────────────────────────────────────────────────────
export interface CaseStudy {
  slug: string;
  schoolName: string;
  location: string;        // city, state
  board: string;           // CBSE / RBSE / ICSE etc.
  studentCount: string;    // e.g. "80+ students" — round/approximate is fine
  logoUrl?: string;
  summary: string;         // 1-2 sentence teaser for the listing page
  challenge: string[];     // what the school's situation was before
  solution: string[];      // what changed with ShikshaMatrix
  results: { metric: string; label: string }[]; // ONLY real, confirmed numbers
  quote?: { text: string; author: string; role: string };
}

export const CASE_STUDIES: CaseStudy[] = [
  // Add real, permission-confirmed case studies here.
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
