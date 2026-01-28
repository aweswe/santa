import { Button } from "@/components/ui/button";
import teamImg from "@/assets/team.jpg";

export const TeamSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-hero-gradient overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            Cultivating a company where{" "}
            <span className="text-gradient">people</span> bloom
          </h2>
          <Button variant="hero" size="lg">
            Meet Our Team
          </Button>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground">
              Our technical expertise runs deep, but it's our people-first culture – 
              open, honest, human – that makes the difference.
            </p>
            <p className="text-muted-foreground">
              With over 20 years in the industry, we've built a team that doesn't 
              just execute events – we create experiences that transform brands 
              and leave lasting impressions.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div>
                <p className="text-4xl font-display font-bold text-accent">20+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <p className="text-4xl font-display font-bold text-accent">500+</p>
                <p className="text-sm text-muted-foreground">Events Delivered</p>
              </div>
              <div>
                <p className="text-4xl font-display font-bold text-accent">100+</p>
                <p className="text-sm text-muted-foreground">Team Members</p>
              </div>
            </div>
          </div>

          {/* Team Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <img
                src={teamImg}
                alt="Santa India Team"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent-gold/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};
