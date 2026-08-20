"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { APP_LINKS } from "./website-ui";

// TODO(Raghuveer): replace with your real WhatsApp business number and phone number.
const WHATSAPP_NUMBER = "+917877832549"; // digits only, country code first, no '+'
const PHONE_NUMBER = "+917877832549";

const WHATSAPP_ICON = (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.51 2 12.05 2Zm5.8 14.02c-.24.68-1.4 1.3-1.93 1.36-.5.06-1.12.09-1.8-.11-.42-.13-.95-.3-1.64-.6-2.88-1.24-4.76-4.15-4.9-4.34-.14-.19-1.17-1.55-1.17-2.96 0-1.41.74-2.1 1-2.39.26-.28.57-.35.76-.35h.55c.18 0 .42-.07.65.5.24.58.81 2 .88 2.15.07.14.12.31.02.5-.1.19-.15.31-.29.48-.14.17-.3.38-.43.51-.14.14-.29.29-.13.57.17.28.75 1.23 1.6 2 1.1.98 2.03 1.28 2.31 1.42.28.14.44.12.6-.07.17-.19.71-.83.9-1.11.19-.28.38-.24.63-.14.26.1 1.65.78 1.93.92.28.14.47.21.54.33.07.12.07.68-.17 1.36Z"/></svg>
);
const PHONE_ICON = (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>
);
const REGISTER_ICON = (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 11 19-9-9 19-2-8-8-2Z"/></svg>
);
const MAIL_ICON = (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg>
);

const ACTIONS = [
  {
    label: "WhatsApp",
    href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I'd like to know more about ShikshaMatrix.")}`,
    bg: "bg-emerald-500 hover:bg-emerald-600",
    external: true,
    icon: WHATSAPP_ICON,
  },
  {
    label: "Register",
    href: APP_LINKS.register,
    bg: "bg-indigo-500 hover:bg-indigo-600",
    external: false,
    icon: REGISTER_ICON,
  },
  {
    label: "Call Us",
    href: `tel:${PHONE_NUMBER}`,
    bg: "bg-sky-500 hover:bg-sky-600",
    external: false,
    icon: PHONE_ICON,
  },
  {
    label: "Email",
    href: "mailto:info@shikshamatrix.in",
    bg: "bg-rose-500 hover:bg-rose-600",
    external: false,
    icon: MAIL_ICON,
  },
];

// ShikshaMatrix's own contact bar — for the main marketing site only.
// A visitor on a SCHOOL's public page (/schools/[slug]) has no reason
// to see ShikshaMatrix's own WhatsApp number or a "Register" button
// to sign up their own school — that page renders SchoolFloatingContact
// below instead, built from that school's own phone/email.
export function FloatingContactBar() {
  return (
    <div className="fixed bottom-5 right-5 z-40 hidden flex-col items-end gap-2.5 sm:flex">
      {ACTIONS.map((a) => (
        <Link
          key={a.label}
          href={a.href}
          target={a.external ? "_blank" : undefined}
          rel={a.external ? "noopener noreferrer" : undefined}
          className={`group flex items-center gap-2 rounded-full ${a.bg} pl-3.5 pr-3.5 py-3 text-white shadow-lg transition-all hover:pr-5`}
        >
          {a.icon}
          <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-300 group-hover:ml-0.5 group-hover:max-w-[120px] group-hover:opacity-100">
            {a.label}
          </span>
        </Link>
      ))}
    </div>
  );
}

// compact single-button variant for mobile — avoids stacking 4 buttons on a small screen
export function FloatingContactMobile() {
  return (
    <Link
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg sm:hidden"
      aria-label="Chat on WhatsApp"
    >
      {WHATSAPP_ICON}
    </Link>
  );
}

// Renders the ShikshaMatrix-branded bars, but only outside /schools/*
// routes — the layout renders this everywhere, and this component is
// the single place that decides whether that's appropriate for the
// current page.
export function SiteFloatingContact() {
  const pathname = usePathname();
  if (pathname?.startsWith("/schools/")) return null;
  return (
    <>
      <FloatingContactBar />
      <FloatingContactMobile />
    </>
  );
}

// School-specific contact bar — used by schools/[slug]/page.tsx once
// it has that school's own phone/email loaded. No "Register" button
// (a visitor here is a prospective parent, not a school shopping for
// ERP software) and no ShikshaMatrix number — every link points at the
// actual school.
export function SchoolFloatingContact({ phone, email, whatsapp }: { phone?: string | null; email?: string | null; whatsapp?: string | null }) {
  const waNumber = whatsapp || phone;
  const actions = [
    waNumber && {
      label: "WhatsApp",
      href: `https://wa.me/${waNumber.replace(/[^\d]/g, "")}?text=${encodeURIComponent("Hi, I'd like to know more about admissions.")}`,
      bg: "bg-emerald-500 hover:bg-emerald-600",
      external: true,
      icon: WHATSAPP_ICON,
    },
    phone && {
      label: "Call Us",
      href: `tel:${phone}`,
      bg: "bg-sky-500 hover:bg-sky-600",
      external: false,
      icon: PHONE_ICON,
    },
    email && {
      label: "Email",
      href: `mailto:${email}`,
      bg: "bg-rose-500 hover:bg-rose-600",
      external: false,
      icon: MAIL_ICON,
    },
  ].filter(Boolean) as { label: string; href: string; bg: string; external: boolean; icon: React.ReactNode }[];

  if (!actions.length) return null;

  return (
    <>
      <div className="fixed bottom-5 right-5 z-40 hidden flex-col items-end gap-2.5 sm:flex">
        {actions.map((a) => (
          <Link key={a.label} href={a.href} target={a.external ? "_blank" : undefined} rel={a.external ? "noopener noreferrer" : undefined}
            className={`group flex items-center gap-2 rounded-full ${a.bg} pl-3.5 pr-3.5 py-3 text-white shadow-lg transition-all hover:pr-5`}>
            {a.icon}
            <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-300 group-hover:ml-0.5 group-hover:max-w-[120px] group-hover:opacity-100">
              {a.label}
            </span>
          </Link>
        ))}
      </div>
      {waNumber && (
        <Link href={`https://wa.me/${waNumber.replace(/[^\d]/g, "")}`} target="_blank" rel="noopener noreferrer"
          className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg sm:hidden"
          aria-label="Chat on WhatsApp">
          {WHATSAPP_ICON}
        </Link>
      )}
    </>
  );
}