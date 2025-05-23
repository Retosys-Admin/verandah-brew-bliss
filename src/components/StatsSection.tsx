
const StatsSection = () => {
  const stats = [
    { number: "5000+", label: "Happy Customers" },
    { number: "50+", label: "Coffee Varieties" },
    { number: "3", label: "Years of Excellence" },
    { number: "100%", label: "Satisfaction Rate" }
  ];

  return (
    <section className="section-padding bg-verandah-brown text-white">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center animate-fade-in hover:scale-110 transition-transform duration-300"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-verandah-terracotta mb-2 font-montserrat">
                {stat.number}
              </div>
              <div className="text-verandah-cream font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
