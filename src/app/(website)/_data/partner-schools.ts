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
  { id: "school-01", name: "R.K International School", city: "Sojat, Rajasthan" },
  { id: "school-02", name: "Siddharth Public School", city: "Sojat, Rajasthan" },
  { id: "school-03", name: "Yash Shiksha Sansthan Senior Sec School", city: "Pali, Rajasthan" },
  { id: "school-04", name: "Humming Birds International School", city: "Kuchaman, Rajasthan" },
  { id: "school-05", name: "R.N Childran School", city: "Nagore, Rajasthan" },
  { id: "school-06", name: "Saraswati Children School", city: "Sangariya Phanta, Rajasthan" },
  { id: "school-07", name: "Gramodaya Public School", city: "Bilara, Rajasthan" },
  { id: "school-08", name: "KMMP Sr. Sec. Public School", city: "Dangiyawas, Rajasthan" },
];
