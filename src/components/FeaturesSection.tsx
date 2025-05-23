
import { Card, CardContent } from "@/components/ui/card";

const FeaturesSection = () => {
  const features = [
    {
      title: "Artisan Roasted",
      description: "Our beans are carefully roasted in-house to bring out their unique flavors and aromas.",
      icon: "☕"
    },
    {
      title: "Sustainable Sourcing",
      description: "We work directly with farmers to ensure fair trade and sustainable coffee practices.",
      icon: "🌱"
    },
    {
      title: "Expert Baristas",
      description: "Our skilled baristas craft each cup with precision and passion for the perfect experience.",
      icon: "👨‍🍳"
    },
    {
      title: "Cozy Atmosphere",
      description: "Relax in our warm, inviting space designed for connection and community.",
      icon: "🏠"
    }
  ];

  return (
    <section className="section-padding bg-white">
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
              className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="text-4xl mb-4">{feature.icon}</div>
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
