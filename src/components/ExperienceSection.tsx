
import { Coffee, Award, Heart, Star } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      icon: Coffee,
      title: "Artisan Roasting",
      description: "Our master roasters craft each blend with precision, bringing out unique flavor profiles from single-origin beans sourced directly from farmers.",
      image: "https://images.unsplash.com/photo-1611163647639-d37bbf996d09?q=80&w=1974"
    },
    {
      icon: Award,
      title: "Award-Winning Blends",
      description: "Recognized for excellence in specialty coffee, our signature blends have won multiple awards at national coffee competitions.",
      image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=2070"
    },
    {
      icon: Heart,
      title: "Community Hub",
      description: "More than just a cafe, Verandah is where Vijayawada's creative minds gather, collaborate, and find inspiration over perfectly crafted coffee.",
      image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=2070"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-verandah-cream/20 to-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-verandah-terracotta/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-verandah-sage/10 rounded-full blur-2xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-0.5 bg-verandah-terracotta mr-4"></div>
            <Star className="text-verandah-terracotta" size={24} />
            <div className="w-16 h-0.5 bg-verandah-terracotta ml-4"></div>
          </div>
          <h2 className="text-verandah-brown text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            The Verandah Experience
          </h2>
          <p className="text-verandah-charcoal text-lg max-w-3xl mx-auto leading-relaxed">
            Immerse yourself in a world where every detail is crafted to perfection, 
            from the first aroma to the last sip of your coffee journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {experiences.map((experience, index) => (
            <div 
              key={index} 
              className="group relative animate-fade-in hover:scale-105 transition-all duration-500"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Image Container */}
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl mb-8">
                <img 
                  src={experience.image} 
                  alt={experience.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-verandah-brown/80 via-transparent to-transparent"></div>
                
                {/* Icon Overlay */}
                <div className="absolute bottom-6 left-6 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                  <experience.icon size={28} className="text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-verandah-brown text-2xl font-bold mb-4 font-montserrat">
                  {experience.title}
                </h3>
                <p className="text-verandah-charcoal leading-relaxed">
                  {experience.description}
                </p>
              </div>

              {/* Decorative Border */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-verandah-terracotta to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
