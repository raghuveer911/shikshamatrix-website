// ─────────────────────────────────────────────────────────────
// apps/web/src/app/(website)/layout.tsx
// Marketing site layout — independent of the admin panel layout.
// Route group "(website)" means URLs stay clean: / , /#pricing etc.
// ─────────────────────────────────────────────────────────────
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { FloatingContactBar, FloatingContactMobile } from "./_components/floating-contact";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-grotesk", display: "swap" });

export const metadata: Metadata = {
  title: "ShikshaMatrix — The Operating System for Modern Schools",
  description:
    "Run your entire school from one intelligent platform. Save 75+ hours every month on attendance, fees, reports and parent communication. Built for Indian schools.",
  keywords: ["school ERP India", "school management software", "fee management", "attendance software", "ShikshaMatrix"],
  openGraph: {
    title: "ShikshaMatrix — The Operating System for Modern Schools",
    description: "Spend less time managing school, more time growing it.",
    url: "https://www.shikshamatrix.in",
    siteName: "ShikshaMatrix",
    type: "website",
  },
};

export default function WebsiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${inter.variable} ${grotesk.variable} sm-website`}>
      {/* Scoped base styles so the marketing site never leaks into admin panel CSS */}
      <style>{`
        .sm-website {
          --sm-bg: #fbfbfe;
          --sm-bg-2: #f3f4fb;
          --sm-surface: rgba(255, 255, 255, 0.72);
          --sm-border: rgba(23, 24, 45, 0.09);
          --sm-border-hi: rgba(99, 102, 241, 0.45);
          --sm-text: #171833;
          --sm-muted: #666b85;
          --sm-primary: #6366f1;
          --sm-primary-soft: rgba(99, 102, 241, 0.09);
          --sm-success: #16a34a;
          --sm-danger: #dc2626;
          --sm-warning: #d97706;
          font-family: var(--font-inter), system-ui, sans-serif;
          background: var(--sm-bg);
          color: var(--sm-text);
          min-height: 100vh;
          -webkit-font-smoothing: antialiased;
        }
        .sm-website ::selection { background: rgba(99,102,241,.18); }
        .sm-display { font-family: var(--font-grotesk), var(--font-inter), sans-serif; letter-spacing: -0.02em; }

        /* mesh gradient + particle backdrop */
        .sm-mesh {
          background:
            radial-gradient(50rem 30rem at 15% -5%, rgba(99,102,241,.10), transparent 60%),
            radial-gradient(44rem 28rem at 90% 10%, rgba(168,85,247,.08), transparent 60%),
            radial-gradient(40rem 30rem at 50% 110%, rgba(56,102,241,.06), transparent 60%),
            var(--sm-bg);
        }
        .sm-glass {
          background: var(--sm-surface);
          border: 1px solid var(--sm-border);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          box-shadow: 0 1px 2px rgba(23,24,45,.03), 0 14px 40px -20px rgba(23,24,45,.18);
        }
        .sm-glass-hover { transition: border-color .3s ease, transform .3s ease, box-shadow .3s ease; }
        .sm-glass-hover:hover {
          border-color: var(--sm-border-hi);
          transform: translateY(-3px);
          box-shadow: 0 18px 50px -18px rgba(99,102,241,.35);
        }

        /* reveal-on-scroll */
        .sm-reveal { opacity: 0; transform: translateY(22px); transition: opacity .7s ease, transform .7s ease; }
        .sm-reveal.sm-in { opacity: 1; transform: none; }

        /* floating blobs */
        @keyframes sm-float { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-14px) } }
        .sm-float { animation: sm-float 7s ease-in-out infinite; }
        .sm-float-slow { animation: sm-float 11s ease-in-out infinite; }

        /* liquid underline for nav links */
        .sm-navlink { position: relative; }
        .sm-navlink::after {
          content: ""; position: absolute; left: 50%; bottom: -4px; height: 2px; width: 0;
          background: linear-gradient(90deg, #6366f1, #a855f7);
          border-radius: 2px; transition: width .3s ease, left .3s ease;
        }
        .sm-navlink:hover::after { width: 100%; left: 0; }

        /* orbit map */
        @keyframes sm-orbit { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }
        @keyframes sm-orbit-rev { from { transform: rotate(0deg) } to { transform: rotate(-360deg) } }
        @keyframes sm-pulse { 0%,100% { opacity: .5 } 50% { opacity: 1 } }
        .sm-pulse { animation: sm-pulse 3s ease-in-out infinite; }

        /* ── Liquid Button — glass surface, flowing gradient border, sheen, ripple ── */
        .sm-liquid-btn {
          background: linear-gradient(135deg, #6366f1, #8b5cf6, #6366f1);
          background-size: 220% 220%;
          animation: sm-gradient-flow 6s ease infinite;
          box-shadow: 0 10px 32px -10px rgba(99,102,241,.75), inset 0 1px 0 rgba(255,255,255,.25);
          will-change: transform;
        }
        .sm-liquid-btn::before {
          content: ""; position: absolute; inset: 0; border-radius: inherit; padding: 1px;
          background: linear-gradient(135deg, rgba(255,255,255,.5), rgba(255,255,255,0) 40%, rgba(255,255,255,.25) 100%);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor; mask-composite: exclude; pointer-events: none;
        }
        @keyframes sm-gradient-flow { 0%,100% { background-position: 0% 50% } 50% { background-position: 100% 50% } }

        .sm-liquid-sheen {
          position: absolute; inset: 0; pointer-events: none;
          background: linear-gradient(115deg, transparent 20%, rgba(255,255,255,.35) 40%, transparent 60%);
          transform: translateX(-120%);
          transition: transform .8s ease;
        }
        .sm-liquid-btn:hover .sm-liquid-sheen { transform: translateX(120%); }

        .sm-liquid-ripple {
          position: absolute; width: 10px; height: 10px; border-radius: 50%;
          background: rgba(255,255,255,.55); transform: translate(-50%, -50%) scale(0);
          animation: sm-ripple .65s ease-out forwards; pointer-events: none;
        }
        @keyframes sm-ripple { to { transform: translate(-50%, -50%) scale(22); opacity: 0; } }

        /* ── Clay-morphism accent — use ONLY for small icon badges, never full cards ── */
        .sm-clay {
          background: linear-gradient(145deg, #ffffff, #f2f3fa);
          box-shadow:
            5px 5px 12px rgba(23,24,45,.08),
            -4px -4px 10px rgba(255,255,255,.9),
            inset 1px 1px 1px rgba(255,255,255,.6);
          border: 1px solid rgba(23,24,45,.05);
        }
        .sm-clay-hover { transition: box-shadow .3s ease, transform .3s ease; }
        .sm-clay-hover:hover {
          transform: translateY(-2px);
          box-shadow:
            7px 7px 16px rgba(23,24,45,.1),
            -5px -5px 12px rgba(255,255,255,.95),
            inset 1px 1px 1px rgba(255,255,255,.7);
        }

        /* ── Liquid glass card sheen — subtle moving reflection on hover ── */
        .sm-card-liquid { isolation: isolate; }
        .sm-card-sheen {
          position: absolute; top: -50%; left: -60%; width: 60%; height: 200%;
          background: linear-gradient(115deg, transparent 30%, rgba(99,102,241,.06) 50%, transparent 70%);
          transform: rotate(12deg) translateX(-40%);
          transition: transform .9s ease;
          pointer-events: none; z-index: 1;
        }
        .sm-card-liquid:hover .sm-card-sheen { transform: rotate(12deg) translateX(220%); }

        @media (prefers-reduced-motion: reduce) {
          .sm-website * { animation: none !important; transition-duration: .01ms !important; }
          .sm-reveal { opacity: 1; transform: none; }
          .sm-liquid-sheen { display: none; }
        }
      `}</style>
      {children}
      <FloatingContactBar />
      <FloatingContactMobile />
    </div>
  );
}