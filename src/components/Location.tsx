
import { Map, MapPin, Clock, Phone } from "lucide-react";

const Location = () => {
  return (
    <section id="location" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-verandah-brown text-3xl md:text-4xl font-bold uppercase mb-4">Find Us</h2>
          <div className="w-20 h-1 bg-verandah-terracotta mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <div className="bg-verandah-cream/30 rounded-lg p-6 mb-8">
              <div className="flex items-start mb-5">
                <MapPin className="text-verandah-terracotta mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-montserrat font-semibold text-verandah-brown text-lg mb-1">Address</h3>
                  <p className="text-verandah-charcoal">
                    63-6-13, Auto Nagar, NH-65,<br />
                    Vijayawada, Andhra Pradesh 520007
                  </p>
                </div>
              </div>
              
              <div className="flex items-start mb-5">
                <Clock className="text-verandah-terracotta mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-montserrat font-semibold text-verandah-brown text-lg mb-1">Hours</h3>
                  <p className="text-verandah-charcoal">
                    Monday to Friday: 8:00 AM - 9:00 PM<br />
                    Saturday & Sunday: 9:00 AM - 10:00 PM
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="text-verandah-terracotta mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-montserrat font-semibold text-verandah-brown text-lg mb-1">Contact</h3>
                  <p className="text-verandah-charcoal">
                    Phone: +91 866 123 4567<br />
                    Email: hello@verandahcoffee.com
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4">
              <a 
                href="https://goo.gl/maps/oAYTxQXD3Yr9RA3c7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-6 bg-verandah-terracotta text-white rounded-md font-montserrat font-semibold transition-colors hover:bg-verandah-brown flex-1 text-center"
              >
                <Map size={18} />
                <span>Get Directions</span>
              </a>
              <a 
                href="tel:+918661234567"
                className="flex items-center justify-center gap-2 py-3 px-6 bg-verandah-sage text-white rounded-md font-montserrat font-semibold transition-colors hover:bg-verandah-brown flex-1 text-center"
              >
                <Phone size={18} />
                <span>Call Us</span>
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-lg overflow-hidden shadow-lg h-96">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.063510166799!2d80.6610804!3d16.5053393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35fb4157fb3203%3A0x77556804fbe4c4ee!2sVerandah%20Coffee%20Roasters%20and%20Caf%C3%A9!5e0!3m2!1sen!2sin!4v1715946689669!5m2!1sen!2sin"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
