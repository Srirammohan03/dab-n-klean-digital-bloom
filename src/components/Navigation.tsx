import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface NavigationProps {
  onCartOpen: () => void;
  cartItemCount: number;
}

export const Navigation = ({ onCartOpen, cartItemCount }: NavigationProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo -> Home */}
          <Link to="/" className="flex items-center">
            <img
              src="/images/DNK-logo-new.png"
              alt="DAB'N'KLEAN logo"
              className="h-8 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className="text-foreground hover:text-primary transition-colors text-sm font-medium"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="text-foreground hover:text-primary transition-colors text-sm font-medium"
            >
              About
            </Link>

             <Link
              to="/products"
              className="text-foreground hover:text-primary transition-colors text-sm font-medium"
            >
              Products
            </Link>

            <Link
              to="/b2b-partner"
              className="text-foreground hover:text-primary transition-colors text-sm font-medium"
            >
              B2B & Partners
            </Link>
            
            <Link
              to="/contact"
              className="text-foreground hover:text-primary transition-colors text-sm font-medium"
            >
              Contact
            </Link>

            <Button onClick={onCartOpen} variant="outline" className="relative">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Enquiry Cart
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs">
                  {cartItemCount}
                </span>
              )}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <Button
              onClick={onCartOpen}
              variant="ghost"
              size="icon"
              className="relative"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItemCount}
                </span>
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-3">
             <Link
              to="/"
              className="text-foreground hover:text-primary transition-colors text-sm font-medium"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="text-foreground hover:text-primary transition-colors text-sm font-medium"
            >
              About
            </Link>

             <Link
              to="/products"
              className="text-foreground hover:text-primary transition-colors text-sm font-medium"
            >
              Products
            </Link>

            <Link
              to="/b2b-partner"
              className="text-foreground hover:text-primary transition-colors text-sm font-medium"
            >
              B2B & Partners
            </Link>
            
            <Link
              to="/contact"
              className="text-foreground hover:text-primary transition-colors text-sm font-medium"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
