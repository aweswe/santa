import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { PartnersMarquee } from "@/components/PartnersMarquee";
import { ServicesSection } from "@/components/ServicesSection";
import { PartnerSection } from "@/components/PartnerSection";
import { AboutSection } from "@/components/AboutSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { TeamSection } from "@/components/TeamSection";
import { Footer } from "@/components/Footer";
import { ExitIntentPopup } from "@/components/conversion/ExitIntentPopup";
import { StickyCTA } from "@/components/conversion/StickyCTA";
import { QuoteForm } from "@/components/conversion/QuoteForm";
import { WhatsAppButton } from "@/components/conversion/WhatsAppButton";
import { TrustBadges } from "@/components/conversion/TrustBadges";
import { SocialProofCounter } from "@/components/conversion/SocialProofCounter";
import { ROICalculator } from "@/components/conversion/ROICalculator";

const Index = () => {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);

  // Allow ROI calculator to open quote form
  useEffect(() => {
    const handleOpenQuoteForm = () => setIsQuoteFormOpen(true);
    window.addEventListener("openQuoteForm", handleOpenQuoteForm);
    return () => window.removeEventListener("openQuoteForm", handleOpenQuoteForm);
  }, []);

  return (
    <div className="min-h-screen bg-background">

      {/* Header */}
      <Header onContactClick={() => setIsQuoteFormOpen(true)} />

      {/* Main Content */}
      <main className="lg:pt-24 pb-20 lg:pb-0">
        <HeroSection onGetQuoteClick={() => setIsQuoteFormOpen(true)} />
        <TrustBadges />
        <PartnersMarquee />
        <ROICalculator />
        <ServicesSection />
        <PartnerSection />
        <AboutSection />
        <CaseStudiesSection />
        <SocialProofCounter />
        <TeamSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Conversion Components */}
      <ExitIntentPopup />
      <StickyCTA onGetQuoteClick={() => setIsQuoteFormOpen(true)} />
      <WhatsAppButton />
      <QuoteForm
        isOpen={isQuoteFormOpen}
        onOpenChange={setIsQuoteFormOpen}
      />

    </div>
  );
};

export default Index;
