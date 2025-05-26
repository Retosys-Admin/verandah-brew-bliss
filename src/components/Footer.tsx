
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-verandah-brown text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo & About */}
          <div>
            <div className="mb-6">
              <img 
                src="/lovable-uploads/a41b404b-8d7d-4a36-84ce-6aaa113ae89f.png" 
                alt="Verandah Coffee Roasters & Café" 
                className="h-20 w-auto mb-4"
              />
            </div>
            <p className="text-verandah-cream/80 mb-6">
              Vijayawada's premier specialty coffee destination, serving quality brews in a cozy atmosphere.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/verandah_coffee_roasters/" target="_blank" rel="noopener noreferrer" className="hover:text-verandah-terracotta transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="hover:text-verandah-terracotta transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="hover:text-verandah-terracotta transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
          
          {/* Column 2: Sitemap */}
          <div>
            <h3 className="text-xl font-bold font-montserrat mb-6">Sitemap</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-verandah-cream/80 hover:text-verandah-terracotta transition-colors">About Us</a>
              </li>
              <li>
                <a href="#menu" className="text-verandah-cream/80 hover:text-verandah-terracotta transition-colors">Menu</a>
              </li>
              <li>
                <a href="#shop" className="text-verandah-cream/80 hover:text-verandah-terracotta transition-colors">Shop Beans</a>
              </li>
              <li>
                <a href="#location" className="text-verandah-cream/80 hover:text-verandah-terracotta transition-colors">Location</a>
              </li>
              <li>
                <a href="#" className="text-verandah-cream/80 hover:text-verandah-terracotta transition-colors">Blog</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold font-montserrat mb-6">Hours</h3>
            <ul className="space-y-3">
              <li className="text-verandah-cream/80">
                <span className="block font-semibold">Monday - Friday</span>
                8:00 AM - 9:00 PM
              </li>
              <li className="text-verandah-cream/80">
                <span className="block font-semibold">Saturday & Sunday</span>
                9:00 AM - 10:00 PM
              </li>
              <li className="text-verandah-cream/80 pt-2">
                <span className="block font-semibold">Happy Hour</span>
                4:00 PM - 6:00 PM (Mon-Fri)
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold font-montserrat mb-6">Contact</h3>
            <ul className="space-y-3">
              <li className="text-verandah-cream/80">
                <span className="block font-semibold">Address</span>
                63-6-13, Auto Nagar, NH-65,<br />
                Vijayawada, Andhra Pradesh 520007
              </li>
              <li className="text-verandah-cream/80">
                <span className="block font-semibold">Phone</span>
                +91 866 123 4567
              </li>
              <li className="text-verandah-cream/80">
                <span className="block font-semibold">Email</span>
                hello@verandahcoffee.com
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-verandah-cream/60 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Verandah Coffee Roasters & Café. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-verandah-cream/60 hover:text-verandah-terracotta text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-verandah-cream/60 hover:text-verandah-terracotta text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
