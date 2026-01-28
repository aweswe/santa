import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Calendar } from "lucide-react";

interface StickyCTAProps {
  variant?: "mobile" | "desktop" | "both";
  onGetQuoteClick?: () => void;
}

export const StickyCTA = ({ variant = "both", onGetQuoteClick }: StickyCTAProps) => {
  const handleClick = () => {
    if (onGetQuoteClick) {
      onGetQuoteClick();
    } else {
      // Fallback: scroll to footer
      document.querySelector("footer")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Mobile Sticky Bar */}
      {(variant === "mobile" || variant === "both") && (
        <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-background border-t border-border shadow-lg">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center gap-2">
              <Button
                variant="accent"
                className="flex-1 h-12 text-sm font-semibold"
                onClick={handleClick}
              >
                <Calendar className="w-4 h-4" />
                Get Free Quote
              </Button>
              <a
                href="tel:+911145678900"
                className="p-3 border border-border rounded-lg hover:bg-secondary transition-colors"
                aria-label="Call us"
              >
                <Phone className="w-5 h-5 text-foreground" />
              </a>
              <a
                href="https://wa.me/911145678900"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-border rounded-lg hover:bg-secondary transition-colors"
                aria-label="WhatsApp us"
              >
                <MessageCircle className="w-5 h-5 text-foreground" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Floating Button */}
      {(variant === "desktop" || variant === "both") && (
        <div className="hidden lg:flex lg:flex-col lg:items-end fixed bottom-8 right-8 z-50 gap-3">
          <Button
            variant="accent"
            size="lg"
            className="rounded-full shadow-lg hover:shadow-xl h-14 px-6 animate-pulse-glow"
            onClick={handleClick}
          >
            <Calendar className="w-5 h-5 mr-2" />
            Get Free Quote
          </Button>
        </div>
      )}
    </>
  );
};
