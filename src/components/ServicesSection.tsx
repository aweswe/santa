import { Calendar, Megaphone, Users, Presentation } from "lucide-react";

const services = [
  {
    icon: Calendar,
    title: "Event Management",
    description: "End-to-end corporate event planning, execution, and management across India.",
    features: ["Corporate Events", "Product Launches", "Trade Shows", "Brand Activations"],
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Amplify your brand presence with integrated digital strategies.",
    features: ["Social Media", "SEO & SEM", "Content Creation", "Online Campaigns"],
  },
  {
    icon: Users,
    title: "Staffing Solutions",
    description: "Reliable manpower and HR solutions for all your business needs.",
    features: ["Talent Sourcing", "Event Staffing", "HR Outsourcing", "Payroll Management"],
  },
  {
    icon: Presentation,
    title: "Exhibitions",
    description: "Stunning exhibition stalls and trade show presence that captivates.",
    features: ["Booth Design", "Fabrication", "Installation", "On-site Management"],
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">
            Our Services
          </p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight mb-6">
            360° Solutions for Your Brand
          </h2>
          <p className="text-muted-foreground text-lg">
            From experiential marketing to digital presence, we provide comprehensive 
            solutions that drive real results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-2xl p-8 hover:shadow-lg hover:border-accent/30 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <service.icon className="w-7 h-7 text-accent" />
              </div>
              
              <h3 className="font-display text-xl font-bold mb-3">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li
                    key={i}
                    className="text-sm text-foreground/70 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
