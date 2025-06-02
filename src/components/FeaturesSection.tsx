
import { Card, CardContent } from "@/components/ui/card";

const FeaturesSection = () => {
  const features = [
    {
      title: "Artisan Roasted",
      description: "Our beans are carefully roasted in-house to bring out their unique flavors and aromas.",
      icon: "☕",
      image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?q=80&w=1964"
    },
    {
      title: "Sustainable Sourcing",
      description: "We work directly with farmers to ensure fair trade and sustainable coffee practices.",
      icon: "🌱",
      image: "https://images.unsplash.com/photo-1587734195503-904fca47e0d9?q=80&w=1964"
    },
    {
      title: "Expert Baristas",
      description: "Our skilled baristas craft each cup with precision and passion for the perfect experience.",
      icon: "👨‍🍳",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070"
    },
    {
      title: "Cozy Atmosphere",
      description: "Relax in our warm, inviting space designed for connection and community.",
      icon: "🏠",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1947"
    }
  ];

  return (
    <section id="features" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-verandah-brown mb-4">
            Why Choose Verandah?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the difference that passion, quality, and community make in every cup we serve.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in overflow-hidden group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-verandah-brown/20 group-hover:bg-verandah-brown/10 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-4xl bg-white/90 rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                    {feature.icon}
                  </div>
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-verandah-brown mb-3 font-montserrat">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
