import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import eventHero from "@/assets/event-hero.jpg";

export const AboutSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="relative h-[600px] md:h-[700px] lg:h-[800px]">
        <img
          src={eventHero}
          alt="Corporate Event"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />

        {/* Content */}
        <div className="relative container mx-auto px-6 h-full flex items-center">
          <div className="max-w-xl text-primary-foreground">
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-display leading-relaxed mb-8">
              "Santa India partners with agencies and businesses all around the country as their in-house event department. Our unrivalled expertise in all areas of experiential marketing makes us the best event partner for you."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <span className="text-accent font-bold text-lg">SI</span>
              </div>
              <div>
                <p className="font-semibold tracking-wide uppercase text-sm">
                  Santa India Team
                </p>
                <p className="text-primary-foreground/70 text-sm">
                  Founder & CEO
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Play Video Button */}
        <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12">
          <Button
            variant="outline"
            className="bg-background/90 text-foreground border-0 hover:bg-background gap-2 rounded-full px-6"
          >
            <Play className="w-4 h-4 fill-current" />
            Play Video
          </Button>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="bg-accent-peach py-4">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center overflow-hidden">
              <span className="text-accent font-bold">PM</span>
            </div>
            <div>
              <p className="font-semibold text-foreground uppercase text-sm tracking-wide">
                Priya Mehta
              </p>
              <p className="text-muted-foreground text-sm">
                Partner Growth Manager
              </p>
            </div>
          </div>
          <Button variant="accent" size="pill">
            Book a Call
          </Button>
        </div>
      </div>
    </section>
  );
};
