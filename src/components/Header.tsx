import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";

const navItems = [
  {
    label: "Services",
    path: "/services",
    hasDropdown: true,
    items: [
      { label: "Event Management", path: "/services/event-management" },
      { label: "Exhibitions", path: "/services/exhibitions" },
      { label: "Digital Marketing", path: "/services/digital-marketing" },
      { label: "Staffing Solutions", path: "/services/staffing-solutions" }
    ]
  },
  { label: "Case Studies", path: "/case-studies", hasDropdown: false },
  {
    label: "Partner Program",
    path: "/partner-program",
    hasDropdown: true,
    items: [
      { label: "Agency Partners", path: "/partner/agency" },
      { label: "Vendor Network", path: "/partner/vendor" }
    ]
  },
  { label: "Insights", path: "/insights", hasDropdown: false },
  {
    label: "About",
    path: "/about",
    hasDropdown: true,
    items: [
      { label: "Our Story", path: "/about/story" },
      { label: "Team", path: "/about/team" },
      { label: "Careers", path: "/about/careers" }
    ]
  },
];

interface HeaderProps {
  onContactClick?: () => void;
}

export const Header = ({ onContactClick }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleContactClick = () => {
    if (onContactClick) {
      onContactClick();
    } else {
      // Fallback if no handler provided (e.g., on internal pages)
      // Ideally check if we are on home page, if not, nav to home then open?
      // For now, just maybe navigate to home or scroll to contact?
      // Since QuoteForm is global in Index, this props pattern is a bit restricted.
      // But for now let's just allow it or maybe route to /#contact?
      // Sticking to existing prop behavior, but if unavailable, maybe navigate to "/"
      navigate("/");
      // dispatch custom event if needed or rely on the prop being passed in layouts involving Index
    }
  };

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
            <Link to="/" className="flex items-center gap-2 overflow-hidden">
              <img
                src={logo}
                alt="Santa India"
                className="h-16 w-auto object-contain mix-blend-multiply scale-125 pt-1"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link to={item.path}>
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
                  </Link>

                  {/* Dropdown */}
                  {item.hasDropdown && activeDropdown === item.label && (
                    <div className="absolute top-full left-0 pt-4 min-w-48 animate-fade-in z-50">
                      <div className="bg-card border border-border rounded-lg shadow-lg py-2">
                        {item.items?.map((subItem) => (
                          <Link
                            key={subItem.label}
                            to={subItem.path}
                            className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                        <div className="border-t border-border mt-2 pt-2 mx-2">
                          <Link
                            to={item.path}
                            className="block px-2 py-2 text-sm font-medium text-foreground hover:bg-secondary/50 rounded-md transition-colors"
                          >
                            View All Services
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link to="/contact">
                <Button variant="hero" size="pill">
                  Contact
                </Button>
              </Link>
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
                <Link
                  key={item.label}
                  to={item.path}
                  className="block py-3 text-foreground font-medium border-b border-border/50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link to="/contact">
                <Button variant="hero" className="w-full mt-4" onClick={() => setIsMobileMenuOpen(false)}>
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
