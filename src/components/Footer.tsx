import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Quote & CTA */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <Link to="/" className="text-2xl font-display font-bold tracking-tight">
                SANTA<span className="text-accent">INDIA</span>
              </Link>
            </div>

            {/* Testimonial */}
            <div className="flex items-start gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                <span className="text-accent font-bold">RK</span>
              </div>
              <div>
                <p className="font-semibold text-sm uppercase tracking-wide">
                  Rajesh Kumar
                </p>
                <p className="text-primary-foreground/60 text-sm">
                  CEO & Founder – TechCorp India
                </p>
              </div>
            </div>

            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-display leading-relaxed mb-10">
              "Santa India empowers businesses to gain an edge in today's challenging environment."
            </blockquote>

            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button variant="accent" size="lg">
                  Book a Call
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column - Info */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Locations */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/60 mb-6">
                Delhi Office
              </h4>
              <address className="not-italic text-primary-foreground/80 space-y-1">
                <p>Santa Eventz & Exhibitions Pvt. Ltd.</p>
                <p>Connaught Place</p>
                <p>New Delhi</p>
                <p>110001</p>
              </address>

              <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/60 mb-6 mt-10">
                Mumbai Office
              </h4>
              <address className="not-italic text-primary-foreground/80 space-y-1">
                <p>Bandra Kurla Complex</p>
                <p>Mumbai</p>
                <p>400051</p>
              </address>
            </div>

            {/* Contact & Legal */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/60 mb-6">
                Contact
              </h4>
              <div className="space-y-2 text-primary-foreground/80">
                <p>India: +91 11 4567 8900</p>
                <p>hello@santaindia.com</p>
              </div>

              <div className="mt-10">
                <p className="text-sm text-primary-foreground/60 mb-4">
                  © 2026 Santa India
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  <Link
                    to="/about"
                    className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                  >
                    About Us
                  </Link>
                  <Link
                    to="/services"
                    className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                  >
                    Services
                  </Link>
                  <Link
                    to="/insights"
                    className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                  >
                    Insights
                  </Link>
                  <Link
                    to="/"
                    className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 mt-8">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
