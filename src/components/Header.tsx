import { useState, useEffect, useRef } from "react";
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
  { label: "Case Studies", path: "/case-studies" },
  {
    label: "Partner Program",
    path: "/partner-program",
    hasDropdown: true,
    items: [
      { label: "Agency Partners", path: "/partner/agency" },
      { label: "Vendor Network", path: "/partner/vendor" }
    ]
  },
  { label: "Insights", path: "/insights" },
  {
    label: "About",
    path: "/about",
    hasDropdown: true,
    items: [
      { label: "Our Story", path: "/about/story" },
      { label: "Team", path: "/about/team" },
      { label: "Careers", path: "/about/careers" }
    ]
  }
];

interface HeaderProps {
  onContactClick?: () => void;
}

export const Header = ({ onContactClick }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  const handleContactClick = () => {
    if (onContactClick) {
      onContactClick();
    } else {
      navigate("/contact");
    }
    setIsMobileMenuOpen(false);
  };

  // Lock scroll
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <header ref={headerRef} className="relative lg:fixed top-0 left-0 right-0 z-50">
      {/* Announcement */}
      <div className="bg-primary text-primary-foreground text-center py-2 px-4">
        <p className="text-xs font-medium tracking-widest uppercase">
          [COMING SOON] India's Largest Corporate Event Summit 2026 | Register Interest →
        </p>
      </div>

      {/* Navbar */}
      <nav className={`border-b border-border/50 transition-colors duration-300 ${isMobileMenuOpen ? 'bg-background' : 'bg-background/95 backdrop-blur-md'}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <Link to="/" className="z-[60]">
              <img
                src={logo}
                alt="Santa India"
                className="h-12 w-auto object-contain mix-blend-multiply"
              />
            </Link>

            {/* Desktop */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map(item => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link to={item.path}>
                    <Button variant="navPill" size="pill">
                      {item.label}
                      {item.hasDropdown && <ChevronDown className="w-3 h-3 ml-1" />}
                    </Button>
                  </Link>

                  {item.hasDropdown && activeDropdown === item.label && (
                    <div className="absolute top-full left-0 pt-3 min-w-48">
                      <div className="bg-card border border-border rounded-lg shadow-lg py-2">
                        {item.items?.map(sub => (
                          <Link
                            key={sub.label}
                            to={sub.path}
                            className="block px-4 py-2 text-sm hover:bg-secondary/50"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:block relative z-[60]">
              <Link to="/contact">
                <Button variant="hero" size="pill" onClick={handleContactClick}>
                  Contact
                </Button>
              </Link>
            </div>

            {/* Mobile Button */}
            <button
              className="lg:hidden p-2 relative z-[130]"
              onClick={() => setIsMobileMenuOpen(v => !v)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>
        </div>

        {/* Backdrop */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black/40 z-[90] backdrop-blur-sm" />
        )}

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className="lg:hidden fixed left-0 right-0 bg-background z-[120] animate-in slide-in-from-top duration-300 shadow-2xl overflow-hidden flex flex-col"
            style={{
              top: headerRef.current?.offsetHeight,
              bottom: 0
            }}
          >
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
              {navItems.map(item => (
                <div key={item.label} className="border-b border-border/50 pb-4">
                  <Link
                    to={item.path}
                    className="block py-4 text-xl font-semibold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>

                  {item.hasDropdown && (
                    <div className="pl-4 border-l border-border space-y-2">
                      {item.items?.map(sub => (
                        <Link
                          key={sub.label}
                          to={sub.path}
                          className="block py-2 text-muted-foreground"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <Link
                to="/contact"
                className="block py-4 text-xl font-semibold border-b border-border/50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>

              <div className="pt-4 pb-12">
                <Button
                  variant="hero"
                  className="w-full mt-6 h-12 text-lg"
                  onClick={handleContactClick}
                >
                  Get Free Quote
                </Button>
              </div>
            </div>
          </div>
        )}

      </nav>
    </header>
  );
};
