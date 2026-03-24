import type { Metadata } from "next";
import { Manrope, Instrument_Serif } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Gambella Policy Lab",
    template: "%s | Gambella Policy Lab",
  },
  description:
    "A civic and public-policy platform focused on governance, development, and local politics in Gambella.",
  keywords: [
    "profile",
    "leader",
    "public policy",
    "governance",
    "regional priorities",
    "policy comparison",
    "assessmentn",
    "evaluation framework",
  ],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  publisher: "Election Lab",
  openGraph: {
    title: "Prepared Gambella",
    description:
      "Policy, resilience, and governance platform",
    url: "https://example.com",
    siteName: "Election Lab",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1456,
        height: 816,
        alt: "Election Lab — AI-Powered Program Analysis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Election Lab — AI-Powered Program Analysis",
    description:
      "Non-partisan AI analysis of political programs. Same criteria, same rigor, same transparency for every candidate.",
    creator: "@yourhandle",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://example.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Election Lab",
    url: "https://example.com",
    description:
      "Non-partisan AI analysis of political programs. Same criteria, same rigor, same transparency for every candidate.",
    author: {
      "@type": "Person",
      name: "Your Name",
      url: "https://example.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Election Lab",
      url: "https://example.com",
    },
  };

  return (
   <html lang="en" suppressHydrationWarning>
  <body
    suppressHydrationWarning
    className={`${manrope.variable} ${instrumentSerif.variable} min-h-screen antialiased`}
  >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
