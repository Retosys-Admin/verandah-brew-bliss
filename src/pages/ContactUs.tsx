
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

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
          <div className="absolute inset-0 bg-verandah-brown/60"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Get in Touch
          </h1>
          <p className="text-verandah-cream text-lg max-w-2xl">
            We'd love to hear from you. Reach out for reservations, questions, or just to say hello!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info Cards */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-verandah-cream/30 to-white rounded-2xl p-8 shadow-lg border border-verandah-cream/50 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-verandah-terracotta/10 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="text-verandah-terracotta" size={24} />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-bold text-verandah-brown text-lg mb-2">Visit Us</h3>
                    <p className="text-verandah-charcoal leading-relaxed">
                      63-6-13, Auto Nagar, NH-65,<br />
                      Vijayawada, Andhra Pradesh 520007
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-verandah-sage/10 to-white rounded-2xl p-8 shadow-lg border border-verandah-sage/20 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-verandah-sage/10 rounded-full flex items-center justify-center mr-4">
                    <Clock className="text-verandah-sage" size={24} />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-bold text-verandah-brown text-lg mb-2">Hours</h3>
                    <p className="text-verandah-charcoal leading-relaxed">
                      Monday to Friday: 8:00 AM - 9:00 PM<br />
                      Saturday & Sunday: 9:00 AM - 10:00 PM
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-verandah-terracotta/10 to-white rounded-2xl p-8 shadow-lg border border-verandah-terracotta/20 hover:shadow-xl transition-shadow duration-300">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-verandah-terracotta/10 rounded-full flex items-center justify-center mr-3">
                      <Phone className="text-verandah-terracotta" size={18} />
                    </div>
                    <div>
                      <p className="text-verandah-charcoal">+91 866 123 4567</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-verandah-terracotta/10 rounded-full flex items-center justify-center mr-3">
                      <Mail className="text-verandah-terracotta" size={18} />
                    </div>
                    <div>
                      <p className="text-verandah-charcoal">hello@verandahcoffee.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-verandah-cream/20 to-white rounded-2xl p-8 shadow-xl border border-verandah-cream/30">
                <div className="flex items-center mb-8">
                  <Send className="text-verandah-terracotta mr-3" size={24} />
                  <h3 className="text-verandah-brown text-2xl font-bold font-montserrat">Send us a Message</h3>
                </div>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-verandah-brown font-medium mb-3 font-montserrat">Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-4 border-2 border-verandah-sage/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-verandah-terracotta focus:border-transparent transition-all duration-300 bg-white/50"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-verandah-brown font-medium mb-3 font-montserrat">Email</label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-4 border-2 border-verandah-sage/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-verandah-terracotta focus:border-transparent transition-all duration-300 bg-white/50"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-verandah-brown font-medium mb-3 font-montserrat">Subject</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-4 border-2 border-verandah-sage/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-verandah-terracotta focus:border-transparent transition-all duration-300 bg-white/50"
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-verandah-brown font-medium mb-3 font-montserrat">Message</label>
                    <textarea 
                      rows={6}
                      className="w-full px-4 py-4 border-2 border-verandah-sage/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-verandah-terracotta focus:border-transparent resize-none transition-all duration-300 bg-white/50"
                      placeholder="Tell us what's on your mind..."
                    ></textarea>
                  </div>
                  
                  <Button className="w-full btn-primary text-lg py-4 hover:scale-105 transition-transform duration-300 shadow-lg">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <h3 className="text-verandah-brown text-3xl font-bold mb-4 font-montserrat">Find Us on the Map</h3>
              <p className="text-verandah-charcoal text-lg">Located in the heart of Vijayawada, easily accessible from anywhere in the city</p>
            </div>
            
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.063510166799!2d80.6610804!3d16.5053393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35fb4157fb3203%3A0x77556804fbe4c4ee!2sAuto%20Nagar%2C%20Vijayawada%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1715946689669!5m2!1sen!2sin"
                width="100%" 
                height="500" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactUs;
