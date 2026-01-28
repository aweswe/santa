import { Award, Shield, Users, CheckCircle2 } from "lucide-react";

export const TrustBadges = () => {
  const badges = [
    {
      icon: Award,
      title: "Award Winning",
      description: "Industry Recognition",
    },
    {
      icon: Shield,
      title: "ISO Certified",
      description: "Quality Assured",
    },
    {
      icon: Users,
      title: "500+ Events",
      description: "Successfully Delivered",
    },
    {
      icon: CheckCircle2,
      title: "100% Success Rate",
      description: "Zero Failed Deliveries",
    },
  ];

  return (
    <section className="py-12 bg-secondary/30 border-y border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-card rounded-lg border border-border hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display font-bold text-lg mb-1">{badge.title}</h3>
                <p className="text-sm text-muted-foreground">{badge.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
