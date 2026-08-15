// ─────────────────────────────────────────────────────────────
// hero-modules.ts — single source of truth for the floating
// "module" nodes shown in the hero (3D scene + mobile fallback),
// their icon, color, and the dedicated page each one opens.
// ─────────────────────────────────────────────────────────────

export const ICON_PATHS: Record<string, string> = {
  admissions: "M12 3 2 8l10 5 10-5-10-5Zm-6 7.5V15c0 1.7 2.7 3 6 3s6-1.3 6-3v-4.5",
  attendance: "M4 12.5 9.5 18 20 6.5",
  fees: "M6 4h12M6 8h12M8 8c6 0 6 4 2 5l6 7",
  academics: "M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5V5.5ZM20 18H6.5",
  messages: "M21 12a8 8 0 0 1-8 8H4l2-3.2A8 8 0 1 1 21 12Z",
  transport: "M5 17h14M5 17a2 2 0 1 0 4 0M15 17a2 2 0 1 0 4 0M4 17V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10M4 11h16",
  exams: "M8 3h8l4 4v14H4V5a2 2 0 0 1 2-2h2Zm0 9h8M8 16h5",
  hr: "M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5 9a5 5 0 0 1 10 0M17 8a3 3 0 1 1-2 5.2M15 20a5 5 0 0 1 6-4.9",
};

// Where each floating module should take the visitor when clicked/tapped.
export const MODULE_LINKS: Record<string, string> = {
  admissions: "/student-admission-software",
  attendance: "/school-attendance-software",
  fees: "/school-fee-management-software",
  academics: "/school-report-card-software",
  messages: "/school-communication-software",
  transport: "/school-transport-management-software",
  exams: "/online-examination-software",
  hr: "/school-hr-payroll-software",
};

export const MODULES = [
  { key: "admissions", label: "Admissions", color: "#6366f1", angle: 0 },
  { key: "attendance", label: "Attendance", color: "#059669", angle: 45 },
  { key: "fees", label: "Fees", color: "#d97706", angle: 90 },
  { key: "academics", label: "Academics", color: "#7c3aed", angle: 135 },
  { key: "messages", label: "Messages", color: "#0284c7", angle: 180 },
  { key: "transport", label: "Transport", color: "#ea580c", angle: 225 },
  { key: "exams", label: "Exams", color: "#db2777", angle: 270 },
  { key: "hr", label: "HR", color: "#16a34a", angle: 315 },
] as const;
