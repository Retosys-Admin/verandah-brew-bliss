
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MenuPreview from "@/components/MenuPreview";
import Location from "@/components/Location";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import StatsSection from "@/components/StatsSection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Verandah Coffee Roasters & Café — Best Specialty Coffee in Vijayawada</title>
        <meta name="description" content="Verandah Coffee Roasters & Café is Vijayawada's premier specialty coffee destination, offering artisan-roasted beans, signature drinks, and a seasonal menu in a warm, inviting atmosphere." />
        <meta name="keywords" content="best cafes in Vijayawada, specialty coffee Vijayawada, Vijayawada café menu, coffee roasters Vijayawada" />
      </Helmet>

      <Navbar />
      <Hero />
      <FeaturesSection />
      <About />
      <StatsSection />
      <MenuPreview />
      <TestimonialsSection />
      <Location />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Index;
