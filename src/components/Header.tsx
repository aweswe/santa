import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  {
    label: "Services",
    hasDropdown: true,
    items: ["Event Management", "Exhibitions", "Digital Marketing", "Staffing Solutions"]
  },
  { label: "Case Studies", hasDropdown: false },
  { label: "Partner Program", hasDropdown: true, items: ["Agency Partners", "Vendor Network"] },
  { label: "Insights", hasDropdown: false },
  { label: "About", hasDropdown: true, items: ["Our Story", "Team", "Careers"] },
];

interface HeaderProps {
  onContactClick?: () => void;
}

import logo from "@/assets/logo.png";

export const Header = ({ onContactClick }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Announcement Bar */}
      <div className="bg-primary text-primary-foreground text-center py-2 px-4">
        <p className="text-xs font-medium tracking-widest uppercase">
          [COMING SOON] India's Largest Corporate Event Summit 2026 | Register Interest →
        </p>
      </div>

      {/* Main Navigation */}
      <nav className="bg-background/95 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            {/* Logo */}
            <a href="/" className="flex items-center gap-2 overflow-hidden">
              <img
                src={logo}
                alt="Santa India"
                className="h-16 w-auto object-contain mix-blend-multiply scale-125 pt-1"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Button
                    variant="navPill"
                    size="pill"
                    className="group"
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
                    )}
                  </Button>

                  {/* Dropdown */}
                  {item.hasDropdown && activeDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-2 py-2 bg-card border border-border rounded-lg shadow-lg min-w-48 animate-fade-in">
                      {item.items?.map((subItem) => (
                        <a
                          key={subItem}
                          href="#"
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
                        >
                          {subItem}
                        </a>
                      ))}
                      <div className="border-t border-border mt-2 pt-2 mx-2">
                        <a
                          href="#"
                          className="block px-2 py-2 text-sm font-medium text-foreground hover:bg-secondary/50 rounded-md transition-colors"
                        >
                          View All Services
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button variant="hero" size="pill" onClick={onContactClick}>
                Contact
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border animate-fade-in">
            <div className="container mx-auto px-6 py-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href="#"
                  className="block py-3 text-foreground font-medium border-b border-border/50"
                >
                  {item.label}
                </a>
              ))}
              <Button variant="hero" className="w-full mt-4" onClick={onContactClick}>
                Contact Us
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
