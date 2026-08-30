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
  /** What they run on ShikshaMatrix — keep this to modules every onboarded
   * school genuinely gets (core ERP), not a per-school claim you can't back
   * up. Only add something more specific (e.g. "Hostel") once you've
   * actually confirmed that school uses it. */
  modules?: string[];
}

const CORE_MODULES = ["Admissions", "Fees", "Attendance", "Communication"];

// TODO(Raghuveer): this list currently has your 8 confirmed onboarded
// schools. The homepage headline elsewhere says "40+" — if that's the
// real, current count, add the other 30+ real schools here too (with
// their real name/city) so the showcase section and the claim actually
// match. Until then, this file — not the headline number — is the
// source of truth for which schools are named/shown individually.
export const PARTNER_SCHOOLS: PartnerSchool[] = [
  { id: "school-01", name: "R.K International School", city: "Sojat, Rajasthan", modules: CORE_MODULES },
  { id: "school-02", name: "Siddharth Public School", city: "Sojat, Rajasthan", modules: CORE_MODULES },
  { id: "school-03", name: "Yash Shiksha Sansthan Senior Sec School", city: "Pali, Rajasthan", modules: CORE_MODULES },
  { id: "school-04", name: "Humming Birds International School", city: "Kuchaman, Rajasthan", modules: CORE_MODULES },
  { id: "school-05", name: "R.N Childran School", city: "Nagore, Rajasthan", modules: CORE_MODULES },
  { id: "school-06", name: "Saraswati Children School", city: "Sangariya Phanta, Rajasthan", modules: CORE_MODULES },
  { id: "school-07", name: "Gramodaya Public School", city: "Bilara, Rajasthan", modules: CORE_MODULES },
  { id: "school-08", name: "KMMP Sr. Sec. Public School", city: "Dangiyawas, Rajasthan", modules: CORE_MODULES },
];
