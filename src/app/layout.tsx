import type { Metadata } from "next";
import "./globals.css";

const BASE_URL = "https://www.shikshamatrix.in";
const SITE_NAME = "ShikshaMatrix";
const TAGLINE = "The Operating System for Modern Schools";
const DESCRIPTION =
  "ShikshaMatrix is an all-in-one School ERP for Indian schools — admissions, attendance, fee collection, HR, communication, transport, hostel and library, in one connected platform with dedicated apps for staff, students and parents.";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: `${SITE_NAME} — School ERP Software for Indian Schools`,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  keywords: [
    "school ERP", "school ERP software", "school management software",
    "school management system", "student information system",
    "school fee management software", "school attendance software",
    "school mobile app", "parent app", "teacher app",
    "online admission software", "school ERP India",
  ],
  authors: [{ name: SITE_NAME }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — ${TAGLINE}`,
    description: DESCRIPTION,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — ${TAGLINE}`,
    description: DESCRIPTION,
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: { index: true, follow: true },
};

// JSON-LD structured data — this is what Google (rich results / AI
// Overviews) and AI assistants (ChatGPT, Claude, Perplexity, Gemini)
// parse to understand who ShikshaMatrix is, as a real, well-formed
// entity rather than just page text. Keep this updated if the brand
// name, logo path, or core description ever changes.
function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${BASE_URL}/#organization`,
        name: SITE_NAME,
        url: BASE_URL,
        logo: `${BASE_URL}/shikshamatrix.svg`,
        description: DESCRIPTION,
        areaServed: { "@type": "Country", name: "India" },
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${BASE_URL}/#software`,
        name: SITE_NAME,
        applicationCategory: "BusinessApplication",
        applicationSubCategory: "School Management Software",
        operatingSystem: "Web, Android, iOS",
        description: DESCRIPTION,
        url: BASE_URL,
        offers: {
          "@type": "Offer",
          priceCurrency: "INR",
          category: "Subscription",
          url: `${BASE_URL}/pricing`,
        },
        publisher: { "@id": `${BASE_URL}/#organization` },
      },
      {
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
        url: BASE_URL,
        name: SITE_NAME,
        publisher: { "@id": `${BASE_URL}/#organization` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body>{children}</body>
    </html>
  );
}
