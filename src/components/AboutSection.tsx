import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Play, X } from "lucide-react";
import eventHero from "@/assets/event-hero.jpg";

export const AboutSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

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
            onClick={() => setIsVideoOpen(true)}
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
          <Link to="/contact">
            <Button variant="accent" size="pill">
              Book a Call
            </Button>
          </Link>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-300">
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
            <button
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
              onClick={() => setIsVideoOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dP15zlyra3c?autoplay=1"
              title="Santa India Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};
