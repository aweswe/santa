import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Download, CheckCircle2 } from "lucide-react";

export const ExitIntentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if popup was already shown in this session
    const shown = sessionStorage.getItem("exitIntentShown");
    if (shown) {
      setHasShown(true);
      return;
    }

    // Detect mouse leaving viewport
    const handleMouseLeave = (e: MouseEvent) => {
      if (!hasShown && e.clientY <= 0) {
        setIsOpen(true);
        setHasShown(true);
        sessionStorage.setItem("exitIntentShown", "true");
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasShown]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would integrate with your email marketing tool
      console.log("Email captured:", email);
      setIsSubmitted(true);
      
      // Simulate PDF download
      setTimeout(() => {
        const link = document.createElement("a");
        link.href = "#"; // Replace with actual PDF URL
        link.download = "event-planning-checklist.pdf";
        link.click();
      }, 500);

      // Close after 3 seconds
      setTimeout(() => {
        setIsOpen(false);
      }, 3000);
    }
  };

  if (isSubmitted) {
    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-accent" />
              </div>
            </div>
            <DialogTitle className="text-center text-2xl">
              Check Your Email!
            </DialogTitle>
            <DialogDescription className="text-center">
              We've sent your free Event Planning Checklist to <strong>{email}</strong>
            </DialogDescription>
          </DialogHeader>
          <div className="text-center mt-4">
            <p className="text-sm text-muted-foreground">
              The download should start automatically. If not, check your downloads folder.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display">
            Wait! Don't Miss Out 🎉
          </DialogTitle>
          <DialogDescription className="text-base">
            Get our <strong>FREE Event Planning Checklist</strong> - used by 500+ companies to plan perfect events
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="bg-accent/10 rounded-lg p-4 border border-accent/20">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Download className="w-4 h-4 text-accent" />
              What You'll Get:
            </h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>✓ Complete event planning timeline</li>
              <li>✓ Budget planning template</li>
              <li>✓ Vendor checklist</li>
              <li>✓ ROI calculation guide</li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-12"
            />
            <Button type="submit" variant="accent" className="w-full h-12" size="lg">
              Get Free Checklist
            </Button>
            <p className="text-xs text-center text-muted-foreground">
              No spam. Unsubscribe anytime.
            </p>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};
