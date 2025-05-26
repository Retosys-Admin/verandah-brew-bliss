
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Coffee } from "lucide-react";
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-lg shadow-xl border-b border-verandah-cream py-3" 
          : "bg-gradient-to-b from-black/40 to-transparent py-6"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <Coffee 
              size={32} 
              className={`transition-all duration-300 ${
                isScrolled ? "text-verandah-terracotta" : "text-white"
              } group-hover:rotate-12`} 
            />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-verandah-terracotta rounded-full opacity-75 animate-pulse"></div>
          </div>
          <div className="flex flex-col">
            <span className={`text-2xl font-bold font-montserrat tracking-tight transition-colors duration-300 ${
              isScrolled ? "text-verandah-brown" : "text-white"
            }`}>
              VERANDAH
            </span>
            <span className={`text-xs font-light tracking-widest transition-colors duration-300 ${
              isScrolled ? "text-verandah-sage" : "text-verandah-cream/80"
            }`}>
              COFFEE ROASTERS
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-10">
          {[
            { path: '/', label: 'Home' },
            { path: '/about', label: 'About' },
            { path: '/menu', label: 'Menu' },
            { path: '/shop', label: 'Shop' },
            { path: '/location', label: 'Location' },
            { path: '/contact', label: 'Contact' }
          ].map((item) => (
            <Link 
              key={item.path}
              to={item.path} 
              className={`relative font-montserrat font-medium text-sm tracking-wide transition-all duration-300 group ${
                isActive(item.path) 
                  ? (isScrolled ? 'text-verandah-terracotta' : 'text-white') 
                  : (isScrolled ? 'text-verandah-brown hover:text-verandah-terracotta' : 'text-white/90 hover:text-white')
              }`}
            >
              {item.label}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                isActive(item.path) ? 'w-full bg-verandah-terracotta' : 'bg-verandah-terracotta'
              }`}></span>
            </Link>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link to="/reserve">
            <Button 
              className={`transition-all duration-300 hover:scale-105 ${
                isScrolled 
                  ? "bg-transparent border-2 border-verandah-brown text-verandah-brown hover:bg-verandah-brown hover:text-white" 
                  : "bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-verandah-brown"
              }`} 
              variant="outline"
            >
              Reserve Table
            </Button>
          </Link>
          <Link to="/order">
            <Button className="bg-verandah-terracotta hover:bg-verandah-brown text-white font-montserrat font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
              Order Online
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`lg:hidden transition-colors duration-300 ${
            isScrolled ? "text-verandah-brown" : "text-white"
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-lg shadow-xl border-t border-verandah-cream animate-fade-in">
          <div className="container-custom py-6 flex flex-col space-y-6">
            {[
              { path: '/', label: 'Home' },
              { path: '/about', label: 'About' },
              { path: '/menu', label: 'Menu' },
              { path: '/shop', label: 'Shop' },
              { path: '/location', label: 'Location' },
              { path: '/contact', label: 'Contact' }
            ].map((item) => (
              <Link 
                key={item.path}
                to={item.path} 
                className={`py-2 font-montserrat font-medium text-lg transition-colors duration-300 ${
                  isActive(item.path) ? 'text-verandah-terracotta' : 'text-verandah-brown hover:text-verandah-terracotta'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col space-y-3 pt-4 border-t border-verandah-cream">
              <Link to="/reserve">
                <Button className="w-full bg-transparent border-2 border-verandah-brown text-verandah-brown hover:bg-verandah-brown hover:text-white transition-all duration-300" variant="outline">
                  Reserve Table
                </Button>
              </Link>
              <Link to="/order">
                <Button className="w-full bg-verandah-terracotta hover:bg-verandah-brown text-white font-montserrat font-semibold transition-all duration-300">
                  Order Online
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
