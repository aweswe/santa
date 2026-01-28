import { Button } from "@/components/ui/button";
import heroGeometric from "@/assets/hero-geometric.png";

interface HeroSectionProps {
  onGetQuoteClick?: () => void;
}

export const HeroSection = ({ onGetQuoteClick }: HeroSectionProps) => {
  return (
    <section className="relative min-h-[80vh] bg-hero-gradient pt-16 lg:pt-32 overflow-hidden">
      {/* Geometric Pattern */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-30 pointer-events-none">
        <img
          src={heroGeometric}
          alt=""
          className="w-full h-full object-contain object-right animate-float"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl py-12 lg:py-32">
          {/* Main Headline */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 animate-fade-in-up">
            Experiences.
            <br />
            <span className="text-gradient">Execution.</span>
            <br />
            Excellence.
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 animate-fade-in-up animation-delay-200">
            India's premier event management and experiential marketing agency.
            From concept to completion – we handle everything.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-300">
            <Button variant="hero" size="lg" onClick={onGetQuoteClick}>
              Get Free Quote
            </Button>
            <Button variant="heroOutline" size="lg">
              View Our Work
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-border/50 animate-fade-in-up animation-delay-400">
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-6">
              Trusted by India's Leading Brands
            </p>
            <div className="flex flex-wrap items-center gap-8 opacity-60">
              {["TATA", "Reliance", "Infosys", "Wipro", "HCL"].map((brand) => (
                <span
                  key={brand}
                  className="text-xl font-display font-bold text-foreground/70"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};
