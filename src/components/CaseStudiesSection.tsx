import { Button } from "@/components/ui/button";
import exhibitionImg from "@/assets/exhibition.jpg";

const caseStudies = [
  {
    title: "+450% Brand Visibility for Auto Major",
    image: exhibitionImg,
    stats: [
      { value: "+450%", label: "Brand Visibility" },
      { value: "+280%", label: "Lead Generation" },
    ],
  },
];

export const CaseStudiesSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl">
            Case Studies
          </h2>
          <Button variant="hero" size="pill">
            Our Work
          </Button>
        </div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Main Case Study */}
          <div className="relative group overflow-hidden rounded-2xl">
            <img
              src={caseStudies[0].image}
              alt={caseStudies[0].title}
              className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="text-2xl md:text-3xl font-display text-primary-foreground mb-6">
                {caseStudies[0].title}
              </h3>
              
              <div className="flex gap-4">
                {caseStudies[0].stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-background/90 backdrop-blur-sm rounded-lg px-6 py-4"
                  >
                    <p className="text-3xl md:text-4xl font-display font-bold text-foreground">
                      {stat.value}
                    </p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <Button
              variant="hero"
              className="absolute bottom-8 right-8"
            >
              Learn More
            </Button>
          </div>

          {/* Secondary Case Study */}
          <div className="relative group overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-primary/80">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
            </div>
            
            <div className="relative p-8 h-full flex flex-col justify-between min-h-[400px] md:min-h-[500px]">
              <div>
                <p className="text-accent text-sm uppercase tracking-widest mb-4">
                  Featured Project
                </p>
                <h3 className="text-3xl md:text-4xl font-display text-primary-foreground mb-4">
                  +320% ROI for Tech Launch
                </h3>
                <p className="text-primary-foreground/70 max-w-md">
                  Complete product launch management including venue, staging, 
                  digital integration, and post-event analytics.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-8">
                <span className="px-4 py-2 bg-primary-foreground/10 rounded-full text-primary-foreground text-sm">
                  Product Launch
                </span>
                <span className="px-4 py-2 bg-primary-foreground/10 rounded-full text-primary-foreground text-sm">
                  Tech Industry
                </span>
                <span className="px-4 py-2 bg-primary-foreground/10 rounded-full text-primary-foreground text-sm">
                  500+ Attendees
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
