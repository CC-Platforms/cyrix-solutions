import { BenefitsSection } from "@/components/layout/sections/benefits";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { NewsletterSection } from "@/components/layout/sections/newsletter";
import { ServicesSection } from "@/components/layout/sections/services";
import { TeamSection } from "@/components/layout/sections/team";
import { TestimonialSection } from "@/components/layout/sections/testimonial";

export const metadata = {
  title: `Cosmic - Shadcn Landing Page Template`,
  description:
    "Discover high-connverting SaaS landing pages built with Next.js and Shadcn. Modern, responsive design and optimized features to elevate your brand's online presence.",
  openGraph: {
    type: "website",
    url: "https://shadcnuikit.com/template/cosmic-landing-page-template",
    title: "Cosmic - Landing Page Template (Shadcn)",
    description: "Shadcn landing page template for developers",
    images: [
      {
        url: "/seo.jpg",
        width: 1200,
        height: 630,
        alt: "Cosmic - Landing Page Template",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://shadcnuikit.com/template/cosmic-landing-page-template",
    title: "Cosmic - Landing Page Template (Shadcn)",
    description: "Shadcn landing page template for developers",
    images: ["/seo.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <SponsorsSection /> */}
      <BenefitsSection />
      <FeaturesSection />
      <ServicesSection />
      <TestimonialSection />
      <TeamSection />
      <ContactSection />
      <FAQSection />
      <NewsletterSection />
      <FooterSection />
    </>
  );
}
