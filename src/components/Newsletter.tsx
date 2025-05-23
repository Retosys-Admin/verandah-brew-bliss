
import { useState } from 'react';
import { Button } from "@/components/ui/button";

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (email && email.includes('@')) {
      // Here you would normally send this to your backend or email service
      console.log('Email submitted:', email);
      setIsSubmitted(true);
      setEmail('');
      
      // Reset the success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  return (
    <section className="bg-verandah-sage py-16">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-white text-3xl md:text-4xl font-bold uppercase mb-4">
            Join Our Coffee Community
          </h2>
          <p className="text-white/90 mb-8">
            Subscribe to our newsletter for cafe updates, brewing tips, and exclusive offers. 
            Get 10% off your first order when you sign up!
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-md border-2 border-white/20 bg-white/10 text-white placeholder:text-white/60 focus:outline-none focus:border-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button 
              type="submit" 
              className="bg-white text-verandah-brown hover:bg-verandah-cream font-montserrat font-semibold py-3 px-6"
            >
              Subscribe
            </Button>
          </form>
          
          {isSubmitted && (
            <p className="mt-4 text-white bg-verandah-terracotta/20 py-2 px-4 rounded-md inline-block">
              Thank you for subscribing! Check your inbox soon.
            </p>
          )}
          
          <p className="text-white/70 text-sm mt-4">
            We respect your privacy and will never share your information.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
