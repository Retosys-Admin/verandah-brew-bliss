
import { Coffee, Award, Users, Heart } from "lucide-react";

const TeamSection = () => {
  const team = [
    {
      name: "Arjun Mehta",
      role: "Master Roaster & Co-Founder",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070",
      description: "With 15 years of experience in specialty coffee, Arjun brings passion and precision to every roast."
    },
    {
      name: "Priya Sharma",
      role: "Head Barista & Quality Manager",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b977?q=80&w=2070",
      description: "Priya's expertise in brewing techniques ensures every cup meets our exacting standards."
    },
    {
      name: "Vikram Patel",
      role: "Community Manager & Co-Founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070",
      description: "Vikram builds connections between our cafe and the vibrant Vijayawada community."
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-verandah-sage/10 to-verandah-cream/20">
      <div className="container-custom">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-verandah-terracotta/10 border border-verandah-terracotta/20 rounded-full px-6 py-3 mb-8">
            <Users size={20} className="text-verandah-terracotta" />
            <span className="text-verandah-brown font-montserrat font-medium">
              Meet Our Team
            </span>
          </div>
          <h2 className="text-verandah-brown text-4xl md:text-5xl font-bold mb-6">
            The People Behind
            <span className="block text-transparent bg-gradient-to-r from-verandah-terracotta to-verandah-sage bg-clip-text">
              Every Perfect Cup
            </span>
          </h2>
          <p className="text-verandah-charcoal text-lg max-w-3xl mx-auto">
            Our passionate team of coffee artisans brings together decades of experience 
            and an unwavering commitment to excellence.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {team.map((member, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 animate-fade-in hover:scale-105"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-verandah-brown/60 via-transparent to-transparent"></div>
                
                {/* Floating Badge */}
                <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm rounded-full p-3 border border-white/30">
                  <Coffee size={20} className="text-white" />
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-verandah-brown text-xl font-bold mb-2 font-montserrat">
                  {member.name}
                </h3>
                <div className="text-verandah-terracotta font-medium mb-4">
                  {member.role}
                </div>
                <p className="text-verandah-charcoal leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="mt-24 grid md:grid-cols-3 gap-8">
          {[
            { icon: Coffee, title: "Quality First", description: "We never compromise on the quality of our beans or brewing process" },
            { icon: Heart, title: "Community Love", description: "Building lasting relationships with customers and local community" },
            { icon: Award, title: "Excellence", description: "Striving for perfection in every aspect of our coffee experience" }
          ].map((value, index) => (
            <div 
              key={index}
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${index * 0.2 + 0.5}s` }}
            >
              <div className="w-20 h-20 bg-verandah-terracotta/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-verandah-terracotta/20 transition-colors duration-300">
                <value.icon size={32} className="text-verandah-terracotta" />
              </div>
              <h3 className="text-verandah-brown text-xl font-bold mb-4 font-montserrat">
                {value.title}
              </h3>
              <p className="text-verandah-charcoal">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
