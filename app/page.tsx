import { BenefitsSection } from "@/components/layout/sections/benefits";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
// import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import SelectedProjectsSection from "@/components/layout/sections/selected-works";
import { ServicesSection } from "@/components/layout/sections/services";
import { TeamSection } from "@/components/layout/sections/team";
import { TestimonialSection } from "@/components/layout/sections/testimonial";

export const metadata = {
  title: "Cyrix Tech Solutions - Software & Website Development",
  description:
    "Transform your business with custom websites and software solutions from Cyrix Solutions. High-converting, responsive designs to elevate your brand.",
  openGraph: {
    type: "website",
    url: "https://cyrixtechsolutions.com",
    title: "Cyrix Tech Solutions -  Tech That Works For You",
    description:
      "Discover expert website development and software solutions tailored for your business growth.",
    images: [
      {
        url: "/og-image.jpg", // Placeholder for your image
        width: 1200,
        height: 630,
        alt: "Cyrix Solutions Website",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://cyrixtechsolutions.com",
    title: "Cyrix Tech Solutions - Tech That Works For You",
    description:
      "Expert website development and software solutions for businesses.",
    images: ["/og-image.jpg"], // Placeholder for your image
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <SponsorsSection /> */}
      <BenefitsSection />
      <ServicesSection />
      {/* <FeaturesSection /> */}
      <SelectedProjectsSection />
      <TestimonialSection />
      <TeamSection />
      <ContactSection />
      <FAQSection />
      {/* <NewsletterSection /> */}
      {/* <FooterSection /> */}
    </>
  );
}
