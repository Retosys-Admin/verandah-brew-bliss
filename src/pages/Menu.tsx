
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import LuxuryMenuPreview from "@/components/LuxuryMenuPreview";
import Footer from "@/components/Footer";

const Menu = () => {
  return (
    <>
      <Helmet>
        <title>Our Menu — Verandah Coffee Roasters & Café</title>
        <meta name="description" content="Explore our full menu of handcrafted beverages, specialty coffee, delicious pastries, and savory treats at Verandah Coffee Roasters & Café." />
      </Helmet>

      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1974')"
          }}
        >
          <div className="absolute inset-0 bg-verandah-brown/50"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Our Artisan Menu
          </h1>
          <p className="text-verandah-cream text-lg max-w-2xl">
            Handcrafted beverages and delicious treats made with love and the finest ingredients
          </p>
        </div>
      </section>

      <LuxuryMenuPreview />
      <Footer />
    </>
  );
};

export default Menu;
