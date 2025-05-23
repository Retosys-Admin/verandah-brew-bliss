
const About = () => {
  return (
    <section id="about" className="section-padding bg-white bg-texture-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-verandah-brown text-3xl md:text-4xl font-bold uppercase mb-4">Our Story</h2>
          <div className="w-20 h-1 bg-verandah-terracotta mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-verandah-brown text-xl md:text-2xl font-semibold mb-4">
              Rooted in Passion, Brewed to Perfection
            </h3>
            <p className="text-verandah-charcoal mb-4">
              Founded in 2018, Verandah Coffee Roasters began as a humble passion project between two coffee enthusiasts determined to bring specialty coffee culture to Vijayawada. What started as a small roastery in Auto Nagar has blossomed into the city's premier coffee destination.
            </p>
            <p className="text-verandah-charcoal mb-4">
              Our mission is simple: to celebrate the journey from bean to cup by sourcing the finest single-origin beans, roasting them with precision, and serving them with care. We work directly with farmers across India and beyond to ensure ethical sourcing and exceptional quality.
            </p>
            <p className="text-verandah-charcoal">
              Beyond great coffee, Verandah is a community hub—a place where ideas are exchanged, friendships are formed, and the city's creative pulse beats strongest. Whether you're a coffee connoisseur or just beginning your journey, our doors are always open.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg overflow-hidden h-64">
              <img 
                src="https://images.unsplash.com/photo-1611163647639-d37bbf996d09?q=80&w=1974" 
                alt="Coffee roasting process" 
                className="w-full h-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
            <div className="rounded-lg overflow-hidden h-64 transform translate-y-8">
              <img 
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070" 
                alt="Coffee beans being sorted" 
                className="w-full h-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
            <div className="rounded-lg overflow-hidden h-64 transform translate-y-[-32px]">
              <img 
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=2070" 
                alt="Coffee cupping session" 
                className="w-full h-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
            <div className="rounded-lg overflow-hidden h-64">
              <img 
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1974" 
                alt="Latte art" 
                className="w-full h-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
