import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { COMPANY } from "@/lib/content";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://californiagaragerepair.com"),
  title: "Garage Door Repair Across California | 24/7 Service — CGR",
  description:
    "Statewide 24/7 garage door repair, service and installation across California. Licensed CSLB #1077353, fully insured, same-day response. Call (818) 369-8144 for a free estimate.",
  keywords: [
    "garage door repair California",
    "emergency garage door repair",
    "same-day garage door repair",
    "garage door spring repair",
    "garage door opener repair",
    "commercial garage door repair",
    "garage door installation California",
    "garage door repair near me",
  ],
  openGraph: {
    title: "Garage Door Repair Across California | 24/7 Service",
    description:
      "Statewide 24/7 garage door repair, same-day response, licensed technicians. Free estimates.",
    type: "website",
    locale: "en_US",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
      "@id": "https://californiagaragerepair.com/#business",
      name: COMPANY.name,
      telephone: COMPANY.phone,
      description:
        "24/7 garage door repair, service and installation across California.",
      areaServed: { "@type": "State", name: "California" },
      priceRange: "$$",
      address: { "@type": "PostalAddress", addressRegion: "CA", addressCountry: "US" },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "1300",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://californiagaragerepair.com/#website",
      name: COMPANY.name,
      url: "https://californiagaragerepair.com",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js');",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
