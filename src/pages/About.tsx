
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/About";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us — Verandah Coffee Roasters & Café</title>
        <meta name="description" content="Learn about Verandah Coffee Roasters & Café's story, mission, and commitment to bringing the finest specialty coffee to Vijayawada." />
      </Helmet>

      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070')"
          }}
        >
          <div className="absolute inset-0 bg-verandah-brown/50"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            About Verandah
          </h1>
          <p className="text-verandah-cream text-lg max-w-2xl">
            Discover the story behind Vijayawada's premier specialty coffee destination
          </p>
        </div>
      </section>

      <AboutSection />
      <Footer />
    </>
  );
};

export default About;
