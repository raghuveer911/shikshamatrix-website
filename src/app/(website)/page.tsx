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

export default function WebsiteHomePage() {
  return (
    <main className="overflow-x-hidden">
      <WebsiteNavbar />

      {/* 1. Hero — outcome-first headline + floating ecosystem */}
      <HeroSection />

      {/* 1.5. Social proof — real schools already running on ShikshaMatrix */}
      <SchoolsShowcaseSection />

      {/* 2. Pain — what's slowing your school down */}
      <PainPointsSection />

      {/* 2.5. Differentiator — why schools pick ShikshaMatrix */}
      <WhyUsSection />

      {/* 3. Transformation — before vs after */}
      <BeforeAfterSection />

      {/* 4. Proof — interactive ROI calculator */}
      <ROISection />

      {/* 5. Platform — premium feature hubs */}
      <FeatureHubsSection />

      {/* 6. System — interactive data-flow map (the ERP explainer) */}
      <OSMapSection />

      {/* 7. Emotion — a principal's day */}
      <PrincipalDaySection />

      {/* 8. Pricing — value framing, quote via demo */}
      <PricingSection />

      {/* 9. Conversion — inquiry / demo form */}
      <InquirySection />

      <WebsiteFooter />
    </main>
  );
}