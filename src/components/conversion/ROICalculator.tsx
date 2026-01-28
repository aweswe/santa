import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis } from "recharts";
import { TrendingUp, Download, Mail, Calculator } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const eventTypes = [
  "Corporate Event",
  "Product Launch",
  "Exhibition/Trade Show",
  "Conference",
  "Award Ceremony",
  "Brand Activation",
];

const industries = [
  "Technology",
  "Finance",
  "Healthcare",
  "Retail",
  "Manufacturing",
  "Education",
  "Other",
];

interface ROICalculation {
  roiPercentage: number;
  estimatedLeads: number;
  brandVisibilityIncrease: number;
  costPerAttendee: number;
  totalValue: number;
  investment: number;
}

export const ROICalculator = () => {
  const [eventType, setEventType] = useState("");
  const [budget, setBudget] = useState([500000]);
  const [attendees, setAttendees] = useState(250);
  const [industry, setIndustry] = useState("");
  const [email, setEmail] = useState("");
  const [showEmailDialog, setShowEmailDialog] = useState(false);
  const [calculation, setCalculation] = useState<ROICalculation | null>(null);

  const calculateROI = (): ROICalculation | null => {
    if (!eventType || !industry || budget[0] === 0) return null;

    const investment = budget[0];
    
    // Industry multipliers for ROI
    const industryMultipliers: Record<string, number> = {
      Technology: 3.5,
      Finance: 3.2,
      Healthcare: 2.8,
      Retail: 3.0,
      Manufacturing: 2.5,
      Education: 2.2,
      Other: 2.5,
    };

    // Event type multipliers
    const eventTypeMultipliers: Record<string, number> = {
      "Corporate Event": 2.5,
      "Product Launch": 4.0,
      "Exhibition/Trade Show": 3.5,
      "Conference": 3.0,
      "Award Ceremony": 2.8,
      "Brand Activation": 3.2,
    };

    const industryMultiplier = industryMultipliers[industry] || 2.5;
    const eventMultiplier = eventTypeMultipliers[eventType] || 2.5;
    const attendeeMultiplier = Math.min(attendees / 100, 5); // Cap at 5x

    // Calculate ROI
    const baseROI = 250; // Base 250% ROI
    const roiPercentage = Math.round(
      baseROI * industryMultiplier * eventMultiplier * 0.3 + (attendeeMultiplier * 50)
    );

    // Calculate other metrics
    const estimatedLeads = Math.round(attendees * 0.15 * industryMultiplier);
    const brandVisibilityIncrease = Math.round(roiPercentage * 0.4);
    const costPerAttendee = Math.round(investment / attendees);
    const totalValue = Math.round(investment * (roiPercentage / 100));

    return {
      roiPercentage,
      estimatedLeads,
      brandVisibilityIncrease,
      costPerAttendee,
      totalValue,
      investment,
    };
  };

  const handleCalculate = () => {
    const result = calculateROI();
    if (result) {
      setCalculation(result);
    }
  };

  const handleGetFullReport = () => {
    if (!email) {
      setShowEmailDialog(true);
      return;
    }
    // Simulate PDF download
    console.log("Generating PDF report for:", email);
    // In production, this would generate and download PDF
    alert("Full report would be sent to " + email);
  };

  const chartData = calculation
    ? [
        { name: "Investment", value: calculation.investment, color: "hsl(var(--accent))" },
        { name: "ROI Value", value: calculation.totalValue, color: "hsl(var(--accent-gold))" },
      ]
    : [];

  const barChartData = calculation
    ? [
        { metric: "ROI %", value: calculation.roiPercentage },
        { metric: "Leads", value: Math.min(calculation.estimatedLeads / 10, 100) },
        { metric: "Visibility", value: Math.min(calculation.brandVisibilityIncrease / 5, 100) },
      ]
    : [];

  const chartConfig = {
    value: {
      label: "Value",
      color: "hsl(var(--accent))",
    },
  };

  return (
    <section className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
              <Calculator className="w-8 h-8 text-accent" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight mb-4">
              Calculate Your Event <span className="text-gradient">ROI</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how much value your event can generate. Get instant ROI predictions based on industry benchmarks.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Form */}
            <Card>
              <CardHeader>
                <CardTitle>Event Details</CardTitle>
                <CardDescription>Enter your event information to calculate ROI</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="eventType">Event Type *</Label>
                  <Select value={eventType} onValueChange={setEventType}>
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
                  <Label htmlFor="industry">Industry *</Label>
                  <Select value={industry} onValueChange={setIndustry}>
                    <SelectTrigger id="industry" className="h-12">
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent>
                      {industries.map((ind) => (
                        <SelectItem key={ind} value={ind}>
                          {ind}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="budget">
                    Budget: ₹{budget[0].toLocaleString()}
                  </Label>
                  <Slider
                    id="budget"
                    min={100000}
                    max={5000000}
                    step={50000}
                    value={budget}
                    onValueChange={setBudget}
                    className="mt-2"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>₹1L</span>
                    <span>₹50L</span>
                  </div>
                </div>

                <div>
                  <Label htmlFor="attendees">Expected Attendees: {attendees}</Label>
                  <Slider
                    id="attendees"
                    min={50}
                    max={2000}
                    step={25}
                    value={[attendees]}
                    onValueChange={(value) => setAttendees(value[0])}
                    className="mt-2"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>50</span>
                    <span>2000</span>
                  </div>
                </div>

                <Button
                  variant="accent"
                  className="w-full h-12"
                  onClick={handleCalculate}
                  disabled={!eventType || !industry}
                >
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Calculate ROI
                </Button>
              </CardContent>
            </Card>

            {/* Results */}
            <div className="space-y-6">
              {calculation ? (
                <>
                  {/* Main ROI Display */}
                  <Card className="bg-gradient-to-br from-accent/10 to-accent-gold/10 border-accent/20">
                    <CardContent className="pt-6">
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground mb-2">Expected ROI</p>
                        <p className="text-6xl font-display font-bold text-accent mb-4">
                          {calculation.roiPercentage}%
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-muted-foreground">Investment</p>
                            <p className="font-bold text-lg">₹{calculation.investment.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Expected Value</p>
                            <p className="font-bold text-lg text-accent">
                              ₹{calculation.totalValue.toLocaleString()}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Metrics Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <Card>
                      <CardContent className="pt-6">
                        <p className="text-sm text-muted-foreground mb-1">Estimated Leads</p>
                        <p className="text-2xl font-bold">{calculation.estimatedLeads}+</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <p className="text-sm text-muted-foreground mb-1">Brand Visibility</p>
                        <p className="text-2xl font-bold">+{calculation.brandVisibilityIncrease}%</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <p className="text-sm text-muted-foreground mb-1">Cost per Attendee</p>
                        <p className="text-2xl font-bold">₹{calculation.costPerAttendee}</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <p className="text-sm text-muted-foreground mb-1">Net Value</p>
                        <p className="text-2xl font-bold text-accent">
                          ₹{(calculation.totalValue - calculation.investment).toLocaleString()}
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Chart Visualization */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">ROI Breakdown</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ChartContainer config={chartConfig} className="h-[200px]">
                        <BarChart data={barChartData}>
                          <XAxis 
                            dataKey="metric" 
                            tick={{ fill: "hsl(var(--muted-foreground))" }}
                          />
                          <YAxis 
                            tick={{ fill: "hsl(var(--muted-foreground))" }}
                          />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Bar 
                            dataKey="value" 
                            fill="hsl(var(--accent))" 
                            radius={[8, 8, 0, 0]} 
                          />
                        </BarChart>
                      </ChartContainer>
                    </CardContent>
                  </Card>

                  {/* CTA Buttons */}
                  <div className="flex flex-col gap-3">
                    <Button variant="accent" className="w-full h-12" onClick={handleGetFullReport}>
                      <Download className="w-4 h-4 mr-2" />
                      Get Full Report (PDF)
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full h-12"
                      onClick={() => {
                        // This will be handled by parent component
                        window.dispatchEvent(new CustomEvent("openQuoteForm"));
                      }}
                    >
                      Get Custom Quote
                    </Button>
                  </div>
                </>
              ) : (
                <Card className="h-full flex items-center justify-center min-h-[400px]">
                  <CardContent className="text-center">
                    <Calculator className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
                    <p className="text-muted-foreground">
                      Fill in the form and click "Calculate ROI" to see your results
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Email Dialog for Full Report */}
      <Dialog open={showEmailDialog} onOpenChange={setShowEmailDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Get Full ROI Report</DialogTitle>
            <DialogDescription>
              Enter your email to receive a detailed PDF report with complete ROI analysis
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12"
            />
            <Button
              variant="accent"
              className="w-full h-12"
              onClick={() => {
                if (email) {
                  handleGetFullReport();
                  setShowEmailDialog(false);
                }
              }}
            >
              <Mail className="w-4 h-4 mr-2" />
              Send Report
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};
