
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <span className="text-verandah-brown text-2xl font-bold font-montserrat tracking-tight">VERANDAH</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-verandah-brown hover:text-verandah-terracotta font-montserrat font-medium transition-colors">About</a>
          <a href="#menu" className="text-verandah-brown hover:text-verandah-terracotta font-montserrat font-medium transition-colors">Menu</a>
          <a href="#shop" className="text-verandah-brown hover:text-verandah-terracotta font-montserrat font-medium transition-colors">Shop</a>
          <a href="#location" className="text-verandah-brown hover:text-verandah-terracotta font-montserrat font-medium transition-colors">Location</a>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button className="btn-secondary" variant="outline">Reserve a Table</Button>
          <Button className="btn-primary">Order Online</Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-verandah-brown"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <a 
              href="#about" 
              className="text-verandah-brown py-2 font-montserrat font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#menu" 
              className="text-verandah-brown py-2 font-montserrat font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Menu
            </a>
            <a 
              href="#shop" 
              className="text-verandah-brown py-2 font-montserrat font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Shop
            </a>
            <a 
              href="#location" 
              className="text-verandah-brown py-2 font-montserrat font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Location
            </a>
            <div className="flex flex-col space-y-2 pt-2">
              <Button className="w-full btn-secondary" variant="outline">Reserve a Table</Button>
              <Button className="w-full btn-primary">Order Online</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
