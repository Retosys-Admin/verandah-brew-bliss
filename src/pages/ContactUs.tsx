
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactUs = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us — Verandah Coffee Roasters & Café</title>
        <meta name="description" content="Get in touch with Verandah Coffee Roasters & Café. Contact us for reservations, inquiries, or feedback." />
      </Helmet>

      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=2070')"
          }}
        >
          <div className="absolute inset-0 bg-verandah-brown/50"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Contact Us
          </h1>
          <p className="text-verandah-cream text-lg max-w-2xl">
            We'd love to hear from you. Get in touch today!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-verandah-brown text-3xl font-bold mb-8">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="text-verandah-terracotta mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-montserrat font-semibold text-verandah-brown text-lg mb-1">Address</h3>
                    <p className="text-verandah-charcoal">
                      63-6-13, Auto Nagar, NH-65,<br />
                      Vijayawada, Andhra Pradesh 520007
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-verandah-terracotta mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-montserrat font-semibold text-verandah-brown text-lg mb-1">Phone</h3>
                    <p className="text-verandah-charcoal">+91 866 123 4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="text-verandah-terracotta mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-montserrat font-semibold text-verandah-brown text-lg mb-1">Email</h3>
                    <p className="text-verandah-charcoal">hello@verandahcoffee.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="text-verandah-terracotta mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-montserrat font-semibold text-verandah-brown text-lg mb-1">Hours</h3>
                    <p className="text-verandah-charcoal">
                      Monday to Friday: 8:00 AM - 9:00 PM<br />
                      Saturday & Sunday: 9:00 AM - 10:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-verandah-cream/30 rounded-lg p-8">
              <h3 className="text-verandah-brown text-2xl font-bold mb-6">Send us a Message</h3>
              
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-verandah-brown font-medium mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-verandah-sage/30 rounded-md focus:outline-none focus:ring-2 focus:ring-verandah-terracotta"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-verandah-brown font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-verandah-sage/30 rounded-md focus:outline-none focus:ring-2 focus:ring-verandah-terracotta"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-verandah-brown font-medium mb-2">Subject</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-verandah-sage/30 rounded-md focus:outline-none focus:ring-2 focus:ring-verandah-terracotta"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label className="block text-verandah-brown font-medium mb-2">Message</label>
                  <textarea 
                    rows={5}
                    className="w-full px-4 py-3 border border-verandah-sage/30 rounded-md focus:outline-none focus:ring-2 focus:ring-verandah-terracotta resize-none"
                    placeholder="Tell us what's on your mind..."
                  ></textarea>
                </div>
                
                <Button className="w-full btn-primary" size="lg">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactUs;
