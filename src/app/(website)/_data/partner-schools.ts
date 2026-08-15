// ─────────────────────────────────────────────────────────────
// partner-schools.ts — schools shown in the homepage trust/showcase
// section. THESE ARE PLACEHOLDERS — replace `name` and `city` with
// real onboarded schools, and drop a logo file for each at:
//   /public/school-logos/<id>.png   (square, transparent bg, ~200x200)
// If a logo file isn't found, the card falls back to a colored
// initial badge automatically — so it's safe to add entries here
// before the logo image exists.
// ─────────────────────────────────────────────────────────────

export interface PartnerSchool {
  id: string;        // matches the logo filename, e.g. "id" → /school-logos/id.png
  name: string;       // school display name
  city: string;       // city, state
  logo?: string;       // optional explicit override path; defaults to /school-logos/<id>.png
}

// TODO(Raghuveer): replace with your real 30–50 onboarded schools.
// Keep ~40 entries for a full showcase grid, or trim the array —
// the section lays out cleanly with anywhere from 8 to 48 entries.
export const PARTNER_SCHOOLS: PartnerSchool[] = [
  { id: "school-01", name: "School Name 1", city: "City, State" },
  { id: "school-02", name: "School Name 2", city: "City, State" },
  { id: "school-03", name: "School Name 3", city: "City, State" },
  { id: "school-04", name: "School Name 4", city: "City, State" },
  { id: "school-05", name: "School Name 5", city: "City, State" },
  { id: "school-06", name: "School Name 6", city: "City, State" },
  { id: "school-07", name: "School Name 7", city: "City, State" },
  { id: "school-08", name: "School Name 8", city: "City, State" },
];
