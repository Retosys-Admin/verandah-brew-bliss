
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

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

  const isActive = (path: string) => location.pathname === path;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg py-3" : "bg-white/95 backdrop-blur-sm py-5 shadow-sm"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-verandah-brown text-2xl font-bold font-montserrat tracking-tight">VERANDAH</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`font-montserrat font-medium transition-colors ${
              isActive('/') ? 'text-verandah-terracotta' : 'text-verandah-brown hover:text-verandah-terracotta'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`font-montserrat font-medium transition-colors ${
              isActive('/about') ? 'text-verandah-terracotta' : 'text-verandah-brown hover:text-verandah-terracotta'
            }`}
          >
            About
          </Link>
          <Link 
            to="/menu" 
            className={`font-montserrat font-medium transition-colors ${
              isActive('/menu') ? 'text-verandah-terracotta' : 'text-verandah-brown hover:text-verandah-terracotta'
            }`}
          >
            Menu
          </Link>
          <Link 
            to="/shop" 
            className={`font-montserrat font-medium transition-colors ${
              isActive('/shop') ? 'text-verandah-terracotta' : 'text-verandah-brown hover:text-verandah-terracotta'
            }`}
          >
            Shop
          </Link>
          <Link 
            to="/location" 
            className={`font-montserrat font-medium transition-colors ${
              isActive('/location') ? 'text-verandah-terracotta' : 'text-verandah-brown hover:text-verandah-terracotta'
            }`}
          >
            Location
          </Link>
          <Link 
            to="/contact" 
            className={`font-montserrat font-medium transition-colors ${
              isActive('/contact') ? 'text-verandah-terracotta' : 'text-verandah-brown hover:text-verandah-terracotta'
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/reserve">
            <Button className="btn-secondary" variant="outline">Reserve a Table</Button>
          </Link>
          <Link to="/order">
            <Button className="btn-primary">Order Online</Button>
          </Link>
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
            <Link 
              to="/" 
              className={`py-2 font-montserrat font-medium ${
                isActive('/') ? 'text-verandah-terracotta' : 'text-verandah-brown'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`py-2 font-montserrat font-medium ${
                isActive('/about') ? 'text-verandah-terracotta' : 'text-verandah-brown'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/menu" 
              className={`py-2 font-montserrat font-medium ${
                isActive('/menu') ? 'text-verandah-terracotta' : 'text-verandah-brown'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Menu
            </Link>
            <Link 
              to="/shop" 
              className={`py-2 font-montserrat font-medium ${
                isActive('/shop') ? 'text-verandah-terracotta' : 'text-verandah-brown'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Shop
            </Link>
            <Link 
              to="/location" 
              className={`py-2 font-montserrat font-medium ${
                isActive('/location') ? 'text-verandah-terracotta' : 'text-verandah-brown'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Location
            </Link>
            <Link 
              to="/contact" 
              className={`py-2 font-montserrat font-medium ${
                isActive('/contact') ? 'text-verandah-terracotta' : 'text-verandah-brown'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex flex-col space-y-2 pt-2">
              <Link to="/reserve">
                <Button className="w-full btn-secondary" variant="outline">Reserve a Table</Button>
              </Link>
              <Link to="/order">
                <Button className="w-full btn-primary">Order Online</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
