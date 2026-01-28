import { Button } from "@/components/ui/button";

export const PartnerSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">
            More Than Two Decades of Excellence
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            Joining <span className="text-gradient">Santa India Partner Network</span> gives your team access to the expertise and resources to excel.
          </h2>
          <Button variant="hero" size="lg" className="mt-6">
            Discover Partner Program
          </Button>
        </div>

        {/* Partner Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[
            "Tata Group",
            "Reliance",
            "Infosys",
            "Wipro",
            "HCL",
            "Tech Mahindra",
            "Bajaj",
            "Maruti",
            "Asian Paints",
            "Godrej",
            "ITC",
            "Hindustan Unilever",
          ].map((partner) => (
            <div
              key={partner}
              className="flex items-center justify-center p-6 border border-border rounded-lg bg-card hover:shadow-md transition-shadow duration-300"
            >
              <span className="font-display font-bold text-foreground/60 text-sm md:text-base">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
