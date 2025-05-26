
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowDown, Award, Coffee, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Hero Background with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=2070')", 
          backgroundPosition: "center 40%"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-verandah-brown/30 to-transparent"></div>
      </div>

      {/* Floating Coffee Beans Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-bounce opacity-20"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.5}s`
            }}
          >
            <Coffee size={24} className="text-verandah-cream" />
          </div>
        ))}
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-4xl">
          {/* Premium Badge */}
          <div className="inline-flex items-center space-x-2 bg-verandah-terracotta/20 backdrop-blur-sm border border-verandah-terracotta/30 rounded-full px-6 py-3 mb-8 animate-fade-in">
            <Award size={20} className="text-verandah-terracotta" />
            <span className="text-verandah-cream font-montserrat font-medium tracking-wide">
              Premium Coffee Experience Since 2021
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 animate-fade-in font-montserrat tracking-tight">
            <span className="block">From Bean to Cup</span>
            <span className="block text-transparent bg-gradient-to-r from-verandah-terracotta to-verandah-sage bg-clip-text">
              Experience Verandah
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-verandah-cream text-xl md:text-2xl mb-12 leading-relaxed max-w-3xl animate-fade-in font-light" style={{ animationDelay: '0.3s' }}>
            Vijayawada's premier specialty coffee destination, where every cup tells a story of 
            <span className="text-white font-medium"> passion</span>, 
            <span className="text-white font-medium"> craftsmanship</span>, and 
            <span className="text-white font-medium"> community</span>.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-6 mb-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Link to="/order">
              <Button className="bg-verandah-terracotta hover:bg-verandah-brown text-white font-montserrat font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-2xl" size="lg">
                Order Online
              </Button>
            </Link>
            <Link to="/menu">
              <Button className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-verandah-brown font-montserrat font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105" size="lg">
                Explore Menu
              </Button>
            </Link>
          </div>

          {/* Stats Row */}
          <div className="flex flex-wrap gap-8 animate-fade-in" style={{ animationDelay: '0.9s' }}>
            {[
              { icon: Coffee, number: "50+", label: "Coffee Varieties" },
              { icon: Users, number: "5000+", label: "Happy Customers" },
              { icon: Award, number: "100%", label: "Premium Quality" }
            ].map((stat, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <stat.icon size={24} className="text-verandah-terracotta" />
                <div>
                  <div className="text-white font-bold text-lg font-montserrat">{stat.number}</div>
                  <div className="text-verandah-cream text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in" style={{ animationDelay: '1.2s' }}>
        <a 
          href="#features"
          className="flex flex-col items-center text-white group hover:text-verandah-terracotta transition-colors duration-300"
        >
          <span className="text-sm font-montserrat mb-3 tracking-wide">Discover More</span>
          <div className="w-8 h-12 border-2 border-current rounded-full flex justify-center">
            <div className="w-1 h-3 bg-current rounded-full mt-2 animate-bounce"></div>
          </div>
        </a>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 border border-white/20 rounded-full animate-pulse opacity-30 hidden lg:block"></div>
      <div className="absolute bottom-32 left-20 w-24 h-24 border border-verandah-terracotta/30 rounded-full animate-pulse opacity-40 hidden lg:block"></div>
    </section>
  );
};

export default Hero;
