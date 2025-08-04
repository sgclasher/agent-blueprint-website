import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-sm border-b border-gray-800" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <img 
              src="/attached_assets/Agent Blueprint Symbol (White)_1754332698082.png" 
              alt="Agent Blueprint Logo" 
              className="h-8 w-8"
              data-testid="nav-logo-image"
            />
            <h1 className="text-xl font-bold text-white" data-testid="nav-logo">
              Agent Blueprint
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-gray-300 hover:text-white transition-colors duration-300"
              data-testid="nav-home"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-gray-300 hover:text-white transition-colors duration-300"
              data-testid="nav-features"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-300 hover:text-white transition-colors duration-300"
              data-testid="nav-contact"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
              data-testid="nav-mobile-toggle"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95">
              <button
                onClick={() => scrollToSection("hero")}
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-300"
                data-testid="nav-mobile-home"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-300"
                data-testid="nav-mobile-features"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-300"
                data-testid="nav-mobile-contact"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
