import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const title = "Tech Prime Global — A Multi-Venture Business Group";
const description =
  "Tech Prime Global Private Limited builds, launches and scales independent, technology-enabled consumer businesses across mobility, digital entertainment and healthcare discovery.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s · Tech Prime Global",
  },
  description,
  applicationName: "Tech Prime Global",
  keywords: [
    "Tech Prime Global",
    "multi-venture business group",
    "venture holding company",
    "Drivers24",
    "Finder",
    "First Lab",
    "Gurgaon",
    "India",
  ],
  authors: [{ name: "Tech Prime Global Private Limited" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "Tech Prime Global",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#EEF1EE",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen overflow-x-clip">{children}</body>
    </html>
  );
}
