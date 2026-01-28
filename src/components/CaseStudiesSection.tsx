import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import exhibitionImg from "@/assets/exhibition.jpg";
import eventHeroImg from "@/assets/event-hero.jpg";

const caseStudies = [
  {
    title: "Tech Summit 2025: Innovation Unlocked",
    image: eventHeroImg,
    category: "Corporate Summit",
    stats: [
      { value: "320%", label: "ROI Achieved" },
      { value: "1,200+", label: "Attendees" },
    ],
    description: "Complete end-to-end management of India's premier technology summit, featuring 3 stages and 50+ speakers."
  },
  {
    title: "Global Auto Expo: Launch Excellence",
    image: exhibitionImg,
    category: "Product Launch",
    stats: [
      { value: "450%", label: "Brand Reach" },
      { value: "50k+", label: "Footfall" },
    ],
    description: "Orchestrating a massive product launch with immersive zones, media management, and high-impact reveals."
  },
  {
    title: "Pharma Leadership Meet: Precision executed",
    image: eventHeroImg, // Reusing for now as we have limited assets
    category: "Compliance Meet",
    stats: [
      { value: "100%", label: "Compliance" },
      { value: "Zero", label: "Glitches" },
    ],
    description: "A high-stakes leadership gathering requiring absolute precision, security, and white-glove service."
  }
];

export const CaseStudiesSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">
              Proven <span className="text-gradient">Impact</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              From high-stakes summits to massive expos, we deliver results that matter.
            </p>
          </div>
          <Link to="/portfolio">
            <Button variant="hero" size="pill">
              View All Projects
            </Button>
          </Link>
        </div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl bg-card border border-border/50 hover:shadow-lg transition-all duration-300">
              {/* Image Area */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-accent/90 text-white text-xs font-bold uppercase tracking-wider rounded-full">
                    {study.category}
                  </span>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6">
                <h3 className="text-xl font-display font-bold mb-3 group-hover:text-accent transition-colors">
                  {study.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  {study.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                  {study.stats.map((stat, i) => (
                    <div key={i}>
                      <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                      <p className="text-xs text-muted-foreground uppercase">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
