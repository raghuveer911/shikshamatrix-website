// ─────────────────────────────────────────────────────────────
// apps/web/src/app/(website)/page.tsx
// Homepage — conversion flow:
// Hero → Pain Points → Before/After → ROI → Feature Hubs →
// OS Map → Principal's Day → Pricing → Inquiry → Footer
// ─────────────────────────────────────────────────────────────
import { WebsiteNavbar, WebsiteFooter } from "./_components/website-ui";
import { HeroSection, PainPointsSection, BeforeAfterSection, ROISection, WhyUsSection } from "./_components/sections-story";
import { FeatureHubsSection, OSMapSection, PrincipalDaySection, PricingSection } from "./_components/sections-product";
import { InquirySection } from "./_components/inquiry-form";
import { SchoolsShowcaseSection } from "./_components/schools-showcase";
import { TractionSection } from "./_components/sections-traction";
import { TwoVerticalsSection } from "./_components/sections-two-verticals";
import { WhyNowSection } from "./_components/sections-why-now";
import { TrustSection } from "./_components/sections-trust";
import { MarketSection } from "./_components/sections-market";
import { CompetitionSection } from "./_components/sections-competition";
import { MoatSection } from "./_components/sections-moat";
import { RoadmapSection } from "./_components/sections-roadmap";
import { VisionSection } from "./_components/sections-vision";

export default function WebsiteHomePage() {
  return (
    <main className="overflow-x-hidden">
      <WebsiteNavbar />

      {/* 1. Hero — outcome-first headline + floating ecosystem */}
      <HeroSection />

      {/* 1.5. Social proof — real schools already running on ShikshaMatrix */}
      <SchoolsShowcaseSection />

      {/* 1.6. Traction — real, verified numbers (single source of truth: _data/traction.ts) */}
      <TractionSection />

      {/* 2. Pain — what's slowing your school down */}
      <PainPointsSection />

      {/* 2.5. Differentiator — why schools pick ShikshaMatrix */}
      <WhyUsSection />

      {/* 2.6. Positioning — School OS (live) vs Skill OS (coming soon) */}
      <TwoVerticalsSection />

      {/* 3. Transformation — before vs after */}
      <BeforeAfterSection />

      {/* 4. Proof — interactive time-savings estimator */}
      <ROISection />

      {/* 5. Platform — premium feature hubs */}
      <FeatureHubsSection />

      {/* 6. System — interactive data-flow map (the ERP explainer) */}
      <OSMapSection />

      {/* 6.5. Why now — the market/timing thesis */}
      <WhyNowSection />

      {/* 6.6. Trust — security + payment reconciliation, grounded in the real architecture */}
      <TrustSection />

      {/* 6.7. Market — real, cited public data (UDISE+), not an invented TAM */}
      <MarketSection />

      {/* 6.8. Competition — category comparison, no named competitors */}
      <CompetitionSection />

      {/* 6.9. Moat — long-term direction, honestly framed as earned-not-guaranteed */}
      <MoatSection />

      {/* 6.95. Roadmap — directional themes, not a dated feature timeline */}
      <RoadmapSection />

      {/* 7. Emotion — a principal's day */}
      <PrincipalDaySection />

      {/* 8. Pricing — value framing, quote via demo */}
      <PricingSection />

      {/* 9. Conversion — inquiry / demo form */}
      <InquirySection />

      {/* 9.5. Vision — short company-level close before the footer */}
      <VisionSection />

      <WebsiteFooter />
    </main>
  );
}