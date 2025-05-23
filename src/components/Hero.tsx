
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=2070')", 
          backgroundPosition: "center 40%"
        }}
      >
        <div className="absolute inset-0 bg-verandah-brown/30"></div>
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            From Bean to Cup — Experience Verandah
          </h1>
          <p className="text-verandah-cream text-lg md:text-xl mb-8">
            Vijayawada's premier specialty coffee destination, where every cup tells a story of passion, craftsmanship, and community.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="btn-primary" size="lg">Order Online</Button>
            <Link to="/menu">
              <Button className="bg-white text-verandah-brown hover:bg-verandah-cream" size="lg">
                Explore Our Menu
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <a 
          href="#about"
          className="flex flex-col items-center text-white animate-bounce"
        >
          <span className="text-sm font-montserrat mb-2">Scroll Down</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M12 5v14"></path>
            <path d="m19 12-7 7-7-7"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
