import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import EventManagement from "./pages/services/EventManagement";
import Exhibitions from "./pages/services/Exhibitions";
import DigitalMarketing from "./pages/services/DigitalMarketing";
import StaffingSolutions from "./pages/services/StaffingSolutions";

import CaseStudies from "./pages/CaseStudies";

import PartnerProgram from "./pages/PartnerProgram";
import AgencyPartners from "./pages/partner/AgencyPartners";
import VendorNetwork from "./pages/partner/VendorNetwork";

import Insights from "./pages/Insights";

import About from "./pages/About";
import OurStory from "./pages/about/OurStory";
import TeamPage from "./pages/about/TeamPage";
import Careers from "./pages/about/Careers";

import Contact from "./pages/Contact";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/event-management" element={<EventManagement />} />
          <Route path="/services/exhibitions" element={<Exhibitions />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/services/staffing-solutions" element={<StaffingSolutions />} />

          <Route path="/case-studies" element={<CaseStudies />} />

          <Route path="/partner-program" element={<PartnerProgram />} />
          <Route path="/partner/agency" element={<AgencyPartners />} />
          <Route path="/partner/vendor" element={<VendorNetwork />} />

          <Route path="/insights" element={<Insights />} />

          <Route path="/about" element={<About />} />
          <Route path="/about/story" element={<OurStory />} />
          <Route path="/about/team" element={<TeamPage />} />
          <Route path="/about/careers" element={<Careers />} />

          <Route path="/contact" element={<Contact />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
