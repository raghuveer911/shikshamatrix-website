// apps/web/src/app/(website)/_data/traction.ts
// ─────────────────────────────────────────────────────────────
// Single source of truth for every traction number shown on the
// site (hero badge, schools-showcase title, traction dashboard).
// Change a number here and it updates everywhere — no more
// 30+/40+-style contradictions from the same stat being hardcoded
// in three different components.
//
// RULE: every field here is a number you can actually stand behind
// if a school, investor, or journalist asks "how did you get that?"
// Leave a field as `null` rather than guess — the Traction section
// simply skips any stat that's null instead of showing a made-up 0
// or a placeholder number.
// ─────────────────────────────────────────────────────────────

export interface TractionStat {
  value: string;
  label: string;
}

export const TRACTION = {
  // Locked per Raghuveer — the number used consistently across the
  // hero badge, the schools-showcase heading, and this dashboard.
  institutions: "40+",

  // TODO(Raghuveer): fill these in with real, current numbers — or
  // leave `null` and the section below just won't render that card.
  // Round numbers are fine ("1,200+" not "1,247"); estimates are not
  // ("about 1,000+" if you're not sure of the exact figure).
  studentsManaged: null as string | null,
  staffAndTeachers: null as string | null,
  citiesOrDistricts: null as string | null,
  monthlyActiveUsagePct: null as string | null, // e.g. "68%" — % of accounts active in the last 30 days

  // These two are structurally true regardless of school count — safe
  // to keep even before the numbers above are filled in.
  appsIncluded: "4", // admin panel, staff app, student app, parent app
  statesCovered: "1", // Rajasthan — update if/when you onboard outside it
} as const;

// Assembled for the Traction dashboard section — only stats with a
// real value get rendered; nothing here is inferred or padded.
export function getTractionStats(): TractionStat[] {
  const stats: TractionStat[] = [
    { value: TRACTION.institutions, label: "Institutions onboarded" },
  ];
  if (TRACTION.studentsManaged) stats.push({ value: TRACTION.studentsManaged, label: "Students managed" });
  if (TRACTION.staffAndTeachers) stats.push({ value: TRACTION.staffAndTeachers, label: "Staff & teachers" });
  if (TRACTION.citiesOrDistricts) stats.push({ value: TRACTION.citiesOrDistricts, label: "Cities / districts" });
  if (TRACTION.monthlyActiveUsagePct) stats.push({ value: TRACTION.monthlyActiveUsagePct, label: "Monthly active usage" });
  stats.push({ value: TRACTION.appsIncluded, label: "Apps included" });
  return stats;
}
