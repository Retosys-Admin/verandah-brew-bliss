
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import LocationSection from "@/components/Location";
import Footer from "@/components/Footer";

const Location = () => {
  return (
    <>
      <Helmet>
        <title>Location & Hours — Verandah Coffee Roasters & Café</title>
        <meta name="description" content="Find Verandah Coffee Roasters & Café in Auto Nagar, Vijayawada. Get directions, contact information, and opening hours." />
      </Helmet>

      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=2071')"
          }}
        >
          <div className="absolute inset-0 bg-verandah-brown/50"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Visit Us
          </h1>
          <p className="text-verandah-cream text-lg max-w-2xl">
            Find us in the heart of Vijayawada's Auto Nagar
          </p>
        </div>
      </section>

      <LocationSection />
      <Footer />
    </>
  );
};

export default Location;
