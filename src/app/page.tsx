import { MotionProvider } from "@/components/MotionProvider";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Ventures } from "@/components/Ventures";
import { PortfolioOverview } from "@/components/PortfolioOverview";
import { Vision } from "@/components/Vision";
import { Leadership } from "@/components/Leadership";
import { InvestorContact } from "@/components/InvestorContact";
import { Footer } from "@/components/Footer";
import { company } from "@/lib/content";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.legalName,
  alternateName: company.name,
  email: company.email,
  description: company.descriptor,
  address: {
    "@type": "PostalAddress",
    streetAddress: "V20/12",
    addressLocality: "Gurgaon",
    addressRegion: "Haryana",
    addressCountry: "IN",
  },
  founder: [
    { "@type": "Person", name: company.founder, jobTitle: "Founder" },
    { "@type": "Person", name: company.coFounder, jobTitle: "Co-Founder" },
  ],
};

export default function Home() {
  return (
    <MotionProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Ventures />
        <PortfolioOverview />
        <Vision />
        <Leadership />
        <InvestorContact />
      </main>
      <Footer />
    </MotionProvider>
  );
}
