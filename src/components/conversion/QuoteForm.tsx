import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, Loader2 } from "lucide-react";

interface QuoteFormProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const eventTypes = [
  "Corporate Event",
  "Product Launch",
  "Exhibition/Trade Show",
  "Conference",
  "Award Ceremony",
  "Brand Activation",
  "Team Building",
  "Other",
];

const eventSizes = [
  "50-100 attendees",
  "100-250 attendees",
  "250-500 attendees",
  "500-1000 attendees",
  "1000+ attendees",
];

export const QuoteForm = ({ isOpen, onOpenChange }: QuoteFormProps) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    eventType: "",
    eventSize: "",
    eventDate: "",
    location: "",
    name: "",
    email: "",
    phone: "",
    company: "",
  });

  const [priceRange, setPriceRange] = useState<string>("");

  const calculatePriceRange = () => {
    if (!formData.eventType || !formData.eventSize) return "";

    // Simple price calculation logic (replace with actual pricing)
    const basePrices: Record<string, number> = {
      "Corporate Event": 50000,
      "Product Launch": 75000,
      "Exhibition/Trade Show": 100000,
      "Conference": 150000,
      "Award Ceremony": 80000,
      "Brand Activation": 60000,
      "Team Building": 40000,
      "Other": 50000,
    };

    const sizeMultipliers: Record<string, number> = {
      "50-100 attendees": 1,
      "100-250 attendees": 1.5,
      "250-500 attendees": 2,
      "500-1000 attendees": 3,
      "1000+ attendees": 4,
    };

    const base = basePrices[formData.eventType] || 50000;
    const multiplier = sizeMultipliers[formData.eventSize] || 1;
    const estimated = base * multiplier;

    return `₹${(estimated / 1000).toFixed(0)}K - ₹${((estimated * 1.5) / 1000).toFixed(0)}K`;
  };

  const handleNext = () => {
    if (step === 1 && formData.eventType && formData.eventSize) {
      setPriceRange(calculatePriceRange());
      setStep(2);
    } else if (step === 2 && formData.eventDate && formData.location) {
      setStep(3);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Here you would send data to your backend/CRM
    console.log("Quote request submitted:", formData);

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setStep(1);
      setFormData({
        eventType: "",
        eventSize: "",
        eventDate: "",
        location: "",
        name: "",
        email: "",
        phone: "",
        company: "",
      });
      onOpenChange(false);
    }, 3000);
  };

  const progress = (step / 3) * 100;

  if (isSubmitted) {
    return (
      <Dialog open={isOpen} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-accent" />
              </div>
            </div>
            <DialogTitle className="text-center text-2xl">
              Quote Request Received!
            </DialogTitle>
            <DialogDescription className="text-center">
              We'll send you a detailed quote within 24 hours to <strong>{formData.email}</strong>
            </DialogDescription>
          </DialogHeader>
          <div className="text-center mt-4 space-y-2">
            <p className="text-sm text-muted-foreground">
              Our team will review your requirements and get back to you soon.
            </p>
            <Button variant="accent" className="w-full mt-4" onClick={() => onOpenChange(false)}>
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display">
            Get Instant Quote
          </DialogTitle>
          <DialogDescription>
            Tell us about your event and get a price estimate in seconds
          </DialogDescription>
        </DialogHeader>

        {/* Progress Bar */}
        <div className="w-full bg-secondary rounded-full h-2 mb-6">
          <div
            className="bg-accent h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        <form onSubmit={handleSubmit}>
          {/* Step 1: Event Details */}
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="eventType">Event Type *</Label>
                <Select
                  value={formData.eventType}
                  onValueChange={(value) => setFormData({ ...formData, eventType: value })}
                >
                  <SelectTrigger id="eventType" className="h-12">
                    <SelectValue placeholder="Select event type" />
                  </SelectTrigger>
                  <SelectContent>
                    {eventTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="eventSize">Expected Attendees *</Label>
                <Select
                  value={formData.eventSize}
                  onValueChange={(value) => setFormData({ ...formData, eventSize: value })}
                >
                  <SelectTrigger id="eventSize" className="h-12">
                    <SelectValue placeholder="Select event size" />
                  </SelectTrigger>
                  <SelectContent>
                    {eventSizes.map((size) => (
                      <SelectItem key={size} value={size}>
                        {size}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {formData.eventType && formData.eventSize && (
                <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                  <p className="text-sm text-muted-foreground mb-1">Estimated Price Range:</p>
                  <p className="text-2xl font-bold text-accent">{calculatePriceRange()}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    * Final price may vary based on specific requirements
                  </p>
                </div>
              )}

              <Button
                type="button"
                variant="accent"
                className="w-full h-12"
                onClick={handleNext}
                disabled={!formData.eventType || !formData.eventSize}
              >
                Next Step
              </Button>
            </div>
          )}

          {/* Step 2: Date & Location */}
          {step === 2 && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="eventDate">Event Date *</Label>
                <Input
                  id="eventDate"
                  type="date"
                  value={formData.eventDate}
                  onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                  className="h-12"
                  min={new Date().toISOString().split("T")[0]}
                  required
                />
              </div>

              <div>
                <Label htmlFor="location">Event Location *</Label>
                <Input
                  id="location"
                  type="text"
                  placeholder="City or Venue"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="h-12"
                  required
                />
              </div>

              <div className="flex gap-3">
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1 h-12"
                  onClick={() => setStep(1)}
                >
                  Back
                </Button>
                <Button
                  type="button"
                  variant="accent"
                  className="flex-1 h-12"
                  onClick={handleNext}
                  disabled={!formData.eventDate || !formData.location}
                >
                  Next Step
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Contact Information */}
          {step === 3 && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-12"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="h-12"
                  required
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="h-12"
                  required
                />
              </div>

              <div>
                <Label htmlFor="company">Company Name</Label>
                <Input
                  id="company"
                  type="text"
                  placeholder="Your Company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="h-12"
                />
              </div>

              <div className="flex gap-3">
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1 h-12"
                  onClick={() => setStep(2)}
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  variant="accent"
                  className="flex-1 h-12"
                  disabled={isSubmitting || !formData.name || !formData.email || !formData.phone}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Get My Quote"
                  )}
                </Button>
              </div>
            </div>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
};
