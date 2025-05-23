
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Auto Nagar, Vijayawada",
      text: "The best coffee experience in Vijayawada! The atmosphere is perfect for both work and relaxation.",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      location: "Benz Circle, Vijayawada",
      text: "Amazing quality and the baristas really know their craft. My go-to place for morning coffee.",
      rating: 5
    },
    {
      name: "Anitha Reddy",
      location: "Governorpet, Vijayawada",
      text: "Love the sustainable approach and the variety of options. Great place to catch up with friends!",
      rating: 5
    }
  ];

  return (
    <section className="section-padding bg-verandah-cream">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-verandah-brown mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our valued customers about their Verandah experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-bold text-verandah-brown font-montserrat">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.location}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
